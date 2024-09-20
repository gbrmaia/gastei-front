'use client'

import { useState, useCallback, memo } from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Ellipsis, PencilRuler, Trash2, X, Plus, Save } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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
} from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast"
import IconSelector from "./icon-selector"
import { iconsExpenseForSelectorList } from "@/lib/icons-list"

const CardOptions = memo(({ onEdit, onDelete }: { onEdit: () => void, onDelete: () => void }) => (
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
      <DropdownMenuLabel className="text-muted-foreground">Opções</DropdownMenuLabel>
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
                Essa ação não pode ser desfeita, o card será permanentemente excluido.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete}>Deletar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuGroup>
      <DropdownMenuSeparator className="mb-3" />
    </DropdownMenuContent>
  </DropdownMenu>
))

CardOptions.displayName = 'CardOptions'

export default function EditableCard() {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState("Titulo")
  const [description, setDescription] = useState("Descrição")
  const [contentList, setContentList] = useState(["Conteudo"])
  const [tempState, setTempState] = useState({ title, description, contentList })

  const toggleEdit = useCallback(() => {
    if (!isEditing) {
      setTempState({ title, description, contentList })
    }
    setIsEditing(prev => !prev)
  }, [isEditing, title, description, contentList])

  const cancelEdit = useCallback(() => {
    setTitle(tempState.title)
    setDescription(tempState.description)
    setContentList(tempState.contentList)
    setIsEditing(false)
  }, [tempState])

  const saveChanges = useCallback(() => {
    toast({
      title: "💾 Card Salvo",
      description: "As alterações foram salvas com sucesso."
    })
    setIsEditing(false)
  }, [])

  const addContentField = useCallback(() => {
    setContentList(prev => [...prev, ""])
  }, [])

  const updateContent = useCallback((index: number, value: string) => {
    setContentList(prev => {
      const newList = [...prev]
      newList[index] = value
      return newList
    })
  }, [])

  const deleteCard = useCallback(() => {
    console.log("Card deletado")
    toast({
      title: "❌ Card Deletado",
      description: "Essa ação não pode ser desfeita."
    })
  }, [])

  return (
    <Card className={`w-full max-w-lg mx-auto transition-colors duration-600 ${isEditing ? 'border border-green-700/50' : ''}`}>
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex-1 mr-4">
          {isEditing ? (
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              aria-label="Card title"
            />
          ) : (
            <CardTitle>{title}</CardTitle>
          )}
        </div>
        {!isEditing && <CardOptions onEdit={toggleEdit} onDelete={deleteCard} />}
      </CardHeader>

      <CardContent className="space-y-4">
        <IconSelector iconGroups={iconsExpenseForSelectorList} />
        {isEditing ? (
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            aria-label="Card description"
          />
        ) : (
          <p>{description}</p>
        )}

        {isEditing ? (
          <div className="space-y-2">
            {contentList.map((content, index) => (
              <Input
                key={index}
                value={content}
                onChange={(e) => updateContent(index, e.target.value)}
                placeholder={`Content item ${index + 1}`}
                aria-label={`Content item ${index + 1}`}
              />
            ))}
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
            {contentList.map((content, index) => (
              <li key={index}>{content}</li>
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
  )
}