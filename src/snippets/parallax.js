    export default function initParallax() {
        document.addEventListener("mousemove", parallax);
        
        function parallax(e) {
            
            document.querySelectorAll('.layer').forEach(layer => {
                let section = document.querySelector(`body`)
              
                // console.log(e);
                
                const speed = layer.getAttribute('data-speed')
        
                const x = (section.offsetWidth - e.clientX*speed)/100
                const y = (section.offsetHeight - e.clientY*speed)/100
        
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }
    }