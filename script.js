const ticketPrice = 200
const discountOption = new Map()
discountOption.set('student', 0.8)
discountOption.set('trainee', 0.5)
discountOption.set('junior', 0.15)

const qtyElement = document.getElementById('qty')
const categoryElement = document.getElementById('category')
const priceElement = document.getElementById('price')
const formElement = document.getElementById('form-buy-tickets')

formElement.addEventListener('submit',
    (event) => {
        event.preventDefault()
        if (!formElement.checkValidity()) {
            event.stopPropagation();
            formElement.classList.add('was-validated')
        } else if (discountOption.has(categoryElement.value)) {
            const priceWithDiscount = ticketPrice * (1 - discountOption.get(categoryElement.value)).toPrecision(3)
            priceElement.value = "Total a Pagar: $ " + (qtyElement.value * priceWithDiscount)
        }
    }
)

formElement.addEventListener('reset',
    () => {
        formElement.classList.remove('was-validated')
    }
)