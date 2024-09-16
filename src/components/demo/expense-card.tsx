"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Ellipsis, PencilRuler, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";

export default function EditableCard() {
  // Estados para edição
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Card Title");
  const [description, setDescription] = useState("Card Description");
  const [contentList, setContentList] = useState(["Card Content"]);

  // Função para alternar entre os modos de visualização e edição
  const toggleEdit = () => setIsEditing(!isEditing);

  // Função para salvar as edições
  const saveChanges = () => {
    setIsEditing(false);
  };

  // Função para adicionar mais campos de conteúdo
  const addContentField = () => {
    setContentList([...contentList, ""]);
  };

  // Função para atualizar o conteúdo individual
  const updateContent = (index: number, value: string) => {
    const updatedContentList = [...contentList];
    updatedContentList[index] = value;
    setContentList(updatedContentList);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          {isEditing ? (
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          ) : (
            <CardTitle>{title}</CardTitle>
          )}
        </div>
        <div>
          <DropdownMenu>
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} size={"icon"}>
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom">Opções</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-xs leading-none text-muted-foreground">
                    Opções
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className="hover:cursor-pointer"
                  onClick={() => {
                    toggleEdit();
                  }}
                >
                  <PencilRuler className="size-4 mr-3 text-muted-foreground" />{" "}
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:cursor-pointer"
                  onClick={() => {
                    toggleEdit();
                  }}
                >
                  <Trash2 className="size-4 mr-3 text-muted-foreground" />{" "}
                  Apagar
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => {}}
              >
                
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent>
        {isEditing ? (
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p>{description}</p>
        )}

        {isEditing ? (
          <div>
            {contentList.map((content, index) => (
              <Input
                key={index}
                value={content}
                onChange={(e) => updateContent(index, e.target.value)}
                className="my-2"
              />
            ))}
            <Button
              onClick={addContentField}
              variant="outline"
              className="mt-2"
            >
              +
            </Button>
          </div>
        ) : (
          <div>
            {contentList.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter>
        {isEditing ? <Button onClick={saveChanges}>Salvar</Button> : ""}
      </CardFooter>
    </Card>
  );
}
