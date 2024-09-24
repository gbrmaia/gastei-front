'use client'

import { useState, useCallback, memo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Ellipsis, PencilRuler, Trash2, X, Plus, Save } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import IconSelector from "./icon-selector";
import { iconsExpenseForSelectorList } from "@/lib/icons-list";
import { Separator } from "../ui/separator";
import React from "react";

const CardOptions = memo(
  ({ onEdit, onDelete }: { onEdit: () => void; onDelete: () => void }) => (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Opções do card">
                <Ellipsis className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>Opções</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="text-muted-foreground select-none">
          Opções
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={onEdit}>
            <PencilRuler className="text-muted-foreground mr-2 h-4 w-4" /> Editar
          </DropdownMenuItem>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
                <Trash2 className="text-muted-foreground mr-2 h-4 w-4" /> Deletar
              </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Essa ação não pode ser desfeita, o card será permanentemente
                  excluído.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete}>
                  Deletar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="mb-3" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
);

CardOptions.displayName = "CardOptions";

export default function EditableCard() {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Título");
  const [description, setDescription] = useState("Descrição");
  const [contentList, setContentList] = useState([
    { icon: "", content: "Conteúdo" },
  ]);
  const [tempState, setTempState] = useState({
    title,
    description,
    contentList,
  });

  const toggleEdit = useCallback(() => {
    if (!isEditing) {
      setTempState({ title, description, contentList });
    }
    setIsEditing((prev) => !prev);
  }, [isEditing, title, description, contentList]);

  const cancelEdit = useCallback(() => {
    setTitle(tempState.title);
    setDescription(tempState.description);
    setContentList(tempState.contentList);
    setIsEditing(false);
  }, [tempState]);

  const saveChanges = useCallback(() => {
    toast({
      title: "💾 Card Salvo",
      description: "As alterações foram salvas com sucesso.",
    });
    setIsEditing(false);
  }, [toast]);

  const addContentField = useCallback(() => {
    setContentList((prev) => [...prev, { icon: "", content: "" }]);
  }, []);

  const updateContent = useCallback((index: number, value: string) => {
    setContentList((prev) => {
      const newList = [...prev];
      newList[index] = { ...newList[index], content: value };
      return newList;
    });
  }, []);

  const updateIcon = useCallback((index: number, icon: string) => {
    setContentList((prev) => {
      const newList = [...prev];
      newList[index] = { ...newList[index], icon };
      return newList;
    });
  }, []);

  const deleteCard = useCallback(() => {
    console.log("Card deletado");
    toast({
      title: "❌ Card Deletado",
      description: "Essa ação não pode ser desfeita.",
    });
  }, [toast]);

  return (
    <Card
      className={`w-full max-w-lg mx-auto transition-colors duration-600 ${
        isEditing ? "border border-green-700/50" : ""
      }`}
    >
      <CardHeader className="">
        <div className="flex flex-row justify-between items-center mr-4">
          {isEditing ? (
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Insira um título"
              aria-label="Título do card"
            />
          ) : (
            <CardTitle className="text-lg">{title}</CardTitle>
          )}
          {!isEditing && (
            <CardOptions onEdit={toggleEdit} onDelete={deleteCard} />
          )}
        </div>
        {isEditing ? (
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Insira uma descrição"
            aria-label="Descrição do card"
          />
        ) : (
          <CardDescription className="text-sm">{description}</CardDescription>
        )}
        <Separator />
      </CardHeader>

      <CardContent className="space-y-4">
        {isEditing ? (
          <div className="space-y-2">
            <div>
              {contentList.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <IconSelector
                    iconGroups={iconsExpenseForSelectorList}
                    selectedIcon={item.icon}
                    onIconSelect={(icon) => updateIcon(index, icon)}
                  />
                  <Input
                    value={item.content}
                    onChange={(e) => updateContent(index, e.target.value)}
                    placeholder={`Despesa ${index + 1}`}
                    aria-label={`Despesa ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <Button
              onClick={addContentField}
              variant="outline"
              size="sm"
              className="w-full"
            >
              <Plus className="mr-2 h-4 w-4" /> Adicionar Despesa
            </Button>
          </div>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {contentList.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                {item.icon && (
                  <span className="inline-block">
                    {React.createElement(
                      iconsExpenseForSelectorList
                        .flatMap((group) => group.icons)
                        .find((icon) => icon.value === item.icon)?.icon,
                      { className: "h-4 w-4" }
                    )}
                  </span>
                )}
                <span>{item.content}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="flex justify-end space-x-2">
        {isEditing && (
          <>
            <Button onClick={cancelEdit} variant="outline">
              <X className="mr-2 h-4 w-4" /> Cancelar
            </Button>
            <Button onClick={saveChanges}>
              <Save className="mr-2 h-4 w-4" /> Salvar
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
