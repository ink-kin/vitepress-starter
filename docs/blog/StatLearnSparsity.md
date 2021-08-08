---
title: Statistical Learning
date: 2020/12/12 15:22:40
cover_index: "http://picsum.photos/450/450?random=14"
tags:
- data
categories:
- Books
- BPM
---
 
copy to come from copywriter for review
Statistics

[http://www.crcpress.com](http://www.crcpress.com)

## Contents





- 1 Introduction Preface xv
- 2 The Lasso for Linear Models
   - 2.1 Introduction
   - 2.2 The Lasso Estimator
   - 2.3 Cross-Validation and Inference
   - 2.4 Computation of the Lasso Solution
      - 2.4.1 Single Predictor: Soft Thresholding
      - 2.4.2 Multiple Predictors: Cyclic Coordinate Descent
      - 2.4.3 Soft-Thresholding and Orthogonal Bases
   - 2.5 Degrees of Freedom
   - 2.6 Uniqueness of the Lasso Solutions
   - 2.7 A Glimpse at the Theory
   - 2.8 The Nonnegative Garrote
   - 2.9 `q Penalties and Bayes Estimates
   - 2.10 Some Perspective
   - Exercises
- 3 Generalized Linear Models
   - 3.1 Introduction
   - 3.2 Logistic Regression
      - 3.2.1 Example: Document Classification
      - 3.2.2 Algorithms
   - 3.3 Multiclass Logistic Regression
      - 3.3.1 Example: Handwritten Digits
      - 3.3.2 Algorithms
      - 3.3.3 Grouped-Lasso Multinomial
   - 3.4 Log-Linear Models and the Poisson GLM
      - 3.4.1 Example: Distribution Smoothing
   - 3.5 Cox Proportional Hazards Models
      - 3.5.1 Cross-Validation
      - 3.5.2 Pre-Validation
   - 3.6 Support Vector Machines
      - 3.6.1 Logistic Regression with Separable Data
   - 3.7 Computational Details andglmnet x
   - Bibliographic Notes
   - Exercises
- 4 Generalizations of the Lasso Penalty
   - 4.1 Introduction
   - 4.2 The Elastic Net
   - 4.3 The Group Lasso
      - 4.3.1 Computation for the Group Lasso
      - 4.3.2 Sparse Group Lasso
      - 4.3.3 The Overlap Group Lasso
   - 4.4 Sparse Additive Models and the Group Lasso
      - 4.4.1 Additive Models and Backfitting
      - 4.4.2 Sparse Additive Models and Backfitting
      - 4.4.3 Approaches Using Optimization and the Group Lasso
      - 4.4.4 Multiple Penalization for Sparse Additive Models
   - 4.5 The Fused Lasso
      - 4.5.1 Fitting the Fused Lasso
         - 4.5.1.1 Reparametrization
         - 4.5.1.2 A Path Algorithm
         - 4.5.1.3 A Dual Path Algorithm
         - 4.5.1.4 Dynamic Programming for the Fused Lasso
      - 4.5.2 Trend Filtering
      - 4.5.3 Nearly Isotonic Regression
   - 4.6 Nonconvex Penalties
   - Bibliographic Notes
   - Exercises
- 5 Optimization Methods
   - 5.1 Introduction
   - 5.2 Convex Optimality Conditions
      - 5.2.1 Optimality for Differentiable Problems
      - 5.2.2 Nondifferentiable Functions and Subgradients
   - 5.3 Gradient Descent
      - 5.3.1 Unconstrained Gradient Descent
      - 5.3.2 Projected Gradient Methods
      - 5.3.3 Proximal Gradient Methods
      - 5.3.4 Accelerated Gradient Methods
   - 5.4 Coordinate Descent
      - 5.4.1 Separability and Coordinate Descent
      - 5.4.2 Linear Regression and the Lasso
      - 5.4.3 Logistic Regression and Generalized Linear Models
   - 5.5 A Simulation Study
   - 5.6 Least Angle Regression
   - 5.7 Alternating Direction Method of Multipliers
   - 5.8 Minorization-Maximization Algorithms xi
   - 5.9 Biconvexity and Alternating Minimization
   - 5.10 Screening Rules
   - Bibliographic Notes
   - Appendix
   - Exercises
- 6 Statistical Inference
   - 6.1 The Bayesian Lasso
   - 6.2 The Bootstrap
   - 6.3 Post-Selection Inference for the Lasso
      - 6.3.1 The Covariance Test
      - 6.3.2 A General Scheme for Post-Selection Inference
         - 6.3.2.1 Fixed- λ Inference for the Lasso
         - 6.3.2.2 The Spacing Test for LAR
      - 6.3.3 What Hypothesis Is Being Tested?
      - 6.3.4 Back to Forward Stepwise Regression
   - 6.4 Inference via a Debiased Lasso
   - 6.5 Other Proposals for Post-Selection Inference
   - Bibliographic Notes
   - Exercises
- 7 Matrix Decompositions, Approximations, and Completion
   - 7.1 Introduction
   - 7.2 The Singular Value Decomposition
   - 7.3 Missing Data and Matrix Completion
      - 7.3.1 The Netflix Movie Challenge
      - 7.3.2 Matrix Completion Using Nuclear Norm
      - 7.3.3 Theoretical Results for Matrix Completion
      - 7.3.4 Maximum Margin Factorization and Related Methods
   - 7.4 Reduced-Rank Regression
   - 7.5 A General Matrix Regression Framework
   - 7.6 Penalized Matrix Decomposition
   - 7.7 Additive Matrix Decomposition
   - Bibliographic Notes
   - Exercises
- 8 Sparse Multivariate Methods
   - 8.1 Introduction
   - 8.2 Sparse Principal Components Analysis
      - 8.2.1 Some Background
      - 8.2.2 Sparse Principal Components
         - 8.2.2.1 Sparsity from Maximum Variance
         - 8.2.2.2 Methods Based on Reconstruction
      - 8.2.3 Higher-Rank Solutions
         - 8.2.3.1 Illustrative Application of Sparse PCA xii
      - 8.2.4 Sparse PCA via Fantope Projection
      - 8.2.5 Sparse Autoencoders and Deep Learning
      - 8.2.6 Some Theory for Sparse PCA
   - 8.3 Sparse Canonical Correlation Analysis
      - 8.3.1 Example: Netflix Movie Rating Data
   - 8.4 Sparse Linear Discriminant Analysis
      - 8.4.1 Normal Theory and Bayes’ Rule
      - 8.4.2 Nearest Shrunken Centroids
      - 8.4.3 Fisher’s Linear Discriminant Analysis
         - 8.4.3.1 Example: Simulated Data with Five Classes
      - 8.4.4 Optimal Scoring
         - 8.4.4.1 Example: Face Silhouettes
   - 8.5 Sparse Clustering
      - 8.5.1 Some Background on Clustering
         - 8.5.1.1 Example: Simulated Data with Six Classes
      - 8.5.2 Sparse Hierarchical Clustering
      - 8.5.3 Sparse K -Means Clustering
      - 8.5.4 Convex Clustering
   - Bibliographic Notes
   - Exercises
- 9 Graphs and Model Selection
   - 9.1 Introduction
   - 9.2 Basics of Graphical Models
      - 9.2.1 Factorization and Markov Properties
         - 9.2.1.1 Factorization Property
         - 9.2.1.2 Markov Property
            - Properties 9.2.1.3 Equivalence of Factorization and Markov
      - 9.2.2 Some Examples
         - 9.2.2.1 Discrete Graphical Models
         - 9.2.2.2 Gaussian Graphical Models
   - 9.3 Graph Selection via Penalized Likelihood
      - 9.3.1 Global Likelihoods for Gaussian Models
      - 9.3.2 Graphical Lasso Algorithm
      - 9.3.3 Exploiting Block-Diagonal Structure
      - 9.3.4 Theoretical Guarantees for the Graphical Lasso
      - 9.3.5 Global Likelihood for Discrete Models
   - 9.4 Graph Selection via Conditional Inference
      - 9.4.1 Neighborhood-Based Likelihood for Gaussians
      - 9.4.2 Neighborhood-Based Likelihood for Discrete Models
      - 9.4.3 Pseudo-Likelihood for Mixed Models
   - 9.5 Graphical Models with Hidden Variables
   - Bibliographic Notes
   - Exercises xiii
- 10 Signal Approximation and Compressed Sensing
   - 10.1 Introduction
   - 10.2 Signals and Sparse Representations
      - 10.2.1 Orthogonal Bases
      - 10.2.2 Approximation in Orthogonal Bases
      - 10.2.3 Reconstruction in Overcomplete Bases
   - 10.3 Random Projection and Approximation
      - 10.3.1 Johnson–Lindenstrauss Approximation
      - 10.3.2 Compressed Sensing
   - 10.4 Equivalence between ` 0 and ` 1 Recovery
      - 10.4.1 Restricted Nullspace Property
      - 10.4.2 Sufficient Conditions for Restricted Nullspace
      - 10.4.3 Proofs
         - 10.4.3.1 Proof of Theorem 10.1
         - 10.4.3.2 Proof of Proposition 10.1
   - Bibliographic Notes
   - Exercises
- 11 Theoretical Results for the Lasso
   - 11.1 Introduction
      - 11.1.1 Types of Loss Functions
      - 11.1.2 Types of Sparsity Models
   - 11.2 Bounds on Lasso ` 2 -Error
      - 11.2.1 Strong Convexity in the Classical Setting
      - 11.2.2 Restricted Eigenvalues for Regression
      - 11.2.3 A Basic Consistency Result
   - 11.3 Bounds on Prediction Error
   - 11.4 Support Recovery in Linear Regression
      - 11.4.1 Variable-Selection Consistency for the Lasso
         - 11.4.1.1 Some Numerical Studies
      - 11.4.2 Proof of Theorem 11.3
   - 11.5 Beyond the Basic Lasso
   - Bibliographic Notes
   - Exercises
- Bibliography
- Author Index
- Index



## Preface

In this monograph, we have attempted to summarize the actively developing
field of statistical learning with sparsity. A sparse statistical model is one
having only a small number of nonzero parameters or weights. It represents a
classic case of “ _less is more_ ”: a sparse model can be much easier to estimate
and interpret than a dense model. In this age of big data, the number of
features measured on a person or object can be large, and might be larger
than the number of observations. The sparsity assumption allows us to tackle
such problems and extract useful and reproducible patterns from big datasets.
The ideas described here represent the work of an entire community of
researchers in statistics and machine learning, and we thank everyone for
their continuing contributions to this exciting area. We particularly thank our
colleagues at Stanford, Berkeley and elsewhere; our collaborators, and our
past and current students working in this area. These include Alekh Agarwal,
Arash Amini, Francis Bach, Jacob Bien, Stephen Boyd, Andreas Buja, Em-
manuel Candes, Alexandra Chouldechova, David Donoho, John Duchi, Brad
Efron, Will Fithian, Jerome Friedman, Max G’Sell, Iain Johnstone, Michael
Jordan, Ping Li, Po-Ling Loh, Michael Lim, Jason Lee, Richard Lockhart,
Rahul Mazumder, Balasubramanian Narashimhan, Sahand Negahban, Guil-
laume Obozinski, Mee-Young Park, Junyang Qian, Garvesh Raskutti, Pradeep
Ravikumar, Saharon Rosset, Prasad Santhanam, Noah Simon, Dennis Sun,
Yukai Sun, Jonathan Taylor, Ryan Tibshirani,^1 Stefan Wager, Daniela Wit-
ten, Bin Yu, Yuchen Zhang, Ji Zhou, and Hui Zou. We also thank our editor
John Kimmel for his advice and support.

Stanford University Trevor Hastie
and Robert Tibshirani
University of California, Berkeley Martin Wainwright

(^1) Some of the bibliographic references, for example in Chapters 4 and 6, are to
Tibshirani 2 , R.J., rather than Tibshirani, R.; the former is Ryan Tibshirani, the latter
is Robert (son and father).
xv



```
Chapter 1
```
## Introduction

```
“I never keep a scorecard or the batting averages. I hate statistics. What
I got to know, I keep in my head.”
```
This is a quote from baseball pitcher Dizzy Dean, who played in the major
leagues from 1930 to 1947.
How the world has changed in the 75 or so years since that time! Now large
quantities of data are collected and mined in nearly every area of science, en-
tertainment, business, and industry. Medical scientists study the genomes of
patients to choose the best treatments, to learn the underlying causes of their
disease. Online movie and book stores study customer ratings to recommend
or sell them new movies or books. Social networks mine information about
members and their friends to try to enhance their online experience. And
yes, most major league baseball teams have statisticians who collect and ana-
lyze detailed information on batters and pitchers to help team managers and
players make better decisions.
Thus the world is awash with data. But as Rutherford D. Roger (and
others) has said:

```
“We are drowning in information and starving for knowledge.”
```
There is a crucial need to sort through this mass of information, and pare
it down to its bare essentials. For this process to be successful, we need to
hope that the world is not as complex as it might be. For example, we hope
that not all of the 30 _,_ 000 or so genes in the human body are directly involved
in the process that leads to the development of cancer. Or that the ratings
by a customer on perhaps 50 or 100 different movies are enough to give us a
good idea of their tastes. Or that the success of a left-handed pitcher against
left-handed batters will be fairly consistent for different batters.
This points to an underlying assumption of simplicity. One form of sim-
plicity is _sparsity_ , the central theme of this book. Loosely speaking, a sparse
statistical model is one in which only a relatively small number of parameters
(or predictors) play an important role. In this book we study methods that
exploit sparsity to help recover the underlying signal in a set of data.
The leading example is linear regression, in which we observe _N_ obser-
vations of an outcome variable _yi_ and _p_ associated predictor variables (or
features) _xi_ = ( _xi_ 1 _,...xip_ ) _T_. The goal is to predict the outcome from the

```
1
```

###### 2 INTRODUCTION

predictors, both for actual prediction with future data and also to discover
which predictors play an important role. A linear regression model assumes
that

```
yi = β 0 +
```
```
∑ p
```
```
j =
```
```
xijβj + ei, (1.1)
```
where _β_ 0 and _β_ = ( _β_ 1 _,β_ 2 _,...βp_ ) are unknown parameters and _ei_ is an error
term. The method of least squares provides estimates of the parameters by
minimization of the least-squares objective function

```
minimize
β 0 ,β
```
###### ∑ N

```
i =
```
```
( yi − β 0 −
```
```
∑ p
```
```
j =
```
```
xijβj )^2. (1.2)
```
Typically all of the least-squares estimates from (1.2) will be nonzero. This
will make interpretation of the final model challenging if _p_ is large. In fact, if
_p > N_ , the least-squares estimates are not unique. There is an infinite set of
solutions that make the objective function equal to zero, and these solutions
almost surely overfit the data as well.
Thus there is a need to constrain, or _regularize_ the estimation process. In
the _lasso_ or _`_ 1 _-regularized regression_ , we estimate the parameters by solving
the problem

```
minimize
β 0 ,β
```
###### ∑ N

```
i =
```
```
( yi − β 0 −
```
```
∑ p
```
```
j =
```
```
xijβj )^2 subject to‖ β ‖ 1 ≤ t (1.3)
```
where‖ _β_ ‖ 1 =

∑ _p
j_ =1| _βj_ |is the _`_^1 norm of _β_ , and _t_ is a user-specified parameter.
We can think of _t_ as a budget on the total _`_ 1 norm of the parameter vector,
and the lasso finds the best fit within this budget.
Why do we use the _`_ 1 norm? Why not use the _`_ 2 norm or any _`q_ norm? It
turns out that the _`_ 1 norm is special. If the budget _t_ is small enough, the lasso
yields sparse solution vectors, having only some coordinates that are nonzero.
This does not occur for _`q_ norms with _q >_ 1; for _q <_ 1, the solutions are
sparse but the problem is not convex and this makes the minimization very
challenging computationally. The value _q_ = 1 is the smallest value that yields
a convex problem. Convexity greatly simplifies the computation, as does the
sparsity assumption itself. They allow for scalable algorithms that can handle
problems with even millions of parameters.
Thus the advantages of sparsity are interpretation of the fitted model and
computational convenience. But a third advantage has emerged in the last
few years from some deep mathematical analyses of this area. This has been
termed the “bet on sparsity” principle:

```
Use a procedure that does wel l in sparse problems, since no procedure
does well in dense problems.
```

###### STATISTICAL LEARNING WITH SPARSITY 3

We can think of this in terms of the amount of information _N/p_ per param-
eter. If _p_  _N_ and the true model is not sparse, then the number of samples _N_
is too small to allow for accurate estimation of the parameters. But if the true
model is sparse, so that only _k < N_ parameters are actually nonzero in the
true underlying model, then it turns out that we can estimate the parameters
effectively, using the lasso and related methods that we discuss in this book.
This may come as somewhat of a surprise, because we are able to do this even
though we are not told _whichk_ of the _p_ parameters are actually nonzero. Of
course we cannot do as well as we could if we had that information, but it
turns out that we can still do reasonably well.

```
BladderBreast
CNSColonKidneyLiverLungLymphNormalOvary
PancreasProstate
```
```
Soft
Stomach
Testis
```
**Figure 1.1** _15-class gene expression cancer data: estimated nonzero feature weights
from a lasso-regularized multinomial classifier. Shown are the 254 genes (out of 4718)
with at least one nonzero weight among the 15 classes. The genes (unlabel led) run
from top to bottom. Line segments pointing to the right indicate positive weights,
and to the left, negative weights. We see that only a handful of genes are needed to
characterize each class._

For all of these reasons, the area of sparse statistical modelling is exciting—
for data analysts, computer scientists, and theorists—and practically useful.
Figure 1.1 shows an example. The data consists of quantitative gene expression
measurements of 4718 genes on samples from 349 cancer patients. The cancers
have been categorized into 15 different types such as “Bladder,” “Breast”,


###### 4 INTRODUCTION

“CNS,” etc. The goal is to build a classifier to predict cancer class based on
some or all of the 4718 features. We want the classifier to have a low error rate
on independent samples and would prefer that it depend only on a subset of
the genes, to aid in our understanding of the underlying biology.
For this purpose we applied a lasso-regularized multinomial classifier to
these data, as described in Chapter 3. This produces a set of 4718 weights or
coefficients for each of the 15 classes, for discriminating each class from the
rest. Because of the _`_ 1 penalty, only some of these weights may be nonzero
(depending on the choice of the regularization parameter). We used cross-
validation to estimate the optimal choice of regularization parameter, and
display the resulting weights in Figure 1.1. Only 254 genes have at least one
nonzero weight, and these are displayed in the figure. The cross-validated
error rate for this classifier is about 10%, so the procedure correctly predicts
the class of about 90% of the samples. By comparison, a standard support
vector classifier had a slightly higher error rate (13%) using all of the features.
Using sparsity, the lasso procedure has dramatically reduced the number of
features without sacrificing accuracy. Sparsity has also brought computational
efficiency: although there are potentially 4718× 15 ≈ 70 _,_ 000 parameters to
estimate, the entire calculation for Figure 1.1 was done on a standard laptop
computer in less than a minute. For this computation we used theglmnet
procedure described in Chapters 3 and 5.
Figure 1.2 shows another example taken from an article by Cand`es and
Wakin (2008) in the field of _compressed sensing_. On the left is a megapixel
image. In order to reduce the amount of space needed to store the image,
we represent it in a wavelet basis, whose coefficients are shown in the middle
panel. The largest 25 _,_ 000 coefficients are then retained and the rest zeroed
out, yielding the excellent reconstruction in the right image. This all works
because of sparsity: although the image seems complex, in the wavelet basis it
is simple and hence only a relatively small number of coefficients are nonzero.
The original image can be perfectly recovered from just 96 _,_ 000 incoherent
measurements. Compressed sensing is a powerful tool for image analysis, and
is described in Chapter 10.
In this book we have tried to summarize the hot and rapidly evolving field
of sparse statistical modelling. In Chapter 2 we describe and illustrate the
lasso for linear regression, and a simple coordinate descent algorithm for its
computation. Chapter 3 covers the application of _`_ 1 penalties to generalized
linear models such as multinomial and survival models, as well as support
vector machines. Generalized penalties such as the elastic net and group lasso
are discussed in Chapter 4. Chapter 5 reviews numerical methods for opti-
mization, with an emphasis on first-order methods that are useful for the
large-scale problems that are discussed in this book. In Chapter 6, we dis-
cuss methods for statistical inference for fitted (lasso) models, including the
bootstrap, Bayesian methods and some more recently developed approaches.
Sparse matrix decomposition is the topic of Chapter 7, and we apply these
methods in the context of sparse multivariate analysis in Chapter 8. Graph-


###### STATISTICAL LEARNING WITH SPARSITY 5

theory tells us that, if _f_ ( _t_ )actually has very low band-
width, then a small number of (uniform) samples will suf-
fice for recovery. As we will see in the remainder of this
article, signal recovery can actually be made possible for a
much broader class of signal models.

**INCOHERENCE AND THE SENSING OF SPARSE SIGNALS**
This section presents the two fundamental premises underlying
CS: sparsity and incoherence.

**_SPARSITY_**
Many natural signals have concise representations when
expressed in a convenient basis. Consider, for example, the
image in Figure 1(a) and its wavelet transform in (b).
Although nearly all the image pixels have nonzero values, the
wavelet coefficients offer a concise summary: most coeffi-
cients are small, and the relatively few large coefficients cap-
ture most of the information.
Mathematically speaking, we have a vector _f_ ∈R _n_ (such as
the _n_ -pixel image in Figure 1) which we expand in an orthonor-
mal basis (such as a wavelet basis) =[ψ 1 ψ 2 ···ψ _n_ ]as follows:

```
f ( t )=
```
```
 n
```
```
i = 1
```
```
xi ψ i ( t ), ( 2 )
```
where _x_ is the coefficient sequence of _f_ , _xi_ = _f_ ,ψ _i_ . It will be
convenient to express _f_ as  _x_ (where is the _n_ × _n_ matrix
with ψ 1 ,... ,ψ _n_ as columns). The implication of sparsity is
now clear: when a signal has a sparse expansion, one can dis-
card the small coefficients without much perceptual loss.
Formally, consider _fS_ ( _t_ )obtained by keeping only the terms
corresponding to the _S_ largest values of ( _xi_ )in the expansion
(2). By definition, _fS_ := _xS_ , where here and below, _xS_ is the
vector of coefficients ( _xi_ )with all but the largest _S_ set to zero.
This vector is sparse in a strict sense since all but a few of its
entries are zero; we will call _S_ - _sparse_
such objects with at most _S_ nonzero
entries. Since is an orthonormal
basis (or “orthobasis”), we have
 _f_ − _fS_  2 = _x_ − _xS_  2 , and if _x_ is
sparse or _compressible_ in the sense
that the sorted magnitudes of the ( _xi_ )
decay quickly, then _x_ is well approxi-
mated by _xS_ and, therefore, the error
 _f_ − _fS_  2 is small. In plain terms,
one can “throw away” a large fraction
of the coefficients without much loss.
Figure 1(c) shows an example where
the perceptual loss is hardly noticeable
from a megapixel image to its approxi-
mation obtained by throwing away
97.5% of the coefficients.
This principle is, of course, what
underlies most modern lossy coders
such as JPEG-2000 [4] and many

```
others, since a simple method for data compression would be to
compute x from f and then (adaptively) encode the locations
and values of the S significant coefficients. Such a process
requires knowledge of all the n coefficients x , as the locations
of the significant pieces of information may not be known in
advance (they are signal dependent); in our example, they tend
to be clustered around edges in the image. More generally,
sparsity is a fundamental modeling tool which permits efficient
fundamental signal processing; e.g., accurate statistical estima-
tion and classification, efficient data compression, and so on.
This article is about a more surprising and far-reaching impli-
cation, however, which is that sparsity has significant bearings
on the acquisition process itself. Sparsity determines how effi-
ciently one can acquire signals nonadaptively.
```
```
INCOHERENT SAMPLING
Suppose we are given a pair (, )of orthobases of R n. The first
basis is used for sensing the object f as in (1) and the second is
used to represent f. The restriction to pairs of orthobases is not
essential and will merely simplify our treatment.
```
```
DEFINITION 1
The coherence between the sensing basis and the representa-
tion basis is
```
```
μ(, )=
```
```
√
n · max
1 ≤ k , j ≤ n
```
```
|φ k ,ψ j |.( 3 )
```
```
In plain English, the coherence measures the largest correlation
between any two elements of and ; see also [5]. If and 
contain correlated elements, the coherence is large. Otherwise,
it is small. As for how large and how small, it follows from linear
algebra that μ(, )∈[1,
```
```
√
n ].
Compressive sampling is mainly concerned with low coher-
ence pairs, and we now give examples of such pairs. In our first
example, is the canonical or spike basis φ k ( t )=δ( t − k )and
```
```
[FIG1](a) Original megapixel image with pixel values in the range [0,255] and (b) its
wavelet transform coefficients (arranged in random order for enhanced visibility).
Relatively few wavelet coefficients capture most of the signal energy; many such images
are highly compressible. (c) The reconstruction obtained by zeroing out all the coefficients
in the wavelet expansion but the 25,000 largest (pixel values are thresholded to the range
[0,255]). The difference with the original picture is hardly noticeable. As we describe in
“Undersampling and Sparse Signal Recovery,” this image can be perfectly recovered from
just 96,000 incoherent measurements.
```
```
(a) (b)
```
```
− 1
0246810
```
```
−0.
```
```
0
```
```
0.
```
```
1.
```
```
2
```
```
Wavelet
```
× (^104) Coefficients
1
(c)
× 105
IEEE SIGNAL PROCESSING MAGAZINE[ 23 ]MARCH 2008
**Figure 1.2** _(a) Original megapixel image with pixel values in the range_ [0 _,_ 255]
_and (b) its wavelet transform coefficients (arranged in random order for enhanced
visibility). Relatively few wavelet coefficients capture most of the signal energy; many
such images are highly compressible. (c) The reconstruction obtained by zeroing out
al l the coefficients in the wavelet expansion but the_ 25 _,_ 000 _largest (pixel values are
thresholded to the range_ [0 _,_ 255] _). The differences from the original picture are hardly
noticeable._
ical models and their selection are discussed in Chapter 9 while compressed
sensing is the topic of Chapter 10. Finally, a survey of theoretical results for
the lasso is given in Chapter 11.
We note that both _supervised_ and _unsupervised_ learning problems are dis-
cussed in this book, the former in Chapters 2, 3, 4, and 10, and the latter in
Chapters 7 and 8.
_Notation_
We have adopted a notation to reduce mathematical clutter. Vectors are col-
umn vectors by default; hence _β_ ∈R _p_ is a column vector, and its transpose
_βT_ is a row vector. All vectors are lower case and non-bold, except _N_ -vectors
which are bold, where _N_ is the sample size. For example **x** _j_ might be the
_N_ -vector of observed values for the _jth_ variable, and **y** the response _N_ -vector.
All matrices are bold; hence **X** might represent the _N_ × _p_ matrix of observed
predictors, and **Θ** a _p_ × _p_ precision matrix. This allows us to use _xi_ ∈R _p_ to
represent the vector of _p_ features for observation _i_ (i.e., _xTi_ is the _ith_ row of
**X** ), while **x** _k_ is the _kth_ column of **X** , without ambiguity.



```
Chapter 2
```
## The Lasso for Linear Models

In this chapter, we introduce the lasso estimator for linear regression. We
describe the basic lasso method, and outline a simple approach for its im-
plementation. We relate the lasso to ridge regression, and also view it as a
Bayesian estimator.

### 2.1 Introduction

In the linear regression setting, we are given _N_ samples{( _xi,yi_ )} _Ni_ =1, where
each _xi_ = ( _xi_ 1 _,...,xip_ ) is a _p_ -dimensional vector of features or predictors, and
each _yi_ ∈Ris the associated response variable. Our goal is to approximate
the response variable _yi_ using a linear combination of the predictors

```
η ( xi ) = β 0 +
```
```
∑ p
```
```
j =
```
```
xijβj. (2.1)
```
The model is parametrized by the vector of regression weights _β_ =
( _β_ 1 _,...,βp_ )∈R _p_ and an intercept (or “bias”) term _β_ 0 ∈R.
The usual “least-squares” estimator for the pair ( _β_ 0 _,β_ ) is based on mini-
mizing squared-error loss:

```
minimize
β 0 ,β
```
###### 

###### 

###### 

###### 1

###### 2 N

###### ∑ N

```
i =
```
###### (

```
yi − β 0 −
```
```
∑ p
```
```
j =
```
```
xijβj
```
###### ) 2

###### 

###### 

###### 

###### . (2.2)

There are two reasons why we might consider an alternative to the least-
squares estimate. The first reason is _prediction accuracy_ : the least-squares
estimate often has low bias but large variance, and prediction accuracy can
sometimes be improved by shrinking the values of the regression coefficients,
or setting some coefficients to zero. By doing so, we introduce some bias but
reduce the variance of the predicted values, and hence may improve the overall
prediction accuracy (as measured in terms of the mean-squared error). The
second reason is for the purposes of _interpretation_. With a large number of
predictors, we often would like to identify a smaller subset of these predictors
that exhibit the strongest effects.

```
7
```

###### 8 THE LASSO FOR LINEAR MODELS

This chapter is devoted to discussion of the _lasso_ , a method that combines
the least-squares loss (2.2) with an _`_ 1 -constraint, or bound on the sum of the
absolute values of the coefficients. Relative to the least-squares solution, this
constraint has the effect of shrinking the coefficients, and even setting some
to zero.^1 In this way it provides an automatic way for doing model selection
in linear regression. Moreover, unlike some other criteria for model selection,
the resulting optimization problem is convex, and can be solved efficiently for
large problems.

### 2.2 The Lasso Estimator

Given a collection of _N_ predictor-response pairs{( _xi,yi_ )} _Ni_ =1, the lasso finds

the solution ( _β_ ̂ 0 _,β_ ̂) to the optimization problem

```
minimize
β 0 ,β
```
###### 

###### 

###### 

###### 1

###### 2 N

###### ∑ N

```
i =
```
```
( yi − β 0 −
```
```
∑ p
```
```
j =
```
```
xijβj )^2
```
###### 

###### 

###### 

```
subject to
```
```
∑ p
```
```
j =
```
```
| βj |≤ t.
```
###### (2.3)

The constraint

∑ _p
j_ =1| _βj_ | ≤ _t_ can be written more compactly as the _`_^1 -norm
constraint‖ _β_ ‖ 1 ≤ _t_. Furthermore, (2.3) is often represented using matrix-
vector notation. Let **y** = ( _y_ 1 _,...,yN_ ) denote the _N_ -vector of responses, and
**X** be an _N_ × _p_ matrix with _xi_ ∈R _p_ in its _ith_ row, then the optimization
problem (2.3) can be re-expressed as

```
minimize
β 0 ,β
```
###### {

###### 1

###### 2 N

```
‖ y − β 0 1 − X β ‖^22
```
###### }

```
subject to‖ β ‖ 1 ≤ t ,
```
###### (2.4)

where **1** is the vector of _N_ ones, and‖·‖ 2 denotes the usual Euclidean norm
on vectors. The bound _t_ is a kind of “budget”: it limits the sum of the abso-
lute values of the parameter estimates. Since a shrunken parameter estimate
corresponds to a more heavily-constrained model, this budget limits how well
we can fit the data. It must be specified by an external procedure such as
cross-validation, which we discuss later in the chapter.
Typically, we first standardize the predictors **X** so that each column is
centered ( _N_^1

###### ∑ N

```
i =1 xij = 0) and has unit variance (
```
```
1
N
```
###### ∑ N

```
i =1 x
2
ij = 1). Without
```
(^1) A _lasso_ is a long rope with a noose at one end, used to catch horses and cattle. In
a figurative sense, the method “lassos” the coefficients of the model. In the original lasso
paper (Tibshirani 1996), the name “lasso” was also introduced as an acronym for “Least
Absolute Selection and Shrinkage Operator.”
Pronunciation: in the US “lasso” tends to be pronounced “lass-oh” (oh as in goat), while in
the UK “lass-oo.” In the OED (2nd edition, 1965): “lasso is pronounced l ̆asoo by those who
use it, and by most English people too.”


###### THE LASSO ESTIMATOR 9

standardization, the lasso solutions would depend on the units (e.g., feet ver-
sus meters) used to measure the predictors. On the other hand, we typically
would not standardize if the features were measured in the same units. For
convenience, we also assume that the outcome values _yi_ have been centered,
meaning that _N_^1

###### ∑ N

_i_ =1 _yi_ = 0. These centering conditions are convenient, since
they mean that we can omit the intercept term _β_ 0 in the lasso optimization.
Given an optimal lasso solution _β_ ̂on the centered data, we can recover the
optimal solutions for the uncentered data: _β_ ̂is the same, and the intercept _β_ ̂ 0
is given by

```
β ̂ 0 = ̄ y −
```
```
∑ p
```
```
j =
```
```
̄ xjβ ̂ j,
```
where ̄ _y_ and{ _x_ ̄ _j_ } _p_ 1 are the original means.^2 For this reason, we omit the
intercept _β_ 0 from the lasso for the remainder of this chapter.
It is often convenient to rewrite the lasso problem in the so-called La-
grangian form

```
minimize
β ∈R p
```
###### {

###### 1

###### 2 N

```
‖ y − X β ‖^22 + λ ‖ β ‖ 1
```
###### }

###### , (2.5)

for some _λ_ ≥0. By Lagrangian duality, there is a one-to-one correspondence
between the constrained problem (2.3) and the Lagrangian form (2.5): for
each value of _t_ in the range where the constraint‖ _β_ ‖ 1 ≤ _t_ is active, there is
a corresponding value of _λ_ that yields the same solution from the Lagrangian
form (2.5). Conversely, the solution _β_ ̂ _λ_ to problem (2.5) solves the bound
problem with _t_ =‖ _β_ ̂ _λ_ ‖ 1.
We note that in many descriptions of the lasso, the factor 1 _/_ 2 _N_ appearing
in (2.3) and (2.5) is replaced by 1 _/_ 2 or simply 1. Although this makes no
difference in (2.3), and corresponds to a simple reparametrization of _λ_ in
(2.5), this kind of standardization makes _λ_ values comparable for different
sample sizes (useful for cross-validation).
The theory of convex analysis tells us that necessary and sufficient condi-
tions for a solution to problem (2.5) take the form

###### −

###### 1

###### N

```
〈 x j, y − X β 〉+ λsj = 0 , j = 1 ,...,p. (2.6)
```
Here each _sj_ is an unknown quantity equal to sign( _βj_ ) if _βj_ 6 = 0 and some
value lying in [− 1 _,_ 1] otherwise—that is, it is a subgradient for the absolute
value function (see Chapter 5 for details). In other words, the solutions _β_ ˆ
to problem (2.5) are the same as solutions ( _β,_ ˆ _s_ ˆ) to (2.6). This system is a
form of the so-called Karush–Kuhn–Tucker (KKT) conditions for problem
(2.5). Expressing a problem in subgradient form can be useful for designing

(^2) This is typically only true for linear regression with squared-error loss; it’s not true, for
example, for lasso logistic regression.


###### 10 THE LASSO FOR LINEAR MODELS

algorithms for finding its solutions. More details are given in Exercises (2.3)
and (2.4).
As an example of the lasso, let us consider the data given in Table 2.1, taken
from Thomas (1990). The outcome is the total overall reported crime rate per

```
Table 2.1 Crime data: Crime rate and five predictors, forN = 50 U.S. cities.
city funding hs not-hs college college4 crime rate
1 40 74 11 31 20 478
2 32 72 11 43 18 494
3 57 70 18 16 16 643
4 31 71 11 25 19 341
5 67 72 9 29 24 773
..
.
```
```
..
.
```
```
..
.
```
```
..
.
```
```
..
.
50 66 67 26 18 16 940
```
one million residents in 50 U.S cities. There are five predictors: annual police
funding in dollars per resident, percent of people 25 years and older with four
years of high school, percent of 16- to 19-year olds not in high school and not
high school graduates, percent of 18- to 24-year olds in college, and percent
of people 25 years and older with at least four years of college. This small
example is for illustration only, but helps to demonstrate the nature of the
lasso solutions. Typically the lasso is most useful for much larger problems,
including “wide” data for which _p_  _N_.
The left panel of Figure 2.1 shows the result of applying the lasso with
the bound _t_ varying from zero on the left, all the way to a large value on
the right, where it has no effect. The horizontal axis has been scaled so that
the maximal bound, corresponding to the least-squares estimates _β_ ̃, is one.
We see that for much of the range of the bound, many of the estimates are
exactly zero and hence the corresponding predictor(s) would be excluded from
the model. Why does the lasso have this model selection property? It is due
to the geometry that underlies the _`_ 1 constraint‖ _β_ ‖ 1 ≤ _t_. To understand this
better, the right panel shows the estimates from _ridge regression_ , a technique
that predates the lasso. It solves a criterion very similar to (2.3):

```
minimize
β 0 ,β
```
###### 

###### 

###### 

###### 1

###### 2 N

###### ∑ N

```
i =1
```
```
( yi − β 0 −
```
```
∑ p
```
```
j =1
```
```
xijβj )^2
```
###### 

###### 

###### 

```
subject to
```
```
∑ p
```
```
j =1
```
```
β^2 j ≤ t^2.
```
###### (2.7)

The ridge profiles in the right panel have roughly the same shape as the lasso
profiles, but are not equal to zero except at the left end. Figure 2.2 contrasts
the two constraints used in the lasso and ridge regression. The residual sum


###### THE LASSO ESTIMATOR 11

```
0.0 0.2 0.4 0.6 0.8 1.0
```
```
−5
```
```
0
```
```
5
```
```
10
```
```
Coefficients
```
```
hs
```
```
college
```
```
college4not−hs
```
```
funding
```
```
Lasso
```
```
0.0 0.2 0.4 0.6 0.8 1.0
```
```
−5
```
```
0
```
```
5
```
```
10
```
```
Coefficients
```
```
hs
```
```
college
```
```
college4not−hs
```
```
funding
```
```
Ridge Regression
```
```
‖βˆ‖ 1 /‖β ̃‖ 1 ‖βˆ‖ 2 /‖β ̃‖ 2
```
**Figure 2.1** _Left: Coefficient path for the lasso, plotted versus the`_ 1 _norm of the
coefficient vector, relative to the norm of the unrestricted least-squares estimateβ_ ̃_.
Right: Same for ridge regression, plotted against the relative`_ 2 _norm._

(^2) β^ β^
β**..**
1
β 2
β 1 β
**Figure 2.2** _Estimation picture for the lasso (left) and ridge regression (right). The
solid blue areas are the constraint regions_ | _β_ 1 |+| _β_ 2 |≤ _tandβ_ 12 + _β_^22 ≤ _t_^2 _, respectively,
while the red ellipses are the contours of the residual-sum-of-squares function. The
pointβ_ ̂ _depicts the usual (unconstrained) least-squares estimate._


###### 12 THE LASSO FOR LINEAR MODELS

**Table 2.2** _Results from analysis of the crime data. Left panel shows the least-squares
estimates, standard errors, and their ratio (Z-score). Middle and right panels show
the corresponding results for the lasso, and the least-squares estimates applied to the
subset of predictors chosen by the lasso._

```
LS coef SE Z Lasso SE Z LS SE Z
funding 10.98 3.08 3.6 8.84 3.55 2.5 11.29 2.90 3.9
hs -6.09 6.54 -0.9 -1.41 3.73 -0.4 -4.76 4.53 -1.1
not-hs 5.48 10.05 0.5 3.12 5.05 0.6 3.44 7.83 0.4
college 0.38 4.42 0.1 0.0 - - 0.0 - -
college4 5.50 13.75 0.4 0.0 - - 0.0 - -
```
of squares has elliptical contours, centered at the full least-squares estimates.
The constraint region for ridge regression is the disk _β_ 12 + _β_^22 ≤ _t_^2 , while that
for lasso is the diamond| _β_ 1 |+| _β_ 2 |≤ _t_. Both methods find the first point where
the elliptical contours hit the constraint region. Unlike the disk, the diamond
has corners; if the solution occurs at a corner, then it has one parameter
_βj_ equal to zero. When _p >_ 2, the diamond becomes a rhomboid, and has
many corners, flat edges, and faces; there are many more opportunities for
the estimated parameters to be zero (see Figure 4.2 on page 58.)
We use the term _sparse_ for a model with few nonzero coefficients. Hence a
key property of the _`_ 1 -constraint is its ability to yield sparse solutions. This
idea can be applied in many different statistical models, and is the central
theme of this book.
Table 2.2 shows the results of applying three fitting procedures to the
crime data. The lasso bound _t_ was chosen by cross-validation, as described
in Section 2.3. The left panel corresponds to the full least-squares fit, while
the middle panel shows the lasso fit. On the right, we have applied least-
squares estimation to the subset of three predictors with nonzero coefficients
in the lasso. The standard errors for the least-squares estimates come from the
usual formulas. No such simple formula exists for the lasso, so we have used
the bootstrap to obtain the estimate of standard errors in the middle panel
(see Exercise 2.6; Chapter 6 discusses some promising new approaches for
post-selection inference). Overall it appears thatfundinghas a large effect,
probably indicating that police resources have been focused on higher crime
areas. The other predictors have small to moderate effects.
Note that the lasso sets two of the five coefficients to zero, and tends to
shrink the coefficients of the others toward zero relative to the full least-squares
estimate. In turn, the least-squares fit on the subset of the three predictors
tends to expand the lasso estimates away from zero. The nonzero estimates
from the lasso tend to be biased toward zero, so the debiasing in the right
panel can often improve the prediction error of the model. This two-stage
process is also known as the _relaxed lasso_ (Meinshausen 2007).


###### CROSS-VALIDATION AND INFERENCE 13

### 2.3 Cross-Validation and Inference

The bound _t_ in the lasso criterion (2.3) controls the complexity of the model;
larger values of _t_ free up more parameters and allow the model to adapt
more closely to the training data. Conversely, smaller values of _t_ restrict the
parameters more, leading to sparser, more interpretable models that fit the
data less closely. Forgetting about interpretability, we can ask for the value
of _t_ that gives the most accurate model for predicting independent test data
from the same population. Such accuracy is called the _generalization_ ability of
the model. A value of _t_ that is too small can prevent the lasso from capturing
the main signal in the data, while too large a value can lead to overfitting.
In this latter case, the model adapts to the noise as well as the signal that is
present in the training data. In both cases, the prediction error on a test set
will be inflated. There is usually an intermediate value of _t_ that strikes a good
balance between these two extremes, and in the process, produces a model
with some coefficients equal to zero.
In order to estimate this best value for _t_ , we can create artificial training
and test sets by splitting up the given dataset at random, and estimating
performance on the test data, using a procedure known as _cross-validation_.
In more detail, we first randomly divide the full dataset into some number of
groups _K >_ 1. Typical choices of _K_ might be 5 or 10, and sometimes _N_. We
fix one group as the test set, and designate the remaining _K_ −1 groups as
the training set. We then apply the lasso to the training data for a range of
different _t_ values, and we use each fitted model to predict the responses in the
test set, recording the mean-squared prediction errors for each value of _t_. This
process is repeated a total of _K_ times, with each of the _K_ groups getting the
chance to play the role of the test data, with the remaining _K_ −1 groups used
as training data. In this way, we obtain _K_ different estimates of the prediction
error over a range of values of _t_. These _K_ estimates of prediction error are
averaged for each value of _t_ , thereby producing a _cross-validation error curve_.
Figure 2.3 shows the cross-validation error curve for the crime-data ex-
ample, obtained using _K_ = 10 splits. We plot the estimated mean-squared
prediction error versus the relative bound ̃ _t_ =‖ _β_ ̂( _t_ )‖ 1 _/_ ‖ _β_ ̃‖ 1 , where the esti-

mate _β_ ̂( _t_ ) correspond to the lasso solution for bound _t_ and _β_ ̃is the ordinary
least-squares solution. The error bars in Figure 2.3 indicate plus and minus
one standard error in the cross-validated estimates of the prediction error. A
vertical dashed line is drawn at the position of the minimum ( ̃ _t_ = 0_._ 56) while
a dotted line is drawn at the “one-standard-error rule” choice ( _t_ ̃= 0_._ 03). This
is the smallest value of _t_ yielding a CV error no more than one standard error
above its minimum value. The number of nonzero coefficients in each model is
shown along the top. Hence the model that minimizes the CV error has three
predictors, while the one-standard-error-rule model has just one.
We note that the cross-validation process above focused on the bound
parameter _t_. One can just as well carry out cross-validation in the Lagrangian


###### 14 THE LASSO FOR LINEAR MODELS

```
0.0 0.2 0.4 0.6 0.8 1.0
```
```
5e+04
```
```
7e+04
```
```
9e+04
```
```
Relative Bound
```
```
CV Mean−Squared Error
```
```
0 1 1 1 1 2 2 3 3 3 3 4 4 5 5
```
**Figure 2.3** _Cross-validated estimate of mean-squared prediction error, as a function
of the relative`_ 1 _bound_ ̃ _t_ =‖ _β_ ̂( _t_ )‖ 1 _/_ ‖ _β_ ̃‖ 1_. Hereβ_ ̂( _t_ ) _is the lasso estimate correspond-
ing to the`_ 1 _boundtandβ_ ̃ _is the ordinary least-squares solution. Included are the
location of the minimum, pointwise standard-error bands, and the “one-standard-
error” location. The standard errors are large since the sample sizeNis only 50._

form (2.5), focusing on the parameter _λ_. The two methods will give similar but
not identical results, since the mapping between _t_ and _λ_ is data-dependent.

### 2.4 Computation of the Lasso Solution

The lasso problem is a convex program, specifically a quadratic program (QP)
with a convex constraint. As such, there are many sophisticated QP meth-
ods for solving the lasso. However there is a particularly simple and effective
computational algorithm, that gives insight into how the lasso works. For
convenience, we rewrite the criterion in Lagrangian form:

```
minimize
β ∈R p
```
###### 

###### 

###### 

###### 1

###### 2 N

###### ∑ N

```
i =1
```
```
( yi −
```
```
∑ p
```
```
j =1
```
```
xijβj )^2 + λ
```
```
∑ p
```
```
j =1
```
```
| βj |
```
###### 

###### 

###### 

###### . (2.8)

As before, we will assume that both _yi_ and the features _xij_ have been stan-
dardized so that _N_^1

###### ∑

```
iyi = 0,
```
```
1
N
```
###### ∑

```
ixij = 0, and
```
```
1
N
```
###### ∑

```
ix
```
2
_ij_ = 1. In this
case, the intercept term _β_ 0 can be omitted. The Lagrangian form is especially
convenient for numerical computation of the solution by a simple procedure
known as _coordinate descent_.


###### COMPUTATION OF THE LASSO SOLUTION 15

#### 2.4.1 Single Predictor: Soft Thresholding

Let’s first consider a single predictor setting, based on samples{( _zi,yi_ )} _Ni_ =1
(for convenience we have given the name _zi_ to this single _xi_ 1 ). The problem
then is to solve

```
minimize
β
```
###### {

###### 1

###### 2 N

###### ∑ N

```
i =1
```
```
( yi − ziβ )^2 + λ | β |
```
###### }

###### . (2.9)

The standard approach to this univariate minimization problem would be to
take the gradient (first derivative) with respect to _β_ , and set it to zero. There
is a complication, however, because the absolute value function| _β_ |does not
have a derivative at _β_ = 0. However we can proceed by direct inspection of
the function (2.9), and find that

```
β ̂=
```
###### 

###### 

###### 

```
1
N 〈 z , y 〉− λ if
```
```
1
N 〈 z , y 〉 > λ,
0 if N^1 |〈 z , y 〉| ≤ λ,
1
N 〈 z , y 〉+ λ if
```
```
1
N 〈 z , y 〉 < − λ.
```
###### (2.10)

(Exercise 2.2), which we can write succinctly as

```
β ̂=S λ (^1
N 〈 z , y 〉
```
###### )

###### . (2.11)

Here the _soft-thresholding operator_

```
S λ ( x ) = sign( x )
```
###### (

```
| x |− λ
```
###### )

###### + (2.12)

translates its argument _x_ toward zero by the amount _λ_ , and sets it to zero
if| _x_ | ≤ _λ_.^3 See Figure 2.4 for an illustration. Notice that for standardized
data with _N_^1

###### ∑

_iz_
2
_i_ = 1, (2.11) is just a soft-thresholded version of the usual
least-squares estimate _β_ ̃= _N_^1 〈 **z** _,_ **y** 〉. One can also derive these results using
the notion of subgradients (Exercise 2.3).

#### 2.4.2 Multiple Predictors: Cyclic Coordinate Descent

Using this intuition from the univariate case, we can now develop a simple
coordinatewise scheme for solving the full lasso problem (2.5). More precisely,
we repeatedly cycle through the predictors in some fixed (but arbitrary) order
(say _j_ = 1 _,_ 2 _,...,p_ ), where at the _jth_ step, we update the coefficient _βj_ by
minimizing the objective function in this coordinate while holding fixed all
other coefficients{ _β_ ̂ _k,k_ 6 = _j_ }at their current values.
Writing the objective in (2.5) as

```
1
2 N
```
###### ∑ N

```
i =1
```
```
( yi −
```
###### ∑

```
k 6 = j
```
```
xikβk − xijβj )^2 + λ
```
###### ∑

```
k 6 = j
```
```
| βk |+ λ | βj | , (2.13)
```
(^3) _t_ +denotes the positive part of _t_ ∈R, equal to _t_ if _t >_ 0 and 0 otherwise.


###### 16 THE LASSO FOR LINEAR MODELS

```
Sλ(x) λ
```
```
(0,0) x
```
**Figure 2.4** _Soft thresholding function_ S _λ_ ( _x_ ) = sign( _x_ ) (| _x_ |− _λ_ )+ _is shown in blue
(broken lines), along with the_ 45 ◦ _line in black._

we see that solution for each _βj_ can be expressed succinctly in terms of the

_partial residualr_ ( _ij_ )= _yi_ −

###### ∑

_k_ 6 = _jxik
β_ ̂ _k_ , which removes from the outcome the
current fit from all but the _jth_ predictor. In terms of this partial residual, the
_jth_ coefficient is updated as

```
β ̂ j =S λ
```
###### (

```
1
N 〈 x j, r
```
```
( j )〉
```
###### )

###### . (2.14)

Equivalently, the update can be written as

```
β ̂ j ←S λ
```
###### (

```
β ̂ j +^1
N 〈 x j, r 〉
```
###### )

###### , (2.15)

where _ri_ = _yi_ −

∑ _p
j_ =1 _xij
β_ ̂ _j_ are the full residuals (Exercise 2.4). The overall
algorithm operates by applying this soft-thresholding update (2.14) repeatedly
in a cyclical manner, updating the coordinates of _β_ ̂(and hence the residual
vectors) along the way.
Why does this algorithm work? The criterion (2.5) is a convex function of
_β_ and so has no local minima. The algorithm just described corresponds to
the method of _cyclical coordinate descent_ , which minimizes this convex objec-
tive along each coordinate at a time. Under relatively mild conditions (which
apply here), such coordinate-wise minimization schemes applied to a convex
function converge to a global optimum. It is important to note that some
conditions are required, because there are instances, involving nonseparable
penalty functions, in which coordinate descent schemes can become “jammed.”
Further details are in given in Chapter 5.
Note that the choice _λ_ = 0 in (2.5) delivers the solution to the ordinary
least-squares problem. From the update (2.14), we see that the algorithm
does a univariate regression of the partial residual onto each predictor, cycling
through the predictors until convergence. When the data matrix **X** is of full


###### DEGREES OF FREEDOM 17

rank, this point of convergence is the least-squares solution. However, it is not
a particularly efficient method for computing it.
In practice, one is often interested in finding the lasso solution not just for
a single fixed value of _λ_ , but rather the entire path of solutions over a range
of possible _λ_ values (as in Figure 2.1). A reasonable method for doing so is to
begin with a value of _λ_ just large enough so that the only optimal solution is
the all-zeroes vector. As shown in Exercise 2.1, this value is equal to _λmax_ =
max _j_ | _N_^1 〈 **x** _j,_ **y** 〉|. Then we decrease _λ_ by a small amount and run coordinate
descent until convergence. Decreasing _λ_ again and using the previous solution
as a “warm start,” we then run coordinate descent until convergence. In this
way we can efficiently compute the solutions over a grid of _λ_ values. We refer
to this method as _pathwise coordinate descent_.
Coordinate descent is especially fast for the lasso because the coordinate-
wise minimizers are explicitly available (Equation (2.14)), and thus an iter-
ative search along each coordinate is not needed. Secondly, it exploits the
sparsity of the problem: for large enough values of _λ_ most coefficients will be
zero and will not be moved from zero. In Section 5.4, we discuss computational
hedges for guessing the active set, which speed up the algorithm dramatically.

_Homotopy methods_ are another class of techniques for solving the lasso.
They produce the entire path of solutions in a sequential fashion, starting at
zero. This path is actually piecewise linear, as can be seen in Figure 2.1 (as a
function of _t_ or _λ_ ). The _least angle regression_ (LARS) algorithm is a homotopy
method that efficiently constructs the piecewise linear path, and is described
in Chapter 5.

#### 2.4.3 Soft-Thresholding and Orthogonal Bases

The soft-thresholding operator plays a central role in the lasso and also in
signal denoising. To see this, notice that the coordinate minimization scheme
above takes an especially simple form if the predictors are orthogonal, mean-
ing that _N_^1 〈 **x** _j,_ **x** _k_ 〉= 0 for each _j_ 6 = _k_. In this case, the update (2.14) sim-

plifies dramatically, since _N_^1 〈 **x** _j,_ **_r_** ( _j_ )〉= _N_^1 〈 **x** _j,_ **y** 〉so that _β_ ̂ _j_ is simply the
soft-thresholded version of the univariate least-squares estimate of **y** regressed
against **x** _j_. Thus, in the special case of an orthogonal design, the lasso has an
explicit closed-form solution, and no iterations are required.
Wavelets are a popular form of orthogonal bases, used for smoothing and
compression of signals and images. In wavelet smoothing one represents the
data in a wavelet basis, and then denoises by soft-thresholding the wavelet
coefficients. We discuss this further in Section 2.10 and in Chapter 10.

### 2.5 Degrees of Freedom

Suppose we have _p_ predictors, and fit a linear regression model using only a
subset of _k_ of these predictors. Then if these _k_ predictors were chosen without


###### 18 THE LASSO FOR LINEAR MODELS

regard to the response variable, the fitting procedure “spends” _k_ degrees of
freedom. This is a loose way of saying that the standard test statistic for testing
the hypothesis that all _k_ coefficients are zero has a Chi-squared distribution
with _k_ degrees of freedom (with the error variance _σ_^2 assumed to be known)
However if the _k_ predictors were chosen using knowledge of the response
variable, for example to yield the smallest training error among all subsets of
size _k_ , then we would expect that the fitting procedure spends more than _k_
degrees of freedom. We call such a fitting procedure _adaptive_ , and clearly the
lasso is an example of one.
Similarly, a forward-stepwise procedure in which we sequentially add the
predictor that most decreases the training error is adaptive, and we would
expect that the resulting model uses more than _k_ degrees of freedom after _k_
steps. For these reasons and in general, one cannot simply count as degrees
of freedom the number of nonzero coefficients in the fitted model. However, it
turns out that for the lasso, one _can_ count degrees of freedom by the number
of nonzero coefficients, as we now describe.
First we need to define precisely what we mean by the degrees of freedom
of an adaptively fitted model. Suppose we have an additive-error model, with

```
yi = f ( xi ) + i, i = 1 ,...,N, (2.16)
```
for some unknown _f_ and with the errors _i_ iid (0 _,σ_^2 ). If the _N_ sample pre-
dictions are denoted by **y** ̂, then we define

```
df( y ̂) : =
```
###### 1

```
σ^2
```
###### ∑ N

```
i =1
```
```
Cov
```
###### (

```
y ̂ i,yi
```
###### )

###### . (2.17)

The covariance here is taken over the randomness in the response vari-
ables{ _yi_ } _Ni_ =1 with the predictors held fixed. Thus, the degrees of freedom
corresponds to the total amount of _self-influence_ that each response measure-
ment has on its prediction. The more the model fits—that is, adapts—to the
data, the larger the degrees of freedom. In the case of a fixed linear model,
using _k_ predictors chosen independently of the response variable, it is easy
to show that df(̂ **y** ) = _k_ (Exercise 2.7). However, under adaptive fitting, it is
typically the case that the degrees of freedom is larger than _k_.
Somewhat miraculously, one can show that for the lasso, with a fixed
penalty parameter _λ_ , the number of nonzero coefficients _kλ_ is an unbiased esti-
mate of the degrees of freedom^4 (Zou, Hastie and Tibshirani 2007, Tibshirani 2
and Taylor 2012). As discussed earlier, a variable-selection method like
forward-stepwise regression uses more than _k_ degrees of freedom after _k_ steps.
Given the apparent similarity between forward-stepwise regression and the
lasso, how can the lasso have this simple degrees of freedom property? The

(^4) An even stronger statement holds for the LAR path, where the degrees of freedom after
_k_ steps is exactly _k_ , under some conditions on **X**. The LAR path relates closely to the lasso,
and is described in Section 5.6.


###### UNIQUENESS OF THE LASSO SOLUTIONS 19

reason is that the lasso not only selects predictors (which inflates the degrees
of freedom), but also shrinks their coefficients toward zero, relative to the
usual least-squares estimates. This shrinkage turns out to be just the right
amount to bring the degrees of freedom down to _k_. This result is useful be-
cause it gives us a qualitative measure of the amount of fitting that we have
done at any point along the lasso path.
In the general setting, a proof of this result is quite difficult. In the special
case of an orthogonal design, it is relatively easy to prove, using the fact
that the lasso estimates are simply soft-thresholded versions of the univariate
regression coefficients for the orthogonal design. We explore the details of this
argument in Exercise 2.8. This idea is taken one step further in Section 6.3.1
where we describe the _covariance test_ for testing the significance of predictors
in the context of the lasso.

### 2.6 Uniqueness of the Lasso Solutions

We first note that the theory of convex duality can be used to show that when
the columns of **X** are in general position, then for _λ >_ 0 the solution to the
lasso problem (2.5) is unique. This holds even when _p_ ≥ _N_ , although then the
number of nonzero coefficients in any lasso solution is at most _N_ (Rosset, Zhu
and Hastie 2004, Tibshirani 2 2013). Now when the predictor matrix **X** is not of
full column rank, the least squares fitted values are unique, but the parameter
estimates themselves are not. The non-full-rank case can occur when _p_ ≤ _N_
due to collinearity, and always occurs when _p > N_. In the latter scenario,
there are an infinite number of solutions _β_ ̂that yield a perfect fit with zero
training error. Now consider the lasso problem in Lagrange form (2.5) for
_λ >_ 0. As shown in Exercise 2.5, the fitted values **X** _β_ ̂are unique. But it
turns out that the solution _β_ ̂may not be unique. Consider a simple example
with two predictors **x** 1 and **x** 2 and response **y** , and suppose the lasso solution
coefficients _β_ ̂at _λ_ are ( _β_ ̂ 1 _,β_ ̂ 2 ). If we now include a third predictor **x** 3 = **x** 2
into the mix, an identical copy of the second, then for any _α_ ∈[0 _,_ 1], the vector
_β_ ̃( _α_ ) = ( _β_ ̂ 1 _, α_ · _β_ ̂ 2 _,_ (1− _α_ )· _β_ ̂ 2 ) produces an identical fit, and has _`_ 1 norm

‖ _β_ ̃( _α_ )‖ 1 =‖ _β_ ̂‖ 1. Consequently, for this model (in which we might have either
_p_ ≤ _N_ or _p > N_ ), there is an infinite family of solutions.
In general, when _λ >_ 0, one can show that if the columns of the model
matrix **X** are in _general position_ , then the lasso solutions are unique. To be
precise, we say the columns{ **x** _j_ } _pj_ =1are in general position if any affine sub-
spaceL⊂R _N_ of dimension _k < N_ contains at most _k_ + 1 elements of the
set{± **x** 1 _,_ ± **x** 2 _,..._ ± **x** _p_ }, excluding antipodal pairs of points (that is, points
differing only by a sign flip). We note that the data in the example in the
previous paragraph are not in general position. If the _X_ data are drawn from
a continuous probability distribution, then with probability one the data are
in general position and hence the lasso solutions will be unique. As a re-
sult, non-uniqueness of the lasso solutions can only occur with discrete-valued
data, such as those arising from dummy-value coding of categorical predic-


###### 20 THE LASSO FOR LINEAR MODELS

tors. These results have appeared in various forms in the literature, with a
summary given by Tibshirani 2 (2013).
We note that numerical algorithms for computing solutions to the lasso will
typically yield valid solutions in the non-unique case. However, the particular
solution that they deliver can depend on the specifics of the algorithm. For
example with coordinate descent, the choice of starting values can affect the
final solution.

### 2.7 A Glimpse at the Theory

There is a large body of theoretical work on the behavior of the lasso. It is
largely focused on the mean-squared-error consistency of the lasso, and recov-
ery of the nonzero support set of the true regression parameters, sometimes
called _sparsistency_. For MSE consistency, if _β_ ∗and _β_ ˆare the true and lasso-
estimated parameters, it can be shown that as _p,n_ →∞

```
‖ X ( β ˆ− β ∗)‖^22 /N ≤ C ·‖ β ∗‖ 1
```
###### √

```
log( p ) /N (2.18)
```
with high probability (Greenshtein and Ritov 2004, B ̈uhlmann and van de
Geer 2011, Chapter 6). Thus if‖ _β_ ∗‖ 1 = _o_ (

###### √

_N/_ log( _p_ )) then the lasso is
consistent for prediction. This means that the true parameter vector must
be sparse relative to the ratio _N/_ log( _p_ ). The result only assumes that the
design **X** is fixed and has no other conditions on **X**. Consistent recovery of
the nonzero support set requires more stringent assumptions on the level of
cross-correlation between the predictors inside and outside of the support set.
Details are given in Chapter 11.

### 2.8 The Nonnegative Garrote

The _nonnegative garrote_ (Breiman 1995)^5 is a two-stage procedure, with a
close relationship to the lasso.^6 Given an initial estimate of the regression
coefficients _β_ ̃∈R _p_ , we then solve the optimization problem

```
minimize
c ∈R p
```
###### 

###### 

###### 

###### ∑ N

```
i =1
```
###### (

```
yi −
```
```
∑ p
```
```
j =1
```
```
cjxijβ ̃ j
```
###### ) 2

###### 

###### 

###### 

```
subject to c 0 and‖ c ‖ 1 ≤ t,
```
###### (2.19)

where _c_ 0 means the vector has nonnegative coordinates. Finally, we set
_β_ ̂ _j_ = ˆ _cj_ · _β_ ̃ _j, j_ = 1 _,...,p._ There is an equivalent Lagrangian form for this
procedure, using a penalty _λ_ ‖ _c_ ‖ 1 for some regularization weight _λ_ ≥0, plus
the nonnegativity constraints.

(^5) A garrote is a device used for execution by strangulation or by breaking the neck. It is
a Spanish word, and is alternately spelled _garrotte_ or _garotte_. We are using the spelling in
the original paper of Breiman (1995).
(^6) Breiman’s paper was the inspiration for Tibshirani’s 1996 lasso paper.


###### THE NONNEGATIVE GARROTE 21

In the original paper (Breiman 1995), the initial _β_ ̃ was chosen to
be the ordinary-least-squares (OLS) estimate. Of course, when _p > N_ ,
these estimates are not unique; since that time, other authors (Yuan and
Lin 2007 _b_ , Zou 2006) have shown that the nonnegative garrote has attrac-
tive properties when we use other initial estimators such as the lasso, ridge
regression or the elastic net.

```
(0,0) β
```
```
Lasso
Garrote
```
**Figure 2.5** _Comparison of the shrinkage behavior of the lasso and the nonnegative
garrote for a single variable. Since theirλs are on different scales, we used 2 for the
lasso and 7 for the garrote to make them somewhat comparable. The garrote shrinks
smal ler values ofβmore severely than lasso, and the opposite for larger values._

The nature of the nonnegative garrote solutions can be seen when the
columns of **X** are orthogonal. Assuming that _t_ is in the range where the
equality constraint‖ _c_ ‖ 1 = _t_ can be satisfied, the solutions have the explicit
form

```
̂ cj =
```
###### (

###### 1 −

```
λ
β ̃^2
j
```
###### )

```
+
```
```
, j = 1 ,...,p, (2.20)
```
where _λ_ is chosen so that‖ˆ _c_ ‖ 1 = _t_. Hence if the coefficient _β_ ̃ _j_ is large, the
shrinkage factor will be close to 1 (no shrinkage), but if it is small the estimate
will be shrunk toward zero. Figure 2.5 compares the shrinkage behavior of the
lasso and nonnegative garrote. The latter exhibits the shrinkage behavior of
the nonconvex penalties (next section and Section 4.6). There is also a close
relationship between the nonnegative garrote and the _adaptive lasso_ , discussed
in Section 4.6; see Exercise 4.26.
Following this, Yuan and Lin (2007 _b_ ) and Zou (2006) have shown that the
nonnegative garrote is _path-consistent_ under less stringent conditions than the
lasso. This holds if the initial estimates are

###### √

_N_ -consistent, for example those
based on least squares (when _p < N_ ), the lasso, or the elastic net. “Path-
consistent” means that the solution path contains the true model somewhere
in its path indexed by _t_ or _λ_. On the other hand, the convergence of the
parameter estimates from the nonnegative garrote tends to be slower than
that of the initial estimate.


###### 22 THE LASSO FOR LINEAR MODELS

```
Table 2.3 Estimators ofβj from (2.21) in the
case of an orthonormal model matrix X.
q Estimator Formula
```
```
0 Best subset β ̃ j ·I[| β ̃ j | >
```
###### √

```
2 λ ]
1 Lasso sign( β ̃ j )(| β ̃ j |− λ )+
2 Ridge β ̃ j/ (1 + λ )
```
### 2.9 `q Penalties and Bayes Estimates

For a fixed real number _q_ ≥0, consider the criterion

```
minimize
β ∈R p
```
###### 

###### 

###### 

###### 1

###### 2 N

###### ∑ N

```
i =1
```
```
( yi −
```
```
∑ p
```
```
j =1
```
```
xijβj )^2 + λ
```
```
∑ p
```
```
j =1
```
```
| βj | q
```
###### 

###### 

###### 

###### . (2.21)

This is the lasso for∑ _q_ = 1 and ridge regression for _q_ = 2. For _q_ = 0, the term
_p
j_ =1| _βj_ |
_q_ counts the number of nonzero elements in _β_ , and so solving (2.21)

amounts to best-subset selection. Figure 2.6 displays the constraint regions
corresponding to these penalties for the case of two predictors ( _p_ = 2). Both

```
q= 4 q= 2 q= 1 q= 0. 5 q= 0. 1
```
**Figure 2.6** _Constraint regions_

```
∑ p
j =1| βj |
```
```
q ≤ 1 for different values ofq. Forq < 1 ,
```
_the constraint region is nonconvex._

the lasso and ridge regression versions of (2.21) amount to solving convex
programs, and so scale well to large problems. Best subset selection leads to
a nonconvex and combinatorial optimization problem, and is typically not
feasible with more than say _p_ = 50 predictors.
In the special case of an orthonormal model matrix **X** , all three proce-
dures have explicit solutions. Each method applies a simple coordinate-wise
transformation to the least-squares estimate _β_ ̃, as detailed in Table 2.9. Ridge
regression does a proportional shrinkage. The lasso translates each coefficient
by a constant factor _λ_ and truncates at zero, otherwise known as soft thresh-
olding. Best-subset selection applies the hard thresholding operator: it leaves
the coefficient alone if it is bigger than

###### √

2 _λ_ , and otherwise sets it to zero.
The lasso is special in that the choice _q_ = 1 is the smallest value of _q_
(closest to best-subset) that leads to a convex constraint region and hence a


###### SOME PERSPECTIVE 23

convex optimization problem. In this sense, it is the closest convex relaxation
of the best-subset selection problem.
There is also a Bayesian view of these estimators. Thinking of| _βj_ | _q_ as
proportional to the negative log-prior density for _βj_ , the constraint contours
represented in Figure 2.6 have the same shape as the equi-contours of the prior
distribution of the parameters. Notice that for _q_ ≤1, the prior concentrates
more mass in the coordinate directions. The prior corresponding to the _q_ = 1
case is an independent double exponential (or Laplace) distribution for each
parameter, with joint density (1 _/_ 2 _τ_ ) exp(−‖ _β_ ‖ 1 ) _/τ_ ) and _τ_ = 1 _/λ_. This means
that the lasso estimate is the Bayesian MAP (maximum _aposteriori_ ) estimator
using a Laplacian prior, as opposed to the mean of the posterior distribution,
which is not sparse. Similarly, if we sample from the posterior distribution
corresponding to the Laplace prior, we do not obtain sparse vectors. In order
to obtain sparse vectors via posterior sampling, one needs to start with a prior
distribution that puts a point mass at zero. Bayesian approaches to the lasso
are explored in Section 6.1.

### 2.10 Some Perspective

The lasso uses an _`_ 1 -penalty, and such penalties are now widely used in statis-
tics, machine learning, engineering, finance, and other fields. The lasso was
proposed by Tibshirani (1996), and was directly inspired by the nonnegative
garrote of Breiman (1995). Soft thresholding was popularized earlier in the
context of wavelet filtering by Donoho and Johnstone (1994); this is a popular
alternative to Fourier filtering in signal processing, being both “local in time
and frequency.” Since wavelet bases are orthonormal, wavelet filtering corre-
sponds to the lasso in the orthogonal **X** case (Section 2.4.1). Around the same
time as the advent of the lasso, Chen, Donoho and Saunders (1998) proposed
the closely related _basis pursuit_ method, which extends the ideas of wavelet fil-
tering to search for a sparse representation of a signal in over-complete bases
using an _`_ 1 -penalty. These are unions of orthonormal frames and hence no
longer completely mutually orthonormal.
Taking a broader perspective, _`_ 1 -regularization has a pretty lengthy his-
tory. For example Donoho and Stark (1989) discussed _`_ 1 -based recovery in
detail, and provided some guarantees for incoherent bases. Even earlier (and
mentioned in Donoho and Stark (1989)) there are related works from the
1980s in the geosciences community, for example Oldenburg, Scheuer and
Levy (1983) and Santosa and Symes (1986). In the signal processing world,
Alliney and Ruzinsky (1994) investigated some algorithmic issues associated
with _`_ 1 regularization. And there surely are many other authors who have
proposed similar ideas, such as Fuchs (2000). Rish and Grabarnik (2014) pro-
vide a modern introduction to sparse methods for machine learning and signal
processing.
In the last 10–15 years, it has become clear that the _`_ 1 -penalty has a
number of good properties, which can be summarized as follows:


###### 24 THE LASSO FOR LINEAR MODELS

_Interpretation of the final model:_ The _`_ 1 -penalty provides a natural way to
encourage or enforce sparsity and simplicity in the solution.
_Statistical efficiency:_ In the book _The Elements of Statistical Learning_
(Hastie, Tibshirani and Friedman 2009), the authors discuss an informal
“ _bet-on-sparsity principle_ .” Assume that the underlying true signal is sparse
and we use an _`_ 1 penalty to try to recover it. If our assumption is correct,
we can do a good job in recovering the true signal. Note that sparsity can
hold in the given bases (set of features) or a transformation of the features
(e.g., a wavelet bases). But if we are wrong—the underlying truth is not
sparse in the chosen bases—then the _`_ 1 penalty will not work well. However
in that instance, no method can do well, relative to the Bayes error. There
is now a large body of theoretical support for these loose statements: see
Chapter 11 for some results.
_Computational efficiency:`_ 1 -based penalties are convex and this fact and the
assumed sparsity can lead to significant computational advantages. If we
have 100 observations and one million features, and we have to estimate
one million nonzero parameters, then the computation is very challenging.
However, if we apply the lasso, then at most 100 parameters can be nonzero
in the solution, and this makes the computation much easier. More details
are given in Chapter 5.^7
In the remainder of this book, we describe many of the exciting develop-
ments in this field.

### Exercises

Ex. 2.1 Show that the smallest value of _λ_ such that the regression coefficients
estimated by the lasso are all equal to zero is given by

```
λ max= max
j
```
###### |

###### 1

###### N

```
〈 x j, y 〉|.
```
Ex. 2.2 Show that the soft-threshold estimator (2.12) yields the solution to
the single predictor lasso problem (2.9). (Do not make use of subgradients,
and note that **z** is standardized).

Ex. 2.3 _Soft thresholding and subgradients._ Since (2.9) is a convex function, it
is guaranteed to have a subgradient (see Chapter 5 for more details), and any
optimal solution must satisfy the _subgradient_ equation

###### −

###### 1

###### N

###### ∑ N

```
i =1
```
```
( yi − ziβ ) zi + λs = 0 , where s is a subgradient of| β |. (2.22)
```
For the absolute value function, subgradients take the form _s_ ∈sign( _β_ ), mean-
ing that _s_ = sign( _β_ ) when _β_ 6 = 0 and _s_ ∈[− 1 _,_ +1] when _β_ = 0. The general

(^7) Ridge regression also enjoys a similar efficiency in the _p_  _N_ case.


###### EXERCISES 25

theory of convex optimization, as discussed in Chapter 5, guarantees that any
pair ( _β,_ ̂̂ _s_ ) that is a solution to the zero subgradient Equation (2.22) with
̂ _s_ ∈sign( _β_ ̂) defines an optimal solution to the original minimization prob-
lem (2.9).
Solve Equation (2.22) and hence arrive at solutions (2.10) and (2.11).

Ex. 2.4 Show that the subgradient equations for Problem (2.5) take the form
given in (2.6). Hence derive expressions for coordinate descent steps (2.14)
and (2.15).

Ex. 2.5 _Uniqueness of fitted values from the lasso._ For some _λ_ ≥0, suppose
that we have two lasso solutions _β,_ ̂̂ _γ_ with common optimal value _c_ ∗.

```
(a) Show that it must be the case that X β ̂= X ̂ γ , meaning that the two
solutions must yield the same predicted values. ( Hint: If not, then use the
strict convexity of the function f ( u ) =‖ y − u ‖^22 and convexity of the ` 1 -
norm to establish a contradiction.)
(b) If λ > 0, show that we must have‖ β ̂‖ 1 =‖̂ γ ‖ 1.
```
(Tibshirani 2 2013).

Ex. 2.6 Here we use the bootstrap as the basis for inference with the lasso.

```
(a) For the crime data, apply the bootstrap to estimate the standard errors
of the estimated lasso coefficients, as in the middle section of Table 2.2. Use
the nonparametric bootstrap, sampling features and outcome values ( xi,yi )
with replacement from the observed data. Keep the bound t fixed at its
estimated value from the original lasso fit. Estimate as well the probability
that an estimated coefficient is zero.
(b) Repeat part (a), but now re-estimate λ ˆfor each bootstrap replication.
Compare the results to those in part (a).
```
Ex. 2.7 Consider a fixed linear model based on _k_ predictors and fit by least
squares. Show that its degrees of freedom (2.17) is equal to _k_.

Ex. 2.8 _Degrees of freedom for lasso in the orthogonal case._ Suppose that
_yi_ = _β_ 0 +

###### ∑

```
jxijβj + i where i ∼ N (0 ,σ
```
(^2) ), with the _xij_ fixed (non-random).
Assume that the features are centered and also assume they are uncorrelated,
so that

###### ∑

_ixijxik_ = 0 for all _j,k_. Stein’s lemma (Stein 1981) states that for
_Y_ ∼ _N_ ( _μ,σ_^2 ) and all absolutely continuous functions _g_ such thatE| _g_ ′( _Y_ )| _<_
∞,

```
E( g ( Y )( Y − μ )) = σ^2 E( g ′( Y )). (2.23)
```
Use this to show that the degrees of freedom (2.17) for the lasso in the or-
thogonal case is equal to _k_ , the number of nonzero estimated coefficients in
the solution.


###### 26 THE LASSO FOR LINEAR MODELS

Ex. 2.9 Derive the solutions (2.20) to the nonnegative garrote criterion (2.19).

Ex. 2.10 _Robust regression view of lasso._ Consider a robust version of the
standard linear regression problem, in which we wish to protect ourselves
against perturbations of the features. In order to do so, we consider the min-
max criterion

```
minimize
β
max
∆ ∈U
```
###### {

###### 1

###### 2 N

```
‖ y −( X + ∆ ) β ‖^22
```
###### }

###### , (2.24)

where the allowable perturbations **∆** : = ( **_δ_** 1 _,...,_ **_δ_** _p_ ) belong to the subset of
R _N_ × _p_

```
U: =
```
###### {

```
( δ 1 , δ 2 ,... δ p ) | ‖ δ j ‖ 2 ≤ cj for all j = 1 , 2 ,...,p
```
###### }

###### . (2.25)

Hence each feature value _xij_ can be perturbed by a maximum amount _cj_ , with
the _`_ 2 -norm of the overall perturbation vector for that feature bounded by _cj_.
The perturbations for different features also act independently of one another.
We seek the coefficients that minimize squared error under the “worst” allow-
able perturbation of the features. We assume that both **y** and the columns of
**X** have been standardized, and have not included an intercept.
Show that the solution to this problem is equivalent to

```
min
β ∈R p
```
###### 

###### 

###### 

###### 1

###### 2 N

```
‖ y − X β ‖^22 +
```
```
∑ p
```
```
j =1
```
```
cj | βj |
```
###### 

###### 

###### 

###### . (2.26)

In the special case _cj_ = _λ_ for all _j_ = 1 _,_ 2 _,...,p_ , we thus obtain the lasso,
so that it can be viewed as a method for guarding against uncertainty in the
measured predictor values, with more uncertainty leading to a greater amount
of shrinkage. (See Xu, Caramanis and Mannor (2010) for further details.)

Ex. 2.11 _Robust regression and constrained optimization._ This exercise doesn’t
involve the lasso itself, but rather a related use of the _`_ 1 -norm in regression.
We consider the model

```
yi =
```
```
∑ p
```
```
j =1
```
```
xijβj + γi + i
```
with _i_ ∼ _N_ (0 _,σ_^2 ) and _γi, i_ = 1 _,_ 2 _,...,N_ are unknown constants.
Let **_γ_** = ( _γ_ 1 _,γ_ 2 _,...,γN_ ) and consider minimization of

```
minimize
β ∈R p, γ ∈R N
```
###### 1

###### 2

###### ∑ N

```
i =1
```
```
( yi −
```
```
∑ p
```
```
j =1
```
```
xijβj − γi )^2 + λ
```
###### ∑ N

```
1
```
```
| γi |. (2.27)
```
The idea is that for each _i_ , _γi_ allows _yi_ to be an outlier; setting _γi_ = 0 means
that the observation is not deemed an outlier. The penalty term effectively
limits the number of outliers.


###### EXERCISES 27

```
(a) Show this problem is jointly convex in β and γ.
(b) Consider Huber’s loss function
```
```
ρ ( t ; λ ) =
```
###### {

```
λ | t |− λ^2 / 2 if| t | > λ
t^2 / 2 if| t |≤ λ.
```
###### (2.28)

```
This is a tapered squared-error loss; it is quadratic for| t | ≤ λ but linear
outside of that range, to reduce the effect of outliers on the estimation of β.
With the scale parameter σ fixed at one, Huber’s robust regression method
solves
```
```
minimize
β ∈R p
```
###### ∑ N

```
i =1
```
```
ρ ( yi −
```
```
∑ p
```
```
j =1
```
```
xijβj ; λ ). (2.29)
```
```
Show that problems (2.27) and (2.29) have the same solutions β ̂. (Antoniadis
2007, Gannaz 2007, She and Owen 2011).
```


```
Chapter 3
```
## Generalized Linear Models

In Chapter 2, we focused exclusively on linear regression models fit by least
squares. Such linear models are suitable when the response variable is quan-
titative, and ideally when the error distribution is Gaussian. However, other
types of response arise in practice. For instance, binary variables can be used
to indicate the presence or absence of some attribute (e.g., “cancerous” versus
“normal” cells in a biological assay, or “clicked” versus “not clicked” in web
browsing analysis); here the binomial distribution is more appropriate. Some-
times the response occurs as counts (e.g., number of arrivals in a queue, or
number of photons detected); here the Poisson distribution might be called
for. In this chapter, we discuss generalizations of simple linear models and the
lasso that are suitable for such applications.

### 3.1 Introduction

With a binary response coded in the form _Y_ ∈{ 0 _,_ 1 }, the linear logistic model
is often used: it models the log-likelihood ratio as the linear combination

```
log
```
```
Pr( Y = 1| X = x )
Pr( Y = 0| X = x )
```
```
= β 0 + βTx, (3.1)
```
where _X_ = ( _X_ 1 _,X_ 2 _,...Xp_ ) is a vector of predictors, _β_ 0 ∈Ris an intercept
term, and _β_ ∈R _p_ is a vector of regression coefficients. Inverting this transfor-
mation yields an expression for the conditional probability

```
Pr( Y = 1| X = x ) =
eβ^0 + β
```
```
Tx
```
```
1 + eβ^0 + βTx
```
###### . (3.2)

By inspection, without any restriction on the parameters ( _β_ 0 _,β_ ), the model
specifies probabilities lying in (0 _,_ 1). We typically fit logistic models by maxi-
mizing the binomial log-likelihood of the data.
The logit transformation (3.1) of the conditional probabilities is an exam-
ple of a _link function_. In general, a link function is a transformation of the
conditional meanE[ _Y_ | _X_ = _x_ ]—in this case, the conditional probability that
_Y_ = 1—to a more natural scale on which the parameters can be fit without
constraints. As another example, if the response _Y_ represents counts, taking

```
29
```

###### 30 GENERALIZED LINEAR MODELS

values in{ 0 _,_ 1 _,_ 2 _,..._ }, then we need to ensure that the conditional mean is
positive. A natural choice is the log-linear model

```
logE[ Y | X = x ] = β 0 + βTx, (3.3)
```
with its log link function. Here we fit the parameters by maximizing the Pois-
son log-likelihood of the data.
The models (3.1) and (3.3) are both special cases of _generalized linear mod-
els_ (McCullagh and Nelder 1989). These models describe the response variable
using a member of the _exponential family_ , which includes the Bernoulli, Pois-
son, and Gaussian as particular cases. A transformed version of the response
meanE[ _Y_ | _X_ = _x_ ] is then approximated by a linear model. In detail, if we
use _μ_ ( _x_ ) =E[ _Y_ | _X_ = _x_ ] to denote the conditional mean of _Y_ given _X_ = _x_ ,
then a GLM is based on a model of the form

```
g
```
###### [

```
μ ( x )
```
###### ]

```
= β 0 + βTx
︸ ︷︷ ︸
η ( x )
```
###### , (3.4)

where _g_ :R→Ris a strictly monotonic link function. For example, for a bi-
nary response _Y_ ∈{ 0 _,_ 1 }, the logistic regression model is based on the choices
_μ_ ( _x_ ) = Pr[ _Y_ = 1| _X_ = _x_ ] and _g_ ( _μ_ ) = logit( _μ_ ) = log

###### (

```
μ/ (1− μ )
```
###### )

. When the
response variable is modeled as a Gaussian, the choices _μ_ ( _x_ ) = _β_ 0 + _βTx_
and _g_ ( _μ_ ) = _μ_ recover the standard linear model, as discussed in the previous
chapter.
Generalized linear models can also be used to model the multicategory
responses that occur in many problems, including handwritten digit classifi-
cation, speech-recognition, document classification, and cancer classification.
The multinomial replaces the binomial distribution here, and we use a sym-
metric log-linear representation:

```
Pr[ Y = k | X = x ] =
```
```
eβ^0 k + β
```
```
Tkx
∑ K
` =1 e
```
```
β 0 ` + βT`x. (3.5)
```
Here there are _K_ coefficients for each variable (one per class).
In this chapter, we discuss approaches to fitting generalized linear models
that are based on maximizing the likelihood, or equivalently minimizing the
negative log-likelihood along with an _`_ 1 -penalty

```
minimize
β 0 ,β
```
###### {

###### −

###### 1

###### N

```
L( β 0 ,β ; y , X ) + λ ‖ β ‖ 1
```
###### }

###### . (3.6)

Here **y** is the _N_ -vector of outcomes and **X** is the _N_ × _p_ matrix of predictors,
and the specific form of the log-likelihoodLvaries according to the GLM. In
the special case of Gaussian responses and the standard linear model, we have
L( _β_ 0 _,β_ ; **y** _,_ **X** ) = 21 _σ_ 2 ‖ **y** − _β_ 0 **1** − **X** _β_ ‖^22 + _c_ , where _c_ is a constant independent
of ( _β_ 0 _,β_ ), so that the optimization problem (3.6) corresponds to the ordinary
linear least-squares lasso.


###### LOGISTIC REGRESSION 31

Similar forms of _`_ 1 -regularization are also useful for related models. With
survival models, the response is the time to failure (death), with possible
censoring if subjects are lost to followup. In this context, a popular choice is
the Cox proportional hazards model, which takes the form

```
h ( t | x ) = h 0 ( t ) eβ
```
```
Tx
```
_._ (3.7)

Here _t_ 7→ _h_ ( _t_ | _x_ ) is the _hazard function_ for an individual with covariates _x_ :
the value _h_ ( _t_ | _x_ ) corresponds to the instantaneous probability of failure at
time _Y_ = _t_ , given survival up to time _t_. The function _h_ 0 specifies the baseline
hazard, corresponding to _x_ = 0.
As another example, the support-vector machine (SVM) is a popular clas-
sifier in the machine-learning community. Here the goal is to predict a two-
class response _y_ ∈{− 1 _,_ +1},^1 in the simplest case using a linear classification
boundary of the form _f_ ( _x_ ) = _β_ 0 + _βTx_ , with the predicted class given by
sign( _f_ ( _x_ )). Thus, the correctness of a given decision can be determined by
checking whether or not the margin _yf_ ( _x_ ) is positive. The traditional _soft-
margin_ linear SVM is fit by solving the optimization problem^2

```
minimize
β 0 ,β
```
###### 

###### 

###### 

###### 1

###### N

###### ∑ N

```
i =1
```
```
[1− yif ( xi )]+
︸ ︷︷ ︸
φ ( yif ( xi ))
```
```
+ λ ‖ β ‖^22
```
###### 

###### 

###### 

###### . (3.8)

The first term, known as _hinge loss_ , is designed to penalize the negative mar-
gins that represent incorrect classifications. In general, an optimal solution
vector _β_ ∈R _p_ to the standard linear SVM (3.8) is not sparse, since the
quadratic penalty has no sparsity-enforcing properties. However, replacing
the quadratic penalty by the _`_ 1 -norm‖ _β_ ‖ 1 leads to an _`_ 1 linear SVM, which
does produce sparse solutions.
In the following sections, we discuss each of these models in more detail.
In each case, we provide examples of their applications, discuss some of the
issues that arise, as well as computational approaches for fitting the models.

### 3.2 Logistic Regression

Logistic regression has been popular in biomedical research for half a century,
and has recently gained popularity for modeling a wider range of data. In the
high-dimensional setting, in which the number of features _p_ is larger than the
sample size, it cannot be used without modification. When _p > N_ , any linear
model is over-parametrized, and regularization is needed to achieve a stable
fit. Such high-dimensional models arise in various applications. For example,
document classification problems can involve binary features (presence versus

(^1) For SVMs, it is convenient to code the binary response via the sign function.
(^2) This is not the most standard way to introduce the support vector machine. We discuss
this topic in more detail in Section 3.6.


###### 32 GENERALIZED LINEAR MODELS

absence) over a predefined dictionary of _p_ = 20 _,_ 000 or more words and tokens.
Another example is genome-wide association studies (GWAS), where we have
genotype measurements at _p_ = 500 _,_ 000 or more “SNPs,” and the response is
typically the presence/absence of a disease. A SNP (pronounced “snip”) is a
single-nucleotide polymorphism, and is typically represented as a three-level
factor with possible values{AA _,_ Aa _,_ aa}, where “A” refers to the wild-type,
and “a” the mutation.
When the response is binary, it is typically coded as 0/1. Attention then
focuses on estimating the conditional probability Pr( _Y_ = 1| _X_ = _x_ ) =E[ _Y_ |
_X_ = _x_ ]. Given the logistic model (3.1), the negative log likelihood with _`_ 1 -
regularization takes the form

###### −

###### 1

###### N

###### ∑ N

```
i =1
```
```
{ yi log Pr( Y = 1| xi ) + (1− yi ) log Pr( Y = 0| xi )}+ λ ‖ β ‖ 1
```
###### =−

###### 1

###### N

###### ∑ N

```
i =1
```
###### {

```
yi ( β 0 + βTxi )−log(1 + eβ^0 + β
```
```
Txi
)
```
###### }

```
+ λ ‖ β ‖ 1. (3.9)
```
In the machine-learning community, it is more common to code the response
_Y_ in terms of sign variables{− 1 _,_ +1}rather than{ 0 _,_ 1 }values; when using
sign variables, the penalized (negative) log-likelihood has the form

###### 1

###### N

###### ∑ N

```
i =1
```
```
log(1 + e − yif ( xi ; β^0 ,β )) + λ ‖ β ‖ 1 , (3.10)
```
where _f_ ( _xi_ ; _β_ 0 _,β_ ) : = _β_ 0 + _βTxi_. For a given covariate-response pair ( _x,y_ ),
the product _yf_ ( _x_ ) is referred to as the _margin_ : a positive margin means a
correct classification, whereas a negative margin means an incorrect classifi-
cation. From the form of the log-likelihood (3.10), we see that maximizing
the likelihood amounts to minimizing a loss function monotone decreasing
in the margins. We discuss the interplay of the margin and the penalty in
Section 3.6.1.

#### 3.2.1 Example: Document Classification

We illustrate _`_ 1 -regularized logistic regression in a domain where it has gained
popularity, namely document classification using the 20-Newsgroups corpus
(Lang 1995). We use the particular feature set and class definition defined
by Koh, Kim and Boyd (2007).^3 There are _N_ = 11 _,_ 314 documents and _p_ =
777 _,_ 811 features, with 52% in the positive class. Only 0_._ 05% of the features
are nonzero for any given document.

(^3) The positive class consists of the 10 groups with names of the formsci.*,comp.*and
misc.forsale, and the rest are the negative class. The feature set consists of trigrams, with
message headers skipped, no stoplist, and features with less than two documents omitted.


###### LOGISTIC REGRESSION 33

```
0.0 0.2 0.4 0.6 0.8
```
```
−4
```
```
−2
```
```
0
```
```
2
```
```
Fraction Deviance Explained
```
```
Coefficients
```
```
0 66 246 1061 3176
```
**Figure 3.1** _Coefficient paths for an`_ 1 _-regularized logistic regression for a document-
classification task—the “NewsGroup” data. There are 11K documents roughly divided
into two classes, and_ 0_._ 78 _M features. Only_ 0_._ 05 _% of the features are nonzero. The
coefficients are plotted as a function of the fraction of nul l deviance explained._

Figure 3.1 shows the coefficient profile, computed using the R package
glmnet. Although the solutions were computed at 100 values of _λ_ , uniformly
spaced on the log scale, we have indexed the solutions by the _fraction of
deviance explained_^4 on the training data:

```
D^2 λ =
```
```
Devnull−Dev λ
Devnull
```
###### . (3.11)

Here the deviance Dev _λ_ is defined as minus twice the difference in the log-
likelihood for a model fit with parameter _λ_ and the “saturated” model (having
̂ _y_ = _yi_ ). Devnullis the null deviance computed at the constant (mean) model.
Since for these data the classes are separable, the range of _λ_ is chosen so as not
to get too close to the saturated fit (where the coefficients would be undefined;
see the next section).
The maximum number of nonzero coefficients in any of these models can
be shown to be min( _N,p_ ), which is equal 11 _,_ 314 in this case. In Figure 3.1, the
largest model actually had only 5 _,_ 277 coefficients sinceglmnetdid not go to
the very end of the solution path. Although it might seem more natural to plot
against the log( _λ_ ) sequence, or perhaps‖ _β_ ˆ( _λ_ )‖ 1 , there are problems with both
in the _p_  _N_ setting. The former quantity is data and problem dependent,

(^4) the name D (^2) is by analogy with R (^2) , the fraction of variance explained in regression.


###### 34 GENERALIZED LINEAR MODELS

```
0.0 0.2 0.4 0.6 0.8
```
```
0.0
```
```
0.1
```
```
0.2
```
```
0.3
```
```
0.4
```
```
0.5
```
```
Fraction Deviance Explained
```
```
Misclassification Error
```
```
0 7 28 95 169 352 756 1785 3502
10−fold CV
Train
```
```
0.0 0.2 0.4 0.6 0.8
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
1.2
```
```
1.4
```
```
Fraction Deviance Explained
```
```
Binomial Deviance
```
```
0 7 28 95 169 352 756 1785 3502
```
**Figure 3.2** _Lasso (`_ 1 _)-penalized logistic regression. Tenfold cross-validation curves
for the Newsgroup data are shown in red, along with pointwise standard-error bands
(not visible). The left plot shows misclassification error; the right plot shows deviance.
Also shown in blue is the training error for each of these measures. The number of
nonzero coefficients in each model is shown along the top of each plot._

and gives no indication of the amount of overfitting, whereas for the latter
measure, the graph would be dominated by the less interesting right-hand
side, in which the coefficients and hence their norm explode.
Figure 3.2 shows the results of tenfold cross-validation for these data, as
well as training error. These are also indexed by the fraction of deviance
explained on the training data. Figure 3.3 shows the analogous results to those
in Figure 3.2, for ridge regression. The cross-validated error rates are about
the same as for the lasso. The number of nonzero coefficients in every model
is _p_ = 777 _,_ 811 compared to a maximum of 5 _,_ 277 in Figure 3.2. However the
rank of the ridge regression fitted values is actually min( _N,p_ ) which equals
11 _,_ 314 in this case, not much different from that of the lasso fit. Nonetheless,
ridge regression might be more costly from a computational viewpoint. We
produced the cross-validation results in Figure 3.3 using theglmnetpackage;
for ridge the tenfold cross-validation took 8.3 minutes, while for lasso under
one minute. A different approach would be to use the kernel trick (Hastie and
Tibshirani 2004, for example), but this requires a singular value or similar
decomposition of an 11 _,_ 314 × 11 _,_ 314 matrix.
For this example, using the packageglmnet, we fit the regularization path
in Figure 3.1 at 100 values of _λ_ in 5 secs on a 2.6 GHz Macbook Pro. In ex-
amples like this with so many features, dramatic speedups can be achieved by
screening the features. For example, the first feature to enter the regulariza-
tion path achieves _λ_ max= max _j_ |〈 _xj,_ **y** − **p** ̄〉|, where **y** is the vector of binary


###### LOGISTIC REGRESSION 35

```
0.3 0.4 0.5 0.6 0.7 0.8 0.9
```
```
0.00
```
```
0.02
```
```
0.04
```
```
0.06
```
```
0.08
```
```
0.10
```
```
0.12
```
```
Fraction Deviance Explained
```
```
Misclassification Error
```
```
10−fold CV
Train
```
```
0.3 0.4 0.5 0.6 0.7 0.8 0.9
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Fraction Deviance Explained
```
```
Binomial Deviance
```
**Figure 3.3** _Ridge (`_ 2 _)-penalized logistic regression: tenfold cross validation curves
for the Newsgroup data are shown in red, along with pointwise standard-error bands.
The left plot shows misclassification error; the right plot shows deviance. Also shown
in blue is the training error for each of these measures._

outcomes, and **p** ̄= 0_._ 52 **1** is a vector of the overall mean. This is the entry
value for _λ_ ; that is the smallest value for which all coefficients are zero. When
computing the solution path from _λ_ maxdown to a slightly lower value _λ_ 1 , we
can screen out the vast majority of variables for which this inner-product is
substantially lower than _λ_ 1. Once we have computed the solution with the
much smaller subset, we can check if any those screened were omitted in er-
ror. This can be repeated as we move down the path, using inner-products
with the current residuals. This “strong-rule” screening is implemented in
theglmnetpackage that we used for the computations in the above example.
We discuss strong rules and other computational speedups in more detail in
Section 5.10.

#### 3.2.2 Algorithms

Two-class logistic regression is a popular generalization of linear regression,
and as a consequence much effort has gone into fitting lasso-penalized logistic
models. The objective (3.9) is convex and the likelihood part is differentiable,
so in principle finding a solution is a standard task in convex optimization
(Koh et al. 2007).
Coordinate descent is both attractive and efficient for this problem, and in
the bibliographic notes we give a partial account of the large volume of research
on this approach; see also Sections 2.4.2 and 5.4. Theglmnetpackage uses
a proximal-Newton iterative approach, which repeatedly approximates the
negative log-likelihood by a quadratic function (Lee, Sun and Saunders 2014).


###### 36 GENERALIZED LINEAR MODELS

In detail, with the current estimate ( _β_ ̃ 0 _,β_ ̃), we form the quadratic function

```
Q ( β 0 ,β ) =
```
###### 1

###### 2 N

###### ∑ N

```
i =1
```
```
wi ( zi − β 0 − βTxi )^2 + C ( β ̃ 0 ,β ̃) , (3.12)
```
where _C_ denotes a constant independent of ( _β_ 0 _,β_ ), and

```
zi = β ̃ 0 + β ̃ Txi +
```
```
yi − p ̃( xi )
p ̃( xi )(1− p ̃( xi ))
```
```
, and wi = ̃ p ( xi )(1− ̃ p ( xi )) , (3.13)
```
with ̃ _p_ ( _xi_ ) being the current estimate for Pr( _Y_ = 1| _X_ = _xi_ ). Each outer loop
then amounts to a weighted lasso regression. By using warm starts on a fine
grid of values for _λ_ , typically only a few outer-loop iterations are required,
because locally the quadratic approximation is very good. We discuss some of
the features ofglmnetin Sections 3.7 and 5.4.2.

### 3.3 Multiclass Logistic Regression

Some classification and discrimination problems have _K >_ 2 output classes. In
machine learning a popular approach is to build all

###### ( K

```
2
```
###### )

classifiers (“one versus
one” or OvO), and then classify to the class that wins the most competitions.
Another approach is “one versus all” (OvA) which treats all but one class as
the negative examples. Both of these methods can be put on firm theoretical
grounds, but also have limitations. OvO can be computationally wasteful,
and OvA can suffer from certain masking effects (Hastie et al. 2009, Chapter
4). With multiclass logistic regression, a more natural approach is available.
We use the multinomial likelihood and represent the probabilities using the
log-linear representation

```
Pr( Y = k | X = x ) =
```
```
eβ^0 k + β
```
```
T
kx
∑ K
` =1 e
```
```
β 0 ` + βT`x. (3.14)
```
This model is over specified, since we can add the linear term _γ_ 0 + **_γ_** _Tx_
to the linear model for each class, and the probabilities are unchanged. For
this reason, it is customary to set one of the class models to zero—often the
last class—leading to a model with _K_ −1 linear functions to estimate (each a
contrast with the last class). The model fit by maximum-likelihood is invariant
to the choice of this base class, and the parameter estimates are equivariant
(the solution for one base can be obtained from the solution for another).
Here we prefer the redundant but symmetric approach (3.14), because

- we regularize the coefficients, and the regularized solutions are not equiv-
    ariant under base changes, and
- the regularization automatically eliminates the redundancy (details below).

For observations{( _xi,yi_ } _Ni_ =1, we can write the regularized form of the negative


###### MULTICLASS LOGISTIC REGRESSION 37

log-likelihood as

###### −

###### 1

###### N

###### ∑ N

```
i =1
```
```
log Pr( Y = yi | xi ;{ β 0 k,βk } Kk =1) + λ
```
###### ∑ K

```
k =1
```
```
‖ βk ‖ 1. (3.15)
```
Denote by **R** the _N_ × _K indicator response_ matrix with elements _rik_ =
I( _yi_ = _k_ ). Then we can write the log-likelihood part of the objective (3.15)
in the more explicit form

```
1
N
```
###### ∑ N

```
i =1
```
```
wi
```
###### [ K

###### ∑

```
k =1
```
```
rik ( β 0 k + βkTxi )−log
```
###### { K

###### ∑

```
k =1
```
```
eβ^0 k + β
kTxi
```
###### }]

###### . (3.16)

We have included a weight _wi_ per observation, where the setting _wi_ = 1 _/N_
is the default. This form allows for _grouped_ response data: at each value _xi_
we have a collection of _ni_ multicategory responses, with _rik_ in category _k_.
Alternatively, the rows of **R** can be a vector of class proportions, and we can
provide _wi_ = _ni_ as the observation weights.
As mentioned, the model probabilities and hence the log-likelihood are in-
variant under a constant shift in the _K_ coefficients for each variable _xj_ —in
other words{ _βkj_ + _cj_ } _Kk_ =1and{ _βkj_ } _Kk_ =1produce exactly the same probabil-
ities. It is therefore up to the penalty in the criterion (3.15) to resolve the
choice of _cj_. Clearly, for any candidate set{ _β_ ̃ _kj_ } _Kk_ =1, the optimal _cj_ should
satisfy

```
cj = arg min
c ∈R
```
###### { K

###### ∑

```
k =1
```
```
| β ̃ kj − c |
```
###### }

###### . (3.17)

Consequently, as shown in Exercise 3.3, for each _j_ = 1 _,...,p_ , the maximizer of
the objective (3.17) is given by the median of{ _β_ ̃ 1 _j,...,β_ ̃ _Kj_ }. Since the inter-
cepts{ _β_ 0 _k_ } _Kk_ =1are not penalized, we do need to resolve their indeterminacy;
in theglmnetpackage, they are constrained to sum to zero.

#### 3.3.1 Example: Handwritten Digits

As an illustration, we consider the US post-office handwritten digits
data (Le Cun, Boser, Denker, Henderson, Howard, Hubbard and Jackel 1990).
There are _N_ = 7291 training images of the digits{ 0 _,_ 1 _,...,_ 9 }, each digitized
to a 16×16 gray-scale image. Using the _p_ = 256 pixels as features, we fit a
10-class lasso multinomial model. Figure 3.4 shows the training and test mis-
classification error as a function of the sequence of _λ_ values used. In Figure 3.5
we display the coefficients as images (on average about 25% are nonzero). Some
of these can be identified as appropriate contrast functionals for highlighting
each digit.


###### 38 GENERALIZED LINEAR MODELS

```
5e−05 5e−04 5e−03 5e−02
```
```
0.0
```
```
0.1
```
```
0.2
```
```
0.3
```
```
0.4
```
```
Misclassification Error
```
```
train
test
```
```
Multinomial Lasso on Zip Code Data
```
```
log(λ)
```
**Figure 3.4** _Training and test misclassification errors of a multinomial lasso model
fit to the zip code data, plotted as a function of_ log( _λ_ )_. The minimum test error
here is around_ 0_._ 086 _, while the minimum training error is_ 0_. We highlight the value
λ_ = 0_._ 001 _, where we examine the individual class coefficients in Figure 3.5._

(^01234)
5 6 7 8 9
**Figure 3.5** _Coefficients of the multinomial lasso, displayed as images for each digit
class. The gray background image is the average training example for that class.
Superimposed in two colors (yel low for positive, blue for negative) are the nonzero
coefficients for each class. We notice that they are nonzero in different places, and
create discriminant scores for each class. Not all of these are interpretable._


###### MULTICLASS LOGISTIC REGRESSION 39

#### 3.3.2 Algorithms

Although one could tackle this problem with standard convex-optimization
software, we have found coordinate-descent to be particularly effective
(Friedman, Hastie, Simon and Tibshirani 2015). In the two-class case, there
is an outer Newton loop and an inner weighted least-squares step. The outer
loop can be seen as making a quadratic approximation to the log-likelihood,
centered at the current estimates ( _β_ ̃ 0 _k,β_ ̃ _k_ } _Kk_ =1. Here we do the same, except
we hold all but one class’s parameters fixed when making this approxima-
tion. In detail, when updating the parameters ( _β_ 0 _`,β`_ ), we form the quadratic
function

```
Q` ( β 0 `,β` ) =−
```
###### 1

###### 2 N

###### ∑ N

```
i =1
```
```
wi` ( zi` − β 0 ` − β`Txi )^2 + C ({ β ̃ 0 k,β ̃ k } Kk =1) , (3.18)
```
where _C_ denotes a constant independent of ( _β_ 0 _`,β`_ ), and

```
zi` = β ̃ 0 ` + β ̃ T`xi +
ri` − p ̃ ` ( xi )
p ̃ ` ( xi )(1− p ̃ ` ( xi ))
```
```
, and wi` = ̃ p` ( xi )(1− p ̃ ` ( xi ))
```
where ̃ _p`_ ( _xi_ ) is the current estimate for the conditional probability
Pr( _Y_ = _`_ | _xi_ ). Our approach is similar to the two-class case, except now we
have to cycle over the classes as well in the outer loop. For each value of _λ_ , we
create an outer loop which cycles over _`_ ∈{ 1 _,...,K_ }and computes the par-
tial quadratic approximation _Q`_ about the current parameters ( _β_ ̃ 0 _,β_ ̃). Then
we use coordinate descent to solve the weighted lasso problem problem

```
minimize
( β 0 `,β` )∈R p +1
{ Q ( β 0 `,β` ) + λ ‖ β` ‖ 1 }. (3.19)
```
#### 3.3.3 Grouped-Lasso Multinomial

As can be seen in Figure 3.5, the lasso penalty will select different variables for
different classes. This can mean that although individual coefficient vectors
are sparse, the overall model may not be. In this example, on average there
are 25% of the coefficients nonzero per class, while overall 81% of the variables
are used.
An alternative approach is to use a grouped-lasso penalty (see Section 4.3)
for the set of coefficients _βj_ = ( _β_ 1 _j,β_ 2 _j,...,βKj_ ), and hence replace the cri-
terion (3.15) with the regularized objective

###### −

###### 1

###### N

###### ∑ N

```
i =1
```
```
log Pr( Y = yi | X = xi ;{ βj } pj =1) + λ
```
```
∑ p
```
```
j =1
```
```
‖ βj ‖ 2. (3.20)
```
It is important that this criterion involves the sum of the ordinary _`_ 2 -norms
‖·‖ 2 , as opposed to the squared _`_ 2 -norms. In this way, it amounts to im-
posing a block _`_ 1 _/`_ 2 constraint on the overall collection of coefficients: the


###### 40 GENERALIZED LINEAR MODELS

sum of the _`_ 2 -norms over the groups. The effect of this group penalty is to
select all the coefficients for a particular variable to be in or out of the model.
When included, they are all nonzero in general, and as shown in Exercise 3.6,
they will automatically satisfy the constraint

###### ∑ K

_k_ =1 _βkj_ = 0. Criterion (3.20)
is convex, so standard methods can be used to find the optimum. As before,
coordinate descent techniques are one reasonable choice, in this case block
coordinate descent on each vector _βj_ , holding all the others fixed; see Exer-
cise 3.7 for the details. The group lasso and variants are discussed in more
detail in Chapter 4.3.

### 3.4 Log-Linear Models and the Poisson GLM

When the response variable _Y_ is nonnegative and represents a count, its mean
will be positive and the Poisson likelihood is often used for inference. In this
case we typically use the log-linear model (3.3) to enforce the positivity. We
assume that for each _X_ = _x_ , the response _Y_ follows a Poisson distribution
with mean _μ_ satisfying

```
log μ ( x ) = β 0 + βTx. (3.21)
```
The _`_ 1 -penalized negative log-likelihood is given by

###### −

###### 1

###### N

###### ∑ N

```
i =1
```
###### {

```
yi ( β 0 + βTxi )− eβ^0 + β
```
```
Txi }
+ λ ‖ β ‖ 1. (3.22)
```
As with other GLMs, we can fit this model by iteratively reweighted least
squares, which amounts to fitting a weighted lasso regression at each outer
iteration. Typically, we do not penalize the intercept _β_ 0. It is easy to see that
this enforces the constraint that the average fitted value is equal to the mean

response—namely, that _N_^1

###### ∑ N

```
i =1 μ ˆ i = ̄ y , where ˆ μi : = e
```
_η_ ˆ( _xi_ )= _e_ ̂ _β_ 0 + _β_ ̂ _Txi_.
Poisson models are often used to model rates, such as death rates. If the
length _Ti_ of the observation window is different for each observation, then the
mean count isE( _yi_ | _Xi_ = _xi_ ) = _Tiμ_ ( _xi_ ) where _μ_ ( _xi_ ) is the rate per unit time
interval. In this case, our model takes the form

```
log(E( Y | X = x, T )) = log( T ) + β 0 + βTx. (3.23)
```
The terms log( _Ti_ ) for each observation require no fitting, and are called an
_offset_. Offsets play a role in the following example as well.

#### 3.4.1 Example: Distribution Smoothing

The Poisson model is a useful tool for estimating distributions. The fol-
lowing example was brought to our attention by Yoram Singer (Singer and
Dubiner 2011). Suppose that we have a sample of _N_ counts{ _yk_ } _Nk_ =1from an


###### LOG-LINEAR MODELS AND THE POISSON GLM 41

_N_ -cell multinomial distribution, and let _rk_ = _yk/_

###### ∑ N

_`_ =1 _y`_ be the correspond-
ing vector of proportions. For example, in large-scale web applications, these
counts might represent the number of people in each county in the USA that
visited a particular website during a given week. This vector could be sparse,
depending on the specifics, so there is a desire to regularize toward a broader,
more stable distribution **u** ={ _uk_ } _Nk_ =1(for example, the same demographic,
except measured over a year). Singer and Dubiner (2011) posed the following
problem

```
minimize
q ∈R N, qk ≥ 0
```
###### ∑ N

```
k =1
```
```
qk log
```
###### (

```
qk
uk
```
###### )

```
such that‖ q − r ‖∞≤ δ and
```
###### ∑ N

```
k =1 qk = 1.
```
(3.24)
In words, we find the distribution, within a _δ_ tolerance in the _`_ ∞-norm from
the observed distribution, that is as close as possible to the nominal distri-
bution **u** in terms of Kullback–Leibler (KL) divergence. It can be shown (see

```
−6 −4 −2 0 2 4 6
```
```
0.00 0.01 0.02 0.03 0.04
```
```
X
```
```
−6 −4 −2 0 2 4 6
```
```
5e−07 5e−06 5e−05 5e−04
```
```
X
```
```
Differences
```
```
f
(x
```
```
)
```
**Figure 3.6** _Estimating distributions via the Poisson. In the left panel, the solid
black curve is the parent distribution_ **u** _, here represented as a discretization of a one-
dimensional distributionf_ ( _x_ ) _into 100 cel ls. The blue points represent the observed
distribution, and the orange points represent the distribution recovered by the model.
While the observed distribution may have many zero counts, the modeled distribution
has the same support as_ **u**_. The right plot shows theN_ = 100 _differences_ |ˆ _qk_ − _rk_ | _,
which are constrained to be less thanδ_ = 0_._ 001 _, which is the horizontal orange line._

Exercise 3.4) that the Lagrange-dual to the optimization problem (3.24) has
the form

```
maximize
β 0 , α
```
###### { N

###### ∑

```
k =1
```
```
[ rk log qk ( β 0 ,αk )− qk ( β 0 ,αk )]− δ ‖ α ‖ 1
```
###### }

###### , (3.25)

where _qk_ ( _β_ 0 _,αk_ ) : = _ukeβ_^0 + _αk_. This is equivalent to fitting a Poisson GLM
with offset log( _uk_ ), individual parameter _αk_ per observation, and the ex-
tremely sparse design matrix **X** = **I** _N_ × _N_. Consequently, it can be fit very
efficiently using sparse-matrix methods (see Section 3.7 below). Figure 3.6


###### 42 GENERALIZED LINEAR MODELS

shows a simulation example, where the distribution _uk_ is a discretized contin-
uous distribution (mixture of Gaussians). There are _N_ = 100 cells, and a total
of

###### ∑ N

_k_ =1 _yk_ = 1000 observations distributed to these cells. As discussed above,
the presence of the unpenalized _β_ 0 ensures that

###### ∑ N

```
k =1 q ˆ k =
```
###### ∑ N

_k_ =1 _rk_ = 1 (see
also Exercise 3.5). Although we only show one solution in Figure 3.6, the path
gives solutions ˆ _qk_ ( _δ_ ) that vary smoothly between the background distribution
_uk_ and the observed distribution _rk_.

### 3.5 Cox Proportional Hazards Models

In medical studies, the outcome of interest after treatment is often time to
death or time to recurrence of the disease. Patients are followed after their
treatment, and some drop out because they move away, or perhaps die from
an independent cause. Such outcomes are called _right censored_. Denoting by
_T_ the underlying survival time, for each patient we observe the quantity
_Y_ = min( _T,C_ ) where _C_ is a _censoring time_. Interest tends to focus on the
survivor function _S_ ( _t_ ) : = Pr( _T > t_ ), the probability of surviving beyond a
certain time _t_.

```
0 5 10 15 20
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Kaplan−Meier Estimates (naive)
```
```
Time
```
```
Survival Probability
```
```
Pred > 0
Pred<=0
Overall
```
```
0 5 10 15 20
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Kaplan−Meier Estimates (prevalidated)
```
```
Time
```
```
Survival Probability
```
```
p=0.00012
```
**Figure 3.7** _The black curves are the Kaplan–Meier estimates ofS_ ( _t_ ) _for the Lym-
phoma data. In the left plot, we segment the data based on the predictions from
the Cox proportional hazards lasso model, selected by cross-validation. Although the
tuning parameter is chosen by cross-validation, the predictions are based on the ful l
training set, and are overly optimistic. The right panel uses_ prevalidation _to build
a prediction on the entire dataset, with this training-set bias removed. Although the
separation is not as strong, it is still significant. The spikes indicate censoring times.
The p-value in the right panel comes from the log-rank test._

The black curves in Figure 3.7 show estimates of _S_ ( _t_ ) for a population of
_N_ = 240 Lymphoma patients (Alizadeh et al. 2000). Each of the spikes in the


###### COX PROPORTIONAL HAZARDS MODELS 43

plot indicates a censoring point, meaning a time at which a patient was lost for
follow-ups. Although survival curves are useful summaries of such data, when
incorporating covariates it is more common to model the _hazard function_ , a
monotone transformation of _S_. More specifically, the hazard at time _t_ is given
by

```
h ( t ) = lim
δ → 0
```
```
Pr( Y ∈( t,t + δ )| Y ≥ t )
δ
```
###### =

```
f ( t )
S ( t )
```
###### , (3.26)

and corresponds to the instantaneous probability of death at time _t_ , given
survival up till _t_.
We now discuss Cox’s proportional hazards model that was used to produce
the blue and orange survival curves in Figure 3.7. The proportional hazards
model (CPH) is based on the hazard function

```
h ( t ; x ) = h 0 ( t ) eβ
```
```
Tx
, (3.27)
```
where _h_ 0 ( _t_ ) is a baseline hazard (the hazard for an individual with _x_ = 0).
We have data of the form ( _xi,yi,δi_ ), where _δi_ is binary-valued indicator of
whether _yi_ is a death time or censoring time. For the lymphoma data, there
are _p_ = 7399 variables, each a measure of gene expression. Of the _N_ = 240
samples, a total of 102 samples are right censored. Here we fit an _`_ 1 -penalized
CPH by solving

```
minimize
β
```
###### 

###### 

###### 

###### −

###### ∑

```
{ i | δi =1}
```
```
log
```
###### [

```
eβ
```
```
Txi
∑
j ∈ Rie
βTxj
```
###### ]

```
+ λ ‖ β ‖ 1
```
###### 

###### 

###### 

###### , (3.28)

where for each _i_ = 1 _,...,N_ , _Ri_ is the _risk set_ of individuals who are alive
and in the study at time _yi_. The first term is the log of the _partial likelihood_ ,
corresponding to the conditional probability in the risk set of the observed
death. Note that the baseline hazard does not play a role, an attractive feature
of this approach. Here we have assumed that there are no ties, that is, the
survival times are all unique. Modification of the partial likelihood is needed
in the event of ties.
Figure 3.8 shows the coefficients obtained in fitting the model (3.28) to the
Lymphoma data. Since _p_  _N_ , the model would “saturate” as _λ_ ↓0, meaning
that some parameters would diverge to±∞, and the log partial likelihood
would approach 0. We see evidence of this undesirable behavior as _λ_ gets
small.
The computations for the Cox model are similar to those for the multino-
mial model but slightly more complex. Simon, Friedman, Hastie and Tibshi-
rani (2011) give details for an algorithm based on coordinate-descent.

#### 3.5.1 Cross-Validation

All the models in this chapter require a choice of _λ_ , and we typically use
_K_ −fold cross-validation where _K_ equal to 5 or 10, as in Figure 3.2. For the


###### 44 GENERALIZED LINEAR MODELS

```
−6 −5 −4 −3 −2
```
```
−4
```
```
−2
```
```
0
```
```
2
```
```
4
```
```
Coefficients
```
```
219 202 188 126 3115
```
```
−2.8 −2.6 −2.4 −2.2 −2.0 −1.8 −1.6
```
```
−0.4
```
```
−0.2
```
```
0.0
```
```
0.2
```
```
0.4
```
```
Coefficients
```
```
15
```
```
Zoomed in
31
```
```
log(λ) log(λ)
```
**Figure 3.8** _The`_ 1 _-regularized coefficient path for the Cox model fit to the Lym-
phoma data. Sincep_  _N, the plot has a trumpet shape near the end, corresponding
to a saturated model with partial likelihood equal to one. The right-hand plot zooms
in on the area of interest, a fairly heavily regularized solution with_ 31 _nonzero coef-
ficients._

Cox model, we compute the cross-validated deviance, which is minus twice
the log partial likelihood. An issue arises in computing the deviance, since if
_N/K_ is small, there will not be sufficient observations to compute the risk
sets. Here we use a trick due to van Houwelingen et al. (2006). When fold _k_
is left out, we compute the coefficients _β_ ̂− _k_ ( _λ_ ), and then compute

```
Dev̂ kλ : = Dev[ β ̂− k ( λ )]−Dev− k [ β ̂− k ( λ )]. (3.29)
```
```
The first term on the right uses all N samples in computing the deviance,
```
while the second term omits the fold- _k_ samples. Finally Dev _CVλ_ =

###### ∑ K

```
k =1Dev̂
```
_k
λ_
is obtained by subtraction. The point is that each of these terms has sufficient
data to compute the deviance, and in the standard cases (that is, any of the
other generalized linear models), the estimate would be precisely the deviance
on the left-out set.
The deviance in Figure 3.9 was computed in this fashion; we zoom in on
the right-hand section. We see that the minimum is achieved at 31 nonzero
coefficients. Figure 3.7 shows the effect of the chosen model. We compute
_η_ ˆ( _xi_ ) = _xTiβ_ ˆ( _λ_ min) for each observation, and then create two groups by thresh-
olding these scores at zero. The two colored survival curves in the left-hand
plot show the difference in survival for the two groups thus formed. They are
well separated, which suggests we have derived a powerful signature. However,
these scores are biased: we are evaluating their performance on the same data
for which they were computed.


###### COX PROPORTIONAL HAZARDS MODELS 45

```
−6 −5 −4 −3 −2
```
```
50
```
```
100
```
```
150
```
```
Partial Likelihood Deviance
```
```
230 218 212 216 204 186 135 68 25 7
```
```
−2.8 −2.6 −2.4 −2.2 −2.0 −1.8 −1.6
```
```
11.0
```
```
11.5
```
```
12.0
```
```
12.5
```
```
13.0
```
```
Partial Likelihood Deviance
```
```
114 93 75 55 41 28 20 14 7 4 3 0
```
```
Zoomed in
```
```
log(λ) log(λ)
```
**Figure 3.9** _Cross-validated deviance for the lymphoma data, computed by subtrac-
tions, as described in the text. The right-hand plot zooms in on the area of interest.
The dotted vertical line on the left corresponds to the minimum, and the model we
chose in this case; the one on the right corresponds to the rightmost point on the
curve (simplest model) within one standard error of the minimum. This is a basis
for a more conservative approach to selection. The number of nonzero coefficients is
shown along the top of each plot._

#### 3.5.2 Pre-Validation

In Figure 3.7, we used a variant of cross-validation, known as _pre-validation_
(Tibshirani and Efron 2002), in order to obtain a fair evaluation of the model.
Cross-validation leaves out data in order to obtain a reasonably unbiased
estimate of the error rate of a model. But the error rate is not a very inter-
pretable measure in some settings such as survival modelling. The method of
_pre-validation_ is similar to cross-validation, but instead produces a new set of
“unbiased data” that mimics the performance of the model applied to inde-
pendent data. The pre-validated data can then be analyzed and displayed. In
computing the score ˆ _η_ ( _xi_ )( _k_ )for the observations in fold _k_ , we use the coeffi-

cient vector _β_ ̂(− _k_ )computed with those observations omitted.^5 Doing this for
all _K_ folds, we obtain the “pre-validated” dataset{(ˆ _η_ ( _xi_ )( _k_ ) _,yi,δi_ )} _Ni_ =1. The
key aspect of this pre-validated data is that each score ˆ _η_ ( _xi_ )( _k_ )is derived in-
dependently of its response value ( _yi,δi_ ). Hence we can essentially treat these
scores as if they were derived from a dataset completely separate from the
“test data”{( _xi,yi,δi_ )} _Ni_ =1. In the right-hand panel of Figure 3.7, we have
split the pre-validated scores into two groups and plotted the corresponding

(^5) Strictly speaking _λ_ should be chosen each time as well, but we did not do that here.


###### 46 GENERALIZED LINEAR MODELS

survival curves. Although the curves are not as spread out as in the left-hand
plot, they are still significantly different.

### 3.6 Support Vector Machines

We now turn to a method for binary classification known as the support vector
machine (SVM). The idea is shown in Figure 3.10. The decision boundary is
the solid line in the middle of the yellow slab. The _margin_ is the half-width of
the yellow slab. Ideally, all of the blue data points should lie above the slab
on the right, and the red points should lie below it on the left. However in the
picture, three red points and two blue points lie on the wrong side of their
margin. These correspond to the “errors” _ξi_. The SVM decision boundary is
chosen to maximize the margin, subject to a fixed budget on the total error∑
_N
i_ =1 _ξi_. The idea is that a decision boundary achieving the largest margin
has more space between the classes and will generalize better to test data.
This leads to the optimization problem

```
maximize
β 0 , β, { ξi } N 1
```
```
M subject to yi ( β 0 + βTxi )
︸ ︷︷ ︸
f ( xi ; β 0 ,β )
```
```
≥ M (1− ξi )∀ i, (3.30)
```
```
and ξi ≥ 0 ∀ i,
```
###### ∑ N

```
i =1
```
```
ξi ≤ C, and‖ β ‖ 2 = 1. (3.31)
```
(See Section 3.6.1 for an explanation of this particular form.)
This problem involves a linear cost function subject to convex constraints,
and many efficient algorithms have been designed for its solution. It can be
shown to be equivalent to the penalized form (3.8) previously specified on
page 31, which we restate here:

```
minimize
β 0 ,β
```
###### {

###### 1

###### N

###### ∑ N

```
i =1
```
```
[1− yif ( x ; β 0 ,β )]++ λ ‖ β ‖^22
```
###### }

###### . (3.32)

Decreasing _λ_ has a similar effect to decreasing _C_.^6 The linear SVM can be
generalized using a _kernel_ to create nonlinear boundaries; it involves replacing
the squared _`_ 2 -norm in the objective (3.32) by the squared Hilbert norm de-
fined by a symmetric bivariate kernel. Details on this extension can be found
elsewhere—for instance, see Hastie et al. (2009), Section 5.8.
Since the criterion (3.32) involves a quadratic penalty, the estimated coef-
ficient vector will not be sparse. However, because the hinge loss function is
piecewise linear, it introduces a different kind of sparsity. It can be shown via
the dual formulation of the SVM that the solution _β_ ˆhas the form

```
β ˆ=
```
###### ∑ N

```
i =1
```
```
α ˆ iyixi ; (3.33)
```
(^6) Solutions to (3.32) do not have‖ _β_ ˆ‖ 2 = 1, but since a linear classifier is scale invariant,
the solution coefficients can be rescaled.


###### SUPPORT VECTOR MACHINES 47

-
    -
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
- •

```
margin
```
```
ξξξ∗ 1 ∗ 1 ∗ 1
```
```
ξξξ 222 ∗∗∗
```
```
ξξ 33 ∗∗
```
```
ξξξ 444 ∗∗∗ ξ 5 ∗
```
```
M=kβ^1 k 2
```
```
M=kβ^1 k 2
```
```
β 0 +βTx=0
```
**Figure 3.10** _Support vector classifier: The decision boundary is the solid line, while
broken lines bound the shaded maximal margin of width_ 2 _M_ = 2 _/_ ‖ _β_ ‖ 2_. The points
labelledξ_ ∗ _jare on the wrong side of their margin by an amountξ_ ∗ _j_ = _Mξj; points
on the correct side have_ ∑ _ξ_ ∗ _j_ = 0_. The margin is maximized subject to a total budget
N
i_ =1 _ξi_ ≤ _C. Hence_

###### ∑ N

_i_ =1 _ξ
j_ ∗ _is the total distance of points on the wrong side of
their margin._

each observation _i_ ∈ { 1 _,...,N_ }is associated with a nonnegative weight ˆ _αi_ ,
and only a subsetV _λ_ , referred to as the _support set_ , will be associated with
nonzero weights.
SVMs are popular in high-dimensional classification problems with _p_  _N_ ,
since the computations areO( _pN_^2 ) for both linear and nonlinear kernels. Ad-
ditional efficiencies can be realized for linear SVMs, using stochastic subgradi-
ent methods (Shalev-Shwartz, Singer and Srebro 2007). They are not, however,
sparse in the features. Replacing the _`_ 2 penalty in the objective (3.32) with an
_`_ 1 penalty promotes such sparsity, and yields the _`_ 1 _-regularized linear SVM_ :

```
minimize
β 0 ,β
```
###### {

###### 1

###### N

###### ∑ N

```
i =1
```
```
[1− yif ( xi ; β 0 ,β )]++ λ ‖ β ‖ 1
```
###### }

###### . (3.34)

The optimization problem (3.34) is a linear program with many con-
straints (Zhu, Rosset, Hastie and Tibshirani 2004, Wang, Zhu and Zou 2006),
and efficient algorithms can be complex (Exercise 3.9). The solution paths (in
fine detail) can have many jumps, and show many discontinuities. For this
reason, some authors prefer to replace the usual hinge loss _φ_ hin= (1− _t_ )+


###### 48 GENERALIZED LINEAR MODELS

```
0.0 0.5 1.0 1.5 2.0 2.5
```
```
−0.2
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
SA Heart Disease p < N
```
```
L1 norm
```
```
Coefficients
```
```
Hinge Loss versus Binomial with L1 Regularization
```
```
0 1 2 3 4 5 6
```
```
0.0
```
```
0.5
```
```
1.0
```
```
1.5
```
```
Leukemia p >> N
```
```
L1 norm
```
```
Coefficients
```
**Figure 3.11** _A comparison of the coefficient paths for the`_ 1 _-regularized SVM versus
logistic regression on two examples. In the left we have the South African heart
disease data (N_ = 462 _andp_ = 9 _), and on the right the Leukemia data (N_ = 38
_andp_ = 6087 _). The dashed lines are the SVM coefficients, the solid lines logistic
regression. The similarity is striking in the left example, and strong in the right._

with _squared hinge lossφ_ sqh( _t_ ) = (1− _t_ )^2 +, which is differentiable everywhere
(see Exercise 3.8).
The SVM loss function shares many similarities with the binomial
loss (Hastie et al. 2009, Section 12.3), and their solutions are not too dif-
ferent. Figure 3.11 compares their _`_ 1 regularization paths on two examples,
and supports this claim. In the left-hand plot, they are virtually identical.
In the right-hand plot, for more than half of the path, the training data are
separated by the solution. As we proceed to the end of the path, the logistic
coefficients become less stable than those of the SVM, and can account for
the bigger discrepancies.
The support vector machine, on the other hand, is designed for finding
maximal-margin solutions for separable data, and its coefficients do not blow
up at the least-regularized end of the path. However, in terms of the _`_ 1 penalty,
this is at the nonsparse end of the path. In light of this, we do not recommend
the _`_ 1 regularized linear SVM as a variable selector, because the corresponding
logistic regression problem (3.6) gives very similar solutions when the penalty
is active, and the algorithms are more stable.


###### SUPPORT VECTOR MACHINES 49

#### 3.6.1 Logistic Regression with Separable Data

It is a well-known fact that without a penalty on the coefficients, the linear
logistic regression model fails when the two classes are linearly separable (Ex-
ercise 3.1); the maximum-likelihood estimates for the coefficients are infinite.
The problem in this case is that the likelihood is trying to make the probabil-
ities all 1s and 0s, and inspection of (3.2) shows that this cannot be achieved
with finite parameters. Once we penalize the criterion as in (3.6) the problem
goes away, for as long as _λ >_ 0, very large coefficients will not be tolerated.
With wide data ( _N_  _p_ ), the classes are almost always separable, unless
there are exact ties in covariate space for the two classes. Figure 3.1 shows the
logistic-regression coefficient path for a wide-data situation; notice how the
coefficients start to fan out near the end of the path. One has to take care at
this end of the path, and not allow _λ_ to get too small. In many situations, this
end represents the overfit situation, which is not of primary interest. It appears
not to be the case in this example, as can be seen in the cross-validation plots
in Figure 3.2.
The ends of the path have special meaning in the machine-learning com-
munity, since we will see they amount to maximal-margin classifiers. Before
giving the details, we review some geometry associated with linear classifica-
tion. Consider the boundaryB: ={ _x_ ∈R _p_ | _f_ ( _x_ ) = 0}associated with a
linear classifier _f_ ( _x_ )≡ _f_ ( _x_ ; _β_ 0 _,β_ ) = _β_ 0 + _βTx_. The Euclidean distance from
a point _x_ 0 to the boundary is given by

```
dist 2 ( x 0 , B) : = inf
z ∈B
‖ z − x 0 ‖ 2 =
```
```
| f ( x 0 )|
‖ β ‖ 2
```
###### (3.35)

(Exercise 3.2). Consequently, for a given predictor-response pair ( _x,y_ ), the
quantity _y f_ ‖ _β_ (‖ _x_ 2 )is the signed Euclidean distance to the boundary: it will be

negative if the sign of _y_ disagrees with that of _f_ ( _x_ ). For separable data, the
optimal separating hyperplane _f_ ∗( _x_ ) = 0 solves the optimization problem

```
M 2 ∗= max
β 0 ,β
```
###### {

```
min
i ∈{ 1 ,...,N }
```
```
yif ( xi ; β 0 ,β )
‖ β ‖ 2
```
###### }

###### . (3.36)

In words, it maximizes the Euclidean distance of the closest sample to the
boundary.
Rosset et al. (2004) establish an interesting connection between this op-
timal separating hyperplane and a certain limiting case of ridge-regularized
logistic regression. In particular, suppose that we replace the _`_ 1 -penalty in the
objective (3.10) with a squared _`_ 2 -penalty, and solve the problem

```
minimize
β 0 ,β
```
###### {

###### 1

###### N

###### ∑ N

```
i =1
```
```
log(1 + e − yif ( xi ; β^0 ,β )) + λ ‖ β ‖^22
```
###### }

###### ; (3.37)

let ( _β_ ̃ 0 ( _λ_ ) _,β_ ̃( _λ_ )) be the optimal solution, specifying a particular linear classi-
fier. We then consider the behavior of this linear classifier as the regularization


###### 50 GENERALIZED LINEAR MODELS

weight _λ_ vanishes: in particular, it can be shown (Rosset et al. 2004) that

```
lim
λ → 0
```
###### {

```
min
i ∈{ 1 ,...,N }
```
```
yif ( xi ; β ̃ 0 ( λ ) ,β ̃( λ ))
‖ β ̃( λ )‖ 2
```
###### }

###### = M 2 ∗. (3.38)

Thus, the end of the _`_ 2 -regularized logistic regression path corresponds to the
SVM solution. In particular, if ( _β_ ̆ 0 _,β_ ̆) solves the SVM objective (3.30) with
_C_ = 0, then

```
lim
λ → 0
```
```
β ̃( λ )
‖ β ̃( λ )‖ 2
```
```
= β. ̆ (3.39)
```
How does this translate to the setting of _`_ 1 -regularized models? Matters get
a little more complicated, since we move into the territory of general projec-
tions and dual norms (Mangasarian 1999). The analog of the _`_ 2 -distance (3.35)
is the quantity

```
dist∞( x 0 , B) : = inf
z ∈B
‖ z − x 0 ‖∞ =
```
```
| f ( x 0 )|
‖ β ‖ 1
```
###### , (3.40)

For a given _λ_ ≥0, let ( _β_ ̂ 0 ( _λ_ ) _,β_ ̂( _λ_ )) denote an optimal solution to the _`_ 1 -
regularized logistic regression objective (3.10). Then as _λ_ decreases toward
zero, we have

```
lim
λ → 0
```
###### [

```
min
i ∈{ 1 ,...,N }
```
```
yif ( xi ; β ̂ 0 ( λ ) ,β ̂( λ ))
‖ β ̂( λ )‖ 1
```
###### ]

###### = M ∞∗ , (3.41)

so that the worst-case margin of the _`_ 1 -regularized logistic regression converges
to the _`_ 1 -regularized version of the support vector machine, which maximizes
the _`_ ∞margin (3.40).
In summary, then, we can make the following observations:

- At the end of the path, where the solution is most dense, the logistic re-
    gression solution coincides with the SVM solution.
- The SVM approach leads to a more stable numerical method for computing
    the solution in this region.
- In contrast, logistic regression is most useful in the sparser part of the
    solution path.

**3.7 Computational Details and** glmnet

Most of the examples in this chapter were fit using the R packageglmnet
(Friedman et al. 2015). Here we detail some of the options and features in
glmnet. Although these are specific to this package, they also would be natural
requirements in any other similar software.


###### COMPUTATIONAL DETAILS ANDGLMNET 51

_Family:_ The family option allows one to pick the loss-function and the asso-
ciated model. As of version 1.7, these aregaussian,binomial,multinomial
(grouped or not),poisson, andcox. Thegaussianfamily allows for multiple
responses (multitask learning), in which case a group lasso is used to select
coefficients for each variable, as in the grouped multinomial. Associated with
each family is a _deviance_ measure, the analog of the residual sum-of-squares
for Gaussian errors. Denote by **_μ_** ˆ _λ_ the _N_ -vector of fitted mean values when
the parameter is _λ_ , and **_μ_** ̃the unrestricted or _saturated_ fit. Then

```
Dev λ = 2[. ` ( y , μ ̃)− ` ( y , μ ˆ λ )]. (3.42)
```
Here _`_ ( **y** _,_ **_μ_** ) is the log-likelihood of the model **_μ_** , a sum of _N_ terms. The _nul l
deviance_ is Devnull= Dev∞; typically this means **_μ_** ˆ∞= ̄ _y_ **1** , or in the case of
thecoxfamily **_μ_** ˆ∞= **0** .Glmnetreports D^2 , the fraction of deviance explained,
as defined in (3.11) on page 33.

_Penalties:_ For all models, theglmnetalgorithm admits a range of elastic-net
penalties ranging from _`_ 2 to _`_ 1. The general form of the penalized optimization
problem is

```
minimize
β 0 ,β
```
###### 

###### 

###### 

###### −

###### 1

###### N

```
` ( y ; β 0 ,β ) + λ
```
```
∑ p
```
```
j =1
```
```
γj
```
###### {

```
(1− α ) βj^2 + α | βj |
```
###### }

###### 

###### 

###### 

###### . (3.43)

This family of penalties is specified by three sets of real-valued parameters:

- The parameter _λ_ determines the overall complexity of the model. By de-
    fault, theglmnetalgorithm generates a sequence of 100 values for _λ_ that
    cover the whole path (on the log scale), with care taken at the lower end
    for saturated fits.
- The elastic-net parameter _α_ ∈[0 _,_ 1] provides a mix between ridge regression
    and the lasso. Although one can select _α_ via cross-validation, we typically
    try a course grid of around three to five values of _α_.
- For each _j_ = 1 _,_ 2 _,...,p_ , the quantity _γj_ ≥0 is a penalty modifier. When
    _γj_ = 0, the _jth_ variable is always included; when _γj_ =infit is always
    excluded. Typically _γj_ = 1 (the default), and all variables are treated as
    equals.

_Coefficient bounds:_ With coordinate descent, it is very easy to allow for upper
and lower bounds on each coefficient in the model. For example, we might ask
for a nonnegative lasso. In this case, if a coefficient exceeds an upper or lower
bound during the coordinate-descent cycle, it is simply set to the bound.

_Offset:_ All the models allow for an _offset_ term. This is a real valued number
_oi_ for each observation, that gets added to the linear predictor, and is not
associated with any parameter:

```
η ( xi ) = oi + β 0 + βTxi. (3.44)
```

###### 52 GENERALIZED LINEAR MODELS

The offset has many uses. Sometimes we have a previously-fit model _h_ ( _z_ )
(where _z_ might include or coincide with _x_ ), and we wish to see if augmenting
it with a linear model offers improvement. We would supply _oi_ = _h_ ( _zi_ ) for
each observation.
For Poisson models the offset allows us to model rates rather than mean
counts, if the observation period differs for each observation. Suppose we ob-
serve a count _Y_ over period _t_ , thenE[ _Y_ | _T_ = _t,X_ = _x_ ] = _tμ_ ( _x_ ), where _μ_ ( _x_ )
is the rate per unit time. Using the log link, we would supply _oi_ = log( _ti_ ) for
each observation. See Section 3.4.1 for an example.

_Matrix input and weights:_ Binomial and multinomial responses are typically
supplied as a 2 or _K_ -level factor. As an alternativeglmnetallows the response
to be supplied in matrix form. This allows for _grouped_ data, where at each
_xi_ we see a multinomial sample. In this case the rows of the _N_ × _K_ response
matrix represent counts in each category. Alternatively the rows can be pro-
portions summing to one. For the latter case, supplying an observation weight
equal to the total count for each observation is equivalent to the first form.
Trivially an indicator response matrix is equivalent to supplying the data as
a factor, in _ungrouped_ form.

_Sparse model matrices_ **X** _:_ Often when _p_  _N_ is very large, there are many
zeros in the input matrix **X**. For example, in document models, each feature
vector _xi_ ∈R _p_ might count the number of times each word in a very large
dictionary occurs in a document. Such vectors and matrices can be stored
efficiently by only storing the nonzero values, and then row and column indices
of where they occur. Coordinate descent is ideally suited to capitalize on
such sparsity, since it handles the variables one-at-a-time, and the principal
operation is an inner-product. For example, in Section 3.4.1, the model-matrix
**X** = **I** is the extremely sparse _N_ × _N_ identity matrix. Even with _N_ = 10^6 ,
the program can compute the relaxation path at 100 values of _δ_ in only 27
seconds.

### Bibliographic Notes

Generalized linear models were proposed as a comprehensive class of models
by Nelder and Wedderburn (1972); see the book by McCullagh and Nelder
(1989) for a thorough account. Application of the lasso to logistic regression
was proposed in Tibshirani (1996); coordinate descent methods for logistic,
multinomial, and Poisson regression were developed in Friedman, Hastie, Hoe-
fling and Tibshirani (2007), Friedman, Hastie and Tibshirani (2010 _b_ ), Wu and
Lange (2008), and Wu, Chen, Hastie, Sobel and Lange (2009). Pre-validation
was proposed by Tibshirani and Efron (2002). Boser, Guyon and Vapnik
(1992) described the support vector machine, with a thorough treatment in
Vapnik (1996).


###### EXERCISES 53

### Exercises

Ex. 3.1 Consider a linear logistic regression model with separable data, mean-
ing that the data can be correctly separated into two classes by a hyperplane.
Show that the likelihood estimates are unbounded, and that the log-likelihood
objective reaches its maximal value of zero. Are the fitted probabilities well-
defined?

Ex. 3.2 For a response variable _y_ ∈{− 1 _,_ +1}and a linear classification func-
tion _f_ ( _x_ ) = _β_ 0 + _βTx_ , suppose that we classify according to sign( _f_ ( _x_ )). Show
that the signed Euclidean distance of the point _x_ with label _y_ to the decision
boundary is given by
1
‖ _β_ ‖ 2

```
y f ( x ). (3.45)
```
Ex. 3.3 Here we show that for the multinomial model, the penalty used auto-
matically imposes a normalization on the parameter estimates. We solve this
problem for a general elastic-net penalty (Section 4.2). For some parameter
_α_ ∈[0 _,_ 1] consider the problem

```
cj ( α ) = arg min
t ∈R
```
###### { K

###### ∑

```
` =1
```
###### [

###### 1

###### 2

```
(1− α )( βj` − t )^2 + α | βj` − t |
```
###### ]}

###### . (3.46)

Let _β_ ̄ _j_ = _K_^1

###### ∑ K

_`_ =1 _βj`_ be the sample mean, and let
_β_ ̃ _j_ be a sample median.
(For simplicity, assume that _β_ ̄ _j_ ≤ _β_ ̃ _j_ ). Show that

```
β ̄ j ≤ cj ( α )≤ β ̃ j for all α ∈[0 , 1] (3.47)
```
with the lower inequality achieved if _α_ = 0, and the upper inequality achieved
if _α_ = 1.

Ex. 3.4 Derive the Lagrange dual (3.25) of the _maximum-entropy_ prob-
lem (3.24). Note that positivity is automatically enforced, since the log func-
tion in the objective (3.24) serves as a barrier. ( _Hint:_ It may help to intro-
duce additional variables _wi_ = _pi_ − _ri_ , and now minimize the criterion (3.24)
with respect to both{ _pi,wi_ } _Ni_ =1, subject to the additional constraints that
_wi_ = _pi_ − _ri_ .)

Ex. 3.5 Recall the dual (3.25) of the maximum entropy problem, and the
associated example motivating it. Suppose that for each cell, we also measure
the value _xk_ corresponding to the mid-cell ordinate on the continuous domain
_x_. Consider the model

```
qk = ukeβ^0 +
```
###### ∑ M

```
m =1 βmx
```
```
mk + αk
, (3.48)
```
and suppose that we fit it using the penalized log-likelihood (3.25) without
penalizing any of the coefficients. Show that for the estimated distribution
ˆ **q** ={ _q_ ˆ _k_ } _Nk_ =1, the moments of _X_ up to order _M_ match those of the empirical
distribution **_r_** ={ _rk_ } _Nk_ =1.


###### 54 GENERALIZED LINEAR MODELS

Ex. 3.6 Consider the group-lasso-regularized version of multinomial regres-
sion (3.20). Suppose that for a particular value of _λ_ , the coefficient _β_ ̂ _kj_ is
_not equal_ to 0. Show that _β_ ̂ _`j_ 6 = 0 for all _`_ ∈(1 _,...,K_ ), and moreover that
∑ _K
`_ =1
_β_ ̂ _`j_ = 0.

Ex. 3.7 This problem also applies to the group-lasso-regularized form of multi-
nomial regression (3.20). Suppose that for a particular value of _λ_ , and the
fitted probabilities are ˆ _πi_ = (ˆ _πi_ 1 _,...,_ ˆ _πiK_ ) _T_. Similarly let _ri_ = ( _ri_ 1 _,...,riK_ ) _T_
be the observed proportions. Suppose we consider including an additional
variable (vector) _Z_ with observed values _zi_ , and wish to update the fit. Let

_g_ =

###### ∑ N

_i_ =1 _zi_ ( _ri_ − _π_ ˆ _i_ ). Show that if‖ _g_ ‖^2 _< λ_ , then the coefficients of _Z_ are
zero, and the model remains unchanged.

Ex. 3.8 The _squared hinge loss functionφ_ sqh( _t_ ) : = (1− _t_ )^2 +can be used as a
margin-based loss function _φ_ ( _y f_ ( _x_ )) for binary classification problems.

```
(a) Show that φ sqhis differentiable everywhere.
(b) Suppose Y ∈{− 1 , +1}with Pr( Y = +1) = π ∈(0 , 1). Find the function
f :R p →Rthat minimizes (for each x ∈R p ) the criterion
```
```
minimize
f
```
###### E Y

###### [

```
φ sqh
```
###### (

```
Y f ( x )
```
###### )]

###### (3.49)

```
(c) Repeat part (b) using the usual hinge loss φ hin( t ) = (1− t )+.
```
Ex. 3.9 Given binary responses _yi_ ∈ {− 1 _,_ +1}, consider the _`_ 1 -regularized
SVM problem

```
( β ̂ 0 ,β ̂) = arg min
β 0 ,β
```
###### 

###### 

###### 

###### ∑ N

```
i =1
```
```
{ 1 − yif ( xi ; β 0 ,β )}++ λ
```
```
∑ p
```
```
j =1
```
```
| βj |
```
###### 

###### 

###### 

###### , (3.50)

where _f_ ( _x_ ; _β_ 0 _,β_ ) : = _β_ 0 + _βTx_. In this exercise, we compare solutions of this
problem to those of weighted _`_ 2 -regularized SVM problem: given nonnegative
weights{ _wj_ } _pj_ =1, we solve

```
( β ̃ 0 ,β ̃) = arg min
β 0 ,β
```
###### 

###### 

###### 

###### ∑ N

```
i =1
```
```
{ 1 − yif ( xi ; β 0 ,β )}++
```
```
λ
2
```
```
∑ p
```
```
j =1
```
```
wjβ^2 j
```
###### 

###### 

###### 

###### . (3.51)

```
(a) Show that if we solve the problem (3.51) with wj = 1 / | β ̂ j |, then ( β ̃ 0 ,β ̃) =
( β ̂ 0 ,β ̂).
(b) For a given weight sequence{ wj } pj =1with wj ∈(0 , ∞) for all j = 1 ,...,p ,
show how to solve the criterion (3.51) using a regular unweighted SVM
solver. What do you do if wj =∞for some subset of indices?
(c) In light of the preceding parts, suggest an iterative algorithm for the
problem (3.50) using a regular SVM solver.
```

```
Chapter 4
```
## Generalizations of the Lasso Penalty

### 4.1 Introduction

In the previous chapter, we considered some generalizations of the lasso ob-
tained by varying the loss function. In this chapter, we turn to some useful
variations of the basic lasso _`_ 1 -penalty itself, which expand the scope of the
basic model. They all inherit the two essential features of the standard lasso,
namely the shrinkage and selection of variables, or groups of variables.
Such generalized penalties arise in a wide variety of settings. For instance,
in microarray studies, we often find groups of correlated features, such as genes
that operate in the same biological pathway. Empirically, the lasso sometimes
does not perform well with highly correlated variables. By combining a squared
_`_ 2 -penalty with the _`_ 1 -penalty, we obtain the _elastic net_ , another penalized
method that deals better with such correlated groups, and tends to select the
correlated features (or not) together. In other applications, features may be
structurally grouped. Examples include the dummy variables that are used
to code a multilevel categorical predictor, or sets of coefficients in a multiple
regression problem. In such settings, it is natural to select or omit all the
coefficients within a group together. The _group lasso_ and the _overlap group
lasso_ achieve these effects by using sums of (un-squared) _`_ 2 penalties. Another
kind of structural grouping arises from an underlying index set such as time;
our parameters might each have an associated time stamp. We might then ask
for time-neighboring coefficients to be the same or similar. The _fused lasso_ is
a method naturally tailored to such situations.
Finally, a variety of nonparametric smoothing methods operate implic-
itly with large groups of variables. For example, each term in an additive
smoothing-spline model has an associated cubic-spline basis. The grouped
lasso extends naturally to these situations as well; the COSSO and the SPAM
families are examples of such nonparametric models. In summary, all these
variants deal with different kinds of groupings of the features in natural ways,
and it is the goal of this chapter to explore them in some more detail.

```
55
```

###### 56 GENERALIZATIONS OF THE LASSO PENALTY

### 4.2 The Elastic Net

The lasso does not handle highly correlated variables very well; the coefficient
paths tend to be erratic and can sometimes show wild behavior. Consider a
simple but extreme example, where the coefficient for a variable _Xj_ with a
particular value for _λ_ is _β_ ̂ _j >_ 0. If we augment our data with an _identical_
copy _Xj_ ′= _Xj_ , then they can share this coefficient in infinitely many ways—

any _β_ ̃ _j_ + _β_ ̃ _j_ ′ = _β_ ˆ _j_ with both pieces positive—and the loss and _`_ 1 penalty
are indifferent. So the coefficients for this pair are not defined. A quadratic
penalty, on the other hand, will divide _β_ ˆ _j_ exactly equally between these two
twins (see Exercise 4.1). In practice, we are unlikely to have an identical

```
0 1 2 3 4
```
```
−1.5
```
```
−0.5 0.0 0.5 1.0 1.5
```
```
0 2 2 5 5
```
```
0 1 2 3 4
```
```
−1.5
```
```
−0.5 0.0 0.5 1.0 1.5
```
```
0 3 6 6 6
```
```
‖βˆ‖ 1 ‖βˆ‖ 1
```
```
Coefficients
```
```
ˆβj
```
```
Coefficients
```
```
ˆβj
```
```
α= 1. 0 α= 0. 3
```
**Figure 4.1** _Six variables, highly correlated in groups of three. The lasso estimates
(α_ = 1 _), as shown in the left panel, exhibit somewhat erratic behavior as the regu-
larization parameterλis varied. In the right panel, the elastic net with (α_ = 0_._ 3 _)
includes al l the variables, and the correlated groups are pul led together._

pair of variables, but often we do have groups of very correlated variables. In
microarray studies, groups of genes in the same biological pathway tend to be
expressed (or not) together, and hence measures of their expression tend to
be strongly correlated. The left panel of Figure 4.1 shows the lasso coefficient
path for such a situation. There are two sets of three variables, with pairwise
correlations around 0_._ 97 in each group. With a sample size of _N_ = 100, the
data were simulated as follows:

```
Z 1 , Z 2 ∼ N (0 , 1) independent,
Y = 3· Z 1 − 1. 5 Z 2 + 2 ε, with ε ∼ N (0 , 1),
Xj = Z 1 + ξj/ 5 , with ξj ∼ N (0 , 1) for j = 1 , 2 , 3, and
Xj = Z 2 + ξj/ 5 , with ξj ∼ N (0 , 1) for j = 4 , 5 , 6.
```
###### (4.1)

As shown in the left panel of Figure 4.1, the lasso coefficients do not reflect
the relative importance of the individual variables.


###### THE ELASTIC NET 57

The _elastic net_ makes a compromise between the ridge and the lasso penal-
ties (Zou and Hastie 2005); it solves the convex program

```
minimize
( β 0 ,β )∈R×R p
```
###### {

###### 1

###### 2

###### ∑ N

```
i =1
```
```
( yi − β 0 − xTiβ )^2 + λ
```
###### [

```
1
2 (1− α )‖ β ‖
```
```
2
2 + α ‖ β ‖^1
```
###### ]

###### }

###### , (4.2)

where _α_ ∈[0 _,_ 1] is a parameter that can be varied. By construction, the
penalty applied to an individual coefficient (disregarding the regularization
weight _λ >_ 0) is given by

```
1
2
```
```
(1− α ) β^2 j + α | βj |. (4.3)
```
When _α_ = 1, it reduces to the _`_ 1 -norm or lasso penalty, and with _α_ = 0, it
reduces to the squared _`_ 2 -norm, corresponding to the ridge penalty.^1
Returning to Figure 4.1, the right-hand panel shows the elastic-net coeffi-
cient path with _α_ = 0_._ 3. We see that in contrast to the lasso paths in the left
panel, the coefficients are selected approximately together in their groups, and
also approximately share their values equally. Of course, this example is ide-
alized, and in practice the group structure will not be so cleanly evident. But
by adding some component of the ridge penalty to the _`_ 1 -penalty, the elastic
net automatically controls for strong within-group correlations. Moreover, for
any _α <_ 1 and _λ >_ 0, the elastic-net problem (4.2) is _strictly convex:_ a unique
solution exists irrespective of the correlations or duplications in the _Xj_.
Figure 4.2 compares the constraint region for the elastic net (left image) to
that of the lasso (right image) when there are three variables. We see that the
elastic-net ball shares attributes of the _`_ 2 ball and the _`_ 1 ball: the sharp corners
and edges encourage selection, and the curved contours encourage sharing of
coefficients. See Exercise 4.2 for further exploration of these properties.
The elastic net has an additional tuning parameter _α_ that has to be de-
termined. In practice, it can be viewed as a higher-level parameter, and can
be set on subjective grounds. Alternatively, one can include a (coarse) grid of
values of _α_ in a cross-validation scheme.
The elastic-net problem (4.2) is convex in the pair ( _β_ 0 _,β_ )∈R×R _p_ , and
a variety of different algorithms can be used to solve it. Coordinate descent is
particularly effective, and the updates are a simple extension of those for the
lasso in Chapter 2. We have included an unpenalized intercept in the model,
which can be dispensed with at the onset; we simply center the covariates
_xij_ , and then the optimal intercept is _β_ ̂ 0 = ̄ _y_ = _N_^1

###### ∑ N

_j_ =1 _yj_. Having solved for
the optimal _β_ ̂ 0 , it remains to compute the optimal vector _β_ ̂= ( _β_ ̂ 1 _,...,β_ ̂ _p_ ). It
can be verified (Exercise 4.3) that the coordinate descent update for the _jth_

(^1) The 1
2 in the quadratic part of the elastic-net penalty (4.3) leads to a more intuitive
soft-thresholding operator in the optimization.


###### 58 GENERALIZATIONS OF THE LASSO PENALTY

```
β 2
```
```
β 1
```
```
β 3
```
```
1
```
```
β 1
β 2
```
```
β 3
```
```
1
```
**Figure 4.2** _The elastic-net bal l withα_ = 0_._ 7 _(left panel) in_ R^3 _, compared to the
`_ 1 _ball (right panel). The curved contours encourage strongly correlated variables to
share coefficients (see Exercise 4.2 for details)._

coefficient takes the form

```
β ̂ j = S λα
```
###### (∑ N

```
i =1 rijxij
```
###### )

###### ∑ N

```
i =1 x
2
ij + λ (1− α )
```
###### , (4.4)

whereS _μ_

###### (

```
z
```
###### )

```
: = sign( z ) ( z − μ )+is the soft-thresholding operator, and
```
_rij_ : = _yi_ − _β_ ̂ 0 −

###### ∑

_k_ 6 = _jxik
β_ ̂ _k_ is the partial residual. We cycle over the up-
dates (4.4) until convergence. Friedman et al. (2015) give more details, and
provide an efficient implementation of the elastic net penalty for a variety of
loss functions.

### 4.3 The Group Lasso

There are many regression problems in which the covariates have a natural
group structure, and it is desirable to have all coefficients within a group
become nonzero (or zero) simultaneously. The various forms of group lasso
penalty are designed for such situations. A leading example is when we have
qualitative factors among our predictors. We typically code their levels using a
set of dummy variables or contrasts, and would want to include or exclude this
group of variables together. We first define the group lasso and then develop
this and other motivating examples.
Consider a linear regression model involving _J_ groups of covariates, where
for _j_ = 1 _,...,J_ , the vector _Zj_ ∈R _pj_ represents the covariates in group _j_.
Our goal is to predict a real-valued response _Y_ ∈Rbased on the collection of
covariates ( _Z_ 1 _,...,ZJ_ ). A linear model for the regression functionE( _Y_ | _Z_ )


###### THE GROUP LASSO 59

takes the form _θ_ 0 +

###### ∑ J

```
j =1 Z
```
```
T
jθj , where θj ∈R
pj represents a group of pj
```
regression coefficients.^2
Given a collection of _N_ samples{( _yi,zi_ 1 _,zi,_ 2 _,...,zi,J_ )} _Ni_ =1, the group lasso
solves the convex problem

```
minimize
θ 0 ∈R ,θj ∈R pj
```
###### 

###### 

###### 

###### 1

###### 2

###### ∑ N

```
i =1
```
###### (

```
yi − θ 0 −
```
###### ∑ J

```
j =1
```
```
zijTθj
```
###### ) 2

```
+ λ
```
###### ∑ J

```
j =1
```
```
‖ θj ‖ 2
```
###### 

###### 

###### 

###### , (4.5)

where‖ _θj_ ‖ 2 is the Euclidean norm of the vector _θj_.
This is a group generalization of the lasso, with the properties:

- depending on _λ_ ≥0, either the entire vector _θ_ ˆ _j_ will be zero, or all its
    elements will be nonzero;^3
- when _pj_ = 1, then we have‖ _θj_ ‖ 2 =| _θj_ |, so if all the groups are singletons,
    the optimization problem (4.5) reduces to the ordinary lasso.

Figure 4.3 compares the constraint region for the group lasso (left image) to
that of the lasso (right image) when there are three variables. We see that the
group lasso ball shares attributes of both the _`_ 2 and _`_ 1 balls.

```
β 1
```
```
β 3
```
```
β 2
```
```
1
```
```
β 1
β 2
```
```
β 3
```
```
1
```
**Figure 4.3** _The group lasso bal l (left panel) in_ R^3 _, compared to the`_ 1 _ball (right
panel). In this case, there are two groups with coefficientsθ_ 1 = ( _β_ 1 _,β_ 2 )∈R^2 _and
θ_ 2 = _β_ 3 ∈R^1_._

In the formulation (4.5), all groups are equally penalized, a choice which
leads larger groups to be more likely to be selected. In their original pro-
posal, Yuan and Lin (2006) recommended weighting the penalties for each
group according to their size, by a factor

###### √

_pj_. In their case, the group ma-
trices **Z** _j_ were orthonormal; for general matrices one can argue for a factor

(^2) To avoid confusion, we use _Zj_ and _θj_ to represent groups of variables and their coeffi-
cients, rather than the _Xj_ and _βj_ we have used for scalars.
(^3) Nonzero for generic problems, although special structure could result in some coefficients
in a group being zero, just as they can for linear or ridge regression.


###### 60 GENERALIZATIONS OF THE LASSO PENALTY

‖ **Z** _j_ ‖ _F_ (Exercise 4.5). These choices are somewhat subjective, and are easily
accommodated; for simplicity, we omit this modification in our presentation.
We now turn to some examples to illustrate applications of the group
lasso (4.5).

_Example 4.1. Regression with multilevel factors._ When a predictor variable
in a linear regression is a multilevel factor, we typically include a separate
coefficient for each level of the factor. Take the simple case of one continuous
predictor _X_ and a three-level factor _G_ with levels _g_ 1 , _g_ 2 , and _g_ 3. Our linear
model for the mean is

```
E( Y | X,G ) = Xβ +
```
###### ∑^3

```
k =1
```
```
θk I k [ G ] , (4.6)
```
whereI _k_ [ _G_ ] is a 0-1 valued indicator function for the event{ _G_ = _gk_ }. The
model (4.6) corresponds to a linear regression in _X_ with different intercepts
_θk_ depending on the level of _G_.
By introducing a vector _Z_ = ( _Z_ 1 _,Z_ 2 _,Z_ 3 ) of three _dummy variables_ with
_Zk_ =I _k_ [ _G_ ], we can write this model as a standard linear regression

```
E( Y | X,G ) =E( Y | X,Z ) = Xβ + ZTθ, (4.7)
```
where _θ_ = ( _θ_ 1 _,θ_ 2 _,θ_ 3 ). In this case _Z_ is a group variable that represents the
single factor _G_. If the variable _G_ —as coded by the vector _Z_ —has no predictive
power, then the full vector _θ_ = ( _θ_ 1 _,θ_ 2 _,θ_ 3 ) should be zero. On the other hand,
when _G_ is useful for prediction, then at least generically, we expect that all
coefficients of _θ_ are likely to be nonzero. More generally we can have a number
of such single and group variables, and so have models of the form

```
E( Y | X,G 1 ,...,GJ ) = β 0 + XTβ +
```
###### ∑ J

```
j =1
```
```
ZjTθj. (4.8)
```
When selecting variables for such a model we would typically want to include
or exclude groups at a time, rather than individual coefficients, and the group
lasso is designed to enforce such behavior.
With unpenalized linear regression with factors, one has to worry about
aliasing; in the example here, the dummy variables in a set add to one, which is
aliased with the intercept term. One would then use contrasts to code factors
that enforce, for example, that the coefficients in a group sum to zero. With
the group lasso this is not a concern, because of the _`_ 2 penalties. We use the
symmetric full representation as above, because the penalty term ensures that
the coefficients in a group sum to zero (see Exercise 4.4). ♦

Variables can be grouped for other reasons. For example, in gene-expression
arrays, we might have a set of highly correlated genes from the same biological
pathway. Selecting the group amounts to selecting a pathway. Figure 4.4 shows
the coefficient path for a group-lasso fit to some genomic data for splice-site


###### THE GROUP LASSO 61

detection (Meier, van de Geer and B ̈uhlmann 2008, Section 5). The data arise
from human DNA, and each observation consists of seven bases with values
{ _A,G,C,T_ }^7. Some of the observations are at exon-intron boundaries (splice
sites), and others not, coded in a binary response; see Burge and Karlin (1977)
for further details about these data. The regression problem is to predict the
binary response _Y_ using the seven four-level factors _Gj_ as predictors, and we
use a training sample of 5610 observations in each class.

```
Group Lasso
```
```
Coefficients
```
```
0.16 0.14 0.12 0.1 0.08 0.06 0.04 0.02 0
```
```
−0.1
```
```
0.0
```
```
0.1
```
```
0.2
```
```
t
```
```
a
```
```
a
```
```
a
```
```
c
```
```
c
```
```
Pos7
```
```
Pos2
```
```
Pos5
```
```
Pos4
```
```
Pos3
```
```
Pos6
```
```
λ
```
**Figure 4.4** _Coefficient profiles from the group lasso, fit to splice-site detection data.
The coefficients come in groups of four, corresponding to the nucleotidesA,G,C,T.
The vertical lines indicate when a group enters. On the right-hand side we label some
of the variables; for example, “Pos6” and the level “c”. The coefficients in a group
have the same color, and they always average zero._

_Example 4.2. Multivariate regression._ Sometimes we are interested in predict-
ing a multivariate response _Y_ ∈R _K_ on the basis of a vector _X_ ∈R _p_ of predic-
tors (also known as _multitask learning_ ). Given _N_ observations{( _yi,xi_ )} _Ni_ =1,
we let **Y** ∈R _N_ × _K_ and **X** ∈R _N_ × _p_ be matrices with _yi_ and _xi_ , respectively, as
their _ith_ row. If we assume a linear model for the full collection of data, then
it can be written in the form

```
Y = XΘ + E (4.9)
```
where **Θ** ∈R _p_ × _K_ is a matrix of coefficients, and **E** ∈R _N_ × _K_ a matrix of errors.
One way to understand the model (4.9) is as a coupled collection of _K_
standard regression problems inR _p_ , each sharing the same covariates, in which


###### 62 GENERALIZATIONS OF THE LASSO PENALTY

the _kth_ column _θk_ ∈R _p_ of **Θ** is the coefficient vector for the _kth_ problem. Thus,
in principle, we could fit a separate regression coefficient vector _θk_ for each
of the _K_ different problems, using the lasso in the case of a sparse linear
model. In many applications, the different components of the response vector
_Y_ ∈R _K_ are strongly related, so that one would expect that the underlying
regression vectors would also be related. For instance, in collaborative filtering
applications, the different components of _Y_ might represent a given user’s
preference scores for different categories of objects, such as books, movies,
music, and so on, all of which are closely related. For this reason, it is natural—
and often leads to better prediction performance—to solve the _K_ regression
problems jointly, imposing some type of group structure on the coefficients.
In another example, each response might be the daily return of an equity
in a particular market sector; hence we have multiple equities, and all being
predicted by the same market signals.
As one example, in the setting of sparsity, we might posit that there is
an unknown subset _S_ ⊂ { 1 _,_ 2 _,...,p_ }of the covariates that are relevant for
prediction, and this same subset is _preserved_ across all _K_ components of the
response variable. In this case, it would be natural to consider a group lasso
penalty, in which the _p_ groups are defined by the rows{ _θ_ ′ _j_ ∈R _K, j_ = 1 _,...,p_ }
of the full coefficient matrix **Θ** ∈R _p_ × _K_. Using this penalty, we then solve the
regularized least-squares problem

```
minimize
Θ ∈R p × K
```
###### 

###### 

###### 

###### 1

###### 2

```
‖ Y − XΘ ‖^2 F+ λ
```
###### 

###### 

```
∑ p
```
```
j =1
```
```
‖ θ ′ j ‖ 2
```
###### 

###### 

###### 

###### 

###### 

###### , (4.10)

where‖·‖Fdenotes the Frobenius norm.^4 This problem is a special case of
the general group lasso (4.5), in which _J_ = _p_ , and _pj_ = _K_ for all groups _j_ .♦

#### 4.3.1 Computation for the Group Lasso

Turning to computational issues associated with the group lasso, let us rewrite
the relevant optimization problem (4.5) in a more compact matrix-vector no-
tation:

```
minimize
( θ 1 ,...,θJ )
```
###### 

###### 

###### 

###### 1

###### 2

```
‖ y −
```
###### ∑ J

```
j =1
```
```
Z jθj ‖^22 + λ
```
###### ∑ J

```
j =1
```
```
‖ θj ‖ 2
```
###### 

###### 

###### 

###### . (4.11)

For simplicity we ignore the intercept _θ_ 0 , since in practice we can center all
the variables and the response, and it goes away. For this problem, the zero
subgradient equations (see Section 5.2.2 take the form

```
− Z Tj ( y −
```
###### ∑ J

```
` =1
```
```
Z ` ̂ θ` ) + λ ̂ sj = 0 , for j = 1 , ··· J , (4.12)
```
(^4) The Frobenius norm of a matrix is simply the _`_ 2 -norm applied to its entries.


###### THE GROUP LASSO 63

wherê _sj_ ∈R _pj_ is an element of the subdifferential of the norm‖·‖ 2 evaluated
at _θ_ ̂ _j_. As verified in Exercise 5.5 on page 135, whenever _θ_ ̂ _j_ 6 = 0, then we

necessarily havê _sj_ =̂ _θj/_ ‖̂ _θj_ ‖ 2 , whereas when _θ_ ̂ _j_ = 0, then̂ _sj_ is any vector
with‖̂ _sj_ ‖ 2 ≤1. One method for solving the zero subgradient equations is by

holding fixed all block vectors{̂ _θk, k_ 6 = _j_ }, and then solving for̂ _θj_. Doing so
amounts to performing block coordinate descent on the group lasso objective
function. Since the problem is convex, and the penalty is block separable,
it is guaranteed to converge to an optimal solution (Tseng 1993). With all
{̂ _θk, k_ 6 = _j_ }fixed, we write

```
− Z Tj ( r j − Z jθ ̂ j ) + λ ̂ sj = 0 , (4.13)
```
where **_r_** _j_ = **y** −

###### ∑

```
k 6 = j Z kθ ̂ k is the j
thpartial residual. From the conditions
```
satisfied by the subgradient̂ _sj_ , we must havê _θj_ = 0 if‖ **Z** _Tj_ **_r_** _j_ ‖ 2 _< λ_ , and

otherwise the minimizer̂ _θj_ must satisfy

```
̂ θj =
```
###### (

```
Z Tj Z j +
```
```
λ
‖̂ θj ‖ 2
```
###### I

###### )− 1

```
Z Tj r j. (4.14)
```
This update is similar to the solution of a ridge regression problem, except that
the underlying penalty parameter depends on‖ _θ_ ̂ _j_ ‖ 2. Unfortunately, Equa-
tion (4.14) does not have a closed-form solution for _θ_ ̂ _j_ unless **Z** _j_ is orthonor-
mal. In this special case, we have the simple update

```
̂ θj =
```
###### (

###### 1 −

```
λ
‖ Z Tj r j ‖ 2
```
###### )

```
+
```
```
Z Tj r j, (4.15)
```
where ( _t_ )+: = max{ 0 _,t_ }is the positive part function. See Exercise 4.6 for
further details.
Although the original authors (Yuan and Lin 2006) and many others since
have made the orthonormality assumption, it has implications that are not
always reasonable (Simon and Tibshirani 2012). Exercise 4.8 explores the im-
pact of this assumption on the dummy coding used here for factors. In the
general (nonorthonormal case) one has to solve (4.14) using iterative methods,
and it reduces to a very simple one-dimensional search (Exercise 4.7).
An alternative approach is to apply the composite gradient methods of
Section 5.3.3 to this problem. Doing so leads to an algorithm that is also
iterative within each block; at each iteration the block-optimization problem
is approximated by an easier problem, for which an update such as (4.15) is
possible. In detail, the algorithm would iterate until convergence the updates

```
ω ← θ ̂ j + ν · Z Tj ( r j − Z jθ ̂ j ) , and (4.16a)
```
```
̂ θj ←
```
###### (

###### 1 −

```
νλ
‖ ω ‖ 2
```
###### )

```
+
```
```
ω, (4.16b)
```
where _ν_ is a step-size parameter. See Exercise 4.9 for details of this derivation.


###### 64 GENERALIZATIONS OF THE LASSO PENALTY

#### 4.3.2 Sparse Group Lasso

When a group is included in a group-lasso fit, all the coefficients in that group
are nonzero. This is a consequence of the _`_ 2 norm. Sometimes we would like
sparsity both with respect to which groups are selected, and which coefficients
are nonzero within a group. For example, although a biological pathway may
be implicated in the progression of a particular type of cancer, not all genes
in the pathway need be active. The _sparse group lasso_ is designed to achieve
such within-group sparsity.
In order to achieve within-group sparsity, we augment the basic group
lasso (4.11) with an additional _`_ 1 -penalty, leading to the convex program

```
minimize
{ θj ∈R pj } Jj =1
```
###### 

###### 

###### 

###### 1

###### 2

```
‖ y −
```
###### ∑ J

```
j =1
```
```
Z jθj ‖^22 + λ
```
###### ∑ J

```
j =1
```
###### [

```
(1− α )‖ θj ‖ 2 + α ‖ θj ‖ 1
```
###### ]

###### 

###### 

###### 

###### , (4.17)

with _α_ ∈[0 _,_ 1]. Much like the elastic net of Section 4.2, the parameter _α_
creates a bridge between the group lasso ( _α_ = 0) and the lasso ( _α_ = 1).
Figure 4.5 contrasts the group lasso constraint region with that of the sparse
group lasso for the case of three variables. Note that in the two horizontal
axes, the constraint region resembles that of the elastic net.

```
β 1
```
```
β 3
```
```
β 2
```
```
1
```
```
β 3
```
```
β 2
```
```
β 1
```
```
1
```
**Figure 4.5** _The group lasso bal l (left panel) in_ R^3 _, compared to the sparse group-
lasso bal l withα_ = 0_._ 5 _(right panel). Depicted are two groups with coefficientsθ_ 1 =
( _β_ 1 _,β_ 2 )∈R^2 _andθ_ 2 = _β_ 3 ∈R^1_._

Since the optimization problem (4.17) is convex, its optima are specified
by zero subgradient equations, similar to (4.13) for the group lasso. More
precisely, any optimal solution must satisfy the condition

```
− Z Tj ( y −
```
###### ∑ J

```
` =1
```
```
Z `θ ̂ ` ) + λ (1− α )·̂ sj + λα ̂ tj = 0 , for j = 1 , ··· ,J , (4.18)
```
wherê _sj_ ∈R _pj_ belongs to the subdifferential of the Euclidean norm at̂ _θj_ ,


###### THE GROUP LASSO 65

and̂ _tj_ ∈R _pj_ belongs to the subdifferential of the _`_ 1 -norm at̂ _θj_ ; in particular,
we have eacĥ _tjk_ ∈sign( _θjk_ ) as with the usual lasso.
We once again solve these equations via block-wise coordinate descent,
although the solution is a bit more complex than before. As in Equation (4.13),
with **_r_** _j_ the partial residual in the _jth_ coordinate, it can be seen that _θ_ ̂ _j_ = 0
if and only if the equation

```
Z Tj r j = λ (1− α )̂ sj + λα ̂ tj (4.19)
```
has a solution with‖̂ _sj_ ‖ 2 ≤1 and̂ _tjk_ ∈[− 1 _,_ 1] for _k_ = 1 _,...,pj_. Fortunately,
this condition is easily checked, and we find that (Exercise 4.12)

```
θ ̂ j = 0 if and only if ‖S λα
```
###### (

```
Z Tj r j
```
###### )

```
‖ 2 ≤ λ (1− α ) , (4.20)
```
where S _λα_

###### (

###### ·

###### )

is the soft-thresholding operator applied here component-
wise to its vector argument **Z** _Tj_ **_r_** _j_. Notice the similarity with the conditions
for the group lasso (4.13), except here we use the soft-thresholded gradient
S _λα_

###### (

```
Z Tj r j
```
###### )

. Likewise, if **Z** _Tj_ **Z** _j_ = **I** , then as shown in Exercise 4.13, we have

```
θ ̂ j =
```
###### (

###### 1 −

```
λ (1− α )
‖S λα
```
###### (

```
Z Tj r j
```
###### )

###### ‖ 2

###### )

```
+
```
```
S λα
```
###### (

```
Z Tj r j
```
###### )

###### . (4.21)

In the general case when the **Z** _j_ are not orthonormal and we have checked

that _θ_ ̂ _j_ 6 = 0, findinĝ _θj_ amounts to solving the subproblem

```
minimize
θj ∈R pj
```
###### {

###### 1

###### 2

```
‖ r j − Z jθj ‖^22 + λ (1− α )‖ θj ‖ 2 + λα ‖ θj ‖ 1
```
###### }

###### . (4.22)

Here we can again use generalized gradient descent (Section (5.3.3)) to produce
a simple iterative algorithm to solve each block, as in Equation (4.16a). The
algorithm would iterate until convergence the sequence

```
ω ← θ ̂ j + ν · Z Tj ( r j − Z jθ ̂ j ) , and (4.23a)
```
```
θj ←
```
###### (

###### 1 −

```
νλ (1− α )
‖S λα
```
###### (

```
ω
```
###### )

###### ‖ 2

###### )

```
+
```
```
S λα
```
###### (

```
ω
```
###### )

```
, (4.23b)
```
where _ν_ is the step size. See Exercise 4.10 for the details.

#### 4.3.3 The Overlap Group Lasso

Sometimes variables can belong to more than one group: for example, genes
can belong to more than one biological pathway. The _overlap group lasso_ is a
modification that allows variables to contribute to more than one group.
To gain some intuition, consider the case of _p_ = 5 variables partitioned
into two groups, say of the form

```
Z 1 = ( X 1 ,X 2 ,X 3 ) , and Z 2 = ( X 3 ,X 4 ,X 5 ). (4.24)
```

###### 66 GENERALIZATIONS OF THE LASSO PENALTY

Here _X_ 3 belongs to both groups. The overlap group lasso simply replicates
a variable in whatever group it appears, and then fits the ordinary group
lasso as before. In this particular example, the variable _X_ 3 is replicated, and
we fit coefficient vectors _θ_ 1 = ( _θ_ 11 _,θ_ 12 _,θ_ 13 ) and _θ_ 2 = ( _θ_ 21 _,θ_ 22 _,θ_ 23 ) using the
group lasso (4.5), using a group penalty‖ _θ_ 1 ‖ 2 +‖ _θ_ 2 ‖ 2. In terms of the original
variables, the coefficient _β_ ̂ 3 of _X_ 3 is given by the sum _β_ ̂ 3 =̂ _θ_ 13 +̂ _θ_ 21. As
a consequence, the coefficient _β_ ̂ 3 can be nonzero if either (or both) of the
coefficients _θ_ ̂ 13 or _θ_ ̂ 21 are nonzero. Hence, all else being equal, the variable _X_ 3
has a better chance of being included in the model than the other variables,
by virtue of belonging to two groups.
Rather than replicate variables, it is tempting to simply replicate the coef-
ficients in the group-lasso penalty. For instance, for the given grouping above,
with _X_ = ( _X_ 1 _,...,X_ 5 ), and _β_ = ( _β_ 1 _,...,β_ 5 ), suppose that we define

```
θ 1 = ( β 1 ,β 2 ,β 3 ) , and θ 2 = ( β 3 ,β 4 ,β 5 ) , (4.25)
```
and then apply the group-lasso penalty‖ _θ_ 1 ‖ 2 +‖ _θ_ 2 ‖ 2 as before. However, this
approach has a major drawback. Whenever̂ _θ_ 1 = 0 in any optimal solution,
then we must necessarily have _β_ ̂ 3 = 0 in _both groups_. Consequently, in this
particular example, the only possible sets of nonzero coefficients are{ 1 _,_ 2 },
{ 4 _,_ 5 }, and{ 1 _,_ 2 _,_ 3 _,_ 4 _,_ 5 }; the original groups{ 1 _,_ 2 _,_ 3 }and{ 3 _,_ 4 _,_ 5 }are not con-
sidered as possibilities, since if either group appears, then both groups must
appear.^5 As a second practical point, the penalty in this approach is not sep-
arable, and hence coordinate-descent algorithms may fail to converge to an
optimal solution (see Section 5.4 for more details).
Jacob, Obozinski and Vert (2009) recognized this problem, and hence pro-
posed the replicated variable approach (4.24) or _overlap group lasso_. For our
motivating example, the possible sets of nonzero coefficients for the overlap
group lasso are{ 1 _,_ 2 _,_ 3 },{ 3 _,_ 4 _,_ 5 }, and{ 1 _,_ 2 _,_ 3 _,_ 4 _,_ 5 }. In general, the sets of pos-
sible nonzero coefficients always correspond to groups, or the unions of groups.
They also defined an implicit penalty on the original variables that yields the
replicated variable approach as its solution, which we now describe.
Denote by _νj_ ∈R _p_ a vector which is zero everywhere except in those
positions corresponding to the members of group _j_ , and letV _j_ ⊆R _p_ be the
subspace of such possible vectors. In terms of the original variables, _X_ =
( _X_ 1 _,_ ··· _,Xp_ ), the coefficient vector is given by the sum _β_ =

###### ∑ J

_j_ =1 _νj_ , and
hence the overlap group lasso solves the problem

```
minimize
νj ∈V jj =1 ,...,J
```
###### 

###### 

###### 

###### 1

###### 2

###### ∥

```
∥ y − X (
```
###### ∑ J

```
j =1
```
```
νj
```
###### )∥∥ 2

```
2 + λ
```
###### ∑ J

```
j =1
```
```
‖ νj ‖ 2
```
###### 

###### 

###### 

###### . (4.26)

This optimization problem can be re-cast in the terms of the original _β_ vari-

(^5) More generally, the replicated-variable approach always yields solutions in which the
sets of zero coefficients are unions of groups, so that the sets of nonzeros must be the
intersections of complements of groups.


###### THE GROUP LASSO 67

ables by defining a suitable penalty function. With

```
ΩV( β ) : = inf
νj ∈V j
β =
```
###### ∑ J

```
j =1 νj
```
###### ∑ J

```
j =1
```
```
‖ νj ‖ 2 , (4.27)
```
it can then be shown (Jacob et al. 2009) that solving problem (4.26) is equiv-
alent to solving

```
minimize
β ∈R p
```
###### {

###### 1

###### 2

```
‖ y − X β ‖^22 + λ ΩV( β )
```
###### }

###### . (4.28)

This equivalence is intuitively obvious, and underscores the mechanism un-
derlying this penalty; the contributions to the coefficient for a variable are
distributed among the groups to which it belongs in a norm-efficient manner.
Figure 4.6 contrasts the group lasso constraint region with that of the
overlap group lasso when there are three variables. There are two rings corre-
sponding to the two groups, with _X_ 2 in both groups.

```
β 1
```
```
β 3
```
```
β 2
```
```
1
```
```
β 1
```
```
β 3
```
```
β 2
```
```
1
```
**Figure 4.6** _The group-lasso ball (left panel) in_ R^3 _, compared to the overlap-group-
lasso bal l (right panel). Depicted are two groups in both. In the left panel the groups
are_ { _X_ 1 _,X_ 2 } _andX_ 3 _; in the right panel the groups are_ { _X_ 1 _,X_ 2 } _and_ { _X_ 2 _,X_ 3 }_.
There are two rings corresponding to the two groups in the right panel. Whenβ_ 2 _is
close to zero, the penalty on the other two variables is much like the lasso. Whenβ_ 2
_is far from zero, the penalty on the other two variables “softens” and resembles the
`_ 2 _penalty._

_Example 4.3. Interactions and hierarchy._ The overlap-group lasso can also be
used to enforce _hierarchy_ when selecting interactions in linear models. What
this means is that interactions are allowed in the model only in the presence
of both of their main effects. Suppose _Z_ 1 represents the _p_ 1 dummy variables
for the _p_ 1 levels of factor _G_ 1 ; likewise _Z_ 2 the _p_ 2 dummy variables for _G_ 2. A
linear model with _Z_ 1 and _Z_ 2 is a _main-effects_ model. Now let _Z_ 1:2= _Z_ 1_? Z_ 2 ,


###### 68 GENERALIZATIONS OF THE LASSO PENALTY

a _p_ 1 × _p_ 2 vector of dummy variables (the vector of all pairwise products).
Lim and Hastie (2014) consider the following formulation for a pair of such
categorical variables^6

```
minimize
μ,α,α ̃
```
###### 

###### 

###### 

###### 1

###### 2

###### ∥ ∥ ∥ ∥ ∥ ∥

```
y − μ 1 − Z 1 α 1 − Z 2 α 2 −[ Z 1 Z 2 Z 1:2]
```
###### 

###### 

```
α ̃ 1
α ̃ 2
α 1:2
```
###### 

###### 

###### ∥ ∥ ∥ ∥ ∥ ∥

```
2
```
```
2
```
```
+ λ
```
###### (

```
‖ α 1 ‖ 2 +‖ α 2 ‖ 2 +
```
###### √

```
p 2 ‖ α ̃ 1 ‖^22 + p 1 ‖ α ̃ 2 ‖^22 +‖ α 1:2‖^22
```
###### )}

###### (4.29)

subject to the constraints

```
∑ p^1
```
```
i =1
```
```
αi 1 = 0 ,
```
```
∑ p^2
```
```
j =1
```
```
αj 2 = 0 ,
```
```
∑ p^1
```
```
i =1
```
```
α ̃ i 1 = 0 ,
```
```
∑ p^2
```
```
j =1
```
```
α ̃ j 2 = 0 , (4.30)
```
```
∑ p^1
```
```
i =1
```
```
αij 1:2= 0 for fixed j,
```
```
∑ p^2
```
```
j =1
```
```
αij 1:2= 0 for fixed i. (4.31)
```
The summation constraints are standard in hierarchical ANOVA formulations.
Notice that the main effect matrices **Z** 1 and **Z** 2 each have two different coeffi-
cient vectors _αj_ and ̃ _αj_ , creating an overlap in the penalties, and their ultimate
coefficient is the sum _θj_ = _αj_ + ̃ _αj_. The

###### √

_p_ 2 ‖ _α_ ̃ 1 ‖^22 + _p_ 1 ‖ _α_ ̃ 2 ‖^22 +‖ _α_ 1:2‖^22 term
results in estimates that satisfy strong hierarchy, because either̂ _α_ ̃ 1 =̂ _α_ ̃ 2 =
_α_ ̂1:2= 0 or _al l_ are nonzero, i.e., interactions are always present with both
main effects. They show that the solution to the above constrained problem
(4.29)–(4.31) is equivalent to the solution to the simpler unconstrained prob-
lem

```
minimize
μ,β
```
###### {

###### 1

###### 2

```
‖ y − μ 1 − Z 1 β 1 − Z 2 β 2 − Z 1:2 β 1:2‖^22
```
```
+ λ (‖ β 1 ‖ 2 +‖ β 2 ‖ 2 +‖ β 1:2‖ 2 )} (4.32)
```
(Exercise 4.14). In other words, a linear model in _Z_ 1:2is the full interaction
model (i.e., interactions with main effects implicitly included). A group lasso
in _Z_ 1 , _Z_ 2 , and _Z_ 1:2will hence result in a hierarchical model; whenever _Z_ 1:2is
in the model, the pair of main effects is implicitly included. In this case the
variables do not strictly overlap, but their subspaces do. A different approach
to the estimation of hierarchical interactions is the _hierNet_ proposal of Bien,
Taylor and Tibshirani (2013). ♦

(^6) This extends naturally to more than two pairs, as well as other loss functions, e.g.,
logistic regression, as well as interactions between factors and quantitative variables.


###### SPARSE ADDITIVE MODELS AND THE GROUP LASSO 69

### 4.4 Sparse Additive Models and the Group Lasso

Suppose we have a zero-mean response variable _Y_ ∈R, and a vector of predic-
tors _X_ ∈R _J_ , and that we are interested in estimating the regression function
_f_ ( _x_ ) =E( _Y_ | _X_ = _x_ ). It is well-known that nonparametric regression suffers
from the curse of dimensionality, so that approximations are essential. Addi-
tive models are one such approximation, and effectively reduce the estimation
problem to that of many one-dimensional problems. When _J_ is very large, this
may not be sufficient; the class of sparse additive models limits these approxi-
mations further, by encouraging many of the components to be zero. Methods
for estimating sparse additive models are closely related to the group lasso.

#### 4.4.1 Additive Models and Backfitting

We begin by introducing some background on the class of additive models,
which are based on approximating the regression function by sums of the form

```
f ( x ) = f ( x 1 ,...,xJ )≈
```
###### ∑ J

```
j =1
```
```
fj ( xj ) , (4.33)
```
```
fj ∈F j, j = 1 ,...,J,
```
where theF _j_ are a fixed set of univariate function classes. Typically, eachF _j_
is assumed to be a subset of _L_^2 (P _j_ ) whereP _j_ is the distribution of covariate
_Xj_ , and equipped with the usual squared _L_^2 (P _j_ ) norm‖ _fj_ ‖^22 : =E[ _fj_^2 ( _Xj_ )].
In the population setting, the best additive approximation to the regression
functionE( _Y_ | _X_ = _x_ ), as measured in the _L_^2 (P) sense, solves the problem

```
minimize
fj ∈F j, j =1 ,...,J
```
###### E

###### [(

###### Y −

###### ∑ J

```
j =1
```
```
fj ( Xj )
```
###### ) 2 ]

###### . (4.34)

The optimal solution ( _f_ ̃ 1 _,...,f_ ̃ _J_ ) is characterized by the _backfitting equations_ ,
namely

```
f ̃ j ( xj ) =E
```
###### [

###### Y −

###### ∑

```
k 6 = j
```
```
f ̃ k ( Xk )| Xj = xj
```
###### ]

```
, for j = 1 ,...,J. (4.35)
```
More compactly, this update can be written in the form _f_ ̃ _j_ =P _j_ ( _Rj_ ), whereP _j_
is the conditional-expectation operator in the _jth_ coordinate, and the quantity
_Rj_ : = _Y_ −

###### ∑

_k_ 6 = _jf_ ̃ _k_ ( _Xk_ ) is the _j
th_ partial residual.
Given data{( _xi,yi_ )} _Ni_ =1, a natural approach is to replace the population
operatorP _j_ with empirical versions, such as scatterplot smoothersS _j_ , and
then solve a data-based version version of the updates (4.35) by coordinate
descent or _backfitting_ (Hastie and Tibshirani 1990). Hence we repeatedly cycle
over the coordinates _j_ = 1 _,...,J_ , and update each function estimate _f_ ̂ _j_ using


###### 70 GENERALIZATIONS OF THE LASSO PENALTY

the smooth of the partial residuals

```
f ̂ j ←S j ( y −
```
###### ∑

```
k 6 = j
```
```
̂ f k ) , j = 1 ,...,J, (4.36)
```
until the fitted functions _f_ ̂ _j_ stabilize. In (4.36)̂ **f** _k_ is the fitted function _f_ ˆ _k_ eval-
uated at the _N_ sample values ( _x_ 1 _k,...,xNk_ ). The operatorS _j_ represents an
algorithm that takes a response vector **_r_** , _smooths_ it against the vector **x** _j_ , and

returns the function _f_ ̂ _j_. AlthoughS _j_ will have its own tuning parameters and
_bel ls and whistles_ , for the moment we regard it as a black-box that estimates
a conditional expectation using data.

#### 4.4.2 Sparse Additive Models and Backfitting

An extension of the basic additive model is the notion of a _sparse additive
model_ , in which we assume that there is a subset _S_ ⊂ { 1 _,_ 2 _,...,J_ }such that
the regression function _f_ ( _x_ ) =E( _Y_ | _X_ = _x_ ) satisfies an approximation of the
form _f_ ( _x_ )≈

###### ∑

_j_ ∈ _Sfj_ ( _xj_ ). Ravikumar, Liu, Lafferty and Wasserman (2009)
proposed a natural extension of the backfitting equations, motivated by a
sparse analog of the population level problem (4.34). For a given sparsity level
_k_ ∈ { 1 _,...,J_ }, the best _k_ -sparse approximation to the regression function is
given by

```
minimize
| S |= k
fj ∈F j,j =1 ,...,J
```
###### E

###### (

###### Y −

###### ∑

```
j ∈ S
```
```
fj ( Xj )
```
###### ) 2

###### . (4.37)

Unfortunately, this criterion is nonconvex and computationally intractable,
due to combinatorial number—namely

###### ( J

```
k
```
###### )

—of possible subsets of size _k_.
Suppose that instead we measure the sparsity of an additive approxima-
tion _f_ =

###### ∑ J

```
j =1 fj via the sum
```
###### ∑ J

√ _j_ =1‖ _fj_ ‖^2 , where we recall that‖ _fj_ ‖^2 =
E[ _fj_^2 ( _Xj_ )] is the _L_^2 (P _j_ ) norm applied to component _j_. For a given regu-

larization parameter _λ_ ≥0, this relaxed notion defines an alternative type of
best sparse approximation, namely one that minimizes the penalized criterion

```
minimize
fj ∈F j, j =1 ,...,J
```
###### 

###### 

###### 

###### E

###### (

###### Y −

###### ∑ J

```
j =1
```
```
fj ( Xj )
```
###### ) 2

```
+ λ
```
###### ∑ J

```
j =1
```
```
‖ fj ‖ 2
```
###### 

###### 

###### 

###### . (4.38)

Since this objective is a convex functional of ( _f_ 1 _,...,fJ_ ), Lagrangian duality
ensures that it has an equivalent representation involving an explicit constraint
on the norm

###### ∑ J

_j_ =1‖ _fj_ ‖^2. See Exercise 4.15.
Ravikumar et al. (2009) show that any optimal solution ( _f_ ̃ 1 _,...,f_ ̃ _J_ ) to the
penalized problem (4.38) is characterized by the _sparse backfitting equations_

```
f ̃ j =
```
###### (

###### 1 −

```
λ
‖P j ( Rj )‖ 2
```
###### )

```
+
```
```
P j ( Rj ) , (4.39)
```

###### SPARSE ADDITIVE MODELS AND THE GROUP LASSO 71

where the residual _Rj_ and the conditional expectation operatorP _j_ were de-
fined in the text after the ordinary backfitting equations (4.35).
In parallel with our earlier development, given data{( _xi,yi_ )} _N_ 1 , these
population-level updates suggest the natural data-driven analog, in which we
replace the population operatorP _j_ with the scatterplot smootherS _j_ , and then
perform the updates

```
f ̃ j =S j ( y −
```
###### ∑

```
k 6 = j
```
```
̂ f k ) , and f ̂ j =
```
###### (

###### 1 −

```
λ
‖ ̃ f ‖ 2
```
###### )

```
+
```
```
f ̃ j, (4.40)
```
for _j_ = 1 _,...,J_ , again iterating until convergence. Figure 4.7 illustrates the
performance of the SPAM updates (4.40) on some air-pollution data. We use
smoothing-splines, with a fixed degree of freedom _df_ = 5 for each coordi-
nate (Hastie and Tibshirani 1990).

```
0 50 150 250
```
```
−1.0 −0.5 0.0
```
```
0.5
```
```
1.0
```
```
rad
```
```
f(rad)
```
```
60 70 80 90
```
```
−1.0 −0.5 0.0
```
```
0.5
```
```
1.0
```
```
temp
```
```
f(temp)
```
```
5 10 15 20
```
```
−1.0 −0.5 0.0
```
```
0.5
```
```
1.0
```
```
wind
```
```
f(wind)
```
```
log(ozone) ~ s(rad) + s(temp) + s(wind)
```
**Figure 4.7** _A sequence of three SPAM models fit to some air-pol lution data. The
response is the log of ozone concentration, and there are three predictors: radiation,
temperature, and wind speed. Smoothing splines were used in the additive model fits,
each withdf_ = 5 _The three curves in each plot correspond toλ_ = 0 _(black curves),
λ_ = 2 _(orange curves), andλ_ = 4 _(red curves). We see that while the shrinkage
leaves the functions of_ temp _relatively untouched, it has a more dramatic effect on_
rad _and_ wind_._

We can make a more direct connection with the grouped lasso if the
smoothing method for variable _Xj_ is a projection on to a set of basis functions.
Consider

```
fj (·) =
```
```
∑ pj
```
```
` =1
```
```
ψj` (·) βj`, (4.41)
```
where the{ _ψj`_ } _p_ 1 _j_ are a family of basis functions in _Xj_ , such as cubic splines
with a collection of knots along the range of _Xj_. Let **Ψ** _j_ be the _N_ × _pj_
matrix of evaluations of the _ψj`_ , and assume that **Ψ** _Tj_ **Ψ** _j_ = **I** _pj_. Then for


###### 72 GENERALIZATIONS OF THE LASSO PENALTY

any coefficient vector _θj_ = ( _βj_ 1 _,...,βjpj_ ) _T_ and corresponding fitted vector
**f** _j_ = **Ψ** _jθj_ , we have‖ **f** _j_ ‖ 2 =‖ _θj_ ‖ 2. In this case it is easy to show that the
updates (4.40) are equivalent to those for a group lasso with predictor matrix
**Ψ** : =

###### [

###### Ψ 1 Ψ 2 ··· Ψ J

###### ]

and a corresponding block vector of coefficients
_θ_ : =

###### [

```
θ 1 θ 2 ··· θJ
```
###### ]

```
(see Exercise 4.16 for more details).
```
#### 4.4.3 Approaches Using Optimization and the Group Lasso

Although the population-level sparse backfitting equations (4.39) do solve an
optimization problem, in general, the empirical versions (4.40) do not, but
rather are motivated by analogy to the population version. We now discuss
the _Component Selection and Smoothing Operator_ or COSSO for short, which
does solve a data-defined optimization problem. The COSSO method (Lin and
Zhang 2003) is a predecessor to the SPAM method, and operates in the world
of reproducing kernel Hilbert spaces, with a special case being the smoothing
spline model.
We begin by recalling the traditional form of an additive smoothing-spline
model, obtained from the optimization of a penalized objective function:

```
minimize
fj ∈H j, j =1 ,...,J
```
###### 

###### 

###### 

###### 1

###### N

###### ∑ N

```
i =1
```
```
( yi −
```
###### ∑ J

```
j =1
```
```
fj ( xij ))^2 + λ
```
###### ∑ J

```
j =1
```
###### 1

```
γj
```
```
‖ fj ‖^2 H j
```
###### 

###### 

###### 

###### . (4.42)

Here‖ _fj_ ‖H _j_ is an appropriate Hilbert-space norm for the _jth_ coordinate.
Typically, the Hilbert spaceH _j_ is chosen to enforce some type of smoothness,
in which context the parameter _λ_ ≥0 corresponds to overall smoothness,
and the parameters _γj_ ≥0 are coordinate specific modifiers. For example, a
roughness norm for a cubic smoothing spline on [0 _,_ 1] is

```
‖ g ‖^2 H: =
```
###### (∫ 1

```
0
```
```
g ( t ) dt
```
###### ) 2

###### +

###### (∫ 1

```
0
```
```
g ′( t ) dt
```
###### ) 2

###### +

###### ∫ 1

```
0
```
```
g ′′( t )^2 dt. (4.43)
```
When this particular Hilbert norm is used in the objective function (4.42),
each component _f_ ̂ _j_ of the optimal solution is a cubic spline with knots at the
unique sample values of _Xj_. The solution can be computed by the backfitting
updates (4.36), where eachS _j_ is a type of cubic spline smoother with penalty
_λ/γj_.
Instead of the classical formulation (4.42), the COSSO method is based on
the objective function

```
minimize
fj ∈H j, j =1 ,...,J
```
###### 

###### 

###### 

###### 1

###### N

###### ∑ N

```
i =1
```
```
( yi −
```
###### ∑ J

```
j =1
```
```
fj ( xij ))^2 + τ
```
###### ∑ J

```
j =1
```
```
‖ fj ‖H j
```
###### 

###### 

###### 

###### . (4.44)

As before, the penalties are norms rather than squared norms, and as such
result in coordinate selection for sufficiently large _τ_. Note that, unlike the


###### SPARSE ADDITIVE MODELS AND THE GROUP LASSO 73

usual penalty for a cubic smoothing spline, the norm in (4.43) includes a
linear component; this ensures that the entire function is zero when the term
is selected out of the model, rather than just its nonlinear component. Despite
the similarity with the additive spline problem (4.38), the structure of the
penalty‖ _fj_ ‖H _j_ means that the solution is not quite as simple as the sparse
backfitting equations (4.40).
Equipped with the norm (4.43), the spaceH _j_ of cubic splines is a particular
instance of a reproducing-kernel Hilbert space (RKHS) on the unit interval
[0 _,_ 1]. Any such space is characterized by a symmetric positive definite kernel
functionR _j_ : [0 _,_ 1]×[0 _,_ 1]→Rwith the so-called reproducing property. In
particular, we are guaranteed for each _x_ ∈[0 _,_ 1], the functionR _j_ (· _,x_ ) is a
member ofH _j_ , and moreover that〈R(· _,x_ ) _, f_ 〉H _j_ = _f_ ( _x_ ) for all _f_ ∈H _j_. Here
〈· _,_ ·〉H _j_ denotes the inner product on the Hilbert spaceH _j_.
Using the reproducing property, it can be shown (Exercise 4.17) that the
_jth_ coordinate function _f_ ̂ _j_ in any optimal COSSO solution can be written in

the form _f_ ̂ _j_ (·) =

###### ∑ N

```
i =1
θ ̂ ij R j (· , xij ), for a suitably chosen weight vector̂ θ j ∈
```
R _N_. Moreover, it can be shown that _f_ ̂ _j_ has Hilbert norm‖ _f_ ̂ _j_ ‖^2 H _j_ =̂ **_θ_**

_T
j_ **R** _j_ ̂ **_θ_** _j_ ,
where **R** _j_ ∈R _N_ × _N_ is a _Gram matrix_ defined by the kernel—in particular,
with entries ( **R** _j_ ) _ii_ ′=R _j_ ( _xij,xi_ ′ _j_ ). Consequently, the COSSO problem (4.44)
can be rewritten as a more general version of the group lasso: in particular, it
is equivalent to the optimization problem

```
minimize
θ j ∈R N, j =1 ,...,J
```
###### 

###### 

###### 

###### 1

###### N

```
‖ y −
```
###### ∑ J

```
j =1
```
```
R j θ j ‖^22 + τ
```
###### ∑ J

```
j =1
```
###### √

```
θ Tj R j θ j
```
###### 

###### 

###### 

###### , (4.45)

as verified in Exercise 4.17.
We are now back in a parametric setting, and the solution is a more general
version of the group lasso (4.14). It can be shown that any optimal solution
(̂ **_θ_** 1 _,...,_ ̂ **_θ_** _J_ ) is specified by the fixed point equations

```
̂ θ j =
```
###### 

###### 

###### 

###### 

###### 

```
0 if
```
###### √

```
r Tj R j r j< τ

 R j +√ τ
̂ θ Tj R j ̂ θ j
```
###### I

###### 

###### 

```
− 1
r j otherwise,
```
###### (4.46)

where **_r_** _j_ : = **y** −

###### ∑

```
k 6 = j R k ̂ θ k corresponds to the j
th partial residual. Although
```
̂ **_θ_** _j_ appears in both sides of the Equation (4.46), it can be solved with a one-

time SVD of **R** _j_ and a simple one-dimensional search; see Exercise 4.7 for the
details.
Lin and Zhang (2003) propose an alternative approach, based on intro-
ducing a vector _γ_ ∈R _J_ of auxiliary variables, and then considering the joint


###### 74 GENERALIZATIONS OF THE LASSO PENALTY

optimization problem

```
minimize
γ ≥ 0
fj ∈H j, j =1 ,...J
```
###### 

###### 

###### 

###### 1

###### N

###### ∑ N

```
i =1
```
```
( yi −
```
###### ∑ J

```
j =1
```
```
fj ( xij ))^2 +
```
###### ∑ J

```
j =1
```
###### 1

```
γj
```
```
‖ fj ‖^2 H j + λ
```
###### ∑ J

```
j =1
```
```
γj
```
###### 

###### 

###### 

###### (4.47)

As shown in Exercise 4.18, if we set _λ_ = _τ_^4 _/_ 4 in the lifted problem (4.47), then
thê **_θ_** component of any optimal solution coincides with an optimal solution
of the original COSSO (4.44).
The reformulation (4.47) is useful, because it naturally leads to a conve-
nient algorithm that alternates between two steps:

- For _γj_ fixed, the problem is a version of our earlier objective (4.42), and
    results in an additive-spline fit.
- With the fitted additive spline fixed, updating the vector of coefficients
    _γ_ = ( _γ_ 1 _,...,γJ_ ) amounts to a nonnegative lasso problem. More precisely,
    for each _j_ = 1 _,...,J_ , define the vector **g** _j_ = **R** _j_ **_θ_** _j/γj_ ∈R _N_ , where **f** _j_ =
    **R** _j_ **_θ_** _j_ is the fitted vector for the _jth_ function using the current value of _γj_.
    Then we update the vector _γ_ = ( _γ_ 1 _,...,γJ_ ) by solving

```
min
γ ≥ 0
```
###### {

###### 1

###### N

```
‖ y − G γ ‖^22 + λ ‖ γ ‖ 1
```
###### }

###### , (4.48)

where **G** is the _N_ × _J_ matrix with columns{ **g** _j,j_ = 1 _,...,J_ }. These updates
are a slightly different form than that given in Lin and Zhang (2003); full
details are mapped out in Exercise 4.19.
When applied with the cubic smoothing-spline norm (4.43), the COSSO is
aimed at setting component functions _fj_ to zero. There are many extensions
to this basic idea. For instance, given a univariate function _g_ , we might instead
represent each univariate function in the form _g_ ( _t_ ) = _α_ 0 + _α_ 1 _t_ + _h_ ( _t_ ), and focus
the penalty on departures from linearity using the norm

```
‖ h ‖^2 H: =
```
###### ∫ 1

```
0
```
```
h ′′( t )^2 dt, (4.49)
```
In this setting, a variant of COSSO can select between nonlinear and linear
forms for each component function.
We discuss penalties for additive models further in Section 4.4.4, in par-
ticular the benefits of using more than one penalty in this context.

#### 4.4.4 Multiple Penalization for Sparse Additive Models

As we have seen thus far, there are multiple ways of enforcing sparsity for a
nonparametric problem. Some methods, such as the SPAM back-fitting pro-


###### SPARSE ADDITIVE MODELS AND THE GROUP LASSO 75

cedure, are based on a combination of the _`_ 1 -norm with the empirical _L_^2 -
norm—namely, the quantity

```
‖ f ‖ N, 1 : =
```
###### ∑ J

```
j =1
```
```
‖ fj ‖ N, (4.50)
```
where‖ _fj_ ‖^2 _N_ : = _N_^1

###### ∑ N

```
i =1 f
2
j ( xij ) is the squared empirical L
```
(^2) -norm for the
univariate function _fj_.^7 Other methods, such as the COSSO method, enforce
sparsity using a combination of the _`_ 1 -norm with the Hilbert norm
‖ _f_ ‖H _,_ 1 : =

###### ∑ J

```
j =1
```
```
‖ fj ‖H j. (4.51)
```
Which of these two different regularizers is to be preferred for enforcing spar-
sity in the nonparametric setting?
Instead of focusing on only one regularizer, one might consider the more
general family of estimators

```
min
fj ∈H j
j =1 ,...,J
```
###### 

###### 

###### 

###### 1

###### N

###### ∑ N

```
i =1
```
```
( yi −
```
###### ∑ J

```
j =1
```
```
fj ( xij ))^2 + λ H
```
###### ∑ J

```
j =1
```
```
‖ fj ‖H j + λN
```
###### ∑ J

```
j =1
```
```
‖ fj ‖ N
```
###### 

###### 

###### 

###### ,

###### (4.52)

parametrized by the pair of nonnegative regularization weights ( _λ_ H _,λN_ ). If we
set _λN_ = 0, then the optimization problem (4.52) reduces to the COSSO esti-
mator, whereas for _λ_ H= 0, we obtain a method closely related to the SPAM
estimator. For any nonnegative ( _λ_ H _,λN_ ), the optimization problem (4.52)
is convex. When the underlying univariate Hilbert spacesH _j_ are described
by a reproducing kernel, then the problem (4.52) can be re-formulated as a
second-order cone program, and is closely related to the group lasso. When-
ever the Hilbert spaceH _j_ is defined by a reproducing kernelR _j_ , then the

_jth_ coordinate function _f_ ̂ _j_ in any optimal solution again takes the form

_f_ ̂ _j_ (·) =∑ _N
i_ =1
_θ_ ̂ _ij_ R _j_ (· _,xij_ ) for a vector of weights _θ_ ̂ _j_ ∈R _N_. This fact allows
us to reduce the solution of the infinite-dimensional problem (4.52) to the
simpler problem

```
min
θ j ∈R N
j =1 ,...,J
```
###### 

###### 

###### 

###### 1

###### N

```
‖ y −
```
###### ∑ J

```
j =1
```
```
R j θ j ‖^22 + λ H
```
###### ∑ J

```
j =1
```
###### √

```
θ Tj R j θ j + λN
```
###### ∑ J

```
j =1
```
###### √

```
θ Tj R^2 j θ j
```
###### 

###### 

###### 

###### .

###### (4.53)

As before, for each coordinate _j_ ∈ { 1 _,...,J_ }, the matrix **R** _j_ ∈R _N_ × _N_ is the
kernel Gram matrix, with entries [ **R** _j_ ] _ii_ ′=R _j_ ( _xij,xi_ ′ _j_ ). See Exercise 4.20 for
more details on this reduction.

(^7) ‖ _fj_ ‖ _N,_ 1 is the same as the‖ **f** _j_ ‖ 2 used in Section 4.4.2; here we are using a more gener-
alizable notation.


###### 76 GENERALIZATIONS OF THE LASSO PENALTY

```
0 200 400 600 800 1000
```
```
−2
```
```
0
```
```
2
```
```
4
```
```
Genome order
```
```
log2 ratio
```
**Figure 4.8** _Fused lasso applied to CGH data. Each spike represents the copy number
of a gene in a tumor sample, relative to that of a control (on the log base-2 scale).
The piecewise-constant green curve is the fused lasso estimate._

The optimization problem (4.53) is an instance of a second-order cone
program, and can be solved efficiently by a variant of the methods previously
described. But why it is useful to impose two forms of regularization? As
shown by Raskutti, Wainwright and Yu (2012), the combination of these two
regularizers yields an estimator that is minimax-optimal, in that its conver-
gence rate—as a function of sample size, problem dimension, and sparsity—is
the fastest possible.

### 4.5 The Fused Lasso

Consider the gray spikes in Figure 4.8, the results of a _comparative genomic
hybridization (CGH)_ experiment. Each of these represents the (log base 2) rel-
ative copy number of a gene in a cancer sample relative to a control sample;
these copy numbers are plotted against the chromosome order of the gene.
These data are very noisy, so that some kind of smoothing is essential. Bio-
logical considerations dictate that it is typically segments of a chromosome—
rather than individual genes—that are replicated, Consequently, we might ex-
pect that the underlying vector of true copy numbers to be piecewise-constant
over contiguous regions of a chromosome. The _fused lasso signal approximator_
exploits such structure within a signal, and is the solution of the following
optimization problem

```
minimize
θ ∈R N
```
###### {

###### 1

###### 2

###### ∑ N

```
i =1
```
```
( yi − θi )^2 + λ 1
```
###### ∑ N

```
i =1
```
```
| θi |+ λ 2
```
###### ∑ N

```
i =2
```
```
| θi − θi − 1 |
```
###### }

###### . (4.54)


###### THE FUSED LASSO 77

The first penalty is the familiar _`_ 1 -norm, and serves to shrink the _θi_ toward
zero. Since the observation index _i_ orders the data (in this case along the
chromosome), the second penalty encourages neighboring coefficients _θi_ to be
similar, and will cause some to be identical (also known as _total-variation de-
noising_ ). Notice that (4.54) does not include a constant term _θ_ 0 ; the coefficient
_θi_ represents the response _yi_ directly, and for these kinds of problems zero is
a natural origin. (See Exercise 4.21 for further exploration of this intercept
issue.) The green curve in Figure 4.8 is fit to these data using the fused lasso.
There are more general forms of the fused lasso; we mention two here.

- We can generalize the notion of neighbors from a linear ordering to more
    general neighborhoods, for examples adjacent pixels in an image. This leads
    to a penalty of the form
       _λ_ 2

###### ∑

```
i ∼ i ′
```
```
| θi − θi ′| , (4.55)
```
```
where we sum over all neighboring pairs i ∼ i ′.
```
- In (4.54) every observation is associated with a coefficient. More generally
    we can solve

```
minimize
( β 0 ,β )∈R×R p
```
###### 

###### 

###### 

###### 1

###### 2

###### ∑ N

```
i =1
```
```
( yi − β 0 −
```
```
∑ p
```
```
j =1
```
```
xijβj )^2
```
```
+ λ 1
```
```
∑ p
```
```
j =1
```
```
| βj |+ λ 2
```
```
∑ p
```
```
j =2
```
```
| βj − βj − 1 |
```
###### 

###### 

###### 

###### . (4.56)

```
Here the covariates xij and their coefficients βj are indexed along some
sequence j for which neighborhood clumping makes sense; (4.54) is clearly
a special case.
```
#### 4.5.1 Fitting the Fused Lasso

Problem (4.54) and its relatives are all convex optimization problems, and
so all have well-defined solutions. As in other problems of this kind, here we
seek efficient _path algorithms_ for finding solutions for a range of values for
the tuning parameters. Although coordinate descent is one of our favorite
algorithms for lasso-like problems, it need not work for the fused lasso (4.54),
because the difference penalty is not a separable function of the coordinates.
Consequently, coordinate descent can become “stuck” at a nonoptimal point as
illustrated in Figure 5.8 on page 111. This separability condition is discussed
in more detail in Section 5.4.
We begin by considering the structure of the optimal solution̂ **_θ_** ( _λ_ 1 _,λ_ 2 ) of
the fused lasso problem (4.54) as a function of the two regularization param-
eters _λ_ 1 and _λ_ 2. The following result due to Friedman et al. (2007) provides
some useful insight into the behavior of this optimum:


###### 78 GENERALIZATIONS OF THE LASSO PENALTY

_Lemma 4.1._ For any _λ_ ′ 1 _> λ_ 1 , we have

```
θ ̂ i ( λ ′ 1 ,λ 2 ) =S λ ′
1 − λ^1
```
###### (̂

```
θi ( λ 1 ,λ 2 )
```
###### )

```
for each i = 1 ,...,N , (4.57)
```
whereSis the soft-thresholding operatorS _λ_

###### (

```
z
```
###### )

```
: = sign( z )(| z |− λ )+.
```
One important special case of Lemma 4.1 is the equality

```
̂ θi ( λ 1 ,λ 2 ) =S λ 1
```
###### (

```
̂ θi (0 ,λ 2 )
```
###### )

```
for each i = 1 ,...,N. (4.58)
```
Consequently, if we solve the fused lasso with _λ_ 1 = 0, all other solutions
can be obtained immediately by soft thresholding. This useful reduction also
applies to the more general versions of the fused lasso (4.55). On the basis of
Lemma 4.1, it suffices to focus our attention on solving the problem^8

```
minimize
θ ∈R N
```
###### {

###### 1

###### 2

###### ∑ N

```
i =1
```
```
( yi − θi )^2 + λ
```
###### ∑ N

```
i =2
```
```
| θi − θi − 1 |
```
###### }

###### . (4.59)

We consider several approaches to solving (4.59).

##### 4.5.1.1 Reparametrization

One simple approach is to reparametrize problem (4.59) so that the penalty
is additive. In detail, suppose that we consider a linear transformation of the
form **_γ_** = **M** **_θ_** for an invertible matrix **M** ∈R _N_ × _N_ such that

```
γ 1 = θ 1 , and γi = θi − θi − 1 for i = 2 ,...,N. (4.60)
```
In these transformed coordinates, the problem (4.59) is equivalent to the or-
dinary lasso problem

```
minimize
γ ∈R N
```
###### {

###### 1

###### 2

```
‖ y − X γ ‖^2 + λ ‖ γ ‖ 1
```
###### }

```
, with X = M −^1. (4.61)
```
In principle, the reparametrize problem (4.61) can be solved using any effi-
cient algorithm for the lasso, including coordinate descent, projected gradient
descent or the LARS procedure. However, **X** is a lower-triangular matrix with
all nonzero entries equal to 1, and hence has large correlations among the
“variables.” Neither coordinate-descent nor LARS performs well under these
circumstances (see Exercise 4.22). So despite the fact that reparametrization
appears to solve the problem, it is not recommended, and more efficient algo-
rithms exist, as we now discuss.

(^8) Here we have adopted the notation _λ_ (as opposed to _λ_ 2 ) for the regularization param-
eter, since we now have only one penalty.


###### THE FUSED LASSO 79

##### 4.5.1.2 A Path Algorithm

The one-dimensional fused lasso (4.59) has an interesting property, namely
that as the regularization parameter _λ_ increases, pieces of the optimal solution
can only be joined together, not split apart. More precisely, letting **_θ_** ̂( _λ_ ) denote
the optimal solution to the convex program (4.59) as a function of _λ_ , we have:

_Lemma 4.2. Monotone fusion._ Suppose that for some value of _λ_ and some
index _i_ ∈{ 1 _,...,N_ − 1 }, the optimal solution satisfieŝ _θi_ ( _λ_ ) =̂ _θi_ +1( _λ_ ). Then

for all _λ_ ′ _> λ_ , we also have _θ_ ̂ _i_ ( _λ_ ′) =̂ _θi_ +1( _λ_ ′).

Friedman et al. (2007) observed that this fact greatly simplifies the con-
struction of the fused lasso solution path. One starts with _λ_ = 0, for which
there are no fused groups, and then computes the smallest value of _λ_ that
causes a fused group to form. The parameter estimates for this group are then
fused together (i.e., constrained to be equal) for the remainder of the path.
Along the way, a simple formula is available for the estimate within each fused
group, so that the resulting procedure is quite fast, requiringO( _N_ ) operations.
However, we note that the monotone-fusion property in Lemma 4.2 is special
to the one-dimensional fused lasso (4.59). For example, it does not hold for the
general fused lasso (4.56) with a model matrix **X** , nor for the two-dimensional
fused lasso (4.55). See Friedman et al. (2007) and Hoefling (2010) for more
details on this approach.

##### 4.5.1.3 A Dual Path Algorithm

Tibshirani 2 and Taylor (2011) take a different approach, and develop path
algorithms for the _convex duals_ of fused lasso problems. Here we illustrate
their approach on the problem (4.59), but note that their methodology applies
to the general problem (4.56) as well.
We begin by observing that problem (4.59) can be written in an equivalent
_lifted_ form

```
minimize
( θ , z )∈R N ×R N −^1
```
###### {

###### 1

###### 2

```
‖ y − θ ‖^22 + λ ‖ z ‖ 2
```
###### }

```
subject to D θ = z , (4.62)
```
where we have introduced a vector **z** ∈R _N_ −^1 of auxiliary variables, and **D**
is a ( _N_ −1)× _N_ matrix of first differences. Now consider the Lagrangian
associated with the lifted problem, namely

```
L ( θ , z ; u ) : =
```
###### 1

###### 2

```
‖ y − θ ‖^22 + λ ‖ z ‖+ u T ( D θ − z ) , (4.63)
```
where **u** ∈R _N_ −^1 is a vector of Lagrange multipliers. A straightforward com-
putation shows that the Lagrangian dual functionQtakes form

```
Q( u ) : = inf
( θ , z )∈R N ×R N −^1
```
```
L ( θ , z ; u ) =
```
###### {

```
−^12 ‖ y − D T u ‖^2 if‖ u ‖∞≤ λ,
−∞ otherwise.
(4.64)
```

###### 80 GENERALIZATIONS OF THE LASSO PENALTY

The Lagrangian dual problem is to maximizeQ( **u** ), and given an optimal
solution **u** ̂=̂ **u** ( _λ_ ), we can recover an optimal solution **_θ_** ̂=̂ **_θ_** ( _λ_ ) to the original
problem by settinĝ **_θ_** = **y** − **D** _T_ ̂ **u**. See Exercise 4.23 for the details of these
duality calculations.

```
0.0 0.5 1.0 1.5
```
```
−1.5
```
```
−1.0
```
```
−0.5
```
```
0.0
```
```
0.5
```
```
1.0
```
```
1.5
```
```
λ
```
```
Dual Coordinates
```
```
0.0 0.5 1.0 1.5
```
```
−1.0 −0.5
```
```
0.0
```
```
0.5
```
```
1.0
```
```
1.5
```
```
λ
```
```
Primal Coordinates
```
**Figure 4.9** _The dual path algorithm in action on a smal l example. The left panel
shows the progress of_ ̂ **u** ( _λ_ ) _, while the right panel shows_ ̂ **_θ_** ( _λ_ )_. We see that in the
dual coordinates, as a parameter hits the boundary, an_ unfusing _occurs in the primal
coordinates._

When the regularization parameter _λ_ is sufficiently large, the dual max-
imization, or equivalently the problem of minimizing−Q( **u** ), reduces to an
unrestricted linear regression problem, with optimal solution

```
u ∗: = ( DD T )−^1 Dy. (4.65)
```
The restrictions kick in when _λ_ decreases to the critical level ‖ **u** ∗‖∞.
Tibshirani 2 and Taylor (2011) show that as we decrease _λ_ , once elements
_u_ ̂ _j_ ( _λ_ ) of the optimal solution hit the bound _λ_ , then they are guaranteed to
never leave the bound. This property leads to a very straightforward path
algorithm, similar in spirit to LARS in Section 5.6; see Figure 4.9 for an illus-
tration of the dual path algorithm in action. Exercise 4.23 explores some of
the details.

##### 4.5.1.4 Dynamic Programming for the Fused Lasso

Dynamic programming is a computational method for solving difficult prob-
lems by breaking them down into simpler subproblems. In the case of the
one-dimensional fused lasso, the linear ordering of the variables means that


###### THE FUSED LASSO 81

fixing any variable breaks down the problem into two separate subproblems
to the left and right of the fixed variable. In the “forward pass,” we move from
left to right, fixing one variable and solving for the variable to its left, as a
function of this fixed variable. When we reach the right end, a backward pass
then gives the complete solution.
Johnson (2013) proposed this dynamic programming approach to the fused
lasso. In more detail, we begin by separating off terms in (4.59) that depend
on _θ_ 1 , and rewrite the objective function (4.59) in the form

```
f ( θ ) =
```
###### 1

###### 2

```
( y 1 − θ 1 )^2 + λ | θ 2 − θ 1 |
︸ ︷︷ ︸
g ( θ 1 ,θ 2 )
```
###### +

###### {

###### 1

###### 2

###### ∑ N

```
i =2
```
```
( yi − θi )^2 + λ
```
###### ∑ N

```
i =3
```
```
| θi − θi − 1 |
```
###### }

###### (4.66)

This decomposition shows the subproblem to be solved in the first step of
the forward pass: we compute _θ_ ̂ 1 ( _θ_ 2 ) : = arg min _θ_ 1 ∈R _g_ ( _θ_ 1 _,θ_ 2 ), We have thus
eliminated the first variable, and can now focus on the reduced objective
function _f_ 2 :R _N_ −^1 →Rgiven by

```
f 2 ( θ 2 ,...θN ) = f (̂ θ 1 ( θ 2 ) ,θ 2 ,...θN ). (4.67)
```
We can then iterate the procedure, maximizing over _θ_ 2 to obtain _θ_ ̂ 2 ( _θ_ 3 ), and so
on until we obtain _θ_ ̂ _N_. Then we back-substitute to obtain _θ_ ̂ _N_ − 1 =̂ _θN_ − 1 ( _θ_ ̂ _N_ ),

and so on for the sequenceŝ _θN_ − 2 _,...,θ_ ̂ 2 _,_ ̂ _θ_ 1.
If each parameter _θi_ can take only one of _K_ distinct values, then each of the
minimizerŝ _θj_ ( _θj_ +1) can be easily computed and stored as a _K_ × _K_ matrix.
In the continuous case, the functions to be minimized are piecewise linear
and quadratic, and care must be taken to compute and store the relevant
information in an efficient manner; see Johnson (2013) for the details. The
resulting algorithm is the fastest that we are aware of, requiring justO( _N_ )
operations, and considerably faster than the path algorithm described above.
Interestingly, if we change the _`_ 1 difference penalty to an _`_ 0 , this approach
can still be applied, despite the fact that the problem is no longer convex.
Exercise 4.24 asks the reader to implement the discrete case.

#### 4.5.2 Trend Filtering

The first-order absolute difference penalty in the fused lasso can be generalized
to use a higher-order difference, leading to the problem

```
minimize
θ ∈R N
```
###### {

###### 1

###### 2

###### ∑ N

```
i =1
```
```
( yi − θi )^2 + λ ·‖ D ( k +1) θ ‖ 1
```
###### }

###### . (4.68)

This is known as _trend filtering_. Here **D** ( _k_ +1) is a matrix of dimension
( _N_ − _k_ −1)× _N_ that computes discrete differences of order _k_ + 1. The fused


###### 82 GENERALIZATIONS OF THE LASSO PENALTY

lasso uses first-order differences ( _k_ = 0), while higher-order differences en-
courage higher-order smoothness. In general, trend filtering of order _k_ results
in solutions that are piecewise polynomials of degree _k_. Linear trend filter-
ing ( _k_ = 1) is especially attractive, leading to piecewise-linear solutions. The

```
60 70 80 90
```
```
20
```
```
40
```
```
60
```
```
80
```
```
100
```
```
Temperature
```
```
Ozone
```
```
Smoothing Spline
Trend Filter
```
**Figure 4.10** _A piecewise-linear function fit to some air-pol lution data using trend
filtering. For comparison, a smoothing spline with the same degrees of freedom is
included._

knots in the solution need not be specified but fall out of the convex optimiza-
tion procedure. Kim, Koh, Boyd and Gorinevsky (2009) propose an efficient
interior point algorithm for this problem. Tibshirani 2 (2014) proves that the
trend filtering estimate adapts to the local level of smoothness much better
than smoothing splines, and displays a surprising similarity to locally-adaptive
regression splines. Further, he shows that the estimate converges to the true
underlying function at the minimax rate for functions whose _kth_ derivative is of
bounded variation (a property not shared by linear estimators such as smooth-
ing splines). Furthermore, Tibshirani 2 and Taylor (2011) show that a solution
with _m_ knots has estimated degrees of freedom given by df = _m_ + _k_ + 1.^9
Figure 4.10 shows a piecewise-linear function fit by trend filtering to some
air-pollution data. As a comparison, we include the fit of a smoothing spline,
with the same effective df = 4. While the fits are similar, it appears that trend
filtering has found natural changepoints in the data.
In (4.68) it is assumed that the observations occur at evenly spaced posi-
tions. The penalty can be modified (Tibshirani 2 2014) to accommodate arbi-
trary (ordered) positions _xi_ as follows:

```
minimize
θ ∈R N
```
###### {

###### 1

###### 2

###### ∑ N

```
i =1
```
```
( yi − θi )^2 + λ ·
```
###### N ∑− 2

```
i =1
```
###### ∣

###### ∣

###### ∣

###### ∣

```
θi +2− θi +1
xi +2− xi +1
```
###### −

```
θi +1− θi
xi +1− xi
```
###### ∣

###### ∣

###### ∣

###### ∣

###### }

###### (4.69)

(^9) This is an unbiased estimate of the degrees of freedom; see Section 2.5.


###### THE FUSED LASSO 83

```
1850 1900 1950 2000
```
```
−0.6
```
```
−0.4
```
```
−0.2
```
```
0.0
```
```
0.2
```
```
0.4
```
```
Year
```
```
Temperature Anomalies
```
```
Near Isotonic
Isotonic
```
**Figure 4.11** _Near isotonic fit to global-warming data, showing annual temperature
anomalies. The value ofλwas chosen by cross-validation, and the fit appears to
support the evidence of nonmonotone behavior seen in the data._

It compares the empirical slopes for adjacent pairs, and encourages them to
be the same. This is the penalty that was used in Figure 4.10, since the
Temperaturevalues are not uniformly spaced.

#### 4.5.3 Nearly Isotonic Regression

Tibshirani 2 , Hoefling and Tibshirani (2011) suggest a simple modification of
the one-dimensional fused lasso that encourages the solution to be monotone.
It is based on a relaxation of isotonic regression. In the classical form of iso-
tonic regression, we estimate **_θ_** ∈R _N_ by solving the constrained minimization
problem

```
minimize
θ ∈R N
```
###### { N

###### ∑

```
i =1
```
```
( yi − θi )^2
```
###### }

```
subject to θ 1 ≤ θ 2 ≤ ... ≤ θN. (4.70)
```
The resulting solution gives the best monotone (nondecreasing) fit to the
data. Monotone nonincreasing solutions can be obtaining by first flipping the
signs of the data. There is a unique solution to problem (4.70), and it can be
obtained using the _pool adjacent violators algorithm_ (Barlow, Bartholomew,
Bremner and Brunk 1972), or PAVA for short.
Nearly isotonic regression is a natural relaxation, in which we introduce a
regularization parameter _λ_ ≥0, and instead solve the penalized problem

```
minimize
θ ∈R N
```
###### {

###### 1

###### 2

###### ∑ N

```
i =1
```
```
( yi − θi )^2 + λ
```
###### N ∑− 1

```
i =1
```
```
( θi − θi +1)+
```
###### }

###### . (4.71)

The penalty term penalizes adjacent pairs that violate the monotonicity prop-
erty, that is, having _θi> θi_ +1. When _λ_ = 0, the solution interpolates the data,


###### 84 GENERALIZATIONS OF THE LASSO PENALTY

and letting _λ_ → ∞, we recover the solution to the classical isotonic regres-
sion problem (4.70). Intermediate value of _λ_ yield nonmonotone solutions that
trade off monotonicity with goodness-of-fit; this trade-off allows one to assess
the validity of the monotonicity assumption for the given data sequence. Fig-
ure 4.11 illustrates the method on data on annual temperature anomalies from
1856 to 1999, relative to the 1961–1990 mean. The solution to the nearly iso-
tonic problem (4.71) can be obtained from a simple modification of the path
algorithm discussed previously, a procedure that is analogous to the PAVA
algorithm for problem (4.70); see Tibshirani 2 et al. (2011) for details.

### 4.6 Nonconvex Penalties

```
β 1
```
```
β 3
```
```
β 2
```
```
1
```
```
β 1
β 2
```
```
β 3
```
```
1
```
```
β 3
```
```
β 1
β 2
```
```
1
```
**Figure 4.12** _The`qunit balls in_ R^3 _forq_ = 2 _(left),q_ = 1 _(middle), andq_ = 0_._ 8
_(right). Forq <_ 1 _the constraint regions are nonconvex. Smal lerqwil l correspond
to fewer nonzero coefficients, and less shrinkage. The nonconvexity leads to combi-
natorial ly hard optimization problems._

By moving from an _`_ 2 penalty to _`_ 1 , we have seen that for the same
_effective df_ the lasso selects a subset of variables to have nonzero coefficients,
and shrinks their coefficients less. When _p_ is large and the number of relevant
variables is small, this may not be enough; in order to reduce the set of chosen
variables sufficiently, lasso may end up over-shrinking the retained variables.
For this reason there has been interest in nonconvex penalties.
The natural choice might be the _`q_ penalty, for 0≤ _q_ ≤1, with the
limiting _`_ 0 corresponding to best-subset selection. Figure 4.12 compares the
_`q_ unit balls for _q_ ∈ { 2 _,_ 1 _,_ 0_._ 8 }. The spiky nonconvex nature of the ball on
the right implies edges and coordinate axes will be favored in selection under
such constraints. Unfortunately, along with nonconvexity comes combinatorial
computational complexity; even the simplest case of _`_ 0 can be solved exactly
only for _p_ ≈40 or less. For this and related statistical reasons alternative
nonconvex penalties have been proposed. These include the SCAD (Fan and
Li 2001, _smoothly clipped absolute deviation_ ) and MC+ (Zhang 2010, _mini-
max concave_ ) penalties. Figure 4.13 shows four members of the MC+ penalty
family inR^1 , indexed by the nonconvexity parameter _γ_ ∈(1 _,_ ∞); this family


###### NONCONVEX PENALTIES 85

```
−4 −2 0 2 4
```
```
0
```
```
1
```
```
2
```
```
3
```
```
4
```
```
MC+ Penalty
```
```
0 1 2 3 4
```
```
0
```
```
1
```
```
2
```
```
3
```
```
4
```
```
MC+ Threshold Function
```
```
β β
```
```
γ=∞lasso
γ= 3
γ= 1. 7
γ= 1+subset
```
**Figure 4.13** _Left: The MC+ family of nonconvex sparsity penalties, indexed by
a sparsity parameterγ_ ∈(1 _,_ ∞)_. Right: piecewise-linear and continuous threshold
functions associated with MC+ (only the north-east quadrant is shown), making this
penalty family suitable for coordinate descent algorithms._

bridges the gap between lasso ( _γ_ =∞) and best-subset ( _γ_ = 1+). The penalty
functions are piecewise quadratic (see Exercise 4.25), and importantly the cor-
responding threshold functions are piecewise linear and continuous. In detail,
for squared-error loss we pose the (nonconvex) optimization problem

```
minimize
β ∈R p
```
###### 

###### 

###### 

###### 1

###### 2

```
‖ y − X β ‖^22 +
```
```
∑ p
```
```
j =1
```
```
Pλ,γ ( βj )
```
###### 

###### 

###### 

###### , (4.72)

with the MC+ penalty on each coordinate defined by

```
Pλ,γ ( θ ) : =
```
```
∫| θ |
```
```
0
```
###### (

###### 1 −

```
x
λγ
```
###### )

```
+
```
```
dx. (4.73)
```
With coordinate descent in mind, we consider solving a one-dimensional ver-
sion of (4.72) (in standardized form)

```
minimize
β ∈R^1
```
###### {

###### 1

###### 2

```
( β − β ̃)^2 + λ
```
```
∫| β |
```
```
0
```
###### (

###### 1 −

```
x
λγ
```
###### )

```
+
```
```
dx
```
###### }

###### . (4.74)

The solution is unique^10 for _γ >_ 1 and is given by

```
S λ,γ ( β ̃) =
```
###### 

###### 

###### 

```
0 if| β ̃|≤ λ
sign( β ̃)
```
###### (

```
| β ̃|− λ
1 − γ^1
```
###### )

```
if λ < | β ̃|≤ λγ
β ̃ if| β ̃| > λγ
```
###### (4.75)

(^10) Despite the nonconvexity, there is a unique solution inR (^1) ; this is not necessarily the
case for the _p_ -dimensional problem (4.72).


###### 86 GENERALIZATIONS OF THE LASSO PENALTY

The right panel in Figure 4.13 shows examples of (4.75). Large values of _β_ ̃are
left alone, small values are set to zero, and intermediate values are shrunk. As _γ_
gets smaller, the intermediate zone gets narrower, until eventually it becomes
the hard-thresholding function of best subset (orange curve in figure). By
contrast, the threshold functions for the _`q_ family ( _q <_ 1) are discontinuous
in _β_ ̃.
Mazumder, Friedman and Hastie (2011) exploit the continuity ofS _λ,γ_ (in
both _λ_ and _γ_ ) in a coordinate-descent scheme for fitting solution paths for
the entire MC+ family. Starting with the lasso solution, their Rpackage
sparsenet(Mazumder, Hastie and Friedman 2012) moves down a sequence
in _γ_ toward sparser models, and for each fits a regularization path in _λ_. Al-
though it cannot claim to solve the nonconvex problem (4.72), this approach
is both very fast and appears to find good solutions.
Zou (2006) proposed the _adaptive lasso_ as a means for fitting models
sparser than lasso. Using a pilot estimate _β_ ̃, the adaptive lasso solves

```
minimize
β ∈R p
```
###### 

###### 

###### 

###### 1

###### 2

```
‖ y − X β ‖^22 + λ
```
```
∑ p
```
```
j =1
```
```
wj | βj |
```
###### 

###### 

###### 

###### , (4.76)

where _wj_ = 1 _/_ | _β_ ̃ _j_ | _ν_. The adaptive lasso penalty can be seen as an approxima-
tion to the _`q_ penalties with _q_ = 1− _ν_. One advantage of the adaptive lasso
is that given the pilot estimates, the criterion (4.76) is convex in _β_. Further-
more, if the pilot estimates are

###### √

_N_ consistent, Zou (2006) showed that the
method recovers the true model under more general conditions than does the
lasso. If _p < N_ one can use the least-squares solutions as the pilot estimates.
When _p_ ≥ _N_ , the least-squares estimates are not defined, but the univariate
regression coefficients can be used for the pilot estimates and result in good
recovery properties under certain conditions (Huang, Ma and Zhang 2008).
Exercise 4.26 explores the close connections between the adaptive lasso and
the nonnegative garrote of Section 2.8.
We end this section by mentioning a practical alternative to nonconvex op-
timization for sparse model-path building. Forward-stepwise methods (Hastie
et al. 2009, Chapter 3) are very efficient, and are hard to beat in terms of find-
ing good, sparse subsets of variables. Forward stepwise is a greedy algorithm—
at each step fixing the identity of the terms already in the model, and finding
the best variable to include among those remaining. The theoretical properties
of forward-stepwise model paths are less well understood, partly because of
the algorithmic definition of the procedure, as opposed to being a solution to
an optimization problem.

### Bibliographic Notes

The elastic net was proposed by Zou and Hastie (2005), who also distinguished
between the naive version, similar to the one presented here, and a debiased


###### BIBLIOGRAPHIC NOTES 87

version that attempts to undo the biasing effect of the ridge shrinkage. Fried-
man et al. (2015) build a system of coordinate-descent algorithms for fitting
elastic-net penalized generalized linear models, implemented in theRpackage
glmnet. Yuan and Lin (2006) introduced the group lasso, and their paper has
stimulated much research. Meier et al. (2008) extended the group lasso to logis-
tic regression problems, whereas Zhao, Rocha and Yu (2009) describe a more
general family of structured penalties, including the group lasso as a special
case. A line of theoretical work has sought to understand when the group lasso
estimator has lower statistical error than the ordinary lasso. Huang and Zhang
(2010) and Lounici, Pontil, Tsybakov and van de Geer (2009) establish error
bounds for the group lasso, which show how it outperforms the ordinary lasso
in certain settings. Negahban, Ravikumar, Wainwright and Yu (2012) provide
a general framework for analysis of _M_ -estimators, including the group lasso
as a particular case as well as more general structured penalties. Obozinski,
Wainwright and Jordan (2011) characterize multivariate regression problems
for which the group lasso does (or does not) yield better variable selection
performance than the ordinary lasso.
The overlap group lasso was introduced by Jacob et al. (2009), and the
sparse group lasso by Puig, Wiesel and Hero (2009) and Simon, Friedman,
Hastie and Tibshirani (2013). Various algorithms have been developed for
solving the group and overlap group lassos, as well as a variety of structured
generalizations; see Bach, Jenatton, Mairal and Obozinski (2012) for a good
review.
Additive models were proposed by Stone (1985) as a means of side-stepping
the curse of dimensionality in nonparametric regression; see Hastie and Tib-
shirani (1990) for further background on (generalized) additive models. The
COSSO model was developed by Lin and Zhang (2003) in the context of
reproducing kernel Hilbert spaces, and ANOVA spline decompositions. The
books by Wahba (1990) and Gu (2002) provide further background on splines
and RKHSs. Ravikumar et al. (2009) followed up with the SPAM model,
which is somewhat simpler and more general, and established certain forms
of high-dimensional consistency for their estimator. Meier, van de Geer and
B ̈uhlmann (2009) studied a related family of estimators, based on explicit
penalization with the empirical _L_^2 -norm, corresponding to the doubly penal-
ized estimator with _λ_ H= 0. Koltchinski and Yuan (2008, 2010) analyzed the
COSSO estimator, as well as the doubly penalized estimator (4.52). Raskutti
et al. (2009, 2012) derived minimax bounds for sparse additive models, and
also show that the doubly penalized estimator (4.52) can achieve these bounds
for various RKHS families, including splines as a special case.
The fused lasso was introduced by Tibshirani, Saunders, Rosset, Zhu and
Knight (2005). Various algorithms have been proposed for versions of the
fused lasso, including the methods of Hoefling (2010), Johnson (2013), and
Tibshirani 2 and Taylor (2011).
The MC+ threshold function was first described in Gao and Bruce (1997)
in the context of wavelet shrinkage. There has been a lot of activity in non-


###### 88 GENERALIZATIONS OF THE LASSO PENALTY

convex penalties for sparse modeling. Zou and Li (2008) develop local linear
approximation algorithms for tackling the nonconvex optimization problems.
These and other approaches are discussed in Mazumder et al. (2011).

### Exercises

Ex. 4.1 Suppose we have two identical variables _X_ 1 = _X_ 2 , and a response
_Y_ , and we perform a ridge regression (see (2.7) in Section 2.2) with penalty
_λ >_ 0. Characterize the coefficient estimates _β_ ̂ _j_ ( _λ_ ).

Ex. 4.2 Consider a slightly noisy version of the identical twins example in
the beginning of Section 4.2, where the two variables are strongly positively
correlated. Draw a schematic of the contours of the loss function and the
penalty function, and demonstrate why the elastic net encourages coefficient
sharing more than does the lasso.

Ex. 4.3 Consider the elastic-net problem (4.2).

```
(a) Show how to simplify the calculation of β ̂ 0 by centering each of the pre-
dictors, leading to β ̂ 0 = ̄ y (for all values of λ ). How does one convert back
to the estimate of β ̂ 0 for uncentered predictors?
(b) Verify the soft-thesholding expression (4.4) for the update of β ̂ j by coor-
dinate descent.
```
Ex. 4.4 Consider the solution to the group lasso problem (4.5) when some of
the variables are factors. Show that when there is an intercept in the model,
the optimal coefficients for each factor sum to zero.

Ex. 4.5 This exercise investigates the penalty modifier for the group lasso.
Consider the _entry_ criterion‖ **Z** _Tj_ **_r_** _j_ ‖ 2 _< λ_ for the group lasso (Section 4.3.1).
Suppose **_r_** _j_ is i.i.d noise with mean **0** and covariance _σ_^2 **I** —a null situation.
Show that
E‖ **Z** _Tj_ **_r_** _j_ ‖^22 = _σ_^2 ‖ **Z** ‖^2 _F._ (4.77)

Hence argue that to make comparisons fair among the penalty terms in the
group lasso, one should replace _λ_

###### ∑ J

```
j =1‖ θj ‖^2 in Equation (4.5) with
```
```
λ
```
###### ∑ J

```
j =1
```
```
τj ‖ θj ‖ 2 , (4.78)
```
where _τj_ =‖ **Z** _j_ ‖ _F_. Show that when **Z** _j_ is orthonormal, this results in _τj_ =
√
_pj_.

Ex. 4.6 Show that under the orthonormality condition **Z** _Tj_ **Z** _j_ = **I** , the up-
date (4.15) solves the fixed point Equation (4.13).


###### EXERCISES 89

Ex. 4.7 Consider the block-wise solution vector (4.14) for the group lasso. If
‖ _θ_ ˆ _j_ ‖is known, we can write the solution in closed form. Let **Z** _j_ = **UDV** _T_
be the singular value decomposition of **Z** _j_. Let _r_ ∗= **U** _T_ **_r_** _j_ ∈R _pj_. Show that
_φ_ =‖ _θ_ ˆ _j_ ‖solves
∑ _pj_

```
` =1
```
```
r ∗ `^2 d^2 `
( d^2 `φ + λ )^2
```
###### = 1 , (4.79)

where _d`_ is the _`th_ diagonal element of **D**. Show how to use a golden search
strategy to solve for _φ_. Write an R function to implement this algorithm, along
with the golden search.

Ex. 4.8 Discuss the impact of the normalization **Z** _Tj_ **Z** _j_ = **I** in the context of a
matrix of dummy variables representing a factor with _pj_ levels. Does the use
of contrasts rather than dummy variables alleviate the situation?

Ex. 4.9 Using the approach outlined in Section 5.3.3, derive the generalized
gradient update (4.16a) for the group lasso. Write a R function to implement
this algorithm (for a single group). Include an option to implement Nesterov
acceleration.

Ex. 4.10 Using the approach outlined in Section 5.3.3, derive the generalized
gradient update (4.23) for the sparse group lasso.

Ex. 4.11 Run a series of examples of increasing dimension to compare the
performance of your algorithms in Exercises 4.7 and 4.9. Make sure they are
producing the same solutions. Compare their computational speed—for in-
stance, the commandsystem.time()can be used in R.

Ex. 4.12 Consider the condition (4.19) for _θ_ ˆ _j_ to be zero for the sparse group
lasso. Define

```
J ( t ) =
```
###### 1

```
λ (1− α )
```
```
‖ Z Tj r j − λα · t ‖ 2 (4.80)
```
```
= ‖ s ‖ 2.
```
Now solve
min
_t_ : _tk_ ∈[− 1 _,_ 1]

```
J ( t ) , (4.81)
```
and show that this leads to the condition _θ_ ˆ _j_ = 0 if and only if‖ˆ _gj_ ‖ 2 ≤ _λ_ (1− _α_ )
with ˆ _gj_ =S _λα_ ( **Z** _Tj_ **_r_** _j_ ).

Ex. 4.13 Show that if **Z** _Tj_ **Z** _j_ = **I** , then (4.21) solves (4.12).


###### 90 GENERALIZATIONS OF THE LASSO PENALTY

Ex. 4.14 Consider the hierarchical interaction formulation in Example 4.3, and
the optimization problem (4.29)–(4.31).

```
(a) Give an argument why the multipliers p 1 and p 2 make sense in the third
penalty.
(b) Suppose we augment the third matrix in (4.29) with a vector of ones
[ 1 Z 1 Z 2 Z 1:2], and augment the parameter vector with ̃ μ. We now replace
the third group penalty term with
√
p 1 p 2 μ ̃^2 + p 2 ‖ α ̃ 1 ‖^22 + p 1 ‖ α ̃ 2 ‖^22 +‖ α 1:2‖^22.
```
```
Show that for any λ > 0,̂ μ ̃= 0.
(c) Show that the solution to (4.29)–(4.31) is equivalent to the solution to
(4.32) for any λ > 0. Show how to map the solution to the latter to the
solution to the former.
```
Ex. 4.15 Consider a criterion for sparse additive models:

```
minimize
β ∈R J, { fj ∈F j } J 1
```
###### E( Y −

###### ∑ J

```
j =1
```
```
βjfj ( Xj ))^2
```
```
subject to ‖ fj ‖ 2 = 1∀ j (4.82)
∑ J
```
```
j =1
```
```
| βj |≤ t.
```
Although evocative, this criterion is not convex, but rather biconvex in _β_ and
{ _fj_ } _J_ 1. Show that one can absorb the _βj_ into _fj_ and that solving (4.82) is
equivalent to solving the convex (4.38):

```
minimize
fj ∈F j, j =1 ,...,J
```
###### 

###### 

###### 

###### E

###### [(

###### Y −

###### ∑ J

```
j =1
```
```
fj ( Xj )
```
###### ) 2 ]

```
+ λ
```
###### ∑ J

```
j =1
```
```
‖ fj ‖ 2
```
###### 

###### 

###### 

###### .

(Ravikumar et al. 2009)

Ex. 4.16 The SPAM backfitting equations (4.40) are in terms of function
updates, where _f_ ˆ _j_ is a fitted function returned by a smoothing operatorS _j_ ,
and the _N_ -vector form **f** _j_ is _fj_ evaluated at the _N_ samples values of _Xj_.
Suppose that the smoothing operatorS _j_ fits a linear expansion of the form

```
fj (·) =
```
```
∑ pj
```
```
` =1
```
```
βj`ψj` (·) , (4.83)
```
where _θj_ =

###### [

```
βj 1 βj 2 ··· βjpj
```
###### ]

```
is the coefficient vector.
```

###### EXERCISES 91

```
(a) Suppose that the basis matrices are orthonormal: Ψ Tj Ψ j = I pj. Show that
the SPAM backfitting equations are equivalent to the ordinary group-lasso
estimating equations in terms of the parameters θj.
(b) What changes if Ψ j is not orthonormal?
```
Ex. 4.17 In this exercise, we show that any optimal solution to the COSSO
problem (4.44) is a member ofH 0 , the linear span of the kernel functions
{R(· _, xi_ ) _,i_ = 1 _,...,N_ }. We use the fact that any function _f_ ∈ Hhas a de-
composition of the form _g_ + _h_ , where _g_ ∈ H 0 and _h_ is orthogonal toH 0 ,
meaning that〈 _h, f_ 0 〉Hfor all _f_ 0 ∈H 0.

```
(a) For a function of the form f = g + h as above, show that the term
1
N
```
###### ∑ N

```
i =1( y − f ( xi ))
```
(^2) depends only on _g_. ( _Hint:_ The kernel reproducing prop-
erty could be useful here.)
(b) Show that the penalty term is only increased by including a component
_h_ 6 = 0. Conclude that any optimal solution _f_ ̂must belong toH 0.
Ex. 4.18 Verify that the solutions for _fj_ in (4.47) with _λ_ = _τ_^4 _/_ 4 coincide with
the solutions in (4.44).
Ex. 4.19 Consider the additive model criterion (4.42), and assume associated
with each function _fj_ is a reproducing kernelR _j_ , leading to a data criterion
minimize
**_θ_** _j_ ∈R _N
j_ =1 _,...J_

###### 

###### 

###### 

###### ∥

```
∥ y −
```
###### ∑ J

```
j =1
```
```
R j θ j
```
###### ∥

```
∥^2 + λ
```
###### ∑ J

```
j =1
```
###### 1

```
γj
```
```
θ Tj R j θ j
```
###### 

###### 

###### 

###### (4.84)

(The 1 _/N_ has been absorbed into _λ_ ).

```
(a) Define R ̃ j = γj R j and ̃ θ j = θ j/γj. In this new parametrization, show
that the estimating equations for θ ̃ j are
```
```
− R ̃ j ( y − f +) + λ R ̃ j θ ̃ j = 0 , j = 1 ,...,J, (4.85)
```
```
where f +=
```
###### ∑ J

```
j =1 f j , and f j =
R ̃ j θ ̃ j.
(b) Show that these can be rewritten as
̃ θ j = ( R ̃ j + λ I )−^1 r j, and (4.86a)
̃ f j = R ̃ j ( R ̃ j + λ I )−^1 r j, (4.86b)
```
```
where r j = y − f ++ f j.
(c) Define R ̃+=
```
###### ∑ J

```
j =1
R ̃ j =∑ J
j =1 γj R j. Show that
```
```
f += R ̃+( R ̃++ λ I )−^1 y = R ̃+ c (4.87a)
c = ( R ̃++ λ I )−^1 y. (4.87b)
```
```
Compare with the previous item.
```

###### 92 GENERALIZATIONS OF THE LASSO PENALTY

```
(d) Show that ̃ θ j = c ∀ j. So even though there are J N -dimensional param-
eters ̃ θ j in this representation, their estimates are all the same.
```
This shows that given _γj_ , **f** _j_ = _γj_ **R** _j_ **c** = _γj_ **g** _j_ , and justifies the second
step (4.46) in the alternating algorithm for fitting the COSSO model (see
Section 4.4).

Ex. 4.20 Show that any optimal solution to the doubly regularized estima-
tor (4.52) takes the form _f_ ̂ _j_ (·) =

###### ∑ N

_i_ =1
_θ_ ̂ _ij_ R(· _,xij_ ), where the optimal weights
( _θ_ ̂ _j,j_ = 1 _,...,J_ ) are obtained by solving the convex program (4.53).

Ex. 4.21 Consider the fused lasso problem (4.56). Characterize _β_ ̂ 0. Show that if
we center the predictors and the response by subtracting their sample means,
we can omit the term _β_ 0 and the estimates _β_ ̂ _j_ are unaffected. Now consider a
version of the fused-lasso signal approximator (4.54) with a constant term _θ_ 0
included:

```
minimize
θ 0 , θ
```
###### ∑ N

```
i =1
```
```
( yi − θ 0 − θi )^2 + λ 1
```
###### ∑ N

```
i =1
```
```
| θi |+ λ 2
```
###### ∑ N

```
i =2
```
```
| θi − θi − 1 |. (4.88)
```
Characterize _θ_ ˆ 0 , and show that median(ˆ _θi_ ) = 0.

Ex. 4.22 Consider the matrix **M** corresponding to the linear transforma-
tion (4.60).

```
(a) Show that its inverse M −^1 is lower triangular with all ones on and below
the diagonal.
(b) Explore the pairwise correlations between the columns of such a matrix
for the CGH data of Figure 4.8.
(c) Usingglmnetwith maxdf=200, andtype="naive", fit model (4.61), and
show that the fitted values correspond to the parameters of interest. Com-
pare the performance oflarsfor the same task. Using a soft-thresholding
post-processor, try to match Figure 4.8.
```
Ex. 4.23 Derive the dual optimization problem (4.64) in Section 4.5.1.3. Sup-
pose the _kth_ element ofˆ **u** ( _λ_ ) has reached the bound at _λ_ = _λk_ , and let the
set _B_ hold their indices, and **s** a vector of their signs. Show that the solution
to (4.64) at _λk_ also solves

```
minimize
u − B
```
###### 1

###### 2

```
‖ y − λk D TB s − D T − B u − B ‖^2 , (4.89)
```
with solutionˆ **u** _B_ ( _λ_ ) = _λ_ **s** andˆ **u** − _B_ ( _λ_ ) = ( **D** − _B_ **D** _T_ − _B_ )−^1 **D** − _B_ ( **y** − _λ_ **D** _TB_ **s** ) and
_λ_ = _λk_. By definition each of the elements ofˆ **u** − _B_ ( _λ_ ) has absolute value less
than _λk_. Show that the solution is piecewise-linear in _λ < λk_ , and remains
the solution until the next element of **u** ˆ− _B_ ( _λ_ ) hits the boundary. Show that
one can determine exactly for which element and value of _λ_ this will be.


###### EXERCISES 93

Ex. 4.24 Here we use dynamic programming to fit the fused lasso.

```
(a) Implement the dynamic programming approach to the fused lasso, in the
simple case where each βi can take one of K distinct values.
(b) Do the same as in (a), replacing the ` 1 difference penalty with an ` 0
difference penalty. Compare the two procedures on the CGH data.
```
Ex. 4.25 Derive the threshold function (4.75) for the uni-dimensional MC+
criterion (4.74) in Section 4.6.

Ex. 4.26 Show that with _ν_ = 1 in (4.76), the adaptive-lasso solutions are
similar to those of the nonnegative garrote (2.19). In particular, if we constrain
the adaptive lasso solutions to have the same sign as the pilot estimates,
then they are the same as the solutions to the garrote with a suitably chosen
regularization parameter.



```
Chapter 5
```
## Optimization Methods

### 5.1 Introduction

In this chapter, we present an overview of some basic optimization concepts
and algorithms for convex problems, with an emphasis on aspects of particular
relevance to regularized estimators such as the lasso. At the algorithmic level,
we focus primarily on _first-order methods_ , since they are especially useful for
large-scale optimization problems. We begin with an overview of some basic
optimality theory for convex programs, and then move on to consider various
types of iterative algorithms. Although we limit our focus mainly to convex
problems, we do touch upon algorithms for biconvex problems later in the
chapter.

### 5.2 Convex Optimality Conditions

An important class of optimization problems involves convex cost functions
and convex constraints. A setC ⊆R _p_ is _convex_ if for all _β,β_ ′∈ Cand all
scalars _s_ ∈[0 _,_ 1], all vectors of the form _β_ ( _s_ ) = _sβ_ + (1− _s_ ) _β_ ′also belong to
C. A function _f_ :R _p_ →Ris convex means that for any two vectors _β,β_ ′in
the domain of _f_ and any scalar _s_ ∈(0 _,_ 1), we have

```
f ( β ( s )) = f ( sβ + (1− s ) β ′)≤ sf ( β ) + (1− s ) f ( β ′). (5.1)
```
In geometric terms, this inequality implies that the chord joining the _f_ ( _β_ ) and
_f_ ( _β_ ′) lies above the graph of _f_ , as illustrated in Figure 5.1(a). This inequality
guarantees that a convex function cannot have any local minima that are not
also globally minimal, as illustrated Figure 5.1(b).

#### 5.2.1 Optimality for Differentiable Problems

Consider the constrained optimization problem

```
minimize
β ∈R p
f ( β ) such that β ∈C , (5.2)
```
where _f_ :R _p_ →Ris a convex objective function to be minimized, andC ⊂R _p_
is a convex constraint set. When the cost function _f_ is differentiable, then a

```
95
```

###### 96 OPTIMIZATION METHODS

```
f ( β )
```
```
f ( β ′)
```
```
f ( sβ + (1− s ) β ′)
```
```
sf ( β ) + (1− s ) f ( β ′)
```
```
βββ ( s ) ′ ββ
β ( s ) ′
```
```
(a) (b)
```
**Figure 5.1** _(a) For a convex function, the linesf_ ( _β_ ) + (1− _s_ ) _f_ ( _β_ ′) _always lies
above the function valuef_ ( _sβ_ + (1− _s_ ) _β_ ′)_. (b) A nonconvex function that violates the
inequality_ (5.1)_. Without convexity, there may be local minima that are not global ly
minima, as shown by the pointβ_ ′_._

necessary and sufficient condition for a vector _β_ ∗∈Cto be a global optimum
is that

```
〈∇ f ( β ∗) , β − β ∗〉≥ 0 (5.3)
```
for all _β_ ∈ C. The sufficiency of this condition is easy to see; for any _β_ ∈ C,
we have

```
f ( β )
```
```
( i )
≥ f ( β ∗) +〈∇ f ( β ∗) , β − β ∗〉
```
```
( ii )
≥ f ( β ∗) , (5.4)
```
where inequality (i) follows from the convexity of _f_ ,^1 and inequality (ii) follows
from the optimality condition (5.3). As a special case, whenC=R _p_ so that the
problem (5.2) is actually unconstrained, then the first-order condition (5.3)
reduces to the classical zero-gradient condition∇ _f_ ( _β_ ∗) = 0.
Frequently, it is the case that the constraint setC can be described in
terms of the sublevel sets of some convex constraint functions. For any convex
function _g_ :R _p_ →R, it follows from the definition (5.1) that the sublevel set
{ _β_ ∈R _p_ | _g_ ( _β_ )≤ 0 }is a convex set. On this basis, the convex optimization
problem

```
minimize
β ∈R p
```
```
f ( β ) such that gj ( β )≤0 for j = 1 ,...,m , (5.5)
```
(^1) Inequality (i) is an equivalent definition of convexity for a differentiable function _f_ ; the
first-order Taylor approximation centered at any point _β_ ̃∈ Cgives a tangent lower bound
to _f_.


###### CONVEX OPTIMALITY CONDITIONS 97

where _gj,j_ = 1 _,...,m_ are convex functions that express constraints to be
satisfied, is an instance of the general program (5.2). We let _f_ ∗denote the
optimal value of the optimization problem (5.5).
An important function associated with the problem (5.5) is the Lagrangian
_L_ :R _p_ ×R _m_ +→R, defined by

```
L ( β ; λ ) = f ( β ) +
```
```
∑ m
```
```
j =1
```
```
λjgj ( β ). (5.6)
```
The nonnegative weights _λ_ ≥0 are known as _Lagrange multipliers_ ; the pur-
pose of the multiplier _λj_ is to impose a penalty whenever the constraint
_gj_ ( _β_ )≤0 is violated. Indeed, if we allow the multipliers to be chosen op-
timally, then we recover the original program (5.5), since

```
sup
λ ≥ 0
```
```
L ( β ; λ ) =
```
###### {

```
f ( β ) if gj ( β )≤0 for all j = 1 ,...,m , and
+∞ otherwise,
```
###### (5.7)

and thus _f_ ∗= inf _β_ ∈R _p_ sup _λ_ ≥ 0 _L_ ( _β_ ; _λ_ ). See Exercise 5.2 for further details on
this equivalence.
For convex programs, the Lagrangian allows for the constrained prob-
lem (5.5) to be solved by reduction to an equivalent unconstrained problem.
More specifically, under some technical conditions on _f_ and{ _gj_ }, the theory
of Lagrange duality guarantees that there exists an optimal vector _λ_ ∗≥ 0
of Lagrange multipliers such that _f_ ∗= min _β_ ∈R _pL_ ( _β_ ; _λ_ ∗). As a result, any
optimum _β_ ∗of the problem (5.5), in addition to satisfying the feasibility con-
straints _gj_ ( _β_ ∗)≤0, must also be a zero-gradient point of the Lagrangian, and
hence satisfy the equation

```
0 =∇ βL ( β ∗; λ ∗) = ∇ f ( β ∗) +
```
```
∑ m
```
```
j =1
```
```
λ ∗ j ∇ gj ( β ∗). (5.8)
```
When there is only a single constraint function _g_ , this condition reduces to
∇ _f_ ( _β_ ∗) =− _λ_ ∗∇ _g_ ( _β_ ∗), and has an intuitive geometric interpretation, as shown
in Figure 5.2. In particular, at the optimal solution _β_ ∗, the normal vector
∇ _f_ ( _β_ ∗) to the contour line of _f_ points in the opposite direction to the normal
vector to the constraint curve _g_ ( _β_ ) = 0. Equivalently, the normal vector to
the contour _f_ lies at right angles to the tangent vector of the constraint.
Consequently, if we start at the optimum _β_ ∗and travel along the tangent at
_g_ ( _β_ ) = 0, we cannot decrease the value of _f_ ( _β_ ) up to first order.
In general, the _Karush–Kuhn–Tucker_ conditions relate the optimal La-
grange multiplier vector _λ_ ∗≥0, also known as the dual vector, to the optimal
primal vector _β_ ∗∈R _p_ :

```
(a) Primal feasibility:gj ( β ∗)≤0 for all j = 1 ,...,m.
(b) Complementary slackness:λ ∗ jgj ( β ∗) = 0 for all j = 1 ,...,m.
```

###### 98 OPTIMIZATION METHODS

```
f ( β )= c 1
```
```
f ( β )= c 2 <c 1 g ( β )=0
```
```
β ∗
```
**Figure 5.2** _Il lustration of the method of Lagrange multipliers. We are minimizing
a functionfsubject to a single constraintg_ ( _β_ )≤ 0_. At an optimal solutionβ_ ∗ _, the
normal vector_ ∇ _f_ ( _β_ ∗) _to the level sets of the cost functionfpoints in the opposite
direction to the normal vector_ ∇ _g_ ( _β_ ∗) _of the constraint boundaryg_ ( _β_ ) = 0_. Conse-
quently, up to first order, the value off_ ( _β_ ∗) _cannot be decreased by moving along
the contourg_ ( _β_ ) = 0_._

(c) _Lagrangian condition:_ The pair ( _β_ ∗ _,λ_ ∗) satisfies condition (5.8).
These KKT conditions are necessary and sufficient for _β_ ∗to be a global
optimum whenever the optimization problem satisfies a regularity condition
known as _strong duality_. (See Exercise 5.4 for more details.) The comple-
mentary slackness condition asserts that the multiplier _λ_ ∗ _j_ must be zero if
the constraint _gj_ ( _β_ )≤0 is inactive at the optimum—that is, if _gj_ ( _β_ ∗) _<_ 0.
Consequently, under complementary slackness, the Lagrangian gradient con-
dition (5.8) guarantees that the normal vector−∇ _f_ ( _β_ ∗) lies in the positive
linear span of the gradient vectors{∇ _gj_ ( _β_ ∗)| _λ_ ∗ _j>_ 0 }.

#### 5.2.2 Nondifferentiable Functions and Subgradients

In practice, many optimization problems arising in statistics involve
convex but nondifferentiable cost functions. For instance, the _`_ 1 -norm
_g_ ( _β_ ) =

∑ _p
j_ =1| _βj_ |is a convex function, but it fails to be differentiable at any
point where at least one coordinate _βj_ is equal to zero. For such problems,
the optimality conditions that we have developed—in particular, the first-
order condition (5.3) and the Lagrangian condition (5.8)—are not directly
applicable, since they involve gradients of the cost and constraint functions.
Nonetheless, for convex functions, there is a natural generalization of the no-
tion of gradient that allows for a more general optimality theory.
A basic property of differentiable convex functions is that the first-order
tangent approximation always provides a lower bound. The notion of subgra-


###### CONVEX OPTIMALITY CONDITIONS 99

```
β 1 β 2
```
```
f(β)
```
```
f(β 2 )+zc(β−β 2 )
f(β 2 )+zb(β−β 2 )
```
```
f(β 1 )+za(β−β 1 )
```
**Figure 5.3** _A convex functionf_ :R→R _, along with some examples of subgradients
atβ_ 1 _andβ_ 2_._

dient is based on a natural generalization of this idea. In particular, given a
convex function _f_ :R _p_ →R, a vector _z_ ∈R _p_ is said to be a _subgradient_ of _f_
at _β_ if

_f_ ( _β_ ′)≥ _f_ ( _β_ ) +〈 _z, β_ ′− _β_ 〉 for all _β_ ′∈R _p_. (5.9)
In geometric terms, the subgradient vector _z_ is the normal to a (nonverti-
cal) hyperplane that supports the epigraph of _f_. The set of all subgradients
of _f_ at _β_ is called the _subdifferential_ , denoted by _∂f_ ( _β_ ). Whenever _f_ is dif-
ferentiable at _β_ , then the sub-differential reduces to a single vector—namely
_∂f_ ( _β_ ) ={∇ _f_ ( _β_ )}. At points of nondifferentiability, the subdifferential is a
convex set containing all possible subgradients. For example, for the absolute
value function _f_ ( _β_ ) =| _β_ |, we have

```
∂f ( β ) =
```
###### 

###### 

###### 

```
{+1} if β > 0
{− 1 } if β < 0
[− 1 , +1] if β = 0.
```
###### (5.10)

We frequently write _z_ ∈sign( _β_ ) to mean that _z_ belongs to sub-differential of
the absolute value function at _β_.
Figure 5.3 shows a function _f_ :R→R, and some examples of subgradients
at the two points _β_ 1 and _β_ 2. At the point _β_ 1 , the function is differentiable and
hence there is only one subgradient—namely, _f_ ′( _β_ 1 ). At the point _β_ 2 , it is
not differentiable, and there are multiple subgradients; each one specifies a
tangent plane that provides a lower bound on _f_.
How is this useful? Recall the convex optimization problem (5.5), and
assume that one or more of the functions{ _f,gj_ }are convex but nondiffer-
entiable. In this case, the zero-gradient Lagrangian condition (5.8) no longer
makes sense. Nonetheless, again under mild conditions on the functions, the
generalized KKT theory can still be applied using the modified condition

```
0 ∈ ∂f ( β ∗) +
```
```
∑ m
```
```
j =1
```
```
λ ∗ j∂gj ( β ∗) , (5.11)
```

###### 100 OPTIMIZATION METHODS

in which we replace the gradients in the KKT condition (5.8) with subdif-
ferentials. Since the subdifferential is a set, Equation (5.11) means that the
all-zeros vector belongs to the sum of the subdifferentials.^2

_Example 5.1. Lasso and subgradients._ As an example, suppose that we want to
solve a minimization problem of the form (5.5) with a convex and differentiable
cost function _f_ , and a single constraint specified by _g_ ( _β_ ) =

∑ _p
j_ =1| _βj_ |− _R_ for
some positive constant _R_. Thus, the constraint _g_ ( _β_ )≤0 is equivalent to
requiring that _β_ belongs to an _`_ 1 -ball of radius _R_. Recalling the form of the
subdifferential (5.10) for the absolute value function, condition (5.11) becomes

```
∇ f ( β ∗) + λ ∗ z ∗= 0 , (5.12)
```
where the subgradient vector satisfies _zj_ ∗∈sign( _βj_ ∗) for each _j_ = 1 _,...,p_.

When the cost function _f_ is the squared error _f_ ( _β_ ) = 21 _N_ ‖ **y** − **X** _β_ ‖^22 , this
condition is equivalent to Equation (2.6) from Chapter 2. ♦

_Example 5.2. Nuclear norm and subgradients._ The _nuclear norm_ is a convex
function on the space of matrices. Given a matrix **Θ** ∈R _m_ × _n_ (where we as-
sume _m_ ≤ _n_ ), it can always be decomposed in the form **Θ** =

∑ _m
j_ =1 _σjujv
T
j_.
where{ _uj_ } _mj_ =1and{ _vj_ } _mj_ =1are the (left and right) singular vectors, chosen
to be orthonormal inR _m_ andR _n_ , respectively, and the nonnegative numbers
_σj_ ≥0 are the singular values. This is known as the _singular-value decompo-
sition (SVD)_ of **Θ**. The _nuclear norm_ is the sum of the singular values—that
is,‖ **Θ** ‖_?_ =

∑ _m
j_ =1 _σj_ ( **Θ** ). Note that it is a natural generalization of the vector
_`_ 1 -norm, since for any (square) diagonal matrix, the nuclear norm reduces to
the _`_ 1 -norm of its diagonal entries. As we discuss in Chapter 7, the nuclear
norm is useful for various types of matrix approximation and decomposition.
The subdifferential _∂_ ‖ **Θ** ‖_?_ of the nuclear norm at **Θ** consists of all matri-
ces of the form **Z** =

```
∑ m
j =1 zjujv
```
_T
j_ , where each for _j_ = 1 _,...,m_ , the scalar
_zj_ ∈sign( _σj_ ( **Θ** )). We leave it as an exercise for the reader to verify this claim
using the definition (5.9). ♦

### 5.3 Gradient Descent

Thus far, we have seen various types of optimality conditions for different types
of convex programs. We now turn to various classes of iterative algorithms
for solving optimization problems. In this section, we focus on first-order al-
gorithms, meaning methods that exploit only gradient (or subgradient) in-
formation, as opposed to information from higher-order gradients. First-order
methods are particularly attractive for large-scale problems that arise in much
of modern statistics.

(^2) Here we define the sum of two subsets _A_ and _B_ ofR _p_ as _A_ + _B_ : ={ _α_ + _β_ | _α_ ∈ _A,β_ ∈
_B_ }.


###### GRADIENT DESCENT 101

#### 5.3.1 Unconstrained Gradient Descent

We begin with the simplest case —namely, unconstrained minimization of
a convex differentiable function _f_ :R _p_ →R. In this case, assuming that
the global minimum is achieved, then a necessary and sufficient condition for
optimality of _β_ ∗∈R _p_ is provided by the zero-gradient condition∇ _f_ ( _β_ ∗) = 0.
Gradient descent is an iterative algorithm for solving this fixed point equation:
it generates a sequence of iterates{ _βt_ }∞ _t_ =0via the update

```
βt +1= βt − st ∇ f ( βt ) , for t = 0 , 1 , 2 ,..., (5.13)
```
where _st>_ 0 is a stepsize parameter. This update has a natural geomet-
ric interpretation: by computing the gradient, we determine the direction of
steepest descent−∇ _f_ ( _βt_ ), and then walk in this direction for a certain amount
determined by the stepsize _st_.
More generally, the class of _descent methods_ is based on choosing a direc-
tion ∆ _t_ ∈R _p_ such that〈∇ _f_ ( _βt_ ) _,_ ∆ _t_ 〉 _<_ 0, and then performing the update

```
βt +1= βt + st ∆ t for t = 0 , 1 , 2 ,.... (5.14)
```
In geometric terms, the inner product condition〈∇ _f_ ( _βt_ ) _,_ ∆ _t_ 〉 _<_ 0 means
that the chosen direction ∆ _t_ forms an angle of less than 90◦with the di-
rection of steepest descent. The gradient descent update (5.13) is a special
case with ∆ _t_ =−∇ _f_ ( _βt_ ). Other interesting choices include _diagonal ly-scaled
gradient descent:_ given a diagonal matrix **D** _t_  **0** , it uses the descent direc-
tion ∆ _t_ =−( **D** _t_ )−^1 ∇ _f_ ( _βt_ ). This type of diagonal scaling is helpful when the
function varies more rapidly along some coordinates than others. More gen-
erally, _Newton’s method_ is applicable to functions that are twice continuously
differentiable, and is based on the descent direction

```
∆ t =−
```
###### (

```
∇^2 f ( βt )
```
###### )− 1

```
∇ f ( βt ) , (5.15)
```
where∇^2 _f_ ( _βt_ ) is the Hessian of _f_ , assumed to be invertible. Newton’s method
is a second-order method, since it involves first and second derivatives. In
particular, a Newton step (with stepsize one) amounts to exactly minimizing
the second-order Taylor approximation to _f_ at _βt_. Under some regularity
conditions, it enjoys a quadratic rate of convergence; however, computation
of the Newton direction (5.15) is more expensive than first-order methods.
An important issue for all iterative algorithms, among them the gradient
descent update (5.13), is how to choose the stepsize _st_. For certain problems
with special structure, it can be shown that a constant stepsize (meaning _st_ =
_s_ for all iterations _t_ = 0 _,_ 1 _,..._ ) will guarantee convergence; see Exercise 5.1
for an illustration. In general, it is _not sufficient_ to simply choose a stepsize
for which _f_ ( _βt_ +1) _< f_ ( _βt_ ); without some care, this choice may cause the
algorithm to converge to a nonstationary point. Fortunately, there are various
kinds of stepsize selection rules that are relatively simple, and have associated
convergence guarantees:


###### 102 OPTIMIZATION METHODS

```
s = 0 s 1 s 0 = 1
```
```
f ( β ) f ( β + s ∆)
```
```
f ( β ) + αs f ( β ) + αs^1 h∇ f ( β ) , ∆i
0 h∇ f ( β ) , ∆i
```
**Figure 5.4** _Armijo rule or backtracking line search. Starting with step-
size s_ 0 = 1 _, we repeatedly reduce s by a fraction γ until the condition
f_ ( _β_ + _s_ ∆)≤ _f_ ( _β_ ) + _αs_ 〈∇ _f_ ( _β_ ) _,_ ∆〉 _is satisfied. This is achieved here ats_ 1_._

- _Limited minimization rule:_ choose the stepsize _st_ = arg min
    _s_ ∈[0 _,_ 1]

```
f ( βt + s ∆ t ).
```
```
Although this choice is very intuitive, it does require solving a one-
dimensional optimization problem at each step.
```
- _Armijo or backtracking rule:_ Given parameters _α_ ∈(0 _,_ 1) and _γ_ ∈(0 _,_ 1) and
    an initial stepsize _s_ = 1, perform the reduction _s_ ← _γs_ until the descent
    condition

```
f
```
###### (

```
βt + s ∆ t
```
###### )

```
≤ f ( βt ) + αs 〈∇ f ( βt ) , ∆ t 〉 (5.16)
```
```
is met. In practice, the choices α = 0. 5 and γ = 0. 8 are reasonable. The
condition (5.16) can be interpreted as saying that we will accept a fraction α
of the decrease in f ( β ) that is predicted by linear extrapolation (Figure 5.4).
```
For convex functions, both of these stepsize choices, when combined with
suitable choices of the descent directions{∆ _t_ }∞ _t_ =0, yield algorithms that are
guaranteed to converge to a global minimum of the convex function _f_. See the
bibliographic section on page 131 for further discussion.

#### 5.3.2 Projected Gradient Methods

We now turn to gradient methods for problems that involve additional side
constraints. In order to provide some geometric intuition for these methods,
it is useful to observe that the gradient step (5.13) has the alternative repre-
sentation

```
βt +1= arg min
β ∈R p
```
###### {

```
f ( βt ) +〈∇ f ( βt ) , β − βt 〉+
```
###### 1

```
2 st
```
```
‖ β − βt ‖^22
```
###### }

###### . (5.17)


###### GRADIENT DESCENT 103

Thus, it can be viewed as minimizing the linearization of _f_ around the cur-
rent iterate, combined with a smoothing penalty that penalizes according to
Euclidean distance.
This view of gradient descent—an algorithm tailored specifically for uncon-
strained minimization—leads naturally to the method of projected gradient
descent, suitable for minimization subject to a constraint _β_ ∈C:

```
βt +1= arg min
β ∈C
```
###### {

```
f ( βt ) +〈∇ f ( βt ) , β − βt 〉+
```
###### 1

```
2 st
```
```
‖ β − βt ‖^22
```
###### }

###### . (5.18)

Equivalently, as illustrated in Figure 5.5, this method corresponds to taking
a gradient step _βt_ − _s_ ∇ _f_ ( _βt_ ), and then projecting the result back onto the
convex constraint setC. It is an efficient algorithm as long as this projection
can be computed relatively easily. For instance, given an _`_ 1 -ball constraint
C={ _β_ ∈R _p_ | ‖ _β_ ‖ 1 ≤ _R_ }, this projection can be computed easily by a
variant of soft thresholding, as we discuss in more detail later.

```
βt
βt +1
```
```
βt − st ∇ f ( βt )
```
**Figure 5.5** _Geometry of projected gradient descent. Starting from the current iterate
βt, it moves in the negative gradient direction toβt_ − _st_ ∇ _f_ ( _βt_ ) _, and then performs
a Euclidean projection of the result back onto the convex constraint set_ C _in order to
obtain the next iterateβt_ +1_._

#### 5.3.3 Proximal Gradient Methods

Here we discuss a general class of methods that include projected gradient
descent as a special case. As discussed previously, many objective functions _f_
can be decomposed as a sum _f_ = _g_ + _h_ , where _g_ is convex and differentiable,
and _h_ is convex but nondifferentiable. Suppose that we would like to minimize
such an objective function by a gradient-type algorithm. How do we deal with
the nondifferentiability of the component _h_?
In order to see how this difficulty can be finessed, recall that an ordinary
gradient step can be viewed as minimizing the combination of a local linear
approximation to _f_ combined with a quadratic smoothness term—in particu-
lar, see Equation (5.17). This perspective suggests the following strategy: form


###### 104 OPTIMIZATION METHODS

a local approximation to _f_ by linearizing the differentiable component _g_ , but
leaving the nondifferentiable component fixed. This leads to the _generalized
gradient update_ , defined by

```
βt +1= arg min
β ∈R p
```
###### {

```
g ( βt ) +〈∇ g ( βt ) , β − βt 〉+
```
###### 1

```
2 st
```
```
‖ β − βt ‖^22 + h ( β )
```
###### }

###### , (5.19)

where we have approximated the differentiable part _g_ , but retained an exact
form of the nondifferentiable component _h_.
The update (5.19) is closely related to the projected gradient descent up-
date (5.18); in fact, it can be viewed as a Lagrangian analog. In order to make
this connection explicit, we define the _proximal map_ of a convex function _h_ , a
type of generalized projection operator:

```
prox h ( z ) : = arg min
θ ∈R p
```
###### {

###### 1

###### 2

```
‖ z − θ ‖^22 + h ( θ )
```
###### }

###### . (5.20)

```
From this definition we immediately have the following relations:
(a) prox sh ( z ) = arg min θ ∈R p
```
###### { 1

```
2 s ‖ z − θ ‖
```
```
2
2 + h ( θ )
```
###### }

###### .

```
(b) When
```
```
h ( θ ) = I C( θ ) =
```
###### {

```
0 if θ ∈C, and
+∞ otherwise
```
```
we have prox h ( z ) = arg min θ ∈C‖ z − θ ‖^22 , corresponding to the usual Eu-
clidean projection onto the setC.
(c) If h ( θ ) = λ ‖ θ ‖ 1 , then prox h ( z ) = S λ ( z ), the element-wise soft-
thresholded version of z. See Example 5.3 below.
```
As we show in Exercise 5.7, it follows that the update (5.19) has the equivalent
representation

```
βt +1= prox sth
```
###### (

```
βt − st ∇ g ( βt )
```
###### )

###### . (5.21)

Similarly, it is easy to see that the proximal-gradient update

```
βt +1= prox I C
```
###### (

```
βt − st ∇ g ( βt )
```
###### )

###### (5.22)

is exactly the projected gradient step (5.18).
The updates (5.21) will be computationally efficient as long as the proximal
map is relatively easy to compute. For many problems that arise in statistics—
among them the _`_ 1 -norm, group-lasso _`_ 2 norm, and nuclear norms—the proxi-
mal map (5.20) can be computed quite cheaply. Typically the update (5.21) is
better suited to statistical problems that impose regularization via a penalty,
as opposed to a constraint of the form _h_ ( _θ_ )≤ _R_.

_Example 5.3. Proximal gradient descent for `_ 1 _-penalty._ Suppose that the
nondifferentiable component is a (scaled) _`_ 1 penalty, say _h_ ( _θ_ ) = _λ_ ‖ _θ_ ‖ 1. With
this choice of _h_ , proximal gradient descent with stepsize _st_ at iteration _t_ con-
sists of two very simple steps:


###### GRADIENT DESCENT 105

1. First, take a gradient step _z_ = _βt_ − _st_ ∇ _g_ ( _βt_ ).
2. Second, perform elementwise soft-thresholding _βt_ +1=S _stλ_ ( _z_ ).

```
In detail, the proximal map (5.21) is given by
```
```
prox sh ( z ) = arg min
θ ∈R p
```
###### {

###### 1

```
2 s
```
```
‖ z − θ ‖^22 + λ ‖ θ ‖ 1
```
###### }

```
= arg min
θ ∈R p
```
###### {

###### 1

###### 2

```
‖ z − θ ‖^22 + λs ‖ θ ‖ 1
```
###### }

###### .

###### (5.23)

```
This optimization problem has an explicit closed-form solution; in particular,
since the objective function decouples across coordinates as
```
```
1
2
‖ z − θ ‖^22 + λs ‖ θ ‖ 1 =
```
```
∑ p
```
```
j =1
```
###### {

###### 1

###### 2

```
( zj − θj )^2 + λs | θj |
```
###### }

###### , (5.24)

```
we can solve the p -dimensional problem by solving each of the univariate
problems separately. We leave it as an exercise for the reader to verify the
solution is obtained by applying the soft thresholding operator S τ :R p →R p
with coordinates
```
```
[S τ ( z )] j = sign( zj )(| zj |− τ )+ , (5.25)
```
```
with the threshold choice τ = sλ. (Here we use ( x )+ as a shorthand for
max{ x, 0 }.) ♦
Example 5.4. Proximal gradient descent for nuclear norm penalty. As a sec-
ond illustration, suppose that h is λ times the nuclear norm. As previously
introduced in Example 5.2, the nuclear norm is a real-valued function on the
space of m × n matrices, given by‖ Θ ‖? =
```
```
∑ m
j =1 σj ( Θ ), where{ σj ( Θ )}are
the singular values of Θ. With this choice of h , the generalized projection
operator (5.20) takes the form
```
```
prox sh ( Z ) = arg min
Θ ∈R m × n
```
###### {

###### 1

```
2 s
```
```
‖ Z − Θ ‖^2 F+ λ ‖ Θ ‖?
```
###### }

###### . (5.26)

```
Here the Frobenius norm‖ Z − Θ ‖^2 F=
```
```
∑ m
j =1
```
```
∑ n
k =1( Zjk −Θ jk )
```
(^2) is simply the
usual Euclidean norm applied to the entries of the matrices. Although this
proximal map (5.26) is no longer separable, it still has a relatively simple so-
lution. Indeed, as we explore in Exercise 5.8, the update Π _s,h_ ( **Z** ) is obtained by
computing the singular value decomposition of **Z** , and then soft-thresholding
its singular values. ♦
Nesterov (2007) provides sufficient conditions for the convergence of the
updates (5.21) when applied to a composite objective function _f_ = _g_ + _h_.
Suppose that the component _g_ is continuously differentiable with a Lipschitz
gradient, meaning that there is some constant _L_ such that
‖∇ _g_ ( _β_ )−∇ _g_ ( _β_ ′)‖ 2 ≤ _L_ ‖ _β_ − _β_ ′‖ 2 for all _β,β_ ′∈R _p_. (5.27)


###### 106 OPTIMIZATION METHODS

Under this condition and with a constant stepsize _st_ = _s_ ∈(0 _,_ 1 _/L_ ], it can be
shown that there is a constant _C_ , independent of the iteration number, such
that the updates (5.21) satisfy

```
f ( βt )− f ( β ∗)≤
```
###### C

```
t + 1
```
```
‖ βt − β ∗‖ 2 for all t = 1 , 2 ,... , (5.28)
```
where _β_ ∗is an optimal solution. In words, the difference between the value
_f_ ( _βt_ ) of the _tth_ iterate and the optimal value _f_ ( _β_ ∗) decreases at the rate
O(1 _/t_ ). This rate is known as _sublinear convergence_ , and is guaranteed for
any fixed stepsize in the interval (0 _,_ 1 _/L_ ]. Such a choice requires an upper
bound on the Lipschitz constant _L_ , which may or may not be available. In
practice, the Armijo rule also yields the same rate (5.28). (See Figure 5.6.)

```
0 10 20 30 40 50
−8
```
```
−7
```
```
−6
```
```
−5
```
```
−4
```
```
−3
```
```
−2
```
```
−1
```
```
0
```
```
Iteration
```
```
Log |f(
```
```
tβ) − f(
```
```
*β
)|
```
```
Linear versus sublinear convergence
```
```
Sublinear
Linear
```
**Figure 5.6** _Plot of_ log| _f_ ( _βt_ )− _f_ ( _β_ ∗)| _versus the iteration numbert, comparing a
sublinear convergence rate_ (5.28) _with a linear or geometric convergence rate_ (5.30)_.
For an algorithm with geometric convergence, the error decay on this logarithmic
scale is linear with a negative slope._

Significantly faster rates are possible if the objective function has addi-
tional structure. For instance, suppose that in addition to having a Lipschitz
continuous gradient (5.27), the differentiable component _g_ is _strongly convex_ ,
meaning that there exists some _γ >_ 0 such that

```
g ( β + ∆)− g ( β )−〈∇ g ( β ) , ∆〉≥ γ^2 ‖∆‖^22 for all β, ∆∈R p. (5.29)
```
This condition guarantees that _g_ has at least as much curvature as the
quadratic function _β_ 7→ _γ_^2 ‖ _β_ ‖^22 in all directions. Under conditions (5.27)
and (5.29), it can be shown that with a constant stepsize _s_ ∈(0 _,_ 1 _/L_ ], the


###### GRADIENT DESCENT 107

updates (5.21) will achieve a _linear or geometric rate_ of convergence, meaning
that there exists a positive constant _C_ and contraction factor _κ_ ∈(0 _,_ 1) such
that

```
f ( βt )− f ( β ∗)≤ C κt ‖ β^0 − β ∗‖ 2 for all t = 1 , 2 ,... , (5.30)
```
Thus, under the additional strong convexity condition, the error _f_ ( _βt_ )− _f_ ( _β_ ∗)
is guaranteed to contract at a geometric rate specified by _κ_ ∈(0 _,_ 1). See
Figure 5.6 for an illustration of the difference between this linear rate and the
earlier sublinear rate (5.28).

_Example 5.5. Proximal gradient for lasso._ For the lasso, we have

```
g ( β ) =
```
###### 1

###### 2 N

```
‖ y − X β ‖^22 and h ( β ) = λ ‖ β ‖ 1 ,
```
so that the proximal gradient update (5.21) takes the form

```
βt +1=S stλ
```
###### (

```
βt + st
```
###### 1

###### N

```
X T ( y − X βt )
```
###### )

###### . (5.31)

Note that this has a very similar form to the coordinate descent update (see
Section 5.4), especially if we take the stepsize _s_ = 1 and assume that the
predictors are standardized. Then both procedures operate on the same quan-
tities, one in a cyclical manner and the other (proximal gradients) in a simul-
taneous manner on all coordinates. It is not clear which is a more effective
approach. The coordinate descent procedure can exploit sparsity of the coeffi-
cient vector and doesn’t need to worry about step-size optimization, while the
proximal gradient may gain efficiency by moving all parameters at the same
time. It may also have speed advantages in problems where the multiplication
of a vector by both **X** and **X** _T_ can be done quickly, for example by a fast
Fourier transform. The Lipschitz constant _L_ here is the maximum eigenvalue
of **X** _T_ **X** _/N_ ; one can use a fixed stepsize in (0 _,_ 1 _/L_ ] or a form of backtracking
step selection. We compare these in a numerical example in Section 5.5. ♦

#### 5.3.4 Accelerated Gradient Methods

In this section, we discuss a class of accelerated gradient methods due to
Nesterov (2007). Suppose that we have a convex differentiable function _f_ , and
recall the standard gradient step (5.13). For certain objective functions, this
update may exhibit an undesirable type of “zig-zagging” behavior from step
to step, which could conceivably slow down convergence. With the motivation
of alleviating this drawback, Nesterov (2007) proposed the class of accelerated
gradient methods that use weighted combinations of the current and previous
gradient directions.
In more detail, the accelerated gradient method involves a pair of se-
quences{ _βt_ }∞ _t_ =0and{ _θt_ }∞ _t_ =0, and some initialization _β_^0 = _θ_^0. For iterations


###### 108 OPTIMIZATION METHODS

_t_ = 0 _,_ 1 _,_ 2 _,..._ , the pair is then updated according to the recursions

```
βt +1= θt − st ∇ f ( θt ) , and (5.32a)
```
```
θt +1= βt +1+
t
t + 3
```
```
( βt +1− βt ). (5.32b)
```
For non-smooth functions _f_ that have the “smooth plus non-smooth” de-
composition _g_ + _h_ , Nesterov’s acceleration scheme can be combined with
the proximal gradient update: in particular, we replace the ordinary gradi-
ent step (5.32a) with the update

```
βt +1= prox sth
```
###### (

```
θt − st ∇ g ( θt )
```
###### )

###### . (5.33)

In either case, the stepsize _st_ is either fixed to some value, or chosen according
to some type of backtracking line search.

_Example 5.6. Proximal gradient descent with momentum._ Let us consider the
combination of proximal gradient steps with the acceleration scheme in ap-
plication to the _`_ 1 -regularized lasso program. Recalling the form (5.31) of the
composite gradient update, we see that the accelerated scheme consists of the
updates

```
βt +1=S stλ
```
###### (

```
θt + stN^1 X T ( y − X θt )
```
###### )

```
θt +1= βt +1+
```
```
t
t + 3
```
###### (

```
βt +1− βt
```
###### )

_._ (5.34a)

This algorithm for the lasso is essentially equivalent, modulo some minor dif-
ferences in the acceleration weights, to the Fast Iterative Soft-thresholding
Algorithm (FISTA) of Beck and Teboulle (2009).
To investigate how well this works, we generated data from a regression
problem with _N_ = 1000 observations and _p_ = 500 features. The features _xij_
are standard Gaussian having pairwise correlation 0.5. Twenty of the 500 co-
efficients _βj_ were nonzero, each distributed as standard Gaussian variates and
chosen at random locations between 1 and _p_. Figure 5.7 shows the performance
of the generalized gradient and Nesterov’s method, for two different values of
the regularization parameter _λ_. We tried the algorithms using a fixed value of
the step-size _st_ (equal to the reciprocal of the largest eigenvalue of _N_^1 **X** _T_ **X** ).
We also tried the approximate backtracking line search for _st_ ∈[0 _,_ 0_._ 5]. We
see that Nesterov’s momentum method yields substantial speedups, over the
generalized gradient, and backtracking is faster than the fixed stepsize choice.
In the latter comparison this does not even take into account the cost of
computing the largest eigenvalue of _N_^1 **X** _T_ **X** : backtracking can speed up the
computation by allowing a larger stepsize to be used when it is appropri-
ate. Note that we are simply counting the number of iterations, rather than
measuring the total elapsed time; however the Nesterov momentum steps are
only slightly more costly than the generalized gradient steps. We also note
that the relative error and hence the iterates _f_ ( _βt_ ) are not strictly monotone
decreasing for Nesterov’s momentum method.
♦


###### COORDINATE DESCENT 109

```
5 10 15 20
```
```
1e−08
```
```
1e−06
```
```
1e−04
```
```
1e−02
```
```
Number of Steps k
```
```
Relative Error
```
```
Proximal gradient
with backtrack
Nesterov momentum
with backtrack
```
```
0 10 20 30 40 50
```
```
1e−07
```
```
1e−05
```
```
1e−03
```
```
1e−01
```
```
Number of Steps k
```
```
Relative Error
```
```
Sparse— λ =0. 7 Dense— λ =0. 05
```
**Figure 5.7** _Performance of the generalized gradient and Nesterov momentum meth-
ods for a sample lasso problem described in the text. The vertical axis shows the error
measure_ [ _f_ ( _βt_ )− _f_ ( _β_ ∗)] _/f_ ( _β_ ∗) _, whereβ_ ∗ _is the minimizer, andβtis the solution
aftertsteps. On the left, the solutionβ_ ∗ _is sparse with just_ 20 _of the_ 500 _coefficients
not equal to zero; on the right,_ 237 _of the coefficients are nonzero._

In computational terms, the momentum updates (5.32) and (5.33) only in-
volve slightly more work than an ordinary gradient update. Nonetheless, Nes-
terov (2007) proves that the change yields a significant improvement in conver-
gence rates: in particular, whenever _g_ satisfies the Lipschitz condition (5.27),
then there is a constant _C >_ 0 such that the iterates satisfy

```
f ( βt )− f ( β ∗)≤
```
###### C

```
( t + 1)^2
‖ β^0 − β ∗‖ 2. (5.35)
```
Consequently, the error _f_ ( _βt_ )− _f_ ( _β_ ∗) decreases at the rateO(1 _/t_^2 ), as opposed
to the slowerO(1 _/t_ ) rate of a nonaccelerated method (see Equation (5.28)).
When _g_ is strongly convex (5.29), the accelerated gradient method again en-
joys a geometric rate of convergence (5.30), although with a smaller con-
traction factor _κ_. More precisely, the nonaccelerated method converges with
a contraction factor determined by the condition number of _g_ , whereas the
accelerated variant converges according to the _square root_ of this condition
number.

### 5.4 Coordinate Descent

Certain classes of problems, among them the lasso and variants, have an ad-
ditional separability property that lends itself naturally to a coordinate mini-
mization algorithm. _Coordinate descent_ is an iterative algorithm that updates


###### 110 OPTIMIZATION METHODS

from _βt_ to _βt_ +1by choosing a single coordinate to update, and then performing
a univariate minimization over this coordinate. More precisely, if coordinate
_k_ is chosen at iteration _t_ , then the update is given by

```
βkt +1= arg min
βk
```
```
f
```
###### (

```
βt 1 ,β 2 t,...,βkt − 1 ,βk,βkt +1 ,...,βpt
```
###### )

###### , (5.36)

and _βjt_ +1= _βjt_ for _j_ 6 = _k_. A typical choice would be to cycle through the
coordinates in some fixed order. This approach can also be generalized to _block
coordinate descent_ , in which the variables are partitioned into non-overlapping
blocks (as in the group lasso), and we perform minimization over a single block
at each round.

#### 5.4.1 Separability and Coordinate Descent

When does this procedure converge to the global minimum of a convex func-
tion? One sufficient (but somewhat restrictive) condition is that _f_ be contin-
uously differentiable and strictly convex in each coordinate. However, the use
of various statistical regularizers leads to optimization problems that need not
be differentiable. For such cases, more care is required when using coordinate
minimization, because, as we discuss below, it can become “stuck” at non-
optimal points. One form of problem structure that ensures good behavior
of coordinate minimization is a type of separability condition. In particular,
suppose that the cost function _f_ has the additive decomposition

```
f ( β 1 ,...βp ) = g ( β 1 ,...βp ) +
```
```
∑ p
```
```
j =1
```
```
hj ( βj ) , (5.37)
```
where _g_ :R _p_ →Ris differentiable and convex, and the univariate functions
_hj_ :R→Rare convex (but not necessarily differentiable). An important
example of this problem structure is the standard lasso program (2.5), with
_g_ ( _β_ ) = 21 _N_ ‖ **y** − **X** _β_ ‖^22 and _hj_ ( _βj_ ) = _λ_ ·| _βj_ |. Tseng (1988, 2001) shows that
for any convex cost function _f_ with the separable structure (5.37), the co-
ordinate descent Algorithm (5.36) is guaranteed to converge to the global
minimizer. The key property underlying this result is the separability of the
nondifferentiable component _h_ ( _β_ ) =

∑ _p
j_ =1 _hj_ ( _βj_ ), as a sum of functions of
each individual parameter. This result implies that coordinate descent is a
suitable algorithm for the lasso as well as certain other problems discussed in
this book. In contrast, when the nondifferentiable component _h_ is _not_ sepa-
rable, coordinate descent is no longer guaranteed to converge. Instead, it is
possible to create problems for which it will become “stuck,” and fail to reach
the global minimum.

_Example 5.7. Failure of coordinate descent._ As an illustration, we con-
sider an instance of a problem that violates (5.37)—the fused lasso, dis-
cussed in Section 4.5. Here the nondifferentiable component takes the form
_h_ ( _β_ ) =

```
∑ p
j =1| βj − βj −^1 |. Figure 5.8 illustrates the difficulty. We created a
```

###### COORDINATE DESCENT 111

fused lasso problem with 100 parameters, with the solutions for two of the
parameters, _β_ 63 = _β_ 64 ≈ −1. The left and middle panels show slices of the
function _f_ varying _β_ 63 and _β_ 64 , with the other parameters set to the global
minimizers. We see that the coordinate-wise descent algorithm has got stuck
in a corner of the response surface, and is stationary under single-coordinate
moves. In order to advance to the minimum, we have to move both _β_ 63 and
_β_ 64 together.

```
−1.0 −0.5 0.0
102.0
```
```
102.5
```
```
103.0
```
```
103.5
```
```
104.0
```
```
−1.0 −0.5 0.0
102.0
```
```
102.5
```
```
103.0
```
```
103.5
```
```
104.0
```
```
−1.0 −0.5 0.0
```
```
−1.0
```
```
−0.5
```
```
0.0
```
```
β 63 β 63
```
```
β^64
```
```
β 64
```
```
f(
β)
f(
β)
```
**Figure 5.8** _Failure of coordinate-wise descent in a fused lasso problem with 100
parameters. The optimal values for two of the parameters,β_ 63 _andβ_ 64 _, are both_
− 1_._ 05 _, as shown by the dot in the right panel. The left and middle panels show
slices of the objective functionfas a function ofβ_ 63 _andβ_ 64 _, with the other pa-
rameters set to the global minimizers. The coordinate-wise minimizer over bothβ_ 63
_andβ_ 64 _(separately) is -0.69, rather than_ − 1_._ 05_. The right panel shows contours of
the two-dimensional surface. The coordinate-descent algorithm is stuck at the point_
(− 0_._ 69 _,_ − 0_._ 69)_. Despite being strictly convex, the surface has corners, in which the
coordinate-wise procedure can get stuck. In order to travel to the minimum we have
to move bothβ_ 63 _andβ_ 64 _together._

♦
Tseng (2001) gives a more general and intuitive condition for convergence
of coordinate descent, one which depends on the behavior of the directional
derivatives of the cost function _f_. For a given direction ∆∈R _p_ , the lower
directional derivative at _β_ is given by

```
f ′( β ; ∆) : = lim inf
s ↓ 0
```
```
f ( β + s ∆)− f ( β )
s
```
###### . (5.38)

In rough terms, a coordinate descent algorithm only gains information about
directions of the form **_e_** _j_ =

###### (

```
0 , 0 , ... 0 , ej, 0 , ..., 0
```
###### )

for some _ej_ ∈R.
Therefore, suppose that the coordinate descent algorithm reaches a point _β_
for which

```
f ′( β ; ej )≥0 for all j = 1 ,...,p , and coordinate vectors ej. (5.39)
```

###### 112 OPTIMIZATION METHODS

At any such point, there are no coordinate directions that will further reduce
the function value. Therefore, we require that any _β_ satisfying the condi-
tion (5.39) also satisfies _f_ ′( _β_ ; ∆)≥0 for all directions ∆∈R _p_. Tseng (2001)
calls this condition _regularity_. It rules out a situation like that of Figure 5.8,
in which moves along all coordinate directions fail to decrease the criterion,
but an oblique move does improve the criterion. As a side-note, it is worth
observing that separability of the nondifferentiable component of the objective
function implies regularity, but that there are nondifferentiable and nonsepa-
rable functions that are still regular. An example is the function

```
h ( β 1 ,...,βp ) =| β | T P | β | =
```
```
∑ p
```
```
j,k =1
```
```
| βj | Pjk | βk | , (5.40)
```
where **P** is a symmetric positive definite matrix.

#### 5.4.2 Linear Regression and the Lasso

Recall the optimization problem (2.5) that underlies the lasso estimator. As
discussed in Chapter 2, the optimality conditions for this problem are

###### −

###### 1

###### N

###### ∑ N

```
i =1
```
```
( yi − β 0 −
```
```
∑ p
```
```
k =1
```
```
xikβk ) xij + λsj = 0 , (5.41)
```
where _sj_ ∈ sign( _βj_ ) for _j_ = 1 _,_ 2 _,...,p_. The coordinate descent proce-
dure simply solves these equations in a cyclical fashion, iterating over _j_ =
1 _,_ 2 _,...,p,_ 1 _,_ 2 _,..._.
Since the intercept _β_ 0 is typically not penalized, we can center both the
response _yi_ and the covariate vectors _xi_ by their means, and then omit the in-
tercept in the calculations of the other _βj_. (Of course, as in OLS, the intercept

is calculated at the end using the _β_ ̂ 0 = ̄ _y_ −

```
∑ p
k =1 x ̄ k
β ̂ k .) To simplify matters,
```
we define the _partial residualr_ ( _ij_ )= _yi_ −

###### ∑

_k_ 6 = _jxikβ_ ̂ _k_ , which removes from the
outcome the current fit from all but the _jth_ predictor. Then the solution for
_β_ ̂ _j_ satisfies

```
β ̂ j =
```
```
S λ
```
###### (

```
1
N
```
###### ∑ N

```
i =1 r
```
```
( j )
i xij
```
###### )

```
1
N
```
###### ∑ N

```
i =1 x
```
```
2
ij
```
###### , (5.42)

whereas beforeS _λ_ ( _θ_ ) = sign( _θ_ )(| _θ_ |− _λ_ )+is the soft-thresholding operator. If
in addition to centering, the variables are standardized to have unit variance
(typically a good idea, especially if the variables are in different units), then
the update has the particularly succinct form

```
β ̂ j =S λ ( β ̃ j ) , (5.43)
```
where _β_ ̃ _j_ is the simple linear regression coefficient of the partial residual on


###### COORDINATE DESCENT 113

variable _j_. If instead we have an elastic net penalty (1− _α_ ) _β_^2 _j/_ 2 + _α_ | _βj_ |, the
update (5.42) becomes

```
β ̂ j =
```
```
S αλ
```
###### (

```
1
N
```
###### ∑ N

```
i =1 r
```
```
( j )
i xij
```
###### )

```
1
N
```
###### ∑ N

```
i =1 x
2
ij + (1− α ) λ
```
###### , (5.44)

or in the standardized case

```
β ̂ j = S αλ (
```
```
β ̃ j )
1 + (1− α ) λ
```
###### . (5.45)

There are a number of strategies for making these operations efficient. For
ease of notation we assume that the predictors are standardized to have mean
zero and variance one; for nonstandardized data, the steps are similar.

_Partial residuals._ Note that we can write _r_ ( _ij_ )= _yi_ −

###### ∑

```
k 6 = jxik
β ̂ k = ri +
```
_xijβ_ ̂ _j_ , where _ri_ denotes the current residual for observation _i_. Since the vectors
{ **x** _j_ } _pj_ =1are standardized, we can write

```
1
N
```
###### ∑ N

```
i =1
```
```
xijri ( j )=
```
###### 1

###### N

###### ∑ N

```
i =1
```
```
xijri + β ̂ j, (5.46)
```
a representation that reveals the computational efficiency of coordinate de-
scent. Many coefficients are zero and remain so after thresholding, and so
nothing needs to be changed. The primary cost arises from computing the
sum in Equation (5.46), which requiresO( _N_ ) operations. On the other hand,
if a coefficient does change after the thresholding, _ri_ is changed inO( _N_ ) and
the step costsO(2 _N_ ). A full cycle through all _p_ variables costsO( _pN_ ) oper-
ations. Friedman et al. (2010 _b_ ) refer to this as _naive updating_ , since it works
directly with the inner products of the data.

_Covariance updating._ Naive updating is generally less efficient than _covari-
ance updating_ when _N_  _p_ and _N_ is large. Up to a factor 1 _/N_ , we can write
the first term on the right of expression (5.46)

```
∑ N
```
```
i =1
```
```
xijri =〈 x j, y 〉−
```
###### ∑

```
k || β ̂ k | > 0
```
```
〈 x j, x k 〉 β ̂ k. (5.47)
```
In this approach, we compute inner products of each feature with **y** initially,
and then each time a new feature **x** _k_ enters the model for the first time, we
compute and store its inner product with all the rest of the features, requiring
O( _Np_ ) operations. We also store the _p_ gradient components (5.47). If one of
the coefficients currently in the model changes, we can update each gradient in
O( _p_ ) operations. Hence with _k_ nonzero terms in the model, a complete cycle
costsO( _pk_ ) operations if no new variables become nonzero, and costsO( _Np_ )
for each new variable entered. Importantly, each step does not require making
O( _N_ ) calculations.


###### 114 OPTIMIZATION METHODS

_Warm starts._ Typically one wants a sequence of lasso solutions, say for a
decreasing sequence of values{ _λ`_ } _L_ 0. It is easy to see that the largest value
that we need consider is

```
λ 0 = N^1 max
j
```
```
|〈 x j, y 〉| , (5.48)
```
since any value larger would yield an empty model. One strategy, as employed
by the R packageglmnet, is to create a sequence of values{ _λ`_ } _L`_ =0decreasing
from _λ_ 0 down to _λL_ = _λ_ 0 ≈0 on a log scale. The solution _β_ ̂( _λ`_ ) is typically a

very good warm start for the solution _β_ ̂( _λ`_ +1). Likewise the number of nonzero
elements tends to increase slowly with _`_ , starting at zero at _`_ = 0. Doubling
the number _L_ = 100 to say 2 _L_ does not double the compute time, since the
warm starts are much better, and fewer iterations are needed each time.

_Active-set convergence._ After a single iteration through the set of _p_ variables
at a new value _λ`_ , starting from the warm start _β_ ̂( _λ`_ − 1 ), we can define the
active setAto index those variables with nonzero coefficients at present.
The idea is to iterate the algorithm using only the variables inA. Upon
convergence, we do a pass through all the omitted variables. If they all pass
the simple exclusion test _N_^1 |〈 **x** _j,_ **_r_** 〉| _< λ`_ , where **_r_** is the current residual, we
have the solution for the entire set of _p_ variables. Those that fail are included
inAand the process is repeated. In practice we maintain an _ever-active_ set—
any variable that had a nonzero coefficient somewhere along the path until
present is kept inA.

_Strong-set convergence._ Similar to the above, we identify a subset of variables
likely to be candidates for the active set. Let **_r_** be the residual at _β_ ̂( _λ`_ − 1 ),
and we wish to compute the solution at _λ`_. Define the strong setSas

```
S={ j || N^1 〈 x j, r 〉| > λ` −( λ` − 1 − λ` )}. (5.49)
```
We now compute the solution restricting attention to _only_ the variables in
S. Apart from rare exceptions, the strong set will cover the optimal active
set. Strong rules are extremely useful, especially when _p_ is very large (in the
100Ks or millions). We discuss them in some detail in Section 5.10.

_Sparsity._ The main computational operation in all the above is an inner-
product of a pair of _N_ -vectors, at least one of which is a column of the design
matrix **X**. If **X** is sparse, we can compute these inner products efficiently.
An example is document classification, where often the feature vector follows
the so-called “bag-of-words” model. Each document is scored for the pres-
ence/absence of each of the words in the entire dictionary under consideration
(sometimes counts are used, or some transformation of counts). Since most
words are absent, the feature vector for each document is mostly zero, and
so the entire matrix is mostly zero. Such matrices can be stored efficiently in
_sparse-column format_ , where we store only the nonzero entries and the coor-
dinates where they occur. Now when we compute inner products, we sum only
over the nonzero entries.


###### COORDINATE DESCENT 115

_Penalty strength._ The default formulation applies the same penalty param-
eter _λ_ to each term in the model. It is a simple matter to include a relative
penalty strength _γj_ ≥0 per variable, making the overall penalty

```
λ
```
```
∑ p
```
```
j =1
```
```
γjPα ( βj ). (5.50)
```
This allows for some _γj_ to be zero, which means those variables are always in
the model, unpenalized.

_Parameter bounds._ Coordinate descent also makes it easy to set upper and
lower bounds on each parameter:

```
Lj ≤ βj ≤ Uj, (5.51)
```
where typically−∞ ≤ _Lj_ ≤ 0 ≤ _Uj_ ≤ ∞. For example, we sometimes want
to constrain all coefficients to be nonnegative. One simply computes the coor-
dinate update, and if the parameter violates the bound, it is set to the closest
boundary.

#### 5.4.3 Logistic Regression and Generalized Linear Models

Here we move from squared-error loss to other members of the exponential
family—the so-called _generalized linear models_. For simplicity, we focus on the
most prominent (nonlinear) member of this class—namely, logistic regression.
In logistic regression, the response is binary, and can be modeled as a class
label _G_ taking the values−1 or 1. The standard logistic model represents the
class probabilities as a linear model in the log-odds

```
log
```
```
Pr( G =− 1 | x )
Pr( G = 1| x )
```
```
= β 0 + xTβ. (5.52)
```
See Section 3.2 for more detail.
We consider fitting this model by regularized maximum (binomial) likeli-
hood. Introducing the shorthand notation _p_ ( _xi_ ; _β_ 0 _,β_ ) = Pr( _G_ = 1| _xi_ ) for the
probability (5.52) of observation _i_ , we maximize the penalized log-likelihood

```
1
N
```
###### ∑ N

```
i =1
```
###### {

```
I ( gi = 1) log p ( xi ; β 0 ,β ) + I ( gi =−1) log(1− p ( xi ; β 0 ,β ))
```
###### }

```
− λPα ( β ).
```
(5.53)
Denoting _yi_ = _I_ ( _gi_ =−1), the log-likelihood part of (5.53) can be written in
the more explicit form

```
` ( β 0 ,β ) =
```
###### 1

###### N

###### ∑ N

```
i =1
```
###### [

```
yi ·( β 0 + xTiβ )−log(1 + eβ^0 + x
```
```
Tiβ
)
```
###### ]

###### , (5.54)

which corresponds to a concave function of the parameters. By way of


###### 116 OPTIMIZATION METHODS

background, the Newton algorithm for maximizing the (unpenalized) log-
likelihood (5.54) amounts to iteratively reweighted least squares. Hence,
if the current estimates of the parameters are ( _β_ ̃ 0 _,β_ ̃), we form a second-
order Taylor expansion about current estimates. In terms of the shorthand
_p_ ̃( _xi_ ) = _p_ ( _xi_ ; _β_ ̃ 0 _,β_ ̃), and _wi_ = ̃ _p_ ( _xi_ )(1− _p_ ̃( _xi_ )), this Taylor expansion leads to
the quadratic objective function

```
`Q ( β 0 ,β ) =−
```
###### 1

###### 2 N

###### ∑ N

```
i =1
```
```
wi ( zi − β 0 − xTiβ )^2 + C ( ̃ β 0 ,β ̃)^2. (5.55)
```
where _zi_ = _β_ ̃ 0 + _xTiβ_ ̃+ _p_ ̃( _xyii_ )(1− _p_ ̃−( _xp_ ̃( _ix_ ) _i_ )) is the current working response. The
Newton update is obtained by minimizing _`Q_ , which is a simple weighted-
least-squares problem. In order to solve the regularized problem, one could
apply coordinate descent directly to the criterion (5.53). A disadvantage of
this approach is that the optimizing values along each coordinate are not
explicitly available and require a line search. In our experience, it is better to
apply coordinate descent to the quadratic approximation, resulting in a nested
algorithm. For each value of _λ_ , we create an outer loop which computes the
quadratic approximation _`Q_ about the current parameters ( _β_ ̃ 0 _,β_ ̃). Then we
use coordinate descent to solve the penalized weighted least-squares problem

```
minimize
( β 0 ,β )∈R p +1
```
```
{− `Q ( β 0 ,β ) + λPα ( β )}. (5.56)
```
By analogy with Section 5.3.3, this is known as a generalized Newton algo-
rithm, and the solution to the minimization problem (5.56)) defines a _proximal
Newton map_ (see the paper (Lee et al. 2014) for details). Overall, the proce-
dure consists of a sequence of nested loops:

outer loop:Decrement _λ_.

middle loop:Update the quadratic approximation _`Q_ using the current pa-
rameters ( _β_ ̃ 0 _,β_ ̃).

inner loop:Run the coordinate descent algorithm on the penalized
weighted-least-squares problem (5.56).
When _p_  _N_ , one cannot run _λ_ all the way to zero, because the sat-
urated logistic regression fit is undefined (parameters wander off to±∞in
order to achieve probabilities of 0 or 1). Also, the Newton algorithm is not
guaranteed to converge without step-size optimization (Lee, Lee, Abneel and
Ng 2006). Theglmnetprogram does not implement any checks for divergence;
this would slow it down, and when used as recommended, it does not seem to
be necessary. We have a closed form expression for the starting solutions, and
each subsequent solution is warm-started from the previous close-by solution,
which generally makes the quadratic approximations very accurate. We have
not encountered any divergence problems so far.
Theglmnetpackage generalizes this procedure to other GLMs, such as


###### A SIMULATION STUDY 117

multiclass logistic regression, the Poisson log-linear model and Cox’s propor-
tional hazards model for survival data. More details are given in Chapter 3.
The speed of this procedure is studied in Section 5.5.

### 5.5 A Simulation Study

Both the coordinate descent algorithm and Nesterov’s composite gradient
method are simple and computationally efficient approaches for solving the
lasso. How do they compare in terms of computational cost per iteration? If
(at a given iteration) the current iterate _βt_ has _k_ nonzero coefficients, each
pass of coordinate descent over all _p_ predictors (using naive updating) takes
O( _pN_ + _kN_ ) operations. On the other hand, the generalized gradient up-
date (5.31) requiresO( _kN_ ) operations to compute the matrix-vector product
**X** _β_ , and thenO( _pN_ ) to compute the product **X** _T_ ( **y** − **X** _β_ ), again a total of
O( _pN_ + _kN_ ) operations.
In order to examine more closely the relative efficiency of coordinate de-
scent, proximal gradient descent, and Nesterov’s momentum method, we car-
ried out a small simulation study.^3 We generated an _N_ × _p_ predictor matrix
**X** with standard Gaussian entries and pairwise correlation 0 or 0.5 between
the features. Coefficients _βj_ were defined by| _βj_ |= exp[−_._ 5( _u_ ( _j_ −1))^2 ] with
_u_ =

###### √

_π/_ 20 and alternating signs +1 _,_ − 1 _,_ +1 _,..._. Then the outcome _yi_ was
generated as

```
yi =
```
```
∑ p
```
```
j =1
```
```
xijβj + σεi (5.57)
```
with _σ_ chosen so that the signal to noise ratio Sd[E( _yi_ )] _/σ_ equals 3. Table 5.1
shows the average (standard error) of CPU times for coordinate descent, gener-
alized gradient and Nesterov’s momentum methods, for a scenario with _N > p_
and another with _N < p_. Shown is the total time over a path of 20 values
of the regularization parameter _λ_. Warm starts were used in each case, with

**Table 5.1** _Lasso for linear regression: Average (standard error) of CPU times over
ten realizations, for coordinate descent, generalized gradient, and Nesterov’s momen-
tum methods. In each case, time shown is the total time over a path of 20λvalues._

```
N = 10000 , p = 100 N = 200 , p = 10000
Correlation 0 0.5 0 0.5
Coordinate descent 0.110 (0.001) 0.127 (0.002) 0.298 (0.003) 0.513 (0.014)
Proximal gradient 0.218 (0.008) 0.671 (0.007) 1.207 (0.026) 2.912 (0.167)
Nesterov 0.251 (0.007) 0.604 (0.011) 1.555 (0.049) 2.914 (0.119)
```
convergence defined as the maximum change in the parameter vector being
less than 10−^4. An approximate backtracking line search was used for the

(^3) We thank Jerome Friedman for the programs used in this section.


###### 118 OPTIMIZATION METHODS

**Table 5.2** _Lasso for logistic regression: average (standard error) of CPU times over
ten realizations, for coordinate descent, generalized gradient, and Nesterov’s momen-
tum methods. In each case, time shown is the total time over a path of 20λvalues._

```
N = 10000 , p = 100 N = 200 , p = 10000
Correlation 0 0.5 0 0.5
Coordinate descent 0.309 (0.086) 0.306 (0.086) 0.646 (0.006) 0.882 (0.026)
Proximal gradient 2.023 (0.018) 6.955 (0.090) 2.434 (0.095) 4.350 (0.133)
Nesterov 1.482 (0.020) 2.867 (0.045) 2.910 (0.106) 8.292 (0.480)
```
latter two methods. We see that coordinate descent is 2–6 times faster than
the other methods, with a greater speedup in the _p > N_ case. Interestingly,
momentum does not provide a consistent speedup over proximal gradient de-
scent, as the aforementioned theory would suggest. Our investigation into this
suggests that the warm starts are the reason: by starting close to the solution,
the “zig-zagging”, that is ameliorated by the momentum term, is not nearly
as much of a problem as it is when starting far from the solution.
Table 5.2 shows the corresponding results for logistic regression. The pre-
dictors were generated as before, but now there are 15 nonzero _βj_ with alter-
nating signs, and| _βj_ |= 15− _j_ + 1. Then defining _pi_ = 1 _/_ (1 + exp(−

###### ∑

_xijβj_ ))
we generate 0/1 _yi_ with Prob( _yi_ = 1) = _pi_.
We see that coordinate descent is 5–10 times faster than the other methods,
with a greater speedup in the _p > N_ case. Again, momentum does not provide
a consistent speedup over proximal gradient descent.
The reader should take comparisons like those above with a grain of salt, as
the performance of a method will depend on the details of its implementation.
Further suspicion should arise, since two of the authors of this text are co-
authors of the method (coordinate descent) that performs best. For our part,
we can only say that we have tried to be fair to all methods and have coded all
methods as efficiently as we could. More importantly, we have made available
all of the scripts and programs to generate these results on the book website,
so that the reader can investigate the comparisons further.

### 5.6 Least Angle Regression

Least angle regression, also known as the _homotopy_ approach, is a procedure
for solving the lasso with squared-error loss that delivers the entire solution
path as a function of the regularization parameter _λ_. It is a fairly efficient
algorithm, but does not scale up to large problems as well as some of the other
methods in this chapter. However it has an interesting statistical motivation
and can be viewed as a kind of “democratic” version of forward stepwise
regression.
Forward stepwise regression builds a model sequentially, adding one vari-
able at a time. At each step, it identifies the best variable to include in the
_active set_ , and then updates the least-squares fit to include all the active vari-


###### LEAST ANGLE REGRESSION 119

```
ables. Least angle regression (LAR) uses a similar strategy, but only enters “as
much” of a predictor as it deserves. At the first step it identifies the variable
most correlated with the response. Rather than fit this variable completely,
the LAR method moves the coefficient of this variable continuously toward
its least-squares value (causing its correlation with the evolving residual to
decrease in absolute value). As soon as another variable catches up in terms
of correlation with the residual, the process is paused. The second variable
then joins the active set, and their coefficients are moved together in a way
that keeps their correlations tied and decreasing. This process is continued
until all the variables are in the model, and ends at the full least-squares fit.
The details are given in Algorithm 5.1. Although the LAR algorithm is stated
in terms of correlations, since the input features are standardized, it is equiva-
lent and easier to work with inner products. The number of terms K at step 3
requires some explanation. If p > N −1, the LAR algorithm reaches a zero
residual solution after N −1 steps (the−1 is because there is an intercept in
the model, and we have centered the data to take care of this).
```
```
Algorithm 5.1 Least Angle Regression.
```
1. Standardize the predictors to have mean zero and unit _`_ 2 norm. Start with
    the residual **_r_** 0 = **y** − ̄ **y** , _β_^0 = ( _β_ 1 _,β_ 2 _,...,βp_ ) = **0**.
2. Find the predictor **x** _j_ most correlated with **_r_** 0 ; i.e., with largest value for
    |〈 **x** _j,_ **_r_** 0 〉|. Call this value _λ_ 0 , define the active setA={ _j_ }, and **X** A, the
    matrix consisting of this single variable.
3. For _k_ = 1 _,_ 2 _,...,K_ = min( _N_ − 1 _,p_ ) do:

```
(a) Define the least-squares direction δ = λk^1 − 1 ( X T A X A)−^1 X T A r k − 1 , and de-
fine the p -vector ∆ such that ∆A= δ , and the remaining elements are
zero.
(b) Move the coefficients β from βk −^1 in the direction ∆ toward their least-
squares solution on X A: β ( λ ) = βk −^1 + ( λk − 1 − λ )∆ for 0 < λ ≤ λk − 1 ,
keeping track of the evolving residuals r ( λ ) = y − X β ( λ ) = r k − 1 −
( λk − 1 − λ ) X ∆.
(c) Keeping track of|〈 x `, r ( λ )〉|for ` / ∈ A, identify the largest value of λ
at which a variable “catches up” with the active set; if the variable has
index j , that means|〈 x j, r ( λ )〉|= λ. This defines the next “knot” λk.
(d) SetA=A∪{ j }, βk = β ( λk ) = βk −^1 + ( λk − 1 − λk )∆, and r k = y − X βk.
```
4. Return the sequence{ _λk, βk_ } _K_ 0.

```
We make a few observations to clarify the steps in the algorithm. In step 3b,
it is easy to check that|〈 x j, r ( λ )〉|= λ, ∀ j ∈ A—that is, the correlations
remain tied along this path, and decrease to zero with λ. In fact β^0 = βk −^1 +
λk − 1 ∆ is the least-squares coefficient vector corresponding to the subsetA.
By construction the coefficients in LAR change in a piecewise linear fash-
ion. Figure 5.9 [left panel] shows the LAR coefficient profile evolving as a
```

###### 120 OPTIMIZATION METHODS

```
0 5 10 15
```
```
−1.5 −1.0 −0.5 0.0 0.5 1.0 1.5
```
```
Coefficients
```
```
Least Angle Regression
```
```
0 5 10 15 20
```
```
−1.5 −1.0 −0.5 0.0 0.5 1.0 1.5
```
```
Coefficients
```
```
Lasso
```
```
ℓ 1 ArcLength ℓ 1 ArcLength
```
**Figure 5.9** _Left panel shows the LAR coefficient profiles on the simulated data, as
a function of theL_^1 _arc length. The right panel shows the lasso profile. They are
identical until the red coefficient crosses zero at an arc length of about_ 16_._

function of their _`_ 1 arc length.^4 Note that we do not need to take small steps
and recheck the correlations in step 3c. Variable _`_ “catching up” means that
|〈 **x** _`,_ **_r_** ( _λ_ )〉|= _λ_ , a pair of equations linear in _λ_. We solve for _λ_ for each _` /_ ∈A
and pick the largest (Exercise 5.9).
The right panel of Figure 5.9 shows the lasso coefficient profiles on the
same data. They are almost identical to those in the left panel, and differ
for the first time when the pink coefficient passes back through zero. These
observations lead to a simple modification in step 3c of the LAR algorithm
that gives the entire lasso path, which is also piecewise-linear:

3(c)+ _lasso modification_ : If a nonzero coefficient crosses zero before the next
variable enters, drop it fromAand recompute the current joint least-
squares direction.

Notice in the figure that the pink coefficient remains zero for a while, and then
it becomes active again, but this time negative.
We can give a heuristic argument for why these procedures are so similar.
As observed, we have at any stage of the algorithm

```
x Tj ( y − X β ( λ )) = λ · sj, ∀ j ∈A , (5.58)
```
where _sj_ ∈{− 1 _,_ 1 }indicates the sign of the inner-product, and _λ_ is the com-

(^4) The _`_ 1 arc-length of a differentiable curve{ _s_ 7→ _β_ ( _s_ ) | _s_ ∈ [0 _,S_ ]}is given by
TV( _β,S_ ) =

###### ∫ S

0 ‖
_β_ ̇( _s_ )‖ 1 _ds_ , where _β_ ̇( _s_ ) = _∂β_ ( _s_ ) _/∂s_. For the piecewise-linear LAR coeffi-
cient profile, this amounts to summing the _`_ 1 -norms of the changes in coefficients from step
to step.


###### ALTERNATING DIRECTION METHOD OF MULTIPLIERS 121

mon value. Also by definition of the LAR active set,| **x** _Tk_ ( **y** − **X** _β_ ( _λ_ ))|≤ _λ_ ∀ _k_ 6∈
A. Now consider the lasso criterion^5

```
R ( β ) =^12 ‖ y − X β ‖^22 + λ ‖ β ‖ 1. (5.59)
```
LetBbe the active set of variables in the solution for a given value of _λ_. For
these variables _R_ ( _β_ ) is differentiable, and the stationarity conditions give

```
x Tj ( y − X β ) = λ ·sign( βj ) , ∀ j ∈B. (5.60)
```
Comparing (5.60) with (5.58), we see that they are identical only if the sign
of _βj_ matches the sign of the inner product. That is why the LAR algorithm
and lasso start to differ when an active coefficient passes through zero; condi-
tion (5.60) is violated for that variable, and it is removed from the active set
Bin step 3(c)+. Exercise 5.9 shows that these equations imply a piecewise-
linear coefficient profile as _λ_ decreases, as was imposed in the LAR update.
The stationarity conditions for the nonactive variables require that

```
| x Tk ( y − X β )|≤ λ, ∀ k 6∈B , (5.61)
```
which again agrees with the LAR algorithm.
The LAR algorithm exploits the fact that the coefficient paths for the lasso
are piecewise linear. This property holds for a more general class of problems;
see Rosset and Zhu (2007) for details.

### 5.7 Alternating Direction Method of Multipliers

The _alternating direction method of multipliers_ (ADMM) is a Lagrangian-
based approach that has some attractive features for large-scale applications.
It is based on a marriage of different ideas that developed over a long period
of time. Here we provide a brief overview, referring the reader to Boyd et
al. (2011) for a comprehensive discussion.
Consider a problem of the form

```
minimize
β ∈R m,θ ∈R n
```
```
f ( β ) + g ( θ ) subject to A β + B θ = c , (5.62)
```
where _f_ :R _m_ →Rand _g_ :R _n_ →Rare convex functions, and **A** ∈R _d_ × _m_
and **B** ∈R _d_ × _n_ are (known) matrices of constraints, and _c_ ∈R _d_ is a constraint
vector. To solve this problem we introduce a vector _μ_ ∈R _d_ of Lagrange
multipliers associated with the constraint, and then consider the augmented
Lagrangian

```
Lρ ( β,θ,μ ) : = f ( β ) + g ( θ ) +〈 μ, A β + B θ − c 〉+
ρ
2
```
```
‖ A β + B θ − c ‖^22 , (5.63)
```
(^5) We have omitted the factor 1
_N_ , to stay faithful to the original LAR procedure; all values
of _λ_ are hence larger by a factor of _N_.


###### 122 OPTIMIZATION METHODS

where _ρ >_ 0 is a small fixed parameter. The quadratic term involving _ρ_ is an
augmented Lagrangian that enforces the constraint in a smoother fashion. The
ADMM algorithm is based on minimizing the augmented Lagrangian (5.63)
successively over _β_ and _θ_ , and then applying a dual variable update to _μ_.
Doing so yields the updates

```
βt +1= arg min
β ∈R m
```
```
Lρ ( β,θt,μt ) (5.64a)
```
```
θt +1= arg min
θ ∈R n
```
```
Lρ ( βt +1 ,θ,μt ) (5.64b)
```
```
μt +1= μt + ρ
```
###### (

```
A βt +1+ B θt +1− c
```
###### )

```
, (5.64c)
```
for iterations _t_ = 0 _,_ 1 _,_ 2 _,..._. The update (5.64c) can be shown to be a dual
ascent step for the Lagrange multiplier vector _μ_. Under relatively mild condi-
tions, one can show that this procedure converges to an optimal solution to
Problem (5.62).
The ADMM framework has several advantages. First, convex problems
with nondifferentiable constraints can be easily handled by the separation of
parameters into _β_ and _θ_. We illustrate this procedure via application to the
lasso, as discussed in the example to follow. A second advantage of ADMM is
its ability to break up a large problem into smaller pieces. For datasets with
large number of observations we break up the data into blocks, and carry out
the optimization over each block. As discussed in more detail in Exercise 5.12,
constraints are included to ensure that the solution vectors delivered by the
optimization over each data block agree with one another at convergence. In
a similar way, the problem can be split up into feature blocks, and solved in
a coordinated blockwise fashion.

_Example 5.8. ADMM for the lasso._ The Lagrange form of the lasso can be
expressed in equivalent form as

```
minimize
β ∈R p,θ ∈R p
```
###### {

###### 1

###### 2

```
‖ y − X β ‖^22 + λ ‖ θ ‖ 1
```
###### }

```
such that β − θ = 0. (5.65)
```
When applied to this problem, the ADMM updates take the form

```
βt +1= ( X T X + ρ I )−^1 ( X T y + ρθt − μt )
θt +1=S λ/ρ ( βt +1+ μt/ρ )
μt +1= μt + ρ ( βt +1− θt +1).
```
###### (5.66)

Thus, the algorithm involves a ridge regression update for _β_ , a soft-
thresholding step for _θ_ and then a simple linear update for _μ_. The first step
is the main work, and after an initial singular value decomposition of **X** ,
subsequent iterations can be done quickly. The initial SVD requiresO( _p_^3 )
operations, but can be done off-line, whereas subsequent iterations have cost
O( _Np_ ). Consequently, after the start-up phase, the cost per iteration is similar
to coordinate descent or the composite gradient method. ♦


###### MINORIZATION-MAXIMIZATION ALGORITHMS 123

**5.8 Minorization-Maximization Algorithms**

In this section, we turn to a class of methods, known either as minorization-
maximization or majorization-minimization (MM) algorithms, that are espe-
cially useful for optimization of nonconvex functions. These belong to the class
of auxiliary-variable methods, in that they are based on introducing extra vari-
ables and using them to majorize (or upper bound) the objective function to
be minimized. Although these methods apply more generally to constrained
problems, here we describe them in application to a simple unconstrained
problem of the form minimize _β_ ∈R _pf_ ( _β_ ), where _f_ :R _p_ →Ris a (possibly)
nonconvex function.
A function Ψ :R _p_ ×R _p_ 7→R^1 majorizes the function _f_ at a point _β_ ∈R _p_
if

```
f ( β )≤Ψ( β,θ ) for all θ ∈R p (5.67)
```
with _equality_ holding when _β_ = _θ_. (Naturally, there is a corresponding defi-
nition of minorization, with the inequality reversed in direction.) Figure 5.10
shows a schematic of a majorizing function.

```
θ β
```
```
f ( β )
```
```
Ψ( β,θ )
```
**Figure 5.10** _Il lustration of a majorizing function for use in an MM algorithm. The
function_ Ψ( _β,θ_ ) _lies on or abovef_ ( _β_ ) _for al lβand is equal tof_ ( _β_ ) _whenβ_ = _θ.
The MM algorithm seeks to minimize the target functionfby solving a sequence of
subproblems involving the majorizing function_ Ψ _and the current iterate._

An MM algorithm for performing an unconstrained minimization of _f_ in-
volves initializing _β_^0 , and then updating via the recursion

```
βt +1= arg min
β ∈R p
```
###### Ψ

###### (

```
β,βt
```
###### )

```
for t = 0 , 1 , 2 ,.... (5.68)
```
By the majorization property (5.67), this scheme generates a sequence for
which the cost _f_ ( _βt_ ) is nonincreasing. In particular, we have

```
f ( βt ) = Ψ( βt,βt )
```
```
( i )
≥ Ψ( βt +1 ,βt )
```
```
( ii )
≥ f ( βt +1) , (5.69)
```

###### 124 OPTIMIZATION METHODS

where inequality (i) uses the fact that _βt_ +1is a minimizer of the function
_β_ 7→Ψ( _β,βt_ ), and inequality (ii) uses the majorization property (5.67). If the
original function _f_ is strictly convex, it can be shown the MM algorithm
converges to the global minimizer.
There are different classes of majorizing functions that are useful for dif-
ferent problems. In general, a good majorization function is one for which
the update (5.68) is relatively easy to compute, at least relative to direct
minimization of _f_. See Lange (2004) for more details.

_Example 5.9. Proximal gradient as an MM algorithm._ Recall from Sec-
tion 5.3.3 the proximal gradient algorithm that can be applied to cost functions
that decompose as a sum _f_ = _g_ + _h_ , where _g_ is convex and differentiable, and
_h_ is convex and (potentially) nondifferentiable. By applying a second-order
Taylor series expansion (with remainder) to _g_ , we obtain

```
f ( β ) = g ( β ) + h ( β )
```
```
= g ( θ ) +〈∇ g ( θ ) ,θ − β 〉+
```
###### 1

###### 2

###### 〈

```
θ − β, ∇^2 g
```
###### (

```
β ′
```
###### )(

```
θ − β
```
###### )〉

```
+ h ( β ) ,
```
where _β_ ′= _sβ_ + (1− _s_ ) _θ_ for some _s_ ∈[0 _,_ 1]. It can be verified that Lipschitz
condition (5.27) on the gradient∇ _g_ implies a uniform upper bound on the
Hessian, namely∇^2 _g_ ( _β_ ′) _L_ **I** _p_ × _p_ , from which we obtain the inequality

```
f ( β )≤ g ( θ ) +〈∇ g ( θ ) , θ − β 〉+
```
###### L

###### 2

```
‖ θ − β ‖^22 + h ( β )
︸ ︷︷ ︸
Ψ( β,θ )
```
###### ,

with equality holding when _θ_ = _β_. Thus, we see that the proximal gradi-
ent method can be viewed as an MM algorithm with a particular choice of
majorizing function. ♦

Apart from a direct bound on the Hessian, there are other ways of deriving
majorizing functions, For example, Jensen’s inequality can be used to derive
the usual EM algorithm as an instance of an MM algorithm (Hunter and
Lange 2004, Wu and Lange 2010). As we discuss in Chapter 8, MM algorithms
turn out to be useful in procedures for sparse multivariate analysis.

### 5.9 Biconvexity and Alternating Minimization

Recall the class of coordinate descent algorithms discussed in Section 5.4.
Algorithms of this form are also useful for optimizing a class of (potentially)
nonconvex functions known as biconvex functions. A function _f_ :R _m_ ×R _n_ →R
is _biconvex_ if for each _β_ ∈R _n_ , the function _α_ 7→ _f_ ( _α,β_ ) is convex, and for
each _α_ ∈R _m_ , the function _β_ 7→ _f_ ( _α,β_ ) is convex. Of course, any function
that is jointly convex in the pair ( _α,β_ ) is also biconvex. But a function can
be biconvex without being jointly convex. For instance, consider the biconvex
function
_f_ ( _α,β_ ) = (1− _αβ_ )^2 for| _α_ |≤ 2 _,_ | _β_ |≤ 2_._ (5.70)


###### BICONVEXITY AND ALTERNATING MINIMIZATION 125

As illustrated in Figure 5.11, it is convex when sliced along lines parallel to
the axes, as required by the definition of biconvexity, but other slices can lead
to nonconvex functions.

```
−2 −1 0 1 2
```
```
0
```
```
5
```
```
10
```
```
15
```
```
20
```
```
25
```
```
−2 −1 0 1 2
```
```
0
```
```
2
```
```
4
```
```
6
```
```
8
```
```
−2 −1 0 1 2
```
```
0
```
```
2
```
```
4
```
```
6
```
```
8
```
```
α
```
```
α
```
```
β
```
```
β
```
```
f(
```
```
α,
```
```
2)
```
```
f(
```
```
−
1 ,β
```
```
)
```
```
f(
```
```
t,t
```
```
)
```
```
t
```
```
f(
α,
β)
```
**Figure 5.11** _Example of a biconvex function. Shown in the top left is the function
f_ ( _α,β_ ) = (1− _αβ_ )^2 _over the range_ − 2 ≤ _α,β_ ≤ 2_. The top right and bottom left
panels show slices of the function forβ_ = 2 _andα_ =− 1_. The bottom right panel
shows the function along the lineα_ = _β_ = _t._

More generally, letA ⊆R _m_ andB ⊆R _n_ be two nonempty and convex
sets, and letC ⊆A×B. For each fixed _α_ ∈Aand _β_ ∈B, the sets

```
C α : ={ β ∈B |( α,β )∈C} , and C β : ={ α ∈A |( α,β )∈C} (5.71)
```
are called the _α_ and _β_ sections ofC. The setC ⊆ A×Bis called a _biconvex
set_ if the sectionC _α_ is convex for each _α_ ∈ A, and the sectionC _β_ is convex
for every _β_ ∈ B. Given a biconvex setC, a function _f_ :C →Ris a _biconvex
function_ if the function _α_ 7→ _f_ ( _α,β_ ) is convex in _α_ for each fixed _β_ ∈B, and
the function _β_ 7→ _f_ ( _α,β_ ) is convex in _β_ for each fixed _α_ ∈A.
Given these ingredients, a biconvex optimization problem has the form
minimize( _α,β_ )∈C _f_ ( _α,β_ ), where the setCis biconvex onA×B, and the objective
function is biconvex onC.
The most obvious method for solving a biconvex optimization problem is


###### 126 OPTIMIZATION METHODS

based on _Alternate Convex Search_ (ACS), which is simply block coordinate
descent applied to the _α_ and _β_ blocks:

(a) Initialize ( _α_^0 _,β_^0 ) at some point inC.

(b) For iterations _t_ = 0 _,_ 1 _,_ 2 _,..._ :

1. Fix _β_ = _βt_ , and perform the update _αt_ +1∈arg min _α_ ∈C _βtf_ ( _α,βt_ ).
2. Fix _α_ = _αt_ +1, and perform the update _βt_ +1∈arg min _β_ ∈C _αt_ +1 _f_ ( _αt_ +1 _,β_ ).

Given the biconvex structure, each of the two updates involve solving a convex
optimization problem. The ACS procedure will be efficient as long as these
convex sub-problems can be solved relatively quickly.
By construction, the sequence of function values{ _f_ ( _αt,βt_ )}∞ _t_ =0is nonin-
creasing. Consequently, if _f_ is bounded from below overC, then the function
values converge to some limiting value. We note that this form of convergence
is relatively weak, and only ensures that the function values converge. The so-
lution sequence{( _αt,βt_ }may not converge, and in some cases may diverge to
infinity. Assuming convergence, to what does the solution sequence converge?
Since a biconvex function _f_ need not be convex in general, we cannot expect
it to converge to the global minimum. All we can say in general is that if it
converges, it converges to a partial optimum.
More specifically, we say that ( _α_ ∗ _,β_ ∗)∈Cis a _partial optimum_ if

```
f ( α ∗ ,β ∗)≤ f ( α ∗ ,β ) for all β ∈C α ∗, and
f ( α ∗ ,β ∗)≤ f ( α,β ∗) for all α ∈C β ∗.
```
_Example 5.10. Alternating subspace algorithm._ One biconvex problem in which
convergence of ACS can be fully characterized is the alternating subspace al-
gorithm for computing the maximal singular vectors/value of a matrix. Given
a matrix **X** ∈R _m_ × _n_ , consider the problem of finding the best rank-one ap-
proximation in the Frobenius norm.^6 This approximation problem can be
formulated in terms of minimizing the objective function

```
f ( α,β,s ) =‖ X − sαβT ‖^2 F (5.72)
```
over vectors _α_ ∈R _m_ and _β_ ∈R _n_ , with‖ _α_ ‖ 2 =‖ _β_ ‖ 2 = 1, and a scalar
_s >_ 0. The ACS procedure for this problem starts with any random unit-
norm initialization for _β_^0 , and then for iterations _t_ = 1 _,_ 2 _,..._ , it performs the
updates

```
αt =
```
```
X βt −^1
‖ X βt −^1 ‖ 2
```
```
, and βt =
```
```
X Tαt
‖ X Tαt ‖ 2
```
###### . (5.73)

The scalar _s_ can be computed as _s_ =‖ **X** _βt_ ‖ 2 at convergence. It can be shown
(see Exercise 5.13 that as long as _β_^0 is not orthogonal to the largest right

(^6) The Frobenius norm of a matrix is the Euclidean norm applied to its vectorized version.


###### SCREENING RULES 127

singular vector, the iterates ( _αt,βt_ ) converge to the left and right singular
vectors of **X** corresponding to the largest singular value of **X**.
The procedure is related to the _power method_ for finding the largest eigen-
vector of a symmetric positive semi-definite matrix. The _βt_ iterates for the
right singular vector have the form

```
βt +1=
```
```
X T X βt
‖ X T X βt ‖ 2
```
###### , (5.74)

with similar updates for _αt_ in terms of **XX** _T_. Consequently, the procedure
simply “powers up” the operator **X** _T_ **X** , with the normalization driving all
but the largest eigenvalue to zero. See De Leeuw (1994) and Golub and Loan
(1996,§7.3) for further details on the power method. ♦

In Chapter 7, we present Algorithm 7.2 on page 189 as another example
of an ACS procedure.

### 5.10 Screening Rules

As seen in Section 5.6, inner products play an important role in the lasso
problem. For simplicity we assume all variables are mean centered (so we can
ignore the intercept), and we consider solving the lasso problem^7

```
minimize
β ∈R p
```
###### 1

###### 2

```
‖ y − X β ‖^22 + λ ‖ β ‖ 1 (5.75)
```
with a decreasing sequence of values for _λ_. The first variable to enter the
model has largest absolute inner-product _λ_ max= max _j_ |〈 **x** _j,_ **y** 〉|, which also
defines the entry value for _λ_. Also, at any stage, all variables **x** _j_ in the active
set have|〈 **x** _j,_ **y** − **y** ˆ _λ_ 〉|= _λ_ , and all those out have smaller inner-products with
the residuals. Hence one might expect a priori that predictors having small
inner products with the response are not as likely to have a nonzero coefficient
as compared to those with larger inner products. Based on this intuition, one
might be able to eliminate predictors from the problem, and thereby reduce
the computational load. For example, in some genomic applications we might
have millions of variables (SNPs), and anticipate fitting models with only a
handful of terms. In this section, we discuss screening rules that exploit this
intuition, and have the potential to speed up the computation substantially
while still delivering the exact numerical solution.
We begin our discussion with the “dual polytope projection” (DPP) rule
(Wang, Lin, Gong, Wonka and Ye 2013). Suppose we wish to compute a lasso
solution at _λ < λ_ max. The DPP rule discards the _jth_ variable if

```
| x Tj y | < λ max−‖ x j ‖ 2 ‖ y ‖ 2
λ max− λ
λ
```
###### (5.76)

(^7) In this section we have omitted the 1
_N_ in the first part of the objective (to match the
referenced formulas); this increases the scale of _λ_ by a factor _N_.


###### 128 OPTIMIZATION METHODS

It may come as a surprise that such a rule can work, as it surprised us
when we first saw it. We know that in a linear regression, a predictor can
be insignificant on its own, but can become significant when included in the
model with other predictors. It seems that the same phenomenon should occur
with the lasso.
In fact, there is no contradiction, and a similar rule applies at any stage of
the regularization path (not just the start). Suppose we have the lasso solution
_β_ ˆ( _λ_ ′) at _λ_ ′, and we wish to screen variables for the solution at _λ < λ_ ′. Then if

```
∣
∣ x Tj
```
###### (

```
y − X β ˆ( λ ′)
```
###### )∣

```
∣ < λ ′−‖ x j ‖ 2 ‖ y ‖ 2 λ
```
```
′− λ
λ
```
###### , (5.77)

variable _j_ is not part of the active set at _λ_. We refer to this as the sequential
DPP rule.
Figure 5.12 shows the performance of this rule on a simulated example
with 5000 predictors (details in caption). The global DPP applies rule (5.76)
for all values of _λ_ , and we can see it quickly runs out of steam. By the time
_λ_ is small enough to admit 8 predictors into the model, all 5000 predictors
survive the screen. But the sequential DPP rule is much more aggressive, and
even with 250 predictors in the model, only 1200 need to be considered. So
the sequential screening rule (5.77) works much better if _λ_ ′and _λ_ are close
together. We derive the lasso dual and the DPP rules in Appendix B on
Page 132.
In order to achieve even better performance, it is natural to consider screen-
ing rules that are less conservative, and allow for occasional failures. Such rules
can be incorporated as part of an overall strategy that still yields the exact so-
lution upon termination. A variant of the global DPP rule (5.76) is the _global
strong rule_ , which discards predictor _j_ whenever

```
| x Tj y | < λ −( λ max− λ ) = 2 λ − λ max. (5.78)
```
This tends to discard more predictors than the global DPP rule (compare
blue with orange points in Figure 5.12.) Similarly the _sequential strong rule_
discards the _jth_ predictor from the optimization problem at _λ_ if
∣
∣ **x** _Tj_ ( **y** − **X** _β_ ˆ( _λ_ ′))

###### ∣

```
∣ < 2 λ − λ ′. (5.79)
```
Intuitively, the active set will include predictors that can achieve inner-product
_λ_ with the residuals. So we include all those that achieve inner product close
to _λ_ using the _current residuals atλ_ ′ _> λ_ , where close is defined by the gap
_λ_ ′− _λ_.
As with the sequential DPP rule, the sequential strong rule is based on
solving the lasso over a grid of decreasing _λ_ values. Figure 5.12 includes the
global and sequential strong rules. In both cases they dominate the DPP coun-
terparts. Neither of the strong rules make any errors in this example, where an
error means that it discards some predictor with a nonzero coefficient in the


###### SCREENING RULES 129

```
0 50 100 150 200 250
```
```
0
```
```
1000
```
```
2000
```
```
3000
```
```
4000
```
```
5000
```
```
Number of Predictors in Model
```
```
Number of Predictors after Filtering
```
```
global DPP
global STRONG
sequential DPP
sequential STRONG
```
```
Percent Variance Explained
0 0.15 0.3 0.49 0.67 0.75 0.82 0.89 0.96 0.97 0.99 1 1 1
```
**Figure 5.12** _Lasso regression: Results of different rules applied to a simulated
dataset. There areN_ = 200 _observations andp_ = 5000 _uncorrelated Gaussian pre-
dictors; one-quarter of the true coefficients are nonzero. Shown are the number of
predictors left after screening at each stage, plotted against the number of predictors
in the model for a given value ofλ. The value ofλis decreasing as we move from left
to right. In the plots, we are fitting along a path of 100 decreasingλvalues equal ly
spaced on the log-scale, A broken line with unit slope is added for reference. The
proportion of variance explained by the model is shown along the top of the plot.
There were no violations for either of the strong rules._


###### 130 OPTIMIZATION METHODS

actual solution. The sequential strong rule (5.79) has remarkable performance,
discarding almost all of the redundant predictors.
We now give further motivation for the strong rules (Tibshirani, Bien,
Friedman, Hastie, Simon, Taylor and Tibshirani 2 2012). Suppose that predic-
tor _j_ is not in the model at _λ_ = _λ_ max. The KKT conditions for the lasso then
ensure that| **x** _Tj_ **y** | _< λ_ max, so that the global rule (5.78) can be interpreted as

dictating that as we move from _λ_ maxto _λ_ , the inner product| **x** _Tj_ ( **y** − **X** _β_ ˆ( _λ_ ))|
can increase by at most _λ_ max− _λ_. Consequently, if the inner product is below
the strong bound _λ_ −( _λ_ max− _λ_ ), it cannot reach the necessary level _λ_ for
inclusion in the model, where we have again used the KKT conditions in our
reasoning. If we define _cj_ ( _λ_ ) : = **x** _Tj_ ( **y** − **X** _β_ ˆ( _λ_ )), then for either the global or
sequential strong rules to hold, it would be sufficient to have

```
∣
∣
∣
```
```
dcj ( λ )
dλ
```
###### ∣

###### ∣

###### ∣≤^1 , (5.80)

assuming that this derivative exists.^8 Now the KKT conditions at _λ_ are

```
cj ( λ ) = λsj ( λ ) , for j = 1 , 2 ,...,p , (5.81)
```
where _sj_ ( _λ_ ) = sign( _β_ ˆ _j_ ( _λ_ )) if _β_ ˆ _j_ ( _λ_ ) 6 = 0 and _sj_ ( _λ_ )∈[− 1 _,_ 1] if _β_ ˆ _j_ ( _λ_ ) = 0. By
the chain rule

```
dcj ( λ )
dλ
```
```
= sj ( λ ) + λ ·
dsj ( λ )
dλ
```
###### .

If we ignore the second term, then we have| _dcdλj_ ( _λ_ )|≤1. Now the second term
equals zero when a variable has a nonzero coefficient in an interval of _λ_ values,
for then _sj_ ( _λ_ ) is constant (equaling±1). In addition, the slope condition (5.80)
always holds if ( **X** _T_ **X** )−^1 is diagonally dominant (Tibshirani et al. 2012), a
condition meaning that the predictors are nearly uncorrelated. In general,
however, the slope condition can fail over short stretches of _λ_ , and in these
instances, the strong rules can fail (i.e., discard predictors in error). However
these failures are rare, and are virtually nonexistent when _p_  _N_.
In summary, we have found empirically that the strong rules, and especially
the sequential strong rule (5.79) seem to be very good heuristics for discarding
variables. This is the case in the lasso, lasso-penalized logistic regression, and
the elastic net.
One can use the sequential strong rule to save computation time, without
sacrificing the exact solution, as follows. We compute the solution along a fine
grid of decreasing _λ_ values. For each value of _λ_ , the screening rule is applied,
yielding a subset of the predictors. Then the problem is solved using only this
subset. The KKT conditions (5.81) for all predictors are then checked. If they
are satisfied, we are done. Otherwise the predictors that violate the conditions

(^8) The arguments here are only heuristic, because _dcj_ ( _λ_ ) _/dλ_ and _dsj_ ( _λ_ ) _/dλ_ discussed
below it do not exist at _β_ ˆ _j_ ( _λ_ ) = 0.


###### BIBLIOGRAPHIC NOTES 131

are added to the active set and the problem is solved again. In principle this
must be iterated until no violations occur.
This approach is effective computationally because violations of the strong
rule turn out to be rare, especially when _p_  _N_. Tibshirani et al. (2012)
implement these rules for the coordinate descent approach inglmnetand the
generalized gradient and Nesterov first-order methods. They report speedup
factors in the range from 2 to 80, depending on the setting.
Finally, suppose instead that we are interested in a more general convex
problem of the form

```
minimize
β
```
###### {

```
f ( β ) + λ
```
```
∑ r
```
```
j =1
```
```
cj ‖ βj ‖ pj
```
###### }

###### . (5.82)

Here _f_ is a convex and differentiable function, and _β_ = ( _β_ 1 _,β_ 2 _,...βr_ ) with
each _βj_ being a scalar or a vector. Also _λ_ ≥ 0, and _cj_ ≥0, _pj_ ≥1 for
each _j_ = 1 _,...r_. Then given _λ_ ′ _> λ_ , the sequential strong rule for discarding
predictor _j_ takes the form
∥
∥∇ _jf_

###### (

```
β ˆ( λ ′)
```
###### )∥

###### ∥

```
qj< cj (2 λ − λ
```
###### ′) , (5.83)

where∇ _jf_ ( _β_ ˆ) = ( _∂f_ ( _β_ ˆ) _/∂βj_ 1 _,...∂f_ ( _β_ ˆ) _/∂βjm_ ) where 1 _/pj_ + 1 _/qj_ = 1 (i.e.,
‖·‖ _pj_ and‖·‖ _qj_ are dual norms). The rule (5.83) can be applied to a wide
variety of problems, including logistic regression and other generalized linear
models, the group lasso and the graphical lasso.

### Bibliographic Notes

The behavior of descent algorithms, including convergence proofs for methods
based on appropriate stepsize selection rules, such as limited minimization
or the Armijo rule, is a classical subject in optimization; see Chapters 1 and
2 of Bertsekas (1999) for more details. Further background on Lagrangian
methods and duality can be found in Bertsekas (1999), as well as Boyd and
Vandenberghe (2004). Rockafellar (1996) provides a more advanced treat-
ment of convex duality and convex analysis. Nesterov (2007) derives and an-
alyzes the generalized gradient method (5.21) for composite objectives; see
also Nesterov’s book (2004) for related analysis of projected gradient meth-
ods. Minorization-maximization procedures, also known as auxiliary function
methods, are discussed in Lange (2004) and Hunter and Lange (2004).
Gorski, Pfeuffer and Klamroth (2007) provide an overview of biconvex
functions, and alternating algorithms for optimizing them. El Ghaoui, Vial-
lon and Rabbani (2010) introduced the use of screening rules such as (5.76);
inspired by this work, we derived a very similar formula, and which led to
our development of the strong rules in Section 5.10. However, the more recent
DPP rules of Wang, Lin, Gong, Wonka and Ye (2013) dominate these earlier
safe rules, and provide a simple sequential formula. Fu (1998) was an early
proponent of coordinate descent for the lasso.


###### 132 OPTIMIZATION METHODS

**Appendix A: The Lasso Dual**

In this appendix, we derive a useful dual of the lasso primal problem (2.5),
which we write in a slightly more convenient form

```
Lasso Primal: minimize
β ∈R p
```
###### 1

###### 2

```
‖ y − X β ‖^22 + λ ‖ β ‖ 1. (5.84)
```
Introducing the residual vector **_r_** = **y** − **X** _β_ , we can rewrite the primal Equa-
tion (5.84) as

```
minimize
β ∈R p
```
###### 1

###### 2

```
‖ r ‖^22 + λ ‖ β ‖ 1 subject to r = y − X β. (5.85)
```
Letting **_θ_** ∈R _N_ denote a Lagrange multiplier vector, the Lagrangian of this
problem can be written as

```
L ( β, r , θ ) : =
```
###### 1

###### 2

```
‖ r ‖^22 + λ ‖ β ‖ 1 − θ T ( r − y + X β ). (5.86)
```
The dual objective is derived by minimizing this expression (5.86) with respect
to _β_ and **_r_**. Isolating those terms involving _β_ , we find

```
min
β ∈R p
− θ T X β + λ ‖ β ‖ 1 =
```
###### {

```
0 if‖ X T θ ‖∞≤ λ
−∞ otherwise
```
###### (5.87)

where‖ **X** _T_ **_θ_** ‖∞= max _j_ | **x** _Tj_ **_θ_** |. Next we isolate terms involving **_r_** and find

```
min
r
```
###### 1

###### 2

```
‖ r ‖^22 − θ T r =−
```
###### 1

###### 2

```
θ T θ , (5.88)
```
with **_r_** = **_θ_**. Substituting relations (5.87) and (5.88) into the Lagrangian rep-
resentation (5.86), we obtain

```
Lasso Dual: maximize
θ
```
###### 1

###### 2

```
{‖ y ‖^22 −‖ y − θ ‖^22 }subject to‖ X T θ ‖∞≤ λ. (5.89)
```
Overall, this form of the lasso dual amounts to projecting **y** onto the feasi-
ble setF _λ_ ={ **_θ_** ∈R _N_ | ‖ **X** _T_ **_θ_** ‖∞≤ _λ_ }.F _λ_ is the intersection of the 2 _p_ half-
spaces defined by{| **x** _Tj_ **_θ_** |≤ _λ_ } _pj_ =1, a convex-polytope inR _N_. In the language
of Section 5.3.3, the solution is given by the proximal map **_θ_** ∗= **prox** _I_ (F _λ_ )( **y** ).
Figure 5.13 provides an illustration of this geometric interpretation.

**Appendix B: Derivation of the DPP Rule**

Here we derive the sequential DPP screening rule (5.77); our proof follows
that in Wang, Lin, Gong, Wonka and Ye (2013). We first modify the lasso
dual via a change of variables **_φ_** = **_θ_** _/λ_ , leading to

```
maximize
θ
```
###### 1

###### 2

###### {

```
‖ y ‖^22 − λ^2 ‖ y /λ − φ ‖^22
```
###### }

```
subject to‖ X T φ ‖∞≤ 1. (5.90)
```

###### APPENDIX 133

```
|xT 1 θ|=λ
```
```
|xT 2 θ|=λ
```
```
|xT 5 θ|=λ
```
```
|xT 4 θ|=λ
```
```
|xT 3 θ|=λ
```
```
θ∗
```
```
θ 0 =y
```
```
G(θ) =G(θ∗)
```
```
Dual feasible set|xTjθ|≤λ∀j
```
**Figure 5.13** _The Lagrange dual of the lasso, withG_ ( **_θ_** ) =^12 (‖ **y** ‖^22 −‖ **y** − **_θ_** ‖^22 )_. The
blue shaded region is the feasible set_ F _λ. The unconstrained dual solution is_ **_θ_** 0 = **y** _,
the null residual. The dual solution_ **_θ_** ∗= **prox** _I_ (F _λ_ )( **y** ) _, the projection of_ **y** _onto the
convex set_ F _λ._

_Theorem 5.1._ Suppose we are given a solution **_φ_** ˆ( _λ_ ′) to the lasso dual (5.90)
for a specific _λ_ max≥ _λ_ ′ _>_ 0. Let _λ_ be a nonnegative value different from _λ_ ′.
If the following holds:

```
| x Tj φ ˆ( λ ′)| < 1 −‖ x j ‖ 2 ‖ y ‖ 2
```
###### ∣

###### ∣

###### ∣

###### ∣

###### 1

```
λ ′
```
###### −

###### 1

```
λ
```
###### ∣

###### ∣

###### ∣

###### ∣ , (5.91)

then _β_ ˆ _j_ ( _λ_ ) = 0.

```
Since φ ˆ( λ ′) = ( y − X β ˆ( λ ′)) /λ ′, simple algebra leads to (5.77).
```
_Proof:_ We know from the stationarity conditions for the lasso that

```
| x Tj φ ˆ( λ )| < 1 =⇒ β ̂ j ( λ ) = 0. (5.92)
```
From the dual (5.90), **_φ_** ˆ( _λ_ ) is the projection of **y** _/λ_ into the feasible setF _λ_.
By the projection theorem (Bertsekas 2003) for closed convex sets, **_φ_** ˆ( _λ_ ) is
continuous and nonexpansive, which implies

```
‖ φ ˆ( λ )− φ ˆ( λ ′)‖ 2 ≤
```
###### ∥

###### ∥

###### ∥

```
y
λ
```
###### −

```
y
λ ′
```
###### ∥

###### ∥

###### ∥

```
2
```
###### (5.93)

```
=‖ y ‖ 2
```
###### ∣

###### ∣

###### ∣

###### ∣

###### 1

```
λ
```
###### −

###### 1

```
λ ′
```
###### ∣

###### ∣

###### ∣

###### ∣.


###### 134 OPTIMIZATION METHODS

Then

```
| x jT φ ˆ( λ )|≤| x Tj φ ˆ( λ )− x Tj φ ˆ( λ ′)|+| x Tj φ ˆ( λ ′)| (5.94)
```
```
< ‖ x j ‖ 2 ‖ φ ˆ( λ )− φ ˆ( λ ′)‖ 2 + 1−‖ x j ‖ 2 ‖ y ‖ 2
```
###### ∣

###### ∣

###### ∣

###### ∣

###### 1

```
λ ′
```
###### −

###### 1

```
λ
```
###### ∣

###### ∣

###### ∣

###### ∣

```
≤‖ x j ‖ 2 ‖ y ‖ 2
```
###### ∣

###### ∣

###### ∣

###### ∣

###### 1

```
λ ′
```
###### −

###### 1

```
λ
```
###### ∣

###### ∣

###### ∣

```
∣+ 1−‖ x j ‖^2 ‖ y ‖^2
```
###### ∣

###### ∣

###### ∣

###### ∣

###### 1

```
λ ′
```
###### −

###### 1

```
λ
```
###### ∣

###### ∣

###### ∣

###### ∣ = 1.

### Exercises

Ex. 5.1 Consider the unconstrained minimization of the quadratic function
_f_ ( _β_ ) =^12 _βT_ **Q** _β_ −〈 _β, b_ 〉, where **Q** 0 is a symmetric positive definite matrix,
and _b_ ∈R _p_.

```
(a) Show that the optimal solution β ∗exists and is unique, and specify its
form in terms of ( Q ,b ).
(b) Write out the gradient descent updates with constant stepsize s for this
problem.
(c) Show that there exists some constant c > 0, depending only on Q , such
that gradient descent converges for any fixed stepsize s ∈(0 ,c ).
```
Ex. 5.2 Consider the constrained program minimize _f_ ( _β_ ) subject to _gj_ ( _β_ )≤ 0
for _j_ = 1 _,...,m_ , and let _f_ ∗be its optimal value.
Define the Lagrangian function

```
L ( β ; λ ) = f ( β ) +
```
```
∑ m
```
```
j =1
```
```
λjgj ( β ). (5.95)
```
```
(a) Show that
```
```
sup
λ ≥ 0
```
```
L ( β ; λ ) =
```
###### {

```
f ( β ) if gj ( β )≤0 for j = 1 ,...,m
+∞ otherwise.
```
```
(b) Use part (a) to show that f ∗= inf β sup λ ≥ 0 L ( β ; λ ).
(c) How is f ∗related to the quantity sup λ ≥ 0 inf βL ( β,λ )?
```
Ex. 5.3 Let _f_ :R _p_ →Rbe a convex and differentiable function, and consider
a subspace constraint of the formC={ _β_ ∈R _p_ | _Mβ_ = _c_ }, where _M_ ∈R _m_ × _p_
is a fixed matrix, and _c_ ∈R _m_ is a fixed vector.

```
(a) Suppose that β ∗∈ Csatisfies the first-order optimality condition (5.4).
Show that there must exist a vector λ ∗∈R m such that
```
```
∇ f ( β ∗) + MTλ ∗= 0 (5.96)
```

###### EXERCISES 135

```
(b) Conversely, suppose that condition (5.96) holds for some λ ∗∈R m. Show
that the first-order optimality condition (5.4) must be satisfied.
```
Ex. 5.4 Consider the Lagrangian _L_ ( _β,λ_ ) = _f_ ( _β_ ) +

∑ _m
j_ =1 _λjgj_ ( _β_ ) associated
with the constrained problem (5.5), and assume that the optimal value _f_ ∗is
finite. Suppose that there exist vectors _β_ ∗∈R _p_ and _λ_ ∗∈R _m_ +such that

```
L ( β ∗ ,λ )
```
```
( i )
≤ L ( β ∗ ,λ ∗)
```
```
( ii )
≤ L ( β,λ ∗) (5.97)
```
for all _β_ ∈R _p_ and _λ_ ∈R _m_ +. Show that _β_ ∗is optimal for the constrained
program.

Ex. 5.5 _Subgradient of Euclidean norm._ Consider the Euclidean or _`_ 2 norm

‖ _β_ ‖ 2 =

```
√∑ p
j =1 β
2
j , which is used in the group lasso. Show that:
(a) For any β 6 = 0, the norm g ( β ) : =‖ β ‖ 2 is differentiable with∇ g ( β ) =
β
‖ β ‖ 2.
(b) For β = 0, any vector̂ s ∈R p with‖̂ s ‖ 2 ≤1 is an element of the subdif-
ferential of g at 0.
```
Ex. 5.6 Show that the function

```
h ( β 1 ,...,βp ) =| β | T P | β |
```
in Equation (5.40) satisfies the regularity conditions below Equation (5.39) on
page 111. (As a consequence, coordinate descent will still work even though
this function is not separable).

Ex. 5.7 Show that the proximal-gradient update step (5.21) is equal to the
step (5.19)

Ex. 5.8 Show that when _h_ is given by the nuclear norm, the composite gradient
update (5.26) can be obtained by the following procedure:

```
(a) Compute the singular value decomposition of the input matrix Z , that
is Z = UDV T where D = diag{ σj ( Z )}is a diagonal matrix of the singular
values.
(b) Apply the soft-thresholding operator (5.25) to compute the “shrunken”
singular values
```
```
γj : =S sλ ( σj ( Z )) , for j = 1 ,...,p.
```
```
(c) Return the matrix Z ̂= U diag{ γ 1 ,...,γp } V T.
```

###### 136 OPTIMIZATION METHODS

Ex. 5.9 Consider a regression problem with all variables and response having
mean zero and standard deviation one in the dataset. Suppose also that each
variable has identical absolute correlation with the response—that is

```
1
N
|〈 x j, y 〉|= λ, for all j = 1 ,...,p.
```
Let _β_ ̂be the least-squares coefficient vector of **y** on **X** , assumed to be unique
for this exercise. Let **u** ( _α_ ) = _α_ **X** _β_ ˆfor _α_ ∈[0 _,_ 1] be the vector that moves a
fraction _α_ toward the least-squares fit **u**. Let _RSS_ =‖ _y_ − **X** _β_ ̂‖^22 , the residual
sum-of-squares from the full least-squares fit.

```
(a) Show that
```
```
1
N
```
```
|〈 x j, y − u ( α )〉|= (1− α ) λ for j = 1 ,...,p ,
```
```
and hence the correlations of each x j with the residuals remain equal in
magnitude as we progress toward u.
(b) Show that these correlations are all equal to
```
```
λ ( α ) =
```
```
(1− α )
√
(1− α )^2 + α (2 N − α )· RSS
```
```
· λ,
```
```
and hence they decrease monotonically to zero.
(c) Use these results to show that the LAR algorithm in Section 5.6 keeps
the correlations tied and monotonically decreasing.
```
Ex. 5.10 Consider step 3c of the LAR Algorithm 5.1. Define _c`_ =〈 **x** _`,_ **_r_** _k_ − 1 〉
and _a`_ =〈 **x** _`,_ **X** A _δ_ 〉 _, ` /_ ∈A. Define

```
α` = min+
```
###### {

```
λk − 1 − c`
1 − a`
```
###### ,

```
λk − 1 + c`
1 + a`
```
###### }

###### ,

where min+only considers positive entries. Show that the variable to enter at
step _k_ has index _j_ = arg min _`/_ ∈A _α`_ , with value _λk_ = _λk_ − 1 − _αj_.

Ex. 5.11 _Strong rules_

```
(a) Show that if the slope condition (5.80) holds, then the global and sequen-
tial strong rules (5.78) and (5.79) are guaranteed to work.
(b) In the case of orthogonal design X T X = I , show that the slope condition
(5.80) always holds.
(c) Design a simulation study to investigate the accuracy of the DPP and
strong rules for the lasso, in the cases ( N,p ) = (100 , 20), ( N,p ) = (100 , 100),
and ( N,p ) = (100 , 1000).
```

###### EXERCISES 137

Ex. 5.12 _ADMM for consensus optimization:_ Suppose that we have a dataset
{ _xi,yi_ } _Ni_ =1, and that our goal is to minimize an objective function _L_ ( **X** _β_ − **y** )
that decomposes additively as a sum of _N_ terms, one for each sample. A
natural approach is to divide the dataset into _B_ blocks, and denote by
_Lb_ ( **X** _bβb_ − **y** _b_ ) the objective function over the _bth_ block of data, where **X** _b_
and **y** _b_ are the corresponding blocks of **X** and **y**. We thus arrive at the prob-
lem

```
minimize
β ∈R p
```
###### { B

###### ∑

```
b =1
```
```
Lb ( X bβb − y b ) + r ( θ )
```
###### }

```
such that βb = θ for all b = 1 ,...B.
```
```
(5.98)
```
```
(a) Show that the ADMM algorithm for this problem takes the form
```
```
βtb +1←arg min
βb
```
###### (

```
Lb ( X bβb − y b ) + ( ρ/ 2)‖ βb − θt + μtb ‖^22
```
###### )

```
(5.99a)
```
```
θt +1←arg min
θ
```
###### (

```
r ( z ) + ( Nρ/ 2)‖ θ − β ̄ t +1− μ ̄ t ‖^22
```
###### )

```
(5.99b)
```
```
μtb +1← μtb + ( βbt +1− θt +1) (5.99c)
```
```
where the ̄ μk and β ̄ k +1denote averages over blocks. Interpret it as consensus
optimization.
(b) Now consider the lasso, which uses the regularizer r ( θ ) = λ ‖ θ ‖ 1. Show
that the algorithm has the form
```
```
βtb +1←( X Tb X b + ρ I )−^1 ( X b y b + ρ ( θt − μtb )) (5.100a)
θt +1←S λ/ ( ρN )( β ̄ t +1+ ̄ μt ) (5.100b)
μtb +1← μtb + ( βtb +1− θt +1) (5.100c)
```
```
(c) Implement the updates (5.100) in software and demonstrate it on a nu-
merical example.
```
Ex. 5.13

```
(a) Derive the alternating convex minimization (ACS) for problem (5.72), and
show that it has the form of a power iteration (Equations (5.73) and (5.74)).
(b) Show that it converges to the eigenvector corresponding to the largest
eigenvalue of X T X , provided that the starting vector v 0 is not orthogonal
to this largest eigenvector.
```


```
Chapter 6
```
## Statistical Inference

An attractive feature of _`_ 1 -regularized procedures is their ability to combine
variable selection with parameter fitting. We often select a model based on
cross-validation—as an estimate for prediction or generalization error—and
then do further validation on a held-out test set.
It is sometimes of interest to determine the statistical strength of the in-
cluded variables, as in “p-values” in traditional models. The adaptive nature of
the estimation procedure makes this problem difficult—both conceptually and
analytically. We describe some useful approaches to the inference problem in
this chapter. We begin by discussing two “traditional” approaches—Bayesian
methods and the bootstrap, and then present some newer approaches to this
problem.

### 6.1 The Bayesian Lasso

The Bayesian paradigm treats the parameters as random quantities, along
with a prior distribution that characterizes our belief in what their values
might be. Here we adopt the approach of Park and Casella (2008), involving
a model of the form

```
y | β,λ,σ ∼ N ( X β,σ^2 I N × N ) (6.1a)
```
```
β | λ,σ ∼
```
```
∏ p
```
```
j =1
```
```
λ
2 σ
```
```
e −
λσ | βj |
, (6.1b)
```
using the i.i.d. Laplacian prior (6.1b). Under this model, it is easy to show
that the negative log posterior density for _β_ | **y** _,λ,σ_ is given by

```
1
2 σ^2
```
```
‖ y − X β ‖^22 +
```
```
λ
σ
```
```
‖ β ‖ 1 , (6.2)
```
where we have dropped an additive constant independent of _β_. Consequently,
for any fixed values of _σ_ and _λ_ , the posterior mode coincides with the lasso
estimate (with regularization parameter _σλ_ ). Park and Casella (2008) include
_σ_^2 in the prior specification (6.1b) for technical reasons. Here we have as-
sumed there is no constant in the model, and that the columns of **X** are

```
139
```

###### 140 STATISTICAL INFERENCE

```
Posterior Density
```
```
−1.0 −0.5 0.0 0.5 1.0
```
```
0.0
```
```
0.5
```
```
1.0
```
```
1.5
```
```
2.0
```
```
2.5
```
```
3.0
```
```
3.5
```
```
β 7
```
**Figure 6.1** _Prior and posterior distribution for the seventh variable in the diabetes
example, withλheld fixed. The prior in the figure is a double exponential (Laplace)
distribution with density proportional to_ exp(−_._ 0065 | _β_ 7 |)_. The prior rate._ 0065 _is a
representative value just for il lustration._

mean-centered, as is **y**.^1 The posterior distribution provides more than point
estimates: it provides an entire joint distribution.
The red curve in Figure 6.1 is the Laplace prior used in the Bayesian
lasso, applied to variable _β_ 7 in the “diabetes data.” These data consist of
observations on 442 patients, with the response of interest being a quantitative
measure of disease progression one year after baseline. There are ten baseline
variables—age, sex, body-mass index, average blood pressure, and six blood
serum measurements—plus quadratic terms, giving a total of 64 features. The
prior has a sharp peak at zero, which captures our belief that some parameters
are zero. Given a probability distribution (likelihood) for the observed data
given the parameters, we update our prior by conditioning on the observed
data, yielding the posterior distribution of the parameters. The histogram in
Figure 6.1 characterizes the posterior distribution for _β_ 7 for the diabetes data.
The prior distribution has a variance parameter that characterizes the strength
of our belief in zero as a special value. The posterior mode is slightly away
from zero, although a 95% posterior credible interval comfortably covers zero.
Exact Bayesian calculations are typically intractable, except for the simplest
of models. Fortunately, modern computation allows us to use Markov chain
Monte Carlo (MCMC) to efficiently sample realizations from the posterior
distributions of the parameters of interest. Figure 6.2 [left panel] shows a
summary of MCMC samples from the posterior distribution of _β_ | _λ_ ; the
median of 10 _,_ 000 posterior samples is shown at each of 100 values of _λ_. Here

(^1) This is not a real restriction on the model, and is equivalent to assuming an improper
flat prior on _β_ 0 , which is rarely of interest.


###### THE BAYESIAN LASSO 141

```
0.0 0.5 1.0 1.5 2.0
```
```
−0.4
```
```
−0.2
```
```
0.0
```
```
0.2
```
```
0.4
```
```
Posterior Medians
```
```
Coefficients
```
```
1
```
```
2
```
```
3
```
```
4
```
```
5
```
```
6
```
```
7
```
```
8
```
```
9
```
```
10
```
```
0.0 0.5 1.0 1.5 2.0
```
```
−0.4
```
```
−0.2
```
```
0.0
```
```
0.2
```
```
0.4
```
```
Lasso
```
```
Coefficients
```
```
1
```
```
2
```
```
3
```
```
4
```
```
5
```
```
6
```
```
7
```
```
8
```
```
9
```
```
10
```
```
‖β‖ 1 ‖β‖ 1
```
**Figure 6.2** _Bayesian lasso on the diabetes data. The left plot shows the posterior
medians from MCMC runs (conditional onλ). The right plot shows the lasso pro-
file. In the left plot, the vertical line is at the posterior median of_ ‖ _β_ ‖ 1 _(from an
unconditional model), while for the right plot the vertical line was found by N-fold
cross-validation._

_σ_^2 is allowed to vary (with _π_ ( _σ_^2 )∼ _σ_^12 ). This, and the fact that we have
displayed medians, accounts for the slight discrepancies with the right plot
(the lasso), which shows the posterior mode for fixed values of _σλ_. A complete
Bayesian model will also specify a prior distribution for _λ_ ; in this case, a
diffuse Gamma distribution is conjugate and hence convenient for the MCMC
sampling. This is where the Bayesian approach can be worth the considerable
extra effort and leap of faith. The full posterior distribution includes _λ_ as well
as _β_ , so that model selection is performed automatically. Furthermore, the
posterior credible intervals for _β_ take into account the posterior variability in
_λ_. Figure 6.3 shows a summary of 10 _,_ 000 MCMC samples from the posterior
distribution for the diabetes data. While the posterior mode has nine nonzero
coefficients, the posterior distributions suggest that only 5–8 of these are well
separated from zero.
Specifying the Bayesian model is technically challenging, and there are
several choices to be made along the way. These include priors for _λ_ and _σ_^2 ,
which themselves have hyperparameters that have to be set. Our examples
were fit inRusing the functionblassoin the packagemonomvn(Gramacy
2011), and for the most part we used the default parameter settings. For


###### 142 STATISTICAL INFERENCE

```
|| ||| |||| || ||||||||||||| ||||||||| |||| | ||||||||| ||| ||||| || |||||||||||||||||||| |||| || |||||||||| ||||||| ||||||||||||||||||| |||| || ||||||| | |
```
```
|| |||||| |||||||||| | ||||||||||||||||| ||||||| || ||| ||||||||||||| || ||
```
```
||||||||||||||| | || |||||||||||| |||||||| |||||||||| ||| |||||||||||| ||
```
```
||||| ||||||| ||||| | ||||||||||||||| |||||||||||||| ||||| |||||| ||
```
```
| ||| | ||||| || ||| ||| ||| | |||||| |||||| | || | || ||| |||| || | ||| || || | |||| |||| | ||| |||| || ||| |||||| || || || || |||||| ||| |||||| || | ||||||| | || || ||||| || | |||| ||| ||| | || || ||| |||| || ||||| || | ||| ||| | ||
```
```
||||||| |||| ||||||||| |||||||||||||||||| ||| ||||||| || || ||| | || ||| | ||||| ||| ||| || |||| ||||||||| |||| || |||||| ||| ||||| || || |||| |||| || ||||||| | |||| ||| | ||||| || ||||| ||| |||| | ||| || | || || ||||| | |||||||| |||||| ||||| ||| || ||| | | ||| | || ||||| |||| | ||| |||| || ||| ||| | |||||||| |||||| |||||| || ||| || | || |||| || || || | | ||| ||||||| ||| ||||| || |||||| ||| |||| ||||||
```
```
|||| ||||||| || | || || | || | |||| | ||| ||||| || | || || |||| || ||| |||| ||| || | || |
```
```
|| ||||||||| | |||||| || |||||||| |||| || | ||| || |||||| | ||| | |||| |||||| | | || || ||||| ||||| || ||||| || |||| ||||||| |||| | || || || |
```
```
| |||||||||||| ||||| ||||||||| | ||||||| ||| ||| |||||||||||||| ||||| || |||||| |||| ||| | ||||||| | || | || |||||| | | || |||||||||
```
```
|||| |||| ||||| ||| |||||||| ||| ||| | | ||||||| | ||||| || ||| | |||| |
```
```
−0.6 −0.4 −0.2 0.0 0.2 0.4 0.6
```
```
Bayesian Posterior Samples
```
```
Coefficients
```
```
Density
```
```
0.0 0.5 1.0 1.5 2.0
```
```
0.0
```
```
0.5
```
```
1.0
```
```
1.5
```
```
2.0
```
```
2.5
```
```
3.0
```
```
β^1
```
```
β^2
```
```
β^3
```
```
β^4
```
```
β^5
```
```
β^6
```
```
β^7
```
```
β^8
```
```
β^9
```
```
β^10
```
```
‖β‖ 1
```
```
Figure 6.3 Posterior distributions for theβjand ‖ β ‖ 1 for the diabetes data. Sum-
mary of 10 , 000 MCMC samples, with the first 1000 “burn-in” samples discarded.
```
```
this 442×10 problem it took 5 seconds on a 2.3 GHz Macbook Pro. However,
Bayesian computations do not scale well; experiments in the next section show
that the computational cost scales roughly asO( p^2 ).
```
### 6.2 The Bootstrap

```
The bootstrap is a popular nonparametric tool for assessing the statistical
properties of complex estimators (Efron 1979, Efron and Tibshirani 1993). To
motivate its use, suppose that we have obtained an estimate β ̂(ˆ λCV ) for a
lasso problem according to the following procedure:
```
1. Fit a lasso path to ( **X** _,_ **y** ) over a dense grid of values Λ ={ _λ`_ } _L`_ =1.
2. Divide the training samples into 10 groups at random.
3. With the _kth_ group left out, fit a lasso path to the remaining 9/10ths, using
    the same grid Λ.
4. For each _λ_ ∈Λ compute the mean-squared prediction error for the left-out
    group.
5. Average these errors to obtain a prediction error curve over the grid Λ.
6. Find the valuê _λCV_ that minimizes this curve, and then return the coeffi-
    cient vector from our original fit in step (1) at that value of _λ_.


###### THE BOOTSTRAP 143

```
||| || || |||||| || || || ||| || ||| ||| | ||| | ||| | ||| ||||| || | |||| |||| | ||||| | ||| |||| ||| ||| || || | || || |||| ||||||| || ||| | |||| ||| || ||| |||| || |||| || || |||||| ||||||| || || || ||||| | || ||| | || || | ||| ||||
```
```
| |||||||||||||||||||||| ||||
```
```
| ||||| |
```
```
|| |
```
```
||| | || || ||||| || | || | || | ||| |||| | |||| || |||| |||| || |||| |||| ||| ||| |||| | | ||| ||
```
```
| |||| ||||| ||||| |||| |||||| ||||||||| |||| ||| || |||| || | ||| |||| |||| ||||||||||||| || ||| |||| || |||||||| ||| | | || |||| || ||||||||| || ||||||| |||||||||||| || ||||| |||| |||| ||||| ||| | ||||| || ||||| |||||| |||||| | ||||||| |||||||| |||||| |||| | | || |||| ||| || |||||||||| | || ||| |||| |||||||| |||||||| ||| || ||||||| ||||| ||||||||||| ||| ||||||||||||||||| || | |||||||||| ||||| |||||||| ||| |||| ||| |
```
```
|| ||| || | ||| ||| |||| | ||| ||| | || | || |||| |||| || || | |||| |
```
```
|| ||| ||| |
```
```
| | || ||| || ||||| | || ||||| | |||| || || ||| ||| | || || |||| | | || ||| || ||| ||| ||| |||||
```
```
| || ||
```
```
−0.6 −0.4 −0.2 0.0 0.2 0.4 0.6
```
```
Bootstrap Samples
```
```
Coefficients
```
```
Bootstrap Probability of 0
```
```
0.0 0.2 0.4 0.6 0.8 1.0
```
```
β β^1
1
```
```
β β^2
2
```
```
β β^3
3
```
```
β^4 β^4
```
```
β^5 β^5
```
```
β^6 β^6
```
```
β^7 β^7
```
```
β^8 β^8
```
```
β^9 β^9
```
```
β^10 β^10
```
**Figure 6.4** _[Left] Boxplots of 1000 bootstrap realizations of_ ̂ _β_ ∗( _λ_ ˆ _CV_ ) _obtained by the
nonparametric bootstrap, which corresponds to re-sampling from the empirical CDF
F_ ̂ _N. Comparing with the corresponding Bayesian posterior distribution in Figure 6.3,
we see a close correspondence in this case. [Right] Proportion of times each coefficient
is zero in the bootstrap distribution._

How do we assess the sampling distribution of _β_ ̂(̂ _λCV_ )? That is, we are inter-
ested in the distribution of the random estimate _β_ ̂(̂ _λCV_ ) as a function of the
_N_ i.i.d. samples{( _xi,yi_ )} _Ni_ =1. The nonparametric bootstrap is one method
for approximating this sampling distribution: in order to do so, it approxi-
mates the cumulative distribution function _F_ of the random pair ( _X,Y_ ) by
the empirical CDF _F_ ̂ _N_ defined by the _N_ samples. We then draw _N_ sam-
ples from _F_ ̂ _N_ , which amounts to drawing _N_ samples with replacement from
the given dataset. Figure 6.4[left] shows boxplots of 1000 bootstrap realiza-
tions _β_ ̂∗( _λ_ ˆ _CV_ ) obtained in this way, by repeating steps 1–6 on each bootstrap
sample.^2 There is a reasonable correspondence between this figure, and the
corresponding Bayesian results in Figure 6.3. The right plot shows the propor-
tion of times that each variable was exactly zero in the bootstrap distribution.
None of the Bayesian posterior realizations are exactly zero, although often
some are close to zero. (Theblassofunction has an argument that allows
for variable selection via “reversible jump” MCMC, but this was not used
here.) Similar to the right-hand plot, Meinshausen and B ̈uhlmann (2010) pro-

(^2) On a technical note, we implement the bootstrap with observation weights _w_ ∗
_i_ = _k/N_ ,
with _k_ = 0 _,_ 1 _,_ 2 _,..._. In cross-validation, the units are again the original _N_ observations,
which carry along with them their weights _w_ ∗ _i_.


###### 144 STATISTICAL INFERENCE

```
−8 −6 −4 −2
```
```
0.4
```
```
0.5
```
```
0.6
```
```
0.7
```
```
0.8
```
```
0.9
```
```
1.0
```
```
1.1
```
```
Mean−Squared Error
```
```
10 10 9 10 8 8 7 7 6 4 4 2
```
```
−8 −6 −4 −2
```
```
0.4
```
```
0.5
```
```
0.6
```
```
0.7
```
```
0.8
```
```
0.9
```
```
1.0
```
```
1.1
```
```
Bootstrapped CV Curves
```
```
Mean−Squared Error
```
```
log(λ) log(λ)
```
**Figure 6.5** _[Left] Cross-validation curve for lasso on the diabetes data, with one-
standard-error bands computed from the 10 realizations. The vertical line on the left
corresponds to the minimizing value forλ. The line on the right corresponds to the_
one-standard-error _rule; the biggest value ofλfor which the CV error is within one
standard error of the minimizing value. [Right] 1000 bootstrap CV curves, with the
average in red, and one-standard-error bands in blue. The rug-plot at the base shows
the locations of the minima._

duce a _stability_ plot for lasso under bootstrap resampling; as a function of _λ_
they display what fraction of times a variable is nonzero in the bootstrapped
coefficient paths.
Figure 6.5 shows the bootstrapped cross-validation curves, and their min-
ima. Not surprisingly, the bootstrapped minima have a wide spread, since
the original CV curve is flat over a broad region. Interestingly, the bootstrap
standard-error bands bear a close correspondence to those computed from the
original CV fit in the left plot. Figure 6.6 shows pairwise plots of the boot-
strapped coefficients. From such plots we can see, for example, how correlated
variables can trade off with each other, both in value and their propensity for
being zero.
In Table 6.1, we show comparative timings in seconds for problems with
_N_ = 400 and different numbers of predictors. We generated 1000 bootstrap
samples; for the Bayesian lasso we generated 2000 posterior samples, with the
idea of discarding the first 1000 samples as a burn-in. While such comparisons
depend on implementation details, the relative growth with _p_ is informative.
The Bayesian lasso is perhaps faster for small problems, but its complexity


###### THE BOOTSTRAP 145

```
−0.25 −0.10 0.10 0.25 −0.4 0.2 0.8 −0.1 0.2 −0.05 0.10
```
```
−0.10 0.05
```
```
−0.25 −0.10
```
```
0.20 0.35
```
```
0.10 0.25
```
```
−1.0
```
```
0.0
```
```
−0.4 0.2 0.8
```
```
−0.2 0.2
```
```
−0.1 0.2
```
```
0.2 0.4 0.6
```
```
−0.10 0.05
```
```
−0.05 0.10
0.20 0.35 −1.0 0.0 −0.2 0.2 0.2 0.4 0.6
```
```
β 1
```
```
β 2
```
```
β 3
```
```
β 4
```
```
β 5
```
```
β 6
```
```
β 7
```
```
β 8
```
```
β 9
```
```
β 10
```
**Figure 6.6** _Pairwise plots of the bootstrapped coefficientsβ_ ̂∗(ˆ _λCV_ )_. The red points
correspond to values that are zero on at least one coordinate for that plot. The samples_
**x** 5 _and_ **x** 6 _have high correlation (_ 0_._ 9 _); we see the corresponding negative correlation
in their coefficients, with zero playing a prominent role._

```
Table 6.1 Timings for Bayesian lasso and boot-
strapped lasso, for four different problem sizes. The
sample size isN = 400.
p Bayesian Lasso Lasso/Bootstrap
10 3.3 secs 163.8 secs
50 184.8 secs 374.6 secs
100 28.6 mins 14.7 mins
200 4.5 hours 18.1 mins
```

###### 146 STATISTICAL INFERENCE

seems to scale asO( _p_^2 ). In contrast, the scaling of the bootstrap seems to be
closer toO( _p_ ), because it exploits the sparseness and convexity of the lasso.
The above procedure used the _nonparametric bootstrap_ , in which we esti-
mate the unknown population _F_ by the empirical distribution function _F_ ̂ _N_ ,
the nonparametric maximum likelihood estimate of _F_. Sampling from _F_ ̂ _N_
corresponds to sampling with replacement from the data. In contrast, the
_parametric bootstrap_ samples from a parametric estimate of _F_ , or its corre-
sponding density function _f_. In this example, we would fix **X** and obtain
estimates _β_ ̂and̂ _σ_^2 either from the full least-squares fit, or from the fitted
lasso with parameter _λ_. We would then sample **y** values from the Gaussian
model (6.1a), with _β_ and _σ_^2 replaced by _β_ ̂and̂ _σ_^2.

Using the full least-squares estimates for _β_ ̂and̂ _σ_^2 , the parametric boot-
strap results for our example are shown in Figure 6.7. They are similar to both
the nonparametric bootstrap results and those from the Bayesian lasso. In
general, we might expect that the parametric bootstrap would likely produce
results even closer to the Bayesian lasso as compared to the nonparametric
bootstrap, since the parametric bootstrap and Bayesian lasso both use the
assumed parametric form for data distribution (6.1a). Note also that the use

of the full least squares estimates for _β_ ̂and̂ _σ_^2 would not work when _p_  _N_ ,
and we would need to generate a different dataset for each value of _λ_. This
would slow down the computations considerably.

```
| ||||||| || | | |||| |||||| || |||| || || ||| |||| ||
```
```
| | | |||
```
```
|||||| ||
```
```
|| |
```
```
||| || ||| |||| ||| || ||| | |||||
```
```
|||
```
```
| |
```
```
−0.6 −0.4 −0.2 0.0 0.2 0.4 0.6
```
```
Bootstrap Samples
```
```
Coefficients
```
```
Bootstrap Probability of 0
```
```
0.0 0.2 0.4 0.6 0.8 1.0
```
```
β β^1
1
```
```
β β^2
2
```
```
β β^3
3
```
```
β β^4
4
```
```
β^5 β^5
```
```
β^6 β^6
```
```
β^7 β^7
```
```
β^8 β^8
```
```
β^9 β^9
```
```
β^10 β^10
```
**Figure 6.7** _[Left] Boxplots of 1000 parametric bootstrap realizations ofβ_ ̂∗(ˆ _λCV_ )_.
Comparing with the corresponding Bayesian posterior distribution in Figure 6.3, we
again see a close correspondence. [Right] Proportion of times each coefficient is zero
in the bootstrap distribution._


###### POST-SELECTION INFERENCE FOR THE LASSO 147

In summary, in this section we have compared the Bayesian and bootstrap
approach on a Gaussian linear-regression problem, for which Bayesian software
was available at the time of writing. As we move to GLMs and other models,
the Bayesian technical complexities grow. The bootstrap, on the other hand,
can be applied seamlessly in many situations. In a general sense, the similar
results for the Bayesian lasso and lasso/bootstrap are not surprising. The
histogram of values from the nonparametric bootstrap can be viewed as a kind
of posterior-Bayes estimate under a noninformative prior in the multinomial
model (Rubin 1981, Efron 1982).
Which approach is better? Both the Bayesian and bootstrap approaches
provide a way to assess variability of lasso estimates. The Bayesian approach
is more principled but leans more heavily on parametric assumptions, as com-
pared to the nonparametric bootstrap. The bootstrap procedure scales better
computationally for large problems. Some further discussion of the relation-
ship between Bayesian and bootstrap approaches is given in Efron (2011).

### 6.3 Post-Selection Inference for the Lasso

In this section we present some relatively recent ideas on making inference
after selection by adaptive methods such as the lasso and forward-stepwise
regression. The first method we discuss in Section 6.3.1 pioneered a particu-
lar line of research, and has been followed in rapid succession by a series of
generalizations and improvements discussed in Section 6.3.2.

#### 6.3.1 The Covariance Test

In this section we describe a method proposed for assigning p-values to predic-
tors as they are successively entered by the lasso. This method is based on the
LAR algorithm and its piecewise construction of the path of lasso solutions
(Section 5.6).
Suppose that we are in the usual linear regression setup, with an outcome
vector **y** ∈R _N_ and matrix of predictor variables **X** ∈R _N_ × _p_ related by

```
y = X β +  ,  ∼ N ( 0 ,σ^2 I N × N ) , (6.3)
```
where _β_ ∈R _p_ are unknown coefficients to be estimated.
To understand the motivation for the covariance test, let’s first consider
forward-stepwise regression. This procedure enters predictors one at a time,
choosing the predictor that most decreases the residual sum of squares at
each stage. Defining RSS _k_ to be the residual sum of squares for the model
containing _k_ predictors, we can use this change in residual sum-of-squares to
form a test statistic

```
Rk =
```
###### 1

```
σ^2
```
```
(RSS k − 1 −RSS k ) (6.4)
```

###### 148 STATISTICAL INFERENCE

(with _σ_ assumed known for now), and compare it to a _χ_^21 distribution.
Figure 6.8(a) shows the quantiles of _R_ 1 from forward stepwise regression
(the chi-squared statistic for the first predictor to enter) versus those of a _χ_^21
variate, in the fully null case ( _β_ = 0). The observed quantiles are much larger
than those of the _χ_^21 distribution. A test at the 5% level, for example, using
the _χ_^21 cutoff of 3_._ 84, would have an actual type I error of about 39%.

```
ooooo
```
```
ooooooooo
ooooooooooo
oooooooooooooo
ooooooooooooo
ooooooooooo
ooooooo
ooooooo
ooooo
ooooo
ooo
```
```
ooo
```
```
oo
```
```
o
```
```
oo
```
```
o
```
```
0 2 4 6 8 10
```
```
0
```
```
2
```
```
4
```
```
6
```
```
8
```
```
10
```
```
χ^21
```
```
R^1
```
```
(a) Forward stepwise
```
```
oooooooooooooooooooooooooo
ooooooooooooooooooo
ooooooooooooo
oooooooooo
oooooo
ooooo
ooooo
oooo
```
```
ooo
```
```
oo
```
```
o
```
```
oo
```
```
o
```
```
o
```
```
o
```
```
0 1 2 3 4 5
```
```
0
```
```
1
```
```
2
```
```
3
```
```
4
```
```
5
```
```
Exp(1)
```
```
T^1
```
```
(b) Lasso
```
**Figure 6.8** _A simulation example withN_ = 100 _observations andp_ = 10 _orthogonal
predictors andβ_ = 0_. (a) a quantile-quantile plot, constructed over 1000 simulations,
of the standard chi-squared statisticR_ 1 _in_ (6.4) _, measuring the drop in residual sum-
of-squares for the first predictor to enter in forward stepwise regression, versus theχ_^21
_distribution. The dashed vertical line marks the 95% quantile of theχ_^21 _distribution.
(b) a quantile-quantile plot of the covariance test statisticT_ 1 _in_ (6.5) _for the first
predictor to enter in the lasso path, versus its asymptotic nul l distribution Exp(1).
The covariance test explicitly accounts for the adaptive nature of lasso modeling,
whereas the chi-squared test is not appropriate for adaptively selected models as in
forward-stepwise regression._

The reason for this is clear: the chi-squared test assumes that the models
being compared are pre-specified, not chosen on the basis of the data. But the
forward stepwise procedure has deliberately chosen the strongest predictor
among all of the available choices, so it is not surprising that it yields a larger
drop in training error than expected.
It seems difficult to derive an appropriate p-value for forward stepwise
regression, one that properly accounts for the adaptive nature of the fitting.
For the first step and the test of the global null hypothesis, one can use a
permutation distribution. For subsequent steps, it is not clear how to correctly
carry out permutations. One can resort to sample splitting: we divide the data
in half, compute the sequence of models on one half and then evaluate their
significance on the other half. But this can lead to a significant loss of power,
unless the sample size is large.


###### POST-SELECTION INFERENCE FOR THE LASSO 149

Surprisingly, it turns out that for the lasso, a simple test can be derived
that properly accounts for the adaptivity. Denote the knots returned by the
LAR algorithm (Algorithm 5.1 on page 119) by _λ_ 1 _> λ_ 2 _... > λK_. These are
the values of the regularization parameter _λ_ where there is a change in the set
of active predictors. Suppose that we wish to test significance of the predictor
entered by LAR at _λk_. LetA _k_ − 1 be the active set (the predictors with nonzero
coefficients) before this predictor was added and let the estimate at the end
of this step be _β_ ˆ( _λk_ +1). We refit the lasso, keeping _λ_ = _λk_ +1but using just
the variables inA _k_ − 1. This yields the estimate _β_ ˆA _k_ − 1 ( _λk_ +1). The _covariance
test statistic_ is defined by

```
Tk =
```
###### 1

```
σ^2
```
###### ·

###### (

```
〈 y , X β ˆ( λk +1)〉−〈 y , X β ˆA k − 1 ( λk +1)〉
```
###### )

###### . (6.5)

This statistic measures how much of the covariance between the outcome and
the fitted model can be attributed to the predictor that has just entered the
model; i.e., how much improvement there was over the interval ( _λk,λk_ +1) in
this measure. Interestingly, for forward-stepwise regression, the corresponding
covariance statistic is equal to _Rk_ (6.4); however, for the lasso this is not the
case (Exercise 6.2).
Remarkably, under the null hypothesis that all _k_ −1 signal variables are
in the model, and under general conditions on the model matrix **X** , for the
predictor entered at the next step we have

```
Tk
d
→Exp(1) (6.6)
```
as _N, p_ → ∞. Figure 6.8(b) shows the quantile-quantile plot for _T_ 1 ver-
sus Exp(1). When _σ_^2 is unknown, we estimate it using the full model:
ˆ _σ_^2 = _N_^1 − _p_ RSS _p_. We then plug this into (6.5), and the exponential test be-
comes an _F_ 2 _,N_ − _p_ test.
Table 6.2 shows the results of forward stepwise regression and LAR/lasso
applied to the diabetes data. Only the first ten steps are shown in each case.
We see that forward stepwise regression enters eight terms at level 0.05, while
the covariance test enters only four. However as we argued above, the forward
stepwise p-values are biased downward, and hence they are not trustworthy. In
Exercise 6.3 we discuss a method for combining a set of sequential p-values to
control the false discovery rate of the list of selected predictors. When applied
to the covariance test at an FDR of 5%, it yields a model containing the first
four predictors. For comparison, cross-validation estimated the optimal model
size for prediction to be in the range of 7 to 14 predictors.
Why is the mean of the forward-stepwise statistic _R_ 1 much larger than one,
while the mean of _T_ 1 is approximately equal to one? The reason is _shrinkage_ :
the lasso picks the best predictor available at each stage, but does not fit it
fully by least squares. It uses shrunken estimates of the coefficients, and this
shrinkage compensates exactly for the inflation due to the selection. This test
is also the natural analogue of the degrees of freedom result for the lasso and


###### 150 STATISTICAL INFERENCE

**Table 6.2** _Results of forward stepwise regression and LAR/lasso applied to the di-
abetes data introduced in Chapter 2. Only the first ten steps are shown in each case.
The p-values are based on (6.4), (6.5), and (6.11), respectively. Values marked as 0
are<_ 0_._ 01_._

```
Forward Stepwise LAR/lasso
Step Term p-value Term p-value
Covariance Spacing
1 bmi 0 bmi 0 0
2 ltg 0 ltg 0 0
3 map 0 map 0 0.01
4 age:sex 0 hdl 0.02 0.02
5 bmi:map 0 bmi:map 0.27 0.26
6 hdl 0 age:sex 0.72 0.67
7 sex 0 glu^2 0.48 0.13
8 glu^2 0.02 bmi^2 0.97 0.86
9 age^2 0.11 age:map 0.88 0.27
10 tc:tch 0.21 age:glu 0.95 0.44
```
LAR, discussed in Section 2.5. The lasso with _k_ nonzero coefficients has _k_
degrees of freedom in expectation, and LAR spends one degree of freedom in
each segment ( _λk_ +1 _,λk_ ) along the path. The covariance test has mean equal
to one, the degrees of freedom per step. In a sense, the Exp(1) distribution is
the analogue of the _χ_^21 distribution, for adaptive fitting.
The exponential limiting distribution for the covariance test (6.5) requires
certain conditions on the data matrix **X** , namely that the signal variables
(having nonzero true coefficients) are not too correlated with the noise vari-
ables. These conditions are similar to those needed for support recovery for
the lasso (Chapter 11). In the next section we discuss a more general scheme
that gives the _spacing test_ , whose null distribution holds exactly for finite _N_
and _p_ , and works for any **X**.

#### 6.3.2 A General Scheme for Post-Selection Inference

Here we discuss a general scheme for inference after selection—one that yields
exact p-values and confidence intervals in the Gaussian case. It can deal with
any procedure for which the selection events can be characterized by a set of
linear inequalities in **y**. In other words, the selection event can be written as
{ **Ay** ≤ _b_ }for some matrix **A** and vector _b_. In particular, it can be applied to
successive steps of the LAR algorithm, where it gives an exact (finite sample)
form of the covariance test. Similarly, it can be applied to forward stepwise
regression, and to the lasso at a fixed choice of the regularization parameter _λ_.
Why can the selection events for these procedures be written in the form
{ **Ay** ≤ _b_ }? This is easiest to see for forward-stepwise regression. In this case we


###### POST-SELECTION INFERENCE FOR THE LASSO 151

take _b_ = 0. At the first step, forward-stepwise regression chooses the predictor
whose absolute inner product with **y** is the largest (see Figure 6.10 for an
illustration). This can be expressed by forming 2( _p_ −1) rows in the matrix
**A** , each computing a difference of inner products, once each for the positive
and negative directions. Similarly, at the next step we add 2( _p_ −2) rows
contrasting the inner product between the selected predictor and the other
_p_ −2 predictors, and so on.
The lasso solution at a fixed value of _λ_ is characterized by an active set of
variablesA, along with the signs of their coefficients. Again, it turns out that
the selection event that led to this particular combination can be written in
the form{ **Ay** ≤ _b_ }for some **A** and _b_. That is, the set{ **y** | **Ay** ≤ _b_ }corresponds
to the values of the outcome vector **y** that would yield this same collection
of active variables and signs (with **X** fixed) (see Lee, Sun, Sun and Taylor
(2016), and Exercise 6.10). The same is true for the LAR algorithm after its
_kth_ step.
Now suppose that **y** ∼ _N_ ( **_μ_** _,σ_^2 **I** _N_ × _N_ ), and that we want to make infer-
ences conditional on the event{ **Ay** ≤ _b_ }. In particular, we wish to make
inferences about **_η_** _T_ **_μ_** , where **_η_** might depend on the selection event. With
lasso, LAR, or forward-stepwise regression having selected this set, we can
now make inference statements about the selected variables. For example,
we could be interested in the (ordinary) regression coefficients of **y** on **X** A,
namely _θ_ ˆ= ( **X** _T_ A **X** A)−^1 **X** _T_ A **y**. These correspond to the population parameters
_θ_ = ( **X** _T_ A **X** A)−^1 **X** _T_ A **_μ_** , the coefficients in the projection of **_μ_** on **X** A. So here
**_η_** _T_ **_μ_** could correspond to one of these coefficients, and hence **_η_** is one of the
columns of **X** A( **X** _T_ A **X** A)−^1. We pursue this example in Section 6.3.2.1.
Lee et al. (2016) and Taylor, Lockhart, Tibshirani 2 and Tibshirani (2014)
show that

```
{ Ay ≤ b }={V−( y )≤ η T y ≤V+( y ) , V^0 ( y )≥ 0 } , (6.7)
```
and furthermore, **_η_** _T_ **y** and (V−( **y** ) _,_ V+( **y** ) _,_ V^0 ( **y** )) are statistically indepen-
dent. See Figure 6.9 for a geometric view of this surprising result, known as
the _polyhedral lemma_. The three values on the right in (6.7) are computed via

```
α =
```
```
A η
‖ η ‖^22
```
```
V−( y ) = max
j : αj< 0
```
```
bj −( Ay ) j + αj η T y
αj
```
```
V+( y ) = min
j : αj> 0
```
```
bj −( Ay ) j + αj η T y
αj
V^0 ( y ) = min
j : αj =0
( bj −( Ay ) j )
```
###### (6.8)

(Exercise 6.7). Hence the selection event{ **Ay** ≤ _b_ }is equivalent to the event
that **_η_** _T_ **y** falls into a certain range, a range depending on **A** and _b_. This
equivalence and the independence means that the conditional inference on


###### 152 STATISTICAL INFERENCE

```
V−(y) V+(y)
Pη⊥y
```
```
Pηy
```
```
ηTy
```
```
y
```
```
η
```
```
{Ay≤b}
```
**Figure 6.9** _Schematic il lustrating the polyhedral lemma (6.7), for the caseN_ = 2
_and_ ‖ **_η_** ‖ 2 = 1_. The yel low region is the selection event_ { **Ay** ≤ _b_ }_. We decompose_ **y**
_as the sum of two terms: its projectionP_ **_η_** **y** _onto_ **_η_** _(with coordinate_ **_η_** _T_ **y** _) and its
projection onto the_ ( _N_ −1) _-dimensional subspace orthogonal to_ **_η_** _:_ **y** = _P_ **_η_** **y** + _P_ **_η_** ⊥ **y**_.
Conditioning onP_ **_η_** ⊥ **y** _, we see that the event_ { **Ay** ≤ _b_ } _is equivalent to the event_
{V−( **y** )≤ **_η_** _T_ **y** ≤ V+( **y** )}_. Furthermore_ V+( **y** ) _and_ V−( **y** ) _are independent of_ **_η_** _T_ **y**
_since they are functions ofP_ **_η_** ⊥ **y** _only, which is independent of_ **y**_._

**_η_** _T_ **_μ_** can be made using the truncated distribution of **_η_** _T_ **y** , a truncated normal
distribution.
To use this fact, we define the cumulative distribution function (CDF) of
a truncated normal distribution with support confined to [ _c,d_ ]:

```
Fμ,σc,d 2 ( x ) =
Φ(( x − μ ) /σ )−Φ(( c − μ ) /σ )
Φ(( d − μ ) /σ )−Φ(( c − μ ) /σ )
```
###### , (6.9)

with Φ the CDF of the standard Gaussian. Now the CDF of a random variable,
evaluated at the value of that random variable, has a uniform distribution.
Hence we can write

```
F V
```
```
− , V+
η T μ , σ^2 ‖ η ‖^22
```
###### (

```
η T y
```
###### )

```
|{ Ay ≤ b }∼U(0 , 1). (6.10)
```
This result is used to make conditional inferences about any linear functional
**_η_** _T_ **_μ_**. For example, we can compute a p-value for testing **_η_** _T_ **_μ_** = 0. We can
also construct a 1− _α_ level selection interval for _θ_ = **_η_** _T_ **_μ_** by inverting this

test, as follows. Let _P_ ( _θ_ ) = _F_ V

```
− , V+
θ, σ^2 ‖ η ‖^22
```
###### (

```
η T y
```
###### )

```
|{ Ay ≤ b }. The lower boundary
```
of the interval is the largest value of _θ_ such that 1− _P_ ( _θ_ )≤ _α/_ 2, and the
upper boundary is the smallest value of _θ_ such that _P_ ( _θ_ )≤ _α/_ 2.

_Example 6.1._ To help understand these results, we present an example. We
simulated _N_ = 60 observations from the model _Y_ =

∑ _p
j_ =1 _Xjβj_ + _Z_ , with
_X_ 1 _,X_ 2 _,...,Xp, Z_ ∼ _N_ (0 _,_ 1), and each standardized to have sample mean
zero and unit _`_ 2 norm. We considered the global null case with all _βj_ = 0, and


###### POST-SELECTION INFERENCE FOR THE LASSO 153

```
x 1
```
x 2 ∞

```
hx 1 ,yi
```
```
V−(y)
```
```
y
V−(y)
```
```
x 1
```
```
x 2
```
```
x 3
```
```
∞
hx 1 ,yi
```
```
y
```
```
Figure 6.10 Selection regions in Example 6.1 for whichλ 1 =〈 x 1 , y 〉. Left panel: two
orthogonal predictors; right panel: three correlated predictors. The red line indicates
the part of the setP η ⊥ y + t η inside the selection region. In the left panel, V−( y ) =
〈 x 2 , y 〉 , while in the right it isλ 2.
```
```
found the predictor j 1 having largest absolute inner product with y. This is the
first variable to enter the LAR or lasso path. We wish to make inference on λ 1 ,
the value of the largest knot in LAR, under the global null hypothesis. Thus
η = x j 1 and η T y is the attained inner product (for simplicity we condition
on a positive sign for the inner-product). Note that with our standardization,
η T y = x Tj 1 y is also the simple least-squares coefficient of y on the chosen x j 1 ,
and so we are also making (conditional) inference on the population coefficient
in the simple regression of y on x j 1. We chose five scenarios with number of
predictors p ∈ { 2 , 5 , 10 , 20 , 50 }. We also considered two correlation patterns
for the predictors: uncorrelated and pairwise correlation 0. 5. Figure 6.10 il-
lustrates the corresponding version of Figure 6.9 for the two situations. The
upper bound in all cases isV+=∞, and the lower boundV−depends on y in
each simulation. In the orthogonal case (left panel), conditioning on P η ⊥ y re-
duces to conditioning on the values of| x Tk y |, for all predictors k not achieving
the maximum absolute inner product. Hence the lower bound on η T y is the
second-largest among these. The right panel shows the nonorthogonal case,
with correlations between the Xj. Here the situation is slightly more complex,
but nevertheless a simple formula can be used to deriveV−( y ): it turns out
to be λ 2 , the second knot in the LAR sequence (Exercise 6.11). Figure 6.11
shows the resulting truncated normal densities from (6.10), averaged over 100
simulations. We plotted the density for the average value ofV−over the simu-
lations. The colored squares along the bottom show the average largest inner
product λ 1 = η T y in each setting. In the lower panel, with larger p , the effec-
tive number of variables is smaller due to the correlation, so the maximum is
smaller as well. We pursue this example further in Section 6.3.2.2. ♦
This general mechanism (6.10) allows one to make inferences about any
```

###### 154 STATISTICAL INFERENCE

```
0 1 2 3 4
```
```
0.0 0.5 1.0 1.5 2.0
```
```
Density
```
```
p=2
p=5
p=10
p=20
p=50
```
```
Uncorrelated Predictors
```
```
0 1 2 3 4
```
```
0.0 0.5 1.0 1.5 2.0
```
```
Density
```
```
Pairwise Correlation 0.5
```
**Figure 6.11** _Simulation:N_ = 60 _observations from the model withX_ 1 _,X_ 2 _,...Xp_ ∼
_N_ (0 _,_ 1) _,Y_ =

###### ∑

_jXijβj_ + _ZwithZ_ ∼ _N_ (0 _,_ 1) _, with allβj_ = 0 _; two different predictor-
correlation settings. The selection chooses the predictorj_ 1 _having largest absolute
inner product with_ **y**_. Shown is the truncated density on the left-hand side of (6.10)
forp_ = 2 _,_ 5 _,_ 10 _,_ 20 _,_ 50_. The colored squares along the bottom show the average largest
inner product in each setting._

linear functional **_η_** _T_ **_μ_** ; for example, inferences about any parameter **_η_** _T_ **_μ_** at
a given step of the LAR algorithm, or at a lasso solution computed at _λ_.
The form of **A** and _b_ is different depending on the setting, but otherwise
the construction is the same. We illustrate two applications in the next two
sections.

##### 6.3.2.1 Fixed- λ Inference for the Lasso

Consider the solution to the lasso, at some fixed value of _λ_. We can apply
result (6.10) by constructing **A** and _b_ so that the event{ **Ay** ≤ _b_ }represents
the set of outcome vectors **y** that yield the observed active set and signs of the
predictors selected by the lasso at _λ_. These inequalities derive from the sub-
gradient conditions that characterize the solution (Exercise 6.10). This yields
an active setAof variables, and we can now make conditional inference on the
population regression coefficients of **y** on **X** A, for example. This means we will
perform a separate conditional analysis for **_η_** equal to each of the columns of
**X** A( **X** _T_ A **X** A)−^1. Hence we can obtain exact p-values and confidence intervals
for the parameters of the active set in the lasso solution at _λ_. These quantities


###### POST-SELECTION INFERENCE FOR THE LASSO 155

have the correct type-I error and coverage _conditional on the membership and
signs of the active set._^3

```
−30
```
```
−10
```
```
0
```
```
10
```
```
20
```
```
30
```
```
Predictor
```
```
Coefficient
```
```
bmi map hdl ltg glu^2 age:sex bmi:map
```
```
OLS interval
Lasso interval
```
**Figure 6.12** _Lasso model fit to the diabetes data. The solution atλ_ = 7 _yields a
model with seven nonzero coefficients. Shown are the 95% confidence intervals for the
least-squares fit using the chosen variables. The OLS intervals ignore the selection,
while the lasso intervals are exact under a Gaussian assumption, and condition on
the selection event. Disclosure:λwas selected by cross-validation (1 SE rule), and
σ_^2 _in (6.10) was estimated using the residuals from the ful l regression on al l 64
variables._

Figure 6.12 shows the result of fixed- _λ_ lasso inference for the diabetes data
with _λ_ = 7; seven variables were selected. Notice that we now focus attention
on the OLS regression coefficients using the reduced model containing only
those seven predictors. The blue intervals are based on the usual multiple
regression normal theory, ignoring the fact that we used the data to select
the seven variables from the full set of 64. The red post-selection intervals
were constructed by inverting relationship (6.10), and take the selection into
account. We see that these two sets of intervals are similar for the larger
coefficients, but the selection-adjusted ones are (appropriately) longer for the
smaller coefficients.
How did we choose _λ_ = 7? Here we cheated a bit, and used ten-fold cross-
validation (using the one-standard-error rule). In practice one would need to
condition on this selection event as well, which would add considerably more
complexity to the selection set. Simulations suggest this does not widen the
confidence intervals substantially. In the next section, we discuss conditional
inference at the LAR sequence{ _λk_ }, which limits the set of _λ_ s to the knots in

(^3) Lee et al. (2016) also discuss inference without conditioning on the signs, by considering
the union of all regions with the same active set.


###### 156 STATISTICAL INFERENCE

the lasso path. We also needed to estimate _σ_ in (6.10); since _N > p_ , we used
the root mean-squared error from the full regression on all 64 predictors for
this purpose.

##### 6.3.2.2 The Spacing Test for LAR

Here we apply the inference procedure (6.10) to successive steps of the LAR
algorithm. We already visited the first step in Example 6.1 on page 152, for
testing the global null hypothesis. There we set **_η_** _T_ 1 **y** = _λ_ 1 = max _j_ |〈 **x** _j,_ **y** 〉|,
and the test amounts to testing if this maximum covariance exceeds what we
expect by chance. We saw thatV−= _λ_ 2 ,V+= +∞, and hence the resulting
test can be written in a very simple form:

###### R 1 = 1− F V

```
− , V+
0 ,σ^2 ( λ^1 |{ Ay ≤ b }) =
```
```
1 −Φ( λ 1 /σ )
1 −Φ( λ 2 /σ )
```
###### ∼ U (0 , 1). (6.11)

Remarkably, the uniform distribution above holds _exactly_ for finite _N_ and _p_ ,
and for any **X**. This is known as the _spacing_ test (Taylor et al. 2014) for the
global null hypothesis: it is a nonasymptotic version of the covariance test,
and is asymptotically equivalent to it (Exercise 6.5). The spacing test is a
monotone function of _λ_ 1 − _λ_ 2 : the larger this spacing, the smaller the p-value.
Similarly, there is a more general form of the spacing test for testing that
the partial regression coefficient of the variable added at any given LAR step
is zero. These tests are based on the successive values for _λk_ , and result in
expressions more complex than Equation (6.11).
In detail, if variable **x** _jk_ is chosen at the _kth_ step in the LAR algorithm,
one can show that the corresponding knot _λk_ is given by _λk_ = **_η_** _Tk_ **y** , with

```
η k =
```
```
P ⊥A k − 1 x jk
sk − x Tjk X A k − 1 ( X T A k − 1 X A k − 1 )−^1 s A k − 1
```
###### (6.12)

(Exercise 6.8). HereA _k_ − 1 indexes the active set after _k_ −1 steps, and

```
P ⊥A k − 1 = I N − X A k − 1 ( X T A k − 1 X A k − 1 )−^1 X A k − 1
```
is the residual projection operator that “adjusts” **x** _jk_ for **X** A _k_ − 1. Finally, _sk_
and _s_ A _k_ − 1 are the signs for the coefficients for variables _k_ and those indexed by
A _k_ − 1 (the latter being a ( _k_ −1)-vector). Using this value of **_η_** , the spacing test
follows from the general inference procedure outlined above, culminating in
(6.10) on page 152. The matrix **A** at knot _λk_ has considerably more rows than
in the fixed- _λ_ case, since we are conditioning on the entire sequence{ _λ`_ } _k_ 1.
Nevertheless the computations are quite manageable, and one can compute
exact p-values as well as confidence intervals for the chosen variables, as in
the fixed- _λ_ case.
Taylor et al. (2014) give some simplified versions of the general spacing
test—approximations to the exact case, that empirically are very close, and


###### POST-SELECTION INFERENCE FOR THE LASSO 157

asymptotically are equivalent (also with the covariance test). The most ap-
pealing of these has the form

```
Rk =
```
###### Φ

###### (

```
λk − 1
σ ‖ η k ‖ 2
```
###### )

###### −Φ

###### (

```
λk
σ ‖ η k ‖ 2
```
###### )

###### Φ

###### (

```
λk − 1
σ ‖ η k ‖ 2
```
###### )

###### −Φ

###### (

```
λk +1
σ ‖ η k ‖ 2
```
###### ) , (6.13)

which is an exact generalization of (6.11), usingV−= _λk_ − 1 andV+= _λk_ +1.
It is easy to see that the term of interest (top-right in (6.13)) is

```
θ ̃ k = λk
σ ‖ η ‖ 2
```
###### =

```
η Tk y
σ ‖ η ‖ 2
```
###### (6.14)

is the (absolute) standardized partial regression coefficient for **x** _jk_ in the pres-
ence of **X** A _k_ − 1 (Exercise 6.9); this view shows that testing for _λk_ amounts to
testing for this partial regression coefficient.
The rightmost column of Table 6.2 shows the result of this more general
spacing test applied to the diabetes data. Qualitatively the results look similar
to those from the covariance test.
Although the spacing test and fixed- _λ_ approaches are similar in their con-
struction, and are both exact, they are different in an important way. In par-
ticular, the spacing test applies to each step of the sequential LAR procedure,
and uses specific _λ_ values (the knots). In contrast, the fixed- _λ_ inference can be
applied at any value of _λ_ , but then treats this value as fixed. Hence it ignores
any additional variability caused by choosing _λ_ from the data.

#### 6.3.3 What Hypothesis Is Being Tested?

In adaptive testing, this question is tricky. The covariance test uses a set of
conditional hypotheses: at each stage of LAR, we are testing whether the coef-
ficients of all other predictors not yet in the model are zero. This is sometimes
called the _complete null_ hypothesis
It turns out that the spacing test has a different focus. At the first step, it
tests the global null hypothesis, as does the covariance test. But at subsequent
steps, it tests whether the partial correlation of the given predictor entered
at that step is zero, adjusting for other variables that are currently in the
model. This is sometimes called the _incremental nul l_ hypothesis. Unlike the
covariance test, it does not try to assess the overall correctness of the current
model. The fixed- _λ_ test is similar; it conditions on the current active set of
predictors and tests whether the coefficient of _any_ given predictor is zero in the
projected model. In contrast, Section 6.4 below discusses a procedure which
forms confidence intervals for the _population_ regression parameters in the full
model.


###### 158 STATISTICAL INFERENCE

#### 6.3.4 Back to Forward Stepwise Regression

At the beginning of this section, we complained that na ̈ıve inference for
forward-stepwise regression ignores the effects of selection, as in Figure 6.8(a)
and the left side of Table 6.2. Coming full circle, we note that the general
inference procedure outlined in Section 6.3.2 can in fact be applied to forward
stepwise regression, providing proper selective inference for that procedure as
well. In that case, the constraint matrix **A** is somewhat complicated, con-
taining approximately 2 _pk_ rows at step _k_. However the resulting procedure is
computationally tractable: details are in Taylor et al. (2014) and Loftus and
Taylor (2014).

### 6.4 Inference via a Debiased Lasso

The aim of the method that we describe here is quite different from those
discussed in Section 6.3. It does not attempt to make inferences about the
partial regression coefficients in models derived by LAR or the lasso. Instead
it directly estimates confidence intervals for the full set of population regres-
sion parameters, under an assumed linear model. To do so, it uses the lasso
estimate^4 as a starting point and applies a debiasing operation to yield an
estimate that can be used for constructing confidence intervals.
Suppose we assume that the linear model **y** = **X** _β_ + **__** is correct, and we
want confidence intervals for the components{ _βj_ } _p_ 1. Then if _N > p_ , we can
simply fit the full model by least squares and use standard intervals from
least-squares theory

```
β ̂ j ± z ( α ) vjσ, ˆ (6.15)
```
where _β_ ̂is the OLS estimate, _vj_^2 =

###### (

###### X T X

###### )− 1

```
jj , ˆ σ
```
(^2) =∑
_i_ ( _yi_ − _y_ ˆ _i_ )
(^2) _/_ ( _N_ − _p_ ),
and _zα_ is the _α_ -percentile of the standard normal distribution. However this
approach does not work when _N < p_.
One proposal that has been suggested (Zhang and Zhang 2014, B ̈uhlmann
2013, van de Geer, B ̈uhlmann, Ritov and Dezeure 2013, Javanmard and
Montanari 2014), is to use a debiased version of the lasso estimator, namely
_β_ ̂ _d_ = _β_ ̂ _λ_ +^1
_N_ **ΘX**
_T_ ( **y** − **X** _β_ ̂ _λ_ ) _,_ (6.16)
where _β_ ̂ _λ_ is the lasso estimate at _λ_ , and **Θ** is an approximate inverse of
**Σ** ̂=^1
_N_ **X**
_T_ **X**. (^5) From this, we can write
_β_ ̂ _d_ = _β_ +^1
_N_ **ΘX**

###### T  + ( I

```
p −
1
N ΘX
```
```
T X )( β ̂
λ − β )
︸ ︷︷ ︸
∆ ˆ
```
###### (6.17)

(^4) Fit using a value of _λ_ based on consistency considerations.
(^5) If _N_ ≥ _p_ , then **Θ** − (^1) =^1
_N_ **X**
_T_ **X** and (6.16) would be exactly unbiased for _β_. However
when _N < p_ , **X** _T_ **X** _/N_ is not invertible and we try to find an approximate inverse.


###### INFERENCE VIA A DEBIASED LASSO 159

with **__** ∼ _N_ ( **0** _,σ_^2 **I** _p_ ). These authors provide (different) estimates of **Θ** so
that‖ **∆** ˆ‖∞ → 0. From Equation (6.17), one can use the approximation

_β_ ̂ _d_ ∼ _N_ ( _β,σ_^2
_N_ **Θ
ΣΘ** ̂ _T_ ) to form confidence intervals for the components _βj_.
The debiasing operation (6.16) can be viewed as an approximate Newton step
for optimizing the residual sum of squares, starting at the lasso estimate _β_
(Exercise 6.6). There have been different proposals for estimating **Θ** :

- van de Geer et al. (2013) estimate **Θ** using neighborhood-based methods
    to impose sparsity on the components (see Chapter 9 for details on sparse
    graph estimation).
- Javanmard and Montanari (2014) use a different approach: for each _j_ they
    define _mj_ to be the solution to the convex program

```
minimize
m ∈R p
mT Σ ̂ m (6.18)
```
```
subject to ‖ Σ ̂ m − ej ‖∞≤ γ, (6.19)
```
```
with ej being the jth unit vector. Then they set
```
```
Θ ̂:= ( m 1 ,m 2 ,...,mp ). (6.20)
```
```
This tries to make both Σ ̂ Θ ̂≈ I and the variances of β ̂ jd small.
```
```
−20
```
```
−10
```
```
0
```
```
10
```
```
20
```
```
30
```
```
Predictors
```
```
Coefficients
```
```
ltg bmi
mapsex
age:sex
```
```
hdl
```
```
Lasso estimate
Debiased estimate
95% CI
```
**Figure 6.13** _Diabetes data: Lasso estimates, debiased lasso estimates, and confi-
dence intervals from the debiasing approach. These intervals have not been adjusted
for multiple comparisons. The first 6 predictors have intervals not containing zero:
when Bonferroni-adjusted, this number drops to three._

Figure 6.13 shows the result of applying the debiasing procedure of Javanmard
and Montanari (2014) to the diabetes data. For six of the predictors, the


###### 160 STATISTICAL INFERENCE

95% confidence intervals do not contain zero. However these intervals are not
corrected for multiple comparisons; if we instead use a Bonferroni-adjusted
level of 0_._ 05 _/_ 64, then the number of significant predictors drops to three. The
top three predictors agree with those from the covariance and spacing tests
of Table 6.2; the fourth predictor (sex) is not entered until step seven by the
forward stepwise algorithm of Table 6.2, and not in the first ten steps by the
other two procedures.

### 6.5 Other Proposals for Post-Selection Inference

The PoSI method (Berk, Brown, Buja, Zhang and Zhao 2013, “Post-Selection
Inference”) fits the selected submodel, and then adjusts the standard (non-
adaptive) confidence intervals by accounting for all possible models that might
have been delivered by the selection procedure. The adjustment is not a func-
tion of the particular search method used to find the given model. This can
be both an advantage and a disadvantage. On the positive side, one can apply
the method to published results for which the search procedure is not speci-
fied by the authors, or there is doubt as to whether the reported procedure is
an accurate account of what was actually done. On the negative side, it can
produce very wide (conservative) confidence intervals in order to achieve its
robustness property.
In detail, consider again the linear model **y** = **X** _β_ + **__** , and suppose that
a model-selection procedureMchooses a submodel _M_ , with estimate _β_ ̂ _M_.
The authors of PoSI argue that inferences should most naturally be made not
about the true underlying parameter vector _β_ , but rather the parameters in
the projection of **X** _β_ onto **X** _M_ :

```
βM = ( X TM X M )−^1 X TM X β. (6.21)
```
This approach was also adopted with the conditional inference discussed in
Section 6.3.2. Consider a confidence interval for the _jth_ component of _βM_ of
the form

```
CI j · M = β ̂ j · M ± Kσv ˆ j · M, (6.22)
```
with _v_^2 _j_ · _M_ = ( **X** _TM_ **X** _M_ )− _jj_^1. Then the PoSI procedure delivers a constant _K_ so
that

```
Pr( βj · M ∈CI j · M )≥ 1 − 2 α (6.23)
```
over all possible model selection proceduresM. The value of _K_ is a function of
the data matrix **X** and the maximum number of nonzero components allowed
in√ _βM_ , but not the outcome vector **y**. The authors show that _K_ grows like
2 log( _p_ ) for orthogonal designs but can grow as quickly as

###### √

_p_ for nonorthog-
onal designs.
Note that any individual parameter in any projected submodel of the form
(6.21) can be written as _aTβ_ , with least-squares estimate _aTβ_ ̂, where _β_ ̂is the


###### BIBLIOGRAPHIC NOTES 161

least-squares estimate for the full model. Scheff ́e (1953) provides a way to
obtain simultaneous inference for _al l_ such linear combinations:

```
Pr
```
###### [

```
sup
a
```
```
[ aT ( β ̂− β )]^2
aT ( X T X )−^1 a · σ ˆ^2
≤ KSch^2
```
###### ]

```
= 1− 2 α. (6.24)
```
Assuming that the full model is correct, with Gaussian errors, it can be shown
that _KSch_ =

###### √

```
pFp,N − p, 1 − 2 α , which provides the
```
###### √

_p_ upper bound referred to
above. The PoSI authors show that using numerical methods and direct search,
smaller values of _K_ can be found for actual model matrices **X** , in particular
when the user limits the search to all models within a certain maximum size.
For the diabetes data, Andreas Buja computed for us the value of _K_ for
submodels of size 5 (this took a little less than 2 hours of computing time).
The resulting values of _K_ were 4.21 (90%), 4.42 (95%), and 4.85 (99%). At the
95% level, this yielded four significant predictorsbmi,map,hdl, andltg. This
is one more predictor than we obtain from the lasso method of Figure 6.12, if
the latter intervals were adjusted for multiplicity.
The PoSI intervals have advantages compared to the lasso method of Fig-
ure 6.12 in that they don’t require _σ_ to be known or _λ_ to be fixed. On the
other hand, the confidence intervals from PoSI can be very wide. In the di-
abetes dataset there are four very strong predictors: their lasso intervals are
essentially unaffected by the selection and look much like the standard least-
squares intervals. Even with a Bonferroni adjustment from 0.05 to 0.01, the
intervals have approximate length± 2_._ 33 · _σvj_ · _M_ compared to± 4_._ 42 · _σvj_ · _M_ for
PoSI. However the authors of PoSI make the point that their method provides
much stronger protection against all kinds of (unreported) things that people
actually do with their data, like fishing for models that have lots of significant
predictors.
A major limitation of PoSI at this time is computation. According to the
authors, with parallel computation the current problem could probably be
solved for models up to size 7 or 8 out of 64, but no larger.

### Bibliographic Notes

Our discussion of the Bayesian Lasso is based on Park and Casella (2008). The
bootstrap is due to Efron (1979); the book by Efron and Tibshirani (1993) is a
comprehensive reference. The connection between Bayesian methods and the
bootstrap is explored in various papers (Rubin 1981, Efron 1982, Efron 2011).
The covariance test was introduced in Lockhart, Taylor, Tibshirani 2 and
Tibshirani (2014); the discussion following that paper is a valuable resource on
model selection. This work was extended to general models and exact tests in
Taylor, Loftus and Tibshirani 2 (2016). The spacing test is proposed in Taylor
et al. (2014), while Lee et al. (2016) derive the fixed _λ_ inference procedure
for the lasso. Taylor et al. (2014) and Loftus and Taylor (2014) propose tests
for forward stepwise regression, the latter including categorical variables via
the group lasso penalty. Grazier G’Sell, Wager, Chouldechova and Tibshirani


###### 162 STATISTICAL INFERENCE

(2015) propose FDR-controlling procedures for sequential testing and apply
them to the model selection p-values described here. Grazier G’Sell, Taylor
and Tibshirani (2013) develop a covariance test for the graphical lasso while
Choi, Taylor and Tibshirani (2014) do the same for principal components.
Fithian, Sun and Taylor (2014) provide a general theoretical framework for
conditional inference after model selection, with particular emphasis on expo-
nential families.
The “debiasing approach” (Section 6.4) was proposed by a number of au-
thors. For example, Zhang and Zhang (2014) derive confidence intervals for
contrasts of high-dimensional regression coefficients, by replacing the usual
score vector with the residual from a relaxed projection (i.e., the residual
from sparse linear regression). B ̈uhlmann (2013) constructs p-values for coef-
ficients in high-dimensional regression models, starting with ridge estimation
and then employing a bias-correction term that uses the lasso. This initial
work was followed by van de Geer et al. (2013), Javanmard and Montanari
(2014), and Javanmard and Montanari (2013), who all present approaches
for debiasing the lasso estimate based on estimates of the inverse covariance
matrix of the predictors. (The latter work focuses on the special case of a
predictor matrix **X** with i.i.d. Gaussian rows; the first two consider a general
matrix **X** .) These debiased lasso estimates are asymptotically normal, which
allows one to compute p-values both marginally for an individual coefficient,
and simultaneously for a group of coefficients. The PoSI (Post-Selection In-
ference) method was proposed in Berk et al. (2013).

### Exercises

Ex. 6.1

```
(a) Show that in the orthonormal design setting X T X = I p × p , the covariance
test (6.5) reduces to the simple form
```
```
Tk =
```
###### 1

```
σ^2
```
```
· λk ( λk − λk +1). (6.25)
```
```
for all steps k.
(b) Show that for general X , the covariance test (6.5) reduces to (6.25) for
the first step ( k = 1)
```
Ex. 6.2 Show that _Rk_ in Equation (6.4) can be written as a covariance statistic

```
Rk =
```
###### 1

```
σ^2
```
###### ·

###### (

```
〈 y , X β ˆ k 〉−〈 y , X β ˆ k − 1 〉
```
###### )

###### , (6.26)

where _β_ ˆ _k_ is the coefficient vector after _k_ steps of forward stepwise regression
(with the coefficients of those variables not included set to 0).


###### EXERCISES 163

Ex. 6.3 _Sequential control of FDR_. Suppose that we carry out tests of a set
of hypotheses _H_ 01 _,H_ 02 _,...,H_ 0 _m_ , using p-values _p_ 1 _,p_ 2 _,...,pm_. Let the ordered
p-values be _p_ (1) _< p_ (2) _< ... < p_ ( _m_ ). If we apply a procedure that rejects _R_
of the hypotheses and there are _V_ false positives among these, then the _false
discovery rate_ of the procedure is defined to be E( _V/R_ ). Given a target FDR of
_α_ , the Benjamini–Hochberg (BH) procedure (Benjamini and Hochberg 1995)
rejects the _R_ hypotheses with the smallest _R_ p-values, where _R_ is the largest
_j_ such that _p_ ( _j_ )≤ _α_ · _j/m_. If the p-values are independent, this procedure has
an FDR of at most _α_.

```
(a) Compute the univariate regression coefficients β ̂ j and standard errors
sê j for each predictor in thediabetesdata. Hence obtain approximate
normal scores zj = β ̂ j/ sê j and associated (two)-tailed p-values. Apply the
BH procedure to find a list of significant predictors at an FDR of 5%.
(b) Now suppose that our hypotheses have to be considered in order. That
is, we must reject a contiguous initial block of K of the hypotheses H 01 , H 02 ,
...,HK 0 (or we could reject none of them). The covariance or spacing test
are examples of this. The BH procedure cannot be applied in this setting, as
it does not respect the ordering. For example in Table 6.2, the BH procedure
might tell us to reject the null hypothesis forltg, but not reject that for
bmi. This is not helpful, because we seek a model consisting of the first k
predictors that enter, for some k ≥0. There is a generalization of the BH
procedure that can be applied here. Let the p-values from the covariance or
spacing test be p 1 ,p 2 ,...pm and let rk =−
```
```
∑ k
j =1log(1− pj ) /k. Then the
so-called ForwardStop rule rejects p 1 ,p 2 ,...p ˆ k whereˆ k is the largest k such
that rk ≤ α (Grazier G’Sell et al. 2015). Apply the ForwardStop rule to the
covariance or spacing test p-values with a target FDR of 5%.
```
Ex. 6.4 Here we derive a fact about the multivariate normal distribution, and
then in (c) we apply it to derive the spacing test for LAR in the global null case.
Suppose that the random vector _Z_ = ( _Z_ 1 _,...,Zp_ ) follows the multivariate
normal distribution _N_ (0 _,_ **Σ** ) with Σ _jj_ = 1 for all _j_.

```
(a) Let
( j 1 ,s 1 ) = arg max
j ∈{ 1 , 2 ,...,p } , s ∈{− 1 , 1 }
```
```
( sZj )
```
```
and assume that these indices are uniquely attained. Define the random
variables
```
```
Mj = max
1 ≤ i ≤ p, i 6 = j, s ∈{− 1 , 1 }
```
###### {

```
sZi − s Σ ijZj
1 − ssj Σ ij
```
###### }

###### . (6.27)

```
with sj = arg max s ∈{− 1 , 1 }( sZj ). Show that Mj is independent of Zj , for
j = 1 , 2 ,...p.
(b) Let Φ( x ) be the CDF of a standard Gaussian, and
```
```
U ( z,m ) =
1 −Φ( z )
1 −Φ( m )
```
###### . (6.28)


###### 164 STATISTICAL INFERENCE

```
Verify that j 1 = j if and only if Zj ≥ Mj , and prove that U ( Zj 1 ,Mj 1 ) is
uniformly distributed on (0 , 1).
(c) In the LAR procedure with standardized predictors, let Σ = N^1 X T X , and
Zj = N^1 x Tj y. Show that λ 1 = max j,s ( sZj ) and λ 2 = Mj 1 (difficult). Hence
derive the spacing test (6.11).
```
Ex. 6.5 Show that as _N,p_ →∞, the covariance test (6.5) and the spacing test
(6.11) are asymptotically equivalent. [Hint: send _λ_ 2 →∞at a rate such that
_λ_ 1 _/λ_ 2 →1 and apply Mill’s ratio.]

Ex. 6.6 Consider the residual sum of squares function _J_ ( _β_ ) =‖ **y** − **X** _β_ ‖^2 and
construct a Newton step for minimizing _J_ ( _β_ ) of the form

```
βnew ← β +
```
###### ( ∂J

```
∂β
```
)− (^1) _∂J
∂β_

###### (6.29)

where _β_ is the lasso estimate at some _λ_. Show that this has the form (6.16)
with ( **X** _T_ **X** )−^1 replaced by the estimate **Θ** ̂from (6.20).

Ex. 6.7 _General inference for the LAR algorithm and the lasso._ Let **y** ∼
_N_ ( **_μ_** _,σ_^2 **I** ), and consider the distribution of **y** conditional on the selection
event{ **Ay** ≤ _b_ }.

```
(a) Show that
```
```
{ Ay ≤ b }={V−( y )≤ η T y ≤V+( y ) , V^0 ( y )≥ 0 } (6.30)
```
```
with the variables above defined as follows:
```
```
α =
A η
‖ η ‖^2
```
```
V−( y ) = max
j : αj< 0
```
```
bj −( Ay ) j + αj η T y
αj
```
```
V+( y ) = min
j : αj> 0
```
```
bj −( Ay ) j + αj η T y
αj
V^0 ( y ) = min
j : αj =0
( bj −( Ay ) j ) (6.31)
```
```
[Hint: subtract E( Ay | η T y ) from both sides of the inequality Ay ≤ b. Sim-
plify and examine separately the cases αj< 0 , = 0 and > 0.]
(b) Let
```
```
Fμ,σc,d 2 ( x ) =
```
```
Φ(( x − μ ) /σ )−Φ(( c − μ ) /σ )
Φ(( d − μ ) /σ )−Φ(( c − μ ) /σ )
```
###### . (6.32)

```
This is the truncated normal distribution, with support on [ c,d ]. Show that
```
```
F V
```
```
− , V+
η T μ , σ^2 ‖ η ‖^2 ( η
```
```
T y )|{ Ay ≤ b }∼U(0 , 1). (6.33)
```

###### EXERCISES 165

```
This result can be used to make inferences about parameter η T μ at a given
step of the LAR algorithm, or for a lasso solution computed at a fixed value
of λ.
(c) Use result (6.33) to provide an alternate proof of the spacing test re-
sult (6.11).
```
Ex. 6.8 The _kth_ knot in the LAR algorithm is the value _λk_ at which the _kth_
variable enters the model. At _λk_ the coefficient of this variable is zero (about
to grow from zero). Using the KKT optimality conditions, verify expression
(6.12).

Ex. 6.9 With **_η_** _k_ defined in (6.12), show that _θ_ ̃ _k_ in (6.14) is the absolute
standardized partial regression coefficient of **y** on **x** _jk_ , adjusted for **X** A _k_ − 1.

Ex. 6.10 Consider a solution to the lasso problem

```
minimize
β
```
###### 1

###### 2

```
‖ y − X β ‖^22 + λ ‖ β ‖ 1 ,
```
and let _E_ ⊂ { 1 _,...,p_ }denote a candidate active set, and _sE_ ∈ {− 1 _,_ 1 }| _E_ |
the signs of the active variables. The KKT conditions corresponding to any
solution _β_ ̂ _E_ with the same _E_ and _SE_ are given by

```
− X TE ( y − X Eβ ̂ E ) + λsE = 0 (6.34)
− X T − E ( y − X Eβ ̂ E ) + λs − E = 0 , (6.35)
```
with sign( _β_ ̂ _E_ ) = _sE_ and‖ _s_ − _E_ ‖∞ _<_ 1. Eliminate _β_ ̂ _E_ in these equations, and
show that the set of values of **y** with solution characterized by ( _E, sE_ ) can be
defined by a set of linear inequalities

```
Ay ≤ b.
```
Ex. 6.11 Consider the setup in Example 6.1, and assume **x** _Tj_ 1 **y** is positive.
Using simple inequalities, derive an expression forV−( **y** ). Show that this is
equal to _λ_ 2 , the second LAR knot.



```
Chapter 7
```
## Matrix Decompositions,

## Approximations, and Completion

### 7.1 Introduction

This chapter is devoted to problems of the following type: given data in the
form of an _m_ × _n_ matrix **Z** ={ _zij_ }, find a matrix **Z** ̂that approximates **Z** in a
suitable sense. One purpose might be to gain an understanding of the matrix
**Z** through an approximation **Z** ̂that has simple structure. Another goal might
be to impute or fill in any missing entries in **Z** , a problem known as _matrix
completion_.
Our general approach is to consider estimators based on optimization prob-
lems of the form

```
̂ Z = arg min
M ∈R m × n
```
```
‖ Z − M ‖^2 F subject to Φ( M )≤ c, (7.1)
```
where‖ · ‖^2 _F_ is the (squared) Frobenius norm of a matrix (defined as the
element-wise sum of squares), and Φ(·) is a constraint function that encourages
̂ **Z** to be sparse in some general sense. The manner in which we impose sparsity

leads to a variety of useful procedures, many of which are discussed in this
chapter. One can regularize the overall approximating matrix̂ **Z** , or factor
it and regularize the components of its factorization. Of course, there are
variations: for instance, the observed matrix **Z** might have missing entries,
so that the squared Frobenius norm‖·‖^2 _F_ is modified accordingly. In other
settings, we might impose multiple constraints on the approximating matrix **Z** ̂.
Table 7.1 provides a summary of the methods discussed in this chapter.
Method (a) is based on a simple _`_ 1 -norm constraint on all of the entries on
the matrix **Z** ̂; this constraint leads to a soft-thresholded version of the origi-
nal matrix—that is, the optimal solution to our general problem (7.1) takes
the form _z_ ̂ _ij_ = sign( _zij_ )(| _zij_ | − _γ_ )+, where the scalar _γ >_ 0 is chosen so

that

```
∑ m
i =1
```
```
∑ n
j =1| z ̂ ij |= c. The resulting estimate
̂ Z can be useful in the con-
```
text of sparse covariance estimation. Method (b) bounds the rank of **Z** ̂, or in
other words, the number of nonzero singular values in̂ **Z**. Although the ma-
trix approximation problem (7.1) with such a rank constraint is nonconvex,

```
167
```

###### 168 MATRIX DECOMPOSITIONS

```
Table 7.1 Different formulations for the matrix approximation problem.
```
```
Constraint Resulting method
(a) ‖ Z ̂‖ ` 1 ≤ c Sparse matrix approximation
(b) rank(̂ Z )≤ k Singular value decomposition
(c) ‖ Z ̂‖? ≤ c Convex matrix approximation
(d) Z ̂= UDV T ,
Φ 1 ( u j )≤ c 1 , Φ 2 ( v k )≤ c 2 Penalized SVD
(e) Z ̂= LR T,
Φ 1 ( L )≤ c 1 , Φ 2 ( R )≤ c 2 Max-margin matrix factorization
(f) Z ̂= L + S ,
Φ 1 ( L )≤ c 1 , Φ 2 ( S )≤ c 2 Additive matrix decomposition
```
the optimal solution is easily found by computing the singular value decom-
position (SVD) and truncating it to its top _k_ components. In method (c),
we relax the rank constraint to a _nuclear norm_ constraint, namely an upper
bound on the sum of the singular values of the matrix. The nuclear norm is
a convex matrix function, so that the problem in (c) is convex and can be
solved by computing the SVD, and soft-thresholding its singular values. This
modification—from a rank constraint in (b) to the nuclear norm constraint in
(c)—becomes important when the methods are applied to matrices with miss-
ing elements. In such settings, we can solve the corresponding problem (c)
exactly, whereas methods based on (b) are more difficult to solve in general.
The approach in (d) imposes penalties on the left and right singular vectors
of **Z** ̂. Examples of the penalty functions or regularizers Φ 1 and Φ 2 include the
usual _`_ 2 or _`_ 1 norms, the latter choice yielding sparsity in the elements of the
singular vectors. This property is useful for problems where interpretation of
the singular vectors is important. Approach (e) imposes penalties directly on
the components of the LR-matrix factorization; although ostensibly similar to
approach (d), we will see it is closer to (c) when Φ 1 and Φ 2 are the Frobenius
norm. Finally, approach (f) seeks an additive decomposition of the matrix,
imposing penalties on both components in the sum.
Matrix decompositions also provide an approach for constructing sparse
versions of popular multivariate statistical methods such as principal compo-
nent analysis, canonical correlation analysis and linear discriminant analysis.
In this case, the matrix **Z** is not the raw data, but is derived from the raw
data. For example, principal components are based on the sample covariance
matrix (or the column-centered data matrix), canonical correlation uses the
cross-products matrix from two sets of measurements, while clustering starts
with inter-point distances. We discuss these multivariate methods, and related
approaches to these problems, in Chapter 8.


###### THE SINGULAR VALUE DECOMPOSITION 169

### 7.2 The Singular Value Decomposition

Given an _m_ × _n_ matrix **Z** with _m_ ≥ _n_ , its _singular value decomposition_ takes
the form

```
Z = UDV T. (7.2)
```
This decomposition is standard in numerical linear algebra, and many algo-
rithms exist for computing it efficiently (see, for example, the book by Golub
and Loan (1996)). Here **U** is an _m_ × _n_ orthogonal matrix ( **U** _T_ **U** = **I** _n_ ) whose
columns **u** _j_ ∈R _m_ are called the _left singular vectors_. Similarly, the matrix
**V** is an _n_ × _n_ orthogonal matrix ( **V** _T_ **V** = **I** _n_ ) whose columns **v** _j_ ∈R _n_ are
called the _right singular vectors_. The _n_ × _n_ matrix **D** is diagonal, with diag-
onal elements _d_ 1 ≥ _d_ 2 ≥ ··· ≥ _dn_ ≥0 known as the _singular values_. If these
diagonal entries{ _d`_ } _n`_ =1are unique, then so are **U** and **V** , up to column-wise
sign flips. If the columns of **Z** (the variables) are centered, then the right sin-
gular vectors{ **v** _j_ } _nj_ =1define the _principal components_ of **Z**. Consequently, the
unit vector **v** 1 yields the linear combination **s** 1 = **Zv** 1 with highest sample
variance among all possible choices of unit vectors. Here **s** 1 is called the _first
principal component_ of **Z** , and **v** 1 is the corresponding _direction_ or _loading_
vector. Similarly, **s** 2 = **Zv** 2 is the second principal component, with maximal
sample variance among all linear combinations uncorrelated with **s** 1 , and so
on. See Exercise 7.1 and Section 8.2.1 for further details.
The singular value decomposition provides a solution to the rank- _q_ matrix
approximation problem. Suppose _r_ ≤rank( **Z** ), and let **D** _r_ be a diagonal ma-
trix with all but the first _r_ diagonal entries of the diagonal matrix **D** set to
zero. Then the optimization problem

```
minimize
rank( M )= r
```
###### ‖ Z − M ‖ F (7.3)

actually has a closed form solution̂ **Z** _r_ = **UD** _r_ **V** _T_ , a decomposition known
as the rank- _r_ SVD (see Exercise 7.2). The estimate **Z** ̂ _r_ is sparse in the sense
that all but _r_ singular values are zero. A fuller discussion of the SVD—in the
context of principal components analysis—is given in Section 8.2.1.

### 7.3 Missing Data and Matrix Completion

What if some of the entries of **Z** are missing? In general, the problem of
filling in or imputing missing values in a matrix is known as _matrix comple-
tion_ (Laurent 2001). Of course, the matrix completion problem is ill-specified
unless we impose additional constraints on the unknown matrix **Z** , and one
common choice is a rank constraint. Low-rank forms of matrix completion
arise in the problem of collaborative filtering and can be used to build recom-
mender systems.
The SVD provides an effective method for matrix completion. Formally,
suppose that we observe all entries of the matrix **Z** indexed by the subset


###### 170 MATRIX DECOMPOSITIONS

Ω⊂{ 1 _,...,m_ }×{ 1 _,...,n_ }. Given such observations, a natural approach is
to seek the lowest rank approximating matrix **Z** ̂that interpolates the observed
entries of **Z** —namely

```
minimize rank( M ) subject to mij = zij for all ( i,j )∈Ω. (7.4)
```
Unlike its fully observed counterpart, this rank-minimization problem is com-
putationally intractable (NP-hard), and cannot be solved in general even for
moderately large matrices.
In addition, forcing the estimate **M** to interpolate each of the observed
entries _zij_ will often be too harsh and can lead to overfitting; it is gener-
ally better to allow **M** to make some errors on the observed data as well.
Accordingly, consider the optimization problem

```
minimize rank( M ) subject to
```
###### ∑

```
( i,j )∈Ω
```
```
( zij − mij )^2 ≤ δ , (7.5)
```
or its equivalent form

```
minimize
rank( M )≤ r
```
###### ∑

```
( i,j )∈Ω
```
```
( zij − mij )^2. (7.6)
```
In words, we seek the matrix̂ **Z** = **Z** ̂ _r_ of rank at most _r_ that best approximates
the observed entries of our matrix **Z** , with the other entries of **Z** ̂ _r_ serving to
fill in the missing values. The family of solutions generated by varying _δ_ in
optimization problem (7.5) is the same as that generated by varying _r_ in
problem (7.6).
Unfortunately, both optimization problems (7.5) and (7.6) are nonconvex,
and so exact solutions are in general not available. However, there are useful
heuristic algorithms that can be used to find local minima. For instance, sup-
pose that we start with an initial guess for the missing values, and use them to
complete **Z**. We then compute the rank- _r_ SVD approximation of the filled-in
matrix as in (7.3), and use it to provide new estimates for the missing values.
This process is repeated till convergence. The missing value imputation for a
missing entry _xij_ is simply the ( _i,j_ ) _th_ entry of the final rank- _r_ approximation

**Z** ̂. See Mazumder, Hastie and Tibshirani (2010) for further details. In Sec-
tion 7.3.2, we discuss convex relaxations of these optimization problems based
on the nuclear norm, for which exact solutions are available.

#### 7.3.1 The Netflix Movie Challenge

The Netflix movie-rating challenge has become one of the canonical examples
for matrix completion (Bennett and Lanning 2007). Netflix is a movie-rental
company that launched a competition in 2006 to try to improve their sys-
tem for recommending movies to their customers. The Netflix dataset has
_n_ = 17 _,_ 770 movies (columns) and _m_ = 480 _,_ 189 customers (rows). Customers


###### MISSING DATA AND MATRIX COMPLETION 171

```
Figure 7.1 The Netflix competition leaderboard at the close of the competition.
```

###### 172 MATRIX DECOMPOSITIONS

have rated some of the movies on a scale from 1 to 5, where 1 is worst and
5 is best. The data matrix is very sparse with “only” 100 million (1%) of
the ratings present in the training set. The goal is to predict the ratings for
unrated movies, so as to better recommend movies to customers. In 2006,
the “Cinematch” algorithm used by Netflix had a root-mean-square error of
0.9525 over a large test set. A competition was held starting in 2006, with the
winner being the first algorithm that could improve this RMSE by at least
10%. The competition was finally won in 2009 by a large group of researchers
called “Bellkor’s Pragmatic Chaos,” which was the combined effort of three
individual groups. The winning algorithm used a combination of a large num-
ber of statistical techniques, but as with many of the competing algorithms,
the SVD played a central role. Figure 7.1 shows the leaderboard at the close
of the competition.

**Table 7.2** _Excerpt of the Netflix movie rating data. The movies are rated from 1
(worst) to 5 (best). The symbol_ • _represents a missing value: a movie that was not
rated by the corresponding customer._

```
Dirty DancingMeet the ParentsTop GunThe Sixth SenseCatch Me If You CanThe Royal TenenbaumsCon AirBig FishThe MatrixA Few Good Men
Customer 1 • • • • 4 • • • • •
Customer 2 • • 3 • • • 3 • • 3
Customer 3 • 2 • 4 • • • • 2 •
Customer 4 3 • • • • • • • • •
Customer 5 5 5 • • 4 • • • • •
Customer 6 • • • • • 2 4 • • •
Customer 7 • • 5 • • • • 3 • •
Customer 8 • • • • • 2 • • • 3
Customer 9 3 • • • 5 • • 5 • •
Customer 10 • • • • • • • • • •
```
A low rank model provides a good heuristic for rating movies: in particular,
suppose that we model the rating of user _i_ on movie _j_ by a model of the form

```
zij =
```
```
∑ r
```
```
` =1
```
```
ci`gj` + wij, (7.7)
```
or in matrix form **Z** = **CG** _T_ + **W** , where **C** ∈R _m_ × _r_ and **G** ∈R _n_ × _r_. In this
model, there are _rgenres_ of movies, and corresponding to each is a _clique_
of viewers who like them. Here viewer _i_ has a membership weight of _ci`_ for
the _`th_ clique, and the genre associated with this clique has a score _gj`_ for
movie _j_. The overall user rating is obtained by summing these products over


###### MISSING DATA AND MATRIX COMPLETION 173

_`_ (cliques/genres), and then adding some noise. Table 7.2 shows the data for
the ten customers and ten movies with the most ratings.
The competition identified a “probe set” of ratings, about 1_._ 4 million of
the entries, for testing purposes. These were not a random draw, rather movies
that had appeared chronologically later than most. Figure 7.2 shows the root-
mean-squared error over the training and test sets as the rank of the SVD
was varied. Also shown are the results from an estimator based on nuclear
norm regularization, discussed in the next section. Here we double centered
the training data, by removing row and column means. This amounts to fitting
the model

```
zij = αi + βj +
```
```
∑ r
```
```
` =1
```
```
ci`gj` + wij ; (7.8)
```
However, the row and column means can be estimated separately, using a
simple two-way ANOVA regression model (on unbalanced data).

```
0 50 100 150 200
```
```
0.7
```
```
0.8
```
```
0.9
```
```
1.0
```
```
Rank
```
```
RMSE
```
```
Train
Test
```
```
0.65 0.70 0.75 0.80 0.85 0.90
```
```
0.95
```
```
0.96
```
```
0.97
```
```
0.98
```
```
0.99
```
```
1.00
```
```
Training RMSE
```
```
Test RMSE
```
```
Hard−Impute
Soft−Impute
```
```
Netflix Competition Data
```
**Figure 7.2** _Left: Root-mean-squared error for the Netflix training and test data for
the iterated-SVD (_ Hard-Impute _) and the convex spectral-regularization algorithm
(_ Soft-Impute _). Each is plotted against the rank of the solution, an imperfect cal-
ibrator for the regularized solution. Right: Test error only, plotted against training
error, for the two methods. The training error captures the amount of fitting that
each method performs. The dotted line represents the baseline “Cinematch” score._

While the iterated-SVD method is quite effective, it is not guaranteed to
find the optimal solution for each rank. It also tends to overfit in this example,
when compared to the regularized solution. In the next section, we present
a convex relaxation of this setup that leads to an algorithm with guaranteed
convergence properties.


###### 174 MATRIX DECOMPOSITIONS

#### 7.3.2 Matrix Completion Using Nuclear Norm

A convenient convex relaxation of the nonconvex objective function (7.4) is
given by

```
minimize‖ M ‖? subject to mij = zij for all ( i,j )∈Ω, (7.9)
```
where‖ **M** ‖_?_ is the nuclear norm, or the sum of the singular values of **M**.
It is also sometimes called the trace norm.^1 Figure 7.3 shows the level set
of the nuclear norm of a symmetric 2×2 matrix, and depicts the convex
problem (7.9).^2
The nuclear norm is a convex relaxation of the rank of a matrix, and hence
problem (7.9) is convex (Fazel 2002). Specifically, as shown in Exercise 7.3,
it is a semi-definite program (SDP), a particular class of convex programs
for which special purpose solvers can be applied. The underlying convexity
is also theoretically useful, since one can characterize the properties of the
observed matrix and sample size under which the method succeeds in exactly
reconstructing the matrix, as discussed in Section 7.3.3.

```
M
```
```
Feasible set
```
```
∥
∥
∥
∥
```
```
[
xy
yz
```
```
]∥
∥
∥
∥
∗
```
```
≤δ
```
**Figure 7.3** _The blue cylinder shows the level set of the nuclear norm unit-bal l for
a symmetric_ 2 × 2 _matrix. The tangent plane is the feasible setz_ = _z_ 0 _for the matrix
imputation problem where we observezand wish to imputexandy. The point
Mis the solution that we seek, leading to the minimum value forδ. This figure is
analogous to the lasso estimation picture in Figure 2.2 of Chapter 2._

In practice, however, it is unrealistic to model the observed entries as
being noiseless. Accordingly, a more practical method is based on the following

(^1) This terminology can be confusing: for symmetric, positive semi-definite matrices, the
trace is the sum of the eigenvalues. For general matrices, “trace norm” refers to trace
√
**A** _T_ **A** ,
which is the sum of the singular values.
(^2) Thanks to Emmanuel Candes and Benjamin Recht for providing Figure 7.3.


###### MISSING DATA AND MATRIX COMPLETION 175

relaxed version of the program (7.9):

```
minimize
M
```
###### 

###### 

###### 

###### 1

###### 2

###### ∑

```
( i,j )∈Ω
```
```
( zij − mij )^2 + λ ‖ M ‖?
```
###### 

###### 

###### 

###### , (7.10)

called _spectral regularization_. As in our relaxation from problem (7.4) to (7.6),
this modification allows for solutionŝ **Z** that do not fit the observed entries
exactly, thereby reducing potential overfitting in the case of noisy entries.
The parameter _λ_ is a tuning parameter that must be chosen from the data,
typically by cross-validation. As in the previous section, we do not necessarily
require the error

###### ∑

```
( i,j )∈Ω( zij − mij )
```
(^2) to be zero, and this will only occur for
a sufficiently small value of _λ_.
There is a simple algorithm for solving (7.10), similar to the iterated SVD
for missing-data imputation in the previous section. First consider the case
where there is no missing data, so that the set Ω of observed entries includes
all _m_ · _n_ pairs ( _i,j_ )∈{ 1 _,...,m_ }×{ 1 _,...,n_ }. Then to solve (7.10), we simply
compute the SVD of **Z** , soft-threshold the singular values by _λ_ , and reconstruct
the matrix. This observation leads to an obvious procedure for the setup with
missing data. We start with an initial guess for the missing values, compute
the (full rank) SVD, and then soft-threshold its singular values by an amount
_λ_. We reconstruct the corresponding SVD approximation and obtain new
estimates for the missing values. This process is repeated until convergence.
In order to describe this procedure more precisely, we require some more
notation. Given an observed subset Ω of matrix entries, we can define the
projection operatorPΩ:R _m_ × _n_ 7→R _m_ × _n_ as follows:
[PΩ( **Z** )] _ij_ =

###### {

```
zij if ( i,j )∈Ω
0 if ( i,j )∈ / Ω ,
```
###### (7.11)

so thatPΩreplaces the missing entries in **Z** with zeros, and leaves the observed
entries alone. With this definition, we have the equivalence
∑

```
( i,j )∈Ω
```
```
( zij − mij )^2 =‖PΩ( Z )−PΩ( M )‖^2 F. (7.12)
```
Given the singular value decomposition^3 **W** = **UDV** _T_ of a rank- _r_ matrix **W** ,
we define its soft-thresholded version as

```
Sλ ( W )≡ UD λ V T where D λ = diag [( d 1 − λ )+ ,..., ( dr − λ )+] (7.13)
```
(note that the soft-threshholding can reduce the rank even further). Using
this operator, the procedure for solving (7.10) is given in Algorithm 7.1.
This algorithm was proposed and studied by Mazumder et al. (2010), where

(^3) If a matrix has rank _r <_ min( _m,n_ ), we assume its SVD is represented in the truncated
form, discarding the singular values of zero, and the corresponding left and right vectors.


###### 176 MATRIX DECOMPOSITIONS

```
Algorithm 7.1 Soft-Impute for matrix completion.
```
1. Initialize **Z** old= **0** and create a decreasing grid _λ_ 1 _> ... > λK_.
2. For each _k_ = 1 _,...,K_ , set _λ_ = _λk_ and iterate until convergence:

```
Compute Z ̂ λ ←S λ
```
###### (

```
P Ω( Z ) + P Ω⊥( Z old)
```
###### )

###### .

```
Update Z old← Z ̂ λ
```
3. Output the sequence of solutions **Z** ̂ _λ_ 1 _,...,_ **Z** ̂ _λK._

```
its convergence to the global solution is established. In Exercise 7.4, the reader
is asked to verify that a fixed point of the algorithm satisfies the zero sub-
gradient equations associated with the objective function (7.10). It can also
be derived as a first-order Nesterov algorithm (see Exercise 7.5). Each itera-
tion requires an SVD computation of a (potentially large) dense matrix, even
thoughPΩ( Z ) is sparse. For “Netflix-sized” problems, such large dense matri-
ces can typically not even be stored in memory (68Gb with 8 bytes per entry).
Note, however, that we can write
```
```
PΩ( Z ) +PΩ⊥( Z old) =PΩ( Z )−PΩ( Z old)
︸ ︷︷ ︸
sparse
```
```
+ Z ︸︷︷old︸
low rank
```
###### . (7.14)

```
The first component is sparse, with|Ω|nonmissing entries. The second com-
ponent is a soft-thresholded SVD, so can be represented using the correspond-
ing components. Moreover, for each component, we can exploit their special
structure to efficiently perform left and right multiplications by a vector, and
thereby apply iterative Lanczos methods to compute a (low rank) SVD effi-
ciently. It can be shown that this iterative algorithm converges to the solution
of the problem
```
```
minimize
M ∈R m × n
```
###### {

###### 1

###### 2

```
‖PΩ( Z )−PΩ( M )‖^2 F + λ ‖ M ‖?
```
###### }

###### , (7.15)

```
which is another way of writing the objective function in (7.10).
Figure 7.2 shows the results ofSoft-Imputeapplied to the Netflix ex-
ample. We see that the regularization has paid off, since it outperforms the
iterated SVD algorithmHard-Impute. It takes longer to overfit, and because
of the regularization, is able to use a higher rank solution. Taking advantage of
the warm starts in Algorithm 7.1, it took under 5 hours of computing to pro-
duce the solution path in Figure 7.2, using the R packagesoftImpute(Hastie
and Mazumder 2013). See also Figure 7.5 in Section 7.3.3, which illustrates
the performance of theSoft-Imputealgorithm for noisy matrix completion
over a range of different ranks and sample sizes. We discuss this figure at more
length in that section.
In terms of convergence speed, Mazumder et al. (2010) show that the
Soft-Imputealgorithm is guaranteed to converge at least sub-linearly, mean-
ing thatO(1 /δ ) iterations are sufficient to compute a solution that is δ -close
```

###### MISSING DATA AND MATRIX COMPLETION 177

to the global optimum. In the absence of additional structure (such as strong
convexity), this is the fastest rate that can be expected from a first-order gra-
dient method (Nemirovski and Yudin 1983). Interestingly, in certain settings,
it can be shown that simple first-order methods converge at a much faster
geometric rate, meaning thatO(log(1 _/δ_ )) iterations are sufficient to compute
a _δ_ -optimum. For instance, Agarwal, Negahban and Wainwright (2012 _a_ ) an-
alyze an algorithm closely related to theSoft-Imputealgorithm; they show
that under the same conditions that guarantee good statistical performance
of the nuclear norm estimator, this first-order algorithm is guaranteed to con-
verge at the geometric rate.

#### 7.3.3 Theoretical Results for Matrix Completion

There are a variety of theoretical results for matrix completion using nuclear-
norm regularization. Beginning with the simpler “no-noise” case, suppose that
we sample _N_ entries of a _p_ × _p_ matrix uniformly at random. How large does
_N_ need to be, as a function of the matrix dimension _p_ and rank _r_ , for the
nuclear norm relaxation (7.9) to recover the matrix exactly? Of course, this
is always possible if _N_ ≥ _p_^2 , so that our interest is in guarantees based on
_N_  _p_^2 samples.
A first easy observation is that if there are no observed entries in some
row (or column) of the matrix, then it is impossible to recover the matrix
exactly, even if it is rank one. In Exercise 7.8, we show how this argument
implies that any method—not only nuclear norm relaxation—needs at least
_N > p_ log _p_ samples, even for a rank one matrix. This phenomenon is an
instance of the famous “coupon collector” problem (Erdos and Renyi 1961).
As for the effect of the rank, note that we need roughlyO( _rp_ ) parameters
to specify an arbitrary _p_ × _p_ matrix with rank _r_ , since it hasO( _r_ ) singular
vectors, each with _p_ components. As we will see, under certain restrictions
on the “coherence” of the matrices, nuclear norm relaxation succeeds in exact
recovery based on a sample size just a logarithmic factor larger. Coherence
measures the extent to which the singular vectors of a matrix are aligned with
the standard basis.
In order to appreciate the need for coherence constraints, consider the
rank-one matrix **Z** = **e** 1 **e** _T_ 1 , with a single one in its upper left corner, as shown
on the left side of Equation (7.16) below:

###### Z =

###### 

###### 

###### 

###### 

###### 1 0 0 0

###### 0 0 0 0

###### 0 0 0 0

###### 0 0 0 0

###### 

###### 

###### 

```
 and Z
```
###### ′ =

###### 

###### 

###### 

###### 

```
v 1 v 2 v 3 v 4
0 0 0 0
0 0 0 0
0 0 0 0
```
###### 

###### 

###### 

###### . (7.16)

If we are allowed to observe only _N_  _p_^2 entries of this matrix, with the
entries chosen uniformly at random, then with high probability, we will _not_
observe the single nonzero entry, and hence have no hope of distinguishing
it from the all-zeroes matrix. Similar concerns apply to a matrix of the form


###### 178 MATRIX DECOMPOSITIONS

**Z** ′= **e** 1 **v** _T_ , where **v** ∈R _p_ is an arbitrary _p_ vector, as shown on the right side of
Equation (7.16). Thus, any theoretical guarantees on nuclear norm regulariza-
tion must somehow account for these pathological cases. Both the matrices **Z**
and **Z** ′have maximal coherence with the standard basis ofR^4 , meaning that
some subset of their left and/or right singular vectors are perfectly aligned
with some standard basis vector **e** _j_.
One way to exclude troublesome matrices is by drawing matrices from
some random ensemble; for instance, we might construct a random matrix
of the form **Z** =

∑ _r
j_ =1 **a** _j_ **b**
_T
j_ , where the random vectors **a** _j_ ∼ _N_ (0 _,Ip_ ) and
**b** _j_ ∼ _N_ (0 _,Ip_ ) are all independently drawn. Such random matrices are ex-
tremely unlikely to have singular vectors that are highly coherent with stan-
dard basis vectors. For this ensemble, Gross (2011) shows that with high
probability over the randomness in the ensemble and sampling, the nuclear
norm relaxation succeeds in exact recovery if the number of samples satisfies

```
N ≥ Crp log p, (7.17)
```
where _C >_ 0 is a fixed universal constant. See also Cand`es and Recht (2009)
for earlier but somewhat weaker guarantees. More generally, it is possible
to give exact recovery guarantees in which the pre-factor _C_ depends on the
singular vector incoherence, as measured by the maximal alignment between
the singular vectors and the standard basis. We refer the reader to the papers
by Cand`es and Recht (2009), Gross (2011), and Recht (2011) for further details
on results of this type, as well as to Keshavan, Oh and Montanari (2009) for
related results on a slightly different estimator.
We carried out a small simulation study to better understand what result
(7.17) is saying. We generated matrices **U** _,_ **V** each of size _p_ × _r_ and with i.i.d
standard normal entries and defined **Z** = **UV** _T_. Then we set to missing a fixed
proportion of entries, and appliedSoft-Imputewith _λ_ chosen small enough
so that‖PΩ( **Z** − **Z** ̂)‖^2 F _/_ ‖PΩ( **Z** )‖^2 F _<_ 10 −^5 ; in other words, the observed entries
are (effectively) reproduced. Then we checked to see if

```
‖P⊥Ω( Z − Z ̂)‖^22 / ‖PΩ⊥( Z )‖^22 < 10 −^5 , (7.18)
```
that is, the missing data was interpolated. The process was repeated 100 times
for various values of the rank _r_ and the proportion set to missing.
The proportion of times that the missing data was successfully interpolated
is shown in Figure 7.4. We see that when the rank is a small fraction of
the matrix dimension, one can reproduce the missing entries with fairly high
probability. But this gets significantly more difficult when the true rank is
higher.
Of course, the “exact” setting is often not realistic, and it might be more
reasonable to assume some subset of the entries are observed with additional
noise, as in observation model (7.7)—that is, **Z** = **L** ∗+ **W** , where **L** ∗has rank _r_.
In this setting, exact matrix completion is not generally possible, and we would
be interested in how well we can approximate the low-rank matrix **L** ∗using the


###### MISSING DATA AND MATRIX COMPLETION 179

```
0.0 0.2 0.4 0.6
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Proportion Missing
```
```
Probability of Exact Completion
```
```
Rank 1
```
```
p=20
p=40
```
```
0.0 0.2 0.4 0.6
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Proportion Missing
```
```
Probability of Exact Completion
```
```
Rank 5
```
**Figure 7.4** _Convex matrix completion in the no-noise setting. Shown are probabili-
ties of exact completion (mean_ ± _one standard error) as a function of the proportion
missing, forn_ × _nmatrices withn_ ∈{ 20 _,_ 40 }_. The true rank of the complete matrix
is one in the left panel and five in the right panel._

estimator (7.10). Singular vector incoherence conditions are less appropriate
for noisy observations, because they are not robust to small perturbations.
To understand this issue, suppose that we start with a matrix **B** that has
rank _r_ −1, Frobenius norm one, and is _maximal ly incoherent_ , meaning that
all its singular vectors are orthogonal to the standard basis vectors. Recalling
the troublesome matrix **Z** from Equation (7.16), now consider the perturbed
matrix **L** ∗= **B** + _δ_ **Z** for some _δ >_ 0. The matrix **L** ∗always has rank _r_ , and no
matter how small we choose the parameter _δ_ , it is always _maximal ly coherent_ ,
since it has the standard basis vector **e** 1 ∈R _p_ as one of its singular vectors.
An alternative criterion that is not sensitive to such small perturbations is
based on the “spikiness” ratio of a matrix (Negahban and Wainwright 2012).

In particular, for any nonzero matrix **L** ∈R _p_ × _p_ , we define _α_ sp( **L** ) = _p_ ‖‖ **LL** ‖‖F∞,

where‖ **L** ‖∞is the element-wise maximum absolute value of the matrix entries.
This ratio is a measure of the uniformity (or lack thereof) in the spread of
the matrix entries; it ranges between 1 and _p_. For instance, any matrix **L**
with all equal entries has _α_ sp( **L** ) = 1, the minimal value, whereas the spikiest
possible matrix such as **Z** from Equation (7.16) achieves the maximal spikiness
ratio _α_ sp( **Z** ) = _p_. In contrast to singular vector incoherence, the spikiness
ratio involves the singular values (as well as the vectors). Thus, the matrix
**L** ∗= **B** + _δ_ **Z**. will have a low spikiness ratio whenever the perturbation _δ >_ 0
is sufficiently small.
For the nuclear-norm regularized estimator (7.10) with a bound on the


###### 180 MATRIX DECOMPOSITIONS

spikiness ratio, Negahban and Wainwright (2012) show that the estimate **L** ̂
satisfies a bound of the form

```
‖̂ L − L ∗‖^2 F
‖ L ∗‖^2 F
```
```
≤ C max
```
###### {

```
σ^2 , α^2 sp( L ∗)
```
```
} rp log p
N
```
###### (7.19)

with high probability over the sampling pattern, and random noise (assumed
i.i.d., zero-mean with all moments finite, and variance _σ_^2 ). See also Keshavan,
Montanari and Oh (2010) and Koltchinskii, Lounici and Tsybakov (2011), who
prove related guarantees for slightly different estimators.

```
Rank Ratio
```
```
Observation Ratio
```
```
Performance of Nuclear Norm Regularization
```
```
0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9
```
```
1
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
```
```
0.1
```
```
0.2
```
```
0.3
```
```
0.4
```
```
0.5
```
```
0.6
```
```
0.7
```
```
0.8
```
```
0.9
```
```
1
```
**Figure 7.5** _Performance of the nuclear-norm regularized estimator_ (7.10) _, solved
via the_ Soft-Impute _algorithm, for noisy matrix completion under the model_ (7.7)
_with matrix_ **L** ∗= **CG** _Tof rankr. Plots of the relative Frobenius norm error_ ‖̂ **L** −
**L** ∗‖^2 F _/_ ‖ **L** ∗‖^2 F _forp_ = 50 _as a function of the rank ratioδ_ = _r_ log _ppand observation
ratioν_ = _Np_ 2 _, corresponding to the fraction of observed entries in ap_ × _pmatrix.
Observations were of the linear form_ (7.7) _withwij_ ∼ _N_ (0 _,σ_^2 ) _whereσ_ = 1 _/_ 4 _, and
we used the_ Soft-Impute _algorithm to solve the program_ (7.10) _withλ/N_ = 2 _σ_

√ _p
N,
the latter choice suggested by theory. The theory also predicts that the Frobenius error
should be low as long asν_ % _δ, a prediction confirmed in this plot._

In order to better understand the guarantee (7.19), we carried out a sim-
ulation. Let us define the ratio _ν_ = _pN_ 2 ∈(0 _,_ 1), corresponding to the fraction

of observed entries in a _p_ × _p_ matrix, and the rank ratio _δ_ = _r_ log _pp_ , corre-
sponding to the relative rank of the matrix (up to a logarithmic factor). For
a constant noise variance and spikiness ratio, the bound predicts that the es-
timator (7.10) should have low relative mean-squared error whenever _ν > δ_.
Figure 7.5 confirms this prediction, and shows that the theory is actually
somewhat conservative; see the figure caption for further details.


###### MISSING DATA AND MATRIX COMPLETION 181

```
0.0 0.2 0.4 0.6
```
```
1.0
```
```
1.5
```
```
2.0
```
```
2.5
```
```
3.0
```
```
3.5
```
```
Proportion Missing
```
```
Average Relative Error
```
```
Rank 1
```
```
0.0 0.2 0.4 0.6
```
```
1.0
```
```
1.5
```
```
2.0
```
```
2.5
```
```
3.0
```
```
3.5
```
```
Proportion Missing
```
```
Average Relative Error
```
```
Rank 5
```
**Figure 7.6** _Matrix completion via_ Soft-Impute _in the noisy setting. The plots show
the imputation error from matrix completion as a function of the proportion missing,
for_ 40 × 40 _matrices. Shown are the mean absolute error(_ ± _one standard error) over
100 simulations, al l relative to the noise standard deviation. In each case we chose
the penalty parameter to minimize the imputation error, and the results would be
somewhat worse if that parameter were chosen by cross-validation. The true rank of
the complete matrix is one in the left panel and five in the right panel. The average
absolute size of each matrix entry was 0.80 and 1.77 in the left and right panels,
respectively._

Figure 7.6 is another illustration of the imputation error from matrix com-
pletion in the noisy setting. Here we useSoft-Imputeon 40×40 matrices,
with entries generated from a standard Gaussian matrix with rank _r_ = 1 or
5, plus noise of standard deviation _σ_ = 0_._ 5. We see that for rank one, we
can impute the missing values with average error close to _σ_ even when the
proportion missing is as high as 50%. However when the true rank increases
to five, the procedure starts to break down at about 30% missing.

#### 7.3.4 Maximum Margin Factorization and Related Methods

Here we discuss a class of techniques that are close in spirit to the method of
the previous section. These are known as _maximum margin matrix factoriza-
tion_ methods (MMMF), and use a factor model for approximating the matrix
**Z** (Rennie and Srebro 2005).^4 Consider a matrix factorization of the form
**M** = **AB** _T_ , where **A** and **B** are _m_ × _r_ and _n_ × _r_ , respectively. One way to

(^4) The “maximum margin” refers to the particular margin-based loss used by these au-
thors; although we use squared-error loss, our focus is on the penalty, so we use the same
acronym.


###### 182 MATRIX DECOMPOSITIONS

estimate such a factorization is by solving the optimization problem

```
minimize
A ∈R m × r
B ∈R n × r
```
###### {

```
‖PΩ( Z )−PΩ( AB T )‖^2 F+ λ
```
###### (

###### ‖ A ‖^2 F+‖ B ‖^2 F

###### )}

###### . (7.20)

Interestingly, this problem turns out to be equivalent to the nuclear norm
regularized problem (7.10) for sufficiently large _r_ , in a way that we now make
precise. First, for any matrix **M** , it can be shown (Rennie and Srebro 2005,
Mazumder et al. 2010) that

```
‖ M ‖? = min
A ∈R m × r, B ∈R n × r
M = AB T
```
###### 1

###### 2

###### (

###### ‖ A ‖^2 F+‖ B ‖^2 F

###### )

###### (7.21)

As shown in Exercise 7.6, the solution to the problem (7.21) need not be
unique. However, the equivalence (7.21) implies that the family of solutions

**M** ̂= **A** ̂ **B** ̂ _T_ of the biconvex problems (7.20) for _r_ ≥min( _m,n_ ) are the same as
those for the family of convex problems (7.10). To be more specific, we have
the following result:

_Theorem 1._ Let **Z** be an _m_ × _n_ matrix with observed entries indexed by Ω.

(a) The solutions to the MMMF criterion (7.20) with _r_ = min{ _m,n_ }and the
nuclear norm regularized criterion (7.10) coincide for all _λ_ ≥0.
(b) For some fixed _λ_ ∗ _>_ 0, suppose that the objective (7.10) has an opti-
mal solution with rank _r_ ∗. Then for any optimal solution ( **A** ̂ _,_ **B** ̂) to the
problem (7.20) with _r_ ≥ _r_ ∗and _λ_ = _λ_ ∗, the matrix̂ **M** = **A** ̂ **B** ̂ _T_ is an op-
timal solution for the problem (7.10). Consequently, the solution space of
the objective (7.10) is contained in that of (7.20).
TheMMMFcriterion (7.20) defines a two-dimensional family of models
indexed by the pair ( _r,λ_ ), while theSoft-Imputecriterion (7.10) defines a
one-dimensional family. In light of Theorem 1, this family is a special path

in the two-dimensional grid of solutions

###### (

```
A ̂( r,λ ) , B ̂( r,λ )
```
###### )

. Figure 7.7 depicts

the situation. AnyMMMFmodel at parameter combinations above the red
points are redundant, since their fit is the same at the red point. However, in
practice the red points are not known toMMMF, nor is the actual rank of the
solution. Further orthogonalization of **A** ̂and **B** ̂would be required to reveal
the rank, which would only be approximate (depending on the convergence
criterion of theMMMFalgorithm). In summary, the formulation (7.10) is
preferable for two reasons: it is convex and it does both rank reduction and
regularization at the same time. Using (7.20) we need to choose the rank of
the approximation and the regularization parameter _λ_.
In a related approach, Keshavan et al. (2010) propose the criterion

```
‖PΩ( Z )−PΩ( USV T )‖^2 F+ λ ‖ S ‖^2 F , (7.22)
```
to be minimized over the triplet ( **U** _,_ **V** _,_ **S** ), where **U** _T_ **U** = **V** _T_ **V** = **I** _r_ and


###### MISSING DATA AND MATRIX COMPLETION 183

```
−4 −2 0 2 4 6
```
```
0 20 40 60 80 100
```
```
Rank
```
```
r
```
```
logλ
```
**Figure 7.7** _Comparison of the parameter space for_ MMMF _(gray and black points),
and_ Soft-Impute _(red points) for a simple example._ MMMF _solutions for ranks
above the red points are identical to the_ Soft-Impute _solutions at the red points and
hence the gray points are redundant. On the other hand, fixing a rank for_ MMMF
_(for a givenλ) that is less than that of the_ Soft-Impute _solution leads to a non-
convex problem._

**S** is an _r_ × _r_ matrix. For a fixed rank _r_ , they minimize the criterion (7.22)
by gradient descent. This criterion is similar to the MMMF criterion (7.20),
except that the matrices **U** _,_ **V** are constrained to be orthonormal, so that
the “signal” and corresponding regularization are shifted to the (full) matrix
**S**. Like MMMF, the problem is nonconvex so that gradient descent is not
guaranteed to converge to the global optimum; moreover, it must be solved
separately for different values of the rank _r_.
Keshavan et al. (2010) provide some asymptotic theory for the estima-
tor (7.22) when applied to noisy matrix completion, using a scaling in which
the aspect ratio _m/n_ converges to some constant _α_ ∈(0 _,_ 1). Here is a rough
description of one such result. Consider an _m_ × _n_ matrix **Z** that can be written
as a sum of the form **Z** = **UΣV** + **W** , where **Σ** ∈R _r_ × _r_ is a diagonal matrix.
Here the term **W** is a random matrix with i.i.d. entries, each with zero mean
and variance _σ_^2

###### √

_mn_. Each entry of the matrix **Z** is assumed to be observed
independently with probability _ρ_. Let **Z** ̂be the estimate obtained by mini-
mizing the criterion (7.22) using the optimal value for _λ_. For this criterion,

Keshavan et al. (2010) show that the relative error‖ **Z** ̂− **Z** ‖^2 F _/_ ‖ **Z** ‖^2 Fconverges
in probability to a quantity 1− _c_ ( _ρ_ ) as as _m/n_ → _α_ ∈(0 _,_ 1). The constant
_c_ ( _ρ_ ) is zero if _σ_^2 _/ρ_ ≥max _jj_ Σ _jj_ and nonzero otherwise. This shows that the
estimator undergoes a phase transition: if the noise and probability of missing
entries are low relative to the signal strength, then the missing entries can be
recovered successfully. Otherwise they are essentially useless in reconstructing
the missing entries. Full details may be found in Keshavan et al. (2009) and
Keshavan et al. (2010).


###### 184 MATRIX DECOMPOSITIONS

### 7.4 Reduced-Rank Regression

In this section we briefly revisit a topic touched on in Section 4.3, namely _mul-
tivariate regression_. We have vector-valued responses _yi_ ∈R _K_ and covariates
_xi_ ∈R _p_ , and we wish to build a series of _K_ linear regression models. With _N_
observations on ( _yi, xi_ ), we can write these regression models in matrix form
as
**Y** = **XΘ** + **E** _,_ (7.23)

with **Y** ∈R _N_ × _K_ , **X** ∈R _N_ × _p_ , **Θ** ∈R _p_ × _K_ a matrix of coefficients, and **E** ∈
R _N_ × _K_ a matrix of errors.
The simplest approach would be to fit _K_ separate models, perhaps via
the lasso or elastic net. However, the idea is that the responses may have a
lot in common, and these similarities can be used to _borrow strength_ when
fitting the _K_ regression models. In Section 4.3, we used the group lasso to
select variables simultaneously for each response; i.e., we used the group lasso
to set whole rows of **Θ** to zero. In this section we instead assume **Θ** has low
rank. The same ideas underlie _multitask_ machine learning. Hence we entertain
models of the form
**Y** = **XAB** _T_ + **E** _,_ (7.24)

with **A** ∈R _p_ × _r_ and **B** ∈R _K_ × _r_. One can think of having _r < K_ derived
features **Z** = **XA** ̂ which are then distributed among the responses via _K_
separate regressions **Y** ̂ = **ZB** ̂ _T_. Although fitting (7.24) by least-squares is
a nonconvex optimization problem, with _N > p_ closed-form solutions are
available through a form of canonical-correlation analysis (Hastie et al. 2009).

_Example 7.1._ As an example, we consider the problem of video denoising. Fig-
ure 7.8 shows four representative images of a video taken by a helicopter flying
over the desert. Each column _j_ of the matrix **Y** represents an image frame (in
a vectorized form) at a time _k_ , and the full matrix **Y** represents a video con-
sisting of _K_ image frames. The _p_ columns of **X** represent a dictionary of image
basis functions (e.g.,unions of orthonormal bases; see Chapter 10). Imposing a
low rank model on **Θ** is reasonable when the video sequence changes relatively
slowly over time (as they do in this sequence), so that most of its variation
can be described by linear combinations of a small number of representative
images.
Figure 7.9 shows the SVD computed using _K_ = 100 frames from the video
in Figure 7.8; although the matrix **Y** is not exactly low-rank, its singular
values decay rapidly, suggesting that it can be well-approximated by a low-
rank matrix. ♦

As before, the nuclear norm is a useful convex penalty for enforcing low-
rank structure on an estimate. In this case we would solve the optimization
problem
minimize
**Θ** ∈R _p_ × _K_

###### {

```
‖ Y − XΘ ‖^2 F + λ ‖ Θ ‖?
```
###### }

###### , (7.25)

and for sufficiently large values of _λ_ the solution **Θ** ̂would have rank less than
min( _N,K_ ).


###### A GENERAL MATRIX REGRESSION FRAMEWORK 185

**Figure 7.8** _Four_ 352 × 640 _image frames from a video sequence of a helicopter flying
over the desert. Each image was converted to a vector in_ R _NwithN_ = 352×640 =
225280 _elements, and represented by one column of the matrix_ **Y**_._

### 7.5 A General Matrix Regression Framework

In this section we present a general “trace” regression framework, that includes
matrix completion and reduced-rank regression as special cases. This general
framework allows for a unified theoretical treatment.
Let’s start with matrix completion. Let **M** represent a model underlying a
partially observed _m_ × _n_ matrix **Z** that we wish to complete. Then we consider
observations ( **X** _i,yi_ ) _,i_ = 1 _,_ 2 _,...,_ |Ω|from the model

```
yi = trace( X Ti M ) + εi. (7.26)
```
Here **X** _i_ are _m_ × _n_ matrices and _yi_ and _εi_ are scalars. The observation
model (7.26) can be viewed as a regression with inputs the matrices **X** _i_ and
outputs the _yi_. The trace inner product on matrices plays the role of an or-
dinary inner product on vectors, but otherwise everything is conceptually the
same as in a usual regression model.^5
To relate this to matrix completion, let [ _a_ ( _i_ ) _,b_ ( _i_ )] be the row-column
indices of the matrix entry observed in observation _i_. We then define

(^5) Recall that if **A** and **B** are both _m_ × _n_ matrices, trace( **A** _T_ **B** ) =∑ _m
i_ =1
∑ _n
j_ =1 _aijbij._


###### 186 MATRIX DECOMPOSITIONS

```
0 20 40 60 80 100
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Index
```
```
Singular Value
```
```
SVD for K=100 Frames
```
**Figure 7.9** _Singular values of the matrix_ **Y** ∈R _p_ × _KusingK_ = 100 _frames from
the video sequence. Note the rapid decay, showing that a low-rank approximation is
possible._

**X** _i_ = _ena_ ( _i_ ) _emb_ ( _i_ ) _T_ , where _em`_ ∈R _m_ denotes the unit _m_ -vector with a single

one in the _`th_ coordinate, so that **X** _i_ is zero everywhere except at position
[ _a_ ( _i_ ) _,b_ ( _i_ )]. With this choice, we have trace( **X** _Ti_ **M** ) = _ma_ ( _i_ ) _b_ ( _i_ ), so that the
observation model (7.26) provides us with certain entries of **M** —those in the
training set Ω—each contaminated with noise _εi_. Our goal is to predict the un-
observed entries in **Z** via **M** ̂, which can be thought of asE( _y_ ∗| **X** ∗) for feature
values **X** ∗that are distinct from those in the training set.
The trace observation model (7.26) is also relevant in a more general set-
ting, since with different choices of the covariate matrices{ **X** _i_ }, it can also be
used to model other types of matrix estimation problems involving low-rank
constraints.
The multiresponse regression model of the previous section is another
example. The response and covariate vectors are linked via the equation
_yi_ = **Θ** _Txi_ + _i_ , where **Θ** ∈R _p_ × _K_ is a matrix of regression coefficients, and
_i_ ∈R _K_ is a noise vector. Since each response _yi_ is a _K_ -vector of observations,
it can be rewritten as a collection of _K_ separate observations in the trace

form: if we set **X** _ij_ = _xieKj
T_
where _eKj_ ∈R _K_ is the unit vector with a single
one in the _jth_ position, then the _jth_ component of _yi_ can be expressed in the
form _yij_ = trace( **X** _Tij_ **Θ** ) + _ij_.
In the context of multivariate regression, the matrix lasso takes the form

```
minimize
Θ
```
###### 

###### 

###### 

###### 1

###### 2 N

###### ∑ N

```
i =1
```
###### ∑ K

```
j =1
```
###### (

```
yij −trace( X Tij Θ )
```
###### ) 2

```
+ λ ‖ Θ ‖?
```
###### 

###### 

###### 

###### . (7.27)

Exercise 7.9 explores another example. See the papers by Yuan, Ekici, Lu
and Monteiro (2007), Negahban and Wainwright (2011 _a_ ), and Rohde and
Tsybakov (2011) for further details and benefits of this unified approach. See


###### PENALIZED MATRIX DECOMPOSITION 187

also Bunea, She and Wegkamp (2011) for analysis of an alternative procedure
for reduced-rank multivariate regression.

### 7.6 Penalized Matrix Decomposition

Maximum-margin matrix factorization methods lead naturally to other forms
of regularization such as the _`_ 1 -penalized version

```
minimize
U ∈R m × r, V ∈R n × r
D ∈R r × r
```
###### {

```
‖ Z − UDV T ‖^2 F+ λ 1 ‖ U ‖ 1 + λ 2 ‖ V ‖ 1
```
###### }

###### , (7.28)

where **D** is diagonal and nonnegative. Here we assume that all values of **Z** are
observed, and apply an _`_ 1 penalty to the left and right singular vectors of the
decomposition. The idea is to obtain sparse versions of the singular vectors
for interpretability.
Before discussing how to optimize the criterion (7.28), let’s see how it
can be used. Returning to the Netflix example, we created a smaller matrix
consisting of the 1000 users and the 100 movies, each with the most ratings.
We imputed the missing values using an iterated rank 10 SVD (Section 7.3).
Then we set the rank of **U** and **V** to two, and minimized a version of the
criterion (7.28) for values of _λ_ 1 and _λ_ 2 that yielded a very sparse solution.
The resulting solution **V** ̂had 12 nonzero entries, all with the same sign, cor-
responding to the movies in Table 7.3. The first group looks like a mixture

**Table 7.3** _Movies with nonzero loadings, from a two-dimensional penalized matrix
decomposition._

```
First Component Second Component
The Wedding Planner Lord of the Rings: The Fellowship of the Ring
Gone in 60 Seconds The Last Samurai
The Fast and the Furious Lord of the Rings: The Two Towers
Pearl Harbor Gladiator
Maid in Manhattan Lord of the Rings: The Return of the King
Two Weeks Notice
How to Lose a Guy in 10 Days
```
of romantic comedies and action movies, while the second group consists of
historical action/fantasy movies.
How do we solve the optimization problem (7.28)? Let us first consider
the one-dimensional case, written in the constrained rather than Lagrangian
form:

```
minimize
u ∈R m, v ∈R n
d ≥ 0
```
```
‖ Z − d uv T ‖^2 Fsubject to‖ u ‖ 1 ≤ c 1 and‖ v ‖ 1 ≤ c 2. (7.29)
```

###### 188 MATRIX DECOMPOSITIONS

It turns out that the estimator (7.29) is not very useful, as it tends to produce
solutions that are too sparse, as illustrated in Figure 7.10 (right panel). In
order to fix this problem, we augment our formulation with additional _`_ 2 -
norm constraints, thereby obtaining the optimization problem

minimize
**u** ∈R _m,_ **v** ∈R _n
d_ ≥ 0

```
‖ Z − d uv T ‖^2 Fsubject to‖ u ‖ 1 ≤ c 1 ,‖ v ‖ 1 ≤ c 2 ,‖ u ‖ 2 ≤1,‖ v ‖ 2 ≤1.
```
###### (7.30)

It may seem surprising that _adding_ constraints can make the solution _sparse_ ,
but Figure 7.10 provides some insight.

```
−1.5 −0.5 0.5 1.0 1.5
```
```
−1.5
```
```
−0.5
```
```
0.5 1.0 1.5
```
```
−1.5 −0.5 0.5 1.0 1.5
```
```
−1.5
```
```
−0.5
```
```
0.5 1.0 1.5
```
```
u 1 u 1
```
```
u^2 u^2
```
**Figure 7.10** _A graphical representation of the`_ 1 _and`_ 2 _constraints on_ **u** ∈R^2 _in
the PMD(`_ 1 _,`_ 1 _) criterion. The constraints are as fol lows:_ ‖ **u** ‖^22 ≤ 1 _and_ ‖ **u** ‖ 1 ≤ _c.
The gray lines indicate the coordinate axesu_ 1 _andu_ 2_._ Left panel: _The`_ 2 _constraint
is the solid circle. For both the`_ 1 _and`_ 2 _constraints to be active, the constraint
radiuscmust be between_ 1 _and_

```
√
2. The constraints ‖ u ‖ 1 = 1 and ‖ u ‖ 1 =
```
√
2 _are
shown using dashed lines._ Right panel: _The`_ 2 _and`_ 1 _constraints on_ **u** _are shown
for somecbetween 1 and_

√
2_. Red dots indicate the points where both the`_ 1 _and
the`_ 2 _constraints are active. The red contour shows the boundary of the constraint
region. The black lines are the linear contours of the criterion_ (7.30) _as a function
of_ **u** _, which increase as we move to the upper right in this example. The solid red
arcs indicate the solutions that occur whenλ_ 1 = 0 _in Algorithm 7.2 (`_ 2 _active,`_ 1
_not). The figure shows that in two dimensions, the points where both the`_ 1 _and`_ 2
_constraints are active have neitheru_ 1 _noru_ 2 _equal to zero. We also see that without
the`_ 2 _constraints, we would always end up at a corner; this would lead to trivial
solutions._

If we fix the second component **v** , the criterion (7.30) is linear in **u**. Suppose
that the linear contour of the criterion is angled as in Figure 7.10 and not
exactly parallel to a side of the polyhedral constraint region. Then to solve
the problem, we move the linear contour toward the top right as far as possible
while still remaining inside the constraint region. The solution occurs at one


###### PENALIZED MATRIX DECOMPOSITION 189

```
of the open circles, or on the solid red contour. Notice that without the ` 2
constraint, the solution will occur at a corner of the polyhedron where only one
coefficient is nonzero. As shown in the left panel of Figure 7.10, the problem
is well defined as long as 1≤ c 1 ≤
```
###### √

```
m and 1≤ c 2 ≤
```
###### √

```
n.
Since the criterion (7.30) is biconvex, we can minimize it in an alternat-
ing fashion. It is easy to verify that the solution in each direction is a soft-
thresholding operation. For example, the update for v ∈R n takes the form
```
```
u ←
```
```
S λ 1
```
###### (

```
Zv
```
###### )

```
‖S λ 1
```
###### (

```
Zv
```
###### )

###### ‖ 2

###### . (7.31)

```
Here we apply our soft-thresholding operatorSelement-wise on its vector
```
```
Algorithm 7.2 Alternating soft-thresholding for rank-one penal-
ized matrix decomposition.
```
1. Set **v** to the top left singular vector from the SVD of **Z**.
2. Perform the update **u** ←

```
S λ 1
```
###### (

```
Zv
```
###### )

```
‖S λ 1
```
###### (

```
Zv
```
###### )

```
‖ 2
, with λ 1 being the smallest value such
that‖ u ‖ 1 ≤ c 1 ;
```
3. Perform the update **v** ←

```
S λ 2
```
###### (

```
Z T u
```
###### )

```
‖S λ 2
```
###### (

```
Z T u
```
###### )

```
‖ 2
, with λ 2 being the smallest value
such that‖ v ‖ 1 ≤ c 2 ;
```
4. Iterate steps 2 and 3 until convergence.
5. Return **u** , **v** and _d_ = **u** _T_ **Zv**.

```
argument. The threshold λ 1 in Equation (7.31) must be chosen adaptively
to satisfy the constraints: it is set to zero if this results in‖ u ‖ 1 ≤ c 1 , and
otherwise λ 1 is chosen to be a positive constant such that‖ u ‖ 1 = c 1. (See
Exercise 7.7). The overall procedure is summarized in Algorithm 7.2. We note
that if c 1 >
```
###### √

```
m and c 2 >
```
###### √

```
n so that the ` 1 constraints have no effect,
then Algorithm 7.2 reduces to the power method for computing the largest
singular vectors of the matrix Z. See Section 5.9 for further discussion of
the (ordinary) power method. Some recent work has established theoretical
guarantees for iterative soft thresholding updates related to Algorithm 7.2;
see the bibliographic section for further details.
The criterion (7.30) is quite useful and may be used with other penalties
(in addition to the ` 1 -norm) for either u or v , such as the fused lasso penalty
```
```
Φ( u ) =
```
```
∑ m
```
```
j =2
```
```
| uj − uj − 1 | , (7.32)
```
```
where u = ( u 1 ,u 2 ,...um ). This choice is useful for enforcing smoothness along
a one-dimensional ordering j = 1 , 2 ,...m , such as chromosomal position in
```

###### 190 MATRIX DECOMPOSITIONS

```
a genomics application. Depending on this choice of penalty, the correspond-
ing minimization in Algorithm 7.2 must change accordingly. In addition, one
can modify Algorithm 7.2 to handle missing matrix entries, for example by
omitting missing values when computing the inner products Zv and Z T u.
To obtain a multifactor penalized matrix decomposition, we apply the
rank-one Algorithm (7.2) successively to the matrix Z , as given in Algo-
rithm 7.3. If ` 1 penalties on u k and v k are not imposed—equivalently, if we
```
```
Algorithm 7.3 Multifactor penalized matrix decomposition
```
1. Let **R** ← **Z**.
2. For _k_ = 1 _,...K_ :

```
(a) Find u k , v k , and dk by applying the single-factor Algorithm 7.2 to
data R.
(b) Update R ← R − dk u k v Tk.
```
```
set λ 1 = λ 2 = 0 in Algorithm 7.2—then it can be shown that the K -factor
PMD algorithm leads to the rank- K SVD of Z. In particular, the successive
solutions are orthogonal. With penalties present, the solutions are no longer
in the column and row spaces of Z , and so the orthogonality does not hold.
It is important to note the difference between sparse matrix decomposition
and matrix completion, discussed earlier. For successful matrix completion, we
required that the singular vectors of Z have low coherence; that is, they need
to be dense. In sparse matrix decomposition, we seek sparse singular vectors,
for interpretability. Matrix completion is not the primary goal in this case.
Unlike the minimization of convex functions, alternating minimization of
biconvex functions is not guaranteed to find a global optimum. In special cases,
such as the power method for computing the largest singular vector, one can
show that the algorithm converges to a desired solution, as long as the start-
ing vector is not orthogonal to this solution. But in general, these procedures
are only guaranteed to move downhill to a partial local minimum of the func-
tion; see Section 5.9 for discussion of this issue. Based on our experience,
however, they behave quite well in practice, and some recent theoretical work
provides rigorous justification of this behavior. See the bibliographic section
for discussion.
Lee, Shen, Huang and Marron (2010) suggest the use of the penalized ma-
trix decomposition for biclustering of two-way data. In Chapter 8 we describe
applications of the penalized matrix decomposition to derive penalized mul-
tivariate methods such as sparse versions of principal components, canonical
correlation, and clustering.
```
### 7.7 Additive Matrix Decomposition

```
In the problem of additive matrix decomposition, we seek to decompose a
matrix into the sum of two or more matrices. The components in this additive
```

###### ADDITIVE MATRIX DECOMPOSITION 191

composition should have complementary structures; for instance, one of the
most widely studied cases involves decomposing into the sum of a low-rank
matrix with a sparse matrix (see also Section 9.5). Additive matrix decomposi-
tions arise in a wide variety of applications, among them factor analysis, robust
forms of PCA and matrix completion, and multivariate regression problems,
as discussed below.
Most of these applications can be described in terms of the noisy linear
observation model **Z** = **L** ∗+ **S** ∗+ **W** , where the pair ( **L** ∗ _,_ **S** ∗) specify the
additive matrix decomposition into low rank and sparse components, and **W**
is a noise matrix. In certain cases, we consider a slight generalization of this
model, in which we observe a noisy version ofX( **L** ∗+ **S** ∗), whereXis some
type of linear operator on the matrix sum (e.g., the projection operatorPΩ
in the case of matrix completion, or multiplication via the model matrix **X** in
the case of matrix regression.
Given such observations, we consider estimators of the pair ( **L** ∗ _,_ **S** ∗) based
on the criterion

```
minimize
L ∈R m × n
S ∈R m × n
```
###### {

###### 1

###### 2

```
‖ Z −( L + S )‖^2 F+ λ 1 Φ 1 ( L ) + λ 2 Φ 2 ( S )
```
###### }

###### , (7.33)

where Φ 1 and Φ 2 are penalty functions each designed to enforce a different
type of generalized sparsity. For instance, in the case of low rank and sparse
matrices, we study the choices Φ 1 ( **L** ) =‖ **L** ‖_?_ and Φ 2 ( **S** ) =‖ **S** ‖ 1.
We now turn to some applications of additive matrix decompositions.

_Factor Analysis with Sparse Noise:_ Factor analysis is a widely used form of
linear dimensionality reduction that generalizes principal component analy-
sis. Factor analysis is easy to understand as a generative model: we generate
random vectors _yi_ ∈R _p_ using the “noisy subspace” model

```
yi = μ + Γ ui + wi, for i = 1 , 2 ,...,N. (7.34)
```
Here _μ_ ∈R _p_ is a mean vector, **Γ** ∈R _p_ × _r_ is a loading matrix, and the random
vectors _ui_ ∼ _N_ (0 _,_ **I** _r_ × _r_ ) and _wi_ ∼ _N_ (0 _,_ **S** ∗) are independent. Each vector _yi_
drawn from model (7.34) is obtained by generating a random element in the
_r_ -dimensional subspace spanned by the columns of **Γ**. Given _N_ samples from
this model, the goal is to estimate the column of the loading matrix **Γ** , or
equivalently, the rank _r_ matrix **L** ∗= **ΓΓ** _T_ ∈R _p_ × _p_ that spans the column
space of **Γ**.
A simple calculation shows that the covariance matrix of _yi_ has the form
**Σ** = **ΓΓ** _T_ + **S** ∗. Consequently, in the special case when **S** ∗= _σ_^2 **I** _p_ × _p_ , then
the column span of **Γ** is equivalent to the span of the top _r_ eigenvectors of
**Σ** , and so we can recover it via standard principal components analysis. In
particular, one way to do so is by computing the SVD of the data matrix
**Y** ∈R _N_ × _p_ , as discussed in Section 7.2. The right singular vectors of **Y** spec-
ify the eigenvectors of the sample covariance matrix, which is a consistent
estimate of **Σ**.


###### 192 MATRIX DECOMPOSITIONS

What if the covariance matrix **S** ∗ is not a multiple of the identity? A
typical assumption in factor analysis is that **S** ∗is diagonal, but with the noise
variance depending on the component of the data. More generally, it might
have nonzero entries off the diagonal as well, but perhaps a relatively small
number, so that it could be represented as a sparse matrix. In such settings,
we no longer have any guarantees that the top _r_ eigenvectors of **Σ** are close to
the column span of **Γ**. When this is not the case, PCA will be _inconsistent_ —
meaning that it will fail to recover the true column span even if we have an
infinite sample size.
Nonetheless, when **S** ∗ is a sparse matrix, the problem of estimating
**L** ∗= **ΓΓ** _T_ can be understood as an instance of our general observation model
with _p_ = _N_. In particular, given our observations{ _yi_ } _Ni_ =1, we can let our

observation matrix **Z** ∈R _p_ × _p_ be the sample covariance matrix _N_^1

###### ∑ N

```
i − 1 yiy
```
_T
i_.
With this algebra, we can then write **Z** = **L** ∗+ **S** ∗+ **W** , where **L** ∗= **ΓΓ** _T_ is of
rank _r_ , and the random matrix **W** is a re-centered form of Wishart noise—in
particular, the zero-mean matrix **W** : = _N_^1

###### ∑ N

```
i =1 yiy
T
i −
```
###### {

###### L ∗+ S ∗

###### }

###### .

_Robust PCA:_ As discussed in Section 7.2, standard principal component
analysis is based on performing an SVD of a (column centered) data ma-
trix **Z** ∈R _N_ × _p_ , where row _i_ represents the _ith_ sample of a _p_ -dimensional data
vector. As shown there, the rank- _r_ SVD can be obtained by minimizing the
squared Frobenius norm‖ **Z** − **L** ‖^2 Fsubject to a rank constraint on **L**. What
if some entries of the data matrix **Z** are corrupted? Or even worse, what if
some subset of the rows (data vectors) are corrupted? Since PCA is based
on a quadratic objective function, its solution (the rank _r_ SVD) can be very
sensitive to these types of perturbations.
Additive matrix decompositions provide one way in which to introduce
some robustness to PCA. In particular, instead of approximating **Z** with a
low-rank matrix, we might approximate it with the sum **L** + **S** of a low-
rank matrix with a sparse component to model the corrupted variables. In
the case of element-wise corruption, the component **S** would be modeled as
element-wise sparse, having relatively few nonzero entries, whereas in the more
challenging setting of having entirely corrupted rows, it would be modeled as
a row-sparse matrix. Given some target rank _r_ and sparsity _k_ , the direct
approach would be to try and solve the optimization problem

```
minimize
rank( L )≤ r
card( S )≤ k
```
###### 1

###### 2

###### ‖ Z −( L + S )‖^2 F. (7.35)

Here card denotes a cardinality constraint, either the total number of nonzero
entries (in the case of element-wise corruption), or the total number of nonzero
rows (in the case of row-wise corruption). Of course, the criterion (7.35) is
doubly nonconvex, due to both the rank and cardinality constraints, but a
natural convex relaxation is provided by our general estimator (7.33) with
Φ 1 ( **L** ) =‖ **L** ‖_?_ and Φ 2 ( **S** ) =

###### ∑

```
i,j | sij |for element-wise sparsity.
Figure 7.11 shows an example of robust PCA with the above penalties,
```

###### ADDITIVE MATRIX DECOMPOSITION 193

taken from an unpublished paper by Mazumder and Hastie and using images
from Li, Huang, Gu and Tian (2004). The columns of the data matrix **Z** are
frames from a video surveillance camera, and are noisy and have missing pixel
values (next section). The last two columns show the reconstructed frames; the
low-rank part represents the static background, while the sparse component
changes in each frame, and in this case represent people moving.

```
True Image Training Image Low-Rank ( L ̂) Sparse (̂ S )
```
**Figure 7.11** _Video surveil lance. Shown are the true image, noisy training image
with missing-values, the estimated low-rank part, and the sparse part aligned side by
side. The true images were sampled from the sequence and include ones with varying
il lumination and some benchmark test sequences. Despite the missingness and added
noise the procedure succeeds in separating the moving components (people) from the
fixed background._

_Robust Matrix Completion:_ Robustness is also a concern for matrix-com-
pletion methods (Section 7.3), which are used in collaborative filtering and
recommender systems. Ratings may be corrupted for various reasons: for in-
stance, users might try to “game” the system (e.g., a movie star would like to
have his/her movies more highly recommended by Netflix). Alternatively, a
subset of users might simply be playing pranks with their ratings; for instance,
in 2002, _The New York Times_ reported how the Amazon system had been ma-
nipulated by adversarial users, so that it would recommend a sex manual to
users who expressed interest in Christian literature (Olsen 2002).
As we did for robust PCA, we can build in robustness to matrix comple-
tion by introducing a sparse component **S** to our representation. The nature
of sparsity depends on how we model the adversarial behavior: if we believed
that only a small fraction of _entries_ were corrupted, then it would be appro-
priate to impose element-wise sparsity via the _`_ 1 -norm. On the other hand,
if we wished to model users (rows) as being adversarial, then it would be ap-


###### 194 MATRIX DECOMPOSITIONS

propriate to impose a row-wise sparsity penalty, such as the group lasso norm
‖ **S** ‖ 1 _,_ 2 =

```
∑ m
i =1‖ S i ‖^2 , where S i ∈R
```
```
n denotes the ith row of the matrix. This
```
choice would lead to the following modification of our earlier estimator (7.10):

```
minimize
L , S ∈R m × n
```
###### 

###### 

###### 

###### 1

###### 2

###### ∑

```
( i,j )∈Ω
```
```
( zij −( L ij + S ij ))^2 + λ 1 ‖ L ‖? + λ 2
```
```
∑ m
```
```
i =1
```
```
‖ S i ‖ 2
```
###### 

###### 

###### 

###### . (7.36)

Exercise 7.10 shows an equivalence between this criterion and a nuclear-norm
regularized robust Huber loss. Hence one can develop an algorithm along the
lines ofSoft-Imputein Section 7.1, replacing the squared-error loss with
the Huber loss. Figure 7.11 shows the results of this approach on some video-
surveillance data.

_Multivariate Regression:_ Recall the multivariate linear regression model
_yi_ = **Θ** _Txi_ + _i_ , where **Θ** ∈R _p_ × _K_ is a matrix of regression coefficients used to
predict the multivariate response vector _y_ ∈R _K_. As discussed in Section 7.5,
in one application of matrix regression, each column of the response matrix
**Y** represents a vectorized image, so that the full matrix represents a video
sequence consisting of _K_ frames. The model matrix **X** represents _p_ image
basis functions, one per column; for example, an orthonormal basis of two-
dimensional wavelets, at different scales and locations (see Section 10.2.3).
Figure 7.8 showed that for certain types of video sequences, the matrix **Y**
exhibits rapid decay in its singular values, and so can be well-approximated
by a low-rank matrix.
In a more realistic setting, a video sequence consists of both a background,
and various types of foreground elements. The background component is of-
ten slowly varying, so that the low-rank model is appropriate, whereas fore-
ground elements vary more rapidly, and may disappear and reappear. (The
“helicopter” sequence in Figure 7.8 can be viewed as pure background.) Con-
sequently, a more realistic model for the video sequence is based on decom-
position **Θ** = **L** + **S** , where **L** is low-rank, and **S** is a relatively sparse matrix.
Active entries of **S** correspond to the basis functions (rows) and time posi-
tions (columns) for representing the foreground elements that play a role in
the video.
Of course, these types of decompositions also arise in other applications of
multivariate regression. In the general setting, we try to recover the decom-
position using the estimator

```
minimize
L , S
```
###### 

###### 

###### 

###### 1

###### 2 N

###### ∑ N

```
i =1
```
###### ∑ K

```
j =1
```
###### (

```
yij −trace( X Tij ( L + S ))
```
###### ) 2

```
+ λ 1 ‖ L ‖? + λ 2 ‖ S ‖ 1
```
###### 

###### 

###### 

###### (7.37)

where **X** _ij_ = _xieKj
T_
for _i_ = 1 _,...,N_ and _j_ = 1 _,...,K_. Note that this is a nat-
ural generalization of our earlier estimator (7.27) for nuclear-norm regularized
multivariate regression.


###### BIBLIOGRAPHIC NOTES 195

### Bibliographic Notes

Early work by Fazel (2002) studied the use of the nuclear norm as a sur-
rogate for a rank constraint. Srebro, Alon and Jaakkola (2005) studied the
nuclear norm as well as related relaxations of rank constraints in the context
of matrix completion and collaborative filtering. Bach (2008) derived some
asymptotic theory for consistency of nuclear norm regularization. Recht, Fazel
and Parrilo (2010) derived nonasymptotic bounds on the performance of nu-
clear norm relaxation in the compressed sensing observation model. See also
the papers Negahban and Wainwright (2011 _a_ ), Rohde and Tsybakov (2011)
for nonasymptotic analysis of the nuclear norm relaxation for more general
observation models.
Maximum margin matrix factorization is discussed in Srebro and Jaakkola
(2003), Srebro, Alon and Jaakkola (2005), and Srebro, Rennie and Jaakkola
(2005). Spectral regularization and theSoft-Imputealgorithm were devel-
oped by Mazumder et al. (2010). The penalized matrix decomposition is de-
scribed in Witten, Tibshirani and Hastie (2009). Matrix completion using
the nuclear norm has been studied by various authors, with initial results on
prediction-error bounds by Srebro, Alon and Jaakkola (2005). The first the-
oretical results on exact recovery with noiseless observations for exactly low-
rank matrices were established by Cand`es and Recht (2009), with subsequent
refinements by various authors. Gross (2011) developed a general dual-witness
scheme for proving exactness of nuclear norm relaxations given noiseless ob-
servations in arbitrary bases, generalizing the case of entry-wise sampling; see
also Recht (2011) for related arguments. Keshavan et al. (2009) provide ex-
act recovery guarantees for a slightly different two-stage procedure, involving
trimming certain rows and columns of the matrix and then applying the SVD.
The more realistic noisy observation model has also been studied by various
authors (e.g., Cand`es and Plan (2010), Negahban and Wainwright (2012),
Keshavan et al. (2010)).
The problem of additive matrix decomposition was first considered
by Chandrasekaran, Sanghavi, Parrilo and Willsky (2011) in the noiseless
setting, who derived worst-case incoherence conditions sufficient for exact re-
covery of an arbitrary low-rank/sparse pair. Subsequent work by Cand`es, Li,
Ma and Wright (2011) studied the case of random sparse perturbations to
the low-rank matrix, with applications to robust PCA. Xu, Caramanis and
Sanghavi (2012) proposed an alternative approach to robust PCA, based on
modeling the corruptions in terms of a row-sparse matrix. Chandrasekaran,
Parrilo and Willsky (2012) developed the use of sparse/low-rank decomposi-
tions for the problem of latent Gaussian graphical model selection. In the more
general noisy setting, Hsu, Kakade and Zhang (2011) and Agarwal, Negahban
and Wainwright (2012 _b_ ) provide bounds on relatives of the estimator (7.33).
A recent line of work has provide some theory for alternating mini-
mization algorithms in application to particular nonconvex problems, in-
cluding matrix completion (Netrapalli, Jain and Sanghavi 2013), phase re-


###### 196 MATRIX DECOMPOSITIONS

trieval (Netrapalli et al. 2013), mixtures of regression (Yi, Caramanis and
Sanghavi 2014), and dictionary learning (Agarwal, Anandkumar, Jain, Ne-
trapalli and Tandon 2014). These papers show that given suitable initial-
izations, alternating minimization schemes do converge (with high probabil-
ity) to estimates with similar statistical accuracy to a global minimum. Sim-
ilarly, there are also theoretical guarantees for variants of the power method
with soft thresholding for recovering sparse eigenvectors (Ma 2013, Yuan and
Zhang 2013).

### Exercises

Ex. 7.1 Recall the singular value decomposition (7.2) of a matrix.

```
(a) Show that the SVD of the column-centered matrix Z gives the principal
components of Z.
(b) Show that the condition that successive PCs are uncorrelated is equiv-
alent to the condition that the vectors{ v j }are orthogonal. What is the
relationship between the vectors{ s j }in Section 7.2 and the components of
the SVD?
```
Ex. 7.2 In this exercise, we work through the proof of assertion (7.3), namely
that
**Z** ̂ _r_ = arg min
rank( **M** )= _r_

###### ‖ Z − M ‖^2 F ,

where **Z** ̂ _r_ = **UD** _r_ **V** _T_ is the SVD truncated to its top _r_ components. (In detail,
the SVD is given by **Z** = **UDV** _T_ , and **D** _r_ is the same as **D** except all but the
first _r_ diagonal elements are set to zero.) Here we assume that _m_ ≤ _n_ and
rank( **Z** ) = _m_.
We begin by noting that any rank _r_ matrix **M** can be factored as **M** = **QA** ,
where **Q** ∈R _m_ × _r_ is an orthogonal matrix, and **A** ∈R _r_ × _n_.

```
(a) Show that given Q , the optimal value for A is given by Q T Z.
(b) Using part (a), show that minimizing‖ Z − M ‖^2 Fis equivalent to solving
maximize
Q ∈R m × r
```
```
trace( Q T ΣQ ) subject to Q T Q = I r , (7.38)
```
```
where Σ = ZZ T.
(c) Show that this is equivalent to the problem
maximize
Q ∈R m × r
```
```
trace( Q T D^2 Q ) subject to Q T Q = I r. (7.39)
```
```
(d) Given an orthonormal matrix Q ∈R m × r , define H = QQ T with diagonal
elements hii for i = 1 ,...,m. Show that hii ∈[0 , 1] and that
```
```
∑ m
i =1 hii = r.
Conclude that problem (7.39) is equivalent to
```
```
maximize
∑ hii ∈[0 , 1]
m
i =1 hii = r
```
```
∑ m
```
```
i =1
```
```
hiid^2 i. (7.40)
```

###### EXERCISES 197

```
(e) Assuming that d^21 ≥ d^22 ≥ ...d^2 m ≥0, show that the solution to prob-
lem (7.40) is obtained by setting h 11 = h 22 = ... = hrr = 1, and setting
the remaining coefficients zero. If the{ d^2 i }are strictly ordered, show that
this solution is unique.
(f) Conclude that an optimal choice for Q in problem (7.38) is U 1 , the matrix
formed from the first r columns of U. This completes the proof.
```
Ex. 7.3

```
(a) ` 1 norm as an LP: For any vector β ∈R p , show that
```
```
‖ β ‖ 1 = max
u ∈R p
```
```
∑ p
```
```
j =1
```
```
ujβj subject to‖ u ‖∞≤1. (7.41)
```
```
This relation expresses the fact that the ` ∞norm is dual to the ` 1 norm.
(b) Nuclear norm as an SDP: For any matrix B ∈R m × n , show that
```
```
‖ B ‖? = max
U ∈R m × n
```
```
trace( U T B ) subject to‖ U ‖op≤1,
```
```
where‖ U ‖opis the maximum singular value of the matrix U , a quantity
known as the spectral norm or ` 2 operator norm. This relation expresses
the fact that the spectral norm is dual to the nuclear norm. ( Hint: use the
SVD of Z and cyclical properties of trace operator in order to reduce this
to an instance of part (a).)
(c) Given a matrix U ∈R m × n , show that the inequality‖ U ‖op≤1 is equiv-
alent to the constraint (
I m U
U T I n
```
###### )

######  0. (7.42)

```
Since this constraint is a linear matrix inequality, it shows nuclear norm
minimization can be formulated as an SDP. ( Hint: The Schur-complement
formula might be useful.)
```
Ex. 7.4 _Subgradients of the nuclear norm:_ Subgradients, as previously defined
in Section 5.2, extend the notion of a gradient to nondifferentiable functions.

```
(a) Given a matrix A ∈R m × n with rank r ≤min( m,n ), write its singular
value decomposition as A = UDV T. With this notation, show that the
subgradient of the nuclear norm is
```
```
∂ ‖ A ‖? =
```
###### {

```
UV T + W | U T W = WV = 0 , ‖ W ‖op≤ 1
```
###### }

###### . (7.43)

```
(b) Use part (a) to show that a fixed point of theSoft-Imputeproce-
dure (7.1) satisfies the subgradient equation of the criterion (7.10).
```
Ex. 7.5 From Chapter 5, recall our description (5.21) of Nesterov’s generalized
gradient procedure. Show that theSoft-Imputeprocedure (7.1) corresponds
to this algorithm applied to the criterion (7.10).


###### 198 MATRIX DECOMPOSITIONS

Ex. 7.6 Construct a solution to the maximum-margin problem (7.21), in the
case rank( **M** ) = _r_ ≤min( _m,n_ ), of the form̂ **M** = **A** ̂ _m_ × _r_ **B** ̂ _Tr_ × _n_. Show that this
solution is not unique. Suppose we restrict **A** and **B** to have _r_ ′ _> r_ columns.
Show how solutions of this enlarged problem might not reveal the rank of **M**.

Ex. 7.7 Consider the convex optimization problem

```
maximize
u ∈R p
u T Zv subject to‖ u ‖ 2 ≤1 and‖ u ‖ 1 ≤ c. (7.44)
```
Show that the solution is given by

```
u =
```
```
S λ
```
###### (

```
Zv
```
###### )

```
‖S λ
```
###### (

```
Zv
```
###### )

###### ‖ 2

###### , (7.45)

where _λ_ ≥0 is the smallest positive value such that‖ **u** ‖ 1 ≤ _c_.

Ex. 7.8 In this exercise, we demonstrate that, in the context of exact com-
pletion of a _n_ × _n_ matrix **M** from noiseless entries, it is necessary to observe
at least _N > n_ log _n_ entries, even for a rank one matrix. We begin by noting
that if we fail to observe any entries from some row (or column) of **M** , then it
is impossible to recover **M** exactly (even if we restrict to incoherent matrices
with rank one). We letFbe the event that there exists some row with no ob-
served entries, under the sampling model in which we choose _N_ entries from
the matrix uniformly at random _with replacement._

```
(a) For each row j = 1 ,...,p , let Zj be a binary indicator variable for the
event that no entries of j are observed, and define Z =
```
```
∑ n
j =1 Zj. Show that
```
###### P[F] =P[ Z > 0]≥

###### (

###### E[ Z ]

###### ) 2

###### E[ Z^2 ]

###### .

```
( Hint: The Cauchy–Schwarz inequality could be useful.)
(b) Show thatE[ Z ] = n (1− 1 /n ) N.
(c) Show thatE[ ZiZj ]≤E[ Zi ]E[ Zj ] for i 6 = j.
(d) Use parts (b) and (c) so show thatE[ Z^2 ]≤ n (1− 1 /n ) N + n^2 (1− 1 /n )^2 N.
(e) Use the previous parts to show thatP[F] stays bounded away from zero
unless N > n log n.
```
Ex. 7.9 Quadratic polynomial regression in high dimensions is dangerous, be-
cause the number of parameters is proportional to the square of the dimension.
Show how to represent this problem as a matrix regression (Section 7.5), and
hence suggest how the parameter explosion can be controlled.

Ex. 7.10. In Exercise 2.11 of Chapter 2, we show that a regression model that
allows for a sparse perturbation of each prediction is equivalent to a robust


###### EXERCISES 199

regression using Huber’s _ρ_ function. Here we establish an analogous result for
robust PCA.
Recall the sparse plus low-rank version of PCA:

```
minimize
L , S
```
###### 1

###### 2

```
‖ Z −( L + S )‖^2 F+ λ 1 ‖ L ‖? + λ 2 ‖ S ‖ 1. (7.46)
```
Now consider a robustified version of PCA

```
minimize
L
```
###### 1

###### 2

###### ∑ N

```
i =1
```
```
∑ p
```
```
j =1
```
```
ρ ( zij − `ij ; λ 2 ) + λ 1 ‖ L ‖ ?, (7.47)
```
where

```
ρ ( t ; λ ) =
```
###### {

```
λ | t |− λ^2 / 2 if| t | > λ
t^2 / 2 if| t |≤ λ.
```
###### (7.48)

is Huber’s loss function. Show that problem (7.47) has the same solution for
**L** as does problem (7.46).



```
Chapter 8
```
## Sparse Multivariate Methods

### 8.1 Introduction

In this chapter, we discuss some popular methods for multivariate analysis
and explore how they can be “sparsified”: that is, how the set of features can
be reduced to a smaller set to yield more interpretable solutions. Many stan-
dard multivariate methods are derived from the singular value decomposition
of an appropriate data matrix. Hence, one systematic approach to sparse mul-
tivariate analysis is through a sparse decomposition of the same data matrix.
The penalized matrix decomposition of Section 7.6 is well-suited to this task,
as it delivers sparse versions of the left and/or right singular vectors.
For example, suppose that we have a data matrix **X** of dimension _N_ × _p_ , and
assume that the columns each have mean zero. Then the principal components
of **X** are derived from its singular value decomposition (SVD) **X** = **UDV** _T_ :
the columns of **V** are the principal component direction vectors (in order), and
the columns of **U** are the standardized principal components. Hence we can
derive _sparse_ principal components by applying instead the penalized matrix
decomposition to **X** , with sparsity enforced on the right vectors. In a similar
way, many multivariate methods can be derived by appropriate application
of the penalized matrix decomposition. These methods are summarized in
Table 8.1.

```
Table 8.1 The penalized matrix decomposition of Section 7.6 applied
to appropriate input matrices leads to sparse versions of classical mul-
tivariate methods.
Input Matrix Result
Data matrix sparse SVD and principal components
Variance-covariance sparse principal components
Cross-products sparse canonical variates
Dissimilarity sparse clustering
Between-class covariance sparse linear discriminants
```
```
201
```

###### 202 SPARSE MULTIVARIATE METHODS

```
−3 −2 −1 0 1 2 3
```
```
−3
```
```
−2
```
```
−1
```
```
0
```
```
1
```
```
2
```
```
3
```
```
x 1
```
```
x^2
```
```
v 1
```
```
zi 1
xi
```
**Figure 8.1** _A two-dimensional illustration of principal components analysis, show-
ing the first principal componentv_ 1 ∈R^2 _of a col lection of data pointsxi_ = ( _xi_ 1 _,xi_ 2 ) _,
shown in green circles. Letting_ ̄ _x_ = ( ̄ _x_ 1 _,x_ ̄ 2 ) _T denote the sample mean, the line
x_ ̄+ _λTv_ 1 _maximizes the variance of the projected points along the line, and min-
imizes the total squared distance from each point to its orthogonal projection onto
the line. Herezi_ 1 = _ui_ 1 _d_ 1 _is the scalar valued representation of observationxiin the
first principal component_ **z** 1_._

### 8.2 Sparse Principal Components Analysis

We begin our exploration with the problem of sparse principal component
analysis, which is a natural extension of PCA well-suited to high-dimensional
data. To set the stage, we first review principal components.

#### 8.2.1 Some Background

Given a data matrix **X** of dimension _N_ × _p_ , consisting of _N_ vectors
{ _x_ 1 _,...,xN_ }inR _p_ , principal component analysis provides a sequence of linear
approximations, indexed by a rank _r_ ≤min{ _p,N_ }.
There are two different but equivalent ways of viewing and deriving prin-
cipal components. The first approach is based on the directions of _maximal
variance_. Any unit-norm vector _α_ ∈R _p_ leads to a one-dimensional projection
of the data, namely the _N_ -vector **X** _α_.^1 Assuming that the columns of **X** have
been centered, the sample variance of the projected data vector is given by

(^1) In this chapter we deal with multivariate methods applied to a data matrix **X** ∈R _N_ × _p_ ;
we hence adhere to our convention of representing _N_ -vectors and all matrices in boldface,
and _p_ -vectors in plain text.


###### SPARSE PRINCIPAL COMPONENTS ANALYSIS 203

̂Var( **X** _α_ ) =^1
_N_

###### ∑ N

```
i =1( x
```
```
T
iα )
```
(^2). Principal components analysis finds the direction
that maximizes the sample variance
_v_ 1 = arg max
‖ _α_ ‖ 2 =1

###### {

```
̂Var( X α )
```
###### }

```
= arg max
‖ α ‖ 2 =1
```
###### {

```
αT
```
###### X T X

###### N

```
α
```
###### }

###### . (8.1)

Hence the first principal component direction corresponds to the largest eigen-
value of the sample covariance **X** _T_ **X** _/N_ , which provides the link to the notion
of maximal variance at the population level. See Exercise 8.1 for further de-
tails. Figure 8.1 illustrates the geometry of this optimization problem. The
resulting projection **z** 1 = **X** _v_ 1 is called the first principal component of the
data **X** , and the elements of _v_ 1 are called the _principal component loadings_.
The vector _v_ 1 is easily seen to be the right singular vector corresponding
to the largest singular value _d_ 1 of **X**. Similarly **z** 1 = **u** 1 _d_ 1 , where **u** 1 is the
corresponding left singular vector.
Subsequent principal-component directions (eigen-vectors) _v_ 2 _,v_ 3 _,...,vp_

correspond to maxima of̂Var( **X** _vj_ ) subject to‖ _vj_ ‖ 2 = 1 and _vj_ orthogonal to
_v_ 1 _,...vj_ − 1. This property also implies that the **z** _j_ are mutually uncorrelated
(see Exercise 8.2). In fact, after _r_ steps of this procedure, we obtain a rank _r_
matrix that solves the optimization problem

```
V r = arg max
A : A T A = I r
```
```
trace( A T X T XA ) (8.2)
```
See Exercise 7.2 for further details on this property. Thus, even though they
are defined sequentially, the collection of loading vectors in **V** _r_ also maximize
the total variance among all such collections.
A second derivation of principal components is based on minimizing the
_reconstruction error_ associated with a particular generative model for the
data. Suppose that the rows of the data matrix can be modeled as _xi_ ≈ _f_ ( _λi_ ),
where the function

```
f ( λ ) = μ + A rλ (8.3)
```
parametrizes an affine set of dimension _r_. Here _μ_ ∈R _p_ is a location vector,
**A** _r_ ∈R _p_ × _r_ is a matrix with orthonormal columns corresponding to directions,
and _λ_ ∈R _r_ is a parameter vector that varies over samples. It is natural to
choose the parameters{ _μ,_ **A** _r,_ { _λi_ } _Ni_ =1}to minimize the average reconstruction
error

```
1
N
```
###### ∑ N

```
i =1
```
```
‖ xi − μ − A rλi ‖^22. (8.4)
```
This interpretation of PCA is illustrated in Figure 8.1. As we explore in Ex-
ercise 8.3, when the data has been precentered (so that we may take _μ_ = 0),
the criterion (8.4) can be reduced to

```
1
N
```
###### ∑ N

```
i =1
```
```
‖ xi − A r A Trxi ‖^22 , (8.5)
```

###### 204 SPARSE MULTIVARIATE METHODS

and the value of **A** _r_ that minimizes the reconstruction error (8.5) can again
be obtained from the singular value decomposition of the data matrix. In
operational terms, we compute the SVD **X** = **UDV** _T_ , and then form **A** ˆ _r_ = **V** _r_
by taking the _r_ columns of **V** corresponding to the top _r_ singular values. The
estimates for _λi_ are given by the rows of **Z** _r_ = **U** _r_ **D** _r_. So maximizing total
variance within the affine surface corresponds to minimizing total distance
from the surface. Again we observe that the successive solutions are _nested_ ;
this property is special, and is not necessarily inherited by the generalizations
that we discuss in this chapter.

#### 8.2.2 Sparse Principal Components

We often interpret principal components by examining the loading vectors
{ _vj_ } _rj_ =1so as to determine which of the variables play a significant role. In
this section, we discuss some methods for deriving principal components with
sparse loadings. Such sparse principal components are especially useful when
the number of variables _p_ is large relative to the sample size. With a large
number of variables, it is often desirable to select a smaller subset of relevant
variables, as revealed by the loadings. At the theoretical level, in the _p_ 
_N_ regime, ordinary PCA is known to break down very badly, in that the
eigenvectors of the sample covariance need not be close to the population
eigenvectors (Johnstone 2001). Imposing sparsity on the principal components
makes the problem well-posed in the “large _p_ , small _N_ ” regime. In this section,
we discuss a number of methods for obtaining sparse principal components,
all based on lasso-type ( _`_ 1 ) penalties. As with ordinary PCA, we start with an
_N_ × _p_ data matrix **X** with centered columns. The proposed methods focus on
either the maximum variance property of principal components, or minimum
reconstruction error. For ease of exposition, we begin by discussing the rank-
one case for each method, deferring the case of higher ranks until Section 8.2.3.

##### 8.2.2.1 Sparsity from Maximum Variance

We begin by discussing how the maximum variance characterization of PCA
can be modified to incorporate sparsity. The most natural modification would
be to impose an _`_ 0 -restriction on the criterion, leading to the problem

```
maximize
‖ v ‖ 2 =1
```
###### {

```
vT X T X v
```
###### }

```
subject to‖ v ‖ 0 ≤ t, (8.6)
```
where‖ _v_ ‖ 0 =

∑ _p
j_ =1I[ _vj_^6 = 0] simply counts the number of nonzeros in the vec-
tor _v_. However, this problem is doubly nonconvex, since it involves maximizing
(as opposed to minimizing) a convex function with a combinatorial constraint.
TheSCoTLASSprocedure of Jolliffe, Trendafilov and Uddin (2003) is a natu-
ral relaxation of this objective, based on replacing the _`_ 0 -norm by the _`_ 1 -norm,
leading to

```
maximize
‖ v ‖ 2 =1
```
###### {

```
vT X T X v
```
###### }

```
subject to‖ v ‖ 1 ≤ t. (8.7)
```

###### SPARSE PRINCIPAL COMPONENTS ANALYSIS 205

```
The ` 1 -constraint encourages some of the loadings to be zero and hence v
to be sparse. Although the ` 1 -norm is convex, the overall problem remains
nonconvex, and moreover is not well-suited to simple iterative algorithms.
There are multiple ways to address these challenges. One approach draws
on the SVD version of principal components; we re-express the problem, leav-
ing it nonconvex but leading to a computationally efficient algorithm for find-
ing local optima. Recall the penalized matrix criterion (7.28) on page 187;
applying it with no constraint on u —that is, with c 1 =∞—leads to the
optimization problem
```
```
maximize
‖ u ‖ 2 =‖ v ‖ 2 =1
```
###### {

```
u T X v
```
###### }

```
subject to‖ v ‖ 1 ≤ t. (8.8)
```
```
Any optimal solution̂ v to this problem is also optimal for the originalSCoT-
LASSprogram (8.7). The advantage of this reformulation is that the objective
function (8.8) is biconvex in the pair ( u ,v ), so that we can apply alternating
minimization to solve it—in particular, recall Algorithm 7.2 in Chapter 7 for
the penalized matrix decomposition. Doing so leads to Algorithm 8.1, which
consists of the following steps:
```
```
Algorithm 8.1 Alternating algorithm for rank one sparse PCA.
```
1. Initialize _v_ ∈R _p_ with‖ _v_ ‖ 2 = 1.
2. Repeat until changes in **u** and _v_ are sufficiently small:

```
(a) Update u ∈R N via u ←‖ XX vv ‖ 2.
(b) Update v ∈R p via
```
```
v ← v ( λ, u ) =
S λ ( X T u )
‖S λ ( X T u )‖ 2
```
###### , (8.9)

```
where λ = 0 if‖ X T u ‖ 1 ≤ t , and otherwise λ > 0 is chosen such that
‖ v ( λ, u )‖ 1 = t.
```
```
HereS λ ( x ) = sign( x ) (| x |− λ )+is the familiar soft-thresholding operator
at level λ. In Exercise 8.6, we show that any fixed point of this algorithm rep-
resents a local optimum of the criterion (8.7), and moreover, that the updates
can be interpreted as a minorization-maximization , or simply a minorization
algorithm for the objective function (8.7).
An alternative approach, taken by d’Aspremont, El Ghaoui, Jordan and
Lanckriet (2007), is to further relax theSCoTLASSobjective to a convex
program, in particular by lifting it to a linear optimization problem over the
space of positive semidefinite matrices. Such optimization problems are known
as semidefinite programs. In order to understand this method, let us begin
with an exact reformulation of the nonconvex objective function (8.7). By the
properties of the matrix trace, we can rewrite the quadratic form vT X T X v in
```

###### 206 SPARSE MULTIVARIATE METHODS

terms of a trace operation—specifically

```
vT X T X v = trace( X T X vvT ). (8.10)
```
In terms of the rank one matrix **M** = _vvT_ , the constraint‖ _v_ ‖^22 = 1 is equiv-
alent to the linear constraint trace( **M** ) = 1, and the constraint‖ _v_ ‖ 1 ≤ _t_ can
be expressed as trace(| **M** | **E** )≤ _t_^2 , where **E** ∈R _p_ × _p_ is a matrix of all ones,
and| **M** |is the matrix obtained by taking absolute values entry-wise. Putting
together the pieces, we conclude that the nonconvexSCoTLASSobjective has
the equivalent reformulation

```
maximize
M  0
```
```
trace( X T X M )
```
```
subject to trace( M ) = 1 , trace(| M | E )≤ t^2 , and rank( M ) = 1.
```
###### (8.11)

By construction, any optimal solution to this problem is a positive semidefinite
matrix of rank one, say **M** = _vvT_ , and the vector _v_ is an optimal solution to
the original problem (8.7). However, the optimization problem (8.11) is still
nonconvex, due to the presence of the constraint rank( **M** ) = 1. By dropping
this constraint, we obtain the semidefinite program proposed by d’Aspremont
et al. (2007), namely

```
maximize
M  0
trace( X T XM )
```
```
subject to trace( M ) = 1 , trace(| M | E )≤ t^2.
```
###### (8.12)

Since this problem is convex, it has no local optima, and a global optimum
can be obtained by various standard methods. These include interior point
methods (Boyd and Vandenberghe 2004); see also d’Aspremont et al. (2007)
for a special-purpose and more efficient method for solving it.
In general, solving the SDP (8.12) is computationally more intensive than
finding a local optimum of the biconvex criterion (8.8). However, since it is a
convex relaxation of an exact reformulation, it has an attractive theoretical
guarantee: if we solve the SDP and do obtain a rank-one solution, then we
have in fact obtained the global optimum of the nonconvexSCoTLASScrite-
rion. For various types of spiked covariance models, it can be shown that the
SDP (8.12) will have a rank-one solution with high probability, as long as the
sample size _N_ is sufficiently large relative to the sparsity and dimension (but
still allowing for _N_  _p_ ); see Section 8.2.6 for further discussion. Thus, for
all of these problems, we are guaranteed to have found the _global_ optimum of
theSCoTLASScriterion.

##### 8.2.2.2 Methods Based on Reconstruction

We now turn to methods for sparse PCA that are based on its reconstruction
interpretation. In the case of a single sparse principal component, Zou, Hastie


###### SPARSE PRINCIPAL COMPONENTS ANALYSIS 207

and Tibshirani (2006) proposed the optimization problem

```
minimize
θ,v ∈R p
‖ θ ‖ 2 =1
```
###### {

###### 1

###### N

###### ∑ N

```
i =1
```
```
‖ xi − θvTxi ‖^22 + λ 1 ‖ v ‖ 1 + λ 2 ‖ v ‖^22
```
###### }

###### , (8.13)

where _λ_ 1 _,λ_ 2 are nonnegative regularization parameters. Let’s examine this
formulation in more detail.

- If we set _λ_ 1 = _λ_ 2 = 0, then it is easy to show that the program (8.13)
    achieves its optimum at a pair _θ_ ˆ= ˆ _v_ = _v_ 1 , corresponding to a maximum
    eigenvector of **X** _T_ **X** , so that we recover the usual PCA solution.
- When _p_  _N_ the solution is not necessarily unique unless _λ_ 2 _>_ 0. If we set
    _λ_ 1 = 0, then for any _λ_ 2 _>_ 0, the optimal solution̂ _v_ is proportional to the
    largest principal component direction.
- In the general setting with both _λ_ 1 and _λ_ 2 strictly positive, the _`_ 1 -penalty
    weighted by _λ_ 1 encourages sparsity of the loadings.
       Like the objective (8.8), criterion (8.13) is not jointly convex in _v_ and _θ_ ,
but is biconvex. Minimization over _v_ with _θ_ fixed is equivalent to an elastic-
net problem (see Section 4.2) and can be computed efficiently. On the other
hand, minimization over _θ_ with _v_ fixed has the simple solution

```
θ =
```
```
X T z
‖ X T z ‖ 2
```
###### , (8.14)

where _zi_ = _vTxi_ for _i_ = 1 _,...,N_ (see Exercise 8.8). Overall, this procedure is
reasonably efficient, but not as simple as Algorithm 8.1, which involves just
soft-thresholding.
It turns out that the originalSCoTLASScriterion (8.7) and the regression-
based objective function (8.13) are intimately related. Focusing on the rank-
one case (8.13), consider the constrained as opposed to the Lagrangian form
of the optimization problem—namely

```
minimize
‖ v ‖ 2 =‖ θ ‖ 2 =1
```
```
‖ X − X vθT ‖^2 F subject to‖ v ‖ 1 ≤ t. (8.15)
```
If we add the extra _`_ 1 -constraint‖ _θ_ ‖ 1 ≤ _t_ , then as shown in Exercise 8.7,
the resulting optimization problem is equivalent to theSCoTLASScrite-
rion (8.7). Consequently, it can be solved conveniently by Algorithm 8.1. Note
that adding this _`_ 1 -constraint is quite natural, as it just symmetrizes the con-
straints in problem (8.15).

#### 8.2.3 Higher-Rank Solutions

In Section 8.2.1, we presented a sequential approach for standard principal
components analysis, based on successively solving the rank-one problem, re-
stricting each candidate to be orthogonal to all previous solutions. This se-
quential approach also solves the multirank problem (8.2).


###### 208 SPARSE MULTIVARIATE METHODS

How about in the sparse setting? This sequential approach is also used
in theSCoTLASSprocedure, where each candidate solution for rank _k_ is
restricted to be orthogonal to all previous solutions for ranks _< k_. However,
here the sequential approach will typically not solve a multirank criterion.
For the sparse PCA approach (8.8), we can apply the multifactor penal-
ized matrix decomposition (7.3) of Chapter 7. Given the rank-one solution
( **u** 1 _,v_ 1 _,d_ 1 ), we simply compute the residual **X** ′= **X** − _d_ 1 **u** 1 _vT_ 1 and apply the
rank-one Algorithm (8.8) to **X** ′to obtain the next solution.^2 Doing so ensures
neither orthogonality of the principal components{( **u** 1 _d_ 1 ) _,_ ( **u** 2 _d_ 2 ) _,..._ ( **u** _kdk_ )}
nor the sparse loading vectors{ _v_ 1 _,v_ 2 _...,vk_ }. But the solutions do tend to be
somewhat orthogonal in practice.
However, there is a subtle issue here: it is not clear that orthogonality of
the vectors{ _v_ 1 _,v_ 2 _,...vk_ }is desirable in the setting of sparse PCA, as orthogo-
nality may be at odds with sparsity. Otherwise stated, enforcing orthogonality
might result in less sparse solutions. A similar issue arises with sparse coding,
as discussed in Section 8.2.5.
Interestingly, one can modify the approach (8.8) to constrain the vectors **u** _j_
to be orthogonal, with no such constraints on the vectors _vj_. This modification
can improve the interpretability of the set of solutions while still allowing the
_vj_ to be sparse. In detail, consider the problem

```
maximize
u k, vk
```
###### {

```
u Tk X vk
```
###### }

```
subject to‖ vk ‖ 2 ≤1,‖ vk ‖ 1 ≤ c ,
```
```
and‖ u k ‖ 2 ≤1 with u Tk u j = 0 for all j = 1 ,...,k −1.
```
###### (8.16)

The solution for **u** _k_ with _vk_ fixed is

```
u k =
```
```
P ⊥ k − 1 X vk
‖ P ⊥ k − 1 X vk ‖ 2
```
###### (8.17)

where **P** ⊥ _k_ − 1 = **I** −

∑ _k_ − 1
_i_ =1 **u** _i_ **u**
_T
i_ , the projection onto the orthogonal complement
of the space spanned by **u** 1 _,_ **u** 2 _,..._ **u** _k_ − 1. This multifactor version of Algo-
rithm 8.1 uses operation (8.17) in place of the rank-one projection **u** =‖ **XX** _vv_ ‖ 2.

The approach (8.13) of Zou et al. (2006) can be generalized to _r >_ 1
components by minimizing the cost function

```
1
N
```
###### ∑ N

```
i =1
```
```
‖ xi − ΘV Txi ‖^22 +
```
```
∑ r
```
```
k =1
```
```
λ 1 k ‖ vk ‖ 1 + λ 2
```
```
∑ r
```
```
k =1
```
```
‖ vk ‖^22 , (8.18)
```
subject to **Θ** _T_ **Θ** = **I** _r_ × _r_. Here **V** is a _p_ × _r_ matrix with columns{ _v_ 1 _,...,vr_ },
and **Θ** is also a matrix of dimension _p_ × _r_. Although this objective func-
tion (8.18) is not jointly convex in **V** and **Θ** , it is biconvex. Minimization over
**V** with **Θ** fixed is equivalent to solving _r_ separate elastic net problems and

(^2) Without sparsity constraints, this procedure would deliver exactly the usual sequence
of principal components.


###### SPARSE PRINCIPAL COMPONENTS ANALYSIS 209

can be done efficiently. On the other hand, minimization over **Θ** with **V** fixed
is a version of the so-called Procrustes problem, and can be solved by a simple
SVD calculation (Exercise 8.10). These steps are alternated until convergence
to a local optimum.

_8.2.3.1 Il lustrative Application of Sparse PCA_

Here we demonstrate sparse principal components on a dataset of digitized
handwritten digits. We have a training set of _N_ = 664 gray-scale images of
handwritten sevens. Each image contains 16×16 pixels, leading to a data
matrix **X** of dimension 664×256. Panel (a) of Figure 8.2 shows some ex-

```
(a)
```
```
(b)
```
**Figure 8.2** _(a) A sample of handwritten sevens from the zip code database. (b)
Top row: first four principal components for “sevens” data (color shades represent
negative loadings as yel low and positive loadings as blue); Bottom two rows: first eight
sparse principal components, constrained to be positive. These are superimposed on
the average seven to enhance interpretability._

amples of these images, where panel (b) shows the results of sparse principal
components, and contrasts them with standard PCA. The top row in panel
(b) shows the first four standard principal components, which explain about
50% of the variance. To enhance interpretability, we compute sparse principal
components with the loadings constrained to be nonnegative. In order to do
so, we simply replace the soft-threshold operatorS _λ_ ( _x_ ) in Algorithm 8.1 by
the nonnegative soft-threshold operatorS _λ_ +( _x_ ) = ( _x_ − _λ_ )+.


###### 210 SPARSE MULTIVARIATE METHODS

The first eight sparse principal components are shown in the middle and
bottom rows, and also explain about 50% of the variation. While more com-
ponents are needed to explain the same amount of variation, the individual
components are simpler and potentially more interpretable. For example, the
2nd and 6th sparse components appear to be capturing the “notch” style used
by some writers, for example in the top left image of Figure 8.2(a).

#### 8.2.4 Sparse PCA via Fantope Projection

Vu, Cho, Lei and Rohe (2013) propose another related approach to sparse
PCA. Letting **S** = **X** _T_ **X** _/N_ , their proposal is to solve the semidefinite program

```
maximize
Z ∈F p
```
```
{trace( SZ )− λ ‖ Z ‖ 1 } (8.19)
```
where the convex setF _p_ ={ **Z** : **0**  **Z**  **I** _,_ trace( **Z** ) = _p_ }is known as a
_Fantope_. When _p_ = 1 the spectral norm bound inF _p_ is redundant and (8.19)
reduces to the direct approach of d’Aspremont et al. (2007). For _p >_ 1, al-
though the penalty in (8.19) only implies entry-wise sparsity of the solution, it
can be shown (Lei and Vu 2015) that the solution is able to consistently select
the nonzero entries of the leading eigenvectors under appropriate conditions.

#### 8.2.5 Sparse Autoencoders and Deep Learning

In the neural network literature, an autoencoder generalizes the idea of prin-
cipal components. Figure 8.3 provides a simple illustration of the idea, which
is based on reconstruction, much like in the criterion (8.13). The autoen-

```
x 1
```
```
x 2
```
```
x 3
```
```
x 4
```
```
x 5
```
```
xˆ 1
```
```
xˆ 2
```
```
xˆ 3
```
```
xˆ 4
```
```
xˆ 5
```
```
Input
layer
```
```
Hidden
layer
```
```
Output
layer
WT
```
```
σ(WTx)
```
```
W
```
**Figure 8.3** _Left: Network representation of an autoencoder used for unsupervised
learning of nonlinear principal components. The middle layer of hidden units creates
a bottleneck, and learns nonlinear representations of the inputs. The output layer is
the transpose of the input layer, and so the network tries to reproduce the input
data using this restrictive representation. Right: Images representing the estimated
columns of_ **W** _in an image modeling task._


###### SPARSE PRINCIPAL COMPONENTS ANALYSIS 211

coder is based on a _p_ × _m_ matrix of weights **W** with _m < p_ ; it is used to
create _m_ linear combinations of the input vector _x_. Each such linear combi-
nation is passed through a nonlinear function _σ_ , with the sigmoid function
_σ_ ( _t_ ) = 1 _/_ (1 + _e_ − _t_ ) being one typical choice, as represented in Figure 8.3 via
the vector function _h_ ( _x_ ) = _σ_ ( **W** _Tx_ ). The output layer is then modeled as
**W** _h_ ( _x_ ) = **W** _σ_ ( **W** _Tx_ ).^3 Given input vectors _xi_ for _i_ = 1 _,...,N_ , the weight
matrix **W** is then estimated by solving the (nonconvex) optimization problem

```
minimize
W ∈R m × p
```
###### {

###### 1

###### 2

###### ∑ N

```
i =1
```
```
‖ xi − W h ( xi )‖^2
```
###### }

###### . (8.20)

If we restrict _σ_ to be the identity function, then _h_ ( _x_ ) = **W** _Tx_ and the solution
to (8.20) is equivalent to principal components; i.e., **WW** _T_ = **V** _m_ **V** _Tm_ , where
**V** _m_ is the _p_ × _m_ matrix consisting of the first _m_ principal component load-
ings (see Exercise 8.12). Here the bottleneck in the network imposes a rank
constraint on **W** , forcing it to learn structure.
In modeling high-dimensional signals such as images, the vectors _xi_ might
represent the pixels of a (sub) image. The columns of **W** represent a learned
dictionary of image shapes, and _h_ ( _xi_ ) tries to represent _xi_ in this basis. Now
the bottleneck might be seen as an unnecessary restriction, since many slightly
different shapes are likely in an image. The idea is to replace this restriction
by imposing sparseness on the coefficients _h_ ( _x_ ), leading to so-called _sparse
coding_ (Olshausen and Field 1996). To build intuition, we first consider the
linear case, but now with _m > p_. In the optimization problem

```
minimize
W ∈R p × m, { si } N 1 ∈R m
```
###### {

###### 1

###### 2

###### ∑ N

```
i =1
```
###### {

```
‖ xi − W si ‖^22 + λ ‖ si ‖ 1
```
###### }

###### }

```
subject to‖ W ‖^2 F≤ 1 ,
```
###### (8.21)

the individual _si_ are forced to be sparse through the _`_ 1 -penalties. The columns
of **W** are not constrained to be uncorrelated, and their total size is kept
in bound by the Frobenius norm. Exercise 8.13 examines the sparse linear
coder (8.21) in more detail, and develops a natural alternating algorithm for
solving it. The right panel of Figure 8.3 illustrates a typical solution for **W**
in an image modeling problem, where each _xi_ is a vectorized version of an
image. Each subimage represents a column of **W** (the codebook), and every
image is modeled as a sparse superposition of elements of **W**. Modern sparse
encoders used in deep learning generalize this formulation in several ways (Le
et al. 2012):

- They use multiple hidden layers, leading to a hierarchy of dictionaries;
- Nonlinearities that can be computed more rapidly than the sigmoid are
    used—for example _σ_ ( _t_ ) = _t_ +.

(^3) In practice, bias terms are also included in each linear combination; we omit them here
for simplicity.


###### 212 SPARSE MULTIVARIATE METHODS

- More general sparseness penalties are imposed directly on the coefficients
    _h_ ( _xi_ ) in the problem (8.20).

These models are typically fit by (stochastic) gradient descent, and often on
very large databases of images (for example), using distributed computing
with large clusters of processors.
One important use of the sparse autoencoder is for _pretraining_. When fit-
ting a supervised neural network to labelled data, it is often advantageous
to first fit an autoencoder to the data without the labels and then use the
resulting weights as starting values for fitting the supervised neural network
(Erhan et al. 2010). Because the neural-network objective function is noncon-
vex, these starting weights can significantly improve the quality of the final
solution. Furthermore, if there is additional data available without labels, the
autoencoder can make use of these data in the pretraining phase.

#### 8.2.6 Some Theory for Sparse PCA

Here we give a brief overview of how standard principal component analysis
breaks down in the high-dimensional setting ( _p_  _N_ ), and why some struc-
tural assumption—such as sparsity in the principal components—is essential.
One way of studying the behavior of (sparse) PCA is in terms of a _spiked
covariance model_ , meaning a _p_ -dimensional covariance matrix of the form

###### Σ =

###### ∑ M

```
j =1
```
```
ωjθjθTj + σ^2 I p × p, (8.22)
```
where the vectors{ _θj_ } _Mj_ =1 are orthonormal, and associated with positive

weights _ω_ 1 ≥ _ω_ 2 ≥···≥ _ωM>_ 0. By construction, the vectors{ _θj_ } _Mj_ =1are the
top _M_ eigenvectors of the population covariance, with associated eigenvalues
{ _σ_^2 + _ωj_ } _Mj_ =1.
Given _N_ i.i.d. samples{ _xi_ } _Ni_ =1from a zero-mean distribution with covari-
ance **Σ** , standard PCA is based on estimating the span of{ _θj_ } _Mj_ =1using the

top _M_ eigenvectors of the sample covariance matrix **Σ** ̂= _N_^1

###### ∑ N

```
i =1 xix
```
_T
i_. In
the classical setting, in which the dimension _p_ remains fixed while the sample
size _N_ →+∞, the sample covariance converges to the population covariance,
so that the principal components are consistent estimators. More relevant for
high-dimensional data analysis is a scaling in which _bothp_ and _N_ tend to
infinity, with _p/N_ → _c_ ∈(0 _,_ ∞) with _M_ and the eigenvalues remaining fixed.^4
Under this scaling, the sample eigenvectors or principal components do not

converge to the population eigenvectors{ _θ_
( _p_ )
_j_ }
_M
j_ =1. In fact, if the signal-to-noise
ratios _ωj/σ_^2 are sufficiently small, the sample eigenvectors are asymptotically
orthogonal to the population eigenvectors! This poor behavior is caused by

(^4) To be clear, for each _j_ = 1 _,...,M_ , we have a sequence{ _θ_ ( _jp_ )}of population eigenvectors,
but we keep the signal-to-noise ratio _ωj/σ_^2 fixed, independently of ( _p,N_ ).


###### SPARSE CANONICAL CORRELATION ANALYSIS 213

the _p_ − _M_ dimensions of noise in the spiked covariance model (8.22), which
can swamp the signal when _N_  _p_ ; see Johnstone and Lu (2009) for a precise
statement of this phenomenon.
Given the breakdown of high-dimensional PCA without any structure on
the eigenvectors, we need to make additional assumptions. A number of au-
thors have explored how sparsity can still allow for consistent estimation of
principal components even when _p_  _N_. Johnstone and Lu (2009) propose a
two-stage procedure, based on thresholding the diagonal of the sample covari-
ance matrix in order to isolate the highest variance coordinates, and then per-
forming PCA in the reduced-dimensional space. They prove consistency of this
method even when _p/N_ stays bounded away from zero, but allow only polyno-
mial growth of _p_ as a function of sample size. Amini and Wainwright (2009)
analyze the variable selection properties of both diagonal thresholding and the
semidefinite programming relaxation (8.12) of theSCoTLASSproblem (8.7).
For a spiked covariance model (8.22) with a single leading eigenvector that
is _k_ -sparse, they show that the diagonal thresholding method (Johnstone and
Lu 2009) succeeds in recovering sparsity pattern of the leading eigenvector if
and only if the sample size _N_  _k_^2 log _p_. The SDP relaxation also performs
correct variable selection with this scaling of the sample size, and in cer-
tain settings, can succeed with fewer samples. Amini and Wainwright (2009)
show that no method—even one based on exhaustively enumerating all the
subsets—can succeed with fewer than _N_  _k_ log _p_ samples.
Other authors have studied the estimation of the eigenspaces themselves
in _`_ 2 or related norms. Paul and Johnstone (2008) propose the augmented
SPCA algorithm, a refinement of the two-stage method of Johnstone and
Lu (2009); this algorithm is also analyzed by Birnbaum, Johnstone, Nadler
and Paul (2013), who show that it achieves the minimax rates for models of
weakly sparse eigenvectors in _`q_ -balls. In independent work, Vu and Lei (2012)
prove minimax lower bounds for the sparse PCA problem, and show that
they can be achieved by computing the maximum eigenvalue of the sample
covariance subject to an _`q_ -constraint. Ma (2010, 2013) and Yuan and Zhang
(2013) have studied algorithms for sparse PCA based on a combination of
the power method (a classical iterative technique for computing eigenvectors)
with intermediate soft-thresholding steps. When _M_ = 1, the procedure of Ma
(2013) is essentially the same as Algorithm 8.1, the only difference being the
use of a fixed level _λ_ in the soft-thresholding step, rather than the variable
choice used in the latter to solve the bound version of the problem.

### 8.3 Sparse Canonical Correlation Analysis

Canonical correlation analysis extends the idea of principal components anal-
ysis to two data matrices. Suppose that we have data matrices **X** _,_ **Y** of di-
mensions _N_ × _p_ and _N_ × _q_ , respectively, with centered columns. Given two
vectors _β_ ∈R _p_ and _θ_ ∈R _q_ , they define one-dimensional projections of the two
datasets, namely the variates ( _N_ -vectors) **X** _β_ and **Y** _θ_ , respectively. Canoni-


###### 214 SPARSE MULTIVARIATE METHODS

cal correlation analysis (CCA) chooses _β_ and _θ_ to maximize the correlation
between these two variates.
In detail, the sample covariance between **X** _β_ and **Y** _θ_ is given by

```
Cov(̂ X β, Y θ ) =^1
N
```
###### ∑ N

```
i =1
```
```
( xTiβ ) ( yiTθ ) =
```
###### 1

###### N

```
βT X T Y θ. (8.23)
```
where _xi_ and _yi_ are the _ith_ rows of **X** and **Y** , respectively. CCA solves the
problem

```
maximize
β ∈R p, θ ∈R q
```
###### {

```
Cov(̂ X β, Y θ )
```
###### }

```
subject tôVar( X β ) = 1 and̂Var( Y θ ) = 1.
```
###### (8.24)

The solution set ( _β_ 1 _,θ_ 1 ) are called the first canonical vectors, and the cor-
responding linear combinations **z** 1 = **X** _β_ 1 and **s** 1 = **Y** _θ_ 1 the first canonical
variates. Subsequent pairs of variates can be found by restricting attention
to vectors such that the resulting variates are uncorrelated with the earlier
ones. All solutions are given by a generalized SVD of the matrix **X** _T_ **Y** (see
Exercise 8.14).
Canonical correlation analysis fails when the sample size _N_ is strictly less
than max( _p,q_ ): in this case, the problem is degenerate, and one can find
meaningless solutions with correlations equal to one. One approach to avoid-
ing singularity of the sample covariance matrices _N_^1 **X** _T_ **X** and _N_^1 **Y** _T_ **Y** is by
imposing additional restrictions. For instance, the method of _ridge regular-
ization_ is based on adding some positive multiple _λ_ of the identity to each
sample covariance matrix; see Exercise 8.17 for further discussion. An alter-
native method is based on taking only the diagonal entries of the sample
covariance matrices, an approach that we adopt below.
Sparse canonical vectors can be derived by imposing _`_ 1 -constraints on _β_
and _θ_ in the criterion (8.24), leading to the modified objective

```
maximize
β, θ
```
###### {

```
Cov(̂ X β, Y θ )
```
###### }

```
subject to Var( X β ) = 1 , ‖ β ‖ 1 ≤ c 1 , Var( Y θ ) = 1 , ‖ θ ‖ 1 ≤ c 2.
(8.25)
```
Note that one can use either the bound form for the _`_ 1 -constraints (as above),
or add corresponding Lagrangian terms. For numerical solution of this prob-
lem, we note that the standard CCA problem (8.24) can be solved by alternat-
ing least squared regressions (see Exercises 8.14–8.17). Not surprisingly then,
the sparse version (8.25) can be solved by alternating elastic-net procedures,
as we explore in Exercise 8.19.
The sparse formulation (8.25) is useful when _N >_ max( _p,q_ ), but can fail
in high-dimensional situations just as before. Again, ridging the individual


###### SPARSE CANONICAL CORRELATION ANALYSIS 215

covariance matrices will resolve the issue, and can be absorbed in the alternat-
ing elastic-net regressions. When the dimensions are very high—as in genomic
problems—the cross-covariance between **X** and **Y** is of primary interest, and
the internal covariance among the columns of **X** and among the columns of
**Y** are nuisance parameters which can add to the estimation variance. In this
case, it is convenient to standardize the variables, and then assume the internal
covariance matrices are the identity. We are thus led to the problem

```
maximize
β,θ
```
```
Cov(̂ X β, Y θ )
```
```
subject to‖ β ‖^2 ≤ 1 , ‖ θ ‖^2 ≤ 1 , ‖ β ‖ 1 ≤ c 1 , ‖ θ ‖ 1 ≤ c 2.
```
###### (8.26)

This objective has the same form as the penalized matrix decomposition (7.6)
previously discussed in Chapter 7, but using as input the data matrix **X** _T_ **Y**.
We can thus apply Algorithm 7.2 directly, using alternating soft-thresholding
to compute the solutions.
Higher-order sparse canonical variates are obtained from the higher-order
PMD components: as in Algorithm 7.3, after computing a solution, we take
residuals and then apply the procedure to what remains.

#### 8.3.1 Example: Netflix Movie Rating Data

Let us illustrate the behavior of sparse CCA by applying it to the Netflix
movie-ratings data. As originally described in detail in Section 7.3.1, the full
dataset consists of 17 _,_ 770 movies and 480 _,_ 189 customers. Customers have
rated some (around 1%) of the movies on a scale from 1 to 5. For this example,
we selected the _p_ = _N_ = 500 movies and customers with the most ratings,
and imputed the missing values with the movie means.
Among the 500 films, we identified those that were action movies (59 in all)
and those that were romantic movies (73 in all). The remaining movies were
discarded. We then applied the sparse CCA procedure to the data. The idea
was to correlate each customer’s ratings on the action movies with their ratings
on the romantic movies. We divided the 500 customers into two equal-sized
training and test groups at random, and applied sparse CCA to the training
set. We constrained the weight vectors to be nonnegative for interpretability.
The movies receiving positive weights in the first sparse pair of components
are shown in Table 8.3.1. Perhaps a movie buff could tell us why the ratings
on these particular movies should correlate; for example, the action movies
may be relatively “tame” compared to films likeTerminator. In Figure 8.4,
we plot the average ratings for the seven action movies on the test set, plotted
against the average rating for the 16 romantic movies for each customer. The
correlation is quite high—about 0.7. Hence for a given customer, we can do a
reasonable job of predicting his/her average rating for the seven action movies
from his/her average rating on the 16 romantic movies, and vice versa.


###### 216 SPARSE MULTIVARIATE METHODS

```
Table 8.2 Smal l Netflix dataset: Action and romantic movies with nonzero
weights in the first sparse canonical covariates.
Action Movies
Speed S.W.A.T. Men in Black II
The Fast and the Furious Behind Enemy Lines Charlies Angels
Con Air
Romantic Movies
What Women Want Ghost The Family Man
The Bodyguard Miss Congeniality Pretty Woman
Sister Act Dirty Dancing Runaway Bride
Just Married Maid in Manhattan Two Weeks Notice
Legally Blonde 2: Red 13 Going on 30 Father of the Bride
Legally Blonde
```
```
1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
```
```
2
```
```
3
```
```
4
```
```
5
```
```
Action Movies
```
```
Romantic Movies
```
```
Average Ratings
```
```
corr= 0.7
```
**Figure 8.4** _Sparse canonical correlation analysis applied to a subset of the Netflix
movie rating data. The plot shows the average rating for the seven action movies on
the test data versus the average for the 16 romantic movies having nonzero weights
in the first sparse CCA components._


###### SPARSE LINEAR DISCRIMINANT ANALYSIS 217

### 8.4 Sparse Linear Discriminant Analysis

Linear discriminant analysis (LDA) is an important technique for classifica-
tion. There is a variety of different proposals for sparse linear discriminant
analysis, in part because there are at least three different ways to approach
classical discriminant analysis. These are the normal theory model, Fisher’s
between-to-within variance criterion, and optimal scoring. In addition, in the
high-dimensional regime _p_  _N_ , some form of regularization is needed for
the within-class covariance estimate, and the form of this estimate leads to
different methods for sparse LDA.

#### 8.4.1 Normal Theory and Bayes’ Rule

Consider a response variable _G_ falling into one of _K_ classes{ 1 _,_ 2 _,...,K_ },
and a predictor vector _X_ ∈R _p_. Suppose that _fk_ ( _x_ ) is the class-conditional
density of _X_ in class _G_ = _k_ , and let _πk_ be the prior probability of class _k_ ,
with

###### ∑ K

```
k =1 πk = 1. A simple application of Bayes’ rule gives us
```
```
Pr( G = k | X = x ) =
πkfk ( x )
∑ K
` =1 π`f` ( x )
```
###### . (8.27)

Suppose moreover that each class density is modeled as a multivariate Gaus-
sian _N_ ( _μk,_ **Σ** _w_ ), with density

```
fk ( x ) =
```
###### 1

```
(2 π ) p/^2 | Σ w |^1 /^2
```
```
e −
```
```
1
2 ( x − μk )
```
_T_ **Σ** − _w_ (^1) ( _x_ − _μk_ )
_,_ (8.28)
based on a common covariance matrix **Σ** _w_. In comparing two classes _k_ and
_`_ , it is sufficient to look at the log-ratio of their posterior probabilities (8.27),
and we find that
log
Pr( _G_ = _k_ | _X_ = _x_ )
Pr( _G_ = _`_ | _X_ = _x_ )
= log
_fk_ ( _x_ )
_f`_ ( _x_ )
+ log
_πk
π`_
= log
_πk
π`_

###### −

###### 1

###### 2

```
( μk + μ` ) T Σ − w^1 ( μk − μ` )
```
```
+ xT Σ − w^1 ( μk − μ` ) ,
```
###### (8.29)

an equation linear in _x_. Consequently, the decision boundary between classes _k_
and _`_ —i.e., all vectors _x_ for which Pr( _G_ = _k_ | **X** = _x_ ) = Pr( _G_ = _`_ | **X** = _x_ )—
defines a hyperplane inR _p_. This statement holds for any pair of classes, so
all the decision boundaries are linear. If we divideR _p_ into regions that are
classified as class 1, class 2, and so on, these regions will be separated by
hyperplanes.
Equation (8.29) shows us that these LDA models are also linear logistic
regression models; the only difference is the way the parameters are estimated.
In logistic regression, we use the conditional binomial/multinomial likelihoods,
whereas estimation in LDA is based on the joint likelihood of _X_ and _G_ (Hastie


###### 218 SPARSE MULTIVARIATE METHODS

et al. 2009, Chapter 4). From Equation (8.29), we see that the _linear discrim-
inant functions_

```
δk ( x ) = xT Σ − w^1 μk −
```
###### 1

###### 2

```
μTk Σ − w^1 μk + log πk (8.30)
```
provide an equivalent description of the decision rule, leading to the classifi-
cation function _G_ ( _x_ ) = arg max _k_ ∈{ 1 _,...,K_ } _δk_ ( _x_ ).
In practice, the parameters of the Gaussian class-conditional distributions
are not known. However, given _N_ samples{( _x_ 1 _,g_ 1 ) _,...,_ ( _xN,gN_ )}of feature-
label pairs, we can estimate the parameters as follows. Let _Ck_ denote the
subset of indices _i_ for which _gi_ = _k_ , and let _Nk_ =| _Ck_ |denote the total
number of class- _k_ samples. We then form the estimates _π_ ̂ _k_ = _Nk/N_ , and

```
̂ μk =
```
###### 1

```
Nk
```
###### ∑

```
i ∈ Ck
```
```
xi, and (8.31a)
```
```
Σ ̂ w =^1
N − K
```
###### ∑ K

```
k =1
```
###### ∑

```
i ∈ Ck
```
```
( xi −̂ μk )( xi −̂ μk ) T. (8.31b)
```
Note that **Σ** ̂ _w_ is an unbiased estimate of the pooled within-class covariance.
In the high-dimensional setting with _p > N_ , the sample within-class covari-
ance matrix **Σ** ̂ _w_ is singular, and so we must regularize it in order to proceed. As
before, there are many ways to do so; later in this section, we describe an ap-
proach based on quadratic regularization (Hastie, Buja and Tibshirani 1995).
In very high dimensions, it is often effective to assume that predictors are
uncorrelated, which translates into a diagonal form for **Σ** _w_. Doing so yields
the so-called _naive Bayes_ classifier, or alternatively _diagonal linear discrimi-
nant analysis_ (see Exercise 8.20). Lettinĝ _σ_^2 _j_ = _s_^2 _j_ be the pooled within-class
variance for feature _j_ , the estimated classification rule simplifies to

```
G ̂( x ) = arg min
` =1 ,...,K
```
###### 

###### 

###### 

```
∑ p
```
```
j =1
```
```
( xj − μ ̂ j` )^2
̂ σ^2 j
```
```
−log ˆ πk
```
###### 

###### 

###### 

###### , (8.32)

known as the _nearest centroid rule_.

#### 8.4.2 Nearest Shrunken Centroids

Notice that the classification rule (8.32) will typically involve all features;
when _p_ is large, while one might expect that only a subset of these features is
informative. This subset can be revealed by reparametrizing the model, and
imposing a sparsity penalty. More specifically, suppose that we decompose the
mean vector for class _k_ into the sum _μk_ = ̄ _x_ + _αk_ , where ̄ _x_ = _N_^1

###### ∑ N

_i_ =1 _xi_ is
the overall mean vector, and _αk_ ∈R _p, k_ = 1 _,...,K_ denotes the contrast
for class _k_ , together satisfying the constraint

###### ∑ K

```
k =1 αk = 0. We then consider
```

###### SPARSE LINEAR DISCRIMINANT ANALYSIS 219

optimizing the _`_ 1 -regularized criterion

```
minimize
αk ∈R p,k =1 ,...,K
```
###### 

###### 

###### 

###### 1

###### 2 N

###### ∑ K

```
k =1
```
###### ∑

```
i ∈ Ck
```
```
∑ p
```
```
j =1
```
```
( xij − x ̄ j − αjk )^2
s^2 j
```
```
+ λ
```
###### ∑ K

```
k =1
```
```
∑ p
```
```
j =1
```
###### √

```
Nk
sj
```
```
| αjk |
```
###### 

###### 

###### 

```
subject to
```
###### ∑ K

```
k =1 αjk = 0 for j = 1 ,...,p.
(8.33)
```
The solutions for _αjk_ amount to simple soft-thresholding of particular
class-wise contrasts. In detail, we define the contrasts

```
djk =
x ̃ jk − ̄ xj
mksj
```
###### , (8.34)

where _x_ ̃ _jk_ = _N_^1 _k_

###### ∑

```
i ∈ Ck
```
```
xij , the quantity ̄ xj denotes the jth component of the
```
global mean ̄ _x_ , and^5 _m_^2 _k_ = _N_^1 _k_ − _N_^1. We then apply the soft-thresholding op-
erator

```
d ′ jk =S λ ( djk ) = sign( djk )(| djk |− λ )+ , (8.35a)
```
and reverse the transformation to obtain the shrunken centroid estimates

```
̂ μ ′ jk = ̄ xj + mksjd ′ kj. (8.35b)
```
Finally, we use these shrunken centroids for the estimates for _μjk_ in the nearest
centroid rule (8.32).
Suppose for a given feature _j_ , the contrasts _d_ ′ _jk_ are set to zero by the soft-
thresholding for each of the _k_ classes. Then that feature does not participate
in the nearest centroid rule (8.32), and is ignored. In this way, the nearest
shrunken centroid procedure does automatic feature selection. Alternatively,
a feature might have _d_ ′ _jk_ = 0 for some classes but not others, and hence would
only play a role for those classes.
The nearest shrunken centroid classifier is very useful for high-dimensional
classification problems, like those that occur in genomic and proteomic
data. The publicly available software (Hastie, Tibshirani, Narasimhan and
Chu 2003) includes some additional bells and whistles: a small constant _s_ 0
is added to each _sj_ , to stabilize the contrasts when _sj_ is close to zero; class-
specific shrinkage rates, to name a few.
Figure 8.5 shows the results of this procedure applied to some Lymphoma
cancer data (Tibshirani, Hastie, Narasimhan and Chu 2003). These data con-
sist of expression measurements on 4026 genes from samples of 59 lymphoma
patients. The samples are classified into diffuse large B-cell lymphoma (DL-
BCL), follicular lymphoma (FL), and chronic lymphocytic lymphoma (CLL).

(^5) The quantity _mk_ is a standardization constant, based on the variance of the numerator,
which makes _djk_ a t-statistic.


###### 220 SPARSE MULTIVARIATE METHODS

```
−1.5 −0.5 0.5 1.0 1.5
```
```
DLCL (27)
```
```
0
```
```
1000
```
```
2000
```
```
3000
```
```
4000
```
```
−1.5 −0.5 0.5 1.0 1.5
```
```
FL (5)
```
```
−1.5 −0.5 0.5 1.0 1.5
```
```
CLL (7)
```
```
Gene
```
```
Centroids: Average Expression Centered at Overall Centroid
```
```
0 1 2 3 4 5
Amount of Shrinkage λ
```
```
Error
```
```
4026 3146 1774 867 557 354 212 128 78 48 21 13 3
```
```
Size
```
```
0.0 0.2 0.4 0.6 0.8
```
```
Train
CV
Test
```
**Figure 8.5** _Results of nearest-shrunken-centroid classification on some Lymphoma
data, with three classes. The top plot shows the class-specific mean expression for
each gene (gray lines), and their shrunken versions (blue). Most of the genes are
shrunk to the overal l mean (0 here). The lower plot shows training, cross-validated,
and test misclassification error as a function of the shrinkage thresholdλ. The chosen
model includes 79 genes, and makes 0 test errors._


###### SPARSE LINEAR DISCRIMINANT ANALYSIS 221

The data are divided into a training set of 39 (27, 5, 7) samples, and a test
set of 20. The genes have been organized by hierarchical clustering. All but
79 of the genes have been shrunk to zero. Notice that the deviations of the
smaller classes are larger, since the biggest class DLBCL mostly determines
the overall mean. In Section 8.4.3.1, we compare the nearest shrunken centroid
classifier to a sparse version of Fisher’s linear discriminant analysis, discussed
next.

#### 8.4.3 Fisher’s Linear Discriminant Analysis

A different approach to sparse discriminant analysis arises from Fisher’s dis-
criminant framework. Here the idea is to produce low-dimensional projections
of the data that preserve the class separation. Although these projections are
primarily intended for visualization, one can also perform Gaussian classifica-
tion in the subspace produced.
Let **X** be an _N_ × _p_ matrix of observations, and assume that its columns,
corresponding to features, have been standardized to have mean zero. Given
such an observation matrix, we seek a low-dimensional projection such that
the _between-class_ variance is large relative to the _within-class_ variance. As
before, let **Σ** ̂ _w_ be the pooled within-class covariance matrix and̂ _μk_ the class-
specific centroids. The between-class covariance matrix **Σ** ̂ _b_ is the covariance
matrix of these centroids, given by

```
Σ ̂ b =
```
###### ∑ K

```
k =1
```
```
̂ πk ̂ μkμ ̂ Tk, (8.36)
```
treating them as multivariate observations with mass ˆ _πk_. Note that

```
Σ ̂ t =^1
N
X T X = Σ ̂ b + Σ ̂ w. (8.37)
```
For now we assume that **Σ** ̂ _w_ is of full rank (which implies that _p_ ≤ _N_ ); we
treat the non-full rank case below. For a linear combination **z** = **X** _β_ , Fisher’s
between-to-within variance criterion is captured by the ratio

```
R ( β ) =
```
```
βT Σ ̂ bβ
βT Σ ̂ wβ
```
###### , (8.38)

which is to be maximized. Fisher’s LDA proceeds by sequentially solving the
following problem:

```
maximize
β ∈R p
```
###### {

```
βT Σ ̂ bβ
```
###### }

such that _βT_ **Σ** ̂ _wβ_ ≤1, and _βT_ **Σ** ̂ _wβ_ ̂ _`_ = 0 for all _` < k_.
(8.39)
for _k_ = 1 _,_ 2 _,...,_ min( _K_ − 1 _,p_ ). Although the problem (8.39) is generally writ-
ten with the inequality constraint replaced with an equality constraint, the
two programs are equivalent if **Σ** ̂ _w_ has full rank. The solution _β_ ̂ _k_ is called


###### 222 SPARSE MULTIVARIATE METHODS

the _kthdiscriminant vector_ , and **z** _k_ = **X** _β_ ̂ _k_ the corresponding discriminant
variable. Note that LDA essentially does principal components on the class
centroids, but using a normalization metric that respects the within-class vari-
ances (Hastie et al. 2009, Chapter 4). In practice, we do not need to solve the
problem sequentially, because as with PCA we can get all the solutions with a
single eigen-decomposition: the first _k_ discriminant vectors are the _k_ leading

eigenvectors of **Σ** ̂

− 1
_w_ **Σ** ̂ _b_.
Witten and Tibshirani (2011) proposed a way to “sparsify” the objec-
tive (8.39), in particular by solving

```
maximize
β
```
###### 

###### 

###### 

```
βT Σ ̂ bβ − λ
```
```
∑ p
```
```
j =1
```
```
σ ˆ j | βj |
```
###### 

###### 

###### 

```
subject to βT Σ ̃ wβ ≤ 1 , (8.40)
```
where ˆ _σ_^2 _j_ is the _jth_ diagonal element of **Σ** ̂ _w_ , and **Σ** ̃ _w_ is a positive definite es-

timate for **Σ** _w_. This produces a first sparse discriminant vector _β_ ̂ 1 with level
of sparsity determined by the choice of _λ_. Further components can be suc-
cessively found by first removing the current solution from **Σ** ̂ _b_ before solving
problem (8.40); see the reference for details.
The choice for the regularized within-covariance matrix **Σ** ̃ _w_ depends on the
setting. In some problems, we might choose **Σ** ̃ _w_ to encourage spatial smooth-
ness, for example when the data are images. Then we can take **Σ** ̃ _w_ = **Σ** ̂ _w_ + **Ω**
where **Ω** penalizes differences in spatially nearby values. This idea is stud-
ied in the _flexible and penalized discriminant analysis_ approach of Hastie,
Tibshirani and Buja (1994) and Hastie et al. (1995). In the sparse setting,
this is conveniently implemented using the optimal-scoring approach of Sec-
tion 8.4.4. In other cases we only require that **Σ** ̃ _w_ makes the sample esti-
mate **Σ** ̂ _w_ positive definite, and for that purpose we can use a ridged version
**Σ** ̃ _w_ = **Σ** ̂ _w_ + __ diag( **Σ** ̂ _w_ ) for some _ >_ 0.
One simple case of particular interest is where **Σ** ̃ _w_ is taken to be a di-
agonal matrix, for example diag( **Σ** ̂w). Then problem (8.40) can be cast as
a penalized matrix decomposition applied to the between covariance matrix
**Σ** ̂ _b_ , and Algorithm 7.2 can be applied. In this case, with _K_ = 2 classes, this
method gives a solution that is similar to nearest shrunken centroids: details
are in Witten and Tibshirani (2011, Section 7.2). With more than two classes,
the two approaches are different. Nearest shrunken centroids produce sparse
contrasts between each class and the overall mean, while the sparse LDA
approach (8.40) produces sparse discriminant vectors for more general class
contrasts. This distinction is explored in the next example.

##### 8.4.3.1 Example: Simulated Data with Five Classes

We created two artificial scenarios to contrast the nearest shrunken centroids
approach with sparse discriminant analysis (8.40). Figure 8.6 shows the results
of nearest shrunken centroids classifier applied to the two different simulated


###### SPARSE LINEAR DISCRIMINANT ANALYSIS 223

```
1 2 3 4 5
```
```
12
```
```
34
```
```
56
```
```
78
```
(^109)
1112
1314
1516
1718
1920
2122
2324
2526
2728
2930
Scenario 1
1 2 3 4 5
12
34
56
79
1011
1213
1415
1617
1819
2053
172233
271512
542671
700750
835925
954
Scenario 2
**Figure 8.6** _Results of nearest shrunken centroid classifier applied to two different
simulated datasets, as described in the text. Those features (rows in each plot) with
nonzero estimated contrasts are shown. The length of each horizontal line segment is
proportional to the size of the contrast, with positive values to the right and negative
values to the left._
datasets. In both cases there are _N_ = 100 observations, with 20 observations
falling into each of _K_ = 5 classes involving _p_ = 1000 features.

1. In the first scenario, the first 10 features are two units higher in class 1,
    features 11–20 are two units higher in class 3, and features 21–30 are two
    units lower in class 5. Thus, higher values in each of the first three block of
    10 features characterize classes 1, 3, and 5.
2. In the second scenario, features 1–10 are one unit higher in classes 3–5
    versus 1,2 and features 11–20 are one unit higher in class 2 and one unit
    lower in class 1. Hence higher values for the first 10 features discriminate
    classes 3–5 versus 1 and 2, while higher values for the second 10 features
    discriminate between classes 1 versus 2.
       We applied the nearest shrunken centroid classifier, using cross-validation
to choose the shrinkage parameter and show the features with nonzero esti-
mated contrasts. The length of each horizontal line segment is proportional to
the size of the contrast, with positive values to the right and negative values
to the left. In the left panel, we see that nearest shrunken centroids has clearly
revealed the structure of the data, while in the right panel, the structure does
not come through as clearly. Figure 8.7 shows the results of rank-2 sparse
linear discriminant analysis with diagonal within-class covariance in each of
the two scenarios. In the first scenario (top row), the discriminant projection
cleanly separates classes 1, 3, and 5 from the rest, but the discriminant load-
ings (top right) are forced to combine three pieces of information into two
vectors, and hence give a cloudy picture. Of course one could use more than


###### 224 SPARSE MULTIVARIATE METHODS

```
−6 −4 −2 0 2 4 6 8
```
```
−6
```
```
−4
```
```
−2
```
```
0
```
```
2
```
```
4
```
```
6
```
```
8
```
```
First Discriminant Score
```
```
Second Discriminant Score
```
```
2
55
```
```
3
```
```
2
```
(^42)
5
3
1
5
4
5
3
24
3
2
3
4
4
2
3
5
3
1
4
5
1
4
1
(^25)
4
2
5
4
1
3
1
4
3
2
1
2
2
5
1
2
1
1
3
1
5
1
3
2
2 5
5
3
2
5
3
4
3
4 4 5
5
3
3
2
5
3
4
3
11
2
1
2
5
3
4 2
5
1
4
3
1
4
4
5
(^44)
1
1
2
1
0 5 10 15 20 25 30
−0.3
−0.1
0.1
0.2
0.3
Predictor
Discriminant Loading
●
●
●
●●●●●●●
●
●
●
●
●●
●●●●
●
●●
●●●
●
●
●●
●
●●
●
●●●
●
●
●
●
●
●
●●
●
●
●
●●●
●
First ComponentSecond Component
Scenario 1
−4 −2 0 2 4
−4
−2
0
2
First Discriminant Score
Second Discriminant Score
1
1
2
2
2
4
2
34
3
5
2
3
1
5
1
4
5 3
4
3
1
2
5
4
1
3
2 2
4
2
4
5
3
(^22)
5
4
1
4
3 44 3
(^55)
2
3
4
2
(^333)
5
(^544)
5
1
3
5
5
5
2
3
5
3
11
5
1
1
4
4
2
5
2
11
2
5
3
(^21)
4
1
3
5
4
5 3
1
4
2
1
4
1
1
3
2
0 5 10 15 20 25 30
−0.5 −0.4 −0.3 −0.2 −0.1
0.0
Predictor
Discriminant Loading
●●●
●
●
●
●
●
●
● ●
●●
●●
●
●
●
●
Scenario 2
**Figure 8.7** _Rank two sparse linear discriminant analysis with diagonal within-class
covariance, applied to the same two scenarios (top and bottom panels) as in Fig-
ure 8.6. The projections onto the first two sparse discriminant vectors is shown in
the left panels, while the right panels show the discriminant weights or loadings._


###### SPARSE LINEAR DISCRIMINANT ANALYSIS 225

_K_ = 2 sparse components and this would help in this example, but this ap-
proach is less attractive if high-order discriminants are required. The second
scenario is well suited to sparse LDA, as it cleanly separates classes 1 and
2 from the rest (bottom left), and reveals the features responsible for this
separation (bottom right).

#### 8.4.4 Optimal Scoring

A third approach to the derivation of linear discriminant analysis is called
_optimal scoring_. It is based on a recasting of the problem in terms of a mul-
tivariate linear regression, where the codes for the output classes are chosen
“optimally,” as we detail next. Suppose that the membership of the samples
are coded using a binary-valued _N_ × _K_ indicator matrix **Y** , with entries

```
yik =
```
###### {

```
1 if observation i belongs to class k
0 otherwise.
```
Using this notation, optimal scoring involves solving the sequence of problems
for _k_ = 1 _,...,K_ , each of the form

( _β_ ̂ _k,_ ̂ _θk_ ) = arg min
_βk_ ∈R _p,θk_ ∈R _K_

###### {

###### 1

###### N

```
‖ Y θk − X βk ‖^22
```
###### }

###### (8.41)

```
such that θTk Y T Y θk = 1 and θkT Y T Y θj = 0 for all j = 1 , 2 ,...,k −1.
```
The optimal solution _β_ ̂ _k_ of this problem turns out to be proportional to the
solution of the Fisher linear discriminant criterion (8.39) (Breiman and Ihaka
1984, Hastie et al. 1995). This equivalence is not too surprising. With just
_K_ = 2 classes, it is well known that the linear regression of a binary response
̃ _y_ = **Y** _θ_ (with arbitrary coding _θ_ ) on **X** gives the same coefficient vector as
linear discriminant analysis (up to a proportionality factor). For example, see
Exercise 4.2 of Hastie et al. (2009). With more than two classes, a regression
of **y** ̃ _`_ on **X** will differ according to how we assign numerical scores _θ`k_ to
the classes. We obtain the particular solution from linear regression that is
equivalent to linear discriminant analysis by optimizing over the choice of
scores, as in the problem (8.41).
As with the other methods for sparse discriminant analysis, adding an
_`_ 1 -penalty to the criterion (8.41) yields the modified optimization problem

```
minimize
βk ∈R p,θk ∈R K
```
###### {

###### 1

###### N

```
‖ Y θk − X βk ‖^22 + βTk Ω βk + λ ‖ βk ‖ 1
```
###### }

###### (8.42)

```
such that θkT Y T Y θk = 1 and θTk Y T Y θj = 0 for all j = 1 , 2 ,...,k − 1
```
(Leng 2008, Clemmensen, Hastie, Witten and Ersboll 2011). In addition to
the _`_ 1 -penalty with nonnegative regularization weight _λ_ , we have also added
a quadratic penalty defined by a positive semidefinite matrix **Ω** , equivalent


###### 226 SPARSE MULTIVARIATE METHODS

to the elastic net penalty in the special case **Ω** = _γ_ **I**. The resulting dis-
criminant vectors will be sparse if the regularization weight _λ_ on the _`_ 1 -
penalty is sufficiently large. At the other extreme, if _λ_ = 0, then minimizing
the criterion (8.42) is equivalent to the _penalized discriminant analysis_ pro-
posal of Hastie et al. (1995). Although the criterion is nonconvex (due to the
quadratic constraints), a local optimum can be obtained via alternating min-
imization, using the elastic net to solve for _β_. In fact, if any convex penalties
are applied to the discriminant vectors in the optimal scoring criterion (8.41),
then it is easy to apply alternating minimization to solve the resulting prob-
lem. Moreover, there is a close connection between this approach and sparse
Fisher LDA (8.40). In particular, they are essentially equivalent if we take
**Σ** ̃= **Σ** ̂ _w_ + **Ω**. The qualification “essentially” is needed due to nonconvexity:
we can only say that a stationary point for the one problem is also a stationary
point for the other (see Exercise 8.22 for details).
Whether one approaches the sparse discriminant problem through Fisher
LDA (8.40) or optimal scoring (8.42) depends on the nature of the problem.
When _p_  _N_ and the features are not structured—a category containing
many genomic problems—it is most attractive to set **Σ** ̃ _w_ equal to diag( **Σ** ˆ _w_ ).
Since this matrix is positive definite, we can take **Ω** = **0** , and the resulting
problem is easily solved via the soft-thresholding algorithm for penalized ma-
trix decomposition. When the problem has a spatial or temporal structure,
the matrix **Ω** can be chosen to encourage spatial or temporal smoothness of
the solution. In this case the optimal scoring approach is attractive, since the
quadratic term can be absorbed into the quadratic loss. Otherwise, the matrix
**Ω** can be chosen to be a diagonal matrix, as in the next example, and again
optimal scoring is convenient. Both methods are implemented in packages
inR:penalizedLDA(Witten 2011) for the criterion (8.40), andsparseLDA
(Clemmensen 2012) for the criterion (8.42).

##### 8.4.4.1 Example: Face Silhouettes

We illustrate sparse discriminant analysis based on the objective func-
tion (8.42) with a morphometric example taken from Clemmensen et al.
(2011). The dataset consisting of 20 adult male and 19 adult female face-
silhouettes. Following the work of Thodberg and Olafsdottir (2003), we apply
a minimum description length (MDL) approach to annotate the silhouettes,
and then perform Procrustes’ alignment on the resulting 65 MDL landmarks
of ( _x,y_ )-coordinates. These 65 pairs are vectorized resulting in _p_ = 130 spatial
features. We set **Ω** = **I** in the criterion (8.42); in this case the spatial features
are already smooth, and the ridge penalty **I** is sufficient to deal with the strong
spatial autocorrelations. For training, we used 22 of the silhouettes (11 female
and 11 male), which left 17 silhouettes for testing (8 female and 9 male). The
left and middle panels of Figure 8.8 illustrate the two classes of silhouettes.
Leave-one-out cross validation was performed on the training data, esti-
mating an optimal value of _λ_ that yielded 10 nonzero features. Since there are


###### SPARSE CLUSTERING 227

**Figure 8.8** _The silhouettes and the 65_ ( _x,y_ ) _-coordinates for females (left) and males
(middle). Right: The mean shape of the silhouettes, and the 10_ ( _x,y_ ) _-coordinates in
the SDA model. The superimposed dots indicate the landmarks retained in the sparse
discriminant vector. The arrows il lustrate the directions of the differences between
male and female classes._

two classes, there is only one sparse direction. The nonzero weights are shown
in the right panel of Figure 8.8. The few landmarks included in the model
are placed near high curvature points in the silhouettes, suggesting that the
important gender differences are located in these regions. The training and
test classification rates were both 82%.

### 8.5 Sparse Clustering

In this section, we discuss methods for clustering observations that employ
sparsity to filter out the uninformative features. We first give a brief back-
ground on clustering; more details can be found, for example, in Hastie et al.
(2009, Chapter 14).

#### 8.5.1 Some Background on Clustering

Suppose we wish to group or cluster a collection of _N_ observations on _p_ fea-
tures, where _p_  _N_. Our goal is to find groups of observations that are similar
with respect to the _p_ features. A standard method for doing this is called “hi-
erarchical clustering.” More precisely, we are referring to agglomerative (or
bottom-up) hierarchical clustering. This method starts with the individual
observations, and then merges or agglomerates the pair that are closest ac-
cording to some metric, with the Euclidean distance over the _p_ features being
one common choice. This process is continued, with the closest pair grouped
together at each stage. Along the way, we consider merging not only individ-
ual pairs of observations, but also merging clusters of observations that were
created at previous steps, with individual observations or other clusters. For
this, we need to define a linkage measure—the distance between two clusters.
Some common choices include _average linkage_ , which define the distance be-
tween two clusters as the average distance between any two observations, one
in each cluster; _complete linkage_ , which uses the maximum pairwise distance;
and _single linkage_ , which uses the minimum pairwise distance.


###### 228 SPARSE MULTIVARIATE METHODS

##### 8.5.1.1 Example: Simulated Data with Six Classes

The top panel of Figure 8.9 shows an example of hierarchical clustering ap-
plied to some artificial data with 120 observations and 2000 features. The
figure shows the result of hierarchical clustering using Euclidean distance and
complete linkage. The clustering tree or _dendrogram_ summarizes the sequence
of merges, leading to a single cluster at the top. The colors of the leaves of
the tree were not used in the clustering, and are explained below.
Now suppose that the observations vary only over a subset of the features.
Then we would like to isolate that subset both for interpretation and to im-
prove the clustering. In the top panel of Figure 8.9, the data were actually
generated so that the average levels of the first 200 features varied over six
predefined classes, with the remaining 1800 features being standard Gaussian
noise. These classes are not used in the clustering, but after carrying out the
clustering, we have colored the leaves of the dendrogram according to the true
class. We see that hierarchical clustering is confused by the uninformative
features, and does a poor job of clustering the observations into classes. In
this instance we would like to isolate the informative subset of features both
for interpretability and to improve the clustering. One way of doing that is
described next.

#### 8.5.2 Sparse Hierarchical Clustering

We now describe an approach that introduces sparsity and feature selection
to this problem. Given a data matrix **X** ∈R _N_ × _p_ , standard clustering based
on Euclidean distance uses the dissimilarity measure _Di,i_ ′=

∑ _p
j_ =1 _di,i_ ′ _,j_ with
_di,i_ ′ _,j_ = ( _xij_ − _xi_ ′ _j_ )^2. The idea here is to find a set of feature weights _wj_ ≥ 0
and use these to define a weighted dissimilarity measure _D_ ̃ _i,i_ ′=

∑ _p
j_ =1 _wjdi,i_ ′ _,j_ ;
we want each weight to reflect the importance of that feature. Finally, this
modified dissimilarity matrix is used as input into hierarchical clustering.
Denote by **∆** the _N_^2 × _p_ matrix with column _j_ containing the _N_^2 pair-
wise dissimilarities for feature _j_. Then **∆** 1 is the vectorized version of _Di,i_ ′,
and likewise **∆** _w_ the vectorized version of _D_ ̃ _i,i_ ′. We now seek the vector _w_ ,
subject to sparsity and normalization restrictions, that recovers most of the
variability in **∆**. This requirement leads to the penalized matrix decomposi-
tion problem (Witten et al. 2009) (see Section 7.6):

```
maximize
u ∈R N^2 , w ∈R p
```
###### {

```
u T ∆ w
```
###### }

```
subject to‖ u ‖ 2 ≤1,‖ w ‖ 2 ≤1,
```
```
‖ w ‖ 1 ≤ s , and w 0.
```
###### (8.43)

Notice that _wj_ is a weight on the dissimilarity matrix for feature _j_. Given the
optimal solution _w_ ̂, we rearrange the elements of **∆** _w_ into a _N_ × _N_ matrix,
and perform hierarchical clustering on this reweighted dissimilarity matrix.
The result is a sparse hierarchical clustering of the data. In Figure 8.9, we see
that sparse clustering isolates the informative features (bottom panel) and


###### SPARSE CLUSTERING 229

```
58
```
```
62
```
```
66
```
```
70
```
```
Standard clustering
```
```
0.000
```
```
0.010
```
```
0.020
```
```
Sparse clustering
```
```
0 500 1000 1500 2000
```
```
0.00
```
```
0.04
```
```
0.08
```
```
0.12
```
```
Feature
```
```
Feature weight
```
```
Estimated feature weights
```
**Figure 8.9** _Standard and sparse clustering applied to a simulated example. The
data were generated so that the average levels of the first 200 features varied over
six predefined classes, while the remaining 1800 features were noise features with the
same distribution over the classes. The top two panels show the result of standard
hierarchical clustering and sparse clustering, respectively. We used complete linkage
in each case. The class of each sample is indicated by the color of each leaf, and was
not used by the clustering procedures. The bottom panel shows the estimated weight
given to each feature by the sparse clustering procedure._


###### 230 SPARSE MULTIVARIATE METHODS

uses this information to correctly cluster the observations into the predefined
groups (middle panel).

#### 8.5.3 Sparse K -Means Clustering

Another commonly used method of clustering is called “ _K_ -means.” Here we
predefine the number of groups _K_ and then try to partition the observations
into _K_ homogeneous groups. Each group is summarized by a centroid, with
each observation assigned to the group with the closest centroid.
In detail, the _K_ -means algorithm maintains a partitionC={ _C_ 1 _,...,CK_ }
of the index set{ 1 _,_ 2 _,...,N_ }, where subset _Ck_ corresponds to those observa-
tions currently assigned to class _k_. It chooses these partitions by minimizing
the within cluster sum of squares:

###### W (C) =

###### ∑ K

```
k =1
```
###### ∑

```
i ∈ Ck
```
```
‖ xi − x ̄ k ‖^22. (8.44)
```
Here _xi_ is the _ith_ observation and ̄ _xk_ is a _p_ -vector equal to the average of all
observations in cluster _k_. The collection{ _x_ ̄ _k_ } _K_ 1 is referred to as the _codebook_
in the compression literature. The _encoderτ_ ( _i_ ) assigns each observation _xi_ to
the cluster _k_ whose centroid is closest to it. Hence _Ck_ ={ _i_ : _τ_ ( _i_ ) = _k_ }. The
standard algorithm for _K_ -means clustering alternates over optimizing forC
and{ _x_ ̄ 1 _,...,_ ̄ _xK_ }, and is guaranteed to find a local minimum of _W_ (C). Since

```
∑
```
```
i,i ′∈ Ck
```
```
‖ xi − xi ′‖^22 = 2 Nk
```
###### ∑

```
i ∈ Ck
```
```
‖ xi − x ̄ k ‖^22 , (8.45)
```
with _Nk_ =| _Ck_ |, one can alternatively derive K-means clustering using a
squared Euclidean dissimilarity matrix _Di,i_ ′. For general dissimilarity ma-
trices, _K-medoids_ clustering is a natural generalization (Hastie et al. 2009, for
example).
It might seem reasonable to define as a criterion for sparse _K_ -means clus-
tering the minimum of the weighted within-cluster sum of squares:

```
minimize
C , w ∈R p
```
###### 

###### 

###### 

```
∑ p
```
```
j =1
```
```
wj
```
###### (∑ K

```
k =1
```
###### 1

```
Nk
```
###### ∑

```
i,i ′∈ Ck
```
```
di,i ′ ,j
```
###### )

###### 

###### 

###### 

###### .

We still need to add constraints on _w_ , to make the problem meaningful. Adding
the constraints‖ _w_ ‖ 2 ≤1,‖ _w_ ‖ 1 ≤ _s_ as well as the nonnegativity constraint
_w_ 0 makes the problem convex in _w_ , but leads to the pathological solution
_w_ ̂= 0. On the other hand, the triplet of constraints‖ _w_ ‖ 2 ≥ 1 _,_ ‖ _w_ ‖ 1 ≥ _s,w_  0
would lead to a potentially useful solution, but make the problem nonconvex
in _w_.
Witten and Tibshirani (2010) proposed a modified criterion that focuses


###### SPARSE CLUSTERING 231

instead on the between-cluster sum of squares:

```
maximize
C , w ∈R p
```
###### 

###### 

###### 

```
∑ p
```
```
j =1
```
```
wj
```
###### 

###### ^1

###### N

###### ∑ N

```
i =1
```
###### ∑ N

```
i ′=1
```
```
di,i ′ ,j −
```
###### ∑ K

```
k =1
```
###### 1

```
Nk
```
###### ∑

```
i,i ′∈ Ck
```
```
di,i ′ ,j
```
###### 

###### 

###### 

###### 

###### 

```
subject to‖ w ‖ 2 ≤ 1 , ‖ w ‖ 1 ≤ s,w  0.
```
###### (8.46)

When _wj_ = 1 for all _j_ , we can see from condition (8.45) that the second
term is equal to 2 _W_ (C), and hence this approach is equivalent to _K_ -means.
This problem is now convex in _w_ and generally has an interesting solution. It
can be solved by a simple alternating algorithm. WithC= ( _C_ 1 _,...,CK_ ) fixed,
the minimization over _w_ is a convex problem, with solutions given by soft-
thresholding. With _w_ fixed, optimization with respect toCleads to a weighted
_K_ -means clustering algorithm. Details are given in Exercise 8.11.

#### 8.5.4 Convex Clustering

The method of _K_ -means clustering and its sparse generalization lead to prob-
lems that are biconvex but not jointly convex, and hence it is difficult to
guarantee that a global solution has been attained. Here we present a dif-
ferent formulation of clustering that yields a convex program, and represents
an interesting alternative to _K_ -means and hierarchical clustering. Unlike the
methods of the previous section which use sparsity to do feature selection, this
method uses a form of sparsity to determine the number and memberships of
the clusters.
In this approach, each of the _N_ observations _xi_ ∈R _p_ is assigned a proto-
type _ui_ ∈R _p_. We then minimize the objective function

```
J ( u 1 ,u 2 ,...,uN ) =
```
###### 1

###### 2

###### ∑ N

```
i =1
```
```
‖ xi − ui ‖^2 + λ
```
###### ∑

```
i<i ′
```
```
wii ′‖ ui − ui ′‖ q (8.47)
```
for some fixed _λ_ ≥0, and some _q_ -norm (typically _q_ = 1 or _q_ = 2). This
criterion seeks prototypes that are close to the data points, but not too far
from one another. The weights _wii_ ′can be equal to 1, or can be a function
of the distance between observations _i_ and _i_ ′. We note that this problem is
convex for _q_ ≥1. Consider for example the natural choice _q_ = 2 (group lasso).
Then the penalty term shrinks prototype vectors toward each other, and the
distance between many pairs will be equal to zero for a sufficiently large value
of _λ_.
Each distinct prototype _u_ ̂ _i_ in the solution represents a cluster; however,
as shown in the example of Figure 8.10, we should not think of it as a typical
prototype or centroid of that cluster. In this example, there are two classes
each containing 50 spherical Gaussian data points, with their means separated
by three units in both directions. Here we used _q_ = 2 and weight function
_wii_ ′ = exp(−‖ _xi_ − _xi_ ′‖^2 ). The colors in the right panel coincide with the


###### 232 SPARSE MULTIVARIATE METHODS

```
0 2 4
```
```
−1
```
```
0
```
```
1
```
```
2
```
```
3
```
```
4
```
```
0 2 4
```
```
−1
```
```
0
```
```
1
```
```
2
```
```
3
```
```
4
```
```
X 1 X 1
```
```
X^2 X^2
```
```
λ= 3. 27 λ= 12. 65
```
**Figure 8.10** _Convex clustering applied to data generated from two spherical Gaus-
sian populations separated by three units in each direction. We show two solutions
from a path of 50 values ofλ; the solution on the right was the smallest value ofλ
that yielded two clusters, and in this case identified the true clusters. Pointsxiare
associated with prototypes_ ̂ _μiof the same color. The estimated prototypes need not
be close to the centroids of their clusters._

true clusters; further details are given in the caption. The convexity of the
objective function as well as its ability to choose the number of clusters and
the informative features, makes this approach attractive.
The next example is taken from Chi and Lange (2014), on the problem of
clustering mammals based on their dentition. Eight different kinds of teeth
were counted for each of 27 mammals: the number of top incisors, bottom
incisors, top canines, bottom canines, top premolars, bottom premolars, top
molars, and bottom molars. Figure 8.11 shows the resulting clustering path
over _λ_ using kernel-based weights _wii_ ′. For visualization, the prototypes have
been projected onto the first two principal components. The continuous path
of solutions provides an appealing summary of the similarity among the mam-
mals. Both these examples were produced using thecvxclusterpackage in
R (Chi and Lange 2014). The path of solutions creates a tree, which in this
example is rather similar to that produced by hierarchical clustering with
average linkage.

### Bibliographic Notes

Jolliffe et al. (2003) proposed the originalSCoTLASScriterion (8.7) for sparse
PCA; the reformulation and alternating updates (8.9) were proposed by Wit-
ten et al. (2009). d’Aspremont et al. (2007) proposed the semidefinite pro-
gramming relaxation (8.12) of the nonconvexSCoTLASScriterion; Amini and


###### BIBLIOGRAPHIC NOTES 233

```
oppossum
```
```
htailmole
```
```
commonmole
```
```
brownbat
shairbat
pigmybat
housebat
redbat
```
```
armadillo
```
```
pika
ssrabbit
```
```
beavergraysquirrel
```
```
packrat
```
```
coyote
```
```
wolf
```
```
civetcat
raccoonriverotterweasel
```
```
seaotter
```
```
jaguar
```
```
furseal
```
```
walrus
ephantseal
```
```
elkdeer
```
```
●
```
```
●
```
```
●
```
```
●
● ●
●
●
```
```
●
```
```
●
```
```
●
```
```
●
●
●
```
```
●
```
```
●
```
```
●
● ●
```
```
●
```
```
●
```
```
●
```
```
●
```
```
●
●
```
```
●●
```
```
−2
```
```
−1
```
```
0
```
```
1
```
```
2
```
```
−2 0 2 4
Principal Component 1
```
```
Principal Component 2
```
**Figure 8.11** _Mammal data: path of convex clustering solutions using the crite-
rion (8.47), and a grid of values ofλ. Asλincreases, the prototypes unite to form
a smal ler set._

Wainwright (2009) develop some theory for the variable selection properties of
this relaxation for sparse PCA. Zou et al. (2006) proposed the reconstruction-
based criterion (8.13). Johnstone (2001) studied the high-dimensional asymp-
totics of ordinary PCA, and proposed the spiked covariance model (8.22).
Johnstone and Lu (2009) and Birnbaum et al. (2013) study various types
of two-stage procedures for estimating sparse principal components. Birn-
baum et al. (2013) and Vu and Lei (2012) derive minimax lower bounds on
_`_ 2 -estimation error for sparse PCA when the eigenvectors belong _`q_ -balls.
Ma (2010, 2013) and Yuan and Zhang (2013) have studied iterative algorithms
for sparse PCA based on combining the power method with soft thresholding.
Berthet and Rigollet (2013) study the detection problem for high-dimensional
sparse PCA, and establish a computational hardness result related to the
random _k_ -clique problem.
Olshausen and Field (1996) proposed the version of sparse coding discussed
in Section 8.2.5. There is a large literature on deep learning; see Le et al. (2012)
and references therein for some recent approaches.
There is a variety of papers that explore sparse canonical correlation anal-
ysis, for example Parkhomenko, Tritchler and Beyene (2009), Waaijenborg,


###### 234 SPARSE MULTIVARIATE METHODS

Vers ́elewel de Witt Hamer and Zwinderman (2008), Hardoon and Shawe-
Taylor (2011), Parkhomenko et al. (2009), Witten et al. (2009), Witten and
Tibshirani (2009), and Lykou and Whittaker (2010). Dudoit, Fridlyand and
Speed (2002) provide comparison of different classification methods for mi-
croarray data, including diagonal LDA. Nearest shrunken centroids was pro-
posed by Tibshirani, Hastie, Narasimhan and Chu (2001) and Tibshirani
et al. (2003). Sparse discriminant analysis from Fisher’s framework and op-
timal scoring were explored in Trendafilov and Jolliffe (2007), Leng (2008),
Clemmensen et al. (2011), and Witten and Tibshirani (2011). Minorization
algorithms are discussed in Lange, Hunter and Yang (2000), Lange (2004),
and Hunter and Lange (2004). Sparse hierarchical and _k_ -means clustering are
presented in Witten and Tibshirani (2010), while convex clustering was pro-
posed by Pelckmans, De Moor and Suykens (2005) and Hocking, Vert, Bach
and Joulin (2011).

### Exercises

Ex. 8.1 In this exercise, we consider some elementary properties of principal
component analysis.

```
(a) Show that the first principal component is a maximal eigenvector of the
sample covariance matrix N^1 X T X.
(b) Suppose that the rows of X , denoted{ x 1 ,...,xN }are drawn i.i.d. ac-
cording to a zero-mean distributionP, and suppose that Σ = Cov( x ) has
a unique maximal eigenvalue λ. Explain why, for large sample size N , one
might expect̂ v to approach
```
```
v ∗= arg max
‖ v ‖ 2 =1
```
```
Var( vTx ) , where x ∼P. (8.48)
```
Ex. 8.2 Consider the principal component criterion (8.1), and the definition
of the vectors _v_ 1 , _v_ 2 , and so on.

```
(a) Show that the principal components z j are mutually uncorrelated.
(b) Show that instead of using orthogonality of the vj to define the sequence
of principal component directions, we can instead use the uncorrelatedness
of the z j.
```
Ex. 8.3 Consider the reconstruction error objective (8.4) with _μ_ = 0.

```
(a) For fixed V r , show that the optimal choice of the reconstruction weights
is λi = V Trxi for each i = 1 ,...,N.
(b) Use part (a) to show that the optimal V r maximizes the criterion
V Tr X T XV , and conclude that it can be obtained via the truncated SVD
(as described in the main text).
```

###### EXERCISES 235

Ex. 8.4 Consider criterion (8.8) and Algorithm 8.1 for finding a solution. By
partially maximizing w.r.t. **u** with‖ **u** ‖ 2 ≤1, show that any stationary value
of _v_ is also a stationary value for theSCoTLASScriterion (8.7).

Ex. 8.5 Consider the problem

```
minimize
u ,v,d
```
```
‖ X − d u vT ‖ F
```
```
subject to‖ u ‖ 1 ≤ c 1 , ‖ v ‖ 1 ≤ c 2 , ‖ u ‖ 2 = 1 , ‖ v ‖ 2 = 1 , d ≥ 0 ,
```
###### (8.49)

where **X** is _N_ × _p_ , and assume 1≤ _c_ 1 ≤

###### √

```
N , 1≤ c 2 ≤
```
###### √

_p_. Show that a
solution **u** 1 , _v_ 1 , _d_ 1 is also the solution to the following problem:

```
maximize
u ,v
u T X v
```
```
subject to‖ u ‖ 1 ≤ c 1 , ‖ v ‖ 1 ≤ c 2 , ‖ u ‖ 2 = 1 , ‖ v ‖ 2 = 1 ,
```
###### (8.50)

and _d_ 1 = **u** _T_ 1 **X** _v_ 1.

Ex. 8.6 In this exercise, we explore some properties of theSCoTLASScrite-
rion (8.7).

```
(a) Use the Cauchy–Schwarz inequality to show that a fixed point of Algo-
rithm 8.1 is a local minimum of theSCoTLASScriterion (8.7).
(b) Notice that the Cauchy–Schwarz inequality implies that
```
```
vT X T X v ≥
( v ( m )
```
```
T
X T X v )^2
v ( m )
T
X T X v ( m )
```
###### , (8.51)

```
and equality holds when v = v ( m ). So ( v
```
```
( m ) T X T X v ) 2
v ( m ) T X T X v ( m )minorizes v
```
```
T X T X v at
```
```
v ( m ). Hence show that the MM algorithm (Section 5.8) using this minoriza-
tion function yields Algorithm 8.1.
```
Ex. 8.7 Show that the solution to the problem (8.15), with the additional
constraint‖ _θ_ ‖ 1 ≤ _t_ , is also a solution to theSCoTLASSproblem (8.7).

Ex. 8.8 Consider the problem

```
minimize
θ :‖ θ ‖ 2 =1
```
###### ∑ N

```
i =1
```
```
‖ xi − θzi ‖^22 , (8.52)
```
where the vectors{ _xi_ } _Ni_ =1 and _θ_ are all _p_ -dimensional, and the variables
{ _zi_ } _Ni_ =1are scalars. Show that the optimal solution is unique and given by
̂ _θ_ = **X** _T_ **z**
‖ **X** _T_ **z** ‖ 2.

Ex. 8.9 Show that the vectors **u** _k_ in (8.17) solve the multifactor sparse PCA
problem (8.16).


###### 236 SPARSE MULTIVARIATE METHODS

Ex. 8.10 Consider the reconstruction criterion (8.13) for sparse principal com-
ponents.

```
(a) With V fixed, derive the solution for Θ.
(b) Show that when the λ 1 k = 0 for all k the iterations are stationary w.r.t.
any set of k principal components of X ; in particular, if the algorithm is
started at the largest k principal components, it will not move from them.
(c) Show under the conditions in (b) that the criterion is maximized by
Θ = V and both are equal to V k , the matrix consisting of the largest k
principal components of X.
(d) For a solution V k in (c), show that V k R is also a solution, for any k × k
orthogonal matrix R.
```
Consequently, this version of sparse principal components is similar to the
Varimax method (Kaiser 1958) of rotating factors to achieve sparsity.

Ex. 8.11 _SparseK-means clustering algorithm_. Consider the objective func-
tion (8.46).

```
(a) Show that with w fixed, optimization with respect toC= ( C 1 ,...,CK )
yields the problem
```
```
minimize
C 1 ,...,CK
```
###### 

###### 

###### 

```
∑ p
```
```
j =1
```
```
wj (
```
###### ∑ K

```
k =1
```
###### 1

```
Nk
```
###### ∑

```
i,i ′∈ Ck
```
```
( xij − xi ′ j )^2 )
```
###### 

###### 

###### 

###### . (8.53)

```
This can be thought of as K -means clustering with weighted data. Give a
sketch of its solution.
(b) With C 1 ,...,CK fixed, we optimize with respect to w yielding
```
```
maximize
w ∈R p
```
###### 

###### 

###### 

```
∑ p
```
```
j =1
```
```
wj
```
###### 

###### ^1

###### N

###### ∑ N

```
i =1
```
###### ∑ N

```
i ′=1
```
```
( xij − xi ′ j )^2 −
```
###### ∑ K

```
k =1
```
###### 1

```
Nk
```
###### ∑

```
i,i ′∈ CK
```
```
( xij − xi ′ j )^2
```
###### 

###### 

###### 

###### 

###### 

```
such that‖ w ‖ 2 = 1,‖ w ‖ 1 ≤ s , and wj ≥0. (8.54)
```
```
This is a simple convex problem of the form
```
```
maximize
w ∈R p
```
###### {

```
wTa
```
###### }

```
such that‖ w ‖ 2 = 1,‖ w ‖ 1 ≤ s , and w 0. (8.55)
```
```
Give the details of its solution.
```
Ex. 8.12 Consider the optimization problem:

```
minimize
A , B ∈R p × m
```
###### { N

###### ∑

```
i =1
```
```
‖ xi − AB Txi ‖^2
```
###### }

###### , (8.56)

where _xi_ ∈R _p, i_ = 1 _,...,N_ are the rows of **X** , and _m <_ min( _N,p_ ). Show
that the solution satisfies **A** ˆ **B** ˆ _T_ = **V** _m_ **V** _Tm_ , where **V** _m_ is the matrix of the first
_m_ right-singular vectors of **X**.


###### EXERCISES 237

Ex. 8.13 Consider the sparse encoder specified in the optimization prob-
lem (8.21). Develop a simple alternating algorithm for solving this problem.
Give some details for each step.

Ex. 8.14 _Canonical correlation via alternating regression:_ Consider two ran-
dom vectors _X_ ∈R _m_^1 and _Y_ ∈R _m_^2 with covariance matrices **Σ** 11 and **Σ** 22 ,

respectively, and cross-covariance **Σ** 12. Define **L** = **Σ**
−^12
11 **Σ**^12 **Σ**

−^12
22. Denote by
_γi_ and _τi_ the left and right singular vectors of **L** , ordered by their singular
values _ρi_.

```
(a) Show that the vectors β 1 and θ 1 maximizing Corr( Xβ,Y θ ) are given by
```
```
β 1 = Σ −
```
(^12)
11 _γ_^1
_θ_ 1 = **Σ**
−^12
22 _τ_^1 _,_

###### (8.57)

```
and the maximal correlation is ρ 1.
(b) Now consider the analogous problem based on data matrices X and Y of
dimension N × p and N × q , respectively, each centered to have zero-mean
columns. In this setting, the canonical correlation estimates are obtained
simply by replacing Σ 11 , Σ 22 , and Σ 12 by their sample estimates.
Based on this formulation, show that the optimal sample canonical vectors
are given by β 1 = ( X T X )−
```
(^12)
_γ_ 1 and _θ_ 1 = ( **Y** _T_ **Y** )−
(^12)
_τ_ 1 , where _γ_ 1 and _τ_ 1 are
the leading left and right singular vectors of the matrix
( **X** _T_ **X** )−
(^12)
**X** _T_ **Y** ( **Y** _T_ **Y** )−
(^12)
_._
(c) Denote the first canonical variates by **z** 1 = **X** _β_ 1 and **s** 1 = **Y** _θ_ 1 , both
_N_ -vectors. Let **H** _X_ = **X** ( **X** _T_ **X** )−^1 **X** _T_ be the projection onto the column
space of **X** ; likewise **H** _Y_. Show that
**H** _X_ **s** 1 = _ρ_ 1 **z** 1 _,_ and
**H** _Y_ **z** 1 = _ρ_ 1 **s** 1_._
Consequently, alternately regressing onto **X** and **Y** until convergence yields
a solution of the maximal canonical correlation problem.
Ex. 8.15 In Exercise 8.14, we found that the leading pair of canonical variates
can be found by alternating least-squares regressions. Having solved for the
leading canonical variates, how could you modify this procedure to produce
the second pair of canonical variates ( **z** 2 _,_ **s** 2 )? Propose a modification and
prove that it works. Show how to extend this approach to find all subsequent
pairs.
Ex. 8.16 _CCA via optimal scoring:_ Given data matrices **X** and **Y** as in Exer-
cise 8.14, both with mean-centered columns and both with full column rank,
consider the problem
minimize
_β,θ_
‖ **Y** _θ_ − **X** _β_ ‖^22 subject to

###### 1

###### N

```
‖ Y θ ‖ 2 = 1. (8.58)
```

###### 238 SPARSE MULTIVARIATE METHODS

```
(a) Characterize the solution to this problem, by first solving for β with θ
fixed, and then solving for θ.
(b) Show that the optimal solution is given bŷ θ = θ 1 and β ̂= ρ 1 β 1 , where
β 1 and θ 1 are the first pair of canonical vectors, and ρ 1 the largest canonical
correlation.
(c) Show in addition that‖ Y θ 1 − X β 1 ‖^22 = 1− ρ^21. This equivalence shows
that solving the optimal scoring problem is equivalent to solving the CCA
problem.
(d) Describe how to find subsequent canonical solutions, uncorrelated with
the earlier solutions. Show how this can be achieved by transforming the
data matrices X and Y.
(e) Does the problem change if we include a constraint‖ X β ‖ 2 = 1?
```
Ex. 8.17 _Low-rank CCA:_ Suppose that at least one of the matrices in Exer-
cise 8.14 or 8.16 do not have full column rank. (For instance, this degeneracy
will occur whenever _N <_ min( _p,q_ ).)

```
(a) Show that ρ 1 = 1, and the CCA problem has multiple optima.
(b) Suppose that Y is full column rank, but X is not. You add a ridge con-
straint to (8.58), and solve
```
```
minimize
β,θ
‖ Y θ − X β ‖^22 + λ ‖ β ‖^22 subject to‖ Y θ ‖ 2 = 1. (8.59)
```
```
Is this problem degenerate? Characterize the solution.
(c) Show that the solution in (b) is equivalent to applying CCA to X and
Y , except that the optimal solution β ̂satisfies the normalization condition
1
N
β ̂ T ( X T X + λ I ) β ̂= 1, corresponding to normalization by a type of ridged
covariance estimate.
```
Ex. 8.18 For data matrices **X** and **Y** with centered columns, consider the
optimization problem

```
maximize
β,θ
```
###### {

```
Cov(̂ X β, Y θ )− λ 1 ‖ β ‖^22 − λ 2 ‖ β ‖^22 − λ ′ 1 ‖ θ ‖ 1 − λ ′ 2 ‖ θ ‖ 2
```
###### }

###### . (8.60)

Using the results of Exercise 8.14, outline how to solve this problem using
alternating elastic-net fitting operations in place of the least-squares regres-
sions.

Ex. 8.19 _Sparse canonical correlation analysis:_ Consider the optimal scoring
problem (8.58) from Exercise 8.16, but augmented with _`_ 1 constraints:

```
minimize
β,θ
```
###### {

```
‖ Y θ − X β ‖^22 + λ 1 ‖ β ‖ 1 + λ 2 ‖ θ ‖ 1
```
###### }

```
subject to‖ X β ‖ 2 = 1. (8.61)
```
Using the results of Exercises 8.14, 8.16, and 8.17, outline how to solve this
problem using alternating elastic-net regressions in place of the least-squares
regressions.


###### EXERCISES 239

Ex. 8.20 Consider the multivariate Gaussian setup in Section 8.4.1, but as-
sume a different covariance matrix **Σ** _k_ in each class.

```
(a) Show that the discriminant functions δk are quadratic functions of x.
What can you say about the decision boundaries?
(b) Suppose that the covariance matrices Σ k are assumed to be diagonal,
meaning that the features X are conditionally independent in each class.
Describe the decision boundary between class k and ` for this naive Bayes
classifier.
```
Ex. 8.21 This exercise relates to the nearest shrunken centroids problem of
Section 8.4.2. Consider the _`_ 1 -regularized criterion

minimize
̄ _μ_ ∈R _p
αk_ ∈R _p,k_ = 1 _,...,p_

###### 

###### 

###### 

###### 1

###### 2

###### ∑ K

```
k =1
```
###### ∑

```
i ∈ Ck
```
```
∑ p
```
```
j =1
```
```
( xij − μ ̄ j − αjk )^2
s^2 j
+ λ
```
###### ∑ K

```
k =1
```
```
∑ p
```
```
j =1
```
###### √

```
Nk
sj
| αjk |
```
###### 

###### 

###### 

###### .

###### (8.62)

Here we have decomposed each class mean into an overall mean plus a class-
wise contrast from the overall mean, and we have weighted the penalties by
the class sizes and within-class standard deviations for each feature.

```
(a) Show that replacing ̄ μj by ̄ xj , corresponding to the overall mean for
feature j , yields the shrinkage scheme (8.35a), apart from a term 1 /N in
mk.
(b) Show that part (a) does not yield a solution to the criterion (8.33) unless
we restrict ̄ μj as above.
(c) A more natural criterion would add the constraints
```
###### ∑ K

```
k =1 αjk = 0 for
all j = 1 ,...p. Discuss the solution to this problem, and whether it can
coincide with the solution from part (a).
```
Ex. 8.22 Show that the penalized Fisher’s discriminant problem (8.40) and
the penalized optimal scoring problem (8.42) are equivalent in the sense that
any stationary point for one problem is also a stationary point for the other
problem. (Clemmensen et al. 2011, Witten and Tibshirani 2011).



```
Chapter 9
```
## Graphs and Model Selection

### 9.1 Introduction

Probabilistic graphical models provide a useful framework for building par-
simonious models for high-dimensional data. They are based on an interplay
between probability theory and graph theory, in which the properties of an
underlying graph specify the conditional independence properties of a set of
random variables. In typical applications, the structure of this graph is not
known, and it is of interest to estimate it based on samples, a problem known
as graphical model selection. In this chapter, we discuss a variety of methods
based on _`_ 1 -regularization designed for this purpose.

### 9.2 Basics of Graphical Models

We begin by providing a brief introduction to the basics of graphical models;
for more details, we refer the reader to the references cited in the bibliographic
notes at the end of the chapter. Any collection _X_ = ( _X_ 1 _,X_ 2 _,...,Xp_ ) of
random variables can be associated with the vertex set _V_ ={ 1 _,_ 2 _,...,p_ }
of some underlying graph. The essential idea of a graphical model is to use
the structure of the underlying graph—either its clique structure or its cut set
structure—in order to constrain the distribution of the random vector _X_. We
now make these notions more precise.

#### 9.2.1 Factorization and Markov Properties

An ordinary graph _G_ consists of a vertex set _V_ ={ 1 _,_ 2 _,...,p_ }, and an edge
set _E_ ⊂ _V_ × _V_. In this chapter, we focus exclusively on undirected graphical
models, meaning that there is no distinction between an edge ( _s,t_ )∈ _E_ ,
and the edge ( _t,s_ ). In contrast, _directed acyclic graphs_ (DAGs) are the most
popular form of graph in which the edges have directionality. In general, such
directed graphs are more difficult to handle than undirected graphs, and we
do not cover them here. But we do note that some methods for computation
in undirected graphs can be helpful in the DAG case: see the bibliographic
notes for some references.
A _graph cliqueC_ ⊆ _V_ is a fully-connected subset of the vertex set, meaning

```
241
```

###### 242 GRAPHS AND MODEL SELECTION

that ( _s,t_ )∈ _E_ for all _s,t_ ∈ _C_. A clique is said to be maximal if it is not strictly
contained within any other clique. For instance, any single vertex{ _s_ }is itself
a clique, but it is not maximal unless _s_ is an isolated vertex (meaning that
it participates in no edges). We useCto denote the set of all cliques in the
graph, both maximal and nonmaximal; see Figure 9.1(a) for an illustration of
graph cliques.

```
3
```
```
4
```
```
5
```
```
1
```
```
2
```
```
3 4
```
```
5
```
```
6
```
```
7
A BC
```
```
D
```
```
A
```
```
B
```
```
S
```
```
(a) (b)
```
**Figure 9.1** _(a) Il lustration of cliques in a graph: each of the four subsets indicated
are cliques. SetsAandBare_ 3 _-cliques, whereasCandDare_ 2 _-cliques, more com-
monly known as edges. Al l of these cliques are maximal. (b) Il lustration of a vertex
cut setS: with the vertices inSremoved, the graph is broken into two subcomponents
AandB._

##### 9.2.1.1 Factorization Property

We now describe how the clique structure of a graph can be used to constrain
the probability distribution of the random vector ( _X_ 1 _,...,Xp_ ) indexed by
the graph vertices. For a given clique _C_ ∈C, a _compatibility functionψC_ is
a real-valued function of the subvector _xC_ : = ( _xs, s_ ∈ _C_ ), taking positive
real values. Given a collection of such compatibility functions, we say that the
probability distributionP _factorizes overG_ if it has the decomposition

```
P( x 1 ,...,xp ) =
```
###### 1

###### Z

###### ∏

```
C ∈C
```
```
ψC ( xC ). (9.1)
```
Here the quantity _Z_ , known as the partition function, is given by the sum
_Z_ =

###### ∑

```
x ∈X p
```
###### ∏

_C_ ∈C _ψC_ ( _xC_ ). Thus, it ensures thatPis properly normalized,
and so defines a valid probability distribution. As a particular example, any
probability distribution that factorizes over the graph in Figure 9.1(a) must
have the form

```
P( x 1 ,...,x 7 ) =
```
###### 1

###### Z

```
ψ 123 ( x 1 ,x 2 ,x 3 ) ψ 345 ( x 3 ,x 4 ,x 5 ) ψ 46 ( x 4 ,x 6 ) ψ 57 ( x 5 ,x 7 ) ,
(9.2)
```
for some choice of the compatibility functions{ _ψ_ 123 _, ψ_ 345 _, ψ_ 46 _, ψ_ 57 }.


###### BASICS OF GRAPHICAL MODELS 243

A factorization of the form (9.1) is practically significant, since it can lead
to substantial savings, in both storage and computation, if the clique sizes
are not too large. For instance, if each variable _Xs_ is binary, then a generic
probability distribution over the vector _X_ ∈ {− 1 _,_ +1} _p_ requires specifying
2 _p_ −1 nonnegative numbers, and so grows exponentially in the graph size.
On the other hand, for a clique-based factorization, the number of degrees of
freedom is at most|C| 2 _c_ , where _c_ is the maximum cardinality of any clique.
Thus, for the clique-based factorization, the complexity grows exponentially
in the maximum clique size _c_ , but only linearly in the number of cliques
|C|. Luckily, many practical models of interest can be specified in terms of
cliques with bounded size, in which case the clique-based representation yields
substantial gains.

##### 9.2.1.2 Markov Property

We now turn to an alternative way in which the graph structure can be used
to constrain the distribution of _X_ , based on its cut sets (see Figure 9.1(b)).
In particular, consider a cut set _S_ that separates the graph into disconnected
components _A_ and _B_ , and let us introduce the symbol⊥⊥to denote the relation
_“is conditionally independent of.”_ With this notation, we say that the random
vector _X_ is _Markov with respect toG_ if

```
XA ⊥⊥ XB | XS for all cut sets S ⊂ V. (9.3)
```
The graph in Figure 9.1(b) is an example showing this conditional indepen-
dence relation.
Markov chains provide a particular illustration of this property; naturally,
they are based on a chain-structured graph, with edge set

```
E ={(1 , 2) , (2 , 3) ,..., ( p − 1 ,p )}.
```
In this graph, any single vertex _s_ ∈{ 2 _,_ 3 _,...,p_ − 1 }forms a cut set, separating
the graph into the past _P_ ={ 1 _,...,s_ − 1 }and the future _F_ ={ _s_ + 1 _,...,p_ }.
For these cut sets, the Markov property (9.3) translates into the fact that, for a
Markov chain, the future _XF_ is conditionally independent of the past _XP_ given
the present _Xs_. Of course, graphs with more structure have correspondingly
more complex cut sets, and thus more interesting conditional-independence
properties.

_9.2.1.3 Equivalence of Factorization and Markov Properties_

A remarkable fact, known as the Hammersley–Clifford theorem, is that for
any strictly positive distribution (i.e., for whichP( _x_ ) _>_ 0 for all _x_ ∈X _p_ ), the
two characterizations are equivalent: namely, the distribution of _X_ factorizes
according to the graph _G_ (as in Equation (9.1)) if and only if the random
vector _X_ is Markov with respect to the graph (as in Equation (9.3)). See the
bibliographic section for further discussion of this celebrated theorem.


###### 244 GRAPHS AND MODEL SELECTION

#### 9.2.2 Some Examples

We present some examples to provide a concrete illustration of these proper-
ties.

##### 9.2.2.1 Discrete Graphical Models

We begin by discussing the case of a discrete graphical model, in which random
variables _Xs_ at each vertex _s_ ∈ _V_ take values in a discrete spaceX _s_. The
simplest example is the binary case, say withX _s_ ={− 1 _,_ +1}. Given a graph
_G_ = ( _V,E_ ), one might consider the family of probability distributions

```
P θ ( x 1 ,...,xp ) = exp
```
###### {∑

```
s ∈ V
```
```
θsxs +
```
###### ∑

```
( s,t )∈ E
```
```
θstxsxt − A ( θ )
```
###### }

###### , (9.4)

parametrized by the vector _θ_ ∈R| _V_ |+| _E_ |. For later convenience, here we have
introduced the notation _A_ ( _θ_ ) = log _Z_ ( _θ_ ), reflecting the dependence of the
normalization constant on the parameter vector _θ_. This family of distributions
is known as the _Ising model_ , since it was originally used by Ising (1925) to
model the behavior of magnetic materials; see the bibliographic section for
further discussion. Figure 9.2 shows simulations from three different Ising
models.

```
(a) (b) (c)
```
**Figure 9.2** _Samples generated from Ising models based on a graph withp_ = 1024
_nodes. For il lustrative purposes, the resulting vectorx_ ∈ {+1 _,_ 1 }^1024 _is plotted as
a_ 32 × 32 _binary image. Panels (a) through (c) correspond to three very different
distributions. The samples were drawn by running the Gibbs sampler._

The Ising model has been used to model social networks, for exam-
ple the voting behavior of politicians. In this context, the random vector
( _X_ 1 _,X_ 2 _,...,Xp_ ) represents the set of votes cast by a set of _p_ politicians on
a particular bill. We assume that politician _s_ provides either a “yes” vote
( _Xs_ = +1) or a “no” vote ( _Xs_ =−1) on the bill. With the voting results
for _N_ bills, we can make inferences on the joint distribution of _X_. In the fac-
torization (9.4), a parameter _θs>_ 0 indicates that politician _s_ is more likely
(assuming fixed values of other politicians’ votes) to vote “yes” on any given
bill, with the opposite interpretation holding in the case _θs<_ 0. On the other


###### BASICS OF GRAPHICAL MODELS 245

hand, for any given pair _s,t_ that are joined by an edge, a weight _θst>_ 0
means that with the behavior of all politicians held fixed, politicians _s_ and
_t_ are more likely to share the same vote (i.e., both yes or both no) than to
disagree; again, the opposite interpretation applies to the setting _θst<_ 0. See
Figure 9.7 on page 257 for an application to voting-record data.
Many extensions of the Ising model are possible. First, the factoriza-
tion (9.4) is limited to cliques of size at most two (i.e., edges). By allowing
terms over cliques of size up to size three, one obtains the family of models

```
P θ ( x ) = exp
```
###### {∑

```
s ∈ V
```
```
θsxs +
```
###### ∑

```
( s,t )∈ E
```
```
θstxsxt +
```
###### ∑

```
( s,t,u )∈ E 3
```
```
θstuxsxtxu − A ( θ )
```
###### }

###### (9.5)

where _E_ 3 is some subset of vertex triples. This factorization can be extended
up to subsets of higher order, and in the limit (where we allow an interaction
term among all _p_ variables simultaneously), it is possible to specify the dis-
tribution of any binary vector. In practice, of most interest are models based
on relatively local interactions, as opposed to such a global interaction.
Another extension of the Ising model is to allow for non-binary variables,
for instance _Xs_ ∈{ 0 _,_ 1 _,_ 2 _,...,m_ − 1 }for some _m >_ 2. In this case, one might
consider the family of distributions

```
P θ ( x 1 ,...,xp ) = exp
```
###### {∑

```
s ∈ V
```
```
m ∑− 1
```
```
j =1
```
```
θs ; j I[ xs = j ] +
```
###### ∑

```
( s,t )∈ E
```
```
θst I[ xs = xt ]− A ( θ )
```
###### }

###### ,

###### (9.6)

where the indicator functionI[ _xs_ = _j_ ] takes the value 1 when _xs_ = _j_ , and
0 otherwise. When the weight _θst >_ 0, the edge-based indicator function
I[ _xs_ = _xt_ ] acts as a smoothness prior, assigning higher weight to pairs ( _xs,xt_ )
that agree. The model (9.6) has found many uses in computer vision, for
instance in image denoising and disparity computation problems.
All the models discussed here have a parallel life in the statistics and
biostatistics literature, where they are referred to as log-linear models for
multiway tables. However, in that setting the number of variables is typically
quite small.
In Section 9.4.3 we discuss a general class of pairwise-Markov models for
mixed data—allowing for both continuous and discrete variables.

##### 9.2.2.2 Gaussian Graphical Models

Let _X_ ∼ _N_ ( _μ,_ **Σ** ) be a Gaussian distribution in _p_ dimensions, with mean
vector _μ_ ∈R _p_ and covariance matrix **Σ** :

```
P μ, Σ ( x ) =
```
###### 1

```
(2 π )
```
```
p
```
(^2) det[ **Σ** ]^12
_e_ −
(^12) ( _x_ − _μ_ ) _T_ **Σ** − (^1) ( _x_ − _μ_ )

_._ (9.7)


###### 246 GRAPHS AND MODEL SELECTION

If we view the multivariate Gaussian distribution as a particular type of ex-
ponential family, then ( _μ,_ **Σ** ) are known as the mean _parameters_ of the family.
In order to represent the multivariate Gaussian as a graphical model, it is
convenient to consider instead its parametrization in terms of the so-called
canonical parameters, say a vector _γ_ ∈R _p_ and **Θ** ∈R _p_ × _p_. Any nondegenerate
multivariate Gaussian—meaning whenever **Σ** is strictly positive definite—can
be represented in the form

```
P γ, Θ ( x ) = exp
```
```
{∑ p
```
```
s =1
```
```
γsxs −
```
###### 1

###### 2

```
∑ p
```
```
s,t =1
```
```
θstxsxt − A ( Θ )
```
###### }

###### , (9.8)

where _A_ ( **Θ** ) =−^12 log det[ **Θ** _/_ (2 _π_ )], so that

###### ∫

P _γ,_ **Θ** ( _x_ ) _dx_ = 1. Our choice of
the rescaling by− 1 _/_ 2 in the factorization (9.8) is to ensure that the matrix
**Θ** has a concrete interpretation. In particular, with this scaling, as shown in
Exercise 9.1, we have the relation **Θ** = **Σ** −^1 , so that **Θ** corresponds to the
_inverse covariance, precision or concentration matrix_.
The representation (9.8) is especially convenient, because it allows us to
discuss the factorization properties directly in terms of the sparsity pattern
of the precision matrix **Θ**. In particular, whenever _X_ factorizes according to
the graph _G_ , then based on the factorization (9.8), we must have **Θ** _st_ = 0 for

```
1
```
```
2
```
```
3
```
```
4
```
```
5
```
```
1 2 3 4 5
```
```
5
```
```
4
```
```
3
```
```
2
```
```
1
```
```
ZeropatternofΘ
```
```
(a) (b)
```
**Figure 9.3** _(a) An undirected graphGon five vertices. (b) Associated sparsity pat-
tern of the precision matrix_ **Θ**_. White squares correspond to zero entries._

any pair ( _s,t_ )∈ _/E_ , which sets up a correspondence between the zero pattern
of **Θ** and the edge structure _E_ of the underlying graph. See Figure 9.3 for an
illustration of this correspondence.

### 9.3 Graph Selection via Penalized Likelihood

We now turn to the problem of graph selection, and the use of _`_ 1 -regularized
likelihood methods for solving it. The problem itself is simply stated: suppose


###### GRAPH SELECTION VIA PENALIZED LIKELIHOOD 247

that we are given a collection **X** ={ _x_ 1 _,...,xN_ }of samples from a graphical
model, but the underlying graph structure is unknown. How to use the data
to select the correct graph with high probability? Here we discuss the use of
likelihood-based methods in conjunction with _`_ 1 -regularization for this pur-
pose. This section discusses methods based on the global likelihood function
of the graphical model. In the Gaussian case, this approach leads to tractable
methods for model selection based on a log-determinant convex program with
_`_ 1 -regularization. On the other hand, in the discrete case, this approach is
computationally tractable only for relatively small graphs, or graphs with
special structure.

#### 9.3.1 Global Likelihoods for Gaussian Models

We start with model selection for the Gaussian graphical model, a problem
that is also known as covariance selection. Since our primary interest is in
estimating the graph structure, we assume that the distribution has mean zero,
so that under the parametrization (9.8), we need only consider the symmetric
precision matrix **Θ** ∈R _p_ × _p_.
Suppose **X** represents samples from a zero-mean multivariate Gaussian
with precision matrix **Θ**. Based on some straightforward algebra (see Ex-
ercise 9.2 for details), it can be seen that (up to a constant) the rescaled
log-likelihoodL( **Θ** ; **X** ) of the multivariate Gaussian takes the form

###### L( Θ ; X ) =

###### 1

###### N

###### ∑ N

```
i =1
```
```
logP Θ ( xi )
```
```
= log det Θ −trace( SΘ ) , (9.9)
```
where **S** = _N_^1

###### ∑ N

_i_ =1 _xix
T
i_ is the empirical covariance matrix. The log-determ-
inant function is defined on the space of symmetric matrices as

```
log det( Θ ) =
```
###### {∑

```
p
j =1log( λj ( Θ )) if Θ ^0
−∞; otherwise,
```
###### (9.10)

where _λj_ ( **Θ** ) is the _jth_ eigenvalue of **Θ**. In Exercise 9.2, we explore some ad-
ditional properties of this function. The objective function (9.9) is an instance
of a log-determinant program, a well-studied class of optimization problems.
It is strictly concave, so that the maximum—when it is achieved—must be
unique, and defines the maximum likelihood estimate **Θ** ̂ML, denoted MLE for
short.
By classical theory, the maximum likelihood estimate **Θ** ̂MLconverges to
the true precision matrix as the sample size _N_ tends to infinity. Thus, at least
in principle, one could use a thresholded version of **Θ** ̂MLto specify an edge set,
and thereby perform Gaussian graphical model selection. However, for prob-
lems frequently arising in practice, the number of nodes _p_ may be comparable
to or larger than the sample size _N_ , in which case the MLE does not exist.


###### 248 GRAPHS AND MODEL SELECTION

Indeed, the empirical correlation matrix **S** must be rank-degenerate whenever
_N < p_ , which implies that the MLE fails to exist (see Exercise 9.2(c)). Hence
we must consider suitably constrained or regularized forms of the MLE. More-
over, irrespective of the sample size, we may be interested in constraining the
estimated precision matrix to be sparse, and hence easier to interpret.
If we are seeking Gaussian graphical models based on relatively sparse
graphs, then it is desirable to control the number of edges, which can be
measured by the _`_ 0 -based quantity

```
ρ 0 ( Θ ) =
```
###### ∑

```
s 6 = t
```
```
I[ θst 6 = 0] , (9.11)
```
whereI[ _θst_ 6 = 0] is a 0-1-valued indicator function. Note that by construction,
we have _ρ_ 0 ( **Θ** ) = 2| _E_ |, where| _E_ |is the number of edges in the graph uniquely
defined by **Θ**. We could then consider the optimization problem

```
Θ ̂∈arg max
Θ  0
ρ 0 ( Θ )≤ k
```
###### {

```
log det( Θ )−trace( SΘ )
```
###### }

###### . (9.12)

Unfortunately, the _`_ 0 -based constraint defines a highly nonconvex constraint

set, essentially formed as the union over all

```
(( p 2 )
k
```
###### )

possible subsets of _k_ edges.
For this reason, it is natural to consider the convex relaxation obtained by
replacing the _`_ 0 constraint with the corresponding _`_ 1 -based constraint. Doing
so leads to the following convex program

```
Θ ̂∈arg max
Θ  0
```
###### {

```
log det Θ −trace( SΘ )− λρ 1 ( Θ )
```
###### }

###### , (9.13)

where _ρ_ 1 ( **Θ** ) =

###### ∑

_s_ 6 = _t_ | _θst_ |is simply the _`_^1 -norm of the off-diagonal entries of
**Θ**. The problem (9.13) can be formulated as an instance of a log-determinant
program; it is thus a convex program, often referred to as the _graphical lasso_.
Since this is a convex program, one can use generic interior point methods
for its solution, as in Vandenberghe, Boyd and Wu (1998). However this is not
efficient for large problems. More natural are first-order block coordinate-
descent approaches, introduced by d’Aspremont, Banerjee and El Ghaoui
(2008) and refined by Friedman, Hastie and Tibshirani (2008). The latter
authors call this the _graphical lasso_ algorithm. It has a simple form which
also connects it to the neighborhood-based regression approach, discussed in
Section 9.4.

#### 9.3.2 Graphical Lasso Algorithm

The subgradient equation corresponding to (9.13) is

```
Θ −^1 − S − λ · Ψ = 0 , (9.14)
```
with the symmetric matrix **Ψ** having diagonal elements zero, _ψjk_ = sign( _θjk_ )
if _θjk_ 6 = 0, else _ψjk_ ∈[− 1 _,_ 1] if _θjk_ = 0.


###### GRAPH SELECTION VIA PENALIZED LIKELIHOOD 249

We now consider solving this system by blockwise coordinate descent. To
this end we consider partitioning all the matrices into one column versus the
rest; for convenience we pick the last column:

###### Θ =

###### [

```
Θ 11 θ 12
θ T 12 θ 22
```
###### ]

###### , S =

###### [

```
S 11 s 12
s T 12 s 22
```
###### ]

```
, etc. (9.15)
```
Denote by **W** the current working version of **Θ** −^1 , with partitions as in (9.15).
Then fixing all but the last row and column and using partitioned inverses,
(9.14) leads to
**W** 11 **_β_** − **s** 12 + _λ_ · **_ψ_** 12 = **0** _,_ (9.16)

where **_β_** =− **_θ_** 12 _/θ_ 22. Here we have fixed the _pth_ row and column: **W** 11 is the
( _p_ −1)×( _p_ −1) block of **Θ** −^1 , and **s** 12 and **_θ_** 12 are _p_ −1 nondiagonal elements
of the _pth_ row and columns of **S** and **Θ**. Finally _θ_ 22 is the _pth_ diagonal element
of **Θ**. These details are derived in Exercise 9.6.^1
It can be seen that (9.16) is equivalent to a modified version of the esti-
mating equations for a lasso regression. Consider the usual regression setup
with outcome variables **y** and predictor matrix **Z**. In that problem, the lasso
minimizes
1
2 _N_ ( **y** − **Z** **_β_** )

```
T ( y − Z β ) + λ ·‖ β ‖
1 (9.17)
```
The subgradient equations are

```
1
N Z
```
```
T Z β − 1
N Z
```
```
T y + λ ·sign( β ) = 0. (9.18)
```
Comparing to (9.16), we see that _N_^1 **Z** _T_ **y** is the analog of **s** 12 , and _N_^1 **Z** _T_ **Z** cor-
responds to **W** 11 , the estimated cross-product matrix from our current model.
Thus we can solve each blockwise step (9.16) using a modified algorithm for
the lasso, treating each variable as the response variable and the other _p_ − 1
variables as the predictors. It is summarized in Algorithm 9.1.
Friedman et al. (2008) use the pathwise-coordinate-descent approach to
solve the modified lasso problems at each stage, and for a decreasing series
of values for _λ_. [This corresponds to the “covariance” version of their lasso
algorithm, as implemented in theglmnetpackage inRandmatlab(Friedman
et al. 2010 _b_ ).]
From Equation (9.14) we see that the diagonal elements _wjj_ of the solution
matrix **W** are simply _sjj_ , and these are fixed in Step 1 of Algorithm 9.1.^2

(^1) On a historical note, it turns out that this algorithm is _not_ block-coordinate descent
on **Θ** in (9.14) (as originally intended in Friedman et al. (2008)), but instead amounts to
a block coordinate-descent step for the convex dual of problem (9.13). This is implied in
Banerjee, El Ghaoui and d’Aspremont (2008), and is detailed in Mazumder and Hastie
(2012). The dual variable is effectively **W** = **Θ** −^1. These latter authors derive alternative
coordinate descent algorithms for the primal problem (see Exercise 9.7). In some cases, this
gives better numerical performance than the original graphical lasso procedure.
(^2) An alternative formulation of the problem can be posed, where we penalize the diagonal
of **Θ** as well as the off-diagonal terms. Then the diagonal elements _wjj_ of the solution matrix
are _sjj_ + _λ_ , and the rest of the algorithm is unchanged.


###### 250 GRAPHS AND MODEL SELECTION

```
Algorithm 9.1 Graphical Lasso.
```
1. Initialize **W** = **S**. Note that the diagonal of **W** is unchanged in what
    follows.
2. Repeat for _j_ = 1 _,_ 2 _,...p,_ 1 _,_ 2 _,...p,..._ until convergence:

```
(a) Partition the matrix W into part 1: all but the jth row and column,
and part 2: the jth row and column.
(b) Solve the estimating equations W 11 β − s 12 + λ ·sign( β ) = 0 using a
cyclical coordinate-descent algorithm for the modified lasso.
(c) Update w 12 = W 11 β ˆ
```
3. In the final cycle (for each _j_ ) solve forˆ **_θ_** 12 = − **_β_** ˆ· _θ_ ˆ 22 , with 1 _/θ_ ˆ 22 =
    _w_ 22 − **w** _T_ 12 **_β_** ˆ.

```
The graphical lasso algorithm is fast, and can solve a moderately sparse
problem with 1000 nodes in less than a minute. It is easy to modify the algo-
rithm to have edge-specific penalty parameters λjk ; note also that λjk =∞
will force θ ˆ jk to be zero.
Figure 9.4 illustrates the path algorithm using a simple example. We gen-
erated 20 observations from the model of Figure 9.3, with
```
###### Θ =

######      

###### 2 0. 6 0 0 0. 5

###### 0. 6 2 − 0. 4 0. 3 0

###### 0 − 0. 4 2 − 0. 2 0

###### 0 0. 3 − 0. 2 2 0

###### 0. 5 0 0 − 0. 2 2

######      

###### . (9.19)

```
Shown are the graphical lasso estimates for a range of λ values, plotted against
the ` 1 norm of the solution Θ ˆ λ. The true values of Θ are indicated on the
right. The solutions are spot on, but this is not surprising since the solution on
the right (no regularization) is S −^1 which equals Θ (Exercise 9.3). In the right
panel, we have added independent Gaussian noise to each element of the data
matrix (with standard deviation 0. 05). Now we see that the estimate is not
nearly as accurate; in fact, the nonzero support is never recovered correctly
along the path.
Some further points about the Gaussian graphical model:
```
- A simpler approach would be to use the observed covariance **S** 11 in place of
    **W** 11 : this requires just a single pass through the predictors, carrying out a
    lasso regression of each variable _Xj_ on the others. This is called _neighbor-_
    _hood selection_ (Meinshausen and B ̈uhlmann 2006). Like the graphical lasso
    algorithm, this yields a consistent estimate of the support of **Θ** , but is not
    guaranteed to produce a positive definite estimate **Θ** ˆ. We discuss this in
    detail in Section 9.4.
- If we pre-specify the zero pattern in **Θ** , we can use standard linear regres-
    sion in place of the lasso, leaving out the predictors that are supposed to


###### GRAPH SELECTION VIA PENALIZED LIKELIHOOD 251

```
0 1 2 3 4
```
```
−0.4 −0.2 0.0 0.2 0.4 0.6
```
```
12
15
```
```
23
```
```
24
```
```
34
```
```
35
```
```
No Noise
```
```
0 1 2 3 4 5
```
```
−0.4 −0.2 0.0 0.2 0.4 0.6
```
```
12
```
```
13
```
```
14
```
```
15
```
```
23
```
```
24
25
```
```
34
```
```
35
45
```
```
With Noise
```
```
ℓ 1 Norm ℓ 1 Norm
```
```
Estimated
```
```
Θ
```
```
Estimated
```
```
Θ
```
**Figure 9.4** Left: _Profiles of estimates from the graphical lasso, for data simulated
from the model of Figure 9.3. The actual values of_ Θ _are achieved at the right end
of the plot._ Right: _Same setup, except that standard Gaussian noise has been added
to each column of the data. Nowhere along the path is the true edge set recovered._

```
have coefficients of zero. This provides a convenient way of computing the
constrained maximum likelihood estimate of Θ. Details are in Chapter 17
of Hastie et al. (2009).
```
#### 9.3.3 Exploiting Block-Diagonal Structure

If the inverse covariance matrix has a block diagonal structure

###### Θ =

###### 

###### 

###### 

###### 

###### 

###### Θ 11 0 ··· 0

###### 0 Θ 22 ··· 0

###### ..

###### .

###### ..

###### .

###### ..

###### .

###### ..

###### .

```
0 0 ··· Θ kk
```
###### 

###### 

###### 

###### 

###### 

###### , (9.20)

for some ordering of the variables, then the graphical lasso problem can be
solved separately for each block, and the solution is constructed from the
individual solutions. This fact follows directly from the subgradient equations
(9.14).
It turns out that there is a very simple necessary and sufficient condition
for a graphical-lasso solution to have such structure (Witten, Friedman and
Simon 2011, Mazumder and Hastie 2012). Let _C_ 1 _,C_ 2 _,...CK_ be a partition of
the indices 1 _,_ 2 _,...,p_ of **S** into _K_ blocks. Then the corresponding arrangement
of **Θ** ˆ has this same block structure if and only if| _sii_ ′| ≤ _λ_ for all pairs ( _i,i_ ′)
not belonging to the same block. The proof is easy, by inspection of (9.14)
and using the fact that the inverse of a block diagonal matrix has the same
block-diagonal structure. This means that the elements of each block _Ck_ are
fully disconnected from elements of all other blocks.


###### 252 GRAPHS AND MODEL SELECTION

```
● ● ● ● ● ● ● ● ●
```
```
1000 3000 5000 7000
```
```
0.15
```
```
0.20
```
```
0.25
```
```
0.30
```
```
Sample Size
```
```
Operator−Norm Error
```
```
● ● ● ● ● ● ●
```
```
● ●
```
```
● ● ● ● ● ● ●
```
```
● ●
```
```
p=64
p=100
p=225
```
```
● ● ● ● ● ●
```
```
● ●
●
```
```
10 15 20 25 30
```
```
0.10
```
```
0.15
```
```
0.20
```
```
0.25
```
```
0.30
```
```
Rescaled Sample Size
```
```
● ● ● ● ● ● ●
```
```
● ●
```
```
● ● ● ● ● ● ● ● ●
```
**Figure 9.5** _Plots of the operator-norm error_ ‖ **Θ** ̂− **Θ** ∗‖ 2 _between the graphical lasso
estimate_ **Θ** ̂ _and the true inverse covariance matrix._ Left: _plotted versus the raw
sample sizeN, for three different graph sizesp_ ∈{ 64 _,_ 100 _,_ 225 }_. Note how the curves
shift to the right as the graph sizepincreases, reflecting the fact that larger graphs
require more samples for consistent estimation._ Right: _the same operator-norm error
curves plotted versus the_ rescaled _sample sized_ 2 _N_ log _pfor three different graph sizes
p_ ∈{ 64 _,_ 100 _,_ 225 }_. As predicted by theory, the curves are now quite wel l-aligned._

This fact can be exploited to provide a substantial speedup in computa-
tion, by first identifying the disconnected components and then solving the
subproblems in each block. The number of blocks is monotone in _λ_. This
means, for example, that solutions can be found for very large problems (that
perhaps could not be solved in general), as long as _λ_ is sufficiently large.

#### 9.3.4 Theoretical Guarantees for the Graphical Lasso

In order to explore the behavior of graphical lasso or log-determinant method,
we carried out a series of simulations. For a given graph type with _p_ nodes and
specified covariance matrix, we generated a set of _N_ zero-mean multivariate
Gaussian samples, and used them to form the empirical covariance matrix
**S**. We solved the graphical lasso program using the regularization parameter

_λN_ = 2

###### √

log _p
N_ (Ravikumar, Wainwright, Raskutti and Yu 2011, as suggested
by theory) and plot the operator norm error‖ **Θ** ̂− **Θ** ∗‖ 2 versus the sample
size _N_. Figure 9.5 (left) shows such plots for three different dimensions _p_ ∈
{ 64 _,_ 100 _,_ 225 }of two-dimensional grid graphs, in which each node has degree
four. For each graph size, we generated an inverse covariance matrix **Θ** ∗∈


###### GRAPH SELECTION VIA PENALIZED LIKELIHOOD 253

R _p_ × _p_ with entries

```
θst ∗=
```
###### 

###### 

###### 

```
1 if s = t ,
0. 2 if| s − t |= 1, and
0 otherwise
```
The plots in the left panel show that the graphical lasso is a consistent pro-
cedure for estimating the inverse covariance **Θ** ∗in operator norm, since the
error curves converge to zero as _N_ increases. Comparing the curves for differ-
ent graph sizes, we see a rightward-upward shift in the error curves, reflecting
the fact that larger graphs require more samples to achieve the same error
tolerance.
It is known that the solution **Θ** ̂to the graphical lasso satisfies, with high
probability, the error bound

###### ‖ Θ ̂− Θ ∗‖ 2.

###### √

```
d^2 log p
N
```
###### , (9.21)

where _d_ is the maximum degree of any node in the graph, and.denotes
inequality up to constant terms. (See the bibliographic notes on page 261 for
details). If this theoretical prediction were sharp, one would expect that the
same error curves—if replotted versus the _rescaled sample sized_ 2 _N_ log _p_ —should
be relatively well-aligned. The right panel in Figure 9.5 provides empirical
confirmation of this prediction. We note that there are also theoretical results
that guarantee that, as long as _N_ = Ω( _d_^2 log _p_ ), the support set **Θ** ̂ of the
graphical lasso estimate coincides with the support set of **Θ** ∗. Thus, the
graphical lasso also succeeds in recovering the true graph structure.

#### 9.3.5 Global Likelihood for Discrete Models

In principle, one could imagine adopting the _`_ 1 -regularized version of the
global likelihood to the problem of graph selection in models with discrete
variables. A major challenge here is that the partition functions _A_ in (9.4)–
(9.6)—in sharp contrast to the multivariate Gaussian case—are difficult to
compute in general. For instance, in the case of the Ising model (9.4), it takes
the form

```
A ( θ ) = log
```
###### 

###### 

###### ∑

```
x ∈{− 1 , +1} p
```
```
exp
```
###### 

###### 

###### 

###### ∑

```
s ∈ V
```
```
θsxs +
```
###### ∑

```
( s,t )∈ E
```
```
θstxsxt
```
###### 

###### 

###### 

###### 

###### .

Thus, a brute force approach is intractable for large _p_ , since it involves a
summation over 2 _p_ terms. With the exception of some special cases, computing
the value of _A_ ( _θ_ ) is computationally intractable in general.
There are various approaches that can be taken to approximate or bound
the partition function (see the bibliographic discussion for some references).
However, these methods are somewhat off the main course of development


###### 254 GRAPHS AND MODEL SELECTION

in this chapter. Instead, the next section moves away from global likelihoods
toward the idea of conditional or pseudo-likelihoods. These approaches can be
used both for Gaussian and discrete variable models, and are computationally
tractable, meaning polynomial-time in both sample size and graph size in
either case.

### 9.4 Graph Selection via Conditional Inference

An alternative approach to graph selection is based on the idea of
neighborhood-based likelihood, or products of such quantities that are known
as pseudo-likelihoods. Both of these methods focus on conditional distribu-
tions, which for many situations are tractable.
For a given vertex _s_ ∈ _V_ , we use

```
X \{ s }={ Xt,t ∈ V \{ s }}∈R p −^1.
```
to denote the collection of all other random variables in the graph. Now con-
sider the distribution of _Xs_ given the random vector _X_ \{ _s_ }. By the conditional

```
s
```
```
t 1
t 2
```
```
t 3
```
```
t 4
```
```
t 5
```
**Figure 9.6** _The dark blue vertices form the neighborhood set_ N( _s_ ) _of vertexs(drawn
in red); the set_ N+( _s_ ) _is given by the union_ N( _s_ )∪{ _s_ }_. Note that_ N( _s_ ) _is a cut
set in the graph that separates_ { _s_ } _fromV_ \N+( _s_ )_. Consequently, the variableXsis
conditionally independent ofXV_ \N+( _s_ ) _given the variablesX_ N( _s_ ) _in the neighborhood
set. This conditional independence implies that the optimal predictor ofXsbased on
al l other variables in the graph depends only onX_ N( _s_ )_._

independence properties of any undirected graphical model (see Section 9.2),
the only relevant variables to this conditioning are those in the _neighborhood
set_

```
N( s ) =
```
###### {

```
t ∈ V |( s,t )∈ E
```
###### }

###### . (9.22)

Indeed, as shown in Figure 9.6, the setN( _s_ ) is a cut set that separates{ _s_ }
from the remaining vertices _V_ \N+( _s_ ), where we defineN+( _s_ ) =N( _s_ )∪


###### GRAPH SELECTION VIA CONDITIONAL INFERENCE 255

{ _s_ }. Consequently, we are guaranteed that the variable _Xs_ is conditionally
independent of _XV_ \N+( _s_ )given the variables _X_ N( _s_ ), or equivalently that

```
( Xs | X \{ s })
d
= ( Xs | X N( s )). (9.23)
```
How can this conditional independence (CI) property be exploited in the
context of graph selection? If we consider the problem of predicting the value
of _Xs_ based on _XV_ \{ _s_ }, then by the CI property, the best predictor can be
specified as a function of only _X_ N( _s_ ). Consequently, the problem of finding
the neighborhood can be tackled by solving a prediction problem, as detailed
next.

#### 9.4.1 Neighborhood-Based Likelihood for Gaussians

Let us first develop this approach for the multivariate Gaussian. In this case,
the conditional distribution of _Xs_ given _X_ \{ _s_ }is also Gaussian, so that _Xs_ can
be decomposed into the best linear prediction based on _X_ \{ _s_ }and an error
term—namely

```
Xs = X \{ Ts } βs + W \{ s }. (9.24)
```
In this decomposition, _W_ \{ _s_ } is zero-mean Gaussian variable with
Var( _W_ \{ _s_ }) = Var( _Xs_ | _X_ \{ _s_ }), corresponding to the prediction error, and
is independent of _X_ \{ _s_ }. So the dependence is captured entirely by the linear
regression coefficients _βs_ , which are a scalar multiple of _θs_ , the corresponding
subvector of **Θ** in (9.8) in Section 9.2.2 (Exercise 9.4).
The decomposition (9.24) shows that in the multivariate Gaussian case,
the prediction problem reduces to a linear regression of _Xs_ on _X_ \{ _s_ }. The
key property here—as shown in Exercise 9.4—is that the regression vector _βs_
satisfies supp( _βs_ ) =N( _s_ ). If the graph is relatively sparse—meaning that the
degree|N( _s_ )|of node _s_ is small relative to _p_ —then it is natural to consider
estimating _βs_ via the lasso. This leads to the following neighborhood-based
approach to Gaussian graphical model selection, based on a set of samples
**X** ={ _x_ 1 _,...,xN_ }.
In step 1(a), _xi,V_ \{ _s_ }represents the ( _p_ −1) dimensional subvector of the _p_ -
vector _xi_ , omitting the _sth_ component. To clarify step 2, the AND rule declares
that edge ( _s,t_ ) belongs to the estimated edge set _E_ ̂if and only _s_ ∈N̂( _t_ )
_andt_ ∈N̂( _s_ ). On the other hand, the OR rule is less conservative, allowing
( _s,t_ )∈ _E_ ̂if either _s_ ∈N̂( _t_ ) _ort_ ∈N̂( _s_ ).
An advantage of neighborhood models is speed. Many efficient implemen-
tations of the lasso are available, and the _p_ regression problems can be solved
independently of each other, and hence in parallel.
The AND/OR rules can be avoided by using a joint estimation approach
using the pseudo-likelihood, which is essentially the sum of the log-likelihoods
in (9.25). In this case we would enforce the symmetry of **Θ**. While more ele-
gant, this does incur a small additional computational cost (Friedman, Hastie


###### 256 GRAPHS AND MODEL SELECTION

```
Algorithm 9.2 Neighborhood-based graph selection for Gaussian
graphical models.
```
1. For each vertex _s_ = 1 _,_ 2 _,...,p_ :

```
(a) Apply the lasso to solve the neighborhood prediction problem:
```
```
β ̂ s ∈arg min
βs ∈R p −^1
```
###### {

###### 1

###### 2 N

###### ∑ N

```
i =1
```
###### (

```
xis − xTi,V \{ s } βs )^2 + λ ‖ βs ‖ 1
```
###### }

###### . (9.25)

```
(b) Compute the estimateN̂( s ) = supp( β ̂ s ) of the neighborhood setN( s ).
```
2. Combine the neighborhood estimates{N̂( _s_ ) _,s_ ∈ _V_ }via the AND or OR
    rule to form a graph estimate _G_ ̂= ( _V,E_ ̂).

```
and Tibshirani 2010 a ). It also produces an estimate Θ ̂, and not just its graph.
We discuss such approaches in more generality in Section 9.4.3.
```
#### 9.4.2 Neighborhood-Based Likelihood for Discrete Models

```
The idea of a neighborhood-based likelihood is not limited to Gaussian mod-
els, but can also be applied to other types of graphical models that can be
written in the exponential family form. In fact, given that global likelihood
calculations are intractable for discrete graphical models, the neighborhood-
based approach is especially attractive in the discrete case, at least from the
computational perspective.
The simplest type of discrete graphical model is the Ising model (9.4),
used to model a collection of variables ( X 1 ,X 2 ,...,Xp )∈ {− 1 , +1} p that
interact in a pairwise manner. In this case, as we explore in Exercise 9.5, the
conditional log-odds for the probability of Xs given XV \{ s }takes the form^3
```
```
ηθs ( X \{ s }) = log
```
###### [

```
P( Xs = +1| X \{ s })
P( Xs =− 1 | X \{ s })
```
###### ]

```
= 2 θs +
```
###### ∑

```
t ∈ V \{ s }
```
```
2 θstXt, (9.26)
```
```
with θs = [ θs, { θst } t ∈ V \{ s }]. Consequently, the neighborhood-based approach
for the Ising model has the same form as Algorithm 9.2, with the ordinary
lasso in step 1(a) replaced by the lasso logistic regression problem
```
```
θ ̂ s ∈arg min
θs ∈R p
```
###### 

###### 

###### 

###### 1

###### N

###### ∑ N

```
i =1
```
```
` [ xis,ηθs ( xi, \{ s })] + λ
```
###### ∑

```
t ∈ V \{ s }
```
```
| θst |
```
###### 

###### 

###### 

###### , (9.27)

(^3) the factor of 2 comes from the particular response coding +1/-1 rather than the tradi-
tional 0/1.


###### GRAPH SELECTION VIA CONDITIONAL INFERENCE 257

```
Jeffords
```
```
Grassley
```
```
Hagel
```
```
Thomas
McCain Sununu Bunning Sessions
Warner
Kyl
```
```
Kennedy
```
```
Reid
```
```
Kohl
Clinton
Rockefeller
Reed Kerry Lieberman
```
```
Biden
```
```
Salazar
```
```
Cantwell
```
```
Jeffords
```
```
Grassley
```
```
Hagel
```
```
Thomas
McCain Sununu Bunning Sessions
Warner
Kyl
```
```
Kennedy
```
```
Reid
```
```
Kohl
Clinton
Rockefeller
Reed Kerry Lieberman
```
```
Biden
```
```
Salazar
```
```
Cantwell
```
```
(a) (b)
```
**Figure 9.7** _Politician networks estimated from voting records of U.S. Senate (2004–
2006). A total ofN_ = 546 _votes were col lected for each ofp_ = 100 _senators, with
Xs_ = +1 _(respectivelyXs_ =− 1 _) meaning that senatorsvoted “yes” (respectively
“no”). A pairwise graphical model was fit to the dataset using the neighborhood-
based logistic regression approach. (a) A subgraph of_ 55 _senators from the fitted
graph, with Democratic/Republican/Independent senators coded as blue/red/yel low
nodes, respectively. Note that the subgraph shows a strong bipartite tendency with
clustering within party lines. A few senators show cross-party connections. (b) A
smal ler subgraph of the same social network._

where _`_ is the negative log-likelihood for the binomial distribution. This prob-
lem is again a convex program, and any algorithm for _`_ 1 -penalized logistic
regression can be used, such as the coordinate-descent procedure discussed in
Chapter 5. As in the Gaussian case, rules have to be used to enforce symmetry
in the edge calls.
Hoefling and Tibshirani (2009) present a pseudo-likelihood method for this
problem which imposes the symmetry. It can be thought of as intermediate
to the exact, but computationally intractable, global likelihood approach and
the neighborhood-based method described above. We cover their approach in
Section 9.4.3.
Figure 9.7 shows the results of fitting an Ising model to represent the
politician social network for the U.S. Senate, reconstructed on the basis of
voting records. Details are given in the figure caption; overall we see strong
clustering within each party.
The neighborhood-based approach for graphical model selection can be
shown to be consistent under relatively mild conditions on the sample size
(see the bibliographic section for references and further discussion). In the
case of the Ising model, let _G_ ̂denote the output of the neighborhood-based
approach using logistic regression. It is known that _N_ = Ω( _d_^2 log _p_ ) samples


###### 258 GRAPHS AND MODEL SELECTION

```
● ● ●
```
```
●
```
```
●
```
```
● ●
● ● ● ●
```
```
0 200 400 600 800 1200
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Sample Size
```
```
Probability of Correct Edge Detection
```
```
●●
```
```
●
```
```
●
```
```
●
```
```
●●
```
```
●●●●
```
```
●●
```
```
●
```
```
●
```
```
●
```
```
●●
```
```
●●●●
```
```
p=64
p=100
p=225 ● ●
```
```
●
```
```
●
```
```
●
```
```
●
● ● ● ● ●
```
```
2 4 6 8 10
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Rescaled Sample Size
```
```
● ●
```
```
●
```
```
●
```
```
●
```
```
● ●
```
```
● ● ● ●
```
```
● ● ●
```
```
●
```
```
●
```
```
● ●
● ● ● ●
```
**Figure 9.8** _Plots of the probability_ P[ _G_ ̂= _G_ ] _of correctly recovering the graph versus
the sample size. The neighborhood-based logistic regression procedure was applied to
recover a star-shaped graph (central hub with spokes) withpvertices and hub degree
d_ =d 0_._ 1 _p_ e_. (a) Plotted versus the raw sample sizeN. As would be expected, larger
graphs require more samples for consistent estimation. (b) The same simulation
results plotted versus the rescaled sample sized_ log _Np._

are sufficient to ensure that _G_ ̂= _G_ with high probability. Figure 9.8 illustrates
the sufficiency of this condition in practice, when the method is applied to a
star-shaped graph with _p_ nodes, in which a central hub node is connected
to _d_ =d 0_._ 1 _p_ espoke nodes. (The remaining nodes in the graph are discon-
nected from the hub-spoke subgraph.) We implemented the neighborhood-
based logistic-regression method for graphs with _p_ ∈ { 64 _,_ 100 _,_ 225 }nodes,
using the AND rule to combine the neighborhoods so as to form the graph
estimate. In panel (a) of Figure 9.8, we plot the probabilityP[ _G_ ̂= _G_ ] of
correctly recovering the unknown graph versus the sample size _N_ , with each
curve corresponding to a different graph size as labelled. Each of these plots
show that the method is model-selection consistent, in that as the sample size
_N_ increases, the probabilityP[ _G_ ̂= _G_ ] converges to one. Naturally, the tran-
sition from failure to success occurs later (at larger sample sizes) for larger
graphs, reflecting that the problem is more difficult. Panel (b) shows the same
simulation results plotted versus the rescaled sample size _d_ log _Np_ ; on this new
axis, all three curves are now well-aligned. This simulation confirms that the
theoretical scaling _N_ = Ω( _d_^2 log _p_ ) is sufficient to ensure successful graph re-
covery, but not necessary for this class of graphs. However, there are other
classes of graphs for which this scaling is both sufficient and necessary (see
the bibliographic section for details).


###### GRAPH SELECTION VIA CONDITIONAL INFERENCE 259

#### 9.4.3 Pseudo-Likelihood for Mixed Models

So far we have covered graphical models for all continuous variables (the
Gaussian graphical model), and models for all binary variables (the Ising
model). These do not cover other frequently occurring situations:

- discrete variables with more than two states;
- mixed data types: i.e., some continuous and some discrete.

In this section, we extend the models covered so far to include these cases,
and demonstrate an approach for inference based on the pseudo-likelihood.
A simple generalization of the Gaussian and Ising models is the pairwise
Markov random field model. For convenience in notation, we denote the _p_
continuous variables by _X_ and the _q_ discrete variables by _Y_. The density
P **Ω** ( _x,y_ ) is proportional to

```
exp
```
###### 

###### 

###### 

```
∑ p
```
```
s =1
```
```
γsxs −
```
###### 1

###### 2

```
∑ p
```
```
s =1
```
```
∑ p
```
```
t =1
```
```
θstxsxt +
```
```
∑ p
```
```
s =1
```
```
∑ q
```
```
j =1
```
```
ρsj [ yj ] xs +
```
```
∑ q
```
```
j =1
```
```
∑ q
```
```
r =1
```
```
ψ jr [ yj,yr ]
```
###### 

###### 

###### 

###### .

###### (9.28)

The first two terms are as in the Gaussian graphical model (9.8). The term
_ρsj_ represents an edge between continuous _Xs_ and discrete _Yj_. If _Yj_ has _Lj_
possible states or levels, then _ρsj_ is a vector of _Lj_ parameters, and _ρsj_ [ _yj_ ]
references the _yjth_ value. Likewise **_ψ_** _jr_ will be an _Lj_ × _Lr_ matrix representing
an edge between discrete _Yj_ and _Yr_ , and **_ψ_** _jr_ [ _yj,yr_ ] references the element in
row _yj_ and column _yr_. The terms **_ψ_** _jj_ will be diagonal, and represent the _node
potentials_ (they correspond to the _θs_ in the Ising model (9.4) on page 244).
The matrix **Ω** represents the entire collection of parameters. Needless to say,
the partition function is typically intractable, except in very low-dimensional
cases.
Here the pseudo-likelihood is attractive: it is the product of the _p_ + _q_
conditional likelihoods, and each of these are simple (Exercise 9.8), depending
on the type of response:

_Continuous:_ The conditional distribution for each of the _p_ continuous vari-
ables is Gaussian, with mean linear in the conditioning variables.

```
P( Xs | X \{ s } ,Y ; Ω ) =
```
###### (

```
θss
2 π
```
###### )^12

```
e
```
```
− θss 2
```
###### (

```
Xs −
```
```
γs +
```
###### ∑

```
jρsj [ Yj ]−
```
###### ∑

```
t 6 = sθstXt
θss
```
###### ) 2

###### (9.29)

```
The contributions of the discrete conditioning variables on the right-hand
side are different additive constants, as for qualitative factors in linear re-
gression models; i.e., a constant for each level, determined by the ρsj.
```
_Discrete:_ The conditional distribution for each of the _q_ discrete variables is
multinomial, with log-odds linear in the conditioning variables.

```
P( Yj | X,Y \{ j }; Ω ) =
e
ψ jj [ Yj,Yj ]+
```
###### ∑

```
sρsj [ Yj ] Xs +
```
###### ∑

```
r 6 = j ψ [ Yj,Yr ]
∑ Lj
` =1 e
```
```
ψ jj [ `,` ]+
```
###### ∑

```
sρsj [ ` ] Xs +
```
###### ∑

```
r 6 = j ψ [ `,Yr ]
```
###### (9.30)


###### 260 GRAPHS AND MODEL SELECTION

```
X 1
```
```
X 2
```
```
X 3
```
```
Y 1
```
```
Y 2
```
**Figure 9.9** _Mixed graphical model, with three continuous and two discrete variables.
Y_ 1 _has two states, andY_ 3 _has three. The diagram on the right shows the sets of pa-
rameters associated with each edge. The group lasso treats these as sets, and includes
or excludes them al l together._

```
With this notation, the pseudo-log-likelihood is defined to be
```
```
`p ( Ω ; X , Y ) =
```
###### ∑ N

```
i =1
```
###### 

###### 

```
∑ p
```
```
s =1
```
```
logP( xis | xi \{ s } ,yi ; Ω )
```
```
∑ q
```
```
j =1
```
```
logP( yij | xi,yi \{ j }; Ω )
```
###### 

###### .

###### (9.31)

One can show that (9.31) is a concave function of **Ω**. Notice that each of the
parameters appears twice: once when one of the indices corresponds to the
response, and again when that index refers to a conditioning variable.
The edge parameters are now of three kinds: scalars _θst_ , vectors _ρsj_ , and
matrices **_ψ_** _jr_. Figure 9.9 illustrates with a small example. Lee and Hastie
(2014) use the group-lasso to select these different parameter types; they pro-
pose optimizing the penalized pseudo-log-likelihood

```
`p ( Ω ; X , Y )− λ
```
###### 

###### 

```
∑ p
```
```
s =1
```
```
∑ s −^1
```
```
t =1
```
```
| θst |+
```
```
∑ p
```
```
s =1
```
```
∑ q
```
```
j =1
```
```
‖ ρsj ‖ 2 +
```
```
∑ q
```
```
j =1
```
```
j ∑− 1
```
```
r =1
```
```
‖ ψ jr ‖ 2
```
###### 

######  (9.32)

w.r.t. the parameters **Ω**. Notice that not all the parameters are penalized. In
particular the diagonal of **Θ** is left alone (as in the graphical lasso algorithm),
as are each of the node-potentials **_ψ_** _jj_. This imposes interesting constraints
on some of the parameter estimates, which are explored in Exercise 9.9.
With only continuous variables, this is exactly the penalized pseudo-
likelihood for the Gaussian graphical model. For all binary variables, one can
show that this is equivalent to the lasso-penalized pseudo-likelihood for the
Ising model (see Hoefling and Tibshirani (2009) and Exercise 9.10).
Block coordinate descent is attractive here, since each of the components
has well-studied solutions. However, the parameters are shared, and so care
must be taken to respect this symmetry. Lee and Hastie (2014) use a proximal-
Newton algorithm.


###### GRAPHICAL MODELS WITH HIDDEN VARIABLES 261

### 9.5 Graphical Models with Hidden Variables

Chandrasekaran et al. (2012) propose a method for undirected graphical mod-
els, in which some of the variables are unobserved (or “latent”). Suppose for
example that we are modelling stock prices in a certain sector, and they are
heavily dependent on the price of energy, the latter being unmeasured in our
data. Then the concentration matrix of the stock prices will not look sparse
in our data, but may instead be sparse if we could condition on energy price.
Let the covariance matrix of all variables—observed and unobserved—be
**Σ**. The sub-block of **Σ** corresponding to the observed variables is **Σ** _O_. Let
**K** = **Σ** −^1 be the concentration matrix for the set of observed and hidden
variables, with sub-matrices **K** _O,_ **K** _O,H,_ **K** _H,O_ and **K** _H_. These capture the
dependencies among the observed variables, between the observed and hidden
variables, and among the hidden variables, respectively. Making use of the
partitioned-inverse formulas, we get the following expression for the concen-
tration matrix of the observed variables:

```
K ̃ O = Σ −^1
O = K O − K O,H K
```
```
− 1
H K H,O (9.33)
```
Here **K** _O_ is the concentration matrix of the conditional statistics of the ob-
served variables given the hidden variables. Now **K** ̃ _O_ may not be sparse, but
if the graphical model for all variables (observed and hidden) has few edges
then **K** _O_ will be sparse.
Motivated by the form (9.33), letting **K** _O_ = **Θ** the idea is to write

```
K ̃ O = Θ − L , (9.34)
```
where **L** is assumed to be low rank, with the rank at most the number of
hidden variables. We then solve the problem

```
minimize
Θ , L
```
###### {

```
trace[ S ( Θ − L )]−log[det( Θ − L )] + λ ‖ Θ ‖ 1 + trace( L )
```
###### }

###### (9.35)

over the set{ **Θ** − **L**  **0** _,_ **L**  **0** }. Like the graphical lasso, this is again a
convex problem. This relates to the “sparse plus low rank” idea discussed
in Mazumder et al. (2010) and Chandrasekaran et al. (2011). Ma, Xue and
Zou (2013) propose first-order alternating direction-of-multipliers (ADMM)
techniques for this problem, and compare them to second order methods.
Some details are given in Exercise 9.11.

### Bibliographic Notes

Detailed discussion of graphical models can be found in Whittaker (1990),
Lauritzen (1996), Cox and Wermuth (1996), Edwards (2000), Pearl (2000),
Anderson (2003), and Koller and Friedman (2009).
The Hammersley–Clifford theorem was first announced in the unpublished
note of Hammersley and Clifford (1971). Independent proofs were given by Be-
sag (1974) and Grimmett (1973), the latter proof using the M ̈oebius inversion


###### 262 GRAPHS AND MODEL SELECTION

formula. See Clifford (1990) for some historical discussion and context of the
result.
Welsh (1993) discusses the computational intractability of evaluating the
partition function for general discrete graphical models. For graphs with spe-
cial structure, exact computation of the cumulant function is possible in poly-
nomial time. Examples include graphs with low tree width, for which the
junction tree algorithm can be applied (Lauritzen and Spiegelhalter 1988,
Lauritzen 1996), and certain classes of planar models (Kastelyn 1963, Fisher
1966). For other special cases, there are rapidly mixing Markov chains that
can be used to obtain good approximations to the cumulant function (Jerrum
and Sinclair 1993, Jerrum and Sinclair 1996, for example, and the references
therein). A complementary approach is provided by the class of variational
methods, which provide approximations to the cumulant generating func-
tion (e.g., see the monograph by Wainwright and Jordan (2008) and refer-
ences therein). Examples include the mean-field algorithm, the sum-product
or belief-propagation algorithm, expectation propagation, as well as various
other convex relaxations. For certain graphs, particularly those that are “lo-
cally tree-like,” there are various kinds of asymptotic exactness results (e.g.,
see the book by M ́ezard and Montanari (2008) and references therein).
Gaussian graphical models are used for modelling gene expression
data (Dobra, Hans, Jones, Nevins, Yao and West 2004), and other genomic
and proteomic assays. The Ising model (9.4) was first proposed in the con-
text of statistical physics by Ising (1925). In more recent work, it and re-
lated models have been used as simple models for binary images (Geman and
Geman 1984, Greig, Porteous and Seheuly 1989, Winkler 1995), voting be-
havior in politicians (Banerjee et al. 2008), citation network analysis (Zhao,
Levina and Zhu 2011).
Some of the methods discussed in this chapter for undirected models can
be used to aid in the more difficult model search for directed graphical models;
see for example Schmidt, Niculescu-Mizil and Murphy (2007). The paper by
Vandenberghe et al. (1998) provides an introduction to the problem of deter-
minant maximization with constraints; the Gaussian MLE (with or without
regularization) is a special case of this class of problems. Yuan and Lin (2007 _a_ )
proposed the use of _`_ 1 -regularization in conjunction with the Gaussian (log-
determinant) likelihood for the covariance-selection problem, and used inte-
rior point methods (Vandenberghe et al. 1998) to solve it. d’Aspremont et al.
(2008) and Friedman et al. (2008) develop faster coordinate descent algo-
rithms for solving the graphical lasso (9.13), based on solving a sequence of
subproblems. Mazumder and Hastie (2012) offer variants on these algorithms
with better convergence properties. Witten et al. (2011) and Mazumder and
Hastie (2012) show how to exploit block-diagonal structure in **S** in computing
graphical-lasso solutions. Rothman, Bickel, Levina and Zhu (2008) established
consistency of the estimator in Frobenius norm, whereas Ravikumar et al.
(2011) provide some results on model selection consistency as well as rates


###### EXERCISES 263

for operator norm. In particular, they proved the operator-norm bound (9.21)
illustrated in Figure 9.5.
The idea of pseudo-likelihood itself is quite old, dating back to the semi-
nal work of Besag (1975). Meinshausen and B ̈uhlmann (2006) were the first
to propose and develop the lasso-based neighborhood selection for Gaussian
graphical models, and to derive consistency results under high-dimensional
scaling; see also the papers by Zhao and Yu (2006) and Wainwright (2009) for
related results on static graphs. Zhou, Lafferty and Wasserman (2008) con-
sider the problem of tracking a time-varying sequence of Gaussian graphical
models.
Ravikumar, Wainwright and Lafferty (2010) proposed _`_ 1 -regularized lo-
gistic regression for model selection in discrete binary graphical models, and
showed that it is model-selection consistent under the scaling _N_ = Ω( _d_^3 log _p_ ).
Subsequent analysis by Bento and Montanari (2009) improved this scal-
ing to _N_ = Ω( _d_^2 log _p_ ) for Ising models below the phase transition. Koh
et al. (2007) develop an interior-point algorithm suitable for large-scale _`_ 1 -
regularized logistic regression. Instead of solving separate a logistic regression
problem at each node, Hoefling and Tibshirani (2009) propose minimization
of the _`_ 1 -regularized pseudo-likelihood, and derive efficient algorithms for it;
see also Friedman et al. (2010 _a_ ). Santhanam and Wainwright (2008) derive
information-theoretic lower bounds on Ising model selection, showing that no
method can succeed more than half the time if _N_ =O( _d_^2 log _p_ ). This shows
that the neighborhood approach is an optimal procedure up to constant fac-
tors.
Cheng, Levina and Zhu (2013) and Lee and Hastie (2014) discuss mixed
graphical models, involving both continuous and discrete variables. Kalisch
and B ̈uhlmann (2007) show that a variant of the PC algorithm can be used
for high-dimensional model selection in directed graphs.
A different kind of graphical model is the _covariance graph_ or _relevance
network_ , in which vertices are connected by bidirectional edges if the covari-
ance (rather than the partial covariance) between the corresponding variables
is nonzero. These are popular in genomics; see for example Butte, Tamayo,
Slonim, Golub and Kohane (2000). The negative log-likelihood from these
models is not convex, making the computations more challenging (Chaudhuri,
Drton and Richardson 2007). Recent progress on this problem has been made
by Bien and Tibshirani (2011) and Wang (2014). The latter paper derives
a blockwise coordinate descent algorithm analogous to the to the graphical
lasso procedure. Some theoretical study of the estimation of large covariance
matrices is given by Bickel and Levina (2008) and El Karoui (2008).

**Exercises**

Ex. 9.1 The most familiar parametrization of the multivariate Gaussian is in
terms of its mean vector _μ_ ∈R _p_ and covariance matrix **Σ** ∈R _p_ × _p_. Assuming
that the distribution is nondegenerate (i.e., **Σ** is strictly positive definite),


###### 264 GRAPHS AND MODEL SELECTION

show that the canonical parameters ( _γ,_ **Θ** )∈R _p_ × S+ _p_ from the factoriza-
tion (9.8) are related by

```
μ =− Θ −^1 γ, and Σ = Θ −^1. (9.36)
```
Ex. 9.2 Let{ _x_ 1 _,...,xN_ }be _N_ i.i.d. samples from a Gaussian graphical model,

and letL( **Θ** ; **X** ) = _N_^1

###### ∑ N

_i_ =1logP **Θ** ( _xi_ ) denote the rescaled log-likelihood of the
sample.

```
(a) Show that
L( Θ ; X ) = log det Θ −trace( SΘ ) + C,
```
```
where S = N^1
```
###### ∑ N

```
i =1 xix
```
```
T
i is the empirical covariance matrix, and C is a
constant independent of Θ.
(b) Show that the function f ( Θ ) =−log det Θ is a strictly convex function
on the cone of positive definite matrices. Prove that∇ f ( Θ ) = Θ −^1 for any
Θ ∈S+ p.
(c) The (unregularized) Gaussian MLE is given by
```
```
Θ ̂∈arg max
Θ ∈S+ p
```
###### {

```
log det Θ −trace( SΘ )
```
###### }

###### ,

```
when this maximum is attained. Assuming that the maximum is attained,
show that Θ ̂= S −^1. Discuss what happens when N < p.
(d) Now consider the graphical lasso (9.13), based on augmenting the rescaled
log-likelihood with an ` 1 -regularizer. Derive the Karush–Kuhn–Tucker equa-
tions that any primal-optimal pair ( Θ ̂ , W ̂)∈S p +×R p × p must satisfy.
(e) Derive the dual program associated with the graphical lasso. Can you
generalize your result to regularization with any `q -norm, for q ∈[1 , ∞]?
```
Ex. 9.3 Show that if **S** is positive definite, the graphical lasso algorithm with
_λ_ = 0 computes **Θ** ̂= **S** −^1.

Ex. 9.4 In this exercise, we explore properties of jointly Gaussian random
vectors that guarantee Fisher consistency of the neighborhood-based lasso
approach to covariance selection. Let ( _X_ 1 _,X_ 2 _,...,Xp_ ) be a zero-mean jointly
Gaussian random vector with positive definite covariance matrix **Σ**. Letting
_T_ ={ 2 _,_ 3 _,...,p_ }, consider the conditioned random variable _Z_ = ( _X_ 1 | _XT_ ).

```
(a) Show that there is a vector θ ∈R p −^1 such that
```
```
Z = θTXT + W,
```
```
where W is a zero-mean Gaussian variable independent of XT. Hint: con-
sider the best linear predictor of X 1 given XT.
(b) Show that θ = Σ − TT^1 Σ T 1 , where Σ T 1 ∈R p −^1 is the vector of covariances
between X 1 and XT.
```

###### EXERCISES 265

```
(c) Show that θj = 0 if and only if j / ∈N(1). Hint: The following elementary
fact could be useful: let A be an invertible matrix, given in the block-
partitioned form
```
###### A =

###### [

###### A 11 A 12

###### A 21 A 22

###### ]

###### .

```
Then letting B = A −^1 , we have B 12 = A − 111 A 12
```
###### [

###### A 21 A − 111 A 12 − A 22

###### ]− 1

```
(Horn and Johnson 1985, for example).
```
Ex. 9.5 Consider the neighborhood-based likelihood approach for selection of
Ising models.

```
(a) Derive the conditional distributionP( xs | xV \{ s }; θ ), and show how the
neighborhood-prediction reduces to logistic regression.
(b) Verify that the method is Fisher-consistent, meaning that the true con-
ditional distribution is the population minimizer.
```
Ex. 9.6 Here we show how, in expression (9.14), we can solve for **Θ** and its
inverse **W** = **Θ** −^1 one row and column at a time. For simplicity let’s focus on
the last row and column. Then the upper right block of Equation (9.14) can
be written as
**w** 12 − **s** 12 − _λ_ ·sign( **_θ_** 12 ) = 0_._ (9.37)

Here we have partitioned the matrices into two parts: part 1 being the first
_p_ −1 rows and columns, and part 2 the _pth_ row and column. With **W** and its
inverse **Θ** partitioned in a similar fashion
(
**W** 11 **w** 12
**w** _T_ 12 _w_ 22

###### )(

```
Θ 11 θ 12
θ T 12 θ 22
```
###### )

###### =

###### (

###### I 0

###### 0 T 1

###### )

###### , (9.38)

show that

```
w 12 = − W 11 θ 12 /θ 22 (9.39)
= W 11 β (9.40)
```
where **_β_** =− **_θ_** 12 _/θ_ 22. This is obtained from the formula for the inverse of a
partitioned inverse of a matrix (Horn and Johnson 1985, for example). Sub-
stituting (9.40) into (9.37) gives

```
W 11 β − s 12 + λ ·sign( β ) = 0. (9.41)
```
Ex. 9.7 With the partitioning as in (9.38), write down the expressions for the
partitioned inverses of each matrix in terms of the other. Show that since
**W** 11 depends on **_θ_** 12 , we are not really holding **W** 11 _fixed_ as assumed in the
graphical lasso Algorithm 9.1.

```
(a) Show that as an alternative we can write (9.37) as
```
```
Θ − 111 θ 12 w 22 + s 12 + λ sign( θ 12 ) = 0. (9.42)
```

###### 266 GRAPHS AND MODEL SELECTION

```
(b) Show how to use the solution θ 12 to update the current version of W and
Θ ̂in O ( p^2 ) operations.
(c) Likewise, show how to move to a new block of equations in O ( p^2 ) opera-
tions.
(d) You have derived a primal graphical lasso algorithm. Write it down in
algorithmic form, as in Algorithm 9.1
```
(Mazumder and Hastie 2012)

Ex. 9.8 Derive the conditional distributions (9.29) and (9.30) for the mixed
graphical model.

Ex. 9.9 Close inspection of the pairwise Markov random field model (9.28)
will show that it is overparametrized with respect to the discrete potentials
_ρsj_ and **_ψ_** _jr_. This exercise shows that this aliasing is resolved by the quadratic
penalties in the penalized pseudo-likelihood, in the form of “sum-to-zero” con-
straints familiar in regression and ANOVA modelling.
Consider the penalized pseudo log-likelihood (9.32), with _λ >_ 0.
(a) Since the _γs_ are not penalized, show that the solution ˆ _ρsj_ for any _s_ and
_j_ satisfies
∑ _Lj_

```
` =1
```
```
ρ ˆ sj [ ` ] = 0.
```
```
(b) Since the (diagonal) matrices ψ jj are not penalized, show that the solu-
tion ψ ˆ jr for any j 6 = r satisfies
```
```
∑ Lj
```
```
` =1
```
```
ψ ˆ jr [ `,m ] = 0 , m = 1 ,...,Lr ; (9.43)
```
```
∑ Lr
```
```
m =1
```
```
ψ ˆ jr [ `,m ] = 0 , ` = 1 ,...,Lj. (9.44)
```
Ex. 9.10 Consider the pairwise Markov random field model with only binary
discrete variables. This appears to be different from the Ising model, since
we have four parameters per edge. Use Exercise 9.9 to show that with the
quadratic constraints in (9.32), it is exactly equivalent to a lasso-penalized
pseudo log-likelihood for the Ising model.

Ex. 9.11 Consider the objective function (9.35) for the graphical model that al-
lows for latent variables. Defining a new variable **R** = **Θ** − **L** , derive the details
of the steps of an ADMM algorithm for solving (9.35) using the augmented
Lagrangian

_Lμ_ ( **R** _,_ **Θ** 0 _,_ **L** _,_ **Γ** ) = trace( **SR** )−log det **R** + _λ_ ‖ **Θ** ‖ 1 + _β_ ·trace( **L** )

```
+ I ( L  0 )−trace[ Γ ( R − Θ + L )] +
```
###### 1

```
2 μ
```
###### ‖ R − Θ + L ‖^2 F


###### EXERCISES 267

successively over **R** _,_ **Θ** _,_ **L** and **Γ** (Ma et al. 2013).



```
Chapter 10
```
## Signal Approximation and Compressed

## Sensing

### 10.1 Introduction

In this chapter, we discuss applications of _`_ 1 -based relaxation to problems of
signal recovery and approximation. Our focus is the role played by sparsity
in signal representation and approximation, and the use of _`_ 1 -methods for
exploiting this sparsity for solving problems like signal denoising, compression,
and approximation. We begin by illustrating that many classes of “natural”
signals are sparse when represented in suitable bases, such as those afforded
by wavelets and other multiscale transforms. We illustrate how such sparsity
can be exploited for compression and denoising in orthogonal bases. Next
we discuss the problem of signal approximation in overcomplete bases, and
the role of _`_ 1 -relaxation in finding near-optimal approximations. Finally, we
discuss the method of compressed sensing for recovering sparse signals. It
is a combination of two ideas: taking measurements of signals via random
projections, and solving a lasso-type problem for reconstruction.

### 10.2 Signals and Sparse Representations

Let us begin by providing some background on the role of sparse representa-
tions in signal processing. To be clear, our use of the term “signal” is general,
including (among other examples) data such as sea water levels, seismic record-
ings, medical time series, audio recordings, photographic images, video data,
and financial data. In all cases, we represent the signal by a vector _θ_ ∗∈R _p_.
(For two-dimensional signals such as images, the reader should think about a
vectorized form of the image.)

#### 10.2.1 Orthogonal Bases

In signal processing, it is frequently useful to represent signals in different
types of bases. Examples include Fourier representations, useful for extract-
ing periodic structure in time series, and multiscale representations such
as wavelets. Such representations are described by a collection of vectors

```
269
```

###### 270 SIGNAL APPROXIMATION AND COMPRESSED SENSING

{ _ψj_ } _pj_ =1that form an orthonormal basis ofR _p_. If we define the _p_ × _p_ ma-
trix **Ψ** : =

###### [

```
ψ 1 ψ 2 ... ψp
```
###### ]

```
, then the orthonormality condition guarantees
```
that **Ψ** _T_ **Ψ** = _Ip_ × _p_. Given an orthonormal basis, any signal _θ_ ∗∈R _p_ can be
expanded in the form

```
θ ∗: =
```
```
∑ p
```
```
j =1
```
```
β ∗ jψj, (10.1)
```
where the _jthbasis coefficientβj_ ∗: =〈 _θ_ ∗ _, ψj_ 〉=

∑ _p
i_ =1 _θ_
∗
_iψij_ is obtained by
projecting the signal onto the _jth_ basis vector _ψj_. Equivalently, we can write
the transformation from signal _θ_ ∗∈R _p_ to basis coefficient vector _β_ ∗∈R _p_ as
the matrix-vector product _β_ ∗= **Ψ** _Tθ_ ∗.

```
20
```
```
60
```
```
100
```
```
Time
```
```
Arterial Pressure
```
```
Original
```
```
1 31 64 96 128
```
```
20
```
```
60
```
```
100
```
```
Time
```
```
Arterial Pressure
```
```
Reconstructed
```
```
1 31 64 96 128
```
```
−60
```
```
−40
```
```
−20
```
```
0
```
```
20
```
```
40
```
```
60
```
```
Index
```
```
Wavelet Coefficient
```
```
Haar Representation
```
```
1 31 64 96 128
```
**Figure 10.1** _Il lustration of sparsity in time series data. Left, top panel: Signal
θ_ ∗∈R _pof arterial pressure versus time overp_ = 128 _points. Left, bottom panel:
Reconstruction_ ̂ _θ_^128 _based on retaining the largest (in absolute amplitude)k_ = 64
_coefficients from the Haar basis. Right: Haar basis coefficientsβ_ ∗= **Ψ** _Tθ_ ∗ _of the
signal._

```
To give a simple example, consider the following matrix
```
###### Ψ : =

###### 

###### 

###### 

###### 

###### 

```
1
2
```
```
1
2
√^1
1 2 0
2
```
```
1
2
√−^1
1 2 0
2 −
```
```
1
2 0
√^1
2
1
2 −
```
```
1
2 0
```
```
−√ 1
2
```
###### 

###### 

###### 

###### 

###### 

###### . (10.2)

It is an orthonormal matrix, satisfying **Ψ** _T_ **Ψ** = **I** 4 × 4 , and corresponds to a
two-level Haar transform for signal length _p_ = 4. For any given signal _θ_ ∗∈R^4 ,
the Haar basis coefficients _β_ ∗= **Ψ** _Tθ_ ∗have a natural interpretation. The first


###### SIGNALS AND SPARSE REPRESENTATIONS 271

coefficient _β_ 1 ∗ = 〈 _ψ_ 1 _, θ_ ∗〉=^12

###### ∑ 4

```
j =1 θ
```
∗
_j_ is a rescaled version of the averaged
signal. The second column _ψ_ 2 is a differencing operator on the full signal,
whereas the third and fourth columns are local differencing operators on each
half of the signal. This Haar transform is the simplest example of a wavelet
transform.
An important fact is that many signal classes, while not sparse in the
canonical basis, become sparse when represented in a different orthogonal
basis. Figure 10.1 provides an illustration of this phenomenon for some medical
time series data. The top-left panel shows _p_ = 128 samples of arterial pressure
from a patient, showing that the signal _θ_ ∗itself is not at all sparse. The right
panel shows the Haar coefficient representation _β_ ∗= **Ψ** _Tθ_ ∗of the signal; note
how in contrast it is relatively sparse. Finally, the bottom-left panel shows a
reconstruction̂ _θ_ of the original signal, based on discarding half of the Haar
coefficients. Although not a perfect reconstruction, it captures the dominant
features of the time series.
Figure 10.2 provides a second illustration of this sparsity phenomenon, this
time for the class of photographic images and two-dimensional wavelet trans-
forms. Panel (a) shows a 512×512 portion of the “Boats” image; in our frame-
work, we view this two-dimensional image as a vector in _p_ = 512^2 = 262 _,_ 144
dimensions. Shown in panel (b) is the form of a particular two-dimensional
wavelet; as can be discerned from the shape, it is designed to extract diago-
nally oriented structure at a particular scale. Taking inner products with this
wavelet over all spatial positions of the image (a procedure known as con-
volution) yields a collection of wavelet coefficients at all spatial positions of
the image. These coefficients are then sub-sampled, depending on the scale
of the wavelet. Then we reconstruct the image from these coefficients. Doing
so at multiple scales (three in this illustration) and orientations (four in this
illustration) yields the multiscale pyramid shown in panel (c). Once again,
although the original image is not a sparse signal, its representation in this
multiscale basis is very sparse, with many coefficients either zero or very close
to zero. As a demonstration of this sparsity, panel (d) shows a histogram of
one of the wavelet coefficients, obtained by pooling its values over all spatial
positions of the image. This histogram is plotted on the log scale, and the
sharp peak around zero reveals the sparsity of the coefficient distribution.

#### 10.2.2 Approximation in Orthogonal Bases

The goal of signal compression is to represent the signal _θ_ ∗∈R _p_ , typically in
an approximate manner, using some number _k_  _p_ of coefficients much smaller
than the ambient dimension. In the setting of orthogonal bases, one method
for doing so is based on using only a sparse subset of the orthogonal vectors
{ _ψj_ } _pj_ =1. In particular, for an integer _k_ ∈ { 1 _,_ 2 _,...,p_ }that characterizes the


###### 272 SIGNAL APPROXIMATION AND COMPRESSED SENSING

```
(a) (b)
```
```
−500 0 500
```
```
−10
```
```
−8
```
```
−6
```
```
−4
```
```
−2
```
```
Log Probability
```
```
(c) (d)
```
**Figure 10.2** _Sparsity in wavelet-based representations of natural images. (a)
“Boats” image. (b) Basis vector of a multiscale pyramid transform, drawn here as
a 2-dimensional image. (c) Three levels of a multiscale representation of “Boats”
image with four different orientations at each scale. (d) Log histogram of the am-
plitudes of a wavelet coefficient from a fixed scale and orientation, pooled over all
pixels within the image. Note that the majority of coefficients are close to zero, with
relatively few large in absolute value._

approximation accuracy, let us consider reconstructions of the form

```
Ψ β =
```
```
∑ p
```
```
j =1
```
```
βjψj, such that‖ β ‖ 0 : =
```
```
∑ p
j =1I[ βj^6 = 0] ≤ k. (10.3)
```
Here we have introduced the _`_ 0 -“norm,” which simply counts the number of
nonzero elements in the vector _β_ ∈R _p_. We then consider the problem of


###### SIGNALS AND SPARSE REPRESENTATIONS 273

```
(a) (b)
```
**Figure 10.3** _Il lustration of image compression based on wavelet thresholding. (a)
Zoomed portion of the original “Boats” image from Figure 10.2(a). (b) Reconstruc-
tion based on retaining 5% of the wavelet coefficients largest in absolute magnitude.
Note that the distortion is quite smal l, and concentrated mainly on the fine-scale
features of the image._

optimal _k_ -sparse approximation—namely, to compute

```
β ̂ k ∈arg min
β ∈R p
```
```
‖ θ ∗− Ψ β ‖^22 such that‖ β ‖ 0 ≤ k. (10.4)
```
Given the optimal solution _β_ ̂ _k_ of this problem, the reconstruction

```
θk : =
```
```
∑ p
```
```
j =1
```
```
β ̂ k
jψj (10.5)
```
defines the best least-squares approximation to _θ_ ∗based on _k_ terms. Fig-
ure 10.3 illustrates the idea.
Note that the problem (10.4) is nonconvex and combinatorial, due to the
_`_ 0 -norm constraint. Despite this fact, it is actually very easy to solve in this
particular case, essentially due to the structure afforded by orthonormal trans-
forms. In particular, suppose that we order the vector _β_ ∗∈R _p_ of basis coef-
ficients in terms of their absolute values, thereby defining the order statistics

```
| β ∗(1)|≥| β ∗(2)|≥ ... ≥| β ∗( p )|. (10.6)
```
Then for any given integer _k_ ∈{ 1 _,_ 2 _,...,p_ }, it can be shown that the optimal
_k_ -term approximation is given by

```
θ ̂ k : =
```
```
∑ k
```
```
j =1
```
```
β (∗ j ) ψσ ( j ) , (10.7)
```

###### 274 SIGNAL APPROXIMATION AND COMPRESSED SENSING

```
where σ ( j ) denotes the basis vector associated with the jth order statistic. In
words, we retain only the basis vectors associated with the largest k coefficients
in absolute value.
In summary, then, we have the following simple algorithm for computing
optimal k -term approximations in an orthogonal basis:
```
1. Compute the basis coefficients _βj_ ∗=〈 _θ_ ∗ _, ψj_ 〉for _j_ = 1 _,_ 2 _,...,p_. In matrix-

```
vector notation, compute the vector β ∗= Ψ Tθ ∗.
```
2. Sort the coefficients in terms of absolute values as in (10.6), and extract
    the top _k_ coefficients.
3. Compute the best _k_ -term approximation̂ _θk_ as in (10.7).

```
For any orthogonal basis, the computational complexity of this procedure is at
mostO( p^2 ), with theO( p log p ) complexity of sorting in step 2 dominated by
the complexity of computing the basis coefficients in step 1. An attractive fea-
ture of many orthogonal representations, including Fourier bases and discrete
wavelets, is that the basis coefficients can be computed in timeO( p log p ).
As discussed previously, Figure 10.1 provides one illustration of signal ap-
proximation within the Haar wavelet basis. In particular, the bottom-left panel
shows the approximated signal̂ θ^64 , based on retaining only half of the Haar
wavelet coefficients ( k/p = 64 / 128 = 0. 5).
```
#### 10.2.3 Reconstruction in Overcomplete Bases

```
Orthonormal bases, though useful in many ways, have a number of short-
comings. In particular, there is a limited class of signals that have sparse
representations in any given orthonormal basis. For instance, Fourier bases
are particularly well-suited to reconstructing signals with a globally periodic
structure; in contrast, the Haar basis with its localized basis vectors is rather
poor at capturing this kind of structure. On the other hand, the Haar basis ex-
cels at capturing step discontinuities, whereas such jumps have very nonsparse
representations in the Fourier basis.
Based on this intuition, it is relatively straightforward to construct signals
that are in some sense “simple,” but fail to have sparse representations in a
classical orthonormal basis. As an illustration, panel (a) of Figure 10.4 shows
a signal θ ∗∈R^128 that contains a mixture of both some globally periodic
components, and some rapid (nearly discontinuous) transitions. As shown in
panel (b), its Haar coefficients β ∗= Ψ Tθ ∗are relatively dense, because many
basis vectors are required to reconstruct the globally periodic portion of the
signal. Similarly, as shown in panel (c), its representation α ∗= Φ Tθ ∗in the
discrete cosine basis (a type of Fourier representation) is also relatively dense.
Due to this lack of sparsity, neither basis alone will provide a good sparse
approximation to the original signal.
However, suppose that we allow the reconstruction to use subsets of vectors
from both bases simultaneously; in this case, it might be possible to obtain a
significantly more accurate, or even exact, sparse approximation. To set up
```

###### SIGNALS AND SPARSE REPRESENTATIONS 275

```
Index
```
```
Signal
```
```
1 16 32 48 64 80 96 112 128
−0.05
```
```
0.05
```
```
0.15
```
```
0.25
```
```
(a) Mixed Signal
```
```
0.0 0.1 0.2 0.3 0.4 0.5
```
```
Index
```
```
Wavelet Coefficient
```
```
1 16 32 48 64 80 96 112 128
```
```
(b) Representation in Haar Basis
```
```
−0.2
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
Index
```
```
Wavelet Coefficient
```
```
1 16 32 48 64 80 96 112 128
```
```
(c) Representation in Cosine Basis
```
```
0.0
```
```
0.1
```
```
0.2
```
```
0.3
```
```
0.4
```
```
0.5
```
```
Index
```
```
Coefficient
```
```
1 32 64 96 128 160 192 224 256
```
```
Haar
Cosine
```
```
(d) Optimal Joint Representation
```
**Figure 10.4** _(a) Original signalθ_ ∗∈R _pwithp_ = 128_. (b) Representation_ **Ψ** _Tθ_ ∗ _in
the Haar basis. (c) Representation_ **Φ** _Tθ_ ∗ _in the discrete cosine basis. (d) Coefficients_
( _α,_ ̂ _β_ ̂)∈R _p_ ×R _pof the optimal ly sparse joint representation obtained by solving basis
pursuit linear program_ (10.11)_._

the problem more precisely, given a pair of orthonormal bases{ _ψj_ } _pj_ =1and
{ _φj_ } _pj_ =1, let us consider reconstructions of the form

```
∑ p
```
```
j =1
```
```
αjφj
︸ ︷︷ ︸
Φ α
```
###### +

```
∑ p
```
```
j =1
```
```
βjψj
︸ ︷︷ ︸
Ψ β
```
```
such that‖ α ‖ 0 +‖ β ‖ 0 ≤ k , (10.8)
```
and the associated optimization problem

```
minimize
( α,β )∈R p ×R p
```
```
‖ θ ∗− Φ α − Ψ β ‖^22 such that‖ α ‖ 0 +‖ β ‖ 0 ≤ k. (10.9)
```
Despite its superficial similarity to our earlier _k_ -term approximation prob-
lem (10.5), the optimization problem (10.9) is actually very difficult to solve.
Unlike the earlier case, we are now working in an _overcomplete basis_ described
by the union of the two bases **Φ** and **Ψ**.


###### 276 SIGNAL APPROXIMATION AND COMPRESSED SENSING

Nonetheless, we can resort to our usual relaxation of the _`_ 0 -“norm,” and
consider the following convex program

```
minimize
( α,β )∈R p ×R p
‖ θ ∗− Φ α − Ψ β ‖^22 such that‖ α ‖ 1 +‖ β ‖ 1 ≤ R , (10.10)
```
where _R >_ 0 is a user-defined radius. This program is a constrained version
of the lasso program, also referred to as the relaxed basis-pursuit program.
When seeking a perfect reconstruction, we can also consider the even simpler
problem

```
minimize
( α,β )∈R p ×R p
```
```
‖ α ‖ 1 +‖ β ‖ 1 such that θ ∗=
```
###### [

###### Φ Ψ

###### ]

###### [

```
α
β
```
###### ]

###### . (10.11)

This problem is a linear program (LP), often referred to as the basis-pursuit
linear program.
Returning to the example discussed in Figure 10.4, panel (d) shows the

optimal coefficients (̂ _α,β_ ̂)∈R _p_ ×R _p_ obtained by solving the basis pursuit
LP (10.11). We thus find that the original signal in panel (a) can be generated
by an extremely sparse combination, with only six nonzero coefficients, in
the overcomplete basis formed by combining the Haar and discrete cosine
representations. In fact, this is the sparsest possible representation of the
signal, so that in this case, solving the basis pursuit LP (10.11) is equivalent
to solving the _`_ 0 -constrained problem (10.9).
Naturally, the reader might wonder about the generality of this
phenomenon—namely, when does the solution to the basis pursuit LP co-
incide with the computationally difficult _`_ 0 -problem (10.9)? As it turns out,
the answer to this question depends on the degree of incoherence between the
two bases **Φ** and **Ψ** , as we explore at more length in Section 10.4.

### 10.3 Random Projection and Approximation

In the previous sections, we discussed approximating a signal by computing
its projection onto each of a fixed set of basis functions. We now turn to
the use of random projections in signal approximation. This allows one to
use a smaller number of (random) basis functions than is required under a
fixed basis. We will combine this with an _`_ 1 -penalty on the coefficient of each
projection, leading to the idea of _compressed sensing_.
A random projection of a signal _θ_ ∗is a measurement of the form

```
yi =〈 zi, θ ∗〉=
```
```
∑ p
```
```
j =1
```
```
zijθ ∗ j, (10.12)
```
where _zi_ ∈R _p_ is a random vector. The idea of using random projections for
dimensionality reduction and approximation is an old one, dating back (at
least) to classical work on metric embedding and spherical sections of convex


###### RANDOM PROJECTION AND APPROXIMATION 277

bodies (see the bibliographic section for more details). We begin by describ-
ing a classical use of random projection, namely for embedding data while
preserving distances between points, and then move on to discuss compressed
sensing, which combines random projections with _`_ 1 -relaxation.

#### 10.3.1 Johnson–Lindenstrauss Approximation

As one application of random projection, let us consider how they can be used
to approximate a finite collection of vectors, say representing some dataset.
The technique that we describe is often known as Johnson–Lindenstrauss em-
bedding, based on the authors who pioneered its use in studying the more
general problem of metric embedding (see the bibliographic section for more
details). Suppose that we are given _M_ data points{ _u_ 1 _,...,uM_ }lying inR _p_.
If the data dimension _p_ is large, then it might be too expensive to store the
dataset. In this setting, one approach is to design a dimension-reducing map-
ping _F_ :R _p_ →R _N_ with _N_  _p_ that preserves some “essential” features of the
dataset, and then store only the projected dataset{ _F_ ( _u_ 1 ) _,...,F_ ( _uM_ )}. For
example, since many algorithms operate on datasets by computing pairwise
distances, we might be interested in a mapping _F_ with the guarantee that for
some tolerance _δ_ ∈(0 _,_ 1), we have

(1− _δ_ )‖ _ui_ − _ui_ ′‖^22 ≤‖ _F_ ( _ui_ )− _F_ ( _ui_ ′)‖^22 ≤(1+ _δ_ )‖ _ui_ − _ui_ ′‖^22 for all pairs _i_ 6 = _i_ ′.
(10.13)
Of course, this is always possible if the projected dimension _N_ is large enough,
but the goal is to do it with relatively small _N_.
As shown in the seminal work of Johnson and Lindenstrauss, random
projections provide one method for designing such approximate distance-
preserving embeddings. The construction is straightforward:

(a) Form a random matrix **Z** ∈R _N_ × _p_ with each _Zij_ ∼ _N_ (0 _,_ 1), i.i.d., and
define the linear mapping _F_ :R _p_ →R _N_ via

```
F ( u ) : =
```
###### 1

###### √

###### N

```
Z u. (10.14)
```
(b) Compute the projected dataset{ _F_ ( _u_ 1 ) _,F_ ( _u_ 2 ) _,...,F_ ( _uM_ )}.

An interesting question is the following: for a given tolerance _δ_ ∈(0 _,_ 1) and
number of data points _M_ , how large should we choose the projected dimension
_N_ to ensure that approximate distance-preserving property (10.13) holds with
high probability? In Exercises 10.1 and 10.2, we show that this property holds
with high probability as long as _N >δc_ 2 log _M_ for some universal constant _c_.
Thus, the dependence on the number _M_ of data points scales logarithmically,
and hence is very mild.

As a particular example, suppose that our goal is to obtain a compressed
representation of all Boolean vectors _u_ ∈ {− 1 _,_ 0 _,_ 1 } _p_ that are _k_ -sparse.^1 By

(^1) A vector _u_ ∈R _p_ is _k_ -sparse if only _k_ ≤ _p_ elements are nonzero.


###### 278 SIGNAL APPROXIMATION AND COMPRESSED SENSING

a simple counting argument, there are _M_ = 2 _k_

```
( p
k
```
###### )

```
such vectors. Noting that
```
log _M_ ≤ _k_ log

( _e_ (^2) _p
k_

###### )

```
, we see that a projection dimension N >δc 2 k log
```
( _e_ (^2) _p
k_

###### )

suffices to preserve pairwise distances up to _δ_ -accuracy between all _k_ -sparse
Boolean vectors. This example provides a natural segue to the method of
compressed sensing, which combines random projections with _`_ 1 -relaxation.

#### 10.3.2 Compressed Sensing

Compressed sensing is a combination of random projection and _`_ 1 -regular-
ization that was introduced in independent work by Candes and Tao (2005)
and Donoho (2006); since this pioneering work, an extensive literature on the
topic has developed, with numerous applications including medical imaging
and single-pixel cameras, among others. In this section, we provide a brief
introduction to the basic ideas.
The motivation for compressed sensing is the inherent wastefulness of the
standard method for compressing signals in an orthogonal basis. As described
in Section 10.2.2, this approach involves first computing the full vector _β_ ∗∈R _p_
of basis coefficients (step 1 on page 274), and then discarding a large fraction of
them in order to obtain the _k_ -sparse approximation _θ_ ̂ _k_ of the underlying signal
_θ_ ∗(step 2). Given that we end up discarding most of the basis coefficients,
is it really necessary to compute all of them? Of course, if one knew _a priori_
which subset of _k_ coefficients were to be retained for the sparse approximation
_θ_ ̂ _k_ , then one could simply compute this subset of basis coefficients. We refer
to this approach as the oracle technique. Of course, it is unimplementable in
practice, since we don’t know _a priori_ which coefficients are the most relevant
for a given signal.
The power of compressed sensing is that it enables one to mimic the behav-
ior of the oracle with very little computational overhead. It combines random
projection with _`_ 1 -minimization in the following way. Instead of pre-computing
all of the basis coefficients _β_ ∗= **Ψ** _Tθ_ ∗, suppose that we compute some number
_N_ of random projections, say of the form _yi_ =〈 _zi, θ_ ∗〉, for _i_ = 1 _,_ 2 _,...,N_. We
are free to choose the form of the random projection vectors _zi_ ∈R _p_ , and we
discuss a number of reasonable choices shortly.
Thus, the setup of our problem is as follows: we are given an _N_ -vector **y**
of random projections of the signal _θ_ ∗. Also known to us is the _N_ × _p_ random
matrix **Z** with _ith_ row _zi_ , used to compute the random projections; we refer
to **Z** as the _design matrix_ or measurement matrix. The observation vector **y**
and design matrix **Z** are linked to the unknown signal _θ_ ∗∈R _N_ by the matrix-
vector equation **y** = **Z** _θ_ ∗, and our goal is to recover (exactly or approximately)
the signal _θ_ ∗∈R _p_. See Figure 10.5(a) for an illustration of this setup.
At first sight, the problem seems very simple, since determining _θ_ ∗amounts
to solving a linear system. However, for this method to be cheaper than the
standard approach (and therefore of practical interest), it is essential that the
number of projections (or sample size) _N_ be much smaller than the ambient
dimension _p_. For this reason, the linear system **y** = **Z** _θ_ ∗is highly under-


###### RANDOM PROJECTION AND APPROXIMATION 279

=

```
y
```
```
N×p
```
```
Z θ∗
```
```
(a)
```
=

```
y
```
```
N×p
```
```
Z Ψ β∗
```
```
p−k
```
```
k
```
```
(b)
```
**Figure 10.5** _(a) An under-determined linear system_ **y** = **Z** _θ_ ∗ _: Each rowziof the
N_ × _pmeasurement matrix_ **Z** _defines the random projectionyi_ =〈 _zi, θ_ ∗〉_. The signal
θ_ ∗∈R _pneed not be sparse in the canonical basis. (b) Equivalent representation of
the linear system: Basis coefficientsβ_ ∗= **Ψ** _Tθ_ ∗ _are assumed to bek-sparse. This
transformation defines an equivalent linear system_ **y** = **Z** ̃ _β_ ∗ _with sparsity that can
be exploited._

determined: there are many signals _θ_ that are consistent with the observed
random projections.
However, if we also have the additional side-information that **Ψ** _Tθ_ ∗is
sparse, then it could be possible to recover _θ_ ∗exactly, even though the linear
system on its own is under-determined. In an ideal world, we would like to
exploit this sparsity by solving the _`_ 0 -based problem

```
minimize
θ ∈R p
‖ Ψ Tθ ‖ 0 such that y = Z θ. (10.15)
```
The _`_ 0 -problem is combinatorial, and known to be computationally intractable
(NP-hard) in general; thus, we are led to consider the _`_ 1 -relaxation

```
minimize
θ ∈R p
```
```
‖ Ψ Tθ ‖ 1 such that y = Z θ. (10.16)
```
Equivalently, we can write this problem in terms of the transform coefficient
vector _β_ ∈R _p_ , namely as

```
minimize
β ∈R p
‖ β ‖ 1 such that y = Z ̃ β , (10.17)
```

###### 280 SIGNAL APPROXIMATION AND COMPRESSED SENSING

```
where we have defined the transformed matrix ̃ Z : = ZΨ ∈R N × p. See Fig-
ure 10.5(b) for an illustration of this transformed linear system.
In summary, then, the method of compressed sensing operates as follows:
```
1. For a given sample size _N_ , compute the random projections _yi_ =〈 _zi, θ_ ∗〉
    for _i_ = 1 _,_ 2 _,...,N_.
2. Estimate the signal _θ_ ∗ by solving the linear program (10.16) to obtain

```
θ ̂. (Equivalently, solve the linear program (10.17) to obtain β ̂, and set
θ ̂= Ψ β ̂.)
To be clear, we have actually described a family of procedures, depending
on our choice of the random projection vectors{ zi } Ni =1, or equivalently the
transformed design matrix Z. A variety of different design matrices Z have
been studied for the purposes of compressed sensing. Perhaps the simplest
choice is to choose its entries zij ∼ N (0 , 1) in an i.i.d. manner, leading to a
standard Gaussian random matrix. Other choices of matrices for compressed
sensing include random Bernoulli matrices formed with i.i.d. entries drawn
as zij ∈ {− 1 , +1}with equal probability, as well as random submatrices of
Fourier matrices.
When can compressed sensing succeed using a number of projections N less
than the signal dimension p? As we discuss in Section 10.4.2, it is sufficient that
the columns of the transformed design matrix Z ̃be “incoherent”, and there are
different measures of such incoherence. The simplest measure of incoherence
is pairwise, based on the inner products between the columns of Z ̃. A more
sophisticated notion of incoherence is the restricted isometry property (RIP),
based on looking on the conditioning of submatrices of ̃ Z consisting of up to
k columns. An important fact is that the random design matrices discussed
above satisfy RIP with high probability using a relatively small number of
projections N. For instance, for the standard Gaussian or Bernoulli cases,
it can be shown that RIP holds with high probability with as few as N =
Ω
```
###### (

```
k log pk
```
###### )

```
samples, where k < p is the sparsity of the basis coefficient vector
β ∗. Note that any method—even the unimplementable oracle that already
knew the support of β ∗—would require at least N = k random projections for
exact recovery. Thus, compressed sensing incurs a multiplicative overhead of
onlyO
```
###### (

```
log( p/k )
```
###### )

```
relative to oracle performance.
```
### 10.4 Equivalence between ` 0 and ` 1 Recovery

```
Thus far, we have discussed a number of applications of ` 1 -norm regular-
ization in signal processing, including sparse approximation in overcomplete
bases (Section 10.2.3), and compressed sensing (Section 10.3.2). In both cases,
the ` 1 -norm is introduced as a computationally tractable surrogate to opti-
mization problems involving the intractable ` 0 -“norm.” Up to this point, we
have not addressed in any depth an important question: when is solving the
` 1 -relaxation equivalent to solving the original ` 0 -problem?
More precisely, given an observation vector y ∈R p and a design matrix
```

###### EQUIVALENCE BETWEEN ` 0 AND ` 1 RECOVERY 281

**X** ∈R _N_ × _p_ , let us consider the two problems

```
minimize
β ∈R p
‖ β ‖ 0 such that X β = y , (10.18)
```
and
minimize
_β_ ∈R _p_

```
‖ β ‖ 1 such that X β = y. (10.19)
```
This setup includes as a special case the problem of sparse approximation in
an overcomplete basis, as discussed in Section 10.2.3; in this case, the obser-
vation **y** is equal to the signal _θ_ ∗to be approximated, and the design matrix
**X** =

###### [

###### Φ Ψ

###### ]

. It also includes the case of compressed sensing, where **X** is the

transformed version of the random projection matrix (namely, **Z** ̃in our earlier
notation).

#### 10.4.1 Restricted Nullspace Property

Suppose that the _`_ 0 -based problem (10.18) has a unique optimal solution, say
_β_ ∗∈R _p_. Our interest is in understanding when _β_ ∗is also the unique optimal
solution of the _`_ 1 -based problem (10.19), in which case we say that the basis
pursuit LP is _equivalent_ to _`_ 0 -recovery. Remarkably, there exists a very simple
necessary and sufficient condition on the design matrix **X** for this equivalence
to hold. For a given subset _S_ ⊆{ 1 _,_ 2 _,...,p_ }, it is stated in terms of the set

```
C( S ) : =
```
###### {

```
β ∈R p | ‖ βSc ‖ 1 ≤‖ βS ‖ 1
```
###### }

###### . (10.20)

The setC( _S_ ) is a cone, containing all vectors that are supported on _S_ , and
other vectors as well. Roughly, it corresponds to the cone of vectors that have
most of their mass allocated to _S_. Given a matrix **X** ∈R _N_ × _p_ , its nullspace is
given by null( **X** ) =

###### {

```
β ∈R p | X β = 0
```
###### }

###### .

_Definition 10.1. Restricted nul lspace property._ For a given subset _S_ ⊆
{ 1 _,_ 2 _,...,p_ }, we say that the design matrix **X** ∈R _N_ × _p_ satisfies the _restricted
nul lspace property_ over _S_ , denoted by RN( _S_ ), if

```
null( X )∩C( S ) ={ 0 }. (10.21)
```
In words, the RN( _S_ ) property holds when the only element of the coneC( _S_ )
that lies within the nullspace of **X** is the all-zeroes vector. The following
theorem highlights the significance of this property:

_Theorem 10.1.`_ 0 _and`_ 1 _equivalence._ Suppose that _β_ ∗ ∈R _p_ is the unique
solution to the _`_ 0 problem (10.18), and has support _S_. Then the basis pursuit
relaxation (10.19) has a unique solution equal to _β_ ∗if and only if **X** satisfies
the RN( _S_ ) property.

The proof of Theorem 10.1 is relatively short, and is provided in Sec-
tion 10.4.3.
Since the subset _S_ is not known in advance—indeed, it is usually what we


###### 282 SIGNAL APPROXIMATION AND COMPRESSED SENSING

are trying to determine—it is natural to seek matrices that satisfy a uniform
version of the restricted nullspace property. For instance, we say that the
uniform RN property of order _k_ holds if RN( _S_ ) holds for all subsets of size
at most _k_. In this case, we are guaranteed that the _`_ 1 -relaxation succeeds for
any vector supported on any subset of size at most _k_.

#### 10.4.2 Sufficient Conditions for Restricted Nullspace

Of course, in order for Theorem 10.1 to be useful in practice, we need to verify
the restricted nullspace property. A line of work has developed various con-
ditions for certifying the uniform RN property. The simplest and historically
earliest condition is based on the _pairwise incoherence_

```
ν ( X ) : = max
j,j ′=1 , 2 ,...,p
j 6 = j ′
```
```
|〈 x j, x j ′〉|
‖ x j ‖ 2 ‖ x j ′‖ 2
```
###### . (10.22)

For centered **x** _j_ this is the maximal absolute pairwise correlation. When **X**
is rescaled to have unit-norm columns, an equivalent representation is given
by _ν_ ( **X** ) = max _j_ 6 = _j_ ′|〈 **x** _j,_ **x** _j_ ′〉|, which illustrates that the pairwise incoherence
measures how close the Gram matrix **X** _T_ **X** is to the _p_ -dimensional identity
matrix in an element-wise sense.
The following result shows that having a low pairwise incoherence is suf-
ficient to guarantee exactness of the basis pursuit LP:

_Proposition 10.1. Pairwise incoherence implies_ RN_._ Suppose that for some in-
teger _k_ ∈{ 1 _,_ 2 _,...,p_ }, the pairwise incoherence satisfies the bound _ν_ ( **X** ) _<_ 31 _k_.
Then **X** satisfies the uniform RN property of order _k_ , and hence, the basis
pursuit LP is exact for all vectors with support at most _k_.

See Section 10.4.3 for the proof of this claim.
An attractive feature of the pairwise incoherence is that it is easily com-
puted; in particular, inO( _Np_^2 ) time. A disadvantage is that it provides very
conservative bounds that do not always capture the actual performance of
_`_ 1 -relaxation in practice. For instance, consider the matrix **X** =

###### [

###### Φ Ψ

###### ]

, as
arises in the overcomplete basis problem (10.11). We can numerically com-
pute the incoherence, say for the discrete cosine and Haar bases in dimension
_p_ = 128, as illustrated in Figure 10.4. We find that Proposition 10.1 guaran-
tees exact recovery of all signals with sparsity _k_ = 1, whereas in practice, the
_`_ 1 -relaxation works for much larger values of _k_.
For random design matrices, such as those that arise in compressed sens-
ing, one can use probabilistic methods to bound the incoherence. For instance,
consider a random matrix **X** ∈R _N_ × _p_ with i.i.d. _N_ (0 _,_ 1 _/N_ ) entries. Here we
have rescaled the variance so that the columns of **X** have expected norm equal

to one. For such a matrix, one can show that _ν_ ( **X** )-

###### √

log _p
N_ with high prob-
ability as ( _N,p_ ) tend to infinity (see Exercise 10.5). Combined with Proposi-
tion 10.1, we conclude that the _`_ 1 -relaxation (10.16) will exactly recover all


###### EQUIVALENCE BETWEEN ` 0 AND ` 1 RECOVERY 283

signals with sparsity at most _k_ as long as the number of projections scales as
_N_ % _k_^2 log _p_.
In fact, for random designs and compressed sensing, this scaling can be
sharpened using the _restricted isometry property_ (RIP). Recall that the in-
coherence condition (10.22) is a measure of the orthonormality of pairs of
columns of the design matrix **X**. The notion of restricted isometry is to con-
strain much larger submatrices of **X** to have nearly orthogonal columns.

_Definition 10.2. Restricted isometry property._ For a tolerance _δ_ ∈(0 _,_ 1) and
integer _k_ ∈{ 1 _,_ 2 _,...,p_ }, we say that RIP( _k,δ_ ) holds if

```
‖ X TS X S − I k × k ‖op≤ δ (10.23)
```
for all subsets _S_ ⊂{ 1 _,_ 2 _,...,p_ }of cardinality _k_.

We recall here that‖·‖opdenotes the operator norm, or maximal singular
value of a matrix. Due to the symmetry of **X** _TS_ **X** _S_ , we have the equivalent
representation

```
‖ X TS X S − I k × k ‖op= sup
‖ u ‖ 2 =1
```
###### ∣

```
∣∣ uT ( X T
S X S − I k × k
```
###### )

```
u
```
###### ∣

```
∣∣ = sup
‖ u ‖ 2 =1
```
###### ∣

###### ∣∣‖ X

```
Su ‖^22 −^1
```
###### ∣

###### ∣∣.

Thus, we see that RIP( _k,δ_ ) holds if and only if for all subsets _S_ of cardinality
_k_ , we have

```
‖ X Su ‖^22
‖ u ‖^22
```
```
∈[1− δ, 1 + δ ] for all u ∈R k \{ 0 },
```
hence the terminology of restricted isometry.
The following result shows that RIP is a sufficient condition for the re-
stricted nullspace to hold:

_Proposition 10.2. RIP implies restricted nul lspace._ If RIP(2 _k,δ_ ) holds with
_δ <_ 1 _/_ 3, then the uniform RN property of order _k_ holds, and hence the _`_ 1 -
relaxation is exact for all vectors supported on at most _k_ elements.

We work through the proof of a slightly weaker version of this claim in Ex-
ercise 10.8. Observe that the RIP(2 _k,δ_ ) condition imposes constraints on a
huge number of submatrices, namely

```
( p
2 k
```
###### )

in total. On the other hand, as op-
posed to the pairwise incoherence condition, the actual RIP constant _δ_ has no
dependence on _k_.
From known results in random matrix theory, various choices of ran-
dom projection matrices **X** satisfy RIP with high probability as long as
_N_ % _k_ log _epk_. Among other matrix ensembles, this statement applies to a stan-
dard Gaussian random matrix **X** with i.i.d. _N_ (0 _,N_^1 ) entries; see Exercise 10.6
for details. Thus, we see that the RIP-based approach provides a certificate for
exact recovery based on far fewer samples than pairwise incoherence, which
as previously discussed, provides guarantees when _N_ % _k_^2 log _p_. On the other
hand, a major drawback of RIP is that—in sharp contrast to the pairwise
incoherence—it is very difficult to verify in practice due to the number

```
( p
2 k
```
###### )

of submatrices.


###### 284 SIGNAL APPROXIMATION AND COMPRESSED SENSING

#### 10.4.3 Proofs

We conclude the chapter by providing proofs of the claims given in the pre-
ceding section.

##### 10.4.3.1 Proof of Theorem 10.1

First, suppose that **X** satisfies the RN( _S_ ) property. Let _β_ ̂∈R _p_ be any op-
timal solution to the basis pursuit LP (10.19), and define the error vector

∆ : = _β_ ̂− _β_ ∗. Our goal is to show that ∆ = 0, and in order to do so, it suffices
to show that ∆∈null( **X** )∩C( _S_ ). On the one hand, since _β_ ∗and _β_ ̂are optimal
(and hence feasible) solutions to the _`_ 0 and _`_ 1 problems, respectively, we are
guaranteed that **X** _β_ ∗= **y** = **X** _β_ ̂, showing that **X** ∆ = 0. On the other hand,
since _β_ ∗is also feasible for the _`_ 1 -based problem (10.19), the optimality of _β_ ̂
implies that‖ _β_ ̂‖ 1 ≤‖ _β_ ∗‖ 1 =‖ _βS_ ∗‖ 1. Writing _β_ ̂= _β_ ∗+ ∆, we have

```
‖ βS ∗‖ 1 ≥ ‖ β ̂‖ 1 =‖ β ∗ S + ∆ S ‖ 1 +‖∆ Sc ‖ 1
≥‖ β ∗ S ‖ 1 −‖∆ S ‖ 1 +‖∆ Sc ‖ 1 ,
```
where the final bound follows by triangle inequality. Rearranging terms, we
find that ∆∈C( _S_ ); since **X** satisfies the RN( _S_ ) condition by assumption, we
conclude that ∆ = 0 as required.
We lead the reader through a proof of the converse in Exercise 10.4.

##### 10.4.3.2 Proof of Proposition 10.1

We may assume without loss of generality (rescaling as needed) that‖ **x** _j_ ‖ 2 = 1
for all _j_ = 1 _,_ 2 _,...,p_. To simplify notation, let us assume an incoherence
condition of the form _ν_ ( **X** ) _<δk_ for some _δ >_ 0, and verify the sufficiency of
_δ_ = 1 _/_ 3 in the course of the argument.
For an arbitrary subset _S_ of cardinality _k_ , suppose that _β_ ∈C( _S_ )\{ 0 }. It
suffices to show that‖ **X** _β_ ‖^22 _>_ 0, and so we begin with the lower bound

```
‖ X β ‖^22 ≥‖ X SβS ‖^22 + 2 βTS X TS X ScβSc. (10.24)
```
On one hand, we have

```
2
```
###### ∣

```
∣ βST X TS X ScβSc
```
###### ∣

###### ∣≤ 2

###### ∑

```
i ∈ S
```
###### ∑

```
j ∈ Sc
```
```
| βi |·| βj |·|〈 x i, x j 〉|
```
```
( i )
≤ 2 ‖ βS ‖ 1 ‖ βSc ‖ 1 ν ( X )
( ii )
≤
```
```
2 δ ‖ βS ‖^21
k
( iii )
≤ 2 δ ‖ βS ‖^22 ,
```
where inequality (i) uses the definition (10.22) of the pairwise incoherence;


###### BIBLIOGRAPHIC NOTES 285

inequality (ii) exploits the assumed bound on _ν_ ( **X** ) combined with the fact
that _β_ ∈C( _S_ ); and inequality (iii) uses the fact that‖ _βS_ ‖^21 ≤ _k_ ‖ _βS_ ‖^22 , by
Cauchy–Schwarz, since the cardinality of _S_ is at most _k_. Consequently, we
have established that

```
‖ X β ‖^22 ≥‖ X SβS ‖^22 − 2 δ ‖ βS ‖^22. (10.25)
```
In order to complete the proof, it remains to lower bound‖ **X** _SβS_ ‖^22. Letting
‖·‖opdenote the operator norm (maximum singular value) of a matrix, we
have

```
‖ X TS X S − I k × k ‖op≤max
i ∈ S
```
###### ∑

```
j ∈ S \{ i }
```
```
|〈 xi, xj 〉| ≤ k
```
```
δ
k
= δ.
```
Consequently,‖ **X** _SβS_ ‖^22 ≥(1− _δ_ )‖ _βS_ ‖^22 , and combined with the bound (10.25),
we conclude that‖ **X** _β_ ‖^22 _>_ (1− 3 _δ_ )‖ _βS_ ‖^22 , so that _δ_ = 1 _/_ 3 is sufficient as
claimed.

### Bibliographic Notes

There is an extensive literature on the sparsity of images and other signal
classes when represented in wavelet and other multiscale bases (Field 1987,
Ruderman 1994, Wainwright, Simoncelli and Willsky 2001, Simoncelli 2005).
Sparse approximation in overcomplete bases is discussed in various pa-
pers (Donoho and Stark 1989, Chen et al. 1998, Donoho and Huo 2001, Elad
and Bruckstein 2002, Feuer and Nemirovski 2003). The multiscale basis il-
lustrated in Figure 10.2 is known as the steerable pyramid (Simoncelli and
Freeman 1995). Random projection is a widely used technique in computer
science and numerical linear algebra (Vempala 2004, Mahoney 2011, Pilanci
and Wainwright 2014, e.g.). Johnson and Lindenstrauss (1984) proved the
lemma that now bears their name in the context of establishing the existence
of metric embeddings, using random projection as a proof technique. Com-
pressed sensing was introduced independently by Cand`es, Romberg and Tao
(2006) and Donoho (2006). Lustig, Donoho, Santos and Pauly (2008) discuss
the applications of compressed sensing to medical imaging, whereas Cand`es
and Wakin (2008) discuss various applications in signal processing.
The restricted nullspace property is discussed in Donoho and Huo (2001),
Feuer and Nemirovski (2003), and Cohen, Dahmen and DeVore (2009). Var-
ious authors (Donoho and Huo 2001, Elad and Bruckstein 2002, Feuer and
Nemirovski 2003) have studied the pairwise incoherence of overcomplete bases
and other design matrices, as a sufficient condition for the restricted nullspace
property. Cand`es and Tao (2005) introduced the restricted isometry prop-
erty as a milder sufficient condition for the restricted nullspace property. For
random matrices with i.i.d. sub-Gaussian rows, it follows from a combination
of union bound and standard results in random matrix theory (Davidson and
Szarek 2001, Vershynin 2012) that a sample size _N > ck_ log

```
( ep
k
```
###### )

```
suffices to
```

###### 286 SIGNAL APPROXIMATION AND COMPRESSED SENSING

ensure that the RIP is satisfied with high probability. Baraniuk, Davenport,
DeVore and Wakin (2008) point out connections between the RIP and the
Johnson–Lindenstrauss lemma; see also Exercise 10.6 for some related cal-
culations. Krahmer and Ward (2011) establish a partial converse, showing
that restricted isometry can be used to establish Johnson–Lindenstrauss type
guarantees.

### Exercises

Ex. 10.1 _Chi-squared concentration._ If _Y_ 1 _,...,YN_ are i.i.dN(0 _,_ 1) variates,
then the variable _Z_ : =

###### ∑ N

_i_ =1 _Y_
2
_i_ has a chi-squared distribution with _N_ degrees
of freedom. (In short, we write _Z_ ∼ _χ_^2 _N_ .)

```
(a) Show that for all λ ∈[−∞ , 1 / 2), we have
```
```
E[exp( λ ( Z − d ))] =
```
```
[ e − λ
√
1 − 2 λ
```
###### ] N

###### . (10.26)

```
(b) Use the bound (10.26) to show that
```
###### P

###### [

```
| Z − N |≥ tN
```
###### ]

```
≤ 2 e −
```
```
Nt 322
for all t ∈(0 , 1 / 2). (10.27)
```
```
(The constants in this tail bound are not sharp, and can be improved.)
```
Ex. 10.2 _Johnson–Lindenstrauss approximation._ Recall from Section 10.3.1
the problem of distance-preserving embedding.

```
(a) Show that for any vector u with unit Euclidean norm, the random variable
N ‖ F ( u )‖^22 follows a χ^2 -squared distribution with N degrees of freedom.
(b) For any δ ∈(0 , 1), define the event
```
```
E( δ ) : =
```
###### {

```
‖ F ( ui )− F ( uj )‖^22
‖ ui − uj ‖^22
```
```
∈[1− δ, 1 + δ ] for all pairs i 6 = j.
```
###### }

###### .

```
Use the results of Exercise 10.1 and the union bound to show that
```
```
P
```
###### [

```
E( δ )]≥ 1 − 2 e − N.
```
```
as long as N >^64 δ 2 log M.
```
Ex. 10.3 For a given compact setA ⊂R _p_ , an __ -covering set is a subset
{ _u_ 1 _,...,uM_ }of elements ofAwith the property for any _u_ ∈A, there is some
index _j_ ∈{ 1 _,...,M_ }such that‖ _u_ − _uj_ ‖ 2 ≤ __. A __ -packing set is a subset
{ _v_^1 _,...,vM_

′
}of elements ofAsuch that such that‖ _vi_ − _vj_ ‖ 2 _> _ for all pairs
_i_ 6 = _j_ in{ 1 _,...,M_ ′}. We use _M_ ( __ ) to denote the size of the largest __ -packing,
and _N_ ( __ ) to denote the size of the smallest __ -covering.

```
(a) Show that M (2  )≤ N (  ).
```

###### EXERCISES 287

```
(b) Show that N (  )≤ M (  ).
(c) Consider the Euclidean ballB 2 (1) ={ u ∈R p | ‖ u ‖ 2 = 1}. For each
 ∈(0 , 1), show that there exists an  -covering set with at most M = ( c/ ) p
elements, for some universal constant c > 0. ( Hint: Use part (b) and consider
the volumes of Euclidean balls in p -dimensions.)
```
Ex. 10.4 In this exercise, we work through the proof of the converse of The-
orem 10.1, in particular showing that if the _`_ 1 -relaxation has a unique opti-
mal solution, equal to the _`_ 0 -solution, for all _S_ -sparse vectors, then the set
null( **X** )\{ 0 }has no intersection withC( _S_ ).

```
(a) For a given vector β ∗∈null( X )\{ 0 }, consider the basis-pursuit problem
```
```
minimize
β ∈R p
‖ β ‖ 1 such that X β = X
```
###### [

```
β ∗ S
0
```
###### ]

###### .

```
What is the link between its unique optimal solution β ̂and the vector
[
0
− β ∗ Sc
```
###### ]

###### ?

```
(b) Use part (a) to show that β ∗∈ / C( S ).
```
Ex. 10.5 Let **X** ∈R _N_ × _p_ be a random matrix with i.i.d.N

###### (

###### 0 , 1 /N

###### )

entries.
Show that it satisfies the pairwise incoherence condition (10.22) as long as
_N > ck_^2 log _p_ for a universal constant _c_. ( _Hint:_ The result of Exercise 10.1
may be useful.)

Ex. 10.6 Let **X** ∈R _N_ × _p_ be a random matrix with i.i.d.N

###### (

###### 0 , 1 /N

###### )

entries. In
this exercise, we show that the restricted isometry property (RIP) holds with
high probability as long as _N > ck_ log( _ep/k_ ) for a sufficiently large constant
_c >_ 0.

```
(a) Explain why it is sufficient to prove that there are constants c 1 ,c 2 such
that
‖ X TS X S − I 2 k × 2 k ‖op≤ t (10.28)
```
```
with probability at least 1− c 1 e − c^2 Nt
```
```
2
, for any fixed subset S of cardinality
2 k , and any t ∈(0 , 1).
(b) LetB 2 (1; S ) ={ u ∈R p | ‖ u ‖ 2 = 1 and uSc = 0}denote the inter-
section of the Euclidean ball with the subspace of vectors supported on a
given subset S. Let{ u 1 ,...,uM }be an  -covering of the setB 2 (1; S ), as
previously defined in Exercise 10.3. Show that the bound (10.28) is implied
by a bound of the form
```
```
max
j =1 ,...,M
```
###### ∣

```
∣‖ X uj ‖^22 − 1
```
###### ∣

###### ∣≤ ,

```
with probability at least 1− c 3 ec^4 N
2
, for any  ∈(0 , 1).
(c) Use part (b) and Exercise 10.3 to complete the proof.
```

###### 288 SIGNAL APPROXIMATION AND COMPRESSED SENSING

Ex. 10.7 _`_ 0 _and`_ 1 _-bal ls._ In this exercise, we consider the relationship between
_`_ 0 and _`_ 1 -balls, and prove a containment property related to the success of
_`_ 1 -relaxation. For an integer _r_ ∈{ 1 _,...,p_ }, consider the following two subsets:

```
L 0 ( r ) : =B 2 (1)∩B 0 ( r ) =
```
###### {

```
θ ∈R p | ‖ θ ‖ 2 ≤ 1 , and‖ θ ‖ 0 ≤ r
```
###### }

###### ,

```
L 1 ( r ) : =B 2 (1)∩B 1 (
```
###### √

```
r ) =
```
###### {

```
θ ∈R p | ‖ θ ‖ 2 ≤ 1 , and‖ θ ‖ 1 ≤
```
###### √

```
r
```
###### }

###### .

Letconv denote the closure of the convex hull (when applied to a set).

```
(a) Prove thatconv
```
###### (

```
L 0 ( r )
```
###### )

```
⊆L 1 ( r ).
(b) Prove thatL 1 ( r )⊆ 2 conv
```
###### (

```
L 0 ( r )
```
###### )

###### .

( _Hint:_ Part (b) is a more challenging problem: you may find it useful to con-
sider the support functions of the two sets. )

Ex. 10.8 In this exercise, we work through a proof of (a slightly weaker version
of) Proposition 10.2.

```
(a) For any subset S of cardinality k , the setC( S )∩B 2 (1) is contained within
the setL 1 ( r ) with r = 4 k.
(b) Now show that if RIP(8 k,δ ) holds with δ < 1 / 4, then the restricted
nullspace property holds. ( Hint: Part (b) of Exercise 10.7 could be useful.)
```

```
Chapter 11
```
## Theoretical Results for the Lasso

In this chapter, we turn our attention to some theoretical results concern-
ing the behavior of the lasso. We provide non-asymptotic bounds for the _`_ 2
and prediction error of the lasso, as well as its performance in recovering the
support set of the unknown regression vector.

### 11.1 Introduction

Consider the standard linear regression model in matrix-vector form

```
y = X β ∗+ w , (11.1)
```
where **X** ∈R _N_ × _p_ is the model (design) matrix, **w** ∈R _N_ is a vector of noise
variables, and _β_ ∗∈R _p_ is the unknown coefficient vector. In this chapter, we
develop some theoretical guarantees for both the constrained form of the lasso

```
minimize
‖ β ‖ 1 ≤ R
```
```
‖ y − X β ‖^22 , (11.2)
```
```
as well as for its Lagrangian version
```
```
minimize
β ∈R p
```
###### { 1

###### 2 N

```
‖ y − X β ‖^22 + λN ‖ β ‖ 1
```
###### }

###### . (11.3)

As we have discussed previously, by Lagrangian duality, there is a correspon-
dence between these two families of quadratic programs, where _λN_ can be in-
terpreted as the Lagrange multiplier associated with the constraint‖ _β_ ‖ 1 ≤ _R_.

#### 11.1.1 Types of Loss Functions

Given a lasso estimate _β_ ̂∈R _p_ , we can assess its quality in various ways. In
some settings, we are interested in the predictive performance of _β_ ̂, so that
we might compute a _prediction loss function_ of the form

```
Lpred( β ̂; β ∗) =
```
###### 1

###### N

```
‖ X β ̂− X β ∗‖^22 , (11.4)
```
```
289
```

###### 290 THEORETICAL RESULTS FOR THE LASSO

corresponding to the mean-squared error of _β_ ̂over the given samples of **X**. In
other applications—among them medical imaging, remote sensing, and com-
pressed sensing—the unknown vector _β_ ∗is of primary interest, so that it is
most appropriate to consider loss functions such as the _`_ 2 -error

```
L 2 ( β ̂; β ∗) =‖ β ̂− β ∗‖^22 , (11.5)
```
which we refer to as a _parameter estimation loss_. Finally, we might actually be
interested in variable selection or _support recovery_ , and so use the loss function

```
Lvs( β ̂; β ∗) =
```
###### {

```
0 if sign( β ̂ i ) = sign( β ∗ i ) for all i = 1 ,...,p,
1 otherwise.
```
###### (11.6)

This assesses whether or not the estimate _β_ ̂shares the same signed support as
_β_ ∗. In this chapter, we provide theoretical results for all three types of losses.

#### 11.1.2 Types of Sparsity Models

A classical analysis of a method such as the lasso would fix the number of
covariates _p_ , and then take the sample size _N_ to infinity. Although this type
of analysis is certainly useful in some regimes, there are many settings in
which the number of covariates _p_ may be of the same order, or substantially
larger than the sample size _N_. Examples include microarray gene expression
analysis, which might involve _N_ = 100 observations of _p_ = 10 _,_ 000 genes,
or social networks, in which one makes relatively few observations of a large
number of individuals. In such settings, it is doubtful whether theoretical
results based on “fixed _p_ , large _N_ ” scaling would provide useful guidance to
practitioners.
Accordingly, our aim in this chapter is to develop theory that is applicable
to the high-dimensional regime, meaning that it allows for the scaling _p_  _N_.
Of course, if the model lacks any additional structure, then there is no hope
of recovering useful information about a _p_ -dimensional vector with limited
samples. Indeed, whenever _N < p_ , the linear model (11.1) is unidentifiable;
for instance, it is impossible to distinguish between the models _β_ ∗= 0 and
_β_ ∗= ∆, where ∆∈R _p_ is any element of the _p_ − _N_ -dimensional nullspace of
**X**.
For this reason, it is necessary to impose additional constraints on the
unknown regression vector _β_ ∗∈R _p_ , and here we focus on various types of
sparsity constraints. The first setting is that of _hard sparsity_ , in which we as-
sume that _β_ ∗has at most _k_ ≤ _p_ nonzero entries. For such hard-sparse models,
it makes sense to consider the prediction and _`_ 2 -norm losses as well as the
variable selection loss (11.6). Assuming that the model is exactly supported
on _k_ coefficients may be overly restrictive, so that we also consider the case
of _weakly sparse_ models, meaning that _β_ ∗can be closely approximated by
vectors with few nonzero entries. For instance, one way of formalizing this


###### BOUNDS ON LASSO ` 2 -ERROR 291

```
β 2
β 1
```
```
β 3
```
```
1
```
```
β 2
β 1
```
```
β 3
```
```
1
```
**Figure 11.1** _Left: Forq_ = 1 _, the set_ B( _Rq_ ) _corresponds to the`_ 1 _-ball, which is a
convex set. Right: Settingq_ = 0_._ 75 _yields a nonconvex set, with spikes along the
coordinate axes._

notion is by defining, for a parameter _q_ ∈[0 _,_ 1] and radius _Rq>_ 0, the set

```
B( Rq ) =
```
###### {

```
β ∈R p |
```
```
∑ p
```
```
j =1
```
```
| βi | q ≤ Rq
```
###### }

###### . (11.7)

This set is known as the _`q_ -“ball” of radius^1 _Rq_ ; as illustrated in Figure 11.1,
for _q_ ∈[0 _,_ 1), it is not a ball in the strict sense of the word, since it is a
nonconvex set. In the special case _q_ = 0, imposing the constraint _β_ ∗∈B( _R_ 0 )
is equivalent to requiring that _β_ ∗has at most _k_ = _R_ 0 nonzero entries.

### 11.2 Bounds on Lasso ` 2 -Error

We begin by developing some results on the _`_ 2 -norm loss (11.5) between a lasso

solution _β_ ̂and the true regression vector _β_ ∗. We focus on the case when _β_ ∗is
_k_ -sparse, meaning that its entries are nonzero on a subset _S_ ( _β_ ∗)⊂{ 1 _,_ 2 _,...,p_ }
of cardinality _k_ =| _S_ ( _β_ ∗)|. In the exercises, we work through some extensions
to the case of weakly-sparse coefficient vectors.

#### 11.2.1 Strong Convexity in the Classical Setting

We begin by developing some conditions on the model matrix **X** that are
needed to establish bounds on _`_ 2 -error. In order to provide some intuition for
these conditions, we begin by considering one route for proving _`_ 2 -consistency
in the classical setting (i.e., _p_ fixed, _N_ tending to infinity). Suppose that we
estimate some parameter vector _β_ ∗by minimizing a data-dependent objective

(^1) Strictly speaking, the radius would be _R_
(^1) _q
q_ , but we take this liberty so as to simplify
notation.


###### 292 THEORETICAL RESULTS FOR THE LASSO

function _fN_ ( _β_ ) over some constraint set. (For instance, the lasso minimizes
the least-squares loss _fN_ ( _β_ ) = _N_^1 ‖ **y** − **X** _β_ ‖^22 subject to an _`_ 1 -constraint.) Let

us suppose that the difference in function values ∆ _fN_ =| _fN_ ( _β_ ̂)− _fN_ ( _β_ ∗)|
converges to zero as the sample size _N_ increases. The key question is the
following: what additional conditions are needed to ensure that the _`_ 2 -norm
of the parameter vector difference ∆ _β_ =‖ _β_ ̂− _β_ ∗‖ 2 also converges to zero?

```
β∗ β̂
```
```
∆fN
```
```
∆β
```
```
β∗ β̂
```
```
∆fN
```
```
∆β
```
**Figure 11.2** _Relation between differences in objective function values and differ-
ences in parameter values. Left: the functionfNis relatively “flat” around its opti-
mumβ_ ̂ _, so that a smal l function difference_ ∆ _fN_ =| _fN_ (̂ _β_ )− _fN_ ( _β_ ∗)| _does not imply
that_ ∆ _β_ =‖ _β_ ̂− _β_ ∗‖ 2 _is smal l. Right: the functionfNis strongly curved around its
optimum, so that a smal l difference_ ∆ _fNin function values translates into a small
difference in parameter values._

To understand the issues involved, suppose that for some _N_ , the objec-
tive function _fN_ takes the form shown in Figure 11.2(a). Due to the relative
“flatness” of the objective function around its minimum _β_ ̂, we see that the
difference ∆ _fN_ =| _fN_ ( _β_ ̂)− _fN_ ( _β_ ∗)|in function values is quite small while at
the same time the difference ∆ _β_ =‖ _β_ ̂− _β_ ∗‖ 2 in parameter values is relatively
large. In contrast, Figure 11.2(b) shows a more desirable situation, in which
the objective function has a high degree of curvature around its minimum
_β_ ̂. In this case, a bound on the function difference ∆ _fN_ =| _fN_ ( _β_ ̂)− _fN_ ( _β_ ∗)|
translates directly into a bound on ∆ _β_ =‖ _β_ ̂− _β_ ∗‖ 2.
How do we formalize the intuition captured by Figure 11.2? A natural
way to specify that a function is suitably “curved” is via the notion of strong
convexity. More specifically, given a differentiable function _f_ :R _p_ →R, we
say that it is _strongly convex_ with parameter _γ >_ 0 at _θ_ ∈R _p_ if the inequality

```
f ( θ ′)− f ( θ )≥∇ f ( θ ) T ( θ ′− θ ) +
```
```
γ
2
```
```
‖ θ ′− θ ‖^22 (11.8)
```
hold for all _θ_ ′ ∈R _p_. Note that this notion is a strengthening of ordinary
convexity, which corresponds to the case _γ_ = 0. When the function _f_ is twice
continuously differentiable, an alternative characterization of strong convexity


###### BOUNDS ON LASSO ` 2 -ERROR 293

is in terms of the Hessian∇^2 _f_ : in particular, the function _f_ is strongly convex
with parameter _γ_ around _β_ ∗∈R _p_ if and only if the minimum eigenvalue of the
Hessian matrix∇^2 _f_ ( _β_ ) is at least _γ_ for all vectors _β_ in a neighborhood of _β_ ∗.
If _f_ is the negative log-likelihood under a parametric model, then∇^2 _f_ ( _β_ ∗) is
the observed _Fisher information_ matrix, so that strong convexity corresponds
to a uniform lower bound on the Fisher information in all directions.

#### 11.2.2 Restricted Eigenvalues for Regression

Let us now return to the high-dimensional setting, in which the number of
parameters _p_ might be larger than _N_. It is clear that the least-squares objective
function _fN_ ( _β_ ) = 21 _N_ ‖ **y** − **X** _β_ ‖^22 is always convex; under what additional
conditions is it also strongly convex? A straightforward calculation yields that
∇^2 _f_ ( _β_ ) = **X** _T_ **X** _/N_ for all _β_ ∈R _p_. Thus, the least-squares loss is strongly
convex if and only if the eigenvalues of the _p_ × _p_ positive semidefinite matrix
**X** _T_ **X** are uniformly bounded away from zero. However, it is easy to see that
any matrix of the form **X** _T_ **X** has rank at most min{ _N,p_ }, so it is always
rank-deficient—and hence _not_ strongly convex—whenever _N < p_. Figure 11.3
illustrates the situation.

```
C
```
```
νbad
```
```
νgood
```
**Figure 11.3** _A convex loss function in high-dimensional settings (withp_  _N) can-
not be strongly convex; rather, it wil l be curved in some directions but flat in others.
As shown in Lemma 11.1, the lasso error_ ̂ _ν_ = _β_ ̂− _β_ ∗ _must lie in a restricted subset_ C
_of_ R _p. For this reason, it is only necessary that the loss function be curved in certain
directions of space._

For this reason, we need to relax our notion of strong convexity. It turns
out, as will be clarified by the analysis below, that it is only necessary to
impose a type of strong convexity condition for some subsetC ⊂R _p_ of possible


###### 294 THEORETICAL RESULTS FOR THE LASSO

perturbation vectors _ν_ ∈R _p_. In particular, we say that a function _f_ satisfies
_restricted strong convexity_ at _β_ ∗with respect toCif there is a constant _γ >_ 0
such that

```
νT ∇^2 f ( β ) ν
‖ ν ‖^22
```
```
≥ γ for all nonzero ν ∈C, (11.9)
```
and for all _β_ ∈R _p_ in a neighborhood of _β_ ∗. In the specific case of linear re-
gression, this notion is equivalent to lower bounding the _restricted eigenvalues_
of the model matrix—in particular, requiring that

```
1
Nν
```
```
T X T X ν
‖ ν ‖^22
≥ γ for all nonzero ν ∈C. (11.10)
```
What constraint setsCare relevant? Suppose that the parameter vector _β_ ∗
is sparse—say supported on the subset _S_ = _S_ ( _β_ ∗). Defining the lasso error
̂ _ν_ = _β_ ̂− _β_ ∗, let̂ _νS_ ∈R| _S_ |denote the subvector indexed by elements of _S_ ,
with _ν_ ̂ _Sc_ defined in an analogous manner. For appropriate choices of the _`_ 1 -
ball radius—or equivalently, of the regularization parameter _λN_ —it turns out
that the lasso error satisfies a _cone constraint_ of the form

```
‖̂ νSc ‖ 1 ≤ α ‖̂ νS ‖ 1 , (11.11)
```
for some constant _α_ ≥1. This fact is easiest to see for the lasso in its con-
strained version. Indeed, assuming that we solve the constrained lasso (11.2)
with ball radius _R_ =‖ _β_ ∗‖ 1 , then since _β_ ̂is feasible for the program, we have

```
R =‖ β ∗ S ‖ 1 ≥‖ β ∗+ ν ̂‖ 1
=‖ β ∗ S +̂ νS ‖ 1 +‖̂ νSc ‖ 1
≥‖ β ∗ S ‖ 1 −‖ ν ̂ S ‖ 1 +‖̂ νSc ‖ 1.
```
Rearranging this inequality, we see that the bound (11.11) holds with _α_ = 1.
If we instead solve the regularized version (11.3) of the lasso with a “suitable”
choice of _λN_ , then it turns out that the error satisfies the constraint

```
‖ ν ̂ Sc ‖ 1 ≤ 3 ‖ ν ̂ S ‖ 1. (11.12)
```
(We establish this fact during the proof of Theorem 11.1 to follow.) Thus, in
either its constrained or regularized form, the lasso error is restricted to a set
of the form

```
C( S ; α ) : =
```
###### {

```
ν ∈R p |‖ νSc ‖ 1 ≤ α ‖ νS ‖ 1
```
###### }

###### , (11.13)

for some parameter _α_ ≥1; see Figure 11.3 for an illustration.

#### 11.2.3 A Basic Consistency Result

With this intuition in place, we now state a result that provides a bound on
the lasso error‖ _β_ ̂− _β_ ∗‖ 2 , based on the linear observation model **y** = **X** _β_ ∗+ **w** ,
where _β_ ∗is _k_ -sparse, supported on the subset _S_.


###### BOUNDS ON LASSO ` 2 -ERROR 295

_Theorem 11.1._ Suppose that the model matrix **X** satisfies the restricted eigen-
value bound (11.10) with parameter _γ >_ 0 overC( _S_ ; 3).

```
(a) Then any estimate β ̂based on the constrained lasso (11.2) with R =
‖ β ∗‖ 1 satisfies the bound
```
```
‖ β ̂− β ∗‖ 2 ≤
```
###### 4

```
γ
```
###### √

```
k
N
```
###### ∥

###### ∥ X

```
T w
√
N
```
###### ∥

###### ∥

```
∞. (11.14a)
```
```
(b) Given a regularization parameter λN ≥ 2 ‖ X T w ‖∞ /N > 0, any estimate
β ̂from the regularized lasso (11.3) satisfies the bound
```
```
‖ β ̂− β ∗‖ 2 ≤
```
###### 3

```
γ
```
###### √

```
k
N
```
###### √

```
N λN. (11.14b)
```
Before proving these results, let us discuss the different factors in the
bounds (11.14a) and (11.14b), and then illustrate them with some examples.
First, it is important to note that these results are deterministic, and apply
to any set of linear regression equations with a given observed noise vector
**w**. Below we obtain results for specific statistical models, as determined by
assumptions on the noise vector **w** and/or the model matrix. These assump-
tions will affect the rate through the restricted eigenvalue constant _γ_ , and the
terms‖ **X** _T_ **w** ‖∞and _λN_ in the two bounds. Based on our earlier discussion of
the role of strong convexity, it is natural that lasso _`_ 2 -error is inversely pro-
portional to the restricted eigenvalue constant _γ >_ 0. The second term

###### √

_k/N_
is also to be expected, since we are trying to estimate unknown regression
vector with _k_ unknown entries based on _N_ samples. As we have discussed,
the final term in both bounds, involving either‖ **X** _T_ **w** ‖∞or _λN_ , reflects the
interaction of the observation noise **w** with the model matrix **X**.
It is instructive to consider the consequences of Theorem 11.1 for some
linear regression models that are commonly used and studied.

_Example 11.1. Classical linear Gaussian model._ We begin with the classical
linear Gaussian model, for which the observation noise **w** ∈R _N_ is Gaussian,
with i.i.d. _N_ (0 _,σ_^2 ) entries. Let us view the design matrix **X** as fixed, with
columns{ **x** 1 _,...,_ **x** _p_ }. For any given column _j_ ∈ { 1 _,...,p_ }, a simple calcula-

tion shows that the random variable **x** _Tj_ **w** _/N_ is distributed as _N_ (0 _,σ_

```
2
N ·
```
‖ **x** _j_ ‖^22
_N_ ).
Consequently, if the columns of the design matrix **X** are normalized (mean-
ing‖ **x** _j_ ‖ 2 _/_

###### √

```
N ≤1 for all j = 1 ,...,p ), then this variable is stochastically
```
dominated by a _N_ (0 _,σ_

```
2
N ) variable, so that we have the Gaussian tail bound
```
```
P
```
###### [

```
| x Tj w |
N
```
```
≥ t
```
###### ]

```
≤ 2 e −
```
```
Nt^2
2 σ^2.
```
Since‖ **X**

_T_ **w** ‖∞
_N_ corresponds to the maximum over _p_ such variables, the union
bound yields

```
P
```
```
[‖ X T w ‖
∞
N
```
```
≥ t
```
###### ]

```
≤ 2 e −
```
```
Nt^2
2 σ^2 +log p = 2 e −
```
(^12) ( _τ_ −2) log _p
,_


###### 296 THEORETICAL RESULTS FOR THE LASSO

where the second equality follows by setting _t_ = _σ_

###### √

_τ_ log _p
N_ for some _τ >_ 2.
Consequently, we conclude that the lasso error satisfies the bound

```
‖ β ̂− β ∗‖ 2 ≤
```
```
cσ
γ
```
###### √

```
τk log p
N
```
###### . (11.15)

probability at least 1− 2 _e_ −

(^12) ( _τ_ −2) log _p_

. This calculation has also given us
a choice of the regularization parameter _λN_ that is valid for the La-
grangian lasso in Theorem 11.1(b). In particular, from our calculations, set-

ting _λN_ = 2 _σ_

###### √

_τ_ log _Np_ for some _τ >_ 2 will be a valid choice with the same high
probability.
It should also be noted that the rate (11.15) is intuitively reasonable.
Indeed, if support set _S_ ( _β_ ∗) were known, then estimation of _β_ ∗would re-
quire approximating a total of _k_ parameters—namely, the elements _βi_ ∗for all
_i_ ∈ _S_ ( _β_ ∗). Even with knowledge of the support set, since the model has _k_ free
parameters, no method can achieve squared _`_ 2 -error that decays more quickly
than _Nk_. Thus, apart from the logarithmic factor, the lasso rate matches the
best possible that one could achieve, even if the subset _S_ ( _β_ ∗) were known _a
priori_. In fact, the rate (11.15)—including the logarithmic factor—is known to
be minimax optimal, meaning that it cannot be substantially improved upon
by any estimator. See the bibliographic section for further discussion.

_Example 11.2. Compressed sensing._ In the domain of compressed sensing
(Chapter 10), the design matrix **X** can be chosen by the user, and one standard
choice is to form a random matrix with i.i.d. _N_ (0 _,_ 1) entries, and model the
noise vector **w** ∈R _N_ as deterministic, say with bounded entries (‖ **w** ‖∞≤ _σ_ .)
Under these assumptions, each variable _N_^1 **x** _Tj_ **w** is a zero-mean Gaussian with

variance at most _σ_

2
_N_. Thus, by following the same argument as in the preceding
example, we conclude that the lasso error will again obey the bound (11.15)
with high probability for this set-up.
By a more refined argument, one can derive a strengthening of the error
bound (11.15), namely:

```
‖ β ̂− β ∗‖ 2 ≤ cσ
```
###### √

```
k log( ep/k )
N
```
###### . (11.16)

where _e_ ≈ 2_._ 71828, and _c_ is a universal constant. This bound suggests that
the sample size _N_ should satisfy the lower bound

```
N ≥ k log( ep/k ) (11.17)
```
in order for the lasso to have small error.
Following Donoho and Tanner (2009), let us consider the ratios _ρ_ = _k/N_
and _α_ = _N/p_ , in which form the bound (11.17) can be rewritten as

```
ρ (1−log( ρα ))≤ 1. (11.18)
```

###### BOUNDS ON LASSO ` 2 -ERROR 297

In order to study the accuracy of this prediction, we generated random ensem-
bles of the linear regression problem in dimension _p_ = 200 and sample sizes
_N_ ranging from 10 and 200, where each feature _xij_ ∼ _N_ (0 _,_ 1) was generated
independently. Given this random design, we then generated outcomes from
a linear model _yi_ = _ν_ 〈 _xi, β_ ∗〉+ _σwi_ where _wi_ ∼ _N_ (0 _,_ 1) and _σ_ = 4. For a
given sparsity level _k_ , we chose a random subset _S_ of size _k_ , and for each
_j_ ∈ _S_ , we generated _βj_ ∗∼ _N_ (0 _,_ 1) independently at random. In all cases, the
pre-factor _ν_ was chosen for each _N_ and _k_ , so that the signal-to-noise ratio
was approximately equal to 10. We then solved the Lagrangian lasso using

the regularization parameter _λN_ = 2 _σ_

###### √

###### 3

log _epk
N_. Figure 11.4 is a heatmap of
the median of the Euclidean error‖ _β_ ̂− _β_ ∗‖ 2 over 10 realizations, with the
boundary (11.18) super-imposed. We see that there is a fairly sharp change at
the theoretical boundary, indicating that more samples are needed when the
underlying model is more dense.

```
0.0 0.2 0.4 0.6 0.8 1.0
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
2
```
```
4
```
```
6
```
```
8
```
```
10
```
```
12
```
```
14
```
```
α=N/p
```
```
ρ
```
```
=
```
```
k/N
```
**Figure 11.4** _Simulation experiment: median of the error_ ‖ _β_ ̂− _β_ ∗‖ 2 _over_ 10 _realiza-
tions, with the boundary_ (11.18) _super-imposed._

Equipped with this intuition, we now turn to the proof of Theorem 11.1.

_Proof of Theorem 11.1:_ The proof is very straightforward for the constrained
lasso bound (11.14a), and requires a bit more work for the regularized lasso
bound (11.14b).

_Constrained Lasso._ In this case, since _β_ ∗ is feasible and _β_ ̂is optimal,
we have the inequality‖ **y** − **X** _β_ ̂‖^22 ≤‖ **y** − **X** _β_ ∗‖^22. Defining the error vector
̂ _ν_ : = _β_ ̂− _β_ ∗, substituting in the relation **y** = **X** _β_ ∗+ **w** , and performing some


###### 298 THEORETICAL RESULTS FOR THE LASSO

algebra yields the _basic inequality_

```
‖ X ν ̂‖^22
2 N
```
###### ≤

```
w T X ν ̂
N
```
###### . (11.19)

Applying a version of H ̈older’s inequality to the right-hand side yields the
upper bound _N_^1 | **w** _T_ **X** ̂ _ν_ |≤ _N_^1 ‖ **X** _T_ **w** ‖∞‖̂ _ν_ ‖ 1. As shown in Chapter 10, the in-

equality‖ _β_ ̂‖ 1 ≤ _R_ =‖ _β_ ∗‖ 1 implies that̂ _ν_ ∈C( _S_ ; 1), whence we have

```
‖ ν ̂‖ 1 =‖̂ νS ‖ 1 +‖̂ νSc ‖ 1 ≤ 2 ‖̂ νS ‖ 1 ≤ 2
```
###### √

```
k ‖ ν ̂‖ 2.
```
On the other hand, applying the restricted eigenvalue condition (11.10) to
the left-hand side of the inequality (11.19) yields _N_^1 ‖ **X** ̂ _ν_ ‖^22 ≥ _γ_ ‖̂ _ν_ ‖^22. Putting
together the pieces yields the claimed bound (11.14a).

_Lagrangian Lasso._ Define the function

```
G ( ν ) : =
```
###### 1

###### 2 N

```
‖ y − X ( β ∗+ ν )‖^22 + λN ‖ β ∗+ ν ‖ 1. (11.20)
```
Noting that _ν_ ̂: = _β_ ̂− _β_ ∗minimizes _G_ by construction, we have _G_ ( _ν_ ̂)≤ _G_ (0).
Some algebra yields the _modified basic inequality_

```
‖ X ̂ ν ‖^22
2 N
```
###### ≤

```
w T X ̂ ν
N
```
```
+ λN
```
###### {

```
‖ β ∗‖ 1 −‖ β ∗+̂ ν ‖ 1
```
###### }

###### . (11.21)

Now since _β_ ∗ _Sc_ = 0, we have‖ _β_ ∗‖ 1 =‖ _βS_ ∗‖ 1 , and

```
‖ β ∗+̂ ν ‖ 1 =‖ β ∗ S +̂ νS ‖ 1 +‖̂ νSc ‖ 1 ≥ ‖ βS ∗‖ 1 −‖̂ νS ‖ 1 +‖̂ νSc ‖ 1.
```
Substituting these relations into inequality (11.21) yields

```
‖ X ̂ ν ‖^22
2 N
```
###### ≤

```
w T X ̂ ν
N
```
```
+ λN
```
###### {

```
‖̂ νS ‖ 1 −‖̂ νSc ‖ 1
```
###### }

###### ≤

```
‖ X T w ‖∞
N
```
```
‖̂ ν ‖ 1 + λN
```
###### {

```
‖ ν ̂ S ‖ 1 −‖̂ νSc ‖ 1
```
###### }

###### , (11.22)

where the second step follows by applying H ̈older’s inequality with _`_ 1 and _`_ ∞
norms. Since _N_^1 ‖ **X** _T_ **w** ‖∞≤ _λ_ 2 _N_ by assumption, we have

```
‖ X ̂ ν ‖^22
2 N
```
###### ≤

```
λN
2
```
###### {

```
‖̂ νS ‖ 1 +‖̂ νSc ‖ 1
```
###### }

```
+ λN
```
###### {

```
‖̂ νS ‖ 1 −‖̂ νSc ‖ 1
```
###### }

###### ≤

###### 3

###### 2

###### √

```
kλN ‖̂ ν ‖ 2 ,
(11.23)
```
where the final step uses the fact that‖̂ _νS_ ‖ 1 ≤

###### √

```
k ‖̂ ν ‖ 2.
In order to complete the proof, we require the following auxiliary result:
```
_Lemma 11.1._ Suppose that _λN_ ≥ 2 ‖ **X**

```
T w
N ‖∞ > 0. Then the error̂ ν : =
β ̂− β ∗
```
associated with any lasso solution _β_ ̂belongs to the cone setC( _S_ ; 3).


###### BOUNDS ON PREDICTION ERROR 299

Taking this claim as given for the moment, let us complete the proof of the
bound (11.14b). Lemma 11.1 allows us to apply the _γ_ -RE condition (11.10)
tô _ν_ , which ensures that _N_^1 ‖ **X** _ν_ ̂‖^22 ≥ _γ_ ‖̂ _ν_ ‖^22. Combining this lower bound with
our earlier inequality (11.23) yields

```
γ
2
```
```
‖ ν ̂‖^22 ≤
```
###### 3

###### 2

```
λN
```
###### √

```
k ‖̂ ν ‖ 2 ,
```
and rearranging yields the bound (11.14b).

```
It remains to prove Lemma 11.1. Since‖ X
```
```
T w ‖∞
N ≤
```
_λN_
2 , inequality (11.22)
implies that

```
0 ≤
```
```
λN
2
‖̂ ν ‖ 1 + λN
```
###### {

```
‖̂ νS ‖ 1 −‖ ν ̂ Sc ‖ 1
```
###### }

###### ,

Rearranging and then dividing out by _λN>_ 0 yields that‖̂ _νSc_ ‖ 1 ≤ 3 ‖̂ _νS_ ‖ 1 as
claimed.

_Some extensions._ As stated, Theorem 11.1 applies to regression models in
which _β_ ∗has at most _k_ nonzero entries, an assumption that we referred to as
hard sparsity. However, a similar type of analysis can be performed for weakly
sparse models, say with _β_ ∗belonging to the _`q_ -ballB _q_ ( _Rq_ ) previously defined
in Equation (11.7). Under a similar set of assumptions, it can be shown that
the lasso error will satisfy the bound

```
‖ β ̂− β ∗‖^22 ≤ c Rq
```
###### (

```
σ^2 log p
N
```
```
) 1 − q/ 2
(11.24)
```
with high probability. We work through portions of this derivation in Exer-
cise 11.3. In the special case _q_ = 0, assuming that _β_ ∗belongs to the _`_ 0 ball is
equivalent to the assumption of hard sparsity (with radius _R_ 0 = _k_ ), so that
this rate (11.24) is equivalent to our previous result (11.16) derived as a con-
sequence of Theorem 11.1. Otherwise, note that the rate slows down as the
weak sparsity parameter _q_ increases away from zero toward one, reflecting the
fact that we are imposing weaker conditions on the true regression vector _β_ ∗.
The rate (11.24) is known to be minimax-optimal over the _`q_ -ball, meaning
that no other estimator can achieve a substantially smaller _`_ 2 -error; see the
bibliographic section for further discussion.

### 11.3 Bounds on Prediction Error

Thus far, we have studied the performance of the lasso in recovering the
true regression vector, as assessed by the Euclidean error‖ _β_ ̂− _β_ ∗‖ 2. In other

settings, it may suffice to obtain an estimate _β_ ̂that has a relatively low (in-
sample) prediction errorLpred( _β,β_ ̂ ∗) = _N_^1 ‖ **X** ( _β_ ̂− _β_ ∗)‖^22. In this section, we
develop some theoretical guarantees on this form of loss. For concreteness,
we focus on the Lagrangian lasso (11.3), although analogous results can be
derived for other forms of the lasso.


###### 300 THEORETICAL RESULTS FOR THE LASSO

_Theorem 11.2._ Consider the Lagrangian lasso with a regularization parameter
_λN_ ≥ _N_^2 ‖ **X** _T_ **w** ‖∞.

```
(a) If‖ β ∗‖ 1 ≤ R 1 , then any optimal solution β ̂satisfies
```
```
‖ X ( β ̂− β ∗)‖^22
N
```
```
≤ 12 R 1 λN. (11.25a)
```
```
(b) If β ∗is supported on a subset S , and the design matrix X satisfies the
γ -RE condition (11.10) overC( S ; 3), then any optimal solution β ̂satisfies
```
```
‖ X ( β ̂− β ∗)‖^22
N
```
###### ≤

###### 9

```
γ
```
```
| S | λ^2 N. (11.25b)
```
As we have discussed, for various statistical models, the choice _λN_ = _cσ_

###### √

log _p
N_
is valid for Theorem 11.2 with high probability, so the two bounds take the
form

```
‖ X ( β ̂− β ∗)‖^22
N
```
```
≤ c 1 σ R 1
```
###### √

```
log p
N
```
```
, and (11.26a)
```
```
‖ X ( β ̂− β ∗)‖^22
N
```
```
≤ c 2
```
```
σ^2
γ
```
```
| S |log p
N
```
_._ (11.26b)

The bound (11.26a), which depends on the _`_ 1 -ball radius _R_ 1 , is known as the
“slow rate” for the lasso, since the squared prediction error decays as 1 _/_

###### √

###### N.

On the other hand, the bound (11.26b) is known as the “fast rate,” since it
decays as 1 _/N_. Note that the latter is based on much stronger assumptions:
namely, the hard sparsity condition that _β_ ∗is supported on a small subset
_S_ , and more disconcertingly, the _γ_ -RE condition on the design matrix **X**. In
principle, prediction performance should not require an RE condition, so that
one might suspect that this requirement is an artifact of our proof technique.
Remarkably, as we discuss in the bibliographic section, this dependence turns
out to be unavoidable for any polynomial-time method.

_Proof of Theorem 11.2:_ The proofs of both claims are relatively straightfor-
ward given our development thus far.

_Proof of bound (11.25a):_ Beginning with the modified basic inequal-
ity (11.21), we have

###### 0 ≤

```
‖ X T w ‖∞
N
```
```
‖̂ ν ‖ 1 + λN
```
###### {

```
‖ β ∗‖ 1 −‖ β ∗+̂ ν ‖ 1
```
###### }

###### ≤

```
{‖ X T w ‖∞
N
− λN
```
###### }

```
‖̂ ν ‖ 1 + 2 λN ‖ β ∗‖ 1
( i )
≤
```
###### 1

###### 2

```
λN
```
###### {

```
−‖̂ ν ‖ 1 + 4‖ β ∗‖ 1
```
###### }

###### ,


###### SUPPORT RECOVERY IN LINEAR REGRESSION 301

where step (i) uses the fact that _N_^1 ‖ **X** _T_ **w** ‖∞≤ _λ_ 2 _N_ by assumption. Putting
together the pieces, we conclude that‖̂ _ν_ ‖ 1 ≤ 4 ‖ _β_ ∗‖ 1 ≤ 4 _R_ 1. Returning again
to the modified basic inequality (11.21), we have

```
‖ X ̂ ν ‖^22
2 N
```
###### ≤

```
{‖ X T w ‖
∞
N
```
```
+ λN
```
###### }

```
‖̂ ν ‖ 1 ≤ 6 λNR 1 ,
```
which establishes the claim (11.25a).

_Proof of bound (11.25b):_ Given the stated choice of _λN_ , inequality (11.23)
holds, whence

```
‖ X ̂ ν ‖^22
2 N
```
###### ≤ 3

###### √

```
kλN ‖̂ ν ‖^22.
```
By Lemma 11.1, the error vector̂ _ν_ belongs to the coneC( _S_ ; 3), so that the
_γ_ -RE condition guarantees that‖̂ _ν_ ‖^22 ≤ _N γ_^1 ‖ **X** _ν_ ̂‖^22. Putting together the pieces

yields the claim (11.25b).

### 11.4 Support Recovery in Linear Regression

Thus far, we have focused on bounds on either the _`_ 2 -error or the prediction
error associated with a lasso solution. In other settings, we are interested in
a somewhat more refined question, namely whether or not a lasso estimate
_β_ ̂has nonzero entries in the same positions as the true regression vector _β_ ∗.
More precisely, suppose that the true regression vector _β_ ∗is _k_ -sparse, meaning
that it is supported on a subset _S_ = _S_ ( _β_ ∗) of cardinality _k_ =| _S_ |. In such a
setting, a natural goal is to correctly identify the subset _S_ of relevant variables.
In terms of the lasso, we ask the following question: given an optimal lasso
solution _β_ ̂, when is its support set—denoted by _S_ ̂= _S_ ( _β_ ̂)—exactly equal to
the true support _S_? We refer to this property as _variable selection consistency_
or _sparsistency_.
Note that it is possible for the _`_ 2 error‖ _β_ ̂− _β_ ∗‖ 2 to be quite small even if _β_ ̂
and _β_ ∗have different supports, as long as _β_ ̂is nonzero for all “suitably large”
entries of _β_ ∗, and not “too large” in positions where _β_ ∗is zero. Similarly, it
is possible for the prediction error‖ **X** ( _β_ ̂− _β_ ∗)‖ 2 _/_

###### √

_N_ to be small even when
_β_ ̂and _β_ ∗have very different supports. On the other hand, as we discuss in
the sequel, given an estimate _β_ ̂that correctly recovers the support of _β_ ∗, we
can estimate _β_ ∗very well—both in _`_ 2 -norm and the prediction semi-norm—
simply by performing an ordinary least-squares regression restricted to this
subset.

#### 11.4.1 Variable-Selection Consistency for the Lasso

We begin by addressing the issue of variable selection in the context of deter-
ministic design matrices **X**. It turns out that variable selection requires a con-
dition related to but distinct from the restricted eigenvalue condition (11.10).


###### 302 THEORETICAL RESULTS FOR THE LASSO

In particular, we assume a condition known either as _mutual incoherence_ or
_irrepresentability_ : there must exist some _γ >_ 0 such that

```
max
j ∈ Sc
‖( X TS X S )−^1 X TS x j ‖ 1 ≤ 1 − γ. (11.27)
```
To interpret this condition, note that the submatrix **X** _S_ ∈R _N_ × _k_ corresponds
to the subset of covariates that are in the support set. For each index _j_ in
the complementary set _Sc_ , the _k_ -vector ( **X** _TS_ **X** _S_ )−^1 **X** _TS_ **x** _j_ is the regression
coefficient of **x** _j_ on **X** _S_ ; this vector is a measure of how well the column **x** _j_
aligns with the columns of the submatrix **X** _S_. In the most desirable case, the
columns{ **x** _j,j_ ∈ _Sc_ }would all be orthogonal to the columns of **X** _S_ , and we
would be guaranteed that _γ_ = 1. Of course, in the high-dimensional setting
( _p_  _N_ ), this complete orthogonality is not possible, but we can still hope
for a type of “near orthogonality” to hold.
In addition to this incoherence condition, we also assume that the design
matrix has normalized columns

```
max
j =1 ,...,p
```
```
‖ x j ‖ 2 /
```
###### √

```
N ≤ K clm. (11.28)
```
For example, we can take‖ **x** _j_ ‖ 2 =

###### √

_N_ and _K_ clm= 1. Further we assume that
the submatrix **X** _S_ is well-behaved in the sense that

```
λ min( X TS X S/N )≥ C min. (11.29)
```
Note that if this condition were violated, then the columns of **X** _S_ would be
linearly dependent, and it would be impossible to estimate _β_ ∗even in the
“oracle case” when the support set _S_ were known.
The following result applies to the regularized lasso (11.3) when applied to
an instance the linear observation model (11.1) such that the true parameter
_β_ ∗has support size _k_.

_Theorem 11.3._ Suppose that the design matrix **X** satisfies the mutual incoher-
ence condition (11.27) with parameter _γ >_ 0, and the column normalization
condition (11.28) and the eigenvalue condition (11.29) both hold. For a noise
vector **w** ∈R _N_ with i.i.d. _N_ (0 _,σ_^2 ) entries, consider the regularized lasso pro-
gram (11.3) with

```
λN ≥
```
```
8 K clm σ
γ
```
###### √

```
log p
N
```
###### . (11.30)

Then with probability greater than 1− _c_ 1 _e_ − _c_^2 _Nλ_

(^2) _N_
, the lasso has the following
properties:
(a) _Uniqueness:_ The optimal solution _β_ ̂is unique.
(b) _No false inclusion:_ The unique optimal solution has its support _S_ ( _β_ ̂)
contained within the true support _S_ ( _β_ ∗).


###### SUPPORT RECOVERY IN LINEAR REGRESSION 303

```
(c) ` ∞ -bounds: The error β ̂− β ∗satisfies the ` ∞bound
```
```
‖ β ̂ S − βS ∗‖∞≤ λN
```
```
[ 4 σ
√
C min
```
###### +

###### ∥

###### ∥( X TS X S/N )−^1

###### ∥

###### ∥

```
∞
```
###### ]

###### ︸ ︷︷ ︸

```
B ( λN,σ ; X )
```
###### , (11.31)

```
where for a matrix A , its∞-norm is given by‖ A ‖∞= max‖ u ‖∞=1‖ A u ‖∞.
```
```
(d) No false exclusion: The lasso solution includes all indices j ∈ S ( β ∗) such
that| β ∗ j | > B ( λN,σ ; X ), and hence is variable selection consistent as long
as min
j ∈ S
```
```
| β ∗ j | > B ( λN,σ ; X ).
```
Before proving this result, let us try to interpret its main claims. First,
the uniqueness claim in part (a) is not trivial in the high-dimensional setting,
because as discussed previously, although the lasso objective is convex, it can
never be strictly convex when _p > N_. The uniqueness claim is important,
because it allows us to talk unambiguously about the support of the lasso
estimate _β_ ̂. Part (b) guarantees that the lasso does not falsely include variables
that are not in the support of _β_ ∗, or equivalently that _β_ ̂ _Sc_ = 0, whereas part
(c) guarantees that _β_ ̂ _S_ is uniformly close to _βS_ ∗in the _`_ ∞-norm. Finally, part
(d) is a consequence of this uniform norm bound: as long as the minimum value
of| _β_ ∗ _j_ |over indices _j_ ∈ _S_ is not too small, then the lasso is variable-selection
consistent in the full sense.

##### 11.4.1.1 Some Numerical Studies

In order to learn more about the impact of these results in practice, we ran a
few small simulation studies. We first explore the impact of the irrepresentabil-
ity condition (11.27). We fixed the sample size to _N_ = 1000, and for a range of
problem dimensions _p_ , we generated _p_ i.i.d standard Gaussian variates, with
a fraction _f_ = _k/p_ of them being in the support set _S_. For correlations _ρ_
ranging over the interval [0 _,_ 0_._ 6], for each _j_ ∈ _S_ we randomly chose a predic-
tor _`_ ∈ _Sc_ , and set **x** _`_ ← **x** _`_ + _c_ · **x** _j_ with _c_ chosen so that corr( **x** _j,_ **x** _`_ ) = _ρ_.
Figure 11.5 shows the average value of 1− _γ_ , the value of the irrepresentability
condition (11.27), over five realizations. We see for example with _ρ_ = 0, we
fall into the “good” region 1− _γ <_ 1 when _p_ ≤1000 and there is _f_ ≤2%
sparsity or _p_ ≤500 with _f_ ≤5% sparsity. However the maximum size of _p_
and sparsity level _f_ decrease as the correlation _ρ_ increases.
We also ran a small simulation study to examine the false discovery and
false exclusion rates for a lasso regression. We set _N_ = 1000 and _p_ = 500 with
_k_ = 15 predictors in _S_ having nonzero coefficients. The data matrices **X** _S_ and
**X** _Sc_ were generated as above, with different values for the correlations _ρ_. We
then generated a response **y** according to **y** = **X** _SβS_ + **w** , with the elements
of **w** i.i.d. _N_ (0 _,_ 1).
We tried two different values for the nonzero regression coefficients in _βS_ :
all 0_._ 25 or all 0_._ 15, with randomly selected signs. These result in “effect sizes”


###### 304 THEORETICAL RESULTS FOR THE LASSO

```
50 100 200 500 1000 2000
```
```
0.05
```
```
0.20 0.50
```
```
2.00 5.00
```
```
Number of Variables p
```
```
Maximum Inner Product 1
```
```
− γ
```
```
ρ = 0
```
```
f = 0.02
f = 0.05
f = 0.1
f = 0.2
50 100 200 500 1000 2000
```
```
0.05
```
```
0.20 0.50
```
```
2.00 5.00
```
```
Number of Variables p
```
```
Maximum Inner Product 1
```
```
− γ
```
```
ρ =0.2
```
```
50 100 200 500 1000 2000
```
```
0.05
```
```
0.20 0.50
```
```
2.00 5.00
```
```
Number of Variables p
```
```
Maximum Inner Product 1
```
```
− γ
```
```
ρ =0.4
```
```
50 100 200 500 1000 2000
```
```
0.05
```
```
0.20 0.50
```
```
2.00 5.00
```
```
Number of Variables p
```
```
Maximum Inner Product 1
```
```
− γ
```
```
ρ =0.6
```
**Figure 11.5** _Irrepresentability condition in practice. Each plot shows values for_
1 − _γin (11.27) for simulated Gaussian data. Values less than one are good, and the
smal ler the better. The sample sizeN_ = 1000 _is fixed, and the number of predictors
pvaries along the horizontal axis. The fractionf_ = _k/pof true nonzero coefficients
(the sparsity level) varies within each panel, and final ly, the correlation between each
true predictor and its null predictor partner (as described in the text) varies across
the four panels. A horizontal broken line is drawn at_ 1 − _γ_ = 1 _, below which the
irrepresentability condition holds. Each point is a mean of_ 1 − _γover five simulations;
the standard errors of the means are smal l, averaging about 0.03._


###### SUPPORT RECOVERY IN LINEAR REGRESSION 305

(absolute standardized regression coefficients) for the 15 true predictors of 7_._ 9
and 4_._ 7, respectively. Finally, we chose _λN_ in an “optimal” way in each run:
we used the value yielding the correct number of nonzero coefficients (15).
The top row of Figure 11.6 shows the results. In the top left panel (the
best case), the average false discovery and false exclusion probabilities are zero
until _ρ_ is greater than about 0.6. After that point, the lasso starts to include
false variables and exclude good ones, due to the high correlation between
signal and noise variables. The value _γ_ from the irrepresentability condition
is also shown, and drops below zero at around the value _ρ_ = 0_._ 6. (Hence
the condition holds below correlation 0.6.) In the top right panel, we see error
rates increase overall, even for small _ρ_. Here the effect size is modestly reduced
from 7_._ 9 to 4_._ 7, which is the cause of the increase.
The lower panel of Figure 11.6 shows the results when the sample size
_N_ is reduced to 200 ( _p < N_ ) and the size _k_ of the support set is increased
to 25. The values used for the nonzero regression coefficients were 5_._ 0 and
0_._ 5, yielding effect sizes of about 71 and 7, respectively. The irrepresentability
condition and other assumptions of the theorem do not hold. Now the error
rates are 15% or more irrespective of _ρ_ , and recovery of the true support set
seems unrealistic in this scenario.

#### 11.4.2 Proof of Theorem 11.3

We begin by developing the necessary and sufficient conditions for optimality
in the lasso. A minor complication arises because the _`_ 1 -norm is not differen-
tiable, due to its sharp point at the origin. Instead, we need to work in terms
of the subdifferential of the _`_ 1 -norm. Here we provide a very brief introduc-
tion; see Chapter 5 for further details. Given a convex function _f_ :R _p_ →R,
we say that _z_ ∈R _p_ is a subgradient at _β_ , denoted by _z_ ∈ _∂f_ ( _β_ ), if we have

```
f ( β + ∆)≥ f ( β ) +〈 z, ∆〉 for all ∆∈R p.
```
When _f_ ( _β_ ) =‖ _β_ ‖ 1 , it can be seen that _z_ ∈ _∂_ ‖ _β_ ‖ 1 if and only if _zj_ = sign( _βj_ )
for all _j_ = 1 _,_ 2 _,...,p_ , where we allow sign(0) to be any number in the interval

[− 1 _,_ 1]. In application to the lasso program, we say that a pair ( _β,_ ̂̂ _z_ )∈R _p_ ×R _p_
is primal-dual optimal if _β_ ̂is a minimizer and̂ _z_ ∈ _∂_ ‖ _β_ ̂‖ 1. Any such pair must
satisfy the zero-subgradient condition

###### −

###### 1

###### N

```
X T ( y − X β ̂) + λN ̂ z = 0 , (11.32)
```
which is the analogue of a zero gradient condition in this nondifferentiable
setting.
Our proof of Theorem 11.3 is based on a constructive procedure, known
as a _primal-dual witness method_ (PDW). When this procedure succeeds, it

constructs a pair ( _β,_ ̂ _z_ ̂)∈R _p_ ×R _p_ that are primal-dual optimal, and act as
a witness for the fact that the lasso has a unique optimal solution with the


###### 306 THEORETICAL RESULTS FOR THE LASSO

```
0.0 0.2 0.4 0.6 0.8 1.0
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Proportion
```
```
False Discovery Rate
False Exclusion Rateγ
```
```
0.0 0.2 0.4 0.6 0.8 1.0
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Proportion N=1000
```
```
0.0 0.2 0.4 0.6 0.8 1.0
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Proportion
```
```
0.0 0.2 0.4 0.6 0.8 1.0
```
```
0.0
```
```
0.2
```
```
0.4
```
```
0.6
```
```
0.8
```
```
1.0
```
```
Proportion N=200
```
```
ρ ρ
```
```
ρ ρ
```
```
Effect Size=7.9,k= 15 Effect Size=4.7,k= 15
```
```
Effect Size=70.7,k= 25 Effect Size=7.1,k= 25
```
**Figure 11.6** _Average false discovery and exclusion rates (with_ ± _one standard er-
ror) from simulation experiments withp_ = 500 _variables. In the top rowN_ = 1000 _,
and the size ofSisk_ = 15_. In the second rowN_ = 200 _and the subset size is
k_ = 25_. The effect size is the strength of real coefficients, as measured by an absolute
Zstatistic. Overal l conclusion: whenγis favorable, and the signal is strong, recovery
is good (top left). Al l other situations are problematic._


###### SUPPORT RECOVERY IN LINEAR REGRESSION 307

```
correct signed support. Using S = supp( β ∗) to denote the support set of β ∗,
this procedure consists of the following steps:
```
```
Primal-dual witness (PDW) construction.
```
1. Set _β_ ̂ _Sc_ = 0.
2. Determine ( _β_ ̂ _S,_ ̂ _zS_ ) by solving the _k_ -dimensional oracle subproblem

```
β ̂ S ∈arg min
βS ∈R k
```
###### {

###### 1

###### 2 N

```
‖ y − X SβS ‖^22 + λN ‖ βS ‖ 1
```
###### }

###### . (11.33)

```
Thuŝ zS is an element of subdifferential ∂ ‖ β ̂ S ‖ 1 satisfying the relation
1
N X
```
```
T
S ( y − X Sβ ̂ S ) + λNz ̂ S = 0.
```
3. Solve for̂ _zSc_ via the zero-subgradient Equation (11.32), and check whether
    or not the _strict dual feasibility_ condition‖̂ _zSc_ ‖∞ _<_ 1 holds.
       To be clear, this procedure is _not_ an implementable method for actu-
ally solving the lasso program (since it pre-supposes knowledge of the true
support); rather, it is a proof technique for certifying variable-selection con-
sistency of the lasso. Note that the subvector _β_ ̂ _Sc_ is determined in step 1,
whereas the remaining three subvectors are determined in steps 2 and 3. By
construction, the subvectors _β_ ̂ _S_ ,̂ _zS_ and̂ _zSc_ satisfy the zero-subgradient con-
dition (11.32). We say that the PDW construction succeeds if the vector̂ _zSc_
constructed in step 3 satisfies the strict dual feasibility condition. The follow-
ing result shows that this success acts as a witness for the lasso:
_Lemma 11.2._ If the PDW construction succeeds, then under the lower eigen-
value condition (11.29), the vector ( _β_ ̂ _S,_ 0)∈R _p_ is the unique optimal solution
of the regularized lasso (11.3).

```
Proof: When the PDW construction succeeds, then β ̂= ( β ̂ S, 0) is an optimal
solution with associated subgradient vector z ̂∈R p satisfying‖ z ̂ Sc ‖∞ < 1,
and〈̂ z,β ̂〉=‖ β ̂‖ 1. Now let β ̃∈R p be any other optimal solution of the lasso.
If we introduce the shorthand notation F ( β ) = 21 N ‖ y − X β ‖^22 , then we are
guaranteed that F ( β ̂) + λN 〈̂ z,β ̂〉= F ( β ̃) + λN ‖ β ̃‖ 1 , and hence
```
```
F ( β ̂)− λN 〈̂ z,β ̃− β ̂〉= F ( β ̃) + λN
```
###### (

```
‖ β ̃‖ 1 −〈 z, ̂ β ̃〉
```
###### )

###### .

```
But by the zero-subgradient conditions for optimality (11.32), we have
λN ̂ z =−∇ F ( β ̂), which implies that
```
```
F ( β ̂) +〈∇ F ( β ̂) ,β ̃− β ̂〉− F ( β ̃) = λN
```
###### (

```
‖ β ̃‖ 1 −〈̂ z,β ̃〉
```
###### )

###### .

```
By convexity of F , the left-hand side is negative, so that we must have
‖ β ̃‖ 1 ≤〈 z, ̂ β ̃〉. Applying H ̈older’s inequality with the ` 1 and ` ∞norms yields
the upper bound〈 z, ̂ β ̃〉≤‖̂ z ‖∞‖ β ̃‖ 1. These two inequalities together imply
```

###### 308 THEORETICAL RESULTS FOR THE LASSO

that‖ _β_ ̃‖ 1 =〈 _z,_ ̂ _β_ ̃〉. Since‖̂ _zSc_ ‖∞ _<_ 1, this equality can occur only if _β_ ̃ _j_ = 0
for all _j_ ∈ _Sc_.
Thus, all optimal solutions are supported only on _S_ , and hence can be
obtained by solving the oracle subproblem (11.33). Given the lower eigen-
value bound (11.29), this subproblem is strictly convex, and so has a unique
minimizer.

Based on Lemma 11.2, in order to prove parts (a) and (b) of Theorem 11.3,
it suffices to show that the subvector̂ _zSc_ constructed in step 3 satisfies the
_strict dual feasibility_ condition‖ _z_ ̂ _Sc_ ‖∞ _<_ 1.

_Establishing strict dual feasibility._ Let us delve into the form of the subvector
̂ _zSc_ constructed in step 3. By using the fact that _β_ ̂ _Sc_ = _β_ ∗ _Sc_ = 0 and writing
out the zero-subgradient condition (11.32) in block matrix form, we obtain

```
1
N
```
###### [

```
X TS X S X TS X Sc
X TSc X S X TSc X Sc
```
###### ][

```
β ̂ S − β ∗ S
0
```
###### ]

###### −

###### 1

###### N

###### [

```
X TS w
X TSc w
```
###### ]

```
+ λN
```
###### [

```
̂ zS
̂ zSc
```
###### ]

###### =

###### [

###### 0

###### 0

###### ]

###### .

###### (11.34)

Solving for the vector̂ _zSc_ ∈R _p_ − _k_ yields

```
̂ zSc =
```
###### 1

```
λN
```
###### {

```
X TSc w
N
```
###### −

```
X TSc X S
N
```
###### (̂

```
βS − β ∗ S
```
###### )

###### }

###### . (11.35)

Similarly, using the assumed invertibility of **X** _TS_ **X** _S_ in order to solve for the

difference _β_ ̂ _S_ − _β_ ∗ _S_ yields

```
β ̂ S − βS ∗=
```
###### (

###### X TS X S

###### N

###### )− 1

```
X TS w
N
```
```
− λN
```
###### (

###### X TS X S

###### N

###### )− 1

```
sign( βS ∗)
︸ ︷︷ ︸
US
```
###### . (11.36)

Substituting this expression back into Equation (11.35) and simplifying yields

```
̂ zSc = X TSc X S ( X TS X S )−^1 sign( βS ∗)
︸ ︷︷ ︸
μ
```
```
+ X TSc
```
###### [

###### I − X S ( X TS X S )−^1 X TS

###### ]

###### (

```
w
λNN
```
###### )

###### ︸ ︷︷ ︸

```
VSc
```
###### .

By triangle inequality, we have

```
‖ z ̂ Sc ‖∞≤‖ μ ‖∞+‖ VSc ‖∞.
```
Note that the vector _μ_ ∈R _p_ − _k_ is a deterministic quantity, and moreover,
by the mutual incoherence condition (11.27), we have‖ _μ_ ‖∞≤ 1 − _γ_. The
remaining quantity _VSc_ ∈R _p_ − _k_ is a zero-mean Gaussian random vector, and
we need to show that‖ _VSc_ ‖∞ _< γ_ with high probability.


###### SUPPORT RECOVERY IN LINEAR REGRESSION 309

```
For an arbitrary j ∈ Sc , consider the random variable
```
```
Vj : = X Tj
```
###### [

###### I − X S ( X TS X S )−^1 X TS

###### ]

###### ︸ ︷︷ ︸

```
Π S ⊥( X )
```
###### (

```
w
λNN
```
###### )

###### .

Noting that the matrix Π _S_ ⊥( **X** ) is an orthogonal projection matrix and using
the column normalization condition (11.28), we see that each _Vj_ is zero-mean
with variance at most _σ_^2 _K_ clm^2 _/_ ( _λ_^2 _NN_ ). Therefore, combining Gaussian tail
bounds with the union bound, we find that

###### P

###### [

```
‖ VSc ‖∞≥ γ/ 2
```
###### ]

```
≤2 ( p − k ) e
```
```
−
λ^2 NN ( γ/ 2)^2
2 σ^2 K^2 clm.
```
This probability vanishes at rate 2 _e_ −^2 _λ_

(^2) _NN_
for the choice of _λN_ given in the
theorem statement.
_Establishing`_ ∞ _bounds._ Next we establish a bound on the _`_ ∞-norm of the
difference vector _US_ = _β_ ̂ _S_ − _βS_ ∗from Equation (11.36). By the triangle in-
equality, we have

###### ‖ US ‖∞≤

###### ∥

###### ∥

###### ∥

###### ∥

###### ∥

###### (

###### X TS X S

###### N

###### )− 1

```
X TS w
N
```
###### ∥ ∥ ∥ ∥ ∥ ∞

###### +

###### ∥

###### ∥

###### ∥

###### ∥

###### ∥

###### (

###### X TS X S

###### N

###### )− 1 ∥∥

###### ∥

###### ∥

###### ∥

```
∞
```
```
λN, (11.37)
```
where we have multiplied and divided different terms by _N_ for later conve-
nience. The second term is a deterministic quantity, so that it remains to
bound the first term. For each _i_ = 1 _,...,k_ , consider the random variable

```
Zi : = eTi
```
###### (

###### 1

###### N

###### X TS X S

###### )− 1

###### 1

###### N

```
X TS w.
```
Since the elements of **w** are i.i.d. _N_ (0 _,σ_^2 ) variables, the variable _Zi_ is zero-
mean Gaussian with variance at most

```
σ^2
N
```
###### ∥

###### ∥

###### ∥

###### ∥

###### ∥

###### (

###### 1

###### N

###### X TS X S

###### )− 1 ∥∥

###### ∥

###### ∥

###### ∥

```
2
```
###### ≤

```
σ^2
C min N
```
###### ,

where we have used the eigenvalue condition (11.29). Therefore, again com-
bining Gaussian tail bounds with the union bound, we find that

```
P[‖ US ‖∞ > t ]≤ 2 e −
```
```
t^2 C min N
2 σ^2 +log k.
```
Let us set _t_ = 4 _σλN/_

###### √

_C_ minand then observe that our choice of _λN_ guarantees
that 8 _Nλ_^2 _N>_ log _p_ ≥log _k_. Putting together these pieces, we conclude that

‖ _US_ ‖∞≤ 4 _σλN/_

###### √

```
C minwith probability at least 1− 2 e − c^2 λ
```
(^2) _NN_

. Overall, we
conclude that

```
‖ β ̂ S − β ∗ S ‖∞≤ λN
```
###### [

```
4 σ
√
C min
```
###### +

###### ∥

###### ∥( X TS X S/N )−^1

###### ∥

###### ∥

```
∞
```
###### ]

###### ,

with probability greater than 1− 2 _e_ − _c_^2 _λ_

(^2) _NN_
, as claimed.


###### 310 THEORETICAL RESULTS FOR THE LASSO

### 11.5 Beyond the Basic Lasso

In this chapter, we have limited ourselves to discussion of the basic lasso,
which involves the least-squares loss function combined with the _`_ 1 -norm as a
regularizer. However, many of the ingredients have straightforward extensions
to more general cost functions, including logistic regression and other types
of generalized linear models, as well as to more exotic forms of regulariza-
tion, including the group lasso, nuclear norm, and other types of structured
regularizers. Here we sketch out the basic picture, referring the reader to the
bibliographic section for links to further details.
Consider an objective function of the form

```
F ( β ) =
```
###### 1

###### N

###### ∑ N

```
i =1
```
```
f ( β ; zi ) , (11.38)
```
where the function _β_ 7→ _g_ ( _β_ ; _zi_ ) measures the fit of the parameter vector
_β_ ∈R _p_ to the sample _zi_. In the context of regression problems, each sample
takes the form _zi_ = ( _xi,yi_ )∈R _p_ ×R, whereas in problems such as the graphical
lasso, each sample corresponds to a vector _zi_ = _xi_ ∈R _p_. Letting Φ :R _p_ →R
denote a regularizer, we then consider an estimator of the form

```
β ̂∈arg min
β ∈Ω
```
```
{ F ( β ) + λN Φ( β )}. (11.39)
```
We can view _β_ ̂as an estimate of the deterministic vector _β_ ∗that minimizes
the population objective function _F_ ̄( _β_ ) : =E[ _f_ ( _β_ ; _Z_ )].
To put our previous discussion in context, the familiar lasso is a special
case of this general _M_ -estimator, based on the choices

```
f ( β ; xi,yi ) =
```
###### 1

###### 2

###### (

```
yi −〈 xi, β 〉
```
###### ) 2

```
, and Φ( β ) =‖ β ‖ 1 ,
```
and with the optimization taking place over Ω =R _p_. In the case of random
design, say with covariates _xi_ ∼ _N_ (0 _,_ **Σ** ), the population objective function
for linear regression takes the form _F_ ̄( _β_ ) =^12 ( _β_ − _β_ ∗) _T_ **Σ** ( _β_ − _β_ ∗) +^12 _σ_^2.
Considering the general _M_ -estimator (11.39), our goal here is to provide
some intuition on how to analyze the error‖ _β_ ̂− _β_ ∗‖ 2. When _N < p_ , then the
objective function (11.38) can never be strongly convex: indeed, assuming that
it is twice differentiable, the Hessian is a sum of _N_ matrices in _p_ dimensions,
and so must be rank degenerate. As noted previously, the restricted eigenvalue
condition is a special case of a more general property of cost functions and
regularizers, known as restricted strong convexity. In particular, given a set
C ⊂R _p_ , a differentiable function _F_ satisfies _restricted strong convexity_ overC
at _β_ ∗if there exists a parameter _γ >_ 0 such that

```
F ( β ∗+ ν )− F ( β ∗)−〈∇ F ( β ∗) , ν 〉≥ γ ‖ ν ‖^22 for all ν ∈C. (11.40)
```
When _F_ is twice differentiable, then this lower bound is equivalent to con-
trolling the Hessian in a neighborhood of _β_ ∗, as in the definition (11.9)—see


###### BIBLIOGRAPHIC NOTES 311

Exercise 11.6 for details. Thus, in the special case of a least-squares problem,
restricted strong convexity is equivalent to a restricted eigenvalue condition.
For what type of setsCcan a condition of this form be expected to hold?
Since our ultimate goal is to control the error vector _ν_ ̂= _β_ ̂− _β_ ∗, we need
only ensure that strong convexity hold over a subsetCthat is guaranteed—
typically with high probability over the data—to contain the error vector.
Such sets exist for regularizers that satisfy a property known as _decompos-
ability_ , which generalizes a basic property of the _`_ 1 -norm to a broader family
of regularizers. Decomposability is defined in terms of a subspaceMof the
parameter set Ω, meant to describe the structure expected in the optimum
_β_ ∗, and its orthogonal complementM⊥, corresponding to undesirable pertur-
bations away from the model structure. With this notation, a regularizer Φ is
said to be decomposable with respect toMif

```
Φ( β + θ ) = Φ( β ) + Φ( θ ) for all pairs ( β,θ )∈M×M⊥. (11.41)
```
In the case of the _`_ 1 -norm, the model subspace is simply the set of all vectors
with support on some fixed set _S_ , whereas the orthogonal complementM⊥
consists of vectors supported on the complementary set _Sc_. The decomposabil-
ity relation (11.41) follows from the coordinate-wise nature of the _`_ 1 -norm.
With appropriate choices of subspaces, many other regularizers are decom-
posable, including weighted forms of the lasso, the group lasso and overlap
group lasso penalties, and (with a minor generalization) the nuclear norm for
low-rank matrices. See the bibliographic section for further details.

### Bibliographic Notes

Knight and Fu (2000) derive asymptotic theory for the lasso and related es-
timators when the dimension _p_ is fixed; the irrepresentable condition (11.27)
appears implicitly in their analysis. Greenshtein and Ritov (2004) were the
first authors to provide a high-dimensional analysis of the lasso, in particu-
lar providing bounds on the prediction error allowing for the _p_  _N_ setting.
The irrepresentable or mutual incoherence condition (11.27) was developed
independently by Fuchs (2004) and Tropp (2006) in signal processing, and
Meinshausen and B ̈uhlmann (2006) as well as Zhao and Yu (2006) in statis-
tics. The notion of restricted eigenvalues was introduced by Bickel, Ritov and
Tsybakov (2009); it is a less restrictive condition than the restricted isome-
try property from Chapter 10. van de Geer and B ̈uhlmann (2009) provide a
comparison between these and other related conditions for proving estimation
error bounds on the lasso. Cand`es and Tao (2007) defined and developed the-
ory for the “Dantzig selector”, a problem closely related to the lasso. Raskutti,
Wainwright and Yu (2010) show that the RE condition holds with high prob-
ability for various types of random Gaussian design matrices; see Rudelson
and Zhou (2013) for extensions to sub-Gaussian designs.
The proof of Theorem 11.1 is based on the work of Bickel et al. (2009),


###### 312 THEORETICAL RESULTS FOR THE LASSO

whereas Negahban et al. (2012) derive the lasso error bound (11.24) for _`q_ -
sparse vectors. The basic inequality technique used in these proofs is standard
in the analysis of _M_ -estimators (van de Geer 2000). Raskutti, Wainwright and
Yu (2011) analyze the minimax rates of regression over _`q_ -balls, obtaining rates
for both _`_ 2 -error and prediction error. Theorem 11.2(a) was proved by Bunea,
Tsybakov and Wegkamp (2007), whereas part (b) is due to Bickel et al. (2009).
The restricted eigenvalue condition is actually required by any polynomial-
time method in order to achieve the “fast rates” given in Theorem 11.2(b),
as follows from the results of Zhang, Wainwright and Jordan (2014). Under
a standard assumption in complexity theory, they prove that no polynomial-
time algorithm can achieve the fast rate without imposing an RE condition.

Theorem 11.3 and the primal-dual witness (PDW) proof is due to Wain-
wright (2009). In the same paper, sharp threshold results are established for
Gaussian ensembles of design matrices, in particular concrete upper and lower
bounds on the sample size that govern the transition from success to failure
in support recovery. The proof of Lemma 11.2 was suggested by Carama-
nis (2010). The PDW method has been applied to a range of other prob-
lems, including analysis of group lasso (Obozinski et al. 2011, Wang, Liang
and Xing 2013) and related relaxations (Jalali, Ravikumar, Sanghavi and
Ruan 2010, Negahban and Wainwright 2011 _b_ ), graphical lasso (Ravikumar
et al. 2011), and methods for Gaussian graph selection with hidden vari-
ables (Chandrasekaran et al. 2012). Lee, Sun and Taylor (2013) provide a
general formulation of the PDW method for a broader class of _M_ -estimators.
As noted in Section 11.5, the analysis in this chapter can be extended to
a much broader class of _M_ -estimators, namely those based on decomposable
regularizers. Negahban et al. (2012) provide a general framework for analyzing
the estimation error‖ _β_ ̂− _β_ ∗‖ 2 for such _M_ -estimators. As alluded to here, the
two key ingredients are restricted strong convexity of the cost function, and
decomposability of the regularizer.

### Exercises

Ex. 11.1 For a given _q_ ∈(0 _,_ 1], recall the setB _q_ ( _Rq_ ) defined in Equation (11.7)
as a model of soft sparsity.

```
(a) A related object is the weak `q -ball with parameters ( C,α ), given by
```
```
B w ( α )( C ) : =
```
###### {

```
θ ∈R p | | θ |( j )≤ Cj − α for j = 1 ,...,p
```
###### }

_._ (11.42a)

```
Here| θ |( j )denote the order statistics of θ in absolute value, ordered from
largest to smallest (so that| θ |(1)= max
j =1 , 2 ,...,p
```
```
| θj |and| θ |( p )= min
j =1 , 2 ,...,p
```
```
| θj |.)
For any α > 1 /q , show that there is a radius Rq depending on ( C,α ) such
thatB w ( α )( C )⊆B q ( Rq ).
(b) For a given integer k ∈{ 1 , 2 ,...,p }, the best k -term approximation to a
```

###### EXERCISES 313

```
vector θ ∗∈R p is given by
```
```
Π k ( θ ∗) : = arg min
‖ θ ‖ 0 ≤ k
```
```
‖ θ − θ ∗‖^22. (11.42b)
```
```
Give a closed form expression for Π k ( θ ∗).
(c) When θ ∗∈B q ( Rq ) for some q ∈(0 , 1], show that the best k -term approx-
imation satisfies
```
```
‖Π k ( θ ∗)− θ ∗‖^22 ≤
```
###### (

```
Rq
```
```
) 2 /q ( 1
k
```
```
)^2 q − 1
```
_._ (11.42c)

Ex. 11.2 In this exercise, we analyze an alternative version of the lasso, namely
the estimator

```
β ̂= arg min
β ∈R p
‖ β ‖ 1 such that N^1 ‖ y − X β ‖^22 ≤ C , (11.43)
```
where the constant _C >_ 0 is a parameter to be chosen by the user. (This form
of the lasso is often referred to as _relaxed basis pursuit_ .)

```
(a) Suppose that C is chosen such that β ∗is feasible for the convex program.
Show that the error vector ν ̂= β ̂− β ∗must satisfy the cone constraint
‖̂ νSc ‖ 1 ≤‖̂ νS ‖ 1.
(b) Assuming the linear observation model y = X β ∗+ w , show that ν ̂satisfies
the basic inequality
‖ X ̂ ν ‖^22
N
```
###### ≤ 2

```
‖ X T w ‖∞
N
```
```
‖̂ ν ‖ 1 +
```
###### {

###### C −

```
‖ w ‖^22
N
```
###### }

###### .

```
(c) Assuming a γ -RE condition on X , use part (b) to establish a bound on
the ` 2 -error‖ β ̂− β ∗‖ 2.
```
Ex. 11.3 In this exercise, we sketch out the proof of the bound (11.24).

In particular, we show that if _λN_ ≥ ‖ **X**

```
T w ‖∞
N and β
```
```
∗∈B q ( Rq ), then the
```
Lagrangian lasso error satisfies a bound of the form

```
‖ β ̂− β ∗‖^22 ≤ c Rqλ^1 N − q/^2. (11.44a)
```
```
(a) Generalize Lemma 11.1 by showing that the error vector̂ ν satisfies the
“cone-like” constraint
```
```
‖̂ νSc ‖ 1 ≤ 3 ‖̂ νS ‖ 1 +‖ βS ∗ c ‖ 1 , (11.44b)
```
```
valid for any subset S ⊆{ 1 , 2 ,...,p }and its complement.
(b) Suppose that X satisfies a γ -RE condition over all vectors satisfying the
cone-like condition (11.44b). Prove that
```
```
‖̂ ν ‖^22 ≤ λN
```
###### {

```
4 ‖ ν ̂ S ‖ 1 +‖ βS ∗ c ‖ 1
```
###### }

###### .

```
again valid for any subset S of indices.
(c) Optimize the choice of S so as to obtain the claimed bound (11.44a).
```

###### 314 THEORETICAL RESULTS FOR THE LASSO

Ex. 11.4 Consider a random design matrix **X** ∈R _N_ × _p_ with each row _xi_ ∈R _p_
drawn i.i.d. from aN(0 _,_ **Σ** ) distribution, where the covariance matrix **Σ** is
strictly positive definite. Show that a _γ_ -RE condition holds over the setC( _S_ ; _α_ )
with high probability whenever the sample size is lower bounded as _N >
c_ | _S_ |^2 log _p_ for a sufficiently large constant _c_. ( _Remark:_ This scaling of the
sample size is not optimal; a more refined argument can be used to reduce
| _S_ |^2 to| _S_ |.)

Ex. 11.5 Consider a random design matrix **X** ∈R _N_ × _p_ with i.i.d. _N_ (0 _,_ 1) en-
tries. In this exercise, we show that the mutual incoherence condition (11.27)
holds with high probability as long as _N > ck_ log _p_ for a sufficiently large
numerical constant _c_. ( _Hint:_ For _N >_ 4 _k_ , it is known that the event

E={ _λ_ min

###### ( X TS X S

```
N
```
###### )

```
≥^14 }holds with high probability.)
(a) Show that
```
```
γ = 1−max
j ∈ Sc
max
z ∈{− 1 , +1} k
```
```
x Tj X S ( X TS X S )−^1 z
︸ ︷︷ ︸
Vj,z
```
###### .

```
(b) Recalling the eventE, show that there is a numerical constant c 0 > 0
such that
```
```
P
```
###### [

```
Vj,z ≥ t
```
###### ]

```
≤ e − c^0
```
```
Ntk^2
+P[E c ] for any t > 0 ,
```
```
valid for each fixed index j ∈ Sc and vector z ∈{− 1 , +1} k.
(c) Use part (b) to complete the proof.
```
Ex. 11.6 Consider a twice differentiable function _F_ :R _p_ →Rand a setC ⊂R _p_
such that

```
∇^2 F ( β )
‖ ν ‖^22
```
```
≥ γ ‖ ν ‖^22 for all ν ∈C,
```
uniformly for all _β_ in a neighborhood of some fixed parameter _β_ ∗. Show that
the RSC condition (11.40) holds.


## Bibliography

Agarwal, A., Anandkumar, A., Jain, P., Netrapalli, P. and Tandon, R. (2014),
Learning sparsely used overcomplete dictionaries via alternating mini-
mization, _Journal of Machine Learning Research Workshop_ **35** , 123–137.

Agarwal, A., Negahban, S. and Wainwright, M. J. (2012 _a_ ), Fast global con-
vergence of gradient methods for high-dimensional statistical recovery,
_Annals of Statistics_ **40** (5), 2452–2482.

Agarwal, A., Negahban, S. and Wainwright, M. J. (2012 _b_ ), Noisy matrix de-
composition via convex relaxation: Optimal rates in high dimensions,
_Annals of Statistics_ **40** (2), 1171–1197.

Alizadeh, A., Eisen, M., Davis, R. E., Ma, C., Lossos, I., Rosenwal, A.,
Boldrick, J., Sabet, H., Tran, T., Yu, X., Pwellm, J., Marti, G., Moore,
T., Hudsom, J., Lu, L., Lewis, D., Tibshirani, R., Sherlock, G., Chan,
W., Greiner, T., Weisenburger, D., Armitage, K., Levy, R., Wilson, W.,
Greve, M., Byrd, J., Botstein, D., Brown, P. and Staudt, L. (2000), Iden-
tification of molecularly and clinically distinct subtypes of diffuse large b
cell lymphoma by gene expression profiling, _Nature_ **403** , 503–511.

Alliney, S. and Ruzinsky, S. (1994), An algorithm for the minimization of
mixed L1 and L2 norms with application to Bayesian estimation, _Trans-
actions on Signal Processing_ **42** (3), 618–627.

Amini, A. A. and Wainwright, M. J. (2009), High-dimensional analysis of
semdefinite relaxations for sparse principal component analysis, _Annals
of Statistics_ **5B** , 2877–2921.

Anderson, T. (2003), _An Introduction to Multivariate Statistical Analysis, 3rd
ed._ , Wiley, New York.

Antoniadis, A. (2007), Wavelet methods in statistics: Some recent develop-
ments and their applications, _Statistics Surveys_ **1** , 16–55.

Bach, F. (2008), Consistency of trace norm minimization, _Journal of Machine
Learning Research_ **9** , 1019–1048.

Bach, F., Jenatton, R., Mairal, J. and Obozinski, G. (2012), Optimization with
sparsity-inducing penalties, _Foundations and Trends in Machine Learn-
ing_ **4** (1), 1–106.

Banerjee, O., El Ghaoui, L. and d’Aspremont, A. (2008), Model selection
through sparse maximum likelihood estimation for multivariate Gaussian
or binary data, _Journal of Machine Learning Research_ **9** , 485–516.

```
315
```

###### 316 BIBLIOGRAPHY

Baraniuk, R. G., Davenport, M. A., DeVore, R. A. and Wakin, M. B. (2008),
A simple proof of the restricted isometry property for random matrices,
_Constructive Approximation_ **28** (3), 253–263.

Barlow, R. E., Bartholomew, D., Bremner, J. M. and Brunk, H. D. (1972),
_Statistical Inference under Order Restrictions: The Theory and Applica-
tion of Isotonic Regression_ , Wiley, New York.

Beck, A. and Teboulle, M. (2009), A fast iterative shrinkage-thresholding al-
gorithm for linear inverse problems, _SIAM Journal on Imaging Sciences_
**2** , 183–202.

Benjamini, Y. and Hochberg, Y. (1995), Controlling the false discovery rate: a
practical and powerful approach to multiple testing, _Journal of the Royal
Statistical Society Series B._ **85** , 289–300.

Bennett, J. and Lanning, S. (2007), The netflix prize, in _Proceedings of KDD
Cup and Workshop in conjunction with KDD_.

Bento, J. and Montanari, A. (2009), Which graphical models are difficulty
to learn?, in _Advances in Neural Information Processing Systems (NIPS
Conference Proceedings)_.

Berk, R., Brown, L., Buja, A., Zhang, K. and Zhao, L. (2013), Valid post-
selection inference, _Annals of Statistics_ **41** (2), 802–837.

Berthet, Q. and Rigollet, P. (2013), Computational lower bounds for sparse
PCA, Technical report, Princeton University. arxiv1304.0828.

Bertsekas, D. (1999), _Nonlinear Programming_ , Athena Scientific, Belmont
MA.

Bertsekas, D. (2003), _Convex Analysis and Optimization_ , Athena Scientific,
Belmont MA.

Besag, J. (1974), Spatial interaction and the statistical analysis of lattice sys-
tems, _Journal of the Royal Statistical Society Series B_ **36** , 192–236.

Besag, J. (1975), Statistical analysis of non-lattice data, _The Statistician_
**24** (3), 179–195.

Bickel, P. J. and Levina, E. (2008), Covariance regularization by thresholding,
_Annals of Statistics_ **36** (6), 2577–2604.

Bickel, P. J., Ritov, Y. and Tsybakov, A. (2009), Simultaneous analysis of
Lasso and Dantzig selector, _Annals of Statistics_ **37** (4), 1705–1732.

Bien, J., Taylor, J. and Tibshirani, R. (2013), A Lasso for hierarchical inter-
actions, _Annals of Statistics_ **42** (3), 1111–1141.

Bien, J. and Tibshirani, R. (2011), Sparse estimation of a covariance matrix,
_Biometrika_ **98** (4), 807–820.

Birnbaum, A., Johnstone, I., Nadler, B. and Paul, D. (2013), Minimax bounds
for sparse PCA with noisy high-dimensional data, _Annals of Statistics_
**41** (3), 1055–1084.

Boser, B., Guyon, I. and Vapnik, V. (1992), A training algorithm for optimal


###### 317

```
margin classifiers, in Proceedings of the Annual Conference on Learning
Theory (COLT) , Philadelphia, Pa.
```
Boyd, S., Parikh, N., Chu, E., Peleato, B. and Eckstein, J. (2011), Distributed
optimization and statistical learning via the alternating direction method
of multipliers, _Foundations and Trends in Machine Learning_ **3** (1), 1–124.

Boyd, S. and Vandenberghe, L. (2004), _Convex Optimization_ , Cambridge Uni-
versity Press, Cambridge, UK.

Breiman, L. (1995), Better subset selection using the nonnegative garrote,
_Technometrics_ **37** , 738–754.

Breiman, L. and Ihaka, R. (1984), Nonlinear discriminant analysis via scaling
and ACE, Technical report, University of California, Berkeley.

B ̈uhlmann, P. (2013), Statistical significance in high-dimensional linear mod-
els, _Bernoul li_ **19** (4), 1212–1242.

B ̈uhlmann, P. and van de Geer, S. (2011), _Statistics for High-Dimensional
Data: Methods, Theory and Applications_ , Springer, New York.

Bunea, F., She, Y. and Wegkamp, M. (2011), Optimal selection of reduced
rank estimators of high-dimensional matrices, **39** (2), 1282–1309.

Bunea, F., Tsybakov, A. and Wegkamp, M. (2007), Sparsity oracle inequalities
for the Lasso, _Electronic Journal of Statistics_ pp. 169–194.

Burge, C. and Karlin, S. (1977), Prediction of complete gene structures in
human genomic DNA, _Journal of Molecular Biology_ **268** , 78–94.

Butte, A., Tamayo, P., Slonim, D., Golub, T. and Kohane, I. (2000), Discov-
ering functional relationships between RNA expression and chemother-
apeutic susceptibility using relevance networks, _Proceedings of the Na-
tional Academy of Sciences_ pp. 12182–12186.

Cand`es, E., Li, X., Ma, Y. and Wright, J. (2011), Robust Principal Component
Analysis?, _Journal of the Association for Computing Machinery_ **58** , 11:1–
11:37.

Cand`es, E. and Plan, Y. (2010), Matrix completion with noise, _Proceedings of
the IEEE_ **98** (6), 925–936.

Cand`es, E. and Recht, B. (2009), Exact matrix completion via convex opti-
mization, _Foundation for Computational Mathematics_ **9** (6), 717–772.

Cand`es, E., Romberg, J. K. and Tao, T. (2006), Stable signal recovery from
incomplete and inaccurate measurements, _Communications on Pure and
Applied Mathematics_ **59** (8), 1207–1223.

Cand`es, E. and Tao, T. (2005), Decoding by linear programming, _IEEE Trans-
actions on Information Theory_ **51** (12), 4203–4215.

Cand`es, E. and Tao, T. (2007), The Dantzig selector: Statistical estimation
when p is much larger than n, _Annals of Statistics_ **35** (6), 2313–2351.

Cand`es, E. and Wakin, M. (2008), An introduction to compressive sampling,
_Signal Processing Magazine, IEEE_ **25** (2), 21–30.


###### 318 BIBLIOGRAPHY

Caramanis, C. (2010), ‘Personal communication’.

Chandrasekaran, V., Parrilo, P. A. and Willsky, A. S. (2012), Latent variable
graphical model selection via convex optimization, _Annals of Statistics_
**40** (4), 1935–1967.

Chandrasekaran, V., Sanghavi, S., Parrilo, P. A. and Willsky, A. S. (2011),
Rank-sparsity incoherence for matrix decomposition, _SIAM Journal on
Optimization_ **21** , 572–596.

Chaudhuri, S., Drton, M. and Richardson, T. S. (2007), Estimation of a co-
variance matrix with zeros, _Biometrika_ pp. 1–18.

Chen, S., Donoho, D. and Saunders, M. (1998), Atomic decomposition by
basis pursuit, _SIAM Journal of Scientific Computing_ **20** (1), 33–61.

Cheng, J., Levina, E. and Zhu, J. (2013), High-dimensional Mixed Graphical
Models, _arXiv:1304.2810_.

Chi, E. C. and Lange, K. (2014), Splitting methods for convex clustering,
_Journal of Computational and Graphical Statistics (online access)_.

Choi, Y., Taylor, J. and Tibshirani, R. (2014), Selecting the number of
principal components: estimation of the true rank of a noisy matrix.
arXiv:1410.8260.

Clemmensen, L. (2012), _sparseLDA: Sparse Discriminant Analysis_. R package
version 0.1-6.
**URL:** _[http://CRAN.R-project.org/package=sparseLDA](http://CRAN.R-project.org/package=sparseLDA)_

Clemmensen, L., Hastie, T., Witten, D. and Ersboll, B. (2011), Sparse dis-
criminant analysis, _Technometrics_ **53** , 406–413.

Clifford, P. (1990), Markov random fields in statistics, in G. Grimmett and
D. J. A. Welsh, eds, _Disorder in physical systems_ , Oxford Science Publi-
cations.

Cohen, A., Dahmen, W. and DeVore, R. A. (2009), Compressed sensing and
best k-term approximation, _Journal of the American Mathematical Soci-
ety_ **22** (1), 211–231.

Cox, D. and Wermuth, N. (1996), _Multivariate Dependencies: Models, Analysis
and Interpretation_ , Chapman & Hall, London.

d’Aspremont, A., Banerjee, O. and El Ghaoui, L. (2008), First order methods
for sparse covariance selection, _SIAM Journal on Matrix Analysis and its
Applications_ **30** (1), 55–66.

d’Aspremont, A., El Ghaoui, L., Jordan, M. I. and Lanckriet, G. R. G. (2007),
A direct formulation for sparse PCA using semidefinite programming,
_SIAM Review_ **49** (3), 434–448.

Davidson, K. R. and Szarek, S. J. (2001), Local operator theory, random ma-
trices, and Banach spaces, in _Handbook of Banach Spaces_ , Vol. 1, Elsevier,
Amsterdam, NL, pp. 317–336.

De Leeuw, J. (1994), Block-relaxation algorithms in statistics, in H. Bock,


###### 319

```
W. Lenski and M. M. Richter, eds, Information Systems and Data Anal-
ysis , Springer-Verlag, Berlin.
```
Dobra, A., Hans, C., Jones, B., Nevins, J. R., Yao, G. and West, M. (2004),
Sparse graphical models for exploring gene expression data, _Journal of
Multivariate Analysis_ **90** (1), 196 – 212.

Donoho, D. (2006), Compressed sensing, _IEEE Transactions on Information
Theory_ **52** (4), 1289–1306.

Donoho, D. and Huo, X. (2001), Uncertainty principles and ideal atomic de-
composition, _IEEE Trans. Info Theory_ **47** (7), 2845–2862.

Donoho, D. and Johnstone, I. (1994), Ideal spatial adaptation by wavelet
shrinkage, _Biometrika_ **81** , 425–455.

Donoho, D. and Stark, P. (1989), Uncertainty principles and signal recovery,
_SIAM Journal of Applied Mathematics_ **49** , 906–931.

Donoho, D. and Tanner, J. (2009), Counting faces of randomly-projected
polytopes when the projection radically lowers dimension, _Journal of the
American Mathematical Society_ **22** (1), 1–53.

Dudoit, S., Fridlyand, J. and Speed, T. (2002), Comparison of discrimina-
tion methods for the classification of tumors using gene expression data,
_Journal of the American Statistical Association_ **97** (457), 77–87.

Edwards, D. (2000), _Introduction to Graphical Modelling, 2nd Edition_ ,
Springer, New York.

Efron, B. (1979), Bootstrap methods: another look at the jackknife, _Annals
of Statistics_ **7** , 1–26.

Efron, B. (1982), _The Jackknife, the Bootstrap and Other Resampling plans_ ,
Vol. 38, SIAM- CBMS-NSF Regional Conference Series in Applied Math-
ematics.

Efron, B. (2011), The bootstrap and Markov Chain Monte Carlo, _Journal of
Biopharmaceutical Statistics_ **21** (6), 1052–1062.

Efron, B. and Tibshirani, R. (1993), _An Introduction to the Bootstrap_ , Chap-
man & Hall, London.

El Ghaoui, L., Viallon, V. and Rabbani, T. (2010), Safe feature elimination in
sparse supervised learning, _Pacific journal of optimization_ **6** (4), 667–698.

El Karoui, N. (2008), Operator norm consistent estimation of large-
dimensional sparse covariance matrices, _Annals of Statistics_ **36** (6), 2717–
2756.

Elad, M. and Bruckstein, A. M. (2002), A generalized uncertainty principle
and sparse representation in pairs of bases, _IEEE Transactions on Infor-
mation Theory_ **48** (9), 2558–2567.

Erdos, P. and Renyi, A. (1961), On a classical problem of probability theory,
_Magyar Tud. Akad. Mat. Kutat Int. Kzl._ **6** , 215–220. (English and Russian
summary).


###### 320 BIBLIOGRAPHY

Erhan, D., Bengio, Y., Courville, A., Manzagol, P.-A., Vincent, P. and Ben-
gio, S. (2010), Why does unsupervised pre-training help deep learning?,
_Journal of Machine Learning Research_ **11** , 625–660.

Fan, J. and Li, R. (2001), Variable selection via nonconcave penalized likeli-
hood and its oracle properties, _Journal of the American Statistical Asso-
ciation_ **96** (456), 1348–1360.

Fazel, M. (2002), Matrix Rank Minimization with Applications, PhD thesis,
Stanford. Available online: [http://faculty.washington.edu/mfazel/thesis-](http://faculty.washington.edu/mfazel/thesis-)
final.pdf.

Feuer, A. and Nemirovski, A. (2003), On sparse representation in pairs of
bases, _IEEE Transactions on Information Theory_ **49** (6), 1579–1581.

Field, D. (1987), Relations between the statistics of natural images and the
response properties of cortical cells, _Journal of the Optical Society of
America_ **A4** , 2379–2394.

Fisher, M. E. (1966), On the Dimer solution of planar Ising models, _Journal
of Mathematical Physics_ **7** , 1776–1781.

Fithian, W., Sun, D. and Taylor, J. (2014), Optimal inference after model
selection, _ArXiv e-prints_.

Friedman, J., Hastie, T., Hoefling, H. and Tibshirani, R. (2007), Pathwise
coordinate optimization, _Annals of Applied Statistics_ **1** (2), 302–332.

Friedman, J., Hastie, T., Simon, N. and Tibshirani, R. (2015), _glmnet: Lasso
and elastic-net regularized generalized linear models_. R package version
2.0.

Friedman, J., Hastie, T. and Tibshirani, R. (2008), Sparse inverse covariance
estimation with the graphical Lasso, _Biostatistics_ **9** , 432–441.

Friedman, J., Hastie, T. and Tibshirani, R. (2010 _a_ ), Applications of the Lasso
and grouped Lasso to the estimation of sparse graphical models, Technical
report, Stanford University, Statistics Department.

Friedman, J., Hastie, T. and Tibshirani, R. (2010 _b_ ), Regularization paths for
generalized linear models via coordinate descent, _Journal of Statistical
Software_ **33** (1), 1–22.

Fu, W. (1998), Penalized regressions: the bridge versus the lasso, _Journal of
Computational and Graphical Statistics_ **7** (3), 397–416.

Fuchs, J. (2000), On the application of the global matched filter to doa es-
timation with uniform circular arrays, in _Proceedings of the Acoustics,
Speech, and Signal Processing, 2000. on IEEE International Conference_

_- Volume 05_ , ICASSP ’00, IEEE Computer Society, Washington, DC,
USA, pp. 3089–3092.

Fuchs, J. (2004), Recovery of exact sparse representations in the presence
of noise, in _International Conference on Acoustics, Speech, and Signal
Processing_ , Vol. 2, pp. 533–536.


###### 321

Gannaz, I. (2007), Robust estimation and wavelet thresholding in partially
linear models, _Statistics and Computing_ **17** (4), 293–310.

Gao, H. and Bruce, A. (1997), Waveshrink with firm shrinkage, _Statistica
Sinica_ **7** , 855–874.

Geman, S. and Geman, D. (1984), Stochastic relaxation, Gibbs distributions,
and the Bayesian restoration of images, _IEEE Transactions on Pattern
Analysis and Machine Intel ligence_ **6** , 721–741.

Golub, G. and Loan, C. V. (1996), _Matrix Computations_ , Johns Hopkins Uni-
versity Press, Baltimore.

Gorski, J., Pfeuffer, F. and Klamroth, K. (2007), Biconvex sets and opti-
mization with biconvex functions: a survey and extensions, _Mathematical
Methods of Operations Research_ **66** (3), 373–407.

Gramacy, R. (2011), ‘The monomvn package: Estimation for multivariate nor-
mal and student-t data with monotone missingness’, CRAN. R package
version 1.8.

Grazier G’Sell, M., Taylor, J. and Tibshirani, R. (2013), Adaptive testing for
the graphical Lasso. arXiv: 1307.4765.

Grazier G’Sell, M., Wager, S., Chouldechova, A. and Tibshirani, R. (2015),
Sequential selection procedures and false discovery rate control. arXiv:
1309.5352: To appear, Journal of the Royal Statistical Society Series B.

Greenshtein, E. and Ritov, Y. (2004), Persistency in high dimensional lin-
ear predictor-selection and the virtue of over-parametrization, _Bernoul li_
**10** , 971–988.

Greig, D. M., Porteous, B. T. and Seheuly, A. H. (1989), Exact maximum a
posteriori estimation for binary images, _Journal of the Royal Statistical
Society Series B_ **51** , 271–279.

Grimmett, G. R. (1973), A theorem about random fields, _Bul letin of the Lon-
don Mathematical Society_ **5** , 81–84.

Gross, D. (2011), Recovering low-rank matrices from few coefficients in any
basis, _IEEE Transactions on Information Theory_ **57** (3), 1548–1566.

Gu, C. (2002), _Smoothing Spline ANOVA Models_ , Springer Series in Statistics,
Springer, New York, NY.

Hammersley, J. M. and Clifford, P. (1971), Markov fields on finite graphs and
lattices. Unpublished.

Hardoon, D. and Shawe-Taylor, J. (2011), Sparse canonical correlation anal-
ysis, _Machine Learning_ **83** (3), 331–353.

Hastie, T., Buja, A. and Tibshirani, R. (1995), Penalized discriminant analy-
sis, _Annals of Statistics_ **23** , 73–102.

Hastie, T. and Mazumder, R. (2013), _softImpute: matrix completion via iter-
ative soft-thresholded SVD_. R package version 1.0.
**URL:** _[http://CRAN.R-project.org/package=softImpute](http://CRAN.R-project.org/package=softImpute)_


###### 322 BIBLIOGRAPHY

Hastie, T. and Tibshirani, R. (1990), _Generalized Additive Models_ , Chapman
& Hall, London.

Hastie, T. and Tibshirani, R. (2004), Efficient quadratic regularization for
expression arrays, _Biostatistics,_ **5** , 329–340.

Hastie, T., Tibshirani, R. and Buja, A. (1994), Flexible discriminant analy-
sis by optimal scoring, _Journal of the American Statistical Association_
**89** , 1255–1270.

Hastie, T., Tibshirani, R. and Friedman, J. (2009), _The Elements of Statistical
Learning: Data Mining, Inference and Prediction_ , second edn, Springer
Verlag, New York.

Hastie, T., Tibshirani, R., Narasimhan, B. and Chu, G. (2003), _pamr: Predic-
tion Analysis for Microarrays in R_. R package version 1.54.1.
**URL:** _[http://CRAN.R-project.org/package=pamr](http://CRAN.R-project.org/package=pamr)_

Hocking, T., Vert, J.-P., Bach, F. and Joulin, A. (2011), Clusterpath: an al-
gorithm for clustering using convex fusion penalties., in L. Getoor and
T. Scheffer, eds, _Proceedings of the Twenty-Eighth International Confer-
ence on Machine Learning (ICML)_ , Omnipress, pp. 745–752.

Hoefling, H. (2010), A path algorithm for the fused Lasso signal approximator,
_Journal of Computational and Graphical Statistics_ **19** (4), 984–1006.

Hoefling, H. and Tibshirani, R. (2009), Estimation of sparse binary pairwise
Markov networks using pseudo-likelihoods, _Journal of Machine Learning
Research_ **19** , 883–906.

Horn, R. A. and Johnson, C. R. (1985), _Matrix Analysis_ , Cambridge University
Press, Cambridge.

Hsu, D., Kakade, S. M. and Zhang, T. (2011), Robust matrix decomposi-
tion with sparse corruptions, _IEEE Transactions on Information Theory_
**57** (11), 7221–7234.

Huang, J., Ma, S. and Zhang, C.-H. (2008), Adaptive Lasso for sparse high-
dimensional regression models, _Statistica Sinica_ **18** , 1603–1618.

Huang, J. and Zhang, T. (2010), The benefit of group sparsity, _The Annals of
Statistics_ **38** (4), 1978–2004.

Hunter, D. R. and Lange, K. (2004), A tutorial on MM algorithms, _The Amer-
ican Statistician_ **58** (1), 30–37.

Ising, E. (1925), Beitrag zur theorie der ferromagnetismus, _Zeitschrift f ̈ur
Physik_ **31** (1), 253–258.

Jacob, L., Obozinski, G. and Vert, J.-P. (2009), Group Lasso with overlap
and graph Lasso, in _Proceeding of the 26th International Conference on
Machine Learning, Montreal, Canada_.

Jalali, A., Ravikumar, P., Sanghavi, S. and Ruan, C. (2010), A dirty model
for multi-task learning, in _Advances in Neural Information Processing
Systems 23_ , pp. 964–972.


###### 323

Javanmard, A. and Montanari, A. (2013), Hypothesis testing in high-
dimensional regression under the Gaussian random design model: Asymp-
totic theory. arXiv: 1301.4240.

Javanmard, A. and Montanari, A. (2014), Confidence intervals and hypothe-
sis testing for high-dimensional regression, _Journal of Machine Learning
Research_ **15** , 2869–2909.

Jerrum, M. and Sinclair, A. (1993), Polynomial-time approximation algo-
rithms for the Ising model, _SIAM Journal of Computing_ **22** , 1087–1116.

Jerrum, M. and Sinclair, A. (1996), The Markov chain Monte Carlo method:
An approach to approximate counting and integration, in D. Hochbaum,
ed., _Approximation algorithms for NP-hard problems_ , PWS Publishing,
Boston.

Johnson, N. (2013), A dynamic programming algorithm for the fused Lasso
and _`_ 0 -segmentation, _Journal of Computational and Graphical Statistics_
**22** (2), 246–260.

Johnson, W. B. and Lindenstrauss, J. (1984), Extensions of Lipschitz map-
pings into a Hilbert space, _Contemporary Mathematics_ **26** , 189–206.

Johnstone, I. (2001), On the distribution of the largest eigenvalue in principal
components analysis, _Annals of Statistics_ **29** (2), 295–327.

Johnstone, I. and Lu, A. (2009), On consistency and sparsity for principal
components analysis in high dimensions, _Journal of the American Statis-
tical Association_ **104** , 682–693.

Jolliffe, I. T., Trendafilov, N. T. and Uddin, M. (2003), A modified principal
component technique based on the Lasso, _Journal of Computational and
Graphical Statistics_ **12** , 531–547.

Kaiser, H. (1958), The varimax criterion for analytic rotation in factor anal-
ysis, _Psychometrika_ **23** , 187–200.

Kalisch, M. and B ̈uhlmann, P. (2007), Estimating high-dimensional directed
acyclic graphs with the PC algorithm, _Journal of Machine Learning Re-
search_ **8** , 613–636.

Kastelyn, P. W. (1963), Dimer statistics and phase transitions, _Journal of
Mathematical Physics_ **4** , 287–293.

Keshavan, R. H., Montanari, A. and Oh, S. (2010), Matrix completion from
noisy entries, _Journal of Machine Learning Research_ **11** , 2057–2078.

Keshavan, R. H., Oh, S. and Montanari, A. (2009), Matrix completion from
a few entries, _IEEE Transactions on Information Theory_ **56(6)** , 2980–
2998.

Kim, S., Koh, K., Boyd, S. and Gorinevsky, D. (2009), L1 trend filtering,
_SIAM Review, problems and techniques section_ **51** (2), 339–360.

Knight, K. and Fu, W. J. (2000), Asymptotics for Lasso-type estimators, _An-
nals of Statistics_ **28** , 1356–1378.


###### 324 BIBLIOGRAPHY

Koh, K., Kim, S. and Boyd, S. (2007), An interior-point method for large-scale
_`_ 1 -regularized logistic regression, _Journal of Machine Learning Research_
**8** , 1519–1555.

Koller, D. and Friedman, N. (2009), _Probabilistic Graphical Models_ , The MIT
Press, Cambridge MA.

Koltchinskii, V., Lounici, K. and Tsybakov, A. (2011), Nuclear-norm penal-
ization and optimal rates for noisy low-rank matrix completion, _Annals
of Statistics_ **39** , 2302–2329.

Koltchinskii, V. and Yuan, M. (2008), Sparse recovery in large ensembles of
kernel machines, in _Proceedings of the Annual Conference on Learning
Theory (COLT)_.

Koltchinskii, V. and Yuan, M. (2010), Sparsity in multiple kernel learning,
_Annals of Statistics_ **38** , 3660–3695.

Krahmer, F. and Ward, R. (2011), New and improved Johnson-Lindenstrauss
embeddings via the restricted isometry property, _SIAM Journal on Math-
ematical Analysis_ **43** (3), 1269–1281.

Lang, K. (1995), Newsweeder: Learning to filter netnews., in _Proceedings of the
Twelfth International Conference on Machine Learning (ICML)_ , pp. 331–
339.

Lange, K. (2004), _Optimization_ , Springer, New York.

Lange, K., Hunter, D. R. and Yang, I. (2000), Optimization transfer using sur-
rogate objective functions (with discussion), _Computational and Graphi-
cal Statistics_ **9** , 1–59.

Laurent, M. (2001), Matrix completion problems, in _The Encyclopedia of Op-
timization_ , Kluwer Academic, pp. 221–229.

Lauritzen, S. L. (1996), _Graphical Models_ , Oxford University Press.

Lauritzen, S. L. and Spiegelhalter, D. J. (1988), Local computations with
probabilities on graphical structures and their application to expert sys-
tems (with discussion), _Journal of the Royal Statistical Society Series B_
**50** , 155–224.

Le Cun, Y., Boser, B., Denker, J., Henderson, D., Howard, R., Hubbard,
W. and Jackel, L. (1990), Handwritten digit recognition with a back-
propogation network, in D. Touretzky, ed., _Advances in Neural Informa-
tion Processing Systems_ , Vol. 2, Morgan Kaufman, Denver, CO, pp. 386–
404.

Le, Q., Ranzato, M., Monga, R., Devin, M., Chen, K., Corrado, G., Dean, J.
and Ng, A. (2012), Building high-level features using large scale unsu-
pervised learning, in _Proceedings of the 29th International Conference on
Machine Learning_ , Edinburgh, Scotland.

Lee, J. and Hastie, T. (2014), Learning the structure of mixed graphical mod-
els, _Journal of Computational and Graphical Statistics_. advanced online


###### 325

```
access.
```
Lee, J., Sun, D., Sun, Y. and Taylor, J. (2016), Exact post-selection inference,
with application to the Lasso, _Annals of Statistics_ **44** (4), 907–927.

Lee, J., Sun, Y. and Saunders, M. (2014), Proximal newton-type meth-
ods for minimizing composite functions, _SIAM Journal on Optimization_
**24** (3), 1420–1443.

Lee, J., Sun, Y. and Taylor, J. (2013), On model selection consistency of _m_ -
estimators with geometrically decomposable penalties, Technical report,
Stanford University. arxiv1305.7477v4.

Lee, M., Shen, H., Huang, J. and Marron, J. (2010), Biclustering via sparse
singular value decomposition, _Biometrics_ pp. 1086–1095.

Lee, S., Lee, H., Abneel, P. and Ng, A. (2006), Efficient L1 logistic regression,
in _Proceedings of the Twenty-First National Conference on Artificial In-
tel ligence (AAAI-06)_.

Lei, J. and Vu, V. Q. (2015), Sparsistency and Agnostic Inference in Sparse
PCA, _Ann. Statist._ **43** (1), 299–322.

Leng, C. (2008), Sparse optimal scoring for multiclass cancer diagnosis and
biomarker detection using microarray data, _Computational Biology and
Chemistry_ **32** , 417–425.

Li, L., Huang, W., Gu, I. Y. and Tian, Q. (2004), Statistical modeling of
complex backgrounds for foreground object detection, _IEEE Transactions
on Image Processing_ **13** (11), 1459–1472.

Lim, M. and Hastie, T. (2014), Learning interactions via hierarchical group-
Lasso regularization, _Journal of Computational and Graphical Statistics
(online access)_.

Lin, Y. and Zhang, H. H. (2003), Component selection and smoothing in
smoothing spline analysis of variance models, Technical report, Depart-
ment of Statistics, University of Wisconsin, Madison.

Lockhart, R., Taylor, J., Tibshirani 2 , R. and Tibshirani, R. (2014), A signifi-
cance test for the Lasso, _Annals of Statistics (with discussion)_ **42** (2), 413–
468.

Loftus, J. and Taylor, J. (2014), A significance test for forward stepwise model
selection. arXiv:1405.3920.

Lounici, K., Pontil, M., Tsybakov, A. and van de Geer, S. (2009), Taking ad-
vantage of sparsity in multi-task learning, Technical report, ETH Zurich.

Lustig, M., Donoho, D., Santos, J. and Pauly, J. (2008), Compressed sensing
MRI, _IEEE Signal Processing Magazine_ **27** , 72–82.

Lykou, A. and Whittaker, J. (2010), Sparse CCA using a Lasso with positiv-
ity constraints, _Computational Statistics & Data Analysis_ **54** (12), 3144–
3157.

Ma, S., Xue, L. and Zou, H. (2013), Alternating direction methods for la-


###### 326 BIBLIOGRAPHY

```
tent variable Gaussian graphical model selection, Neural Computation
25 , 2172–2198.
```
Ma, Z. (2010), Contributions to high-dimensional principal component anal-
ysis, PhD thesis, Department of Statistics, Stanford University.

Ma, Z. (2013), Sparse principal component analysis and iterative thresholding,
_Annals of Statistics_ **41** (2), 772–801.

Mahoney, M. W. (2011), Randomized algorithms for matrices and data, _Foun-
dations and Trends in Machine Learning in Machine Learning_ **3** (2).

Mangasarian, O. (1999), Arbitrary-norm separating plane., _Operations Re-
search Letters_ **24** (1-2), 15–23.

Mazumder, R., Friedman, J. and Hastie, T. (2011), _Sparsenet_ : Coordinate
descent with non-convex penalties, _Journal of the American Statistical
Association_ **106** (495), 1125–1138.

Mazumder, R. and Hastie, T. (2012), The Graphical Lasso: New insights and
alternatives, _Electronic Journal of Statistics_ **6** , 2125–2149.

Mazumder, R., Hastie, T. and Friedman, J. (2012), _sparsenet: Fit sparse linear
regression models via nonconvex optimization_. R package version 1.0.
**URL:** _[http://CRAN.R-project.org/package=sparsenet](http://CRAN.R-project.org/package=sparsenet)_

Mazumder, R., Hastie, T. and Tibshirani, R. (2010), Spectral regularization
algorithms for learning large incomplete matrices, _Journal of Machine
Learning Research_ **11** , 2287–2322.

McCullagh, P. and Nelder, J. (1989), _Generalized Linear Models_ , Chapman &
Hall, London.

Meier, L., van de Geer, S. and B ̈uhlmann, P. (2008), The group Lasso for
logistic regression, _Journal of the Royal Statistical Society B_ **70** (1), 53–
71.

Meier, L., van de Geer, S. and B ̈uhlmann, P. (2009), High-dimensional additive
modeling, _Annals of Statistics_ **37** , 3779–3821.

Meinshausen, N. (2007), Relaxed Lasso, _Computational Statistics and Data
Analysis_ pp. 374–393.

Meinshausen, N. and B ̈uhlmann, P. (2006), High-dimensional graphs and vari-
able selection with the Lasso, _Annals of Statistics_ **34** , 1436–1462.

Meinshausen, N. and B ̈uhlmann, P. (2010), Stability selection, _Journal of the
Royal Statistical Society Series B_ **72** (4), 417–473.

M ́ezard, M. and Montanari, A. (2008), _Information, Physics and Computa-
tion_ , Oxford University Press, New York, NY.

Negahban, S., Ravikumar, P., Wainwright, M. J. and Yu, B. (2012), A unified
framework for high-dimensional analysis of _M_ -estimators with decom-
posable regularizers, _Statistical Science_ **27** (4), 538–557.

Negahban, S. and Wainwright, M. J. (2011 _a_ ), Estimation of (near) low-rank
matrices with noise and high-dimensional scaling, _Annals of Statistics_


###### 327

###### 39 (2), 1069–1097.

Negahban, S. and Wainwright, M. J. (2011 _b_ ), Simultaneous support recovery
in high-dimensional regression: Benefits and perils of _`_ 1 _,_ ∞-regularization,
_IEEE Transactions on Information Theory_ **57** (6), 3481–3863.

Negahban, S. and Wainwright, M. J. (2012), Restricted strong convexity and
(weighted) matrix completion: Optimal bounds with noise, _Journal of
Machine Learning Research_ **13** , 1665–1697.

Nelder, J. and Wedderburn, R. (1972), Generalized linear models, _J. Royal
Statist. Soc. B._ **135** (3), 370–384.

Nemirovski, A. and Yudin, D. B. (1983), _Problem Complexity and Method
Efficiency in Optimization_ , John Wiley and Sons, New York.

Nesterov, Y. (2004), _Introductory Lectures on Convex Optimization_ , Kluwer
Academic Publishers, New York.

Nesterov, Y. (2007), Gradient methods for minimizing composite objective
function, Technical Report 76, Center for Operations Research and
Econometrics (CORE), Catholic University of Louvain (UCL).

Netrapalli, P., Jain, P. and Sanghavi, S. (2013), Phase retrieval using alternat-
ing minimization, in _Advances in Neural Information Processing Systems
(NIPS Conference Proceedings)_ , pp. 2796–2804.

Obozinski, G., Wainwright, M. J. and Jordan, M. I. (2011), Union support
recovery in high-dimensional multivariate regression, _Annals of Statistics_
**39** (1), 1–47.

Oldenburg, D. W., Scheuer, T. and Levy, S. (1983), Recovery of the acoustic
impedance from reflection seismograms, _Geophysics_ **48** (10), 1318–1337.

Olsen, S. (2002), ‘Amazon blushes over sex link gaffe’, CNET News.
[http://news.cnet.com/2100-1023-976435.html.](http://news.cnet.com/2100-1023-976435.html.)

Olshausen, B. and Field, D. (1996), Emergence of simple-cell receptive field
properties by learning a sparse code for natural images, _Nature_ **381**.

Park, T. and Casella, G. (2008), The Bayesian Lasso, _Journal of the American
Statistical Association_ **103** (482), 681–686.

Parkhomenko, E., Tritchler, D. and Beyene, J. (2009), Sparse canonical cor-
relation analysis with application to genomic data integration, _Statistical
Applications in Genetics and Molecular Biology_ **8** , 1–34.

Paul, D. and Johnstone, I. (2008), Augmented sparse principal component
analysis for high-dimensional data, Technical report, UC Davis.

Pearl, J. (2000), _Causality: Models, Reasoning and Inference_ , Cambridge Uni-
versity Press.

Pelckmans, K., De Moor, B. and Suykens, J. (2005), Convex clustering shrink-
age, in _Workshop on Statistics and Optimization of Clustering (PAS-
CAL), London, UK_.

Pilanci, M. and Wainwright, M. J. (2014), Randomized sketches of convex


###### 328 BIBLIOGRAPHY

```
programs with sharp guarantees, Technical report, UC Berkeley. Full
length version at arXiv:1404.7203; Presented in part at ISIT 2014.
```
Puig, A., Wiesel, A. and Hero, A. (2009), A multidimensional shrinkage
thresholding operator, in _Proceedings of the 15th workshop on Statistical
Signal Processing, SSP’09_ , IEEE, pp. 113–116.

Raskutti, G., Wainwright, M. J. and Yu, B. (2009), Lower bounds on minimax
rates for nonparametric regression with additive sparsity and smoothness,
in _Advances in Neural Information Processing Systems 22_ , MIT Press,
Cambridge MA., pp. 1563–1570.

Raskutti, G., Wainwright, M. J. and Yu, B. (2010), Restricted eigenvalue
conditions for correlated Gaussian designs, _Journal of Machine Learning
Research_ **11** , 2241–2259.

Raskutti, G., Wainwright, M. J. and Yu, B. (2011), Minimax rates of estima-
tion for high-dimensional linear regression over _`q_ -balls, _IEEE Transac-
tions on Information Theory_ **57** (10), 6976–6994.

Raskutti, G., Wainwright, M. J. and Yu, B. (2012), Minimax-optimal rates
for sparse additive models over kernel classes via convex programming,
_Journal of Machine Learning Research_ **12** , 389–427.

Ravikumar, P., Liu, H., Lafferty, J. and Wasserman, L. (2009), Sparse additive
models, _Journal of the Royal Statistical Society Series B._ **71** (5), 1009–
1030.

Ravikumar, P., Wainwright, M. J. and Lafferty, J. (2010), High-dimensional
ising model selection using _`_ 1 -regularized logistic regression, _Annals of
Statistics_ **38** (3), 1287–1319.

Ravikumar, P., Wainwright, M. J., Raskutti, G. and Yu, B. (2011),
High-dimensional covariance estimation by minimizing _`_ 1 -penalized log-
determinant divergence, _Electronic Journal of Statistics_ **5** , 935–980.

Recht, B. (2011), A simpler approach to matrix completion, _Journal of Ma-
chine Learning Research_ **12** , 3413–3430.

Recht, B., Fazel, M. and Parrilo, P. A. (2010), Guaranteed minimum-rank
solutions of linear matrix equations via nuclear norm minimization, _SIAM
Review_ **52** (3), 471–501.

Rennie, J. and Srebro, N. (2005), Fast maximum margin matrix factoriza-
tion for collaborative prediction, in _Proceedings of the 22nd International
Conference on Machine Learning_ , Association for Computing Machinery,
pp. 713–719.

Rish, I. and Grabarnik, G. (2014), _Sparse Modeling: Theory, Algorithms, and
Applications_ , Chapman and Hall/CRC.

Rockafellar, R. T. (1996), _Convex Analysis_ , Princeton University Press.

Rohde, A. and Tsybakov, A. (2011), Estimation of high-dimensional low-rank
matrices, _Annals of Statistics_ **39** (2), 887–930.


###### 329

Rosset, S. and Zhu, J. (2007), Adaptable, efficient and robust methods for
regression and classification via piecewise linear regularized coefficient
paths, _Annals of Statistics_ **35** (3).

Rosset, S., Zhu, J. and Hastie, T. (2004), Boosting as a regularized path
to a maximum margin classifier, _Journal of Machine Learning Research_
**5** , 941–973.

Rothman, A. J., Bickel, P. J., Levina, E. and Zhu, J. (2008), Sparse permu-
tation invariant covariance estimation, _Electronic Journal of Statistics_
**2** , 494–515.

Rubin, D. (1981), The Bayesian Bootstrap, _Annals of Statistics_ **9** , 130–134.

Rudelson, M. and Zhou, S. (2013), Reconstruction from anisotropic random
measurements, _IEEE Transactions on Information Theory_ **59** (6), 3434–
3447.

Ruderman, D. (1994), The statistics of natural images, _Network: Computation
in Neural Systems_ **5** , 517–548.

Santhanam, N. P. and Wainwright, M. J. (2008), Information-theoretic lim-
its of high-dimensional model selection, in _International Symposium on
Information Theory_ , Toronto, Canada.

Santosa, F. and Symes, W. W. (1986), Linear inversion of band-limited reflec-
tion seismograms, _SIAM Journal of Scientific and Statistical Computing_
**7** (4), 1307–1330.

Scheff ́e, H. (1953), A method for judging all contrasts in the analysis of vari-
ance, _Biometrika_ **40** , 87–104.

Schmidt, M., Niculescu-Mizil, A. and Murphy, K. (2007), Learning graphical
model structure using l1-regularization paths, in _AAAI proceedings_.
**URL:** _[http://www.cs.ubc.ca/](http://www.cs.ubc.ca/) murphyk/Papers/aaai07.pdf_

Shalev-Shwartz, S., Singer, Y. and Srebro, N. (2007), Pegasos: Primal esti-
mated sub-gradient solver for SVM, in _Proceedings of the 24th interna-
tional conference on Machine learning_ , pp. 807–814.

She, Y. and Owen, A. B. (2011), Outlier detection using nonconvex pe-
nalized regression, _Journal of the American Statistical Association_
**106** (494), 626–639.

Simon, N., Friedman, J., Hastie, T. and Tibshirani, R. (2011), Regulariza-
tion paths for Cox’s proportional hazards model via coordinate descent,
_Journal of Statistical Software_ **39** (5), 1–13.

Simon, N., Friedman, J., Hastie, T. and Tibshirani, R. (2013), A sparse-group
Lasso, _Journal of Computational and Graphical Statistics_ **22** (2), 231–245.

Simon, N. and Tibshirani, R. (2012), Standardization and the group Lasso
penalty, _Statistica Sinica_ **22** , 983–1001.

Simoncelli, E. P. (2005), Statistical modeling of photographic images, in
_Handbook of Video and Image Processing, 2nd Edition_ , Academic Press,


###### 330 BIBLIOGRAPHY

```
Waltham MA, pp. 431–441.
```
Simoncelli, E. P. and Freeman, W. T. (1995), The steerable pyramid: A flexible
architecture for multi-scale derivative computation, in _Int’l Conference
on Image Processing_ , Vol. III, IEEE Sig Proc Soc., Washington, DC,
pp. 444–447.

Singer, Y. and Dubiner, M. (2011), Entire relaxation path for maximum en-
tropy models, in _Proceedings of the Conference on Empirical Methods in
Natural Language Processing (EMNPL 2011)_ , pp. 941–948.

Srebro, N., Alon, N. and Jaakkola, T. (2005), Generalization error bounds
for collaborative prediction with low-rank matrices, _Advances in Neural
Information Processing Systems_.

Srebro, N. and Jaakkola, T. (2003), Weighted low-rank approximations, in
_Twentieth International Conference on Machine Learning_ , AAAI Press,
pp. 720–727.

Srebro, N., Rennie, J. and Jaakkola, T. (2005), Maximum margin matrix fac-
torization, _Advances in Neural Information Processing Systems_ **17** , 1329–
1336.

Stein, C. (1981), Estimation of the mean of a multivariate normal distribution,
_Annals of Statistics_ **9** , 1131–1151.

Stone, C. J. (1985), Additive regression and other non-parametric models,
_Annals of Statistics_ **13** (2), 689–705.

Taylor, J., Lockhart, R., Tibshirani 2 , R. and Tibshirani, R. (2014), Post-
selection adaptive inference for least angle regression and the Lasso.
arXiv: 1401.3889; submitted.

Taylor, J., Loftus, J. and Tibshirani 2 , R. (2016), Inference in adaptive regres-
sion via the Kac-Rice formula, _Annals of Statistics_ **44** (2), 743–770.

Thodberg, H. H. and Olafsdottir, H. (2003), Adding curvature to minimum
description length shape models, in _British Machine Vision Conference
(BMVC)_ , pp. 251–260.

Thomas, G. S. (1990), _The Rating Guide to Life in America’s Smal l Cities_ ,
Prometheus books. [http://college.cengage.com/mathematics/](http://college.cengage.com/mathematics/)
brase/understandable_statistics/7e/students/datasets/mlr/
frames/frame.html.

Tibshirani, R. (1996), Regression shrinkage and selection via the Lasso, _Jour-
nal of the Royal Statistical Society, Series B_ **58** , 267–288.

Tibshirani, R., Bien, J., Friedman, J., Hastie, T., Simon, N., Taylor, J. and
Tibshirani 2 , R. (2012), Strong rules for discarding predictors in Lasso-
type problems, _Journal of the Royal Statistical Society Series B._ pp. 245–
266.

Tibshirani, R. and Efron, B. (2002), Pre-validation and inference in microar-
rays, _Statistical Applications in Genetics and Molecular Biology_ pp. 1–15.


###### 331

Tibshirani, R., Hastie, T., Narasimhan, B. and Chu, G. (2001), Diagnosis of
multiple cancer types by shrunken centroids of gene expression, _Proceed-
ings of the National Academy of Sciences_ **99** , 6567–6572.

Tibshirani, R., Hastie, T., Narasimhan, B. and Chu, G. (2003), Class predic-
tion by nearest shrunken centroids, with applications to DNA microar-
rays, _Statistical Science_ pp. 104–117.

Tibshirani, R., Saunders, M., Rosset, S., Zhu, J. and Knight, K. (2005), Spar-
sity and smoothness via the fused Lasso, _Journal of the Royal Statistical
Society, Series B_ **67** , 91–108.

Tibshirani 2 , R. (2013), The Lasso problem and uniqueness, _Electronic Journal
of Statistics_ **7** , 1456–1490.

Tibshirani 2 , R. (2014), Adaptive piecewise polynomial estimation via trend
filtering, _Annals of Statistics_ **42** (1), 285–323.

Tibshirani 2 , R., Hoefling, H. and Tibshirani, R. (2011), Nearly-isotonic re-
gression, _Technometrics_ **53** (1), 54–61.

Tibshirani 2 , R. and Taylor, J. (2011), The solution path of the generalized
Lasso, _Annals of Statistics_ **39** (3), 1335–1371.

Tibshirani 2 , R. and Taylor, J. (2012), Degrees of freedom in Lasso problems,
_Annals of Statistics_ **40** (2), 1198–1232.

Trendafilov, N. T. and Jolliffe, I. T. (2007), DALASS: Variable selection in
discriminant analysis via the LASSO, _Computational Statistics and Data
Analysis_ **51** , 3718–3736.

Tropp, J. A. (2006), Just relax: Convex programming methods for identify-
ing sparse signals in noise, _IEEE Transactions on Information Theory_
**52** (3), 1030–1051.

Tseng, P. (1988), Coordinate ascent for maximizing nondifferentiable concave
functions, Technical Report LIDS-P ; 1840, Massachusetts Institute of
Technology. Laboratory for Information and Decision Systems.

Tseng, P. (1993), Dual coordinate ascent methods for non-strictly convex min-
imization, _Mathematical Programming_ **59** , 231–247.

Tseng, P. (2001), Convergence of block coordinate descent method for nondif-
ferentiable maximization, _Journal of Optimization Theory and Applica-
tions_ **109** (3), 474–494.

van de Geer, S. (2000), _Empirical Processes in M-Estimation_ , Cambridge Uni-
versity Press.

van de Geer, S. and B ̈uhlmann, P. (2009), On the conditions used to prove
oracle results for the Lasso, _Electronic Journal of Statistics_ **3** , 1360–1392.

van de Geer, S., B ̈uhlmann, P., Ritov, Y. and Dezeure, R. (2013), On asymp-
totically optimal confidence regions and tests for high-dimensional mod-
els. arXiv: 1303.0518v2.

van Houwelingen, H. C., Bruinsma, T., Hart, A. A. M., van’t Veer, L. J. and


###### 332 BIBLIOGRAPHY

```
Wessels, L. F. A. (2006), Cross-validated Cox regression on microarray
gene expression data, Statistics in Medicine 45 , 3201–3216.
```
Vandenberghe, L., Boyd, S. and Wu, S. (1998), Determinant maximization
with linear matrix inequality constraints, _SIAM Journal on Matrix Anal-
ysis and Applications_ **19** , 499–533.

Vapnik, V. (1996), _The Nature of Statistical Learning Theory_ , Springer, New
York.

Vempala, S. (2004), _The Random Projection Method_ , Discrete Mathemat-
ics and Theoretical Computer Science, American Mathematical Society,
Providence, RI.

Vershynin, R. (2012), Introduction to the non-asymptotic analysis of random
matrices, in _Compressed Sensing: Theory and Applications_ , Cambridge
University Press.

Vu, V. Q., Cho, J., Lei, J. and Rohe, K. (2013), Fantope projection and
selection: A near-optimal convex relaxation of sparse PCA, in _Advances in
Neural Information Processing Systems (NIPS Conference Proceedings)_ ,
pp. 2670–2678.

Vu, V. Q. and Lei, J. (2012), Minimax rates of estimation for sparse PCA
in high dimensions, in _15th Annual Conference on Artificial Intelligence
and Statistics_ , La Palma, Canary Islands.

Waaijenborg, S., Vers ́elewel de Witt Hamer, P. and Zwinderman, A. (2008),
Quantifying the association between gene expressions and DNA-markers
by penalized canonical correlation analysis, _Statistical Applications in
Genetics and Molecular Biology_ **7** , Article 3.

Wahba, G. (1990), _Spline Models for Observational Data_ , SIAM, Philadelphia,
PA.

Wainwright, M. J. (2009), Sharp thresholds for noisy and high-dimensional
recovery of sparsity using _`_ 1 -constrained quadratic programming (Lasso),
_IEEE Transactions on Information Theory_ pp. 2183–2202.

Wainwright, M. J. and Jordan, M. I. (2008), Graphical models, exponential
families and variational inference, _Foundations and Trends in Machine
Learning_ **1** (1–2), 1–305.

Wainwright, M. J., Simoncelli, E. P. and Willsky, A. S. (2001), Random cas-
cades on wavelet trees and their use in modeling and analyzing natural
images, _Applied Computational and Harmonic Analysis_ **11** , 89–123.

Wang, H. (2014), Coordinate descent algorithm for covariance graphical Lasso,
_Statistics and Computing_ **24** (4), 521–529.

Wang, J., Lin, B., Gong, P., Wonka, P. and Ye, J. (2013), Lasso screening
rules via dual polytope projection, in _Advances in Neural Information
Processing Systems (NIPS Conference Proceedings)_ , pp. 1070–1078.

Wang, L., Zhu, J. and Zou, H. (2006), The doubly regularized support vector


###### 333

```
machine, Statistica Sinica 16 (2), 589.
```
Wang, W., Liang, Y. and Xing, E. P. (2013), Block regularized Lasso for
multivariate multiresponse linear regression, in _Proceedings of the 16th
International Conference on Artifical Intel ligence and Statistics_ , Scotts-
dale, AZ.

Welsh, D. J. A. (1993), _Complexity: Knots, Colourings, and Counting_ , LMS
Lecture Note Series, Cambridge University Press, Cambridge.

Whittaker, J. (1990), _Graphical Models in Applied Multivariate Statistics_ , Wi-
ley, Chichester.

Winkler, G. (1995), _Image Analysis, Random Fields, and Dynamic Monte
Carlo methods_ , Springer-Verlag, New York, NY.

Witten, D. (2011), _penalizedLDA: Penalized classification using Fisher’s linear
discriminant_. R package version 1.0.
**URL:** _[http://CRAN.R-project.org/package=penalizedLDA](http://CRAN.R-project.org/package=penalizedLDA)_

Witten, D., Friedman, J. and Simon, N. (2011), New insights and faster com-
putations for the graphical Lasso, _Journal of Computational and Graph-
ical Statistics_ **20** , 892–200.

Witten, D. and Tibshirani, R. (2009), Extensions of sparse canonical correla-
tion analysis, with application to genomic data, _Statistical Applications
in Genetics and Molecular Biology_ **8(1)** , Article 28.

Witten, D. and Tibshirani, R. (2010), A framework for feature selec-
tion in clustering, _Journal of the American Statistical Association_
**105(490)** , 713–726.

Witten, D. and Tibshirani, R. (2011), Penalized classification using Fisher’s
linear discriminant, _Journal of the Royal Statistical Society Series B_
**73** (5), 753–772.

Witten, D., Tibshirani, R. and Hastie, T. (2009), A penalized matrix decom-
position, with applications to sparse principal components and canonical
correlation analysis, _Biometrika_ **10** , 515–534.

Wu, T., Chen, Y. F., Hastie, T., Sobel, E. and Lange, K. (2009), Genomewide
association analysis by Lasso penalized logistic regression, _Bioinformatics_
**25** (6), 714–721.

Wu, T. and Lange, K. (2008), Coordinate descent procedures for Lasso penal-
ized regression, _Annals of Applied Statistics_ **2** (1), 224–244.

Wu, T. and Lange, K. (2010), The MM alternative to EM, _Statistical Science_
**25** (4), 492–505.

Xu, H., Caramanis, C. and Mannor, S. (2010), Robust regression and Lasso,
_IEEE Transactions on Information Theory_ **56** (7), 3561–3574.

Xu, H., Caramanis, C. and Sanghavi, S. (2012), Robust PCA via outlier pur-
suit, _IEEE Transactions on Information Theory_ **58** (5), 3047–3064.

Yi, X., Caramanis, C. and Sanghavi, S. (2014), Alternating minimization for


###### 334 BIBLIOGRAPHY

```
mixed linear regression, in Proceedings of The 31st International Confer-
ence on Machine Learning , pp. 613–621.
```
Yuan, M., Ekici, A., Lu, Z. and Monteiro, R. (2007), Dimension reduction
and coefficient estimation in multivariate linear regression, _Journal of
the Royal Statistical Society Series B_ **69** (3), 329–346.

Yuan, M. and Lin, Y. (2006), Model selection and estimation in regression
with grouped variables, _Journal of the Royal Statistical Society, Series B_
**68** (1), 49–67.

Yuan, M. and Lin, Y. (2007 _a_ ), Model selection and estimation in the Gaussian
graphical model, _Biometrika_ **94** (1), 19–35.

Yuan, M. and Lin, Y. (2007 _b_ ), On the non-negative garrotte estimator, _Journal
of the Royal Statistical Society, Series B_ **69** (2), 143–161.

Yuan, X. T. and Zhang, T. (2013), Truncated power method for sparse eigen-
value problems, _Journal of Machine Learning Research_ **14** , 899–925.

Zhang, C.-H. (2010), Nearly unbiased variable selection under minimax con-
cave penalty, _Annals of Statistics_ **38** (2), 894–942.

Zhang, C.-H. and Zhang, S. (2014), Confidence intervals for low-dimensional
parameters with high-dimensional data, _Journal of the Royal Statistical
Society Series B_ **76** (1), 217–242.

Zhang, Y., Wainwright, M. J. and Jordan, M. I. (2014), Lower bounds on the
performance of polynomial-time algorithms for sparse linear regression,
in _Proceedings of the Annual Conference on Learning Theory (COLT)_ ,
Barcelona, Spain. Full length version at [http://arxiv.org/abs/1402.1918.](http://arxiv.org/abs/1402.1918.)

Zhao, P., Rocha, G. and Yu, B. (2009), Grouped and hierarchical model
selection through composite absolute penalties, _Annals of Statistics_
**37** (6A), 3468–3497.

Zhao, P. and Yu, B. (2006), On model selection consistency of Lasso, _Journal
of Machine Learning Research_ **7** , 2541–2567.

Zhao, Y., Levina, E. and Zhu, J. (2011), Community extraction for social net-
works, _Proceedings of the National Academy of Sciences_ **108** (18), 7321–
7326.

Zhou, S., Lafferty, J. and Wasserman, L. (2008), Time-varying undirected
graphs, in _Proceedings of the Annual Conference on Learning Theory
(COLT)_ , Helsinki, Finland.

Zhu, J., Rosset, S., Hastie, T. and Tibshirani, R. (2004), 1-norm support
vector machines, in _Advances in Neural Information Processing Systems_ ,
Vol. 16, pp. 49–56.

Zou, H. (2006), The adaptive Lasso and its oracle properties, _Journal of the
American Statistical Association_ **101** , 1418–1429.

Zou, H. and Hastie, T. (2005), Regularization and variable selection via the
elastic net, _Journal of the Royal Statistical Society Series B._ **67** (2), 301–


###### 335

###### 320.

Zou, H., Hastie, T. and Tibshirani, R. (2006), Sparse principal component
analysis, _Journal of Computational and Graphical Statistics_ **15** (2), 265–
286.

Zou, H., Hastie, T. and Tibshirani, R. (2007), On the degrees of freedom of
the Lasso, _Annals of Statistics_ **35** (5), 2173–2192.

Zou, H. and Li, R. (2008), One-step sparse estimates in nonconcave penalized
likelihood models, _The Annals of Statistics_ **36** (4), 1509–1533.



## Author Index

Abneel, P. 116
Agarwal, A. 176, 195
Alizadeh, A. 42
Alliney, S. 23
Alon, N. 195
Amini, A. A. 213, 232
Anandkumar, A. 195
Anderson, T. 261
Antoniadis, A. 27
Armitage, K. 42

Bach, F. 87, 195, 233
Banerjee, O. 248, 249, 262
Baraniuk, R. G. 285
Barlow, R. E. 83
Bartholomew, D. 83
Beck, A. 108
Bengio, S. 212
Bengio, Y. 212
Benjamini, Y. 162
Bennett, J. 170
Bento, J. 263
Berk, R. 160, 162
Berthet, Q. 232
Bertsekas, D. 131, 133
Besag, J. 261, 263
Beyene, J. 233
Bickel, P. J. 262, 263, 311
Bien, J. 68, 128, 130, 263
Birnbaum, A. 213, 232
Boldrick, J. 42
Boser, B. 37, 52
Botstein, D. 42
Boyd, S. 32, 35, 81, 121, 131, 206,
248, 262, 263

```
Breiman, L. 20, 23, 225
Bremner, J. M. 83
Brown, L. 160, 162
Brown, P. 42
Bruce, A. 87
Bruckstein, A. M. 285
Bruinsma, T. 43
Brunk, H. D. 83
B ̈uhlmann, P. 142, 250, 263, 311
Buja, A. 160, 162, 218, 222, 225
Bunea, F. 186, 311
Burge, C. 60
Butte, A. 263
Byrd, J. 42
```
```
Cand`es, E. 311
Caramanis, C. 26, 195, 312
Casella, G. 139, 161
Chan, W. 42
Chandrasekaran, V. 195, 260, 261,
312
Chaudhuri, S. 263
Chen, K. 211, 233
Chen, S. 23, 285
Chen, Y. F. 52
Cheng, J. 263
Chi, E. C. 232
Cho, J. 210
Choi, Y. 161
Chouldechova, A. 161, 163
Chu, E. 121
Chu, G. 219, 233
Clemmensen, L. 225, 226, 233, 239
Clifford, P. 261
Cohen, A. 285
```
```
337
```

###### 338 AUTHOR INDEX

Corrado, G. 211, 233
Courville, A. 212
Cox, D. 261

Dahmen, W. 285
d’Aspremont, A. 205, 206, 210, 232,
248, 249, 262
Davenport, M. A. 285
Davidson, K. R. 285
Davis, R. E. 42
De Leeuw, J. 127
De Moor, B. 233
Dean, J. 211, 233
Denker, J. 37
Devin, M. 211, 233
DeVore, R. A. 285
Dezeure, R. 158, 159, 162
Dobra, A. 262
Donoho, D. 23, 278, 285, 296
Drton, M. 263
Dubiner, M. 40
Dudoit, S. 233

Eckstein, J. 121
Edwards, D. 261
Efron, B. 45, 52, 142, 146, 147, 161
Eisen, M. 42
Ekici, A. 186
El Ghaoui, L. 131, 205, 206, 210,
232, 248, 249, 262
El Karoui, N. 263
Elad, M. 285
Erdos, P. 177
Erhan, D. 212
Ersboll, B. 225, 226, 233, 239

Fan, J. 84
Fazel, M. 174, 195
Feuer, A. 285
Field, D. 211, 233, 285
Fisher, M. E. 261
Fithian, W. 161
Freeman, W. T. 285
Fridlyand, J. 233
Friedman, J. 24, 36, 37, 43, 46, 48,
50, 52, 58, 77, 79, 86, 87, 113, 128,

###### 130, 184, 217, 221, 225, 227, 230,

###### 248–251, 255, 262, 263

```
Friedman, N. 261
Fu, W. 131
Fu, W. J. 311
Fuchs, J. 23, 311
```
```
Gannaz, I. 27
Gao, H. 87
Geman, D. 262
Geman, S. 262
Golub, G. 127, 169
Golub, T. 263
Gong, P. 127, 131, 132
Gorinevsky, D. 81
Gorski, J. 131
Grabarnik, G. 23
Gramacy, R. 141
Grazier G’Sell, M. 161, 163
Greenshtein, E. 20, 311
Greig, D. M. 262
Greiner, T. 42
Greve, M. 42
Grimmett, G. R. 261
Gross, D. 178, 195
Gu, C. 87
Gu, I. Y. 192
Guyon, I. 52
```
```
Hammersley, J. M. 261
Hans, C. 262
Hart, A. A. M. 43
Hastie, T. 18, 19, 24, 34, 36, 37, 43,
46–50, 52, 56, 58, 67, 69, 71, 77,
79, 86, 87, 113, 128, 130, 170, 175,
176, 182, 184, 195, 206, 208,
217–219, 221, 222, 225–228, 230,
232, 233, 239, 248–251, 255,
260–263, 266
Henderson, D. 37
Hero, A. 87
Hochberg, Y. 162
Hocking, T. 233
Hoefling, H. 52, 77, 79, 83, 87, 257,
260, 263
```

###### 339

Horn, R. A. 265
Howard, R. 37
Hsu, D. 195
Huang, J. 86, 190
Huang, W. 192
Hubbard, W. 37
Hudsom, J. 42
Hunter, D. R. 124, 131, 233
Huo, X. 285

Ihaka, R. 225
Ising, E. 244, 262

Jaakkola, T. 195
Jackel, L. 37
Jacob, L. 66, 67, 87
Jain, P. 195
Jalali, A. 312
Javanmard, A. 158, 159, 162
Jenatton, R. 87
Jerrum, M. 261
Johnson, C. R. 265
Johnson, N. 81, 87
Johnson, W. B. 285
Johnstone, I. 23, 204, 212, 213, 232
Jolliffe, I. T. 204, 232, 233
Jones, B. 262
Jordan, M. I. 86, 205, 206, 210, 232,
261, 311, 312
Joulin, A. 233

Kaiser, H. 236
Kakade, S. M. 195
Kalisch, M. 263
Karlin, S. 60
Kastelyn, P. W. 261
Keshavan, R. H. 178, 180, 182, 183,
195
Kim, S. 32, 35, 81, 263
Klamroth, K. 131
Knight, K. 87, 311
Koh, K. 32, 35, 81, 263
Kohane, I. 263
Koller, D. 261
Koltchinskii, V. 87, 180
Krahmer, F. 285

```
Lafferty, J. 70, 87, 90, 263
Lanckriet, G. R. G. 205, 206, 210,
232
Lang, K. 32
Lange, K. 52, 124, 131, 232, 233
Lanning, S. 170
Laurent, M. 169
Lauritzen, S. L. 261
Le Cun, Y. 37
Le, Q. 211, 233
Lee, H. 116
Lee, J. 35, 116, 151, 154, 161, 260,
263, 312
Lee, M. 190
Lee, S. 116
Lei, J. 210, 213, 232
Leng, C. 225, 233
Levina, E. 262, 263
Levy, R. 42
Levy, S. 23
Lewis, D. 42
Li, L. 192
Li, R. 84, 87
Li, X. 195
Liang, Y. 312
Lim, M. 67
Lin, B. 127, 131, 132
Lin, Y. 20, 21, 59, 63, 72–74, 86, 87,
262
Lindenstrauss, J. 285
Liu, H. 70, 87, 90
Loan, C. V. 127, 169
Lockhart, R. 151, 156, 157, 161
Loftus, J. 161
Lossos, I. 42
Lounici, K. 86, 180
Lu, A. 212, 213, 232
Lu, L. 42
Lu, Z. 186
Lustig, M. 285
Lykou, A. 233
```
```
Ma, C. 42
Ma, S. 86, 261, 266
Ma, Y. 195
```

###### 340 AUTHOR INDEX

Ma, Z. 195, 213, 232
Mahoney, M. W. 285
Mairal, J. 87
Mangasarian, O. 50
Mannor, S. 26
Manzagol, P.-A. 212
Marron, J. 190
Marti, G. 42
Mazumder, R. 86, 87, 170, 175, 176,
182, 195, 249, 251, 261, 262, 266
McCullagh, P. 30, 52
Meier, L. 60, 86, 87
Meinshausen, N. 12, 142, 250, 263,
311
M ́ezard, M. 261
Monga, R. 211, 233
Montanari, A. 158, 159, 162, 178,
180, 182, 183, 195, 261, 263
Monteiro, R. 186
Moore, T. 42
Murphy, K. 262

Nadler, B. 213, 232
Narasimhan, B. 219, 233
Negahban, S. 86, 176, 179, 186, 195,
311, 312
Nelder, J. 30, 52
Nemirovski, A. 176, 285
Nesterov, Y. 105, 107, 108, 131
Netrapalli, P. 195
Nevins, J. R. 262
Ng, A. 116, 211, 233
Niculescu-Mizil, A. 262

Obozinski, G. 66, 67, 86, 87, 312
Oh, S. 178, 180, 182, 183, 195
Olafsdottir, H. 226
Oldenburg, D. W. 23
Olsen, S. 193
Olshausen, B. 211, 233
Owen, A. B. 27

Parikh, N. 121
Park, T. 139, 161
Parkhomenko, E. 233
Parrilo, P. A. 195, 260, 261, 312

```
Paul, D. 213, 232
Pauly, J. 285
Pearl, J. 261
Pelckmans, K. 233
Peleato, B. 121
Pfeuffer, F. 131
Phardoon, D. 233
Pilanci, M. 285
Plan, Y. 195
Pontil, M. 86
Porteous, B. T. 262
Puig, A. 87
Pwellm, J. 42
```
```
Rabbani, T. 131
Ranzato, M. 211, 233
Raskutti, G. 75, 87, 252, 262, 311,
312
Ravikumar, P. 70, 86, 87, 90, 252,
262, 263, 311, 312
Recht, B. 178, 195
Rennie, J. 181, 182, 195
Renyi, A. 177
Richardson, T. S. 263
Rigollet, P. 232
Rish, I. 23
Ritov, Y. 20, 158, 159, 162, 311
Rocha, G. 86
Rockafellar, R. T. 131
Rohde, A. 186, 195
Rohe, K. 210
Romberg, J. K. 285
Rosenwal, A. 42
Rosset, S. 19, 47, 49, 87, 121
Rothman, A. J. 262
Ruan, C. 312
Rubin, D. 146, 161
Rudelson, M. 311
Ruderman, D. 285
Ruzinsky, S. 23
```
```
Sabet, H. 42
Sanghavi, S. 195, 261, 312
Santhanam, N. P. 263
Santos, J. 285
```

###### 341

Santosa, F. 23
Saunders, M. 23, 35, 87, 116, 285
Scheff ́e, H. 160
Scheuer, T. 23
Schmidt, M. 262
Seheuly, A. H. 262
Shalev-Shwartz, S. 47
Shawe-Taylor, J. 233
She, Y. 27, 186
Shen, H. 190
Sherlock, G. 42
Simon, N. 37, 43, 50, 58, 63, 86, 87,
128, 130, 251, 262
Simoncelli, E. P. 285
Sinclair, A. 261
Singer, Y. 40, 47
Slonim, D. 263
Sobel, E. 52
Speed, T. 233
Spiegelhalter, D. J. 261
Srebro, N. 47, 181, 182, 195
Stark, P. 23, 285
Staudt, L. 42
Stein, C. 25
Stone, C. J. 87
Sun, D. 151, 154, 161
Sun, Y. 35, 116, 151, 154, 161, 312
Suykens, J. 233
Symes, W. W. 23
Szarek, S. J. 285

Tamayo, P. 263
Tandon, R. 195
Tanner, J. 296
Tao, T. 278, 285, 311
Taylor, J. 18, 68, 79–81, 87, 128, 130,
151, 154, 156, 157, 161, 312
Teboulle, M. 108
Thodberg, H. H. 226
Thomas, G. S. 9
Tian, Q. 192
Tibshirani, R. 7, 18, 23, 24, 34, 36,
37, 42, 43, 45–48, 50, 52, 58, 63,
68, 69, 71, 77, 79, 83, 86, 87, 113,
128, 130, 142, 151, 156, 157, 161,

###### 163, 170, 175, 176, 182, 184, 195,

###### 206, 208, 217–219, 221, 222, 225,

###### 227, 228, 230, 232, 233, 239,

###### 248–250, 255, 257, 260–263

```
Tibshirani 2 , R. 18, 19, 25, 79–83, 87,
128, 130, 151, 156, 157, 161
Tran, T. 42
Trendafilov, N. T. 204, 232, 233
Tritchler, D. 233
Tropp, J. A. 311
Tseng, P. 62, 110, 111
Tsybakov, A. 86, 180, 186, 195, 311
```
```
Uddin, M. 204, 232
```
```
van de Geer, S. 20, 60, 86, 87, 158,
159, 162, 311
van Houwelingen, H. C. 43
Vandenberghe, L. 131, 206, 248, 262
van’t Veer, L. J. 43
Vapnik, V. 52
Vempala, S. 285
Vers ́elewel de Witt Hamer, P. 233
Vershynin, R. 285
Vert, J.-P. 66, 67, 87, 233
Viallon, V. 131
Vincent, P. 212
Vu, V. Q. 210, 213, 232
```
```
Waaijenborg, S. 233
Wager, S. 161, 163
Wahba, G. 87
Wainwright, M. J. 75, 86, 87, 176,
179, 186, 195, 213, 232, 252,
261–263, 285, 311, 312
Wakin, M. 4, 285
Wakin, M. B. 285
Wang, H. 263
Wang, J. 127, 131, 132
Wang, L. 47
Wang, W. 312
Ward, R. 285
Wasserman, L. 70, 87, 90, 263
Wedderburn, R. 52
Wegkamp, M. 186, 311
Weisenburger, D. 42
```

###### 342 AUTHOR INDEX

Welsh, D. J. A. 261
Wermuth, N. 261
Wessels, L. F. A. 43
West, M. 262
Whittaker, J. 233, 261
Wiesel, A. 87
Willsky, A. S. 195, 260, 261, 285, 312
Wilson, W. 42
Winkler, G. 262
Witten, D. 195, 222, 225, 226, 228,
230, 232, 233, 239, 251, 262
Wonka, P. 127, 131, 132
Wright, J. 195
Wu, S. 248, 262
Wu, T. 52, 124

Xing, E. P. 312
Xu, H. 26, 195
Xue, L. 261, 266

Yang, I. 233
Yao, G. 262
Ye, J. 127, 131, 132

```
Yi, X. 195
Yu, B. 75, 86, 87, 252, 262, 263, 311,
312
Yu, X. 42
Yuan, M. 20, 21, 59, 63, 86, 87, 186,
262
Yuan, X. T. 195, 213, 232
Yudin, D. B. 176
```
```
Zhang, C.-H. 84, 86, 158, 162
Zhang, H. H. 72–74, 87
Zhang, K. 160, 162
Zhang, S. 158, 162
Zhang, T. 86, 195, 213, 232
Zhang, Y. 311
Zhao, L. 160, 162
Zhao, P. 86, 263, 311
Zhao, Y. 262
Zhou, S. 263, 311
Zhu, J. 263
Zou, H. 18, 20, 21, 47, 56, 86, 87,
206, 208, 232, 261, 266
Zwinderman, A. 233
```

## Index

ACS, _see_ alternate convex search
Adaptive hypothesis test, 157
Adaptive lasso, 86
Additive
matrix decomposition, 190–194
model, 69–76
ADMM, 121
applied to lasso, 122
Aliased, 60
Alternate convex search, 126
Alternating
algorithm, 205
direction method of multipliers
see ADMM, 121
minimization, 124
partial optimum, 126
regression, 237
subspace algorithm, 126
Analysis of deviance, 33
ANOVA, 68
Applications
20-newsgroups corpus, 32
air pollution, 71
arterial pressure, 271
comparative genomic hybridiza-
tion (CGH), 76
crime, 10
diabetes data, 140, 149, 159
face silhouettes, 226
handwritten digits, 37, 209
helicopter data, 184, 193
image processing, 271
lymphoma, 42, 219
mammal dentition, 232
natural images, 271
Netflix challenge, 170, 187, 215
splice-site detection, 60

```
video denoising, 184
voting, 244, 257
Augmented SPCA algorithm, 213
Autoencoder, 236
sparse, 210, 236
Auxiliary variables, 79
Average linkage, 227
```
```
Backfitting, 69–72
Base class, 36
Baseline hazard, 43
Basic inequality, 298, 313
Basis functions, 71
Haar, 270
multiscale, 271
orthogonal, 269
overcomplete, 274
Basis pursuit, 23, 276
Bayes
decision boundary, 217
rule, 217
Bayesian, 23
lasso, 139, 144
methods, 22, 139
Bellkor’s Pragmatic Chaos, 172
Benjamini–Hochberg (BH) procedure,
163
Best-additive approximation, 69
Best-subset selection, 22
Bet-on-sparsity principle, 24
Bias term (intercept), 7
Bias-variance tradeoff, 7
Biclustering , 190
Biconvex
function, 124, 189, 207
set, 125
Biconvexity, 124
```
```
343
```

###### 344 INDEX

Binomial, 29
Binomial log-likelihood, 29
Biological pathway, 60, 64
Block separable, 63
Block-wise coordinate descent, 63, 65
Bonferroni adjustment, 160
Bootstrap, 12
methods, 142–147
nonparametric, 143
parametric, 146
Bottleneck, 211

Canonical correlation analysis, 214,
237
low-rank, 238
sparse, 213–215, 238
via optimal scoring, 237
Canonical variates
sparse, 201
Cardinality constraint, 192
Categorical predictor, 19, 68
Cauchy-Schwarz inequality, 235
CCA, _see_ Canonical correlation anal-
ysis
Chi-squared statistic, 148
Chronic lymphocytic lymphoma, 219
Cinematch score, 173
Clique-based factorization, 243
Clustering, 227
convex, 231
hierarchical , 227
sparse, 201, 227–232
Coefficient paths, 33
Coherence of a matrix, 177
Collaborative filtering, 169
Combinatorial optimization, 22
Compatibility function, 242
Complementary slackness, 98
Complete linkage, 227
Composite gradient, 63
Compressed sensing, 4, 278–288
_`_ 2 -error bound, 296
noisy case, 296
Concentration matrix, 246, 261
Conditional

```
independence, 243
inference, 254
likelihood, 254
Cone constraint
lasso analysis, 294
Constrained lasso, 276, 289
` 2 -bound, 295
Constraint region, 12
Contrasts, 60
Convergence rate, 76
Convex
relaxation, 23
clustering, 231
constrained program, 95
function, 95
strongly, 106
matrix approximation, 168
matrix completion
noisy setting, 178
relaxation, 248
relaxation of matrix rank, 174
set, 95
spectral regularization, 173
Convexity, 14
Coordinate descent, 14–17, 35, 40, 109
blockwise, 63
convergence guarantee, 111
failure of, 110
regularity condition, 112
Correlated
features, 55
genes, 60
Corrupted matrix entries, 192
COSSO, 72
Coupon collector problem, 177, 198
Covariance graph, 263
Covariance model
spiked, 212
Covariance test, 147–150
statistic, 149
Covering set, 286
Cox proportional-hazards model, 31,
42–43
Cross-validation, 13–14, 34, 43, 142,
144
```

###### INDEX 345

curve, 144
tenfold, 34
Cubic smoothing spline, 72–74
Cumulative distribution function, 152
Curse of dimensionality, 69
Cut set, 243
Cyclical coordinate descent, 15

Debiased Lasso, 158–160
Debiasing, 12
Decomposable regularizer, 311
Deep learning, 210
Degrees of freedom, 17–19
Deviance, 33, 51
Diffuse large B-cell lymphoma, 219
Directed acyclic graphs, 241
Discriminant analysis
Fisher’s, 221
flexible, 222
penalized, 222
Document classification, 31, 32
Double exponential distribution, 140
Dual-path algorithm, 79–80
Dummy variables, 58, 60
Dynamic programming, 80–81

Effective degrees of freedom, _see_ de-
grees of freedom
Effective number of parameters, _see_
degrees of freedom
Eigenvector computation, 127
Elastic net, 51, 55–58
ball, 57
coefficient path, 57
_`_ 1 ball, 57
_`_ 1 exactness, 280–283, 287
equivalent to restricted nullspace,
281
sufficiency of pairwise incoher-
ence, 282
sufficiency of RIP, 283
_`_ 1 penalty, 30
_`_ 1 -regularized linear SVM, 31, 47
_`_ 1 -regularized logistic regression, 50
_`q_ penalty, 22

```
`q “ball”, 290, 313
best k -term approximation, 313
weak and strong, 312
` 2 ball, 57
EM algorithm, 124
Equivariant, 36
Expectation-maximization algorithm,
see EM algorithm
Exponential
family, 31, 246
limiting distribution, 149, 150
```
```
Factor analysis, 191
False discovery rate, 149
Fantope projection, 210
FDR, see False discovery rate
Feature vector, 7
First-order optimality conditions, 96
Fisher’s
between-to-within variance crite-
rion, 221
linear discriminant analysis, 221
Flexible discriminant analysis, 222
Follicular lymphoma, 219
Forward stepwise
methods, 86
regression, 118, 147, 158
ForwardStop rule, 163
Fraction of deviance explained, 33, 34
Frobenius norm, 167
Fused lasso, 55, 76–81, 189
dual path algorithm, 79–80
dynamic programming, 80–81
signal approximator, 76
```
```
Gamma distribution, 141
Garrote, see nonnegative garrote
Gene-expression arrays, 60
General matrix regression framework,
185
General position, 19
Generalization, 13
Generalized linear models, 29–54, 115
Generalized penalties, 55–93
Genome-wide association studies, 32
```

###### 346 INDEX

Geometric convergence, 107, 177
Gibbs sampler, 244
glmnet, 33, 35, 50–52
Gradient descent, 100
accelerated, 107
momentum, 108
projected, 102
proximal method, 103, 108
steepest, 101
unconstrained, 101
Gram matrix, 73
Graph clique, 241
maximal, 242
Graphical lasso, 248, 250
asymptotics, 252
Graphical model, 241–267
selection, 241
block-diagonal structure, 251
factorization property, 242–243
Gaussian, 245–246
graph selection, 254–260
hidden variables, 261
Markov property, 243
maximum likelihood, 247
mixed (continuous and discrete),
259
neighborhood-based likelihood,
255–258
pseudo-likelihood, 259–260
Group lasso, 55, 58–68, 260
ball, 64
overlap, 55, 65–68
sparse, 64–65
Grouped response, 37
Groups of variables, 55

Hammersley–Clifford theorem, 261
Hard sparsity, 290
Hard thresholding, 22
Hard-impute, 173
algorithm, 176
Hazard function, 31, 43
Hierarchical clustering, 227
sparse, 228
Hierarchy, 67, 68

```
Hilbert-space norm, 72
Hinge loss, 31
Homotopy methods, 17
Huber loss function, 194
Human DNA, 61
Hyperparameters, 141
```
```
Implicit penalty, 66
Incoherence, 178
maximal, 179
Indicator response, 37
Inference for lasso, 154
Inner products, 151
Interaction models, 67–68
IRLS, see iteratively reweighted least-
squares
Irrepresentability, 302
Ising model, 244
Isotonic regression, 83
Iterative Lanczos methods, 176
Iteratively reweighted least-squares,
40
```
```
Jensen’s algorithm, 124
Johnson–Lindenstrauss approximation,
277, 286
sparse Boolean vectors, 277
```
```
K-means clustering
sparse, 230
Karush–Kuhn–Tucker conditions, 9,
97, 165
Kernel Gram matrix, 75
Kernel trick, 34, 46
KKT conditions, see Karush–Kuhn–
Tucker conditions
Knots, 71, 72, 82
Kullback–Leibler divergence, 41
```
```
Lagrange
function, 97
multipliers, 97
optimality conditions, 97
Lagrange dual, 41
Lagrangian, 70
duality, 9
```

###### INDEX 347

form, 9
Lagrangian lasso, 289
_`_ 2 -bound, 295
_`_ 2 -bound for weak sparsity, 299,
313
_`_ ∞-bounds, 303
fast rate for prediction error, 300
slow rate for prediction error, 300
variable selection guarantee, 302
Lanczos iteration, 176
Laplacian
distribution, 23, 140
prior, 139
Lasso, 7–12
fixed- _λ_ inference, 154
necessary and sufficient condi-
tions for solution, 9
uniqueness, 19
Least angle regression, 118–121, 147
Lifted problem, 79
Line search
Armijo rule, 102
limited minimization, 102
Linear
logistic regression, 29
discriminant analysis
sparse, 201, 217–227
via optimal scoring, 225
model, 7–8
Linear convergence, 107
Link function, 29
Linkage measure for clustering, 227
Loading vectors, 204
Local minima, 16
Log-determinant program, 248
Log-linear model, 30, 40–42
Log-odds ratio, _see_ logistic regression
Logistic regression, 29, 31–36, 115,
217
coefficient path, 49
logit, 29
multiclass, 36
with separable data, 49–50
Loss
parameter estimation, 290

```
prediction error, 289
variable selection, 290
Low-rank CCA, 238
Lower bounds, 51
```
```
Majorization, 123
Majorization-minimization algorithm,
see MM algorithm
Majorizing function, 123
Margin, 31, 32, 46–48
Markov chain Monte Carlo, 140
Markov property, 241, 243
Matrix Completion
theory, 177
Matrix completion, 167, 169–183
nuclear norm, 174
robust, 193
Matrix decomposition
additive, 190
Matrix decompositions, 167–199
Matrix lasso, 186
Matrix trace, 205
Maximal variance, 202
sparsity, 204
Maximal-margin classifier, 48–49
Maximum entropy, 53
Maximum likelihood, 30
Maximum Margin Matrix Factoriza-
tion, 181
Maximum margin matrix factoriza-
tion, 168
MCMC, see Markov chain Monte
Carlo
MDL, see minimum description length
Mean-squared-error consistency, 20
Metric entropy, 286
Mill’s ratio, 164
Minimax-optimal, 76
Minimum description length, 226
Minorization-majorization algorithm,
see MM algorithm
Minorization-maximization algorithm,
see MM algorithm, see MM
algorithm
Missing data, 169–183
```

###### 348 INDEX

Mixed models, 259
MM algorithm, 123
EM as example, 124
proximal gradient as example,
124
MMMF, 181
relationship to spectral regular-
ization, 182
Model selection, 8–14
Monotone, 83
fusion, 79
Movie ratings, 170
Multiclass logistic regression, 36–40
Multilevel factors, 60
Multinomial, 30
distribution, 36
grouped lasso, 39–40
regression, 54
Multitask learning, 51, 61, 184
Multivariate
methods, 201–239
regression, 61, 184
Multivariate regression, 194
Mutual incoherence, 302
random designs, 314

Naive Bayes classifier, 218, 239
Nearest shrunken centroids, 218, 239
Nearly-isotonic regression, 83–84
Neighborhood
based likelihood, 254
penalty, 77
set, 254
Nesterov’s method, 107–109, 176, 197
Netflix data, 176
Newton’s method, 101, 116
Newton–Raphson algorithm, 101
Node potentials, 259
Noisy subspace’ model, 191
Nonconvex penalties, 84–86
Nonnegative
garrote, 20, 86
lasso, 74
Nonparametric
bootstrap, 146

```
regression, 69
Nuclear norm, 174
as an SDP, 197
subgradient, 197
Null deviance, 51
Null hypothesis
complete, 157
incremental, 157
```
```
Offset, 40, 51
One versus all, 36
One versus one, 36
One-standard-error rule, 13, 144
Optimal scoring, 225, 237
Optimal separating hyperplane, 49
Optimization, 95
Order statistics, 273
Orthogonal
bases, 17
features, 63
OvA, see one versus all
OvO, see one versus one
```
```
Pairwise incoherence, 287
Pairwise plots, 144
Pairwise-Markov model, 245
PAM package, 219
Parameter estimation loss, 290
classical linear model, 296
Parametric bootstrap, 146
Partial likelihood, 43
Partial optimum, 126
Partial regression coefficient, 156
Partial residual, 65, 69
Path algorithm, 77, 118–121
Pathwise coordinate descent, 17, 249
PCA, 169
robust, 192
PDW method
see primal dual witness method,
305
Penalized discriminant analysis, 222
Penalized Fisher’s discriminant, 239
Penalized matrix decomposition, 187–
190, 201
```

###### INDEX 349

multifactor, 190
Penalized optimal scoring, 239
Poisson
log-likelihood, 30
model, 40–42
Polyhedral constraint region, 188
Polyhedral lemma, 151, 152
Pool adjacent violators algorithm, 83
PoSI method, 160
Post-selection inference, 147–158
Posterior
distribution, 22, 139, 140
mode, 140
Power method, 127, 190
Precision matrix, 246, 247
Prediction error
computational lower bounds, 300,
312
Prediction loss, 289
Pretraining, 212
Prevalidation, 42, 45
Primal-dual witness method, 305
Principal components, 169, 202–204
higher ranks, 207
nonlinear, 210
robust, 192
sparse, 201, 204–210
Prior distribution, 139
Probabilistic graphical model, 241
Probe set, 173
Procrustes problem, 209
Projection, 71
Prototypes, 231
Proximal gradient descent
momentum, 108
nuclear norm, 105
Proximal gradient method, 103
_`_ 1 -norm, 104
as MM algorithm, 124
lasso, 107
Proximal map, 104
Pseudo-likelihood, 254

Quadratic program, 14
Qualitative factors, 58

```
Quantile-quantile plot, 148
```
```
Random design matrix
mutual incoherence, 314
restricted eigenvalue, 314
Random matrices, 283, 287
Random projection, 276
Rank-minimization problem, 170
Rank-r SVD, 169
Recommender systems, 169
Reconstruction error, 203, 206, 234
Recovery of matrix entries, 177
Reduced-Rank Regression, 184
Regression, 7
multivariate, 194
reduced rank, 184
Regularization, 8
Relaxed basis pursuit
analysis of, 313
program, 276
Relaxed lasso, 12
Relevance network, 263
Reparametrization, 78
Reproducing-kernel Hilbert space, 72,
73
Resampling, 142
Residual sum of squares, 147
Response variable, 7
Restricted eigenvalues, 294
random designs, 314
Restricted isometry property, 283,
287
Restricted nullspace
implied by pairwise incoherence,
282
implied by RIP, 283, 288
property, 281
Restricted strong convexity, 294, 314
Ridge
penalty, 57
regression, 10, 34
regularized logistic regression, 49
Right censored, 42
RIP, see restricted isometry property
```

###### 350 INDEX

RKHS, _see_ reproducing kernel Hilbert
space
Robust
Huber loss, 194, 198
matrix completion, 193
PCA, 192, 193, 199
Rug plot, 144

Sample splitting, 148
SCoTLASS
criterion, 235
procedure, 204
Screening rules, 35, 127
SDP, _see_ semidefinite program, _see_
semidefinite program
Second-order cone, 75
Selection event, 150
Self-influence, 18
Semidefinite program, 174, 205, 206
Separability of penalty, 66, 77, 110
Separable data, 49, 53
Sequential control of FDR, 163
Shrinkage, 149
methods, 22
Signal approximation and compressed
sensing, 269
Single linkage, 227
Singular value decomposition, 169
singular values, 169
singular vector, 126
singular vectors, 169
sparse, 201
Smoothing spline, 71–74
Soft margin, 31
Soft thresholding, 15, 189
operator, 58, 205
Soft-impute, 173, 176, 181
algorithm, 175
Spacing test, 156–157
Sparse additive model, 69–76
Sparse approximation
best _k_ -term, 273, 313
orthogonal bases, 271
overcomplete bases, 274
Sparse backfitting, 70, 73

```
Sparse canonical correlation analysis,
238
Sparse clustering, 227–232
hierarchical, 228
K-means, 230
Sparse LDA, 222
Sparse matrix approximation, 168
Sparse plus low rank, 191, 261
Sparse principal components
higher ranks, 207
theory, 212
Sparsistency, 20, 301
Sparsity, 12
Spectral regularization, 175
Spiked covariance model, 212
Spikiness ratio, 179
Spline, 72–74
Squared hinge loss, 48
Stability selection, 144
Standardize, 8
Statistical inference, 139–165
Strictly convex, 57
Strong convexity, 106, 292
Fisher information, 293
Hessian-based, 293
Strong duality, 98
Strong rules, 35, 130
Subdifferential, 63, 99
Subgradient, 15, 99, 305
` 1 -norm, 100
equations, 62, 64
nuclear norm, 100
Sublinear convergence, 106
Subset selection, 23
Summation constraint, 68, 88
Support recovery, 290
Support set, 47
Support-vector machine, 31, 46–48
Survival
time, 42
curves, 43
models, 31
SVD, see Singular value decomposi-
tion
SVM, see support-vector machine
```

###### INDEX 351

Tail bounds
_χ_^2 variables, 286
Gaussian variables, 309
Theory, 289–314
_`_ 2 -error bound for lasso, 294
basic inequality, 298, 312, 313
general _M_ -estimators, 310
group lasso, 310
minimax rates for sparse regres-
sion, 296, 299, 312
nuclear norm, 310
prediction error bound for lasso,
299
primal-dual witness method, 305
variable selection guarantee for
lasso, 302
Total-variation denoising, 77
Trace norm, 174
Trace regression framework, 185
Training error, 34
Trend filtering, 81–83
Truncated normal distribution, 152
Type I error, 148

```
Upper bounds, 51
```
```
Variable selection, 301
irrepresentability condition, 302
loss, 290
mutual incoherence condition,
302
Varimax rotation, 236
Vertex set, 241
Video
denoising, 193
sequences, 194
surveillance data, 193
```
```
Warm starts, 36
Wavelets, 17
Weak sparsity, 290, 299, 312
Wide data, 49
Within-class covariance matrix, 218
Within-group sparsity, 64
```

