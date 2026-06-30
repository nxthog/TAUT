particlesJS("particles-js", {

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: ["#0E72B8", "#56318C", "#7B5BFF"]
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5,
            random: true
        },

        size: {
            value: 4,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 160,
            color: "#0E72B8",
            opacity: 0.25,
            width: 1.2
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            },

            onclick: {

                enable: true,

                mode: "push"

            },

            resize: true

        },

        modes: {

            grab: {

                distance: 180,

                line_linked: {

                    opacity: 0.8

                }

            },

            push: {

                particles_nb: 4

            }

        }

    },

    retina_detect: true

});
