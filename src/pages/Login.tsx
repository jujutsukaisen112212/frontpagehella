import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, GitBranch, Mail } from "lucide-react";

const Login = () => {
  const handleGoogleLogin = () => {
    console.log('Implementing Google login...');
  };

  const handleGithubLogin = () => {
    console.log('Implementing Github login...');
  };

  const handleGitLogin = () => {
    console.log('Implementing Git login...');
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-100">
      <Card className="w-full max-w-md mx-auto bg-black/[0.96] p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        <div className="flex flex-col gap-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white"
            onClick={handleGoogleLogin}
          >
            <Mail className="h-5 w-5" />
            Continue with Google
          </Button>
          
          <Button 
            variant="outline"
            className="w-full flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white"
            onClick={handleGithubLogin}
          >
            <Github className="h-5 w-5" />
            Continue with GitHub
          </Button>
          
          <Button 
            variant="outline"
            className="w-full flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white"
            onClick={handleGitLogin}
          >
            <GitBranch className="h-5 w-5" />
            Continue with Git
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;