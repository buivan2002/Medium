import React, { useEffect, useState } from 'react';
import { Table, TextInput, Button, Group, Pagination, Box, ScrollArea, Text, Switch, Flex } from '@mantine/core';
import { getAdminData } from '@/app/api/v1/PageAdmin';
import { Stores } from '@/app/schema/stat';
import UserModal from './ModalCreatUser';

const UserManager = () => {
  const [elements, setElements] = useState<Stores[] | undefined>(undefined);
      const [currentPage, setCurrentPage] = useState(1);  // Trang hiện tại
      const rowsPerPage = 5;
      
      useEffect(() => {
        const fetchData = async () => {
          console.log("Fetching data...");
          try {
            const data = await getAdminData({ type: 'sub' }, true);
            if (data?.user) {
              // Ép kiểu dữ liệu nếu bạn chắc chắn đây là users[]
              setElements(data.user as Stores[]);
            }
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        };
        fetchData();
      }, []);
      

  // Tính toán số trang
  const totalPages = elements ? Math.ceil(elements.length / rowsPerPage) : 0;
  
  // Lấy dữ liệu hiển thị theo từng trang
  const currentData = elements ? elements.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage) : [];
  
  // Render các dòng cho bảng
  const rows = currentData.map((element) => {
    if (element && element.username) {
      return (
        <Table.Tr key={element.username}>
          <Table.Td>{element.managerId}</Table.Td>
          <Table.Td>{element.name}</Table.Td>
          <Table.Td>{element.phone}</Table.Td>
          <Table.Td>{element.address}</Table.Td>
          <Table.Td>{element.firstName}</Table.Td>
          <Table.Td>{element.firstName}</Table.Td>
          <Table.Td> Đại lý cấp {element.level}</Table.Td>
          <Table.Td>
            <Switch
              size="md"
              checked={element.active}
              onLabel="ON"
              offLabel="OFF"
            />
          </Table.Td>
        </Table.Tr>
      );
    } else {
      return null;
    }
  });
  
  
  return (
    <Box>
    <Flex justify="space-between" align="center" p="lg">
                 <Text fw={700} fz="xl" c="black">
                   Danh Sách Cửa Hàng 
                 </Text>
         
                 <UserModal />
               </Flex>

        <Group mb="lg" p="lg" align="center" bg="#fff">
            {["Tài Khoản", "Họ và Tên", "Địa chỉ", "Email"].map((placeholder) => (
                <TextInput
                key={placeholder}
                placeholder={placeholder}
                styles={{
                    input: {
                    backgroundColor: '#fff',
                    color: '#000',
                    },
                }}
                />
            ))}
            <Button>Tìm kiếm</Button>
            </Group>

      {/* Bảng */}
      <ScrollArea>
        <Table c="black">
          <Table.Thead>
          <Table.Tr>
            <Table.Th>Mã Cửa Hàng</Table.Th>
            <Table.Th>Tên Cửa Hàng</Table.Th>
            <Table.Th>Số Điện Thoại</Table.Th>
            <Table.Th>Địa Chỉ</Table.Th>
            <Table.Th>Chủ Cửa Hàng</Table.Th>
            <Table.Th>Chủ Đại Lý</Table.Th>
            <Table.Th>Cấp đại lý</Table.Th>
            <Table.Th>Trạng thái</Table.Th>
            <Table.Th>Tùy Chọn</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>

      {/* Phân trang */}
      <Group mt="lg">
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={(page) => setCurrentPage(page)} 
        />
      </Group>
    </Box>
  );
};

export default UserManager;
