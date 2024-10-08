import { useAtomValue, useAtom } from "jotai";
import { servicesAtom, dropdownSelectionAtom } from "./8-services-data";

function ServiceOptions({ value, label }: { value: string, label: string; }) {
    return (
        <option value={value}>{label}</option>
    );
}

export function DropdownList() {
    const services = useAtomValue(servicesAtom);
    const [selected, setSelected] = useAtom(dropdownSelectionAtom);
    return (<>
        <span>
            Filter by event type:
        </span>

        <select
            className="mr-[5rem] p-2 rounded-md border border-gray"
            value={selected}
            onChange={(event) => {
                setSelected(event.target.value);
            }}
        >
            <ServiceOptions value="All" label="All" />

            {services.map(
                (service, index) => {
                    return (
                        <ServiceOptions
                            key={index}
                            value={service.label}
                            label={service.label} />
                    );
                }
            )}
        </select>
    </>);
}
