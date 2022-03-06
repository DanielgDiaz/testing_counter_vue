import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount (Counter)
    })

    // test('should match snapshot', () => {
        
    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('should render h2', () =>{

        
        expect (wrapper.find('h2').exists()).toBeTruthy()

       const h2Value = wrapper.find('h2').text()
       expect (h2Value).toBe('Counter')

    })

    test('value p default 100',() => {

       
        //pTags
        // const pTags = wrapper.findAll('p')

        const value = wrapper.find('[data-test-id="counter"]').text()

        //expect segundo p === 100
        // expect (pTags[1].text()).toBe('100')
        expect (value).toBe('100')

    })

    test('should increase & decrease the value of the counter by 1',async () => {
        

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-test-id="counter"]').text()

        expect (value).toBe('101')

    })

    test('should set default value',() =>{
        const {start} = wrapper.props()
        
        const value = wrapper.find('[data-test-id="counter"]').text()

        expect (Number (value)).toBe(start)
    })

    test('should show prop title', () => {
        const title = 'Hola Mundo!!!'

        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)
    })
})