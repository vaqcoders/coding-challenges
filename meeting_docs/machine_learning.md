# Machine Learning Meeting

## Tic-Tak-Toe
* machine learning experiment done with tic-tac-toe
* used beads in match boxes
* used a match box for each game state
* lets talk about which game states we'd use to simplify the process
* everytime it lost, they took out the bead that made them lose
* if they won, they were rewarded with a duplicate bead
* this is analogous to starting with randomized weights
* the weights are adjusted over time to create an accurate model

## Tensorflow Paradigm
* uses your computer to make matrix operations and create a deep learning model
* you create a model by adding layers to each other
* your first layer takes the input data, so the input length must be specified
* the following layers do not need their input length to be specified since it is determined by the previous layer's output length
* the model must be trained and depending on how many layers were created and how much data there is to process, it could take minutes, hours, or in the case of Google, (despite their extremely powerful hardware) days
* the output layer provides a list of floats between 0 and 1
* the sum of all these numbers is 1 because they represent the probability of a specific answer
* usually, the index with the largest probability is taken and used as the answer; this is called the argmax
* for example, to classify an image, the rgb values of each pixel would be flattened and normalized
* the model would probably resemble an architecture called a convolutional neural network (this would provide feature extraction)
* you would fit the model with a bunch of images of birds and for each bird you would have a label for what kind of bird it is (this is called supervised learning)
