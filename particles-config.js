/*
tsParticles Configuration
For more options, visit https://particles.js.org/docs/
*/

tsParticles.load("tsparticles", {
    // Background settings
    background: {
        color: {
            value: "#212529" // This should match the CSS background color
        }
    },
    // Make the particles responsive
    fullScreen: {
        enable: false, // Set to false to use the div size
        zIndex: -1
    },
    // General particle settings
    particles: {
        // Number of particles
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        // Particle color
        color: {
            value: "#ffffff"
        },
        // Particle shape
        shape: {
            type: "circle"
        },
        // Particle opacity
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        // Particle size
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        // Lines connecting the particles
        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        // Particle movement
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    // Interactivity settings
    interactivity: {
        detect_on: "canvas",
        events: {
            // Action on hover
            onhover: {
                enable: true,
                mode: "repulse" // Pushes particles away from the cursor
            },
            // Action on click
            onclick: {
                enable: true,
                mode: "push" // Adds new particles on click
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 150,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    detectRetina: true
});