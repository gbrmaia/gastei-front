import {
    Card,
    CardHeader,
    CardBody,
    Box,
    Heading,
    Stack,
    StackDivider,
    Text,
    Editable,
    EditableInput,
    EditablePreview,
    IconButton,
    Tooltip,
    HStack,
} from '@chakra-ui/react';
import InputDespesaEditable from '../input/inputs';
import { FaPlus } from "react-icons/fa";

export default function CardDespesas() {
    return (
        <Card width='100%' color={'#252627'}>
            <CardHeader>
                <HStack>
                    <Editable defaultValue='Despesa fixa'>
                        <EditablePreview w="100%" maxW="150px" />
                        <EditableInput w="100%" maxW="150px" />
                    </Editable>
                    <Box marginLeft={65}>
                        <Tooltip label='Adicionar despesa' placement='left' hasArrow>
                            <IconButton isRound
                                colorScheme='green'
                                aria-label='adicionar despesa'
                                icon={<FaPlus />}
                                size={'xs'}
                                position="absolute"
                                top="26px"
                                right="26px"
                            />
                        </Tooltip>
                    </Box>
                </HStack>
            </CardHeader>
            <CardBody marginTop={-5}>
                <Stack divider={<StackDivider />} spacing='3'>
                    <Box>
                        <InputDespesaEditable defaultValue="Despesa Padrão" maxLength={30} />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}
