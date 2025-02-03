import { FlatList } from "react-native";
import { ThemedText } from "./ThemedText";

const data = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
];

const renderItem = ({
    item,
}: {
    item: {
        text: string;
    };
}) => <ThemedText>{item.text}</ThemedText>;

const MyFlatList = () => (
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
    />
);

export default MyFlatList;
