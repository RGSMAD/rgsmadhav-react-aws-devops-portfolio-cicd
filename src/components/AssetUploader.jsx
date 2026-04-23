import { useEffect, useRef, useState } from "react";
import { Upload, X, ImageIcon, FileText, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const PIC_KEY = "rgsm:profile_pic";
const RESUME_KEY = "rgsm:resume_pdf";
const RESUME_NAME_KEY = "rgsm:resume_name";

const readFileAsDataURL = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const AssetUploader = () => {
  const [open, setOpen] = useState(false);
  const [hasPic, setHasPic] = useState(false);
  const [hasResume, setHasResume] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const picRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    setHasPic(!!localStorage.getItem(PIC_KEY));
    setHasResume(!!localStorage.getItem(RESUME_KEY));
    setResumeName(localStorage.getItem(RESUME_NAME_KEY) || "");
  }, [open]);

  const handlePic = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast({ title: "Invalid file", description: "Please upload an image.", variant: "destructive" });
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      toast({ title: "Image too large", description: "Max 4MB.", variant: "destructive" });
      return;
    }
    const dataUrl = await readFileAsDataURL(file);
    localStorage.setItem(PIC_KEY, dataUrl);
    setHasPic(true);
    window.dispatchEvent(new Event("rgsm:assets-updated"));
    toast({ title: "Profile picture updated" });
  };

  const handleResume = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast({ title: "Invalid file", description: "Please upload a PDF.", variant: "destructive" });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "PDF too large", description: "Max 5MB.", variant: "destructive" });
      return;
    }
    const dataUrl = await readFileAsDataURL(file);
    localStorage.setItem(RESUME_KEY, dataUrl);
    localStorage.setItem(RESUME_NAME_KEY, file.name);
    setHasResume(true);
    setResumeName(file.name);
    window.dispatchEvent(new Event("rgsm:assets-updated"));
    toast({ title: "Resume uploaded", description: file.name });
  };

  const clearPic = () => {
    localStorage.removeItem(PIC_KEY);
    setHasPic(false);
    window.dispatchEvent(new Event("rgsm:assets-updated"));
  };
  const clearResume = () => {
    localStorage.removeItem(RESUME_KEY);
    localStorage.removeItem(RESUME_NAME_KEY);
    setHasResume(false);
    setResumeName("");
    window.dispatchEvent(new Event("rgsm:assets-updated"));
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-cta shadow-cta hover:scale-110 transition-transform flex items-center justify-center text-accent-foreground"
        aria-label="Upload assets"
        title="Upload your photo & resume"
      >
        <Upload className="w-5 h-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/70 backdrop-blur-sm animate-fade-in">
          <div className="glass-card rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-secondary"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-display font-bold text-xl mb-1">Upload your assets</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Files are stored locally in your browser. Only you see them on this device.
            </p>

            <div className="space-y-4">
              {/* Profile picture */}
              <div className="p-4 rounded-xl border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-sm">Profile picture</span>
                  </div>
                  {hasPic && (
                    <span className="inline-flex items-center gap-1 text-xs text-accent">
                      <Check className="w-3 h-3" /> Active
                    </span>
                  )}
                </div>
                <input
                  ref={picRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePic}
                />
                <div className="flex gap-2">
                  <Button size="sm" variant="hero" onClick={() => picRef.current?.click()}>
                    Choose image
                  </Button>
                  {hasPic && (
                    <Button size="sm" variant="outline" onClick={clearPic}>
                      Remove
                    </Button>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground mt-2">PNG/JPG, up to 4MB.</p>
              </div>

              {/* Resume */}
              <div className="p-4 rounded-xl border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-sm">Resume (PDF)</span>
                  </div>
                  {hasResume && (
                    <span className="inline-flex items-center gap-1 text-xs text-accent">
                      <Check className="w-3 h-3" /> Active
                    </span>
                  )}
                </div>
                {hasResume && resumeName && (
                  <p className="text-xs text-foreground/80 mb-2 truncate">{resumeName}</p>
                )}
                <input
                  ref={resumeRef}
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={handleResume}
                />
                <div className="flex gap-2">
                  <Button size="sm" variant="hero" onClick={() => resumeRef.current?.click()}>
                    Choose PDF
                  </Button>
                  {hasResume && (
                    <Button size="sm" variant="outline" onClick={clearResume}>
                      Remove
                    </Button>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground mt-2">PDF, up to 5MB.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssetUploader;
