# IntroPreview Component Enhancement Tasks

## Layout Changes
- Remove the placeholder image from the left side completely
- Expand text containers to utilize the full width of the page
- Add proper margins on left and right sides to prevent border touching
- Ensure responsive layout with images on top for mobile and right side for desktop

## Image Integration with ThreeImageTransition
- Implement ThreeImageTransition component from src/ui/ThreeImageTransition.js
- Configure the component with appropriate width, height, and position parameters
- Use image pairs from public/IntroPreview/ folder for each section:
  - Campus & Facilities → Campus.png and Campus2.png
  - Academic Programs → Programs1.png and Programs2.png
  - Our Commitment → Commitement.png and Commitement2.png
- Add RegionalDirector image (RegionalDirectorVisit.png) to the history/legacy section showing establishment date and location
- Configure transition effects between at least two images per section

## Animation Updates
- Remove hover animations from containers
- Implement constant circular motion animation for container borders
- Make scroll trigger animations smoother and faster with ease-out timing
- Ensure animations are consistent across all sections

## Component Cleanup
- Remove AnimatedGradientText component usage
- Replace with standard text or GradientText where appropriate
- Maintain all existing interactive effects except hover animations
- Ensure proper spacing and padding for all screen sizes

## ThreeImageTransition Implementation Details
- The component requires images array, width, height, and position parameters
- Images should transition with a smooth animation effect
- Ensure proper cleanup of THREE.js resources when component unmounts
- Optimize the transition effect for performance on mobile devices
- Test the component with different image combinations to ensure smooth transitions