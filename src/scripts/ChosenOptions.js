import { getChosenMinerals, getFacilityMinerals, getMinerals, getMiningFacilities } from "./Database.js"

const minerals = getMinerals()
const facilities = getMiningFacilities()
const facilityMinerals = getFacilityMinerals()


export const ChosenOptions = () => {
    const chosenMinerals = getChosenMinerals()
    let html = `<h3>You have chosen:</h3>`
    html += `<ul>`
    if (chosenMinerals.selectMinerals.size !== 0) {
        for (const [facilityId, mineralId] of chosenMinerals.selectMinerals.entries()) {
            const facilityMineral = facilityMinerals.find(facilityMin => facilityMin.id === mineralId)
            const mineral = minerals.find(min => min.id === facilityMineral.mineralId)
            const facility = facilities.find(fac => fac.id === facilityMineral.facilityId)
            html += `<li>You have chosen 1 ton of ${mineral.type} from ${facility.name} </li>`
        }
        html += `</ul>`
    }
    return html
}