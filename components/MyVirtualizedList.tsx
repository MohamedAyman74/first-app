import { VirtualizedList } from "react-native";
import { ThemedText } from "./ThemedText";

const data = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
];

const getItemCount = (data: []) => data.length;
const getItem = (data: any, index: string | number) => data[index];

const renderItem = ({ item }: { item: { text: string; id: number } }) => (
    <ThemedText>{item.text}</ThemedText>
);

const MyVirtualizedList = () => (
    <VirtualizedList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        getItemCount={getItemCount}
        getItem={getItem}
    />
);

export default MyVirtualizedList;
