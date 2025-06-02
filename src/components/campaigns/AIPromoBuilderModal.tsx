
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles, ChevronLeft, ChevronRight, Check, Users } from "lucide-react";

interface AIPromoBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (message: string, audience: string, images: string[]) => void;
}

type Step = 'goal' | 'images' | 'prompts' | 'audience' | 'generate' | 'edit';

const SAMPLE_IMAGES = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop"
];

const PROMPT_OPTIONS = {
  Sale: [
    "Create urgency with limited-time offer",
    "Highlight exclusive discount for members",
    "Focus on value proposition and savings"
  ],
  Event: [
    "Build excitement for upcoming event",
    "Emphasize exclusive access and RSVP",
    "Create FOMO with limited availability"
  ],
  "Content Share": [
    "Tease valuable insights in content",
    "Highlight community benefit",
    "Create curiosity with preview"
  ]
};

const AUDIENCE_OPTIONS = [
  { id: 'all', name: 'All Members', count: 1247, description: 'Send to entire community' },
  { id: 'recent', name: 'Recent Joiners', count: 184, description: 'Members who joined in last 30 days' },
  { id: 'active', name: 'Highly Engaged', count: 573, description: 'Members with high engagement rates' },
  { id: 'vip', name: 'VIP Members', count: 89, description: 'Premium or top-tier members' },
  { id: 'inactive', name: 'Re-engagement', count: 301, description: 'Members to re-engage' }
];

export const AIPromoBuilderModal: React.FC<AIPromoBuilderModalProps> = ({
  isOpen,
  onClose,
  onSend,
}) => {
  const [currentStep, setCurrentStep] = useState<Step>('goal');
  const [goal, setGoal] = useState<string>("Sale");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");
  const [selectedAudience, setSelectedAudience] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [draftText, setDraftText] = useState("");

  const stepOrder: Step[] = ['goal', 'images', 'prompts', 'audience', 'generate', 'edit'];
  const currentStepIndex = stepOrder.indexOf(currentStep);

  const handleImageSelect = (imageUrl: string) => {
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter(img => img !== imageUrl));
    } else if (selectedImages.length < 3) {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

  const generateDraft = async () => {
    setIsGenerating(true);
    console.log(`Generating AI promo for goal: ${goal}, prompt: ${selectedPrompt}, audience: ${selectedAudience}`);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockDrafts = {
      Sale: `🔥 FLASH SALE: ${selectedPrompt.includes('urgency') ? '24HRS ONLY!' : 'EXCLUSIVE 30% OFF'} Use code SAVE30. Limited time! <FirstName>`,
      Event: `${selectedPrompt.includes('excitement') ? '🎉 BIG ANNOUNCEMENT!' : '📅 You\'re Invited!'} Join us this Saturday 7PM. RSVP now <FirstName>!`,
      "Content Share": `${selectedPrompt.includes('curiosity') ? '👀 Sneak peek:' : '✨ New post live!'} 5 game-changing tips revealed. Check it out <FirstName>`
    };
    
    const draft = mockDrafts[goal as keyof typeof mockDrafts] || mockDrafts.Sale;
    setDraftText(draft);
    setCurrentStep('edit');
    setIsGenerating(false);
  };

  const handleSend = () => {
    const finalText = draftText + "\n\nText STOP to opt out";
    console.log("Sending AI promo:", finalText, "to audience:", selectedAudience, "with images:", selectedImages);
    onSend(finalText, selectedAudience, selectedImages);
    onClose();
    resetModal();
  };

  const resetModal = () => {
    setCurrentStep('goal');
    setGoal("Sale");
    setSelectedImages([]);
    setSelectedPrompt("");
    setSelectedAudience("");
    setDraftText("");
    setIsGenerating(false);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'goal': return goal;
      case 'images': return selectedImages.length > 0;
      case 'prompts': return selectedPrompt;
      case 'audience': return selectedAudience;
      case 'generate': return true;
      case 'edit': return draftText.trim();
      default: return false;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 'goal': return 'Choose Campaign Goal';
      case 'images': return 'Select Images (up to 3)';
      case 'prompts': return 'Choose Message Style';
      case 'audience': return 'Select Audience';
      case 'generate': return 'Generate Your Promo';
      case 'edit': return 'Review & Edit';
      default: return '';
    }
  };

  const charCount = draftText.length;
  const isOverLimit = charCount > 140;
  const previewText = draftText.replace('<FirstName>', 'John');
  const selectedAudienceData = AUDIENCE_OPTIONS.find(a => a.id === selectedAudience);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            AI Promo Builder (β) - {getStepTitle()}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Controls */}
          <div className="space-y-4">
            {/* Step Progress */}
            <div className="flex items-center gap-2 mb-6">
              {stepOrder.slice(0, -1).map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                    index < currentStepIndex ? 'bg-green-500 text-white' :
                    index === currentStepIndex ? 'bg-blue-500 text-white' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {index < currentStepIndex ? <Check className="h-4 w-4" /> : index + 1}
                  </div>
                  {index < stepOrder.length - 2 && (
                    <div className={`w-8 h-1 ${index < currentStepIndex ? 'bg-green-500' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            {currentStep === 'goal' && (
              <div>
                <label className="block text-sm font-medium mb-2">Campaign Goal</label>
                <Select value={goal} onValueChange={setGoal}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sale">Sale / Promotion</SelectItem>
                    <SelectItem value="Event">Event / Announcement</SelectItem>
                    <SelectItem value="Content Share">Content / Engagement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {currentStep === 'images' && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Images ({selectedImages.length}/3)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {SAMPLE_IMAGES.map((imageUrl, index) => (
                    <div
                      key={index}
                      className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImages.includes(imageUrl) 
                          ? 'border-blue-500 ring-2 ring-blue-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleImageSelect(imageUrl)}
                    >
                      <img src={imageUrl} alt={`Option ${index + 1}`} className="w-full h-24 object-cover" />
                      {selectedImages.includes(imageUrl) && (
                        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 'prompts' && (
              <div>
                <label className="block text-sm font-medium mb-2">Message Style</label>
                <div className="space-y-2">
                  {PROMPT_OPTIONS[goal as keyof typeof PROMPT_OPTIONS]?.map((prompt, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedPrompt === prompt 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPrompt(prompt)}
                    >
                      <div className="text-sm font-medium">{prompt}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 'audience' && (
              <div>
                <label className="block text-sm font-medium mb-2">Target Audience</label>
                <div className="space-y-2">
                  {AUDIENCE_OPTIONS.map((audience) => (
                    <div
                      key={audience.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedAudience === audience.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedAudience(audience.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{audience.name}</div>
                          <div className="text-sm text-gray-600">{audience.description}</div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Users className="h-4 w-4" />
                          {audience.count.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 'generate' && (
              <div className="text-center py-8">
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Ready to generate your promo!</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Goal: {goal}</div>
                    <div>Images: {selectedImages.length} selected</div>
                    <div>Audience: {AUDIENCE_OPTIONS.find(a => a.id === selectedAudience)?.name}</div>
                  </div>
                </div>
                <Button 
                  onClick={generateDraft}
                  disabled={isGenerating}
                  className="w-full h-14 bg-black hover:bg-gray-800 text-white"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Your Promo...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Promo Message
                    </>
                  )}
                </Button>
              </div>
            )}

            {currentStep === 'edit' && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium">Edit Your Message</label>
                  <span className={`text-sm ${isOverLimit ? 'text-red-500' : 'text-gray-500'}`}>
                    {charCount}/140
                  </span>
                </div>
                <Textarea
                  value={draftText}
                  onChange={(e) => setDraftText(e.target.value)}
                  placeholder="Your AI-generated message will appear here..."
                  className={`min-h-24 ${isOverLimit ? 'border-red-500' : ''}`}
                />
                {isOverLimit && (
                  <p className="text-red-500 text-xs mt-1">
                    Message exceeds 140 character limit
                  </p>
                )}
                
                {selectedAudienceData && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Sending to: {selectedAudienceData.name}</span>
                      <span className="text-gray-500">({selectedAudienceData.count.toLocaleString()} members)</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-2 pt-4">
              {currentStepIndex > 0 && (
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(stepOrder[currentStepIndex - 1])}
                  className="flex-1"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back
                </Button>
              )}
              
              {currentStep === 'edit' ? (
                <Button 
                  onClick={handleSend}
                  disabled={isOverLimit || !draftText.trim()}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Send Campaign
                </Button>
              ) : currentStep === 'generate' ? null : (
                <Button 
                  onClick={() => {
                    if (currentStep === 'audience') {
                      setCurrentStep('generate');
                    } else {
                      setCurrentStep(stepOrder[currentStepIndex + 1]);
                    }
                  }}
                  disabled={!canProceed()}
                  className="flex-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>

            {currentStepIndex === 0 && (
              <Button variant="outline" onClick={resetModal} className="w-full">
                Start Over
              </Button>
            )}
          </div>

          {/* Right Panel - Phone Preview */}
          <div className="lg:border-l lg:pl-6">
            <label className="block text-sm font-medium mb-2">Live Preview</label>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="bg-white rounded-lg shadow-sm border max-w-xs mx-auto">
                <div className="bg-gray-100 px-4 py-2 rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Your Brand</span>
                  </div>
                </div>
                <div className="p-4 min-h-32">
                  {/* Selected Images Preview */}
                  {selectedImages.length > 0 && (
                    <div className="mb-3">
                      <div className="grid grid-cols-3 gap-1">
                        {selectedImages.map((img, index) => (
                          <img key={index} src={img} alt="" className="w-full h-12 object-cover rounded" />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Message Preview */}
                  {previewText ? (
                    <div className="space-y-2">
                      <p className="text-sm">{previewText}</p>
                      <p className="text-xs text-gray-500 border-t pt-2">
                        Text STOP to opt out
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm">
                      {currentStep === 'edit' ? 'Generate a message to see preview' : 'Your preview will appear here'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Campaign Summary */}
            {(goal || selectedImages.length > 0 || selectedAudience) && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Campaign Summary</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  {goal && <div>• Goal: {goal}</div>}
                  {selectedImages.length > 0 && <div>• Images: {selectedImages.length} selected</div>}
                  {selectedPrompt && <div>• Style: {selectedPrompt.slice(0, 30)}...</div>}
                  {selectedAudience && <div>• Audience: {AUDIENCE_OPTIONS.find(a => a.id === selectedAudience)?.name}</div>}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
