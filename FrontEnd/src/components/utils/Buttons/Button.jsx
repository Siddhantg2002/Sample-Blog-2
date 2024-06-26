"use client";
import { useRouter } from "next/navigation";
import { Button } from "@cred/neopop-web/lib/components";

const CustomButton = ({variant, kind, size, colorMode ,path ,text}) => {
  const router = useRouter();
  return (
    <Button
      variant={variant}
      kind={kind}
      size={size}
      colorMode={colorMode}
      onClick={() => {
        router.push(`${path}`);
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
