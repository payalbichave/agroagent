import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, MicOff, Loader2, Languages } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Language = "en-US" | "hi-IN";

interface VoiceSearchBarProps {
    className?: string;
}

export function VoiceSearchBar({ className = "" }: VoiceSearchBarProps) {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [language, setLanguage] = useState<Language>("en-US");
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
    const { toast } = useToast();

    useEffect(() => {
        // Check if browser supports Speech Recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            toast({
                title: "Not Supported",
                description: "Your browser doesn't support voice recognition. Please use Chrome or Edge.",
                variant: "destructive",
            });
            return;
        }

        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = false;
        recognitionInstance.interimResults = true;
        recognitionInstance.lang = language;

        recognitionInstance.onresult = (event) => {
            const current = event.resultIndex;
            const transcriptResult = event.results[current][0].transcript;
            setTranscript(transcriptResult);

            // If final result, fetch answer
            if (event.results[current].isFinal) {
                fetchAnswer(transcriptResult);
            }
        };

        recognitionInstance.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            setIsListening(false);

            let errorMessage = "An error occurred during voice recognition.";
            if (event.error === "not-allowed") {
                errorMessage = "Microphone access denied. Please allow microphone permissions.";
            } else if (event.error === "no-speech") {
                errorMessage = "No speech detected. Please try again.";
            }

            toast({
                title: "Error",
                description: errorMessage,
                variant: "destructive",
            });
        };

        recognitionInstance.onend = () => {
            setIsListening(false);
        };

        setRecognition(recognitionInstance);

        return () => {
            if (recognitionInstance) {
                recognitionInstance.stop();
            }
        };
    }, [language, toast]);

    const toggleListening = () => {
        if (!recognition) {
            toast({
                title: "Not Available",
                description: "Voice recognition is not available.",
                variant: "destructive",
            });
            return;
        }

        if (isListening) {
            recognition.stop();
            setIsListening(false);
        } else {
            setTranscript("");
            setResponse("");
            recognition.lang = language;
            recognition.start();
            setIsListening(true);

            toast({
                title: "Listening...",
                description: `Speak in ${language === "hi-IN" ? "Hindi" : "English"}`,
            });
        }
    };

    const toggleLanguage = () => {
        const newLang: Language = language === "en-US" ? "hi-IN" : "en-US";
        setLanguage(newLang);

        toast({
            title: "Language Changed",
            description: `Now listening in ${newLang === "hi-IN" ? "Hindi" : "English"}`,
        });
    };

    const fetchAnswer = async (query: string) => {
        if (!query.trim()) return;

        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

            if (!apiKey) {
                throw new Error("OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your .env file.");
            }

            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: `You are an expert agricultural assistant helping farmers with their queries. 
              Provide practical, actionable advice for farming in India. 
              Keep responses concise but informative (2-3 sentences).
              If the query is in Hindi, you may respond in Hindi as well.
              Focus on: crop management, pest control, fertilizers, irrigation, soil health, and market prices.`,
                        },
                        {
                            role: "user",
                            content: query,
                        },
                    ],
                    max_tokens: 200,
                    temperature: 0.7,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
            }

            const data = await response.json();
            const answer = data.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";

            setResponse(answer);

            toast({
                title: "Answer Ready",
                description: "AI has generated a response to your query.",
            });

        } catch (error) {
            console.error("Error fetching answer:", error);

            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to get answer. Please try again.",
                variant: "destructive",
            });

            setResponse("Failed to fetch answer. Please check your API key and try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleManualSubmit = () => {
        if (transcript.trim()) {
            fetchAnswer(transcript);
        }
    };

    return (
        <div className={`space-y-3 ${className}`}>
            <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <Input
                        value={transcript}
                        onChange={(e) => setTranscript(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
                        placeholder={language === "hi-IN" ? "अपना सवाल बोलें या टाइप करें..." : "Speak or type your question..."}
                        className="pr-24"
                        disabled={isListening || isLoading}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <Button
                            type="button"
                            size="icon"
                            variant="ghost"
                            onClick={toggleLanguage}
                            className="h-8 w-8"
                            title={`Switch to ${language === "hi-IN" ? "English" : "Hindi"}`}
                        >
                            <Languages className="w-4 h-4" />
                        </Button>
                        <Button
                            type="button"
                            size="icon"
                            variant={isListening ? "destructive" : "default"}
                            onClick={toggleListening}
                            disabled={isLoading}
                            className={`h-8 w-8 ${isListening ? "animate-pulse" : ""}`}
                            title="Voice Search"
                        >
                            {isListening ? (
                                <MicOff className="w-4 h-4" />
                            ) : (
                                <Mic className="w-4 h-4" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {(transcript || response) && (
                <Card>
                    <CardContent className="pt-4 space-y-3">
                        {transcript && (
                            <div>
                                <p className="text-xs font-medium text-muted-foreground mb-1">Your Query:</p>
                                <p className="text-sm text-foreground">{transcript}</p>
                            </div>
                        )}

                        {isLoading && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Getting answer from AI...</span>
                            </div>
                        )}

                        {response && !isLoading && (
                            <div>
                                <p className="text-xs font-medium text-muted-foreground mb-1">AI Response:</p>
                                <p className="text-sm text-foreground leading-relaxed">{response}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

// TypeScript declarations for Web Speech API
declare global {
    interface Window {
        SpeechRecognition: typeof SpeechRecognition;
        webkitSpeechRecognition: typeof SpeechRecognition;
    }
}

interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onresult: (event: SpeechRecognitionEvent) => void;
    onerror: (event: SpeechRecognitionErrorEvent) => void;
    onend: () => void;
    start: () => void;
    stop: () => void;
}

interface SpeechRecognitionEvent extends Event {
    resultIndex: number;
    results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
    length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
    isFinal: boolean;
    length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
    error: string;
    message: string;
}

declare var SpeechRecognition: {
    prototype: SpeechRecognition;
    new(): SpeechRecognition;
};
