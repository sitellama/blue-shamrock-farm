type CheckboxProps = {
    label: string;
    checked: boolean;
    setChecked: (checked: boolean) => void;
};

export function Checkbox({ label, checked, setChecked }: CheckboxProps) {
    return (
        <label className="flex items-center">
            <input
                type="checkbox"
                className="size-9 rounded text-green-500 focus:ring-green-500"
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
            />

            <span className="ml-2">
                {label}
            </span>
        </label>
    );
}