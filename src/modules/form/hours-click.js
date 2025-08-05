export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available")
    hours.forEach(( available ) => {
        available.addEventListener("click", (selected) => {

            // Garante que tenha apenas um selecionado
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            selected.target.classList.add("hour-selected")

        })
    })
}   