import { Avatar, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Text, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { useUsers } from '../hooks/useUsers'


export const TablaUsers = () => {

    const { users } = useUsers();

    return (
        <><TableContainer>
            <Table>
                <TableCaption>Tabla de Usuarios</TableCaption>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Email</Th>
                        <Th>Nombre</Th>
                        <Th>Avatar</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {
                        users.map(user => (
                            <Tr key={user.email}>
                                <Th>{user.id}</Th>
                                <Th>{user.email}</Th>
                                <Th>{user.first_name}{" "}{user.last_name}</Th>
                                <Th><WrapItem>
                                    <Avatar size='xs'
                                    src={user.avatar}
                                    alt={user.last_name}/>
                                    </WrapItem>
                                </Th>
                            </Tr>
                        ))
                    }



                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Email</Th>
                        <Th>Nombre</Th>
                        <Th>Avatar</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer></>
    )
}
