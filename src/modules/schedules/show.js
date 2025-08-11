import dayjs from "dayjs"

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({dailySchedules}) {
    try {
        // Limpando as listas (ul)
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        dailySchedules.forEach((schedule) => {
            // Criando os elementos a serem exibidos
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            // Adicionando id do agendamento
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            // Cria ícone de cancelar agendamento
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            // Adiciona tempo, nome e ícone no item
            item.append(time, name, cancelIcon)

            // Obtém somente a hora
            const hour = dayjs(dailySchedules.when).hour()

            // Renderiza o agendamento na sessão (manhã, tarde ou noite)
            if (hour <= 12) {
                periodMorning.appendChild(item)
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }

        })

    } catch(error) {
        console.log(error)
        alert("Não foi possível renderizar os agendamentos. Tente novamente!")
    }
}

