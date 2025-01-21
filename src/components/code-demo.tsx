'use client'

import { useNavigate } from "react-router-dom";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { Github, GitBranch, Mail } from "lucide-react"
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
 
export function SplineSceneBasic() {
  const navigate = useNavigate();

  const handleLogin = async (provider: 'google' | 'github' | 'gitlab') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/chat`,
        },
      });
      
      if (error) {
        toast.error(`Failed to sign in with ${provider}`);
        console.error("OAuth error:", error);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error("Sign in error:", error);
    }
  };

  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="flex h-full">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            WELCOME TO HELLA THE CHAT BOT
          </h1>
          
          <div className="mt-8 flex flex-col gap-4 max-w-sm mx-auto">
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white"
              onClick={() => handleLogin('google')}
            >
              <Mail className="h-5 w-5" />
              Continue with Google
            </Button>
            
            <Button 
              variant="outline"
              className="w-full flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white"
              onClick={() => handleLogin('github')}
            >
              <Github className="h-5 w-5" />
              Continue with GitHub
            </Button>
            
            <Button 
              variant="outline"
              className="w-full flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white"
              onClick={() => handleLogin('gitlab')}
            >
              <GitBranch className="h-5 w-5" />
              Continue with Git
            </Button>
          </div>
        </div>

        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}