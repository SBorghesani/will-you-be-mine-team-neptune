import { getChosenMinerals, getFacilityMinerals, getMinerals, getMiningFacilities, setSelectMinerals} from "./Database.js";


document.addEventListener(
        "change",
        (event) => {
            if (event.target.name === "facilityMineral") {
                setSelectMinerals(parseInt(event.target.value))
                //console.log(event.target.value)
            }        
        }
    )
//Display
//const facilityMinerals = getFacilityMinerals()

export const FacilityMinerals = () => {
    const facilities = getMiningFacilities()
    const minerals = getMinerals()
    const state = getChosenMinerals()

    if (state.selectFacility !== undefined) {
        const foundFacility = facilities.find(facility => facility.id === state.selectFacility)
        const facilityMinerals = getFacilityMinerals()
        
        return `
                <h2> ${foundFacility.name} </h2>
                <div> Available Minerals: </div>
                <ul>${facilityMinerals.filter(facilityMineral => 
                        facilityMineral.facilityId === foundFacility.id).map(facilityMineral => 
                            {const mineral = minerals.find(mineral => mineral.id === facilityMineral.mineralId)
                                return `<li class="facilityMinerals">
                                <input type="radio" name="facilityMineral" value="${mineral.id}" /> ${facilityMineral.mineralsAvailableTonnage}
                                        tons of ${mineral.type}`})}</li></ul>`
            }  else {
                return ``
            } 

    }