# odin-library

Project to build a small library app.

# Reflections

Project went alright, mostly happy with the Javascript code now. UI is abysmal but I chose not to focus on that. At a lot of steps I felt like I could probably hack together the desired result, but I knew in the back of my mind that it wouldn't be the 'best practice' approach. The struggle was figuring out what was.

It didn't help that some of the things in the spec for the project probably wouldn't be how you would do something in a 'real world' setting, so the 'best practice' approach wouldn't be applicable. If that makes sense.

Still struggling to get my head around the best ways to deal with interacting with data, objects, DOM elements, forms, etc, and and learning which approaches are subjectively vs objectively better.

This is the first time I've used AI in a project, for the purpose of getting it to review my code. It gives me the answers that I'm looking for far more easily that the equivalent google searching. I feel like for simple work like this, it should be decently accurate at giving me correct answers on what the best approach is, although of course I'm not using any suggestions that I don't understand myself, or that I feel are outside of the scope of what's been covered in TOP so far.

I think the main thing I'm not happy with at this point is using the index of a Book from the myLibrary array to figure out which element to delete from the array. I should be able to use the UUID I'm generating for each book, or else associate the DOM element with the UUID using a data-attribute as the brief suggests. But, it does what it needs to and I can't be bothered spending more time on this now so I'm moving on.