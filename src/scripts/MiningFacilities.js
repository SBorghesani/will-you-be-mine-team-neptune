import { getMiningFacilities, getChosenMinerals, setFacility } from "./Database.js";
import { FacilityMinerals } from "./FacilityMinerals.js";

const facilities = getMiningFacilities()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("facility--")) {
            const [, facilityId] = event.target.id.split("--")
            setFacility(parseInt(facilityId))
        }
    }
)

export const MiningFacilities = () => {
    const storage = getChosenMinerals()

    return facilities.map(facility => `

    <ul class = 'facility ul'>
        <button ${storage.chooseGovernor > 0 ? "" : "disabled"}
            class = "pickFacility"
            id = "facility--${facility.id}"> ${facility.name}
        </button>

        ${storage.selectFacility === facility.id ? FacilityMinerals() : ""
        }
     </ul>
         `).join("")
}


// line 22 <button ${storage.chooseGovernor > 0 ? "Facility" : "Select Governor"}


