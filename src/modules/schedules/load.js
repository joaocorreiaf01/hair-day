import { scheduleFetchByDay } from "../../services/schedule-by-day.js"
import {schedulesShow} from "./show.js"
import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    // Obtém a data do input
    const date = selectedDate.value

    // Busca na API os agendamentos do dia
    const dailySchedules = await scheduleFetchByDay({date})

    // Exibe os agendamentos
    schedulesShow({dailySchedules})

    // Carrega as horas disponíveis
    hoursLoad({date, dailySchedules})
}
