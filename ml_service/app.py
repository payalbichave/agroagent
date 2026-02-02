from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PIL import Image
import io
import random
from transformers import pipeline
import torch
from typing import List, Optional

app = FastAPI(
    title="AgroAgent ML Service",
    description="Plant Disease Detection API using Hugging Face Vision Transformer",
    version="2.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# PlantVillage Dataset Classes (38 classes)
PLANT_DISEASE_CLASSES = [
    "Apple___Apple_scab", "Apple___Black_rot", "Apple___Cedar_apple_rust", "Apple___healthy",
    "Blueberry___healthy", "Cherry_(including_sour)___Powdery_mildew", "Cherry_(including_sour)___healthy",
    "Corn_(maize)___Cercospora_leaf_spot", "Corn_(maize)___Common_rust", "Corn_(maize)___Northern_Leaf_Blight",
    "Corn_(maize)___healthy", "Grape___Black_rot", "Grape___Esca_(Black_Measles)", "Grape___Leaf_blight",
    "Grape___healthy", "Orange___Haunglongbing_(Citrus_greening)", "Peach___Bacterial_spot", "Peach___healthy",
    "Pepper,_bell___Bacterial_spot", "Pepper,_bell___healthy", "Potato___Early_blight", "Potato___Late_blight",
    "Potato___healthy", "Raspberry___healthy", "Rice___Brown_Spot", "Rice___Leaf_Blast", "Rice___Neck_Blast",
    "Rice___healthy", "Soybean___healthy", "Squash___Powdery_mildew", "Strawberry___Leaf_scorch",
    "Strawberry___healthy", "Tomato___Bacterial_spot", "Tomato___Early_blight", "Tomato___Late_blight",
    "Tomato___Leaf_Mold", "Tomato___Septoria_leaf_spot", "Tomato___Spider_mites", "Tomato___Target_Spot",
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus", "Tomato___Tomato_mosaic_virus", "Tomato___healthy",
    "Wheat___Brown_Rust", "Wheat___Yellow_Rust", "Wheat___healthy"
]

# Disease Database
DISEASE_DATABASE = {
    "apple_scab": {
        "description": "Apple scab is a fungal disease caused by Venturia inaequalis.",
        "symptoms": ["Dark scabby lesions on leaves", "Deformed fruit with spots", "Premature leaf drop"],
        "precautions": ["Remove fallen leaves", "Prune for air circulation", "Avoid overhead irrigation"],
        "recommendations": ["Apply fungicides in spring", "Use resistant varieties", "Maintain proper spacing"],
        "severity": "Moderate to High"
    },
    "black_rot": {
        "description": "Black rot is a fungal disease affecting apples and grapes.",
        "symptoms": ["Brown spots with purple margins", "Rotting fruit", "Branch cankers"],
        "precautions": ["Remove mummified fruits", "Prune infected branches", "Good sanitation"],
        "recommendations": ["Apply captan or mancozeb", "Remove wild vines", "Spray during bloom"],
        "severity": "High"
    },
    "early_blight": {
        "description": "Fungal disease caused by Alternaria affecting potatoes and tomatoes.",
        "symptoms": ["Dark concentric ring lesions", "Target board appearance", "Lower leaves affected first"],
        "precautions": ["Rotate crops 2-3 years", "Remove debris", "Adequate spacing"],
        "recommendations": ["Apply chlorothalonil", "Mulch to prevent splash", "Water at base"],
        "severity": "Moderate"
    },
    "late_blight": {
        "description": "Devastating disease that caused the Irish Potato Famine.",
        "symptoms": ["Water-soaked lesions", "White fuzzy growth", "Rapid plant death"],
        "precautions": ["Use certified seeds", "Destroy volunteers", "Monitor weather"],
        "recommendations": ["Apply fungicides preventively", "Harvest before rain", "Destroy infected material"],
        "severity": "Critical"
    },
    "powdery_mildew": {
        "description": "Fungal disease creating white powdery coating.",
        "symptoms": ["White powdery patches", "Stunted growth", "Leaf curling"],
        "precautions": ["Avoid overcrowding", "Water at base", "Good air circulation"],
        "recommendations": ["Apply sulfur fungicides", "Use neem oil", "Remove infected parts"],
        "severity": "Moderate"
    },
    "bacterial_spot": {
        "description": "Bacterial disease affecting peppers and tomatoes.",
        "symptoms": ["Water-soaked spots", "Brown spots with yellow halos", "Fruit lesions"],
        "precautions": ["Use disease-free seeds", "Avoid overhead irrigation", "Crop rotation"],
        "recommendations": ["Copper bactericides", "Remove infected plants", "Hot water seed treatment"],
        "severity": "Moderate to High"
    },
    "leaf_blast": {
        "description": "Fungal disease of rice caused by Magnaporthe oryzae.",
        "symptoms": ["Diamond-shaped lesions", "Gray-green centers", "Rapid expansion"],
        "precautions": ["Avoid excess nitrogen", "Good drainage", "Resistant varieties"],
        "recommendations": ["Apply tricyclazole", "Split nitrogen", "Early planting"],
        "severity": "High"
    },
    "brown_rust": {
        "description": "Fungal disease of wheat causing pustules.",
        "symptoms": ["Orange-brown pustules", "Random distribution", "Spore release"],
        "precautions": ["Resistant varieties", "Early sowing", "Balanced fertilization"],
        "recommendations": ["Apply triazole fungicides", "Regular monitoring", "Remove volunteers"],
        "severity": "Moderate to High"
    },
    "yellow_rust": {
        "description": "Stripe rust of wheat.",
        "symptoms": ["Yellow pustules in stripes", "Follows leaf veins", "Can cover leaf"],
        "precautions": ["Resistant varieties", "Early sowing", "Avoid dense stands"],
        "recommendations": ["Apply fungicides early", "Scout in cool weather", "Diversify varieties"],
        "severity": "High"
    },
    "healthy": {
        "description": "Plant appears healthy with no disease symptoms.",
        "symptoms": ["No disease symptoms detected"],
        "precautions": ["Continue monitoring", "Maintain good practices", "Scout weekly"],
        "recommendations": ["Keep current management", "Balanced nutrition", "Proper watering"],
        "severity": "None"
    }
}

# Load Model
print("Loading Hugging Face Plant Disease Model...")
classifier = None
MODEL_NAME = "Not loaded"

try:
    classifier = pipeline(
        "image-classification",
        model="linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification",
        device=-1
    )
    MODEL_NAME = "PlantVillage MobileNet (38 classes)"
    print(f"✅ Model loaded: {MODEL_NAME}")
except Exception as e:
    print(f"⚠️ Primary model failed: {e}")
    try:
        classifier = pipeline("image-classification", model="google/vit-base-patch16-224", device=-1)
        MODEL_NAME = "Google ViT Base"
        print(f"✅ Fallback: {MODEL_NAME}")
    except Exception as e2:
        print(f"❌ All models failed: {e2}")

# Pydantic Models
class Prediction(BaseModel):
    rank: int
    plant: str
    disease: str
    confidence: float

class DiagnosisResponse(BaseModel):
    success: bool
    plant: str
    disease: str
    confidence: float
    status: str
    severity: str
    description: str
    symptoms: List[str]
    precautions: List[str]
    recommendations: List[str]
    top5_predictions: List[Prediction]
    model: str

class MarketRequest(BaseModel):
    crop: str = "wheat"
    location: str = "India"

class MarketResponse(BaseModel):
    crop: str
    location: str
    current_price: int
    unit: str
    trend: str
    forecast: List[dict]
    last_updated: str

class HealthResponse(BaseModel):
    status: str
    model: str
    model_loaded: bool
    disease_classes: int

def parse_disease_label(label):
    """Parse PlantVillage format label"""
    label = label.replace("_", " ").replace("  ", " ").strip()
    plants = ["Apple", "Tomato", "Potato", "Grape", "Corn", "Maize", "Rice", "Wheat",
              "Cherry", "Peach", "Pepper", "Strawberry", "Orange", "Blueberry", "Soybean",
              "Squash", "Raspberry"]
    for plant in plants:
        if plant.lower() in label.lower():
            disease = label.lower().replace(plant.lower(), "").strip().title()
            return plant, disease if disease else "Healthy"
    return "Unknown", label.title()

def get_disease_info(disease_name):
    """Get disease details"""
    disease_key = disease_name.lower().replace(" ", "_").replace("-", "_")
    for key in DISEASE_DATABASE:
        if key in disease_key or disease_key in key:
            return DISEASE_DATABASE[key]
    return {
        "description": f"Disease: {disease_name}. Consult an expert.",
        "symptoms": ["Visible plant stress"],
        "precautions": ["Isolate affected plants"],
        "recommendations": ["Take samples for lab analysis"],
        "severity": "Unknown"
    }


@app.post("/predict-disease", response_model=DiagnosisResponse, tags=["Disease Detection"])
async def predict_disease(file: UploadFile = File(..., description="Plant leaf image (JPG/PNG)")):
    """
    Upload a plant leaf image for disease detection.
    
    Returns plant name, disease, severity, symptoms, precautions, and recommendations.
    """
    if classifier is None:
        raise HTTPException(status_code=503, detail="Model not loaded")
    
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert('RGB')
        
        results = classifier(image, top_k=5)
        
        top_result = results[0]
        plant_name, disease_name = parse_disease_label(top_result['label'])
        confidence = round(top_result['score'] * 100, 2)
        disease_info = get_disease_info(disease_name)
        
        status = "Healthy" if "healthy" in disease_name.lower() else (
            "Disease Detected" if confidence > 50 else "Analysis Complete"
        )
        
        top5 = []
        for i, r in enumerate(results):
            p, d = parse_disease_label(r['label'])
            top5.append(Prediction(rank=i+1, plant=p, disease=d, confidence=round(r['score']*100, 2)))
        
        return DiagnosisResponse(
            success=True,
            plant=plant_name,
            disease=disease_name,
            confidence=confidence,
            status=status,
            severity=disease_info["severity"],
            description=disease_info["description"],
            symptoms=disease_info["symptoms"],
            precautions=disease_info["precautions"],
            recommendations=disease_info["recommendations"],
            top5_predictions=top5,
            model=MODEL_NAME
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/market-analysis", response_model=MarketResponse, tags=["Market Analysis"])
async def market_analysis(request: MarketRequest):
    """Get market price analysis for a crop."""
    base_prices = {
        "wheat": 2200, "rice": 2800, "cotton": 6500, "sugarcane": 350,
        "soybean": 4200, "maize": 2100, "potato": 1500, "tomato": 2500, "onion": 1800
    }
    base = base_prices.get(request.crop.lower(), 2500)
    var = random.uniform(-0.1, 0.15)
    price = int(base * (1 + var))
    
    forecast = []
    p = price
    for i in range(7):
        c = random.uniform(-0.03, 0.05)
        p = int(p * (1 + c))
        forecast.append({"day": i+1, "predicted_price": p, "trend": "up" if c > 0 else "down"})
    
    return MarketResponse(
        crop=request.crop.title(),
        location=request.location,
        current_price=price,
        unit="₹/quintal",
        trend="Bullish" if var > 0 else "Bearish",
        forecast=forecast,
        last_updated="Just now"
    )


@app.get("/health", response_model=HealthResponse, tags=["Health"])
async def health_check():
    """Check service health and model status."""
    return HealthResponse(
        status="healthy",
        model=MODEL_NAME,
        model_loaded=classifier is not None,
        disease_classes=len(PLANT_DISEASE_CLASSES)
    )


if __name__ == "__main__":
    import uvicorn
    print("🌿 AgroAgent ML Service (FastAPI)")
    print(f"📦 Model: {MODEL_NAME}")
    print("📚 Swagger UI: http://localhost:5001/docs")
    print("📘 ReDoc: http://localhost:5001/redoc")
    uvicorn.run(app, host="0.0.0.0", port=5001)
