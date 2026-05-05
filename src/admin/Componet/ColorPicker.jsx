import { SketchPicker } from "react-color";
import { useFormikContext } from "formik";
import { useState } from "react";

const ColorPicker = ({ name }) => {
    const { values, setFieldValue } = useFormikContext();

    const [showPicker, setShowPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState("#000");

    const colors = values[name] || [];

    const addColor = () => {
        if (!colors.includes(selectedColor)) {
            setFieldValue(name, [...colors, selectedColor]);
        }
    };

    const removeColor = (removeColor) => {
        const filtered = colors.filter(c => c !== removeColor);
        setFieldValue(name, filtered);
    };

    return (
        <div style={{ margin: "15px 0" }}>
            <label>Colors</label>

            {/* Selected Colors */}
            <div style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "10px"
            }}>
                {colors.map((c, i) => (
                    <div
                        key={i}
                        onClick={() => removeColor(c)}
                        title="Click to remove"
                        style={{
                            width: "40px",
                            height: "40px",
                            background: c,
                            border: "2px solid #000",
                            cursor: "pointer"
                        }}
                    />
                ))}
            </div>

            {/* Toggle Picker */}
            <button
                type="button"
                onClick={() => setShowPicker(prev => !prev)}
                style={{ marginTop: "10px" }}
            >
                Pick Color
            </button>

            {/* Picker */}
            {showPicker && (
                <div style={{ marginTop: "10px" }}>
                    <SketchPicker
                        color={selectedColor}
                        onChange={(color) => setSelectedColor(color.hex)}  // only preview
                    />

                    {/* Add Button */}
                    <button
                        type="button"
                        onClick={addColor}
                        style={{
                            marginTop: "10px",
                            padding: "5px 10px",
                            cursor: "pointer"
                        }}
                    >
                        Add Color
                    </button>
                </div>
            )}
        </div>
    );
};

export default ColorPicker;