import { SketchPicker } from "react-color";
import { useFormikContext } from "formik";
import { useState } from "react";

const ColorPicker = () => {
    const { values, setFieldValue } = useFormikContext();
    const [showPicker, setShowPicker] = useState(false);

    const colors = values.color || [];

    const addColor = (color) => {
        if (!colors.includes(color.hex)) {
            setFieldValue("color", [...colors, color.hex]);
        }
    };

    const removeColor = (removeColor) => {
        const filtered = colors.filter(c => c !== removeColor);
        setFieldValue("color", filtered);
    };

    return (
        <div style={{ margin: "15px 0" }}>
            <label>Colors</label>

            {/* Selected Colors */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
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

            {/* Add Color Button */}
            <button
                type="button"
                onClick={() => setShowPicker(!showPicker)}
                style={{ marginTop: "10px" }}
            >
                Pick Color
            </button>

            {/* Picker */}
            {showPicker && (
                <SketchPicker
                    onChangeComplete={(color) => addColor(color)}
                />
            )}
        </div>
    );
};

export default ColorPicker;