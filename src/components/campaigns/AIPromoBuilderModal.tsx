
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Send, 
  Upload,
  Users,
  MessageSquare,
  Image as ImageIcon
} from "lucide-react";

interface AIPromoBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (message: string, audience: string, images: string[]) => void;
}

type Step = 'goal' | 'images' | 'style' | 'audience' | 'preview';

const stepLabels = {
  goal: 'Goal',
  images: 'Images',
  style: 'Style',
  audience: 'Audience',
  preview: 'Preview & Send'
};

export const AIPromoBuilderModal: React.FC<AIPromoBuilderModalProps> = ({ 
  isOpen, 
  onClose, 
  onSend 
}) => {
  const [currentStep, setCurrentStep] = useState<Step>('goal');
  const [goal, setGoal] = useState('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [messageStyle, setMessageStyle] = useState('');
  const [audience, setAudience] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const steps: Step[] = ['goal', 'images', 'style', 'audience', 'preview'];
  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const mockImages = [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300',
    'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=300',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300',
    'https://images.unsplash.com/photo-1525904097878-94fb15835963?w=300',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300'
  ];

  const handleImageSelect = (imageUrl: string) => {
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter(img => img !== imageUrl));
    } else if (selectedImages.length < 3) {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

  const generateMessage = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const messages = {
      sale: "🔥 FLASH SALE! Get 40% off everything today only. Premium quality, unbeatable prices. Shop now before it's gone! Use code: FLASH40",
      event: "🎉 You're invited! Join us for an exclusive event this Saturday. Limited spots available. Reserve yours now and experience something amazing!",
      content: "📱 New content just dropped! Check out our latest release featuring behind-the-scenes content. Don't miss out on this exclusive look!"
    };
    
    setGeneratedMessage(messages[goal as keyof typeof messages] || "Special offer just for you! Don't miss out on this amazing opportunity.");
    setIsGenerating(false);
  };

  const handleNext = async () => {
    if (currentStep === 'style' && !generatedMessage) {
      await generateMessage();
    }
    
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex]);
    }
  };

  const handleBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex]);
    }
  };

  const handleSend = () => {
    onSend(generatedMessage, audience, selectedImages);
    onClose();
    // Reset form
    setCurrentStep('goal');
    setGoal('');
    setSelectedImages([]);
    setMessageStyle('');
    setAudience('');
    setGeneratedMessage('');
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'goal': return goal !== '';
      case 'images': return selectedImages.length > 0;
      case 'style': return messageStyle !== '';
      case 'audience': return audience !== '';
      case 'preview': return generatedMessage !== '';
      default: return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'goal':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">What's your campaign goal?</h3>
              <p className="text-sm text-muted-foreground">Choose the main objective for this promotional message.</p>
            </div>
            
            <Select value={goal} onValueChange={setGoal}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your campaign goal" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border">
                <SelectItem value="sale" className="text-foreground hover:bg-accent">💰 Drive Sales - Promote products or offers</SelectItem>
                <SelectItem value="event" className="text-foreground hover:bg-accent">🎉 Promote Event - Announce upcoming events</SelectItem>
                <SelectItem value="content" className="text-foreground hover:bg-accent">📱 Share Content - Drive engagement with content</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );

      case 'images':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <ImageIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Select up to 3 images</h3>
              <p className="text-sm text-muted-foreground">Choose images that best represent your campaign. Selected: {selectedImages.length}/3</p>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {mockImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImages.includes(imageUrl) 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-border hover:border-accent-foreground'
                  }`}
                  onClick={() => handleImageSelect(imageUrl)}
                >
                  <img 
                    src={imageUrl} 
                    alt={`Option ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                  {selectedImages.includes(imageUrl) && (
                    <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {selectedImages.indexOf(imageUrl) + 1}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full border-dashed">
              <Upload className="h-4 w-4 mr-2" />
              Upload Custom Images
            </Button>
          </div>
        );

      case 'style':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Choose your message style</h3>
              <p className="text-sm text-muted-foreground">Select the tone and style that matches your brand voice.</p>
            </div>
            
            <RadioGroup value={messageStyle} onValueChange={setMessageStyle} className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-accent">
                <RadioGroupItem value="urgent" id="urgent" />
                <Label htmlFor="urgent" className="flex-1 cursor-pointer text-foreground">
                  <div className="font-medium">Urgent & Exciting</div>
                  <div className="text-sm text-muted-foreground">High energy, action-driven language</div>
                </Label>
              </div>
              
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-accent">
                <RadioGroupItem value="friendly" id="friendly" />
                <Label htmlFor="friendly" className="flex-1 cursor-pointer text-foreground">
                  <div className="font-medium">Friendly & Casual</div>
                  <div className="text-sm text-muted-foreground">Conversational and approachable tone</div>
                </Label>
              </div>
              
              <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-accent">
                <RadioGroupItem value="professional" id="professional" />
                <Label htmlFor="professional" className="flex-1 cursor-pointer text-foreground">
                  <div className="font-medium">Professional & Polished</div>
                  <div className="text-sm text-muted-foreground">Formal and sophisticated messaging</div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 'audience':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Select your audience</h3>
              <p className="text-sm text-muted-foreground">Choose who should receive this promotional message.</p>
            </div>
            
            <Select value={audience} onValueChange={setAudience}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select audience segment" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border">
                <SelectItem value="all" className="text-foreground hover:bg-accent">📱 All Subscribers (12,458)</SelectItem>
                <SelectItem value="active" className="text-foreground hover:bg-accent">🔥 Active Users (8,234)</SelectItem>
                <SelectItem value="recent" className="text-foreground hover:bg-accent">🆕 Recent Signups (2,156)</SelectItem>
                <SelectItem value="vip" className="text-foreground hover:bg-accent">⭐ VIP Customers (892)</SelectItem>
                <SelectItem value="custom" className="text-foreground hover:bg-accent">🎯 Custom Segment</SelectItem>
              </SelectContent>
            </Select>
            
            {audience === 'custom' && (
              <div className="space-y-3">
                <Label htmlFor="custom-audience" className="text-foreground">Define custom audience</Label>
                <Input 
                  id="custom-audience"
                  placeholder="e.g., Users who purchased in last 30 days"
                  className="bg-background text-foreground"
                />
              </div>
            )}
          </div>
        );

      case 'preview':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Send className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Preview & Send</h3>
              <p className="text-sm text-muted-foreground">Review your message and make final adjustments before sending.</p>
            </div>
            
            {isGenerating ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center gap-2 text-muted-foreground">
                  <Sparkles className="h-5 w-5 animate-spin" />
                  Generating your perfect message...
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="message" className="text-foreground">Your Generated Message</Label>
                  <Textarea
                    id="message"
                    value={generatedMessage}
                    onChange={(e) => setGeneratedMessage(e.target.value)}
                    className="mt-2 min-h-[100px] bg-background text-foreground"
                    placeholder="Your AI-generated message will appear here..."
                  />
                  <div className="text-right text-sm text-muted-foreground mt-1">
                    {generatedMessage.length}/160 characters
                  </div>
                </div>
                
                <div className="bg-accent/50 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Campaign Summary</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Goal: {goal}</div>
                    <div>Images: {selectedImages.length} selected</div>
                    <div>Style: {messageStyle}</div>
                    <div>Audience: {audience}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <Sparkles className="h-5 w-5 text-blue-500" />
            AI Promo Builder (β)
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {currentStepIndex + 1} of {steps.length}</span>
              <span>{stepLabels[currentStep]}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <Separator />
          
          {/* Step Content */}
          {renderStepContent()}
          
          <Separator />
          
          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStepIndex === 0}
              className="border-border text-foreground hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            
            {currentStep === 'preview' ? (
              <Button
                onClick={handleSend}
                disabled={!canProceed() || isGenerating}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Campaign
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!canProceed() || isGenerating}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
