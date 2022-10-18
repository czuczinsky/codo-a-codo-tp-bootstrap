const ticketPrice = 200
const discountOption = new Map()
discountOption.set('student', 0.8)
discountOption.set('trainee', 0.5)
discountOption.set('junior', 0.15)

const qtyElement = document.getElementById('qty')
const categoryElement = document.getElementById('category')
const priceElement = document.getElementById('price')
const buyTicketsFormElement = document.getElementById('form-buy-tickets')

buyTicketsFormElement.addEventListener('submit',
    (event) => {
        event.preventDefault()
        if (!buyTicketsFormElement.checkValidity()) {
            event.stopPropagation();
            buyTicketsFormElement.classList.add('was-validated')
        } else if (discountOption.has(categoryElement.value)) {
            const priceWithDiscount = ticketPrice * (1 - discountOption.get(categoryElement.value)).toPrecision(3)
            priceElement.value = "Total a Pagar: $ " + (qtyElement.value * priceWithDiscount)
        }
    }
)

buyTicketsFormElement.addEventListener('reset',
    () => {
        buyTicketsFormElement.classList.remove('was-validated')
    }
)

const alertPlaceholder = document.getElementById('alert')

const contactFormElement = document.getElementById('form-contact')

contactFormElement.addEventListener('submit',
    (event) => {
        event.preventDefault()
        event.stopPropagation()
        if (alertPlaceholder.childElementCount < 1) {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `
                <div class="alert alert-warning d-flex align-items-center" role="alert">
                    <div class="w-auto h-auto me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                        </svg>
                    </div>
                    <div>
                        Por el momento no se aceptan más oradores. Disculpe la molestia.
                    </div>
                </div>
                `
            ].join('')

            alertPlaceholder.append(wrapper)
        }
    }
)
