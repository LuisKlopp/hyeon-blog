"use client";

import React, {
  useEffect,
  useState,
} from "react";

import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  elementId: string;
}

const Portal: React.FC<Props> = ({
  children,
  elementId,
}: Props): React.ReactNode => {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const element =
    typeof window !== "undefined" &&
    document.getElementById(elementId);

  const portal =
    element &&
    (createPortal(
      <div>{children}</div>,
      element,
    ) as React.ReactNode);

  if (!portal) {
    return null;
  }

  return mounted ? portal : null;
};

export default Portal;
