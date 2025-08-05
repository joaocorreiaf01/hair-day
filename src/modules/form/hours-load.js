import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
    // Limpa a lista de horários
    hours.innerHTML = ""
    
    const opening = openingHours.map((hour) => {
        // Seleciona apenas as horas, excluindo os minutos
        // Porque o método .add espera, nesse caso, um número, não uma string "9:00"
        const [scheduleHour] = hour.split(":")

        // Recebe a data, adiciona as horas e verifica se é depois da hora atual
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        return {
            hour,
            available: isHourPast,
        }

    })

    // Renderiza os horários
    opening.forEach(({hour, available}) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour

        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)

    }) 

    // Adiciona o evento de clique nos horários disponíveis
    hoursClick()

}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title
    hours.append(header)
}

