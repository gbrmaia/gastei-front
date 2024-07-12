import { useState, useEffect } from "react";
import { Box, Editable, EditableInput, EditablePreview, HStack, Text, Spinner } from "@chakra-ui/react";
import { useSaldo } from "../providers/saldocontext";

interface InputDespesaEditableProps {
  defaultValue?: string;
  maxLength: number;
}

export default function InputDespesaEditable({ defaultValue = "", maxLength }: InputDespesaEditableProps) {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (newValue: string) => {
    if (newValue.length <= maxLength) {
      setValue(newValue);
    }
  };

  const { saldo, loading } = useSaldo(); // Supondo que o `useSaldo` também fornece um estado de carregamento
  const [editableValue, setEditableValue] = useState<string>('');

  useEffect(() => {
    if (saldo !== null) {
      setEditableValue(saldo.toString());
    }
  }, [saldo]);

  return (
    <HStack>
      <Box w={'70%'}>
        <Editable value={value} onChange={handleChange}>
          <EditablePreview whiteSpace="pre-wrap" />
          <EditableInput />
        </Editable>
      </Box>
      <Text>
        R$
      </Text>
      <Box w={'30%'}>
        {loading ? (
          <Spinner size='xs' color='green.500' ml={2} />
        ) : (
          <Editable
            value={editableValue}
            onChange={(nextValue) => setEditableValue(nextValue)}
          >
            <EditablePreview w="100%" maxW="100px" />
            <EditableInput w="100%" maxW="100px" inputMode="numeric"/>
          </Editable>
        )}
      </Box>
    </HStack>
  );
}
