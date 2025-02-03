import React, { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { useCallback, useState } from "react";
import {
    Button,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function Index() {
    const [value, setValue] = useState<string>("");
    const [data, setData] = useState();

    const handleFetch = useCallback(() => {
        axios.get("https://swapi.dev/api/people/1").then((res) => {
            setData(res.data);
        });
    }, []);

    const handlePress = useCallback((): void => {
        if (value) console.error(value, "(is it a false error?)");
        alert("Try tapping on your text");
    }, [value]);

    // const handleChange = useCallback(
    //     (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    //         setValue(e.nativeEvent.text);
    //     },
    //     [setValue]
    // );

    const handleChangeText = useCallback(
        (text: string): void => {
            setValue(text);
        },
        [setValue]
    );

    const handleReset = useCallback((): void => {
        setValue("");
    }, [setValue]);

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#000000"
                hidden={false}
                animated={true}
                // translucent={true}
            />
            <ThemedView
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* <MyFlatList /> */}
                <SafeAreaView
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <ThemedTextInput
                        value={value}
                        // onChange={handleChange}
                        onChangeText={handleChangeText}
                        placeholder="Enter a text here"
                        multiline={true}
                        maxLength={40}
                        style={{
                            width: "50%",
                        }}
                    />
                    <Button title="Submit" onPress={handlePress} />
                    <Button title="Fetch" onPress={handleFetch} />
                </SafeAreaView>
                {/* <MySectionList /> */}
                <TouchableOpacity onPress={handleReset}>
                    <ThemedText allowFontScaling={false}>
                        {value ||
                            (!data &&
                                "Currently, there are no value, please submit a new one if you would like to view it here! To reset the value, tap on this text")}
                    </ThemedText>
                    {data &&
                        Object.keys(data).map((k) => (
                            <ThemedText>
                                {" "}
                                {k}: {data[k]}
                            </ThemedText>
                        ))}
                </TouchableOpacity>
                {/* <MyVirtualizedList /> */}
            </ThemedView>
        </>
    );
}
