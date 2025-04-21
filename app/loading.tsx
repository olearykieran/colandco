import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-colco-cyan mx-auto" />
        <p className="mt-2 text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}