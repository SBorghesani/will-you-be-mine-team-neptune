import { getGovernors, setGovernor, getChosenMinerals, getColonyMinerals } from "./Database.js";
import { ColonyMinerals } from "./ColonyMineralInv.js"


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governors") {
            setGovernor(parseInt(changeEvent.target.value))
            console.log("state of data has changed")
        }
    }
)

export const Governors = () => {
    const chosenMinerals = getChosenMinerals()
    const governors = getGovernors();
    let html = ''
    if (chosenMinerals.chooseGovernor !== 0) {
        const foundGovernor = governors.find(governor => governor.id === chosenMinerals.chooseGovernor)
        html = `<select class="governors" id="governors">
                <option value="">${foundGovernor.name}</option>`
    } else {

        html = `<select class="governors" id="governors">
        <option value="">Choose</option>`
    }

    const govHTML = governors.map(gov => {
        if (gov.isActiveGov) {
            return `
            <option value="${gov.id}">${gov.name}</option>
            `
        } else {
            return `
            <option value =${gov.id} disabled>${gov.name}</option>
            `
        }

    })

    html += govHTML.join("")
    html += "</select>"

    return html
}