# Machine Learning Meeting

## Tic-Tak-Toe
* machine learning experiment done with tic-tac-toe
* uses beads in match boxes
* uses a match box for each game state
* let's talk about which game states we'd use to simplify the process
* everytime it loses, the bead that made it lose is taken out
* if it wins, it is rewarded with a duplicate bead
* this is analogous to starting with randomized weights
* the weights are adjusted over time to create an accurate model

## Tensorflow Paradigm
* uses your computer to make matrix operations and create a deep learning model
* you create a model by adding layers to each other
* your first layer takes the input data, so the input length must be specified
* the following layers do not need their input lengths to be specified since it is determined by the previous layer's output length
* the model must be trained and, depending on how many layers were created and how much data there is to process, it could take minutes, hours, or in the case of Google, (despite their extremely powerful hardware) days
* the output layer provides a list of floats between 0 and 1
* the sum of all these numbers is 1 because they represent the probability of a specific answer
* usually, the index with the largest probability is taken and used as the answer; this is called the argmax
* for example, to classify an image, the rgb values of each pixel would be flattened and normalized
* the model would resemble an architecture called a convolutional neural network (this would provide feature extraction)
* you would fit the model with multiple images of birds with labels for what kind of bird it is (this is called supervised learning)
