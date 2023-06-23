"use client";

import { FC, useState } from "react";
import Button, { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import Icons from "./Icons";

// so we can style
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      console.log("logged in succesfully.");
    }
  };
  const loginWithGithub = async () => {
    setIsLoading(true);

    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      console.log("logged in succesfully.");
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)} {...props}>
      <Button
        variant={"outline"}
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size="sm"
        className="mt-5 w-2/4"
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>

      <Button
        variant={"outline"}
        onClick={loginWithGithub}
        isLoading={isLoading}
        size="sm"
        className="mt-2 w-2/4"
      >
        {isLoading ? null : <Icons.github className="h-5 w-5 mr-2" />}
        Github
      </Button>
      
    </div>
  );
};

export default UserAuthForm;