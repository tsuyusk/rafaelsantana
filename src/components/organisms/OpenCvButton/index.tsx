'use client'
import React, { useCallback } from "react";

import { Button } from "@/components/atoms/Button";

import { FaFile } from 'react-icons/fa'
import { data } from "@/consts/data";

export const OpenCVButton: React.FC = () => {
  const handleOpenLink = useCallback((link: string) => {
    window.open(link, 'blank')
  }, [])

  return (
    <Button onClick={() => handleOpenLink(data.cv)} size="lg" iconRight={<FaFile />}>Baixe meu curriculo</Button>
  );
}