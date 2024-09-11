import { useAtom, useAtomValue } from "jotai";
import { DropdownList } from "./1-dropdown";
import { Checkbox } from "./4-checkbox";
import { dropdownSelectionAtom, onsiteAtom, travelAtom } from "./8-services-data";

export function DropdownSection() {
    const isAll = useAtomValue(dropdownSelectionAtom) !== "All";
    const [onsite, setOnsite] = useAtom(onsiteAtom);
    const [travel, setTravel] = useAtom(travelAtom);
    return (
        <div className="w-full flex flex-col md:flex-row justify-start md:items-center gap-4" >
            <DropdownList />

            {!isAll && (<>
                <Checkbox label="Hosted on-site" checked={onsite} setChecked={setOnsite} />
                <Checkbox label="Available for travel" checked={travel} setChecked={setTravel} />
            </>)}
        </div>
    );
}