const callingData = []

//favourite feature

const favourite = document.querySelectorAll('.favourite')
for (let i = 0; i < favourite.length; i++) {
    favourite[i].addEventListener('click', function () {

        const favorCount = document.getElementById('favor-count')
        favorCount.innerText = parseInt(favorCount.innerText) + 1;
    })
}

// copy feature

const copyButtons = document.querySelectorAll('.copy-button')
for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener('click', function () {

        const copyCount = document.getElementById('copy-count')
        copyCount.innerText = parseInt(copyCount.innerText) + 1;

        const card = this.closest('.parent')
        if (!card)
            return;

        const number = card.querySelector('.call-number')
        if (!number)
            return
        const numberElement = number.textContent.trim();
        alert(`Number Copied-${numberElement}`)

        navigator.clipboard.writeText(numberElement)
    })
}

// coin to call feature
const callButton = document.querySelectorAll(".call-button")
for (let i = 0; i < callButton.length; i++) {
    callButton[i].addEventListener('click', function () {
        const availableBalance = parseInt(document.getElementById('available-balance').innerText)

        const card = this.closest('.parent')
        const name = card.querySelector('.call-name').innerText
        const number = card.querySelector('.call-number').innerText

        if (availableBalance >= 20) {
            const remainingBalance = availableBalance - 20;
            document.getElementById('available-balance').innerText = remainingBalance
            alert(`Calling ${name} - ${number}`)

            const data = {
                name: name,
                number: number,
                date: new Date().toLocaleTimeString()
            }

            callingData.push(data)
            console.log(callingData);
        }
        else if (availableBalance < 20)
            alert("You don't have enough coins.Minimum 20 coins is required to call")
    })
}


//clear history

document.getElementById("clear-all")
    .addEventListener("click", function () {
        const clearButton = document.getElementById("call-history")
        clearButton.innerText = ""

        callingData.length = 0
    })

// call history feature
const callHistory = document.querySelectorAll(".call-button")
for (let i = 0; i < callHistory.length; i++) {
    callHistory[i].addEventListener('click', function () {

        const historyContainer = document.getElementById("call-history")
        historyContainer.innerText = ""

        for (const data of callingData) {
            const div = document.createElement('div')
            div.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] rounded-xl my-2 px-2">
                    <div>
                        <h1 class="font-normal">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
    `
            historyContainer.appendChild(div)
        }

    })
}
