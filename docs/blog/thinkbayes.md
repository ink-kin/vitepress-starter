---
title: Statistical Learning
date: 2020/12/12 15:22:40
cover_index: "http://picsum.photos/450/450?random=72"
tags:
- data
categories:
- Books
- BPM
---

Bayesian Statistics

<!-- more -->
Think Bayes

## BayesianStatistics MadeSimple

```
Version1.0.
```


# Think Bayes

## Bayesian Statistics MadeSimple

```
Version1.0.
```
## Allen B.Downey

## GreenTeaPress

```
Needham,Massachusetts
```

Copyright© 2012 AllenB.Downey.

GreenTeaPress
9 WashburnAve
NeedhamMA 02492

Permissionisgrantedtocopy,distribute,and/ormo difythisdo cumentunder
thetermsoftheCreativeCommonsAttribution-NonCommercial-ShareAlike
4.0 International License, whichis available at [http://creativecommons.](http://creativecommons.)
org/licenses/by- nc- sa/4.0/.

TheLATEXsourceforthisb o okisavailablefromhttp://greenteapress.com/
thinkbayes.


# Preface

## 0.1 My theory, which is mine

Thepremiseofthisb o ok,andtheotherb o oksintheThinkXseries,isthat
ifyouknowhowtoprogram,youcanusethatskilltolearnothertopics.

Mostb o oksonBayesianstatisticsusemathematicalnotationandpresentideas
intermsofmathematicalconceptslikecalculus.Thisb o okusesPythonco de
instead of math, and discrete approximationsinstead of continuousmath-
ematics. Asaresult,whatwouldb eanintegralinamathb o okb ecomesa
summation,andmostop erationsonprobabilitydistributionsaresimplelo ops.

Ithinkthispresentationiseasiertounderstand,atleastforp eoplewithpro-
grammingskills. Itisalsomore general,b ecause whenwemakemo deling
decisions,we cancho ose themostappropriatemo delwithoutworryingto o
muchab outwhetherthemo dellendsitselftoconventionalanalysis.

Also,itprovidesasmo othdevelopmentpathfromsimpleexamplestoreal-
worldproblems. Chapter 3 isago o dexample.Itstartswithasimpleexample
involvingdice,oneofthestaplesofbasicprobability. Fromthereitpro ceeds
insmallstepstothelo comotiveproblem,whichIb orrowedfromMosteller's
FiftyChal lengingProblemsinProbabilitywithSolutions,andfromtheretothe
Germantankproblem,afamouslysuccessfulapplicationofBayesianmetho ds
duringWorldWarI I.

## 0.2 Mo deling and approximation

Mostchaptersinthisb o okaremotivatedby areal-worldproblem,sothey
involvesomedegreeofmo deling. BeforewecanapplyBayesianmetho ds(or
anyotheranalysis),wehavetomakedecisionsab outwhichpartsofthereal-
worldsystemtoincludeinthemo delandwhichdetailswecanabstractaway.


vi Chapter0. Preface

Forexample,inChapter7,themotivatingproblemistopredictthewinnerof
aho ckeygame.Imo delgoal-scoringasaPoissonpro cess,whichimpliesthat
agoalisequallylikelyatanyp ointinthegame.Thatisnotexactlytrue,but
itisprobablyago o denoughmo delformostpurp oses.

InChapter 12 themotivatingproblemisinterpretingSATscores(theSATis
astandardizedtestusedforcollegeadmissionsintheUnitedStates). Istart
withasimplemo delthatassumesthatallSATquestionsareequallydicult,
butinfactthedesignersoftheSATdelib eratelyincludesomequestionsthat
arerelativelyeasyandsomethatarerelativelyhard.Ipresentasecondmo del
that accountsforthisasp ectofthedesign,andshowthatitdo esn'thavea
bigeectontheresultsafterall.

I think itisimp ortant to include mo deling as an explicit part of problem
solvingb ecauseitremindsustothinkab outmo delingerrors(thatis,errors
duetosimplicationsandassumptionsofthemo del).

Manyofthemetho dsinthisb o okarebasedondiscretedistributions,which
makessomep eopleworryab outnumericalerrors.Butforreal-worldproblems,
numericalerrorsarealmostalwayssmallerthanmo delingerrors.

Furthermore,thediscreteapproachoftenallowsb ettermo delingdecisions,and
Iwouldratherhaveanapproximatesolutiontoago o dmo delthananexact
solutiontoabadmo del.

On the other hand, continuous metho ds sometimes yield p erformance
advantagesforexampleby replacinga linear-or quadratic-timecomputa-
tionwithaconstant-timesolution.

SoIrecommendageneralpro cesswiththesesteps:

1. Whileyouareexploringaproblem,startwithsimplemo delsandim-
    plementtheminco dethatisclear,readable,anddemonstrablycorrect.
    Fo cusyourattentionongo o dmo delingdecisions,notoptimization.
2. Onceyouhaveasimplemo delworking,identifythebiggestsourcesof
    error. You mightneed toincrease thenumb erofvalues inadiscrete
    approximation,or increasethenumb erofiterationsinaMonteCarlo
    simulation,oradddetailstothemo del.
3. Ifthep erformanceofyoursolutionisgo o denoughforyourapplication,
    youmightnothaveto doanyoptimization. Butifyoudo,thereare
    twoapproaches to consider. Youcanreview yourco de andlo ok for
    optimizations; forexample, ifyou cachepreviously computed results
    youmightb eabletoavoidredundantcomputation.Oryoucanlo okfor
    analyticmetho dsthatyieldcomputationalshortcuts.


0.3. Workingwiththeco de vii

Oneb enetofthispro cessisthatSteps 1 and 2 tendtob efast,soyoucan
exploreseveralalternativemo delsb eforeinvestingheavilyinanyofthem.

Anotherb enetisthatifyougettoStep3,youwillb estartingwithareference
implementationthatislikelytob ecorrect,whichyoucanuseforregression
testing(thatis,checkingthattheoptimizedco deyieldsthesameresults,at
leastapproximately).

### 0.3 Working with the co de

Theco deandsoundsamplesusedinthisb o okareavailablefromhttps://
github.com/AllenDowney/ThinkBayes. Gitisaversioncontrolsystemthat
allowsyoutokeeptrackofthelesthatmakeupapro ject. Acollectionof
lesunderGit'scontroliscalledarep ository. GitHubisahostingservice
thatprovidesstorageforGitrep ositoriesandaconvenientwebinterface.

TheGitHubhomepageformyrep ositoryprovidesseveralwaystoworkwith
theco de:

```
 Youcancreateacopyofmyrep ositoryonGitHubbypressingtheFork
button. Ifyou don'talready have a GitHubaccount, you'llneed to
createone. Afterforking,you'llhaveyourownrep ository onGitHub
thatyoucanusetokeeptrackofco deyouwritewhileworkingonthis
b o ok.Thenyoucanclonetherep o,whichmeansthatyoucopytheles
toyourcomputer.
```
```
 Oryoucouldclonemyrep ository.Youdon'tneedaGitHubaccountto
dothis,butyouwon'tb eabletowriteyourchangesbacktoGitHub.
```
```
 Ifyoudon'twanttouseGitatall,youcandownloadthelesinaZip
leusingthebuttoninthelower-rightcorneroftheGitHubpage.
```
Theco deforthe rsteditionoftheb o okworkswithPython2. Ifyouare
usingPython3,youmightwanttousetheup datedco deinhttps://github.
com/AllenDowney/ThinkBayes2instead.

Idevelop edthisb o okusingAnacondafromContinuumAnalytics,whichisa
freePythondistributionthatincludesallthepackagesyou'llneedtorunthe
co de(andlotsmore). IfoundAnacondaeasytoinstall.Bydefaultitdo esa
user-levelinstallation,notsystem-level,soyoudon'tneedadministrativepriv-
ileges.YoucandownloadAnacondafromhttp://continuum.io/downloads.

Ifyoudon'twanttouseAnaconda,youwillneedthefollowingpackages:


viii Chapter0. Preface

```
 NumPyforbasicnumericalcomputation,http://www.numpy.org/;
```
```
 SciPyforscienticcomputation,http://www.scipy.org/;
```
```
 matplotlibforvisualization,http://matplotlib.org/.
```
Althoughthesearecommonlyusedpackages,theyarenotincludedwithall
Pythoninstallations,andtheycanb ehardtoinstallinsomeenvironments. If
youhavetroubleinstallingthem,IrecommendusingAnacondaoroneofthe
otherPythondistributionsthatincludethesepackages.

Many of the examples in this b o ok use classes and functions dened in
thinkbayes.py. Someofthemalsousethinkplot.py,whichprovideswrap-
p ersforsomeofthefunctionsinpyplot,whichispartofmatplotlib.

### 0.4 Co de style

Exp eriencedPythonprogrammerswillnoticethattheco deinthisb o okdo es
notcomplywithPEP8,whichisthemostcommonstyleguideforPython
(http://www.python.org/dev/peps/pep- 0008/).

Sp ecically, PEP 8 callsfor lowercasefunctionnameswithunderscoresb e-
tweenwords,like_this. Inthisb o okandtheaccompanyingco de,function
andmetho dnamesb eginwithacapitalletterandusecamelcase,LikeThis.

Ibrokethisruleb ecauseIdevelop edsomeoftheco dewhileIwasaVisiting
ScientistatGo ogle,soIfollowedtheGo oglestyleguide,whichdeviatesfrom
PEP 8 inafewplaces. OnceIgotusedtoGo oglestyle,IfoundthatIliked
it. Andatthisp oint,itwouldb eto omuchtroubletochange.

Alsoonthetopicofstyle,IwriteBayes'stheoremwithansaftertheap os-
trophe, whichispreferredinsomestyle guidesanddeprecated inothers. I
don'thave astrongpreference. Ihadto cho oseone, andthisistheoneI
chose.

Andnallyonetyp ographicalnote:throughouttheb o ok,IusePMFandCDF
for themathematicalconcept ofaprobability massfunctionor cumulative
distributionfunction,andPmfandCdftorefertothePythonob jectsIuse
torepresentthem.

### 0.5 Prerequisites

Thereareseveralexcellentmo dulesfordoingBayesianstatisticsinPython,
includingpymcandOp enBUGS.Ichosenottousethemforthisb o okb ecause


0.5. Prerequisites ix

youneedafair amountof backgroundknowledgetogetstartedwiththese
mo dules,andIwanttokeeptheprerequisitesminimal. IfyouknowPython
andalittlebitab outprobability,youarereadytostartthisb o ok.

Chapter 1 isab outprobabilityandBayes'stheorem;ithasno co de. Chap-
ter 2 intro ducesPmf,athinlydisguisedPythondictionaryIusetorepresent
aprobabilitymassfunction(PMF).ThenChapter 3 intro ducesSuite,akind
ofPmfthatprovidesaframeworkfordoingBayesianup dates.

Insomeofthelaterchapters,IuseanalyticdistributionsincludingtheGaus-
sian(normal)distribution,theexp onentialandPoissondistributions,andthe
b etadistribution. InChapter 15 Ibreakouttheless-commonDirichletdis-
tribution,butIexplainitasIgoalong. Ifyouarenotfamiliarwiththese
distributions,youcanreadab outthemonWikip edia. Youcouldalsoread
thecompaniontothisb o ok,ThinkStats,oranintro ductorystatisticsb o ok
(althoughI'mafraidmostofthemtakeamathematicalapproachthatisnot
particularlyhelpfulforpracticalpurp oses).

### Contributor List

If you have a suggestion or correction, please send email to
downey@al lendowney.com. If I make a change based on your feedback,
Iwilladdyoutothecontributorlist(unlessyouasktob eomitted).

Ifyouincludeatleastpartofthesentencetheerrorapp earsin,thatmakesit
easyformetosearch.Pageandsectionnumb ersarene,to o,butnotaseasy
toworkwith.Thanks!

```
 First,I havetoacknowledgeDavid MacKay'sexcellentb o ok, Information
Theory,Inference, andLearningAlgorithms,whichiswhereIrstcameto
understandBayesianmetho ds. Withhisp ermission,Iuseseveralproblems
fromhisb o okasexamples.
 Thisb o okalsob enetedfrommyinteractionswithSanjoyMaha jan,esp ecially
infall2012,whenIauditedhisclassonBayesianInferenceatOlinCollege.
 Iwrotepartsofthisb o okduringpro jectnightswiththeBostonPythonUser
Group,soIwouldliketothankthemfortheircompanyandpizza.
 OlivierYiptongsentseveralhelpfulsuggestions.
```
```
 YuriyPasichnykfoundseveralerrors.
 KristopherOverholtsentalonglistofcorrectionsandsuggestions.
 MaxHailp erinsuggestedaclaricationinChapter1.
```

x Chapter0. Preface

```
 MarkusDoblerp ointedoutthatdrawingco okiesfromab owlwithreplacement
isanunrealisticscenario.
```
```
 Inspring2013,studentsinmyclass,ComputationalBayesianStatistics,made
manyhelpful correctionsandsuggestions: KaiAustin,Claire Barnes,Kari
Bender,RachelBoy,KatMendoza, ArjunIyer, BenKro op,NathanLintz,
KyleMcConnaughay,AlecRadford,BrendanRitter,andEvanSimpson.
```
```
 GregMarraandMattAastedhelp edmeclarifythediscussionofThePriceis
Rightproblem.
```
```
 MarcusOgrenp ointedoutthattheoriginalstatementofthelo comotiveprob-
lemwasambiguous.
```
```
 JasmineKwitynandDanFauxsmithatO'ReillyMediapro ofreadtheb o ok
andfoundmanyopp ortunitiesforimprovement.
```
```
 LindaPescatorefoundatyp oandmadesomehelpfulsuggestions.
```
```
 TomaszMi¡skosentmanyexcellentcorrectionsandsuggestions.
```
Otherp eople who sp ottedtyp osand smallerrorsincludeTom Pollard,PaulA.
Giannaros,JonathanEdwards,GeorgePurkins,Rob ertMarcus,RamLimbu,James
Lawry,BenKahle,JereyLaw,andAlvaroSanchez.


# Contents

Preface v

```
0.1 Mytheory,whichismine.................... v
```
```
0.2 Mo delingandapproximation.................. v
```
```
0.3 Workingwiththeco de..................... vii
```
```
0.4 Co destyle............................ viii
```
```
0.5 Prerequisites........................... viii
```
1 Bayes'sTheorem 1

```
1.1 Conditionalprobability..................... 1
```
```
1.2 Conjointprobability....................... 2
```
```
1.3 Theco okieproblem....................... 3
```
```
1.4 Bayes'stheorem......................... 3
```
```
1.5 Thediachronicinterpretation................. 5
```
```
1.6 TheM&Mproblem....................... 6
```
```
1.7 TheMontyHallproblem.................... 8
```
```
1.8 Discussion............................ 10
```
2 ComputationalStatistics 11

```
2.1 Distributions........................... 11
```
```
2.2 Theco okieproblem....................... 12
```
```
2.3 TheBayesianframework.................... 13
```

## xii Contents






   - 2.4 TheMontyHallproblem
   - 2.5 Encapsulatingtheframework.
   - 2.6 TheM&Mproblem
   - 2.7 Discussion
   - 2.8 Exercises.
- 3 Estimation
   - 3.1 Thediceproblem
   - 3.2 Thelo comotiveproblem
   - 3.3 Whatab outthatprior?.
   - 3.4 Analternativeprior.
   - 3.5 Credibleintervals
   - 3.6 Cumulativedistributionfunctions
   - 3.7 TheGermantankproblem
   - 3.8 Discussion
   - 3.9 Exercises.
- 4 MoreEstimation
   - 4.1 TheEuroproblem.
   - 4.2 Summarizingthep osterior
   - 4.3 Swampingthepriors
   - 4.4 Optimization
   - 4.5 Theb etadistribution
   - 4.6 Discussion
   - 4.7 Exercises.
- 5 OddsandAddends Contents xiii
   - 5.1 Odds
   - 5.2 Theo ddsformofBayes'stheorem.
   - 5.3 Oliver'sblo o d
   - 5.4 Addends
   - 5.5 Maxima
   - 5.6 Mixtures
   - 5.7 Discussion
- 6 DecisionAnalysis
   - 6.1 ThePriceisRightproblem.
   - 6.2 Theprior.
   - 6.3 Probabilitydensityfunctions.
   - 6.4 RepresentingPDFs
   - 6.5 Mo delingthecontestants
   - 6.6 Likeliho o d
   - 6.7 Up date.
   - 6.8 Optimalbidding.
   - 6.9 Discussion
- 7 Prediction
   - 7.1 TheBostonBruinsproblem
   - 7.2 Poissonpro cesses
   - 7.3 Thep osteriors
   - 7.4 Thedistributionofgoals
   - 7.5 Theprobabilityofwinning
   - 7.6 Suddendeath
   - 7.7 Discussion
   - 7.8 Exercises.
- 8 ObserverBias xiv Contents
   - 8.1 TheRedLineproblem
   - 8.2 Themo del
   - 8.3 Waittimes.
   - 8.4 Predictingwaittimes
   - 8.5 Estimatingthearrivalrate
   - 8.6 Incorp oratinguncertainty.
   - 8.7 Decisionanalysis
   - 8.8 Discussion
   - 8.9 Exercises.
- 9 TwoDimensions
   - 9.1 Paintball
   - 9.2 Thesuite.
   - 9.3 Trigonometry
   - 9.4 Likeliho o d
   - 9.5 Jointdistributions.
   - 9.6 Conditionaldistributions
   - 9.7 Credibleintervals
   - 9.8 Discussion
   - 9.9 Exercises.
- 10 ApproximateBayesianComputation
   - 10.1 TheVariabilityHyp othesis
   - 10.2 Meanandstandarddeviation
   - 10.3 Up date.
   - 10.4 Thep osteriordistributionofCV.
   - 10.5 Underow
   - 10.6 Log-likeliho o d Contents xv
   - 10.7 Alittleoptimization
   - 10.8 ABC
   - 10.9 Robustestimation.
   - 10.10 Whoismorevariable?
   - 10.11 Discussion
   - 10.12 Exercises.
- 11 Hyp othesisTesting
   - 11.1 BacktotheEuroproblem
   - 11.2 Makingafaircomparison.
   - 11.3 Thetriangleprior
   - 11.4 Discussion
   - 11.5 Exercises.
- 12 Evidence
   - 12.1 InterpretingSATscores.
   - 12.2 Thescale.
   - 12.3 Theprior.
   - 12.4 Posterior
   - 12.5 Ab ettermo del
   - 12.6 Calibration.
   - 12.7 Posteriordistributionofecacy
   - 12.8 Predictivedistribution
   - 12.9 Discussion
- 13 Simulation xvi Contents
   - 13.1 TheKidneyTumorproblem
   - 13.2 Asimplemo del
   - 13.3 Amoregeneralmo del.
   - 13.4 Implementation
   - 13.5 Cachingthejointdistribution
   - 13.6 Conditionaldistributions
   - 13.7 SerialCorrelation
   - 13.8 Discussion
- 14 AHierarchicalMo del
   - 14.1 TheGeigercounterproblem
   - 14.2 Startsimple
   - 14.3 Makeithierarchical.
   - 14.4 Alittleoptimization
   - 14.5 Extractingthep osteriors
   - 14.6 Discussion
   - 14.7 Exercises.
- 15 DealingwithDimensions
   - 15.1 Bellybuttonbacteria
   - 15.2 Lionsandtigersandb ears
   - 15.3 Thehierarchicalversion.
   - 15.4 Randomsampling.
   - 15.5 Optimization
   - 15.6 Collapsingthehierarchy
   - 15.7 Onemoreproblem
   - 15.8 We'renotdoneyet
- 15.9 Theb ellybuttondata Contents xvii
- 15.10 Predictivedistributions
- 15.11 Jointp osterior.
- 15.12 Coverage
- 15.13 Discussion


xviii Contents


# Chapter 1

# Bayes's Theorem

## 1.1 Conditional probability

Thefundamentalideab ehindallBayesianstatisticsisBayes'stheorem,which
issurprisinglyeasytoderive,providedthatyouunderstandconditionalproba-
bility.Sowe'llstartwithprobability,thenconditionalprobability,thenBayes's
theorem,andontoBayesianstatistics.

Aprobabilityisanumb erb etween 0 and 1 (includingb oth)thatrepresentsa
degreeofb eliefinafactorprediction.Thevalue 1 representscertaintythat
afactistrue, or thata predictionwill cometrue. The value 0 represents
certaintythatthefactisfalse.

Intermediatevaluesrepresentdegreesofcertainty.Thevalue0.5,oftenwritten
as50%,meansthat apredictedoutcomeisaslikelytohapp enasnot. For
example,theprobabilitythatatossedcoinlandsfaceupisverycloseto50%.

Aconditionalprobabilityisaprobabilitybasedonsomebackgroundinforma-
tion.Forexample,IwanttoknowtheprobabilitythatIwillhaveaheartat-
tackinthenextyear.AccordingtotheCDC,Everyyearab out785,000Amer-
icans have a rst coronaryattack. (http://www.cdc.gov/heartdisease/
facts.htm)

TheU.S.p opulationisab out 311 million,sotheprobabilitythatarandomly
chosenAmericanwillhaveaheartattackinthenextyearisroughly0.3%.

ButIamnotarandomlychosenAmerican. Epidemiologistshaveidentied
manyfactorsthataecttheriskofheartattacks;dep endingonthosefactors,
myriskmightb ehigherorlowerthanaverage.


2 Chapter1. Bayes'sTheorem

Iammale, 45 yearsold,andIhaveb orderlinehighcholesterol.Thosefactors
increasemychances. However,Ihavelowblo o dpressureandIdon'tsmoke,
andthosefactorsdecreasemychances.

Plugging everything intothe onlinecalculator at [http://cvdrisk.nhlbi.](http://cvdrisk.nhlbi.)
nih.gov/calculator.asp,Indthatmyriskofaheartattackinthenext
year isab out0.2%, lessthan the nationalaverage. Thatvalue isacondi-
tionalprobability,b ecauseitisbasedonanumb eroffactorsthatmakeupmy
condition.

Theusualnotationforconditionalprobabilityisp(A|B),whichistheproba-
bilityofAgiventhatBistrue. Inthisexample,Arepresentstheprediction
thatIwillhaveaheartattackinthenextyear,andBisthesetofconditions
Ilisted.

### 1.2 Conjoint probability

Conjointprobabilityisafancywaytosaytheprobabilitythattwothings
aretrue. Iwritep(AandB)tomeantheprobabilitythatAandBareb oth
true.

Ifyoulearnedab outprobabilityinthecontextofcointossesanddice,you
mighthavelearnedthefollowingformula:

```
p(AandB) = p(A) p(B) WARNING:notalwaystrue
```
Forexample,ifItosstwocoins,andAmeanstherstcoinlandsfaceup,and
B meansthesecondcoinlandsfaceup,thenp(A) = p(B) = 0. 5 ,andsure
enough,p(AandB) = p(A) p(B) = 0. 25.

Butthisformulaonlyworksb ecauseinthiscaseAandBareindep endent;
thatis,knowingtheoutcomeofthersteventdo esnotchangetheprobability
ofthesecond.Or,moreformally,p(B|A)=p(B).

Hereisadierentexamplewheretheeventsarenotindep endent. Supp ose
that Ameansthat itrainsto dayandB meansthatitrainstomorrow. If
I knowthat itrainedto day,itismorelikelythatitwillraintomorrow, so
p(B|A)>p(B).

Ingeneral,theprobabilityofaconjunctionis

```
p(AandB) = p(A) p(B|A)
```
foranyAandB. Soifthechanceofrainonanygivendayis0.5,thechance
ofrainontwoconsecutivedaysisnot0.25,butprobablyabithigher.


1.3. Theco okieproblem 3

### 1.3 The co okie problem

We'llgettoBayes'stheoremso on,butIwanttomotivateitwithanexample
calledtheco okieproblem.^1 Supp osetherearetwob owlsofco okies. Bowl 1
contains 30 vanillaco okiesand 10 cho colate co okies. Bowl 2 contains 20 of
each.

Nowsupp oseyoucho oseoneoftheb owlsatrandomand,withoutlo oking,
selectaco okieatrandom. Theco okieisvanilla.Whatistheprobabilitythat
itcamefromBowl1?

Thisis aconditional probability; we wantp(Bowl 1 |vanilla), but itis not
obvioushowtocomputeit.IfIaskedadierentquestiontheprobabilityof
avanillaco okiegivenBowl1itwouldb eeasy:

```
p(vanilla|Bowl 1 ) = 3/ 4
```
Sadly,p(A|B)isnotthesameasp(B|A),butthereisawaytogetfromone
totheother:Bayes'stheorem.

### 1.4 Bayes's theorem

Atthisp ointwehaveeverythingwe needtoderiveBayes's theorem. We'll
startwiththeobservationthatconjunctioniscommutative;thatis

```
p(AandB) = p(BandA)
```
foranyeventsAandB.

Next,wewritetheprobabilityofaconjunction:

```
p(AandB) = p(A) p(B|A)
```
Sincewehavenotsaidanythingab outwhatAandBmean,theyareinter-
changeable.Interchangingthemyields

```
p(BandA) = p(B) p(A|B)
```
That'sallweneed.Pullingthosepiecestogether,weget

```
p(B) p(A|B) = p(A) p(B|A)
```
(^1) Basedonanexamplefromhttp://en.wikipedia.org/wiki/Bayes' _theoremthatis
nolongerthere.


4 Chapter1. Bayes'sTheorem

Which meanstherearetwo waysto computethe conjunction. Ifyouhave
p(A),youmultiplybytheconditionalprobabilityp(B|A). Oryoucandoit
theotherwayaround;ifyouknowp(B),youmultiplybyp(A|B).Eitherway
youshouldgetthesamething.

Finallywecandividethroughbyp(B):

```
p(A|B) =
```
```
p(A) p(B|A)
p(B)
```
Andthat'sBayes'stheorem! Itmightnotlo oklikemuch,butitturnsoutto
b esurprisinglyp owerful.

Forexample,wecanuseittosolvetheco okieproblem. I'llwriteB 1 forthe
hyp othesisthat theco okiecamefromBowl 1 andV forthevanillaco okie.
PlugginginBayes'stheoremweget

```
p(B 1 |V) =
```
```
p(B 1 ) p(V|B 1 )
p(V)
```
Thetermontheleftiswhatwewant: theprobabilityofBowl1,giventhat
wechoseavanillaco okie.Thetermsontherightare:

```
 p(B 1 ): ThisistheprobabilitythatwechoseBowl1,unconditionedby
whatkindofco okiewegot. Sincetheproblemsayswechoseab owlat
random,wecanassumep(B 1 ) = 1/ 2.
```
```
 p(V|B 1 ):Thisistheprobabilityofgettingavanillaco okiefromBowl1,
whichis3/4.
```
```
 p(V): Thisisthe probabilityof drawingavanilla co okiefromeither
b owl. Sincewehadan equalchanceof cho osingeitherb owlandthe
b owlscontainthesamenumb erofco okies,wehadthesamechanceof
cho osinganyco okie.Betweenthetwob owlsthereare 50 vanillaand 30
cho colateco okies,sop(V)=5/8.
```
Puttingittogether,wehave

```
p(B 1 |V) =
```
#### (1/2) (3/4)

#### 5 / 8

whichreducesto3/5.Sothevanillaco okieisevidenceinfavorofthehyp othe-
sisthatwechoseBowl1,b ecausevanillaco okiesaremorelikelytocomefrom
Bowl1.


1.5. Thediachronicinterpretation 5

ThisexampledemonstratesoneuseofBayes'stheorem:itprovidesastrategy
togetfromp(B|A)top(A|B). Thisstrategyisusefulincases,liketheco okie
problem,whereitiseasiertocomputethetermsontherightsideofBayes's
theoremthanthetermontheleft.

### 1.5 The diachronic interpretation

ThereisanotherwaytothinkofBayes'stheorem:itgivesusawaytoup date
theprobabilityofahyp othesis,H,inlightofsomeb o dyofdata,D.

Thiswayofthinkingab outBayes'stheoremiscalledthediachronicinter-
pretation.Diachronicmeansthatsomethingishapp eningovertime;inthis
casetheprobabilityofthehyp otheseschanges,overtime,asweseenewdata.

RewritingBayes'stheoremwithHandDyields:

```
p(H|D) =
```
```
p(H) p(D|H)
p(D)
```
Inthisinterpretation,eachtermhasaname:

```
 p(H)istheprobabilityofthehyp othesisb eforeweseethedata,called
thepriorprobability,orjustprior.
```
```
 p(H|D)iswhatwewanttocompute,theprobabilityofthehyp othesis
afterweseethedata,calledthep osterior.
```
```
 p(D|H)istheprobabilityofthedataunderthehyp othesis,calledthe
likeliho o d.
```
```
 p(D)is the probabilityof the data underany hyp othesis, called the
normalizingconstant.
```
Sometimeswecancomputethepriorbasedonbackgroundinformation. For
example,theco okieproblemsp eciesthatwecho oseab owlatrandomwith
equalprobability.

Inothercases thepriorissub jective; thatis, reasonable p eoplemightdis-
agree,either b ecausethey use dierentbackground information orb ecause
theyinterpretthesameinformationdierently.

Thelikeliho o disusuallytheeasiestparttocompute.Intheco okieproblem,if
weknowwhichb owltheco okiecamefrom,wendtheprobabilityofavanilla
co okiebycounting.


6 Chapter1. Bayes'sTheorem

Thenormalizingconstantcanb etricky. Itissupp osedtob etheprobability
ofseeingthedataunderanyhyp othesisatall,butinthemostgeneralcaseit
ishardtonaildownwhatthatmeans.

Mostoftenwesimplifythingsbysp ecifyingasetofhyp othesesthatare

Mutuallyexclusive: Atmostonehyp othesisinthesetcanb etrue,and

Collectivelyexhaustive:Therearenootherp ossibilities;atleastoneofthe
hyp otheseshastob etrue.

Iusethewordsuiteforasetofhyp othesesthathastheseprop erties.

Intheco okieproblem,thereareonlytwohyp othesestheco okiecamefrom
Bowl 1 orBowl2andtheyaremutuallyexclusiveandcollectivelyexhaustive.

Inthatcasewecancomputep(D)usingthelawoftotalprobability,which
saysthatiftherearetwoexclusivewaysthatsomethingmighthapp en,you
canadduptheprobabilitieslikethis:

```
p(D) = p(B 1 ) p(D|B 1 ) + p(B 2 ) p(D|B 2 )
```
Plugginginthevaluesfromtheco okieproblem,wehave

```
p(D) = (1/2) (3/4) + (1/2) (1/2) = 5/ 8
```
whichiswhatwecomputedearlierbymentallycombiningthetwob owls.

### 1.6 The M&Mproblem

M&M's aresmallcandy-coated cho colatesthat comeinavarietyof colors.
Mars,Inc.,whichmakesM&M's,changesthemixtureofcolorsfromtimeto
time.

In1995,theyintro ducedblueM&M's. Beforethen,the colormixinabag
of plain M&M's was30% Brown,20% Yellow,20% Red,10% Green, 10%
Orange,10%Tan.Afterwarditwas24%Blue,20%Green,16%Orange,14%
Yellow,13%Red,13%Brown.

Supp oseafriendofminehastwobagsofM&M's,andhetellsmethatoneis
from 1994 andonefrom1996. Hewon'ttellmewhichiswhich,buthegives
meoneM&Mfromeachbag. Oneisyellowandoneisgreen. Whatisthe
probabilitythattheyellowonecamefromthe 1994 bag?


1.6. TheM&Mproblem 7

Thisproblemissimilarto the co okieproblem, withthe twistthat I draw
onesamplefrom each b owl/bag. This problemalsogives meachance to
demonstratethetablemetho d,whichisusefulforsolvingproblemslikethis
onpap er.Inthenextchapterwewillsolvethemcomputationally.

Therststepistoenumeratethehyp otheses.ThebagtheyellowM&Mcame
fromI'llcallBag1;I'llcalltheotherBag2. Sothehyp othesesare:

```
 A:Bag 1 isfrom1994,whichimpliesthatBag 2 isfrom1996.
```
```
 B:Bag 1 isfrom 1996 andBag 2 from1994.
```
Nowweconstructatablewitharowforeach hyp othesisandacolumnfor
eachterminBayes'stheorem:

```
Prior Likeliho o d Posterior
p(H) p(D|H) p(H) p(D|H) p(H|D)
A 1/2 (20)(20) 200 20/27
B 1/2 (14)(10) 70 7/27
```
Therstcolumnhasthepriors.Basedonthestatementoftheproblem,itis
reasonabletocho osep(A) = p(B) = 1/ 2.

Thesecond columnhas thelikeliho o ds, whichfollowfromthe information
intheproblem. Forexample,ifAistrue,theyellowM&Mcamefromthe
1994 bagwithprobability20%,andthegreencamefromthe 1996 bagwith
probability20%.IfBistrue,theyellowM&Mcamefromthe 1996 bagwith
probability14%,andthegreencamefromthe 1994 bagwithprobability10%.
Becausethe selectionsareindep endent, we gettheconjoint probabilityby
multiplying.

Thethirdcolumnisjustthepro ductoftheprevioustwo.Thesumofthiscol-
umn,270,isthenormalizingconstant.Togetthelastcolumn,whichcontains
thep osteriors,wedividethethirdcolumnbythenormalizingconstant.

That'sit.Simple,right?

Well,youmightb eb otheredbyonedetail. Iwritep(D|H)intermsofp er-
centages,notprobabilities,whichmeansitisobyafactorof10,000. But
thatcancelsoutwhenwe dividethroughbythenormalizingconstant,soit
do esn'taecttheresult.

Whenthesetofhyp othesesismutuallyexclusiveandcollectivelyexhaustive,
youcanmultiplythelikeliho o dsbyanyfactor,ifitisconvenient,aslongas
youapplythesamefactortotheentirecolumn.


8 Chapter1. Bayes'sTheorem

### 1.7 The Monty Hall problem

TheMontyHallproblemmightb ethemostcontentiousquestioninthehistory
of probability. Thescenarioissimple,butthecorrectanswerissocounter-
intuitivethatmanyp eoplejustcan'tacceptit,andmanysmartp eoplehave
embarrassedthemselvesnotjustbygettingitwrongbutbyarguingthewrong
side,aggressively,inpublic.

MontyHallwastheoriginalhostofthegameshowLet'sMakeaDeal. The
MontyHallproblemisbasedononeoftheregulargamesontheshow. Ifyou
areontheshow,here'swhathapp ens:

```
 Montyshowsyouthreecloseddo orsandtellsyouthatthereisaprize
b ehindeachdo or: oneprizeisacar, theothertwo arelessvaluable
prizeslikep eanutbutterandfakengernails. Theprizesarearranged
atrandom.
```
```
 Theob jectofthegameistoguesswhichdo orhasthecar.Ifyouguess
right,yougettokeepthecar.
```
```
 Youpickado or,whichwewillcallDo orA.We'llcalltheotherdo orsB
andC.
```
```
 Beforeop eningthe do or youchose, Montyincreases thesusp ense by
op eningeitherDo orBorC,whicheverdo esnothavethecar.(Ifthecar
isactuallyb ehindDo orA,Montycansafelyop enBorC,sohecho oses
oneatrandom.)
```
```
 ThenMontyoersyoutheoptiontostickwithyouroriginalchoiceor
switchtotheoneremainingunop eneddo or.
```
Thequestionis,shouldyoustickorswitchordo esitmakenodierence?

Mostp eoplehavethestrongintuitionthatitmakesnodierence. Thereare
twodo orsleft,theyreason,sothechancethat thecarisb ehindDo orAis
50%.

Butthatiswrong. Infact,thechanceofwinningifyoustickwithDo orAis
only1/3;ifyouswitch,yourchancesare2/3.

ByapplyingBayes'stheorem,wecanbreakthisproblemintosimplepieces,
andmayb econvinceourselvesthatthecorrectansweris,infact,correct.

To start, we shouldmakea carefulstatement of thedata. InthiscaseD
consistsoftwoparts:Montycho osesDo orBandthereisnocarthere.


1.7. TheMontyHallproblem 9

Nextwedenethreehyp otheses: A,B,andCrepresentthehyp othesisthat
thecarisb ehindDo orA,Do orB,orDo orC.Again, let'sapplythetable
metho d:

```
Prior Likeliho o d Posterior
p(H) p(D|H) p(H) p(D|H) p(H|D)
A 1/3 1/2 1/6 1/3
B 1/3 0 0 0
C 1/3 1 1/3 2/3
```
Fillinginthepriorsiseasyb ecausewearetoldthattheprizesarearrangedat
random,whichsuggeststhatthecarisequallylikelytob eb ehindanydo or.

Figuringoutthelikeliho o dstakessomethought,butwithreasonablecarewe
canb econdentthatwehaveitright:

```
 Ifthecarisactuallyb ehindA,Montycouldsafelyop enDo orsBorC.
Sotheprobabilitythathecho osesBis1/2.Andsincethecarisactually
b ehindA,theprobabilitythatthecarisnotb ehindBis1.
```
```
 Ifthecarisactuallyb ehindB,Montyhastoop endo orC,sotheprob-
abilitythatheop ensdo orBis0.
```
```
 Finally,ifthecarisb ehindDo orC,Montyop ensBwithprobability 1
andndsnocartherewithprobability1.
```
Nowthehardpartisover;therestisjustarithmetic. Thesumofthethird
columnis1/2.Dividingthroughyieldsp(A|D) = 1/ 3 andp(C|D) = 2/ 3. So
youareb etteroswitching.

TherearemanyvariationsoftheMontyHallproblem. Oneofthestrengths
oftheBayesianapproachisthatitgeneralizestohandlethesevariations.

Forexample,supp osethatMontyalwayscho osesBifhecan,andonlycho oses
Cifhehasto(b ecausethecarisb ehindB).Inthatcasetherevisedtableis:

```
Prior Likeliho o d Posterior
p(H) p(D|H) p(H) p(D|H) p(H|D)
A 1/3 1 1/3 1/2
B 1/3 0 0 0
C 1/3 1 1/3 1/2
```
Theonlychangeisp(D|A).Ifthecarisb ehindA,Montycancho osetoop en
BorC.Butinthisvariationhealwayscho osesB,sop(D|A) = 1.

Asaresult,thelikeliho o dsarethesameforAandC,andthep osteriorsare
thesame: p(A|D) = p(C|D) = 1/ 2. Inthiscase,thefactthatMontychose


10 Chapter1. Bayes'sTheorem

Brevealsnoinformationab outthelo cationofthecar,soitdo esn'tmatter
whetherthecontestantsticksorswitches.

Ontheotherhand,ifhehadop enedC,wewouldknowp(B|D) = 1.

IincludedtheMontyHallprobleminthischapterb ecauseIthinkitisfun,and
b ecause Bayes'stheoremmakesthecomplexityoftheproblemalittlemore
manageable. ButitisnotatypicaluseofBayes'stheorem,soifyoufoundit
confusing,don'tworry!

### 1.8 Discussion

For manyproblems involving conditionalprobability, Bayes's theorempro-
videsadivide-and-conquerstrategy. Ifp(A|B)ishardtocompute,orhard
tomeasureexp erimentally,checkwhetheritmightb eeasiertocomputethe
othertermsinBayes'stheorem,p(B|A),p(A)andp(B).

If the Monty Hall problem is your idea of fun, I have collected a num-
b er of similarproblems in an article called All yourBayes are b elong to
us, whichyou canread athttp://allendowney.blogspot.com/2011/10/
all- your- bayes- are- belong- to- us.html.


# Chapter 2

# Computational Statistics

## 2.1 Distributions

Instatisticsadistributionisasetofvaluesandtheircorresp ondingproba-
bilities.

Forexample,ifyourollasix-sideddie,thesetofp ossiblevaluesisthenumb ers
1 to6,andtheprobabilityasso ciatedwitheachvalueis1/6.

Asanotherexample,youmightb einterestedinhowmanytimes eachword
app earsincommonEnglishusage.Youcouldbuildadistributionthatincludes
eachwordandhowmanytimesitapp ears.

TorepresentadistributioninPython,youcoulduseadictionarythatmaps
fromeach value to its probability. Ihave written a classcalled Pmf that
usesaPythondictionaryinexactlythatway,andprovidesanumb erofuseful
metho ds.IcalledtheclassPmfinreferencetoaprobabilitymassfunction,
whichisawaytorepresentadistributionmathematically.

Pmf is dened in a Python mo dule I wrote to accompany this b o ok,
thinkbayes.py. You can download it from [http://thinkbayes.com/](http://thinkbayes.com/)
thinkbayes.py.FormoreinformationseeSection0.3.

TousePmfyoucanimp ortitlikethis:

from thinkbayes import Pmf

Thefollowingco debuildsaPmftorepresentthedistributionofoutcomesfor
asix-sideddie:

pmf = Pmf()
for x in [1,2,3,4,5,6]:
pmf.Set(x, 1/6.0)


12 Chapter2. ComputationalStatistics

PmfcreatesanemptyPmfwithnovalues.TheSetmetho dsetstheprobability
asso ciatedwitheachvalueto 1 / 6.

Here'sanotherexamplethatcountsthenumb eroftimeseachwordapp ears
inasequence:

pmf = Pmf()
for word in word_list:
pmf.Incr(word, 1)

Incrincreasestheprobabilityasso ciatedwitheachwordby1. Ifawordis
notalreadyinthePmf,itisadded.

Iputprobabilityinquotesb ecauseinthisexample,theprobabilitiesarenot
normalized;thatis,theydonotaddupto1.Sotheyarenottrueprobabilities.

Butinthisexamplethewordcountsareprop ortionaltotheprobabilities. So
afterwecountallthewords,wecancomputeprobabilitiesbydividingthrough
bythetotalnumb erofwords.Pmfprovidesametho d,Normalize,thatdo es
exactlythat:

pmf.Normalize()

OnceyouhaveaPmfob ject,youcanaskfortheprobabilityasso ciatedwith
anyvalue:

print pmf.Prob('the')

Andthatwouldprintthefrequencyofthewordtheasafractionofthewords
inthelist.

PmfusesaPythondictionarytostorethevaluesandtheirprobabilities,so
thevaluesinthePmfcanb eanyhashabletyp e.Theprobabilitiescanb eany
numericaltyp e,buttheyareusuallyoating-p ointnumb ers(typ efloat).

### 2.2 The co okieproblem

InthecontextofBayes'stheorem,itisnaturaltouseaPmftomapfromeach
hyp othesistoitsprobability. Intheco okieproblem,thehyp othesesareB 1
andB 2 .InPython,Irepresentthemwithstrings:

pmf = Pmf()
pmf.Set('Bowl 1', 0.5)
pmf.Set('Bowl 2', 0.5)

Thisdistribution,whichcontainsthepriorsforeachhyp othesis,iscalled(wait
forit)thepriordistribution.


2.3. TheBayesianframework 13

Toup datethedistributionbasedonnewdata(thevanillaco okie),wemultiply
eachpriorbythecorresp ondinglikeliho o d.Thelikeliho o dofdrawingavanilla
co okiefromBowl 1 is3/4.Thelikeliho o dforBowl 2 is1/2.

pmf.Mult('Bowl 1', 0.75)
pmf.Mult('Bowl 2', 0.5)

Multdo eswhatyouwouldexp ect. Itgetstheprobabilityforthegivenhy-
p othesisandmultipliesbythegivenlikeliho o d.

Afterthisup date,thedistributionisnolongernormalized,butb ecausethese
hyp othesesaremutuallyexclusiveandcollectivelyexhaustive,wecanrenor-
malize:

pmf.Normalize()

Theresultisadistributionthatcontainsthe p osteriorprobabilityforeach
hyp othesis,whichiscalled(waitnow)thep osteriordistribution.

Finally,wecangetthep osteriorprobabilityforBowl1:

print pmf.Prob('Bowl 1')

And the answer is 0.6. You can download this example from [http://](http://)
thinkbayes.com/cookie.py. FormoreinformationseeSection0.3.

### 2.3 The Bayesian framework

Beforewegoontootherproblems,Iwanttorewritetheco defromtheprevious
sectiontomakeitmoregeneral.FirstI'lldeneaclasstoencapsulatetheco de
relatedtothisproblem:

class Cookie(Pmf):

```
def __init__(self, hypos):
Pmf.__init__(self)
for hypo in hypos:
self.Set(hypo, 1)
self.Normalize()
```
ACo okieob jectisaPmfthatmapsfromhyp othesestotheirprobabilities.
The__init__metho dgiveseachhyp othesisthesamepriorprobability.Asin
theprevioussection,therearetwohyp otheses:

```
hypos = ['Bowl 1', 'Bowl 2']
pmf = Cookie(hypos)
```
CookieprovidesanUpdatemetho dthattakesdataasaparameterandup dates
theprobabilities:


14 Chapter2. ComputationalStatistics

```
def Update(self, data):
for hypo in self.Values():
like = self.Likelihood(data, hypo)
self.Mult(hypo, like)
self.Normalize()
```
Updatelo opsthrougheachhyp othesisinthesuiteandmultipliesitsprobability
by the likeliho o d of the dataunder the hyp othesis, whichiscomputed by
Likelihood:

```
mixes = {
'Bowl 1':dict(vanilla=0.75, chocolate=0.25),
'Bowl 2':dict(vanilla=0.5, chocolate=0.5),
}
```
```
def Likelihood(self, data, hypo):
mix = self.mixes[hypo]
like = mix[data]
return like
```
Likelihoodusesmixes,whichisadictionarythatmapsfromthenameofa
b owltothemixofco okiesintheb owl.

Here'swhattheup datelo okslike:

```
pmf.Update('vanilla')
```
Andthenwecanprintthep osteriorprobabilityofeachhyp othesis:

```
for hypo, prob in pmf.Items():
print hypo, prob
```
Theresultis

Bowl 1 0.6
Bowl 2 0.4

whichisthesameaswhatwegotb efore.Thisco deismorecomplicatedthan
what we sawintheprevioussection. Oneadvantage isthat itgeneralizes
tothecasewherewedrawmorethanoneco okiefromthesameb owl(with
replacement):

```
dataset = ['vanilla', 'chocolate', 'vanilla']
for data in dataset:
pmf.Update(data)
```
Theotheradvantageisthatitprovidesaframeworkforsolvingmanysimilar
problems. Inthenextsectionwe'llsolvetheMontyHallproblemcomputa-
tionallyandthenseewhatpartsoftheframeworkarethesame.

Theco deinthissectionisavailablefromhttp://thinkbayes.com/cookie2.
py.FormoreinformationseeSection0.3.


2.4. TheMontyHallproblem 15

### 2.4 TheMontyHallproblem

TosolvetheMontyHallproblem,I'lldeneanewclass:

class Monty(Pmf):

```
def __init__(self, hypos):
Pmf.__init__(self)
for hypo in hypos:
self.Set(hypo, 1)
self.Normalize()
```
SofarMontyandCookieareexactlythesame.Andtheco dethatcreatesthe
Pmfisthesame,to o,exceptforthenamesofthehyp otheses:

```
hypos = 'ABC'
pmf = Monty(hypos)
```
CallingUpdateisprettymuchthesame:

```
data = 'B'
pmf.Update(data)
```
AndtheimplementationofUpdateisexactlythesame:

```
def Update(self, data):
for hypo in self.Values():
like = self.Likelihood(data, hypo)
self.Mult(hypo, like)
self.Normalize()
```
TheonlypartthatrequiressomeworkisLikelihood:

```
def Likelihood(self, data, hypo):
if hypo == data:
return 0
elif hypo == 'A':
return 0.5
else:
return 1
```
Finally,printingtheresultsisthesame:

```
for hypo, prob in pmf.Items():
print hypo, prob
```
Andtheansweris

A 0.333333333333
B 0.0
C 0.666666666667


16 Chapter2. ComputationalStatistics

Inthisexample,writingLikelihoodisalittlecomplicated,buttheframework
oftheBayesianup dateissimple. Theco deinthissectionisavailablefrom
[http://thinkbayes.com/monty.py.FormoreinformationseeSection0.3.](http://thinkbayes.com/monty.py.FormoreinformationseeSection0.3.)

### 2.5 Encapsulatingtheframework.

Nowthatweseewhatelementsoftheframeworkarethesame,wecanencap-
sulatetheminanob jectaSuiteisaPmfthatprovides__init__,Update,
andPrint:

class Suite(Pmf):
"""Represents a suite of hypotheses and their probabilities."""

```
def __init__(self, hypo=tuple()):
"""Initializes the distribution."""
```
```
def Update(self, data):
"""Updates each hypothesis based on the data."""
```
```
def Print(self):
"""Prints the hypotheses and their probabilities."""
```
TheimplementationofSuiteisinthinkbayes.py.TouseSuite,youshould
writeaclassthatinheritsfromitandprovidesLikelihood.Forexample,here
isthesolutiontotheMontyHallproblemrewrittentouseSuite:

from thinkbayes import Suite

class Monty(Suite):

```
def Likelihood(self, data, hypo):
if hypo == data:
return 0
elif hypo == 'A':
return 0.5
else:
return 1
```
Andhere'stheco dethatusesthisclass:

```
suite = Monty('ABC')
suite.Update('B')
suite.Print()
```
You candownloadthisexample fromhttp://thinkbayes.com/monty2.py.
FormoreinformationseeSection0.3.


2.6. TheM&Mproblem 17

### 2.6 TheM&Mproblem

Wecanuse theSuiteframeworkto solvethe M&Mproblem. Writingthe
Likelihoodfunctionistricky,buteverythingelseisstraightforward.

FirstIneedtoenco dethecolormixesfromb eforeandafter1995:

```
mix94 = dict(brown=30,
yellow=20,
red=20,
green=10,
orange=10,
tan=10)
```
```
mix96 = dict(blue=24,
green=20,
orange=16,
yellow=14,
red=13,
brown=13)
```
ThenIhavetoenco dethehyp otheses:

```
hypoA = dict(bag1=mix94, bag2=mix96)
hypoB = dict(bag1=mix96, bag2=mix94)
```
hypoArepresentsthehyp othesisthatBag 1 isfrom 1994 andBag 2 from1996.
hypoBistheotherwayaround.

NextImapfromthenameofthehyp othesistotherepresentation:

```
hypotheses = dict(A=hypoA, B=hypoB)
```
AndnallyIcanwriteLikelihood. Inthiscasethehyp othesis,hypo,isa
string,eitherAorB.Thedataisatuplethatsp eciesabagandacolor.

```
def Likelihood(self, data, hypo):
bag, color = data
mix = self.hypotheses[hypo][bag]
like = mix[color]
return like
```
Here'stheco dethatcreatesthesuiteandup datesit:

```
suite = M_and_M('AB')
```
```
suite.Update(('bag1', 'yellow'))
suite.Update(('bag2', 'green'))
```
```
suite.Print()
```

18 Chapter2. ComputationalStatistics

Andhere'stheresult:

A 0.740740740741
B 0.259259259259

Thep osteriorprobabilityofAisapproximately 20 / 27 ,whichiswhatwegot
b efore.

Theco deinthissectionisavailablefromhttp://thinkbayes.com/m_and_m.
py.FormoreinformationseeSection0.3.

### 2.7 Discussion

ThischapterpresentstheSuiteclass,whichencapsulatestheBayesianup date
framework.

Suiteisanabstracttyp e,whichmeansthatitdenestheinterfaceaSuite
issupp osedto have,butdo esnotprovideacompleteimplementation. The
SuiteinterfaceincludesUpdateandLikelihood, buttheSuiteclassonly
providesanimplementationofUpdate,notLikelihood.

Aconcrete typ eisaclassthatextendsanabstractparentclassandpro-
videsanimplementationofthemissingmetho ds.Forexample,Montyextends
Suite,soitinheritsUpdateandprovidesLikelihood.

Ifyouarefamiliarwithdesignpatterns,youmightrecognizethisasanexample
ofthetemplatemetho dpattern. Youcanreadab outthispatternathttp:
//en.wikipedia.org/wiki/Template_method_pattern.

Mostoftheexamplesinthefollowingchaptersfollowthesamepattern;for
eachproblemwedeneanewclassthatextendsSuite,inheritsUpdate,and
providesLikelihood. InafewcasesweoverrideUpdate,usuallytoimprove
p erformance.

### 2.8 Exercises.

Exercise 2.1InSection2.3Isaidthat thesolutionto theco okieproblem
generalizestothecasewherewedrawmultipleco okieswithreplacement.

Butinthemorelikelyscenariowhereweeattheco okieswedraw,thelikeliho o d
ofeachdrawdep endsonthepreviousdraws.

Mo difythesolutioninthischaptertohandleselectionwithoutreplacement.
Hint: addinstancevariablestoCookietorepresentthehyp otheticalstateof


2.8. Exercises 19

theb owls,andmo difyLikelihoodaccordingly. Youmightwanttodenea
Bowlob ject.


20 Chapter2. ComputationalStatistics


# Chapter 3

# Estimation

### 3.1 Thediceproblem

Supp oseIhaveab oxofdice thatcontainsa4-sideddie, a6-sideddie,an
8-sideddie,a12-sideddie,anda20-sideddie. IfyouhaveeverplayedDun-
geons&Dragons,youknowwhatIamtalkingab out.

Supp oseIselectadiefromtheb oxatrandom,rollit,andgeta6. Whatis
theprobabilitythatIrolledeachdie?

Letmesuggestathree-stepstrategyforapproachingaproblemlikethis.

1. Cho osearepresentationforthehyp otheses.
2. Cho osearepresentationforthedata.
3. Writethelikeliho o dfunction.

InpreviousexamplesIusedstringstorepresenthyp othesesanddata,butfor
thedieproblemI'llusenumb ers.Sp ecically,I'llusetheintegers4,6,8,12,
and 20 torepresenthyp otheses:

```
suite = Dice([4, 6, 8, 12, 20])
```
Andintegersfrom 1 to 20 forthedata.Theserepresentationsmakeiteasyto
writethelikeliho o dfunction:

class Dice(Suite):
def Likelihood(self, data, hypo):
if hypo < data:
return 0
else:
return 1.0/hypo


22 Chapter3. Estimation

Here'showLikelihoodworks. Ifhypo<data,thatmeanstherollisgreater
thanthenumb erofsidesonthedie. Thatcan'thapp en,sothelikeliho o dis
0.

Otherwisethequestionis,Giventhattherearehyposides,whatisthechance
ofrollingdata? Theansweris1/hypo,regardlessofdata.

Hereisthestatementthatdo estheup date(ifIrolla6):

```
suite.Update(6)
```
Andhereisthep osteriordistribution:

4 0.0
6 0.392156862745
8 0.294117647059
12 0.196078431373
20 0.117647058824

Afterwe rolla6, theprobabilityforthe 4-sideddieis0. Themostlikely
alternativeisthe 6-sideddie,butthereisstillalmosta12%chanceforthe
20-sideddie.

Whatifwerollafewmoretimesandget6,8,7,7,5,and4?

```
for roll in [6, 8, 7, 7, 5, 4]:
suite.Update(roll)
```
Withthisdatathe6-sideddieiseliminated,andthe8-sideddieseemsquite
likely. Herearetheresults:

4 0.0
6 0.0
8 0.943248453672
12 0.0552061280613
20 0.0015454182665

Nowtheprobabilityis94%thatwearerollingthe8-sideddie,andlessthan
1%forthe20-sideddie.

ThediceproblemisbasedonanexampleIsawinSanjoyMaha jan'sclasson
Bayesian inference. You candownload theco deinthissectionfromhttp:
//thinkbayes.com/dice.py.FormoreinformationseeSection0.3.

### 3.2 Thelo comotiveproblem

I found the lo comotiveproblemin FrederickMosteller's, Fifty Chal lenging
ProblemsinProbabilitywithSolutions(Dover,1987):


3.2. Thelo comotiveproblem 23

0.000 (^0200) Number of trains 400 600 800 1000
0.001
0.002
0.003
0.004
0.005
0.006
Probability
Figure3.1: Posterior distributionfor the lo comotive problem, based on a
uniformprior.
Arailroadnumb ersitslo comotivesinorder1..N.Onedayyousee
alo comotivewiththenumb er60.Estimatehowmanylo comotives
therailroadhas.
Basedonthisobservation,weknowtherailroadhas 60 ormorelo comotives.
Buthowmanymore?ToapplyBayesianreasoning,wecanbreakthisproblem
intotwosteps:

1. Whatdidweknowab outN b eforewesawthedata?
2. ForanygivenvalueofN,whatisthelikeliho o dofseeingthedata(a
    lo comotivewithnumb er60)?

Theanswertotherstquestionistheprior. Theanswertothesecondisthe
likeliho o d.

Wedon'thavemuchbasistocho oseaprior,butwecanstartwithsomething
simpleandthenconsideralternatives. Let'sassumethatN isequallylikely
tob eanyvaluefrom 1 to1000.

```
hypos = xrange(1, 1001)
```
Nowallweneed isalikeliho o dfunction. Inahyp otheticaleet ofN lo co-
motives,whatistheprobabilitythatwewouldseenumb er60? Ifweassume
thatthereisonlyonetrain-op eratingcompany(oronlyonewecareab out)
andthatweareequallylikelytoseeanyofitslo comotives,thenthechance
ofseeinganyparticularlo comotiveis 1 /N.

Here'sthelikeliho o dfunction:


24 Chapter3. Estimation

class Train(Suite):
def Likelihood(self, data, hypo):
if hypo < data:
return 0
else:
return 1.0/hypo

Thismightlo okfamiliar;thelikeliho o dfunctionsforthelo comotiveproblem
andthediceproblemareidentical.

Here'stheup date:

```
suite = Train(hypos)
suite.Update(60)
```
Thereareto omanyhyp othesestoprint,soIplottedtheresultsinFigure3.1.
Notsurprisingly,allvaluesofNb elow 60 haveb eeneliminated.

Themostlikelyvalue,ifyouhadtoguess,is60. Thatmightnotseemlikea
verygo o dguess;afterall,whatarethechancesthatyoujusthapp enedtosee
thetrainwiththehighestnumb er? Nevertheless,ifyouwanttomaximizethe
chanceofgettingtheanswerexactlyright,youshouldguess60.

Butmayb ethat'snottherightgoal. Analternativeistocomputethemean
ofthep osteriordistribution:

def Mean(suite):
total = 0
for hypo, prob in suite.Items():
total += hypo * prob
return total

print Mean(suite)

Oryoucouldusetheverysimilarmetho dprovidedbyPmf:

```
print suite.Mean()
```
Themeanofthep osterioris333,sothatmightb eago o dguessifyouwantedto
minimizeerror.Ifyouplayedthisguessinggameoverandover,usingthemean
ofthep osteriorasyourestimatewouldminimizethemeansquarederrorover
the longrun(seehttp://en.wikipedia.org/wiki/Minimum_mean_square_
error).

Youcandownloadthisexamplefromhttp://thinkbayes.com/train.py.For
moreinformationseeSection0.3.


3.3. Whatab outthatprior? 25

### 3.3 Whatab outthatprior?.

Tomakeanyprogressonthelo comotiveproblemwehadtomakeassumptions,
andsomeofthemwereprettyarbitrary.Inparticular,wechoseauniformprior
from 1 to1000,withoutmuchjusticationforcho osing1000,orforcho osing
auniformdistribution.

Itisnotcrazytob elievethatarailroadcompanymightop erate 1000 lo como-
tives,butareasonablep ersonmightguessmoreorfewer.Sowemightwonder
whetherthep osteriordistributionissensitivetotheseassumptions. Withso
littledataonlyoneobservationitprobablyis.

Recallthatwithauniformpriorfrom 1 to1000,themeanofthep osterioris

333. Withanupp erb oundof500,wegetap osteriormeanof207,andwith
anupp erb oundof2000,thep osteriormeanis552.

Sothat'sbad.Therearetwowaystopro ceed:

```
 Getmoredata.
```
```
 Getmorebackgroundinformation.
```
Withmoredata,p osteriordistributionsbasedondierentpriorstendtocon-
verge.Forexample,supp osethatinadditiontotrain 60 wealsoseetrains 30
and90. Wecanup datethedistributionlikethis:

```
for data in [60, 30, 90]:
suite.Update(data)
```
Withthesedata,themeansofthep osteriorsare

```
Upp er Posterior
Bound Mean
500 152
1000 164
2000 171
```
Sothedierencesaresmaller.

### 3.4 Analternativeprior.

Ifmoredataarenotavailable,anotheroptionistoimprovethepriorsbygath-
eringmorebackgroundinformation. Itisprobablynotreasonabletoassume
thatatrain-op eratingcompanywith 1000 lo comotivesisjustaslikelyas a
companywithonly1.


26 Chapter3. Estimation

0.000 (^0200) Number of trains 400 600 800 1000
0.002
0.004
0.006
0.008
0.010
0.012
0.014
0.016
0.018
Probability
uniform
power law
Figure3.2:Posteriordistributionbasedonap owerlawprior,comparedtoa
uniformprior.
With some eort, we could probablyndalistof companiesthat op erate
lo comotivesintheareaofobservation.Orwecouldinterviewanexp ertinrail
shippingtogatherinformationab outthetypicalsizeofcompanies.
Butevenwithoutgettingintothesp ecicsofrailroadeconomics,wecanmake
someeducatedguesses.Inmostelds,therearemanysmallcompanies,fewer
medium-sizedcompanies,andonlyoneortwoverylargecompanies. Infact,
the distributionof companysizes tends to follow ap ower law, as Rob ert
Axtell rep orts inScience (seehttp://www.sciencemag.org/content/293/
5536/1818.full.pdf).
Thislawsuggeststhatifthereare 1000 companieswithfewerthan 10 lo como-
tives,theremightb e 100 companieswith 100 lo comotives, 10 companieswith
1000,andp ossiblyonecompanywith10,000lo comotives.
Mathematically,ap owerlawmeansthatthenumb erofcompanieswithagiven
sizeisinverselyprop ortionaltosize,or
PMF(x)∝

#### (

#### 1

```
x
```
```
)α
```
wherePMF(x)istheprobabilitymassfunctionofxandαisaparameterthat
isoftennear1.

Wecanconstructap owerlawpriorlikethis:

class Train(Dice):


3.5. Credibleintervals 27

```
def __init__(self, hypos, alpha=1.0):
Pmf.__init__(self)
for hypo in hypos:
self.Set(hypo, hypo**(-alpha))
self.Normalize()
```
Andhere'stheco dethatconstructstheprior:

```
hypos = range(1, 1001)
suite = Train(hypos)
```
Again,theupp erb oundisarbitrary,butwithap owerlawprior,thep osterior
islesssensitivetothischoice.

Figure3.2 showsthe new p osterior based on the p owerlaw, compared to
thep osteriorbasedontheuniformprior. Usingthebackgroundinformation
representedinthep owerlawprior,wecanallbuteliminatevaluesofNgreater
than700.

Ifwestartwiththispriorandobservetrains30,60,and90,themeansofthe
p osteriorsare

```
Upp er Posterior
Bound Mean
500 131
1000 133
2000 134
```
Nowthedierencesaremuchsmaller.Infact,withanarbitrarilylargeupp er
b ound,themeanconvergeson134.

Sothep owerlawpriorismorerealistic,b ecauseitisbasedongeneralinfor-
mationab outthesizeofcompanies,anditb ehavesb etterinpractice.

Youcandownload the examplesinthissection fromhttp://thinkbayes.
com/train3.py.FormoreinformationseeSection0.3.

### 3.5 Credibleintervals

Onceyouhavecomputedap osteriordistribution,itisoftenusefultosumma-
rizetheresultswithasinglep ointestimateoraninterval.Forp ointestimates
itiscommontousethemean,median,orthevaluewithmaximumlikeliho o d.

Forintervalsweusuallyrep orttwovaluescomputedso thatthereisa90%
chancethattheunknownvaluefallsb etweenthem(oranyotherprobability).
Thesevaluesdeneacredibleinterval.


28 Chapter3. Estimation

Asimplewaytocomputeacredibleintervalistoadduptheprobabilitiesinthe
p osteriordistributionandrecordthevaluesthatcorresp ondtoprobabilities
5%and95%.Inotherwords,the5thand95thp ercentiles.

thinkbayesprovidesafunctionthatcomputesp ercentiles:

def Percentile(pmf, percentage):
p = percentage / 100.0
total = 0
for val, prob in pmf.Items():
total += prob
if total >= p:
return val

Andhere'stheco dethatusesit:

```
interval = Percentile(suite, 5), Percentile(suite, 95)
print interval
```
For thepreviousexamplethelo comotive problemwithap owerlaw prior
and threetrainsthe90% credibleinterval is(91,243). Thewidth ofthis
rangesuggests, correctly,thatwearestillquiteuncertainab outhowmany
lo comotivesthereare.

### 3.6 Cumulativedistributionfunctions

Intheprevioussectionwecomputedp ercentilesbyiteratingthroughthevalues
andprobabilitiesinaPmf.Ifweneedtocomputemorethanafewp ercentiles,
itismoreecienttouseacumulativedistributionfunction,orCdf.

CdfsandPmfsareequivalentinthesensethattheycontainthesameinforma-
tionab outthedistribution,andyoucanalwaysconvertfromonetotheother.
TheadvantageoftheCdfisthatyoucancomputep ercentilesmoreeciently.

thinkbayes providesa Cdf classthat represents acumulative distribution
function. Pmfprovidesametho dthatmakesthecorresp ondingCdf:

cdf = suite.MakeCdf()

AndCdfprovidesafunctionnamedPercentile

```
interval = cdf.Percentile(5), cdf.Percentile(95)
```
Converting fromaPmfto aCdftakes timeprop ortionalto thenumb erof
values,len(pmf). TheCdfstoresthevaluesandprobabilitiesinsortedlists,
so lo okingupaprobabilityto getthecorresp ondingvalue takeslogtime:
thatis,timeprop ortionaltothelogarithmofthenumb erofvalues. Lo oking


3.7. TheGermantankproblem 29

upavaluetogetthecorresp ondingprobabilityisalsologarithmic,soCdfsare
ecientformanycalculations.

Theexamplesinthissectionareinhttp://thinkbayes.com/train3.py. For
moreinformationseeSection0.3.

### 3.7 TheGermantankproblem

DuringWorldWarI I,theEconomicWarfareDivisionoftheAmericanEm-
bassyinLondonusedstatisticalanalysistoestimateGermanpro ductionof
tanksandotherequipment.^1

TheWesternAllieshadcapturedlogb o oks,inventories,andrepairrecords
thatincludedchassisandengineserialnumb ersforindividualtanks.

Analysisoftheserecordsindicatedthatserialnumb erswereallo catedbyman-
ufacturerandtanktyp einblo cksof 100 numb ers,thatnumb ersineachblo ck
wereusedsequentially,andthatnotallnumb ersineachblo ckwereused.So
theproblemofestimatingGermantankpro ductioncouldb ereduced,within
eachblo ckof 100 numb ers,toaformofthelo comotiveproblem.

Basedonthisinsight,AmericanandBritishanalystspro ducedestimatessub-
stantiallylowerthanestimatesfromotherformsofintelligence. Andafterthe
war,recordsindicatedthattheyweresubstantiallymoreaccurate.

Theyp erformedsimilaranalysesfortires,trucks,ro ckets, andotherequip-
ment,yieldingaccurateandactionableeconomicintelligence.

TheGermantankproblemishistoricallyinteresting;itisalsoaniceexample
ofreal-worldapplicationofstatisticalestimation.Sofarmanyoftheexamples
inthisb o okhaveb eentoyproblems,butitwillnotb elongb eforewestart
solvingrealproblems. IthinkitisanadvantageofBayesiananalysis,esp ecially
withthecomputationalapproachwearetaking,thatitprovidessuchashort
pathfromabasicintro ductiontotheresearchfrontier.

### 3.8 Discussion

AmongBayesians,therearetwoapproaches tocho osingpriordistributions.
Somerecommendcho osingthepriorthatb est representsbackgroundinfor-
mationab outtheproblem;inthatcasethepriorissaidtob einformative.

(^1) RugglesandBro die,AnEmpiricalApproachtoEconomicIntelligenceinWorldWar
I I,JournaloftheAmericanStatisticalAssociation,Vol.42,No. 237 (March1947).


30 Chapter3. Estimation

Theproblemwithusinganinformativeprioristhatp eoplemightusedier-
entbackgroundinformation(orinterpretitdierently).Soinformativepriors
oftenseemsub jective.

Thealternativeisaso-calleduninformativeprior,whichisintendedtob e
asunrestrictedasp ossible,inordertoletthedatasp eakforthemselves. In
somecasesyoucanidentifyauniquepriorthathassomedesirableprop erty,
likerepresentingminimalpriorinformationab outtheestimatedquantity.

Uninformative priorsareapp ealingb ecausethey seemmore ob jective. But
I amgenerallyinfavorof usinginformativepriors. Why? First,Bayesian
analysisisalwaysbasedonmo delingdecisions. Cho osingthepriorisoneof
thosedecisions,butitisnottheonlyone,anditmightnotevenb ethemost
sub jective. So evenif anuninformative priorismore ob jective, theentire
analysisisstillsub jective.

Also,formostpracticalproblems,youarelikelytob einoneoftworegimes:
eitheryouhavealotofdataornotverymuch.Ifyouhavealotofdata,the
choiceofthepriordo esn'tmatterverymuch;informativeanduninformative
priorsyieldalmostthesameresults.We'llseeanexamplelikethisinthenext
chapter.

But if,asinthelo comotiveproblem,you don'thavemuch data,usingrel-
evantbackgroundinformation(likethep owerlawdistribution)makesabig
dierence.

Andif,asintheGermantankproblem,youhavetomakelife-and-deathdeci-
sionsbasedonyourresults,youshouldprobablyusealloftheinformationat
yourdisp osal,ratherthanmaintainingtheillusionofob jectivitybypretending
toknowlessthanyoudo.

### 3.9 Exercises.

Exercise3.1Towritealikeliho o dfunctionforthelo comotiveproblem,we
hadtoanswerthisquestion: IftherailroadhasN lo comotives,whatisthe
probabilitythatweseenumb er60?

Theanswerdep endsonwhatsamplingpro cessweusewhenweobservethe
lo comotive. Inthischapter,Iresolvedtheambiguitybysp ecifyingthatthere
isonlyonetrain-op eratingcompany(oronlyonethatwecareab out).

Butsupp oseinsteadthattherearemanycompanieswithdierentnumb ersof
trains. Andsupp osethatyouareequallylikelytoseeanytrainop eratedby


3.9. Exercises 31

anycompany.Inthatcase,thelikeliho o dfunctionisdierentb ecauseyouare
morelikelytoseeatrainop eratedbyalargecompany.

As an exercise,implement the likeliho o d functionfor thisvariation of the
lo comotiveproblem,andcomparetheresults.


32 Chapter3. Estimation


# Chapter 4

# More Estimation

### 4.1 TheEuroproblem.

InInformationTheory, Inference,andLearningAlgorithms,DavidMacKay
p osesthisproblem:

```
Astatisticalstatementapp earedinTheGuardian"onFridayJan-
uary4,2002:
```
```
Whenspunonedge 250 times,aBelgianone-eurocoin
cameupheads 140 times andtails110. `Itlo oksvery
suspicioustome,'saidBarryBlight,astatisticslecturer
attheLondonScho olof Economics. `Ifthe coinwere
unbiased,thechance ofgettingaresultasextremeas
thatwouldb elessthan7%.'
```
```
Butdothesedatagiveevidencethatthecoinisbiasedratherthan
fair?
```
Toanswerthatquestion,we'llpro ceedintwosteps. Therstistoestimate
theprobabilitythatthecoinlandsfaceup. Thesecondistoevaluatewhether
thedatasupp ortthehyp othesisthatthecoinisbiased.

Youcandownload theco de inthissectionfromhttp://thinkbayes.com/
euro.py.FormoreinformationseeSection0.3.

Anygivencoinhassomeprobability, x, oflandingheadsupwhenspunon
edge. Itseems reasonable to b elievethat thevalue of xdep endson some
physicalcharacteristicsofthecoin,primarilythedistributionofweight.


34 Chapter4. MoreEstimation

0.00 (^02040) x 60 80 100
0.02
0.04
0.06
0.08
0.10
0.12
0.14
Probability
uniform
Figure4.1: PosteriordistributionfortheEuroproblemonauniformprior.
If acoinis p erfectlybalanced, we exp ectxto b e closeto 50%, butfor a
lopsidedcoin,xmightb esubstantiallydierent.WecanuseBayes'stheorem
andtheobserveddatatoestimatex.
Let'sdene 101 hyp otheses,whereHxisthehyp othesisthattheprobability
ofheadsisx%,forvaluesfrom 0 to100.I'llstartwithauniformpriorwhere
theprobabilityofHxisthesameforallx. We'llcomebacklatertoconsider
otherpriors.
The likeliho o d functionisrelatively easy: IfHx istrue, the probabilityof
headsisx/ 100 andtheprobabilityoftailsis 1 −x/ 100.
class Euro(Suite):
def Likelihood(self, data, hypo):
x = hypo
if data =='H':
return x/100.0
else:
return 1 - x/100.0
Here'stheco dethatmakesthesuiteandup datesit:
suite = Euro(xrange(0, 101))
dataset = 'H' * 140 + 'T' * 110
for data in dataset:
suite.Update(data)
TheresultisinFigure4.1.


4.2. Summarizingthep osterior 35

### 4.2 Summarizingthep osterior

Again,thereareseveralwaystosummarizethep osteriordistribution. One
optionistondthemostlikelyvalueinthep osteriordistribution.thinkbayes
providesafunctionthatdo esthat:

def MaximumLikelihood(pmf):
"""Returns the value with the highest probability."""
prob, val = max((prob, val) for val, prob in pmf.Items())
return val

Inthiscasetheresultis56,whichisalsotheobservedp ercentageofheads,
140 /250 = 56%. Sothatsuggests(correctly)thattheobservedp ercentageis
themaximumlikeliho o destimatorforthep opulation.

Wemightalsosummarizethep osteriorbycomputingthemeanandmedian:

```
print 'Mean', suite.Mean()
print 'Median', thinkbayes.Percentile(suite, 50)
```
Themean is55.95; the median is56. Finally, we cancomputeacredible
interval:

```
print 'CI', thinkbayes.CredibleInterval(suite, 90)
```
Theresultis(51,61).

Now,gettingbacktotheoriginalquestion,wewouldliketoknowwhetherthe
coinisfair. Weobservethatthep osteriorcredibleintervaldo esnotinclude
50%,whichsuggeststhatthecoinisnotfair.

Butthatisnotexactlythequestionwe startedwith. MacKayasked, Do
thesedatagiveevidencethatthecoinisbiasedratherthanfair? Toanswer
thatquestion,wewillhavetob emorepreciseab outwhatitmeanstosaythat
dataconstituteevidenceforahyp othesis.Andthatisthesub jectofthenext
chapter.

Butb eforewegoon,Iwanttoaddressonep ossiblesourceofconfusion.Since
wewanttoknowwhetherthecoinisfair,itmightb etemptingtoaskforthe
probabilitythatxis50%:

```
print suite.Prob(50)
```
Theresultis0.021, butthat value isalmostmeaningless. The decisionto
evaluate 101 hyp otheseswasarbitrary;wecouldhavedividedtherangeinto
moreorfewerpieces,andifwehad,theprobabilityforanygivenhyp othesis
wouldb egreaterorless.


36 Chapter4. MoreEstimation

0.000 (^02040) x 60 80 100
0.005
0.010
0.015
0.020
0.025
Probability
uniform
triangle
Figure4.2:UniformandtriangularpriorsfortheEuroproblem.
0.00 (^02040) x 60 80 100
0.02
0.04
0.06
0.08
0.10
0.12
0.14
Probability
uniform
triangle
Figure4.3: PosteriordistributionsfortheEuroproblem.


4.3. Swampingthepriors 37

### 4.3 Swampingthepriors

Westartedwithauniformprior,butthatmightnotb eago o dchoice. Ican
b elievethatifacoinislopsided,xmightdeviatesubstantiallyfrom50%,but
itseemsunlikelythattheBelgianEurocoinissoimbalancedthatxis10%or
90%.

Itmightb emorereasonabletocho oseapriorthatgiveshigherprobabilityto
valuesofxnear50%andlowerprobabilitytoextremevalues.

Asanexample,Iconstructedatriangularprior,showninFigure4.2. Here's
theco dethatconstructstheprior:

def TrianglePrior():
suite = Euro()
for x in range(0, 51):
suite.Set(x, x)
for x in range(51, 101):
suite.Set(x, 100-x)
suite.Normalize()

Figure4.2showstheresult(andtheuniformpriorforcomparison).Up dating
thispriorwiththe same datasetyieldsthe p osterior distributionshownin
Figure4.3.Evenwithsubstantiallydierentpriors,thep osteriordistributions
arevery similar. Themediansandthe credibleintervalsareidentical; the
meansdierbylessthan0.5%.

Thisisanexampleofswampingthepriors:withenoughdata,p eoplewho
startwithdierentpriorswilltendtoconvergeonthesamep osterior.

### 4.4 Optimization

Theco deIhaveshownsofarismeanttob eeasytoread,butitisnotvery
ecient.Ingeneral,Iliketodevelopco dethatisdemonstrablycorrect,then
checkwhetheritisfastenoughformypurp oses. Ifso,thereisnoneedto
optimize.Forthisexample,ifwecareab outruntime,thereareseveralways
wecansp eeditup.

Therstopp ortunityistoreducethenumb eroftimeswenormalizethesuite.
Intheoriginalco de,wecallUpdateonceforeachspin.

```
dataset = 'H' * heads + 'T' * tails
```
```
for data in dataset:
suite.Update(data)
```

38 Chapter4. MoreEstimation

Andhere'swhatUpdatelo okslike:

```
def Update(self, data):
for hypo in self.Values():
like = self.Likelihood(data, hypo)
self.Mult(hypo, like)
return self.Normalize()
```
Each up date iteratesthrough thehyp otheses, thencallsNormalize, which
iteratesthroughthehyp othesesagain.Wecansavesometimebydoingallof
theup datesb eforenormalizing.

Suiteprovidesametho dcalledUpdateSetthatdo esexactlythat.Hereitis:

```
def UpdateSet(self, dataset):
for data in dataset:
for hypo in self.Values():
like = self.Likelihood(data, hypo)
self.Mult(hypo, like)
return self.Normalize()
```
Andhere'showwecaninvokeit:

```
dataset = 'H' * heads + 'T' * tails
suite.UpdateSet(dataset)
```
Thisoptimizationsp eedsthingsup,buttheruntimeisstillprop ortionaltothe
amountofdata.Wecansp eedthingsupevenmorebyrewritingLikelihood
topro cesstheentiredataset,ratherthanonespinatatime.

Intheoriginalversion,dataisastringthatenco deseitherheadsortails:

```
def Likelihood(self, data, hypo):
x = hypo / 100.0
if data =='H':
return x
else:
return 1-x
```
Asanalternative,wecouldenco dethedatasetasatupleoftwointegers:the
numb erofheadsandtails.InthatcaseLikelihoodlo okslikethis:

```
def Likelihood(self, data, hypo):
x = hypo / 100.0
heads, tails = data
like = x**heads * (1-x)**tails
return like
```
AndthenwecancallUpdatelikethis:


4.5. Theb etadistribution 39

```
heads, tails = 140, 110
suite.Update((heads, tails))
```
Sincewehavereplacedrep eatedmultiplicationwithexp onentiation,thisver-
siontakesthesametimeforanynumb erofspins.

### 4.5 Theb etadistribution

Thereisonemoreoptimizationthatsolvesthisproblemevenfaster.

SofarwehaveusedaPmfob jecttorepresentadiscretesetofvaluesforx.
Nowwewilluseacontinuousdistribution,sp ecically theb etadistribution
(seehttp://en.wikipedia.org/wiki/Beta_distribution).

Theb etadistributionisdenedontheintervalfrom 0 to 1 (includingb oth),
soitisanaturalchoicefordescribingprop ortionsandprobabilities. Butwait,
itgetsb etter.

Itturns out that if you do a Bayesianup date witha binomial likeliho o d
function,whichiswhatwedidintheprevioussection,theb etadistributionis
aconjugateprior. Thatmeansthatifthepriordistributionforxisab eta
distribution,thep osteriorisalsoab etadistribution. Butwait,itgetseven
b etter.

Theshap eoftheb etadistributiondep endsontwoparameters,writtenαand
β, oralpha andbeta. Ifthe priorisab eta distributionwithparameters
alphaandbeta,andweseedatawithhheadsandttails,thep osteriorisa
b etadistributionwithparametersalpha+handbeta+t. Inotherwords,we
candoanup datewithtwoadditions.

Sothat'sgreat,butitonlyworksifwecanndab etadistributionthatisa
go o dchoiceforaprior. Fortunately,formanyrealisticpriorsthereisab eta
distributionthatisat leastago o dapproximation, andforauniformprior
thereisap erfectmatch. Theb etadistributionwithalpha=1andbeta=1is
uniformfrom 0 to1.

Let'sseehowwecantakeadvantageofallthis. thinkbayes.pyprovidesa
classthatrepresentsab etadistribution:

class Beta(object):

```
def __init__(self, alpha=1, beta=1):
self.alpha = alpha
self.beta = beta
```

40 Chapter4. MoreEstimation

By default __init__ makes a uniform distribution. Update p erforms a
Bayesianup date:

```
def Update(self, data):
heads, tails = data
self.alpha += heads
self.beta += tails
```
dataisapairofintegersrepresentingthenumb erofheadsandtails.

SowehaveyetanotherwaytosolvetheEuroproblem:

```
beta = thinkbayes.Beta()
beta.Update((140, 110))
print beta.Mean()
```
BetaprovidesMean,whichcomputesasimplefunctionofalphaandbeta:

```
def Mean(self):
return float(self.alpha) / (self.alpha + self.beta)
```
FortheEuroproblemthep osteriormeanis56%,whichisthesameresultwe
gotusingPmfs.

BetaalsoprovidesEvalPdf,whichevaluatestheprobabilitydensityfunction
(PDF)oftheb etadistribution:

```
def EvalPdf(self, x):
return x**(self.alpha-1) * (1-x)**(self.beta-1)
```
Finally, BetaprovidesMakePmf,whichusesEvalPdf togenerateadiscrete
approximationoftheb etadistribution.

### 4.6 Discussion

Inthischapterwesolvedthesameproblemwithtwodierentpriorsandfound
that withalargedataset,thepriorsgetswamp ed. Iftwop eoplestartwith
dierentpriorb eliefs,theygenerallynd,astheyseemoredata,thattheir
p osteriordistributionsconverge. Atsomep ointthedierenceb etweentheir
distributionsissmallenoughthatithasnopracticaleect.

When this happ ens, itrelieves some of theworry ab outob jectivitythat I
discussed inthe previouschapter. Andformanyreal-worldproblems even
starkpriorb eliefscaneventuallyb ereconciledbydata.

Butthat isnotalwaysthecase. First,rememb erthat allBayesiananalysis
isbasedonmo delingdecisions. IfyouandIdonotcho osethesamemo del,


4.7. Exercises 41

wemightinterpretdatadierently. Soevenwiththe samedata,wewould
computedierentlikeliho o ds,andourp osteriorb eliefsmightnotconverge.

Also,noticethat inaBayesian up date,we multiplyeach priorprobability
byalikeliho o d,so ifp(H)is0,p(H|D)isalso0, regardlessof D. Inthe
Europroblem,ifyouareconvincedthat xislessthan50%,andyouassign
probability 0 toall otherhyp otheses,no amountofdatawill convinceyou
otherwise.

ThisobservationisthebasisofCromwell'srule,whichistherecommenda-
tionthatyoushouldavoidgivingapriorprobabilityof 0 toanyhyp othesisthat
isevenremotelyp ossible(seehttp://en.wikipedia.org/wiki/Cromwell' s_
rule).

Cromwell'sruleisnamedafterOliverCromwell,whowrote,Ib eseechyou,
intheb owelsof Christ,think itp ossiblethat youmay b emistaken. For
Bayesians,thisturnsouttob ego o dadvice(evenifit'salittleoverwrought).

### 4.7 Exercises.

Exercise4.1Supp osethatinsteadofobservingcointossesdirectly,youmea-
suretheoutcomeusinganinstrumentthatisnotalwayscorrect.Sp ecically,
supp osethereisaprobabilityythatanactualheadsisrep ortedastails,or
actualtailsrep ortedasheads.

Writeaclassthatestimatesthebiasofacoingivenaseriesofoutcomesand
thevalueofy.

Howdo esthespreadofthep osteriordistributiondep endony?

Exercise4.2Thisexerciseisinspired byaquestionp ostedbyaredditor
nameddominoscionReddit'sstatisticssubreddit athttp://reddit.com/
r/statistics.

Redditisanonlineforumwithmanyinterestgroupscalledsubreddits. Users,
calledredditors, p ost linksto onlinecontent andother webpages. Other
redditorsvote on thelinks, giving an upvote to high-quality linksand a
downvotetolinksthatarebadorirrelevant.

Aproblem,identiedbydominosci,isthatsomeredditorsaremorereliable
thanothers,andRedditdo esnottakethisintoaccount.

Thechallengeistodeviseasystemsothatwhenaredditorcastsavote,the
estimatedqualityofthelinkisup datedinaccordancewiththereliabilityofthe


42 Chapter4. MoreEstimation

redditor,andtheestimatedreliabilityoftheredditorisup datedinaccordance
withthequalityofthelink.

Oneapproachistomo delthequalityofthelinkastheprobabilityofgarnering
an upvote,andtomo delthereliabilityoftheredditorastheprobabilityof
correctlygivinganupvotetoahigh-qualityitem.

Writeclassdenitionsfor redditorsandlinksandan up date functionthat
up datesb othob jectswheneveraredditorcastsavote.


# Chapter 5

# Odds and Addends

### 5.1 Odds

Onewaytorepresentaprobabilityiswithanumb erb etween 0 and1,but
that'snottheonlyway. Ifyouhaveeverb etonafo otballgameorahorse
race, youhave probably encountered anotherrepresentationof probability,
calledo dds.

Youmighthaveheardexpressionsliketheo ddsarethreetoone, butyou
mightnotknowwhatthat means. Theo dds in favorofaneventarethe
ratiooftheprobabilityitwillo ccurtotheprobabilitythatitwillnot.

SoifIthinkmyteamhasa75%chanceofwinning,Iwouldsaythattheo dds
intheirfavorarethreetoone,b ecausethechanceofwinningisthreetimes
thechanceoflosing.

Youcanwriteo ddsindecimalform,butitismostcommontowritethemas
aratioofintegers.Sothreetooneiswritten3 : 1.

Whenprobabilitiesarelow,itismorecommontorep orttheo dds against
ratherthantheo ddsinfavor. Forexample,ifIthinkmyhorsehasa10%
chanceofwinning,Iwouldsaythattheo ddsagainstare9 : 1.

Probabilitiesando ddsaredierentrepresentationsofthesameinformation.
Givenaprobability,youcancomputetheo ddslikethis:

def Odds(p):
return p / (1-p)

Giventheo ddsinfavor,indecimalform,youcanconverttoprobabilitylike
this:


44 Chapter5. OddsandAddends

def Probability(o):
return o / (o+1)

Ifyourepresento ddswithanumeratoranddenominator,youcanconvertto
probabilitylikethis:

def Probability2(yes, no):
return yes / (yes + no)

WhenIworkwitho ddsinmyhead,Indithelpfultopicturep eopleatthe
track. If20%ofthemthinkmyhorsewillwin,then80%ofthemdon't,sothe
o ddsinfavorare20 : 80or1 : 4.

Iftheo ddsare5 : 1againstmyhorse,thenveoutofsixp eoplethinkshe
willlose,sotheprobabilityofwinningis 1 / 6.

### 5.2 Theo ddsformofBayes'stheorem.

InChapter 1 IwroteBayes'stheoremintheprobabilityform:

```
p(H|D) =
```
```
p(H) p(D|H)
p(D)
```
If we have two hyp otheses, A and B, we canwrite the ratio of p osterior
probabilitieslikethis:
p(A|D)
p(B|D)

#### =

```
p(A) p(D|A)
p(B) p(D|B)
```
Noticethatthenormalizingconstant,p(D),dropsoutofthisequation.

If AandB aremutuallyexclusiveandcollectively exhaustive, thatmeans
p(B) = 1−p(A),sowecanrewritetheratioofthepriors,andtheratioofthe
p osteriors,aso dds.

Writingo(A)foro ddsinfavorofA,weget:

```
o(A|D) = o(A)
```
```
p(D|A)
p(D|B)
```
Inwords,thissaysthatthep osterioro ddsaretheprioro ddstimesthelikeli-
ho o dratio.Thisistheo ddsformofBayes'stheorem.

ThisformismostconvenientforcomputingaBayesianup dateonpap erorin
yourhead. Forexample,let'sgobacktotheco okieproblem:

```
Supp osetherearetwob owlsofco okies.Bowl 1 contains 30 vanilla
co okiesand 10 cho colateco okies.Bowl 2 contains 20 ofeach.
```

5.3. Oliver'sblo o d 45

```
Nowsupp oseyoucho oseoneoftheb owlsatrandomand,without
lo oking,selectaco okieatrandom.Theco okieisvanilla.Whatis
theprobabilitythatitcamefromBowl1?
```
Thepriorprobabilityis50%,sotheprioro ddsare1 : 1,orjust1. Thelikeli-
ho o dratiois^34 /^12 ,or 3 / 2. Sothep osterioro ddsare3 : 2,whichcorresp onds
toprobability 3 / 5.

### 5.3 Oliver'sblo o d

HereisanotherproblemfromMacKay'sInformationTheory,Inference,and
LearningAlgorithms:

```
Twop eoplehavelefttracesoftheirownblo o datthesceneofa
crime. Asusp ect,Oliver, istestedandfound tohave typ e `O'
blo o d. The blo o dgroups of the two tracesare foundto b e of
typ e`O'(acommontyp einthelo calp opulation,havingfrequency
60%)andoftyp e`AB'(araretyp e,withfrequency1%). Dothese
data[thetracesfoundatthescene]giveevidenceinfavorofthe
prop ositionthat Oliverwasoneof thep eople[wholeftblo o dat
thescene]?
```
Toanswerthisquestion,weneedtothinkab outwhatitmeansfordatato
giveevidenceinfavorof(oragainst)ahyp othesis. Intuitively,wemightsay
thatdatafavorahyp othesisifthehyp othesisismorelikelyinlightofthedata
thanitwasb efore.

Intheco okie problem, theprioro dds are1 : 1, or probability50%. The
p osterioro ddsare3 : 2,orprobability60%. Sowecouldsaythatthevanilla
co okieisevidenceinfavorofBowl1.

Theo ddsformofBayes'stheoremprovidesawaytomakethisintuitionmore
precise.Again

```
o(A|D) = o(A)
```
```
p(D|A)
p(D|B)
```
Ordividingthroughbyo(A):

```
o(A|D)
o(A)
```
#### =

```
p(D|A)
p(D|B)
```
Thetermontheleftistheratioofthep osteriorandprioro dds.Thetermon
therightisthelikeliho o dratio,alsocalledtheBayesfactor.


46 Chapter5. OddsandAddends

IftheBayesfactorvalueisgreaterthan1,thatmeansthatthedataweremore
likelyunderAthan underB. Andsincetheo ddsratioisalsogreaterthan
1,thatmeansthattheo ddsaregreater,inlightofthedata,thantheywere
b efore.

IftheBayesfactorislessthan1,thatmeansthedatawerelesslikelyunder
AthanunderB,sotheo ddsinfavorofAgodown.

Finally,iftheBayesfactorisexactly1,thedataareequallylikelyundereither
hyp othesis,sotheo ddsdonotchange.

NowwecangetbacktotheOliver'sblo o dproblem. IfOliverisoneofthe
p eoplewholeftblo o datthecrimescene,thenheaccountsforthe`O'sample,
sotheprobabilityofthedataisjusttheprobabilitythatarandommemb erof
thep opulationhastyp e`AB'blo o d,whichis1%.

IfOliverdidnotleaveblo o datthescene,thenwehavetwosamplestoaccount
for. Ifwecho osetworandomp eoplefromthep opulation,whatisthechanceof
ndingonewithtyp e`O'andonewithtyp e`AB' ?Well,therearetwowaysit
mighthapp en:therstp ersonwecho osemighthavetyp e`O'andthesecond
`AB',ortheotherwayaround.Sothetotalprobabilityis2(0.6)(0.01) = 1.2%.

Thelikeliho o dofthedataisslightlyhigherifOliverisnotoneofthep eople
wholeftblo o datthe scene,so theblo o ddataisactuallyevidenceagainst
Oliver'sguilt.

Thisexampleisalittlecontrived,butitisanexampleofthecounterintuitive
resultthatdataconsistentwithahyp othesisarenotnecessarilyinfavorof
thehyp othesis.

Ifthisresultissocounterintuitivethat itb othersyou,thiswayofthinking
mighthelp: thedataconsistofacommonevent,typ e`O'blo o d,andarare
event,typ e`AB'blo o d.IfOliveraccountsforthecommonevent,thatleaves
therareeventstillunexplained. IfOliverdo esn'taccountforthe`O'blo o d,
thenwehavetwochancestondsomeoneinthep opulationwith`AB'blo o d.
Andthatfactoroftwomakesthedierence.

### 5.4 Addends

The fundamentalop eration of Bayesianstatistics isUpdate, whichtakes a
priordistributionandasetofdata,andpro ducesap osteriordistribution.But
solvingrealproblemsusuallyinvolvesanumb erofotherop erations,including
scaling,additionandotherarithmeticop erations,maxandmin,andmixtures.


5.4. Addends 47

Thischapterpresentsadditionandmax;Iwillpresentotherop erationsaswe
needthem.

The rst example is based on Dungeons & Dragons, a role-playing game
where the results of players' decisions are usually determined by rolling
dice. In fact, b efore game play starts, playersgenerate each attributeof
theircharactersstrength,intelligence, wisdom,dexterity,constitution, and
charismabyrollingthree6-sideddiceandaddingthemup.

Soyoumightb ecurioustoknowthedistributionofthissum. Therearetwo
waysyoumightcomputeit:

Simulation:GivenaPmfthatrepresentsthedistributionforasingledie,you
candrawrandomsamples,addthemup,andaccumulatethedistribution
ofsimulatedsums.

Enumeration:GiventwoPmfs,youcanenumerateallp ossiblepairsofvalues
andcomputethedistributionofthesums.

thinkbayesprovidesfunctionsforb oth. Here'sanexampleoftherstap-
proach.First,I'lldeneaclasstorepresentasingledieasaPmf:

class Die(thinkbayes.Pmf):

```
def __init__(self, sides):
thinkbayes.Pmf.__init__(self)
for x in xrange(1, sides+1):
self.Set(x, 1)
self.Normalize()
```
NowIcancreatea6-sideddie:

d6 = Die(6)

Andusethinkbayes.SampleSumtogenerateasampleof 1000 rolls.

dice = [d6] * 3
three = thinkbayes.SampleSum(dice, 1000)

SampleSumtakeslistofdistributions(eitherPmforCdfob jects)andthesam-
plesize,n. Itgeneratesnrandomsumsandreturns theirdistributionas a
Pmfob ject.

def SampleSum(dists, n):
pmf = MakePmfFromList(RandomSum(dists) for i in xrange(n))
return pmf

SampleSumusesRandomSum,alsointhinkbayes.py:


48 Chapter5. OddsandAddends

def RandomSum(dists):
total = sum(dist.Random() for dist in dists)
return total

RandomSuminvokesRandomoneachdistributionandaddsuptheresults.

Thedrawbackofsimulationisthattheresultisonlyapproximatelycorrect.
Asngetslarger,itgetsmoreaccurate,butofcoursetheruntimeincreasesas
well.

Theotherapproachistoenumerateallpairsofvaluesandcomputethesum
andprobabilityofeachpair.ThisisimplementedinPmf.__add__:

# class Pmf

```
def __add__(self, other):
pmf = Pmf()
for v1, p1 in self.Items():
for v2, p2 in other.Items():
pmf.Incr(v1+v2, p1*p2)
return pmf
```
self isa Pmf,of course; othercanb e aPmf or anything else that pro-
videsItems. TheresultisanewPmf.Thetimetorun__add__dep endson
the numb erof itemsinselfandother;itisprop ortionalto len(self) *
len(other).

Andhere'showit'sused:

```
three_exact = d6 + d6 + d6
```
Whenyouapplythe+op eratortoaPmf,Pythoninvokes__add__. Inthis
example,__add__isinvokedtwice.

Figure5.1showsanapproximateresultgeneratedbysimulationandtheexact
resultcomputedbyenumeration.

Pmf.__add__isbasedontheassumptionthattherandomselectionsfromeach
Pmfareindep endent.Intheexampleofrollingseveraldice,thisassumption
isprettygo o d. Inothercases,wewouldhavetoextendthismetho dtouse
conditionalprobabilities.

The co de from this section is available from [http://thinkbayes.com/](http://thinkbayes.com/)
dungeons.py. FormoreinformationseeSection0.3.


5.5. Maxima 49

0.00 (^2468) Sum of three d6 10 12 14 16 18
0.02
0.04
0.06
0.08
0.10
0.12
0.14
Probability
sample
exact
Figure5.1:Approximateandexactdistributionsforthesumofthree6-sided
dice.
0.00 (^2468) Sum of three d6 10 12 14 16 18
0.05
0.10
0.15
0.20
Probability
Figure5.2:Distributionofthemaximumofsixrollsofthreedice.


50 Chapter5. OddsandAddends

### 5.5 Maxima

When you generateaDungeons & Dragonscharacter, you areparticularly
interestedinthe character'sb estattributes, soyou mightliketoknowthe
distributionofthemaximumattribute.

Therearethreewaystocomputethedistributionofamaximum:

Simulation: GivenaPmfthatrepresentsthedistributionforasingleselec-
tion,youcangeneraterandomsamples,ndthemaximum,andaccu-
mulatethedistributionofsimulatedmaxima.

Enumeration: GiventwoPmfs,youcanenumerateallp ossiblepairsofvalues
andcomputethedistributionofthemaximum.

Exp onentiation: IfweconvertaPmftoaCdf,thereisasimpleandecient
algorithmforndingtheCdfofthemaximum.

Theco detosimulatemaximaisalmostidenticaltotheco deforsimulating
sums:

def RandomMax(dists):
total = max(dist.Random() for dist in dists)
return total

def SampleMax(dists, n):
pmf = MakePmfFromList(RandomMax(dists) for i in xrange(n))
return pmf

All I didwasreplacesum with max. Andthe co defor enumeration is
almostidentical,to o:

def PmfMax(pmf1, pmf2):
res = thinkbayes.Pmf()
for v1, p1 in pmf1.Items():
for v2, p2 in pmf2.Items():
res.Incr(max(v1, v2), p1*p2)
return res

Infact,youcouldgeneralizethisfunctionbytakingtheappropriateop erator
asaparameter.

TheonlyproblemwiththisalgorithmisthatifeachPmfhasmvalues,the
runtimeisprop ortionaltom^2 .Andifwewantthemaximumofkselections,
ittakestimeprop ortionaltokm^2.


5.5. Maxima 51

IfweconvertthePmfstoCdfs,wecandothesamecalculationmuchfaster!
Thekeyistorememb erthedenitionofthecumulativedistributionfunction:

```
CDF(x) = p(X≤ x)
```
whereXisarandomvariablethatmeansavaluechosenrandomlyfromthis
distribution. So,forexample,CDF(5)istheprobabilitythatavaluefrom
thisdistributionislessthanorequalto5.

IfIdrawXfromCDF 1 andY fromCDF 2 ,andcomputethemaximumZ=
max(X,Y),whatisthechancethatZislessthanorequalto5?Well,inthat
caseb othXandY mustb elessthanorequalto5.

IftheselectionsofXandY areindep endent,

```
CDF 3 (5) =CDF 1 (5)CDF 2 (5)
```
whereCDF 3 isthedistributionofZ. Ichosethevalue 5 b ecauseIthinkit
makestheformulaseasytoread,butwecangeneralizeforanyvalueofz:

```
CDF 3 (z) =CDF 1 (z)CDF 2 (z)
```
Inthesp ecialcasewherewedrawkvaluesfromthesamedistribution,

```
CDFk(z) =CDF 1 (z)k
```
Sotondthedistributionofthemaximumofkvalues,wecanenumeratethe
probabilitiesinthegivenCdfandraisethemtothekthp ower. Cdfprovides
ametho dthatdo esjustthat:

# class Cdf

```
def Max(self, k):
cdf = self.Copy()
cdf.ps = [p**k for p in cdf.ps]
return cdf
```
Maxtakesthenumb erofselections,k,andreturnsanewCdfthatrepresents
thedistributionofthemaximumofkselections.Theruntimeforthismetho d
isprop ortionaltom,thenumb erofitemsintheCdf.

Pmf.Maxdo esthe samethingforPmfs. Ithastodo alittlemoreworkto
convertthe Pmfto aCdf,so theruntimeisprop ortional to mlogm, but
that'sstillb etterthanquadratic.

Finally,here'sanexamplethatcomputesthedistributionofacharacter'sb est
attribute:


52 Chapter5. OddsandAddends

0.00 (^0510) Outcome 15 20 25
0.02
0.04
0.06
0.08
0.10
0.12
0.14
0.16
0.18
Probability
mix
Figure5.3: Distributionoutcomeforrandomdiefromab ox.
best_attr_cdf = three_exact.Max(6)
best_attr_pmf = best_attr_cdf.MakePmf()
Wherethree_exactisdenedintheprevioussection.Ifweprinttheresults,
weseethatthechanceofgeneratingacharacterwithatleastoneattributeof
18 isab out3%.Figure5.2showsthedistribution.

### 5.6 Mixtures

Let'sdoonemoreexamplefromDungeons&Dragons. Supp oseIhaveab ox
ofdicewiththefollowinginventory:

5 4-sided dice
4 6-sided dice
3 8-sided dice
2 12-sided dice
1 20-sided die

Icho oseadiefromtheb oxandrollit.Whatisthedistributionoftheoutcome?

Ifyouknowwhichdieitis,theansweriseasy. Adiewithnsidesyieldsa
uniformdistributionfrom 1 ton,includingb oth.

Butifwedon'tknowwhichdieitis,theresultingdistributionisamixture
ofuniformdistributionswithdierentb ounds. Ingeneral,thiskindofmix-
turedo esnottanysimplemathematicalmo del,butitisstraightforwardto
computethedistributionintheformofaPMF.


5.6. Mixtures 53

Asalways,oneoptionistosimulatethescenario,generatearandomsample,
andcomputethePMFofthesample. Thisapproachissimpleanditgenerates
anapproximatesolutionquickly.Butifwewantanexactsolution,weneeda
dierentapproach.

Let'sstartwithasimpleversionoftheproblemwherethereareonlytwodice,
onewith 6 sidesandonewith8. WecanmakeaPmftorepresenteachdie:

```
d6 = Die(6)
d8 = Die(8)
```
ThenwecreateaPmftorepresentthemixture:

```
mix = thinkbayes.Pmf()
for die in [d6, d8]:
for outcome, prob in die.Items():
mix.Incr(outcome, prob)
mix.Normalize()
```
Therstlo openumeratesthedice;thesecondenumeratestheoutcomesand
theirprobabilities.Insidethelo op,Pmf.Incraddsupthecontributionsfrom
thetwodistributions.

Thisco deassumesthatthetwodiceareequallylikely.Moregenerally,weneed
toknowtheprobabilityofeachdiesowecanweighttheoutcomesaccordingly.

FirstwecreateaPmfthatmapsfromeachdietotheprobabilityitisselected:

```
pmf_dice = thinkbayes.Pmf()
pmf_dice.Set(Die(4), 5)
pmf_dice.Set(Die(6), 4)
pmf_dice.Set(Die(8), 3)
pmf_dice.Set(Die(12), 2)
pmf_dice.Set(Die(20), 1)
pmf_dice.Normalize()
```
Nextweneedamoregeneralversionofthemixturealgorithm:

```
mix = thinkbayes.Pmf()
for die, weight in pmf_dice.Items():
for outcome, prob in die.Items():
mix.Incr(outcome, weight*prob)
```
Noweachdiehasaweightasso ciatedwithit(whichmakesitaweighteddie,
Isupp ose). When weadd each outcometo themixture, itsprobability is
multipliedbyweight.

Figure5.3showstheresult.Asexp ected,values 1 through 4 arethemostlikely
b ecauseanydiecanpro ducethem.Valuesab ove 12 areunlikelyb ecausethere


54 Chapter5. OddsandAddends

isonlyonedieintheb oxthatcanpro ducethem(anditdo essolessthanhalf
thetime).

thinkbayesprovidesafunctionnamedMakeMixturethatencapsulatesthis
algorithm,sowecouldhavewritten:

```
mix = thinkbayes.MakeMixture(pmf_dice)
```
We'lluseMakeMixtureagaininChapters 7 and 8.

### 5.7 Discussion

Otherthantheo ddsformofBayes'stheorem,thischapterisnotsp ecically
Bayesian. ButBayesiananalysisisallab outdistributions,soitisimp ortant
tounderstandtheconceptofadistributionwell. Fromacomputationalp oint
of view, adistributionisany datastructurethatrepresents asetofvalues
(p ossibleoutcomesofarandompro cess)andtheirprobabilities.

We have seentworepresentations of distributions: PmfsandCdfs. These
representationsareequivalentinthesensethattheycontainthesameinfor-
mation, so youcanconvertfromonetothe other. Theprimarydierence
b etween themisp erformance: someop erationsarefaster andeasierwitha
Pmf;othersarefasterwithaCdf.

Theothergoalof thischapteristointro duceop erationsthatactondistri-
butions,likePmf.__add__,Cdf.Max,andthinkbayes.MakeMixture.Wewill
usetheseop erationslater,butIintro ducethemnowtoencourageyoutothink
ofadistributionasafundamentalunitofcomputation,notjustacontainer
forvaluesandprobabilities.


# Chapter 6

# Decision Analysis

### 6.1 ThePriceisRightproblem.

OnNovemb er1,2007,contestantsnamedLetiaandNathanielapp earedon
ThePriceisRight,anAmericangameshow.Theycomp etedinagamecalled
TheShowcase,wheretheob jectiveistoguessthepriceofashowcaseofprizes.
Thecontestantwhocomesclosesttotheactualpriceoftheshowcase,without
goingover,winstheprizes.

Nathanielwentrst. Hisshowcaseincludedadishwasher,awinecabinet,a
laptopcomputer,andacar.Hebid$26,000.

Letia'sshowcaseincludedapinballmachine,avideoarcadegame,ap o oltable,
andacruiseoftheBahamas.Shebid$21,500.

TheactualpriceofNathaniel'sshowcasewas$25,347. Hisbidwasto ohigh,
sohelost.

TheactualpriceofLetia'sshowcasewas$21,578.Shewasonlyoby$78,so
shewonhershowcaseand,b ecauseherbidwasobylessthan$250,shealso
wonNathaniel'sshowcase.

ForaBayesianthinker,thisscenariosuggestsseveralquestions:

1. Beforeseeingtheprizes,whatpriorb eliefsshouldthecontestanthave
    ab outthepriceoftheshowcase?
2. Afterseeingtheprizes,howshouldthecontestantup datethoseb eliefs?
3. Basedonthep osteriordistribution,whatshouldthecontestantbid?


56 Chapter6. DecisionAnalysis

0.00 (^0100002000030000) price ($) 4000050000600007000080000
0.01
0.02
0.03
0.04
0.05
PDF
showcase 1
showcase 2
Figure6.1:DistributionofpricesforshowcasesonThePriceisRight,2011-12.
ThethirdquestiondemonstratesacommonuseofBayesiananalysis:decision
analysis. Givenap osteriordistribution,wecancho osethebidthatmaximizes
thecontestant'sexp ectedreturn.
ThisproblemisinspiredbyanexampleinCameronDavidson-Pilon'sb o ok,
Bayesian Methodsfor Hackers. The co deIwrotefor thischapterisavail-
able from [http://thinkbayes.com/price.py;](http://thinkbayes.com/price.py;) it reads data lesyou can
download from [http://thinkbayes.com/showcases.2011.csv](http://thinkbayes.com/showcases.2011.csv) and [http:](http:)
//thinkbayes.com/showcases.2012.csv. For more information see Sec-
tion0.3.

### 6.2 Theprior.

Tocho oseapriordistributionofprices,wecantakeadvantageofdatafrom
previousepiso des. Fortunately,fansoftheshowkeepdetailedrecords.When
I corresp onded with Mr.Davidson-Pilon ab outhis b o ok, he sentme data
collected by SteveGeeat [http://tpirsummaries.8m.com.](http://tpirsummaries.8m.com.) Itincludesthe
priceofeachshowcasefromthe 2011 and 2012 seasonsandthebidsoeredby
thecontestants.

Figure 6.1shows thedistribution of pricesfor theseshowcases. The most
commonvalueforb othshowcasesisaround$28,000,buttherstshowcase
hasasecondmo denear$50,000,andthesecondshowcaseiso ccasionallyworth
morethan$70,000.

Thesedistributionsarebasedonactualdata,buttheyhaveb eensmo othed


6.3. Probabilitydensityfunctions 57

byGaussiankerneldensityestimation(KDE).Beforewegoon,Iwanttotake
adetourtotalkab outprobabilitydensityfunctionsandKDE.

### 6.3 Probabilitydensityfunctions.

Sofarwehaveb eenworkingwithprobabilitymassfunctions,orPMFs.APMF
isamapfromeachp ossiblevaluetoitsprobability.Inmyimplementation,a
Pmfob jectprovidesametho dnamedProbthattakesavalueandreturnsa
probability,alsoknownasaprobabilitymass.

Aprobability density function, or PDF,isthe continuousversionof a
PMF,wherethep ossible valuesmakeupacontinuousrangeratherthan a
discreteset.

Inmathematicalnotation,PDFsareusuallywrittenasfunctions;forexample,
hereisthePDFofaGaussiandistributionwithmean 0 andstandarddeviation
1:

```
f(x) =
```
#### √^1

```
2 π
```
```
exp(−x^2 /2)
```
Foragivenvalueofx,thisfunctioncomputesaprobabilitydensity.Adensity
issimilartoaprobabilitymassinthesensethat ahigherdensity indicates
thatavalueismorelikely.

Butadensityisnotaprobability.Adensitycanb e 0 oranyp ositivevalue;it
isnotb ounded,likeaprobability,b etween 0 and1.

Ifyouintegrateadensityoveracontinuousrange,theresultisaprobability.
Butfortheapplicationsinthisb o okweseldomhavetodothat.

Insteadweprimarilyuseprobabilitydensitiesaspartofalikeliho o dfunction.
Wewillseeanexampleso on.

### 6.4 RepresentingPDFs

TorepresentPDFs inPython,thinkbayes.pyprovides aclassnamedPdf.
Pdfisanabstracttyp e,whichmeansthatitdenestheinterfaceaPdfis
supp osedtohave,butdo esnotprovideacompleteimplementation.ThePdf
interfaceincludestwometho ds,DensityandMakePmf:

class Pdf(object):

```
def Density(self, x):
```

58 Chapter6. DecisionAnalysis

```
raise UnimplementedMethodException()
```
```
def MakePmf(self, xs):
pmf = Pmf()
for x in xs:
pmf.Set(x, self.Density(x))
pmf.Normalize()
return pmf
```
Density takesavalue,x,and returnsthe corresp ondingdensity. MakePmf
makesadiscreteapproximationtothePDF.

PdfprovidesanimplementationofMakePmf,butnotDensity,whichhasto
b eprovidedbyachildclass.

Aconcretetyp eisachildclassthatextendsanabstracttyp eandprovidesan
implementationofthemissingmetho ds. Forexample,GaussianPdfextends
PdfandprovidesDensity:

class GaussianPdf(Pdf):

```
def __init__(self, mu, sigma):
self.mu = mu
self.sigma = sigma
```
```
def Density(self, x):
return scipy.stats.norm.pdf(x, self.mu, self.sigma)
```
__init__takesmuandsigma,whicharethemeanandstandarddeviationof
thedistribution,andstoresthemasattributes.

Densityusesafunctionfromscipy.statstoevaluatetheGaussianPDF.The
functioniscallednorm.pdfb ecausetheGaussiandistributionisalsocalledthe
normaldistribution.

TheGaussianPDFisdenedbyasimplemathematicalfunction,soitiseasy
toevaluate. Anditisusefulb ecausemanyquantitiesintherealworldhave
distributionsthatareapproximatelyGaussian.

Butwithrealdata,thereisnoguaranteethatthedistributionisGaussianor
anyothersimplemathematicalfunction.Inthatcasewecanuseasampleto
estimatethePDFofthewholep opulation.

For example, inThe PriceIs Right data, we have 313 prices for the rst
showcase.Wecanthinkofthesevaluesasasamplefromthep opulationofall
p ossibleshowcaseprices.


6.4. RepresentingPDFs 59

Thissampleincludesthefollowingvalues(inorder):

```
28800 , 28868 , 28941 , 28957 , 28958
```
Inthe sample, novaluesapp earb etween 28801 and28867,butthereisno
reasontothinkthatthesevaluesareimp ossible. Basedon ourbackground
information,weexp ectallvaluesinthisrangetob eequallylikely. Inother
words,weexp ectthePDFtob efairlysmo oth.

Kerneldensity estimation (KDE)is analgorithm that takes asample and
ndsanappropriatelysmo othPDFthattsthedata. Youcanreaddetails
athttp://en.wikipedia.org/wiki/Kernel_density_estimation.

scipyprovidesanimplementationofKDEandthinkbayesprovidesaclass
calledEstimatedPdfthatusesit:

class EstimatedPdf(Pdf):

```
def __init__(self, sample):
self.kde = scipy.stats.gaussian_kde(sample)
```
```
def Density(self, x):
return self.kde.evaluate(x)
```
__init__takesasampleandcomputesakerneldensityestimate. Theresult
isagaussian_kdeob jectthatprovidesanevaluatemetho d.

Densitytakesavalue,callsgaussian_kde.evaluate,andreturnstheresult-
ingdensity.

Finally,here'sanoutlineoftheco deIusedtogenerateFigure6.1:

```
prices = ReadData()
pdf = thinkbayes.EstimatedPdf(prices)
```
```
low, high = 0, 75000
n = 101
xs = numpy.linspace(low, high, n)
pmf = pdf.MakePmf(xs)
```
pdfisaPdfob ject,estimatedbyKDE.pmfisaPmfob jectthatapproximates
thePdfbyevaluatingthedensityatasequenceofequallyspacedvalues.

linspacestandsforlinearspace. Ittakesarange,lowandhigh,andthe
numb erofp oints,n,andreturnsanewnumpyarraywithnelementsequally
spacedb etweenlowandhigh,includingb oth.

AndnowbacktoThePriceisRight.


60 Chapter6. DecisionAnalysis

0.0 (^3000020000100000) diff ($) 1000020000300004000050000
0.2
0.4
0.6
0.8
1.0
CDF
player 1
player 2
Figure6.2:Cumulativedistribution(CDF)ofthedierenceb etweenthecon-
testant'sbidandtheactualprice.

### 6.5 Mo delingthecontestants

The PDFsinFigure6.1estimatethedistributionofp ossible prices. Ifyou
were acontestanton theshow, you coulduse thisdistributionto quantify
yourpriorb eliefab outthepriceofeachshowcase(b eforeyouseetheprizes).

Toup datethesepriors,wehavetoanswerthesequestions:

1. Whatdatashouldweconsiderandhowshouldwequantifyit?
2. Canwe computealikeliho o d function; that is, foreach hyp othetical
    valueofprice,canwecomputetheconditionallikeliho o dofthedata?

To answerthesequestions, Iamgoing tomo delthe contestantas aprice-
guessinginstrumentwithknownerrorcharacteristics. Inotherwords,when
the contestant seesthe prizes, heor she guessesthe price of each prize
ideally withouttakingintoconsiderationthefactthattheprizeispartof a
showcaseandaddsuptheprices.Let'scallthistotalguess.

Underthismo del, thequestionwehaveto answeris,Iftheactualpriceis
price,whatisthelikeliho o dthatthecontestant'sestimatewouldb eguess?

Orifwedene

```
error = price - guess
```

6.5. Mo delingthecontestants 61

thenwecouldask,Whatisthelikeliho o dthatthecontestant'sestimateiso
byerror?

Toanswerthisquestion,wecanusethehistoricaldataagain.Figure6.2shows
thecumulativedistributionofdiff,thedierenceb etweenthecontestant'sbid
andtheactualpriceoftheshowcase.

Thedenitionofdiis

```
diff = price - bid
```
Whendiffisnegative, thebid isto ohigh. Asan aside,we canuse this
distributiontocomputetheprobabilitythatthecontestantsoverbid:therst
contestantoverbids25%ofthetime;thesecondcontestantoverbids29%of
thetime.

Wecanalsoseethatthebidsarebiased;thatis,theyaremorelikelytob e
to olowthanto ohigh. Andthatmakessense,giventherulesofthegame.

Finally,wecanusethisdistributiontoestimatethereliabilityofthecontes-
tants'guesses.Thisstepisalittletrickyb ecausewedon'tactuallyknowthe
contestant'sguesses;weonlyknowwhattheybid.

Sowe'llhavetomakesomeassumptions. Sp ecically,Iassumethatthedis-
tributionoferrorisGaussianwithmean 0 andthesamevarianceasdiff.

ThePlayerclassimplementsthismo del:

class Player(object):

```
def __init__(self, prices, bids, diffs):
self.pdf_price = thinkbayes.EstimatedPdf(prices)
self.cdf_diff = thinkbayes.MakeCdfFromList(diffs)
```
```
mu = 0
sigma = numpy.std(diffs)
self.pdf_error = thinkbayes.GaussianPdf(mu, sigma)
```
pricesisasequenceofshowcaseprices,bidsisasequenceofbids,anddiffs
isasequenceofdis,whereagaindiff = price - bid.

pdf_priceisthesmo othedPDFofprices,estimatedbyKDE.cdf_diffisthe
cumulativedistributionofdiff,whichwesawinFigure6.2. Andpdf_error
isthePDFthatcharacterizesthedistributionoferrors;whereerror = price

- guess.


62 Chapter6. DecisionAnalysis

Again, weusethevarianceofdifftoestimatethevarianceoferror. This
estimateisnotp erfectb ecausecontestants'bidsaresometimesstrategic;for
example, ifPlayer 2 thinksthat Player 1 hasoverbid,Player 2 mightmake
averylowbid. Inthatcasediffdo esnotreecterror. Ifthishapp ensa
lot,theobservedvarianceindiffmightoverestimatethevarianceinerror.
Nevertheless,Ithinkitisareasonablemo delingdecision.

Asanalternative,someonepreparingtoapp earontheshowcouldestimate
their own distributionof errorby watchingpreviousshows andrecording
theirguessesandtheactualprices.

### 6.6 Likeliho o d

Nowwearereadytowritethelikeliho o dfunction. Asusual,Ideneanew
classthatextendsthinkbayes.Suite:

class Price(thinkbayes.Suite):

```
def __init__(self, pmf, player):
thinkbayes.Suite.__init__(self, pmf)
self.player = player
```
pmfrepresentsthepriordistributionandplayerisaPlayerob jectasdescrib ed
intheprevioussection.Here'sLikelihood:

```
def Likelihood(self, data, hypo):
price = hypo
guess = data
```
```
error = price - guess
like = self.player.ErrorDensity(error)
```
```
return like
```
hypoisthehyp otheticalpriceoftheshowcase. dataisthecontestant'sb est
guessattheprice. erroristhedierence,andlikeisthelikeliho o dofthe
data,giventhehyp othesis.

ErrorDensityisdenedinPlayer:

# class Player:

```
def ErrorDensity(self, error):
return self.pdf_error.Density(error)
```

6.7. Up date 63

0.00 (^0100002000030000) price ($) 4000050000600007000080000
0.01
0.02
0.03
0.04
0.05
0.06
0.07
0.08
PMF
prior
posterior
Figure6.3: Prior andp osteriordistributions forPlayer 1, basedonab est
guessof$20,000.
ErrorDensityworks byevaluatingpdf_error atthegivenvalueof error.
Theresultisaprobabilitydensity,soitisnotreallyaprobability. Butre-
memb erthatLikelihooddo esn'tneedtocomputeaprobability;itonlyhas
tocomputesomethingproportionaltoaprobability. Aslongastheconstant
ofprop ortionalityisthesameforalllikeliho o ds,itgetscanceledoutwhenwe
normalizethep osteriordistribution.
Andtherefore,aprobabilitydensityisap erfectlygo o dlikeliho o d.

### 6.7 Up date.

Playerprovidesametho dthattakesthecontestant'sguessandcomputesthe
p osteriordistribution:

# class Player

```
def MakeBeliefs(self, guess):
pmf = self.PmfPrice()
self.prior = Price(pmf, self)
self.posterior = self.prior.Copy()
self.posterior.Update(guess)
```
PmfPricegeneratesadiscreteapproximationtothePDFofprice,whichwe
usetoconstructtheprior.

PmfPriceusesMakePmf,whichevaluatespdf_priceatasequenceofvalues:


64 Chapter6. DecisionAnalysis

# class Player

```
n = 101
price_xs = numpy.linspace(0, 75000, n)
```
```
def PmfPrice(self):
return self.pdf_price.MakePmf(self.price_xs)
```
Toconstructthep osterior,wemakeacopyofthepriorandtheninvokeUpdate,
whichinvokesLikelihoodforeach hyp othesis,multipliesthepriors bythe
likeliho o ds,andrenormalizes.

Solet'sgetbacktotheoriginalscenario. Supp oseyouarePlayer 1 andwhen
youseeyourshowcase,yourb estguessisthatthetotalpriceoftheprizesis
$20,000.

Figure6.3showspriorandp osteriorb eliefsab outtheactualprice. Thep os-
teriorisshiftedtotheleftb ecauseyourguessisonthelowendoftheprior
range.

Ononelevel,thisresultmakessense. Themostlikelyvalueintheprioris
$27,750,yourb estguessis$20,000,andthemeanofthep osteriorissomewhere
inb etween:$25,096.

Onanotherlevel,youmightndthisresultbizarre,b ecauseitsuggeststhat
ifyouthinkthepriceis$20,000,thenyoushouldbelievethepriceis$24,000.

To resolve this apparent paradox, rememb er that you are combining two
sourcesofinformation,historicaldataab outpastshowcasesandguessesab out
theprizesyousee.

Wearetreatingthehistoricaldataasthepriorandup datingitbasedonyour
guesses, butwecould equivalentlyuseyourguessas apriorandup date it
basedonhistoricaldata.

Ifyouthinkof itthatway, mayb eitislesssurprisingthatthe mostlikely
valueinthep osteriorisnotyouroriginalguess.

### 6.8 Optimalbidding.

Now that we have a p osterior distribution, we can use it to computethe
optimalbid,whichIdeneasthebid thatmaximizesexp ectedreturn(see
[http://en.wikipedia.org/wiki/Expected_return).](http://en.wikipedia.org/wiki/Expected_return).)


6.8. Optimalbidding 65

I'mgoingtopresentthemetho dsinthissectiontop-down,whichmeansIwill
showyouhowtheyareusedb eforeIshowyouhowtheywork. Ifyouseean
unfamiliarmetho d,don'tworry;thedenitionwillb ealongshortly.

Tocomputeoptimalbids,IwroteaclasscalledGainCalculator:

class GainCalculator(object):

```
def __init__(self, player, opponent):
self.player = player
self.opponent = opponent
```
playerandopponentarePlayerob jects.

GainCalculatorprovidesExpectedGains,whichcomputesasequenceofbids
andtheexp ectedgainforeachbid:

```
def ExpectedGains(self, low=0, high=75000, n=101):
bids = numpy.linspace(low, high, n)
```
```
gains = [self.ExpectedGain(bid) for bid in bids]
```
```
return bids, gains
```
lowandhighsp ecifytherangeofp ossiblebids;nisthenumb erofbidstotry.

ExpectedGainscallsExpectedGain,whichcomputesexp ectedgainforagiven
bid:

```
def ExpectedGain(self, bid):
suite = self.player.posterior
total = 0
for price, prob in sorted(suite.Items()):
gain = self.Gain(bid, price)
total += prob * gain
return total
```
ExpectedGainlo opsthroughthevaluesinthep osteriorandcomputesthegain
foreachbid,giventheactualpricesoftheshowcase.Itweightseachgainwith
thecorresp ondingprobabilityandreturnsthetotal.

ExpectedGaininvokesGain,whichtakesabidandanactualpriceandreturns
theexp ectedgain:

```
def Gain(self, bid, price):
if bid > price:
return 0
```

66 Chapter6. DecisionAnalysis

(^0010000200003000040000) bid ($) 50000600007000080000
5000
10000
15000
20000
expected gain ($)
Player 1
Player 2
Figure6.4:Exp ectedgainversusbidinascenariowherePlayer1'sb estguess
is$20,000andPlayer2'sb estguessis$40,000.
diff = price - bid
prob = self.ProbWin(diff)
if diff <= 250:
return 2 * price * prob
else:
return price * prob
Ifyouoverbid,yougetnothing.Otherwisewecomputethedierenceb etween
yourbidandtheprice,whichdeterminesyourprobabilityofwinning.
Ifdiffislessthan$250,youwinb othshowcases. Forsimplicity,Iassume
thatb othshowcaseshavethesameprice.Sincethisoutcomeisrare,itdo esn't
makemuchdierence.
Finally,wehavetocomputetheprobabilityofwinningbasedondiff:
def ProbWin(self, diff):
prob = (self.opponent.ProbOverbid() +
self.opponent.ProbWorseThan(diff))
return prob
Ifyouropp onentoverbids,youwin. Otherwise,youhavetohop ethatyour
opp onentisobymorethandiff.Playerprovidesmetho dstocomputeb oth
probabilities:
# class Player:
def ProbOverbid(self):


6.9. Discussion 67

```
return self.cdf_diff.Prob(-1)
```
```
def ProbWorseThan(self, diff):
return 1 - self.cdf_diff.Prob(diff)
```
Thisco demightb econfusingb ecausethecomputationisnowfromthep oint
ofviewoftheopp onent,whoiscomputing,WhatistheprobabilitythatI
overbid?andWhatistheprobabilitythatmybidisobymorethandiff?

BothanswersarebasedontheCDFofdiff. Iftheopp onent'sdiffisless
thanorequalto-1,youwin. Iftheopp onent'sdiffisworsethanyours,you
win.Otherwiseyoulose.

Finally,here'stheco dethatcomputesoptimalbids:

# class Player:

```
def OptimalBid(self, guess, opponent):
self.MakeBeliefs(guess)
calc = GainCalculator(self, opponent)
bids, gains = calc.ExpectedGains()
gain, bid = max(zip(gains, bids))
return bid, gain
```
Givenaguessandanopp onent,OptimalBidcomputesthep osteriordistribu-
tion,instantiatesaGainCalculator,computesexp ectedgainsforarangeof
bidsandreturnstheoptimalbidandexp ectedgain.Whew!

Figure6.4showstheresultsforb othplayers,basedonascenariowherePlayer
1'sb estguessis$20,000andPlayer2'sb estguessis$40,000.

ForPlayer 1 theoptimalbidis$21,000,yieldinganexp ectedreturnofalmost
$16,700.Thisisacase(whichturnsouttob eunusual)wheretheoptimalbid
isactuallyhigherthanthecontestant'sb estguess.

ForPlayer 2 theoptimalbidis$31,500,yieldinganexp ectedreturnofalmost
$19,400.Thisisthemoretypicalcasewheretheoptimalbidislessthanthe
b estguess.

### 6.9 Discussion

OneofthefeaturesofBayesianestimationisthattheresultcomesintheform
of ap osterior distribution. Classical estimation usually generatesa single
p ointestimateoracondenceinterval,whichissucientifestimationisthe


68 Chapter6. DecisionAnalysis

laststepinthepro cess,butifyouwanttouseanestimateasaninputtoa
subsequentanalysis,p ointestimatesandintervalsareoftennotmuchhelp.

Inthisexample,weusethep osteriordistributiontocomputeanoptimalbid.
Thereturnonagivenbid isasymmetricanddiscontinuous(ifyouoverbid,
you lose),soitwouldb e hardto solvethisproblemanalytically. But itis
relativelysimpletodocomputationally.

NewcomerstoBayesianthinkingareoftentemptedtosummarizethep oste-
riordistributionbycomputingthemeanorthemaximumlikeliho o destimate.
Thesesummariescanb euseful,butifthat'sallyouneed,thenyouprobably
don'tneedBayesianmetho dsintherstplace.

Bayesian metho dsaremostusefulwhenyou cancarry thep osterior distri-
bution intothe nextstep ofthe analysisto p erform some kindof decision
analysis,aswedidinthischapter,orsomekindofprediction,asweseeinthe
nextchapter.


# Chapter 7

# Prediction

### 7.1 TheBostonBruinsproblem

Inthe2010-11NationalHo ckeyLeague(NHL)Finals,myb elovedBostonBru-
insplayedab est-of-sevenchampionshipseriesagainstthedespisedVancouver
Canucks.Bostonlostthersttwogames0-1and2-3,thenwonthenexttwo
games8-1and4-0. Atthisp ointintheseries,whatistheprobabilitythat
Bostonwillwinthenextgame,andwhatistheirprobabilityofwinningthe
championship?

Asalways,toansweraquestionlikethis,weneedtomakesomeassumptions.
First,itisreasonabletob elievethatgoalscoringinho ckeyisatleastapprox-
imatelyaPoissonpro cess,whichmeansthatitisequallylikelyforagoalto
b escoredatanytimeduringagame. Second,wecanassumethatagainsta
particularopp onent,eachteamhassomelong-termaveragegoalsp ergame,
denotedλ.

Giventheseassumptions,mystrategyforansweringthisquestionis

1. Usestatisticsfrompreviousgamestocho oseapriordistributionforλ.
2. Usethescorefromtherstfourgamestoestimateλforeachteam.
3. Usethep osteriordistributionsofλtocomputedistributionofgoalsfor
    eachteam,thedistributionofthegoaldierential,andtheprobability
    thateachteamwinsthenextgame.
4. Computetheprobabilitythateachteamwinstheseries.


70 Chapter7. Prediction

Tocho oseapriordistribution,Igotsomestatisticsfromhttp://www.nhl.com,
sp ecicallytheaveragegoalsp ergameforeachteaminthe2010-11season.
ThedistributionisroughlyGaussianwithmean2.8andstandarddeviation
0.3.

TheGaussiandistributioniscontinuous,butwe'llapproximateitwithadis-
cretePmf.thinkbayesprovidesMakeGaussianPmftodoexactlythat:

def MakeGaussianPmf(mu, sigma, num_sigmas, n=101):
pmf = Pmf()
low = mu - num_sigmas*sigma
high = mu + num_sigmas*sigma

```
for x in numpy.linspace(low, high, n):
p = scipy.stats.norm.pdf(x, mu, sigma)
pmf.Set(x, p)
pmf.Normalize()
return pmf
```
muandsigmaarethemeanandstandarddeviationoftheGaussiandistribu-
tion. num_sigmasisthenumb erofstandarddeviationsab oveandb elowthe
meanthatthePmfwillspan,andnisthenumb erofvaluesinthePmf.

Againweuse numpy.linspaceto makeanarrayofnequallyspacedvalues
b etweenlowandhigh,includingb oth.

norm.pdfevaluatestheGaussianprobabilitydensityfunction(PDF).

Gettingback totheho ckeyproblem,here'sthedenitionforasuiteofhy-
p othesesab outthevalueofλ.

class Hockey(thinkbayes.Suite):

```
def __init__(self):
pmf = thinkbayes.MakeGaussianPmf(2.7, 0.3, 4)
thinkbayes.Suite.__init__(self, pmf)
```
SothepriordistributionisGaussianwithmean2.7,standarddeviation0.3,
anditspans 4 sigmasab oveandb elowthemean.

Asalways,wehavetodecidehowtorepresenteachhyp othesis;inthiscaseI
representthehyp othesisthatλ=xwiththeoating-p ointvaluex.

### 7.2 Poissonpro cesses

Inmathematicalstatistics,apro cessisasto chasticmo delofaphysicalsystem
(sto chasticmeansthatthemo delhassomekindofrandomnessinit). For


7.3. Thep osteriors 71

example,aBernoullipro cessisamo delofasequenceofevents,calledtrials,
inwhicheachtrialhastwop ossibleoutcomes,likesuccessandfailure. Soa
Bernoullipro cessisanaturalmo delforaseries ofcoinips,or aseriesof
shotsongoal.

APoissonpro cessisthecontinuousversionofaBernoullipro cess,wherean
eventcano ccuratanyp ointintimewithequalprobability.Poissonpro cesses
canb eusedtomo delcustomersarrivinginastore,buses arrivingatabus
stop,orgoalsscoredinaho ckeygame.

Inmanyrealsystemstheprobabilityofaneventchangesovertime.Customers
aremorelikelytogotoastoreatcertaintimes ofday,buses aresupp osed
toarriveatxedintervals,andgoalsaremoreorlesslikelyatdierenttimes
duringagame.

Butallmo delsarebasedonsimplications,andinthiscasemo delingaho ckey
gamewithaPoissonpro cessisareasonablechoice. Heuer,MüllerandRub-
ner(2010)analyzescoringinaGermanso ccerleagueandcometothesame
conclusion;seehttp://www.cimat.mx/Eventos/vpec10/img/poisson.pdf.

Theb enetofusingthismo delisthatwe cancomputethedistributionof
goalsp ergameeciently,aswellas thedistributionoftimeb etweengoals.
Sp ecically,iftheaveragenumb erofgoalsinagameislam,thedistribution
ofgoalsp ergameisgivenbythePoissonPMF:

def EvalPoissonPmf(k, lam):
return (lam)**k * math.exp(-lam) / math.factorial(k)

Andthedistributionoftimeb etweengoalsisgivenbytheexp onentialPDF:

def EvalExponentialPdf(x, lam):
return lam * math.exp(-lam * x)

Iusethevariablelamb ecauselambdaisareservedkeywordinPython.Both
ofthesefunctionsareinthinkbayes.py.

### 7.3 Thep osteriors

Nowwecancomputethelikeliho o dthatateamwithahyp otheticalvalueof
lamscoreskgoalsinagame:

# class Hockey

```
def Likelihood(self, data, hypo):
lam = hypo
k = data
```

72 Chapter7. Prediction

```
0.0001.5 2.0 Goals per game2.5 3.0 3.5 4.0
```
```
0.002
```
```
0.004
```
```
0.006
```
```
0.008
```
```
0.010
```
```
0.012
```
```
0.014
```
```
0.016
```
```
0.018
```
```
Probability
```
```
bruins
canucks
```
```
Figure7.1:Posteriordistributionofthenumb erofgoalsp ergame.
```
```
like = thinkbayes.EvalPoissonPmf(k, lam)
return like
```
Eachhyp othesisisap ossiblevalueofλ;dataistheobservednumb erofgoals,
k.

Withthelikeliho o dfunctioninplace,wecanmakeasuiteforeachteamand
up datethemwiththescoresfromtherstfourgames.

```
suite1 = Hockey('bruins')
suite1.UpdateSet([0, 2, 8, 4])
```
```
suite2 = Hockey('canucks')
suite2.UpdateSet([1, 3, 1, 0])
```
Figure7.1showstheresultingp osteriordistributions forlam. Basedonthe
rstfourgames,themostlikelyvaluesforlamare2.6fortheCanucksand2.9
fortheBruins.

### 7.4 Thedistributionofgoals

Tocomputetheprobabilitythateachteamwinsthenextgame,weneedto
computethedistributionofgoalsforeachteam.

Ifweknewthevalueoflamexactly,wecouldusethePoissondistributionagain.
thinkbayesprovidesametho dthatcomputesatruncatedapproximationof
aPoissondistribution:


7.4. Thedistributionofgoals 73

0.00 (^024) Goals 6 8 10
0.05
0.10
0.15
0.20
0.25
Probability
bruins
canucks
Figure7.2:Distributionofgoalsinasinglegame.
def MakePoissonPmf(lam, high):
pmf = Pmf()
for k in xrange(0, high+1):
p = EvalPoissonPmf(k, lam)
pmf.Set(k, p)
pmf.Normalize()
return pmf
TherangeofvaluesinthecomputedPmfisfrom 0 tohigh.Soifthevalueof
lamwereexactly3.4,wewouldcompute:
lam = 3.4
goal_dist = thinkbayes.MakePoissonPmf(lam, 10)
Ichosetheupp erb ound,10,b ecausetheprobabilityofscoringmorethan 10
goalsinagameisquitelow.
That'ssimpleenoughsofar;theproblemisthatwedon'tknowthevalueof
lamexactly.Instead,wehaveadistributionofp ossiblevaluesforlam.
Foreachvalueoflam,thedistributionofgoalsisPoisson.Sotheoveralldistri-
butionofgoalsisamixtureofthesePoissondistributions,weightedaccording
totheprobabilitiesinthedistributionoflam.
Giventhep osteriordistributionoflam,here'stheco dethatmakesthedistri-
butionofgoals:
def MakeGoalPmf(suite):
metapmf = thinkbayes.Pmf()
for lam, prob in suite.Items():


74 Chapter7. Prediction

```
0.00000.0 0.5 Games until goal1.0 1.5 2.0
```
```
0.0005
```
```
0.0010
```
```
0.0015
```
```
0.0020
```
```
0.0025
```
```
0.0030
```
```
Probability
```
```
bruins
canucks
```
```
Figure7.3: Distributionoftimeb etweengoals.
```
```
pmf = thinkbayes.MakePoissonPmf(lam, 10)
metapmf.Set(pmf, prob)
```
```
mix = thinkbayes.MakeMixture(metapmf)
return mix
```
ForeachvalueoflamwemakeaPoissonPmfandaddittothemeta-Pmf.I
callitameta-Pmfb ecauseitisaPmfthatcontainsPmfsasitsvalues.

ThenweuseMakeMixturetocomputethemixture(wesawMakeMixturein
Section5.6).

Figure7.2showstheresultingdistributionofgoalsfortheBruinsandCanucks.
TheBruinsarelesslikelytoscore 3 goalsorfewerinthenextgame,andmore
likelytoscore 4 ormore.

### 7.5 Theprobabilityofwinning

Togettheprobabilityofwinning,rstwecomputethedistributionofthegoal
dierential:

```
goal_dist1 = MakeGoalPmf(suite1)
goal_dist2 = MakeGoalPmf(suite2)
diff = goal_dist1 - goal_dist2
```
The subtraction op erator invokesPmf.__sub__, whichenumerates pairsof
valuesandcomputesthedierence. Subtractingtwodistributionsisalmost
thesameasadding,whichwesawinSection5.4.


7.6. Suddendeath 75

Ifthegoaldierentialisp ositive,theBruinswin;ifnegative,theCanuckswin;
if0,it'satie:

```
p_win = diff.ProbGreater(0)
p_loss = diff.ProbLess(0)
p_tie = diff.Prob(0)
```
Withthe distributions fromtheprevious section, p_winis46%,p_loss is
37%,andp_tieis17%.

Intheeventofatieattheendofregulationplay,theteamsplayovertime
p erio dsuntiloneteamscores. Sincethegameendsimmediatelywhentherst
goalisscored,thisovertimeformatisknownassuddendeath.

### 7.6 Suddendeath

Tocomputetheprobabilityofwinninginasuddendeathovertime,theim-
p ortantstatistic is notgoals p ergame, buttimeuntilthe rst goal. The
assumptionthatgoal-scoringisaPoisson pro cessimpliesthat thetimeb e-
tweengoalsisexp onentiallydistributed.

Givenlam,wecancomputethetimeb etweengoalslikethis:

lam = 3.4
time_dist = thinkbayes.MakeExponentialPmf(lam, high=2, n=101)

highistheupp erb oundofthedistribution. InthiscaseIchose2,b ecause
theprobabilityofgoingmorethantwogameswithoutscoringissmall. nis
thenumb erofvaluesinthePmf.

Ifweknowlamexactly,that'sallthereistoit.Butwedon't;insteadwehave
ap osteriordistributionofp ossiblevalues. Soaswedidwiththedistribution
ofgoals,wemakeameta-PmfandcomputeamixtureofPmfs.

def MakeGoalTimePmf(suite):
metapmf = thinkbayes.Pmf()

```
for lam, prob in suite.Items():
pmf = thinkbayes.MakeExponentialPmf(lam, high=2, n=2001)
metapmf.Set(pmf, prob)
```
```
mix = thinkbayes.MakeMixture(metapmf)
return mix
```
Figure7.3showstheresulting distributions. For timevalueslessthan one
p erio d(onethirdofagame),theBruinsaremorelikelytoscore. Thetime
untiltheCanucksscoreismorelikelytob elonger.


76 Chapter7. Prediction

Isetthenumb erofvalues,n,fairlyhighinordertominimizethenumb erof
ties,sinceitisnotp ossibleforb othteamstoscoresimultaneously.

NowwecomputetheprobabilitythattheBruinsscorerst:

```
time_dist1 = MakeGoalTimePmf(suite1)
time_dist2 = MakeGoalTimePmf(suite2)
p_overtime = thinkbayes.PmfProbLess(time_dist1, time_dist2)
```
FortheBruins,theprobabilityofwinninginovertimeis52%.

Finally,thetotalprobabilityofwinningisthechanceofwinningattheendof
regulationplayplustheprobabilityofwinninginovertime.

```
p_tie = diff.Prob(0)
p_overtime = thinkbayes.PmfProbLess(time_dist1, time_dist2)
```
```
p_win = diff.ProbGreater(0) + p_tie * p_overtime
```
FortheBruins,theoverallchanceofwinningthenextgameis55%.

Towintheseries,theBruinscaneitherwinthenexttwogamesorsplitthe
nexttwoandwinthethird.Again,wecancomputethetotalprobability:

```
# win the next two
p_series = p_win**2
```
```
# split the next two, win the third
p_series += 2 * p_win * (1-p_win) * p_win
```
TheBruinschanceofwinningtheseriesis57%.Andin2011,theydid.

### 7.7 Discussion

As always,theanalysisinthischapterisbasedon mo delingdecisions, and
mo deling is almost always an iterative pro cess. In general, you want to
startwithsomethingsimplethatyieldsanapproximateanswer,identifylikely
sourcesoferror,andlo okforopp ortunitiesforimprovement.

Inthisexample,Iwouldconsidertheseoptions:

```
 I chose aprior basedon the average goals p ergame for each team.
Butthisstatisticisaveragedacrossallopp onents. Againstaparticular
opp onent,wemightexp ectmorevariability. Forexample,iftheteam
withtheb estoenseplaystheteamwiththeworstdefense,theexp ected
goalsp ergamemightb eseveralstandarddeviationsab ovethemean.
```

7.8. Exercises 77

```
 FordataIusedonlytherstfourgamesofthechampionshipseries. If
thesameteamsplayedeachotherduringtheregularseason,Icoulduse
theresultsfromthosegamesaswell.Onecomplicationisthatthecom-
p ositionofteamschangesduringtheseasonduetotradesandinjuries.
Soitmightb eb esttogivemoreweighttorecentgames.
```
```
 Totakeadvantageofallavailableinformation,wecoulduseresultsfrom
allregularseasongamestoestimateeachteam'sgoalscoringrate,p ossi-
blyadjustedbyestimatinganadditionalfactorforeachpairwisematch-
up.Thisapproachwouldb emorecomplicated,butitisstillfeasible.
```
Fortherstoption,wecouldusetheresultsfromtheregularseasontoestimate
thevariabilityacrossallpairwisematch-ups. ThankstoDirkHoagathttp:
//forechecker.blogspot.com/,Iwasabletogetthenumb erofgoalsscored
duringregulationplay(notovertime)foreachgameintheregularseason.

Teamsindierentconferencesonlyplayeachotheroneortwotimesinthe
regularseason,soIfo cusedonpairsthatplayedeachother46times. For
eachpair,Icomputedtheaveragegoalsp ergame,whichisanestimateofλ,
thenplottedthedistributionoftheseestimates.

Themeanoftheseestimatesis2.8,again,butthestandarddeviationis0.85,
substantiallyhigherthanwhatwegotcomputingoneestimateforeachteam.

Ifweruntheanalysisagainwiththehigher-varianceprior,theprobabilitythat
theBruinswintheseriesis80%,substantiallyhigherthantheresultwiththe
low-varianceprior,57%.

Soitturnsoutthattheresultsaresensitivetotheprior,whichmakessense
consideringhowlittledatawehavetoworkwith.Basedonthedierenceb e-
tweenthelow-variancemo delandthehigh-variablemo del,itseemsworthwhile
toputsomeeortintogettingthepriorright.

Theco deanddataforthischapterareavailablefromhttp://thinkbayes.
com/hockey.pyandhttp://thinkbayes.com/hockey_data.csv. Formore
informationseeSection0.3.

### 7.8 Exercises.

Exercise7.1Ifbusesarriveatabusstopevery 20 minutes,andyouarrive
atthe busstopat arandom time, yourwaittimeuntil thebusarrives is
uniformlydistributedfrom 0 to 20 minutes.


78 Chapter7. Prediction

Butinreality,thereisvariabilityinthetimeb etweenbuses.Supp oseyouare
waiting forabus,andyouknowthehistoricaldistributionof timeb etween
buses.Computeyourdistributionofwaittimes.

Hint: Supp ose thatthe timeb etweenbuses iseither 5 or 10 minutes with
equalprobability. Whatistheprobabilitythatyouarriveduringoneofthe
10 minuteintervals?

Isolveaversionofthisprobleminthenextchapter.

Exercise 7.2Supp ose that passengersarriving at the bus stop are well-
mo deledby aPoissonpro cesswithparameter λ. Ifyouarrive atthe stop
and nd 3 p eoplewaiting,what isyourp osterior distributionforthe time
sincethelastbusarrived.

Isolveaversionofthisprobleminthenextchapter.

Exercise7.3Supp osethatyouareanecologistsamplingtheinsectp opulation
inanewenvironment. Youdeploy 100 trapsinatestareaandcomeback
thenextdaytocheckonthem. Youndthat 37 trapshaveb eentriggered,
trappinganinsectinside.Onceatraptriggers,itcannottrapanotherinsect
untilithasb eenreset.

Ifyou resetthetrapsandcomeback intwo days,how manytrapsdoyou
exp ecttondtriggered? Computeap osteriorpredictivedistributionforthe
numb eroftraps.

Exercise7.4Supp oseyouarethemanagerofanapartmentbuildingwith 100
lightbulbsincommonareas. Itisyourresp onsibilitytoreplacelightbulbs
whentheybreak.

OnJanuary1,all 100 bulbsareworking.Whenyouinsp ectthemonFebruary
1,yound 3 lightbulbsout. Ifyoucomeback onApril1,howmanylight
bulbsdoyouexp ecttondbroken?

Inthepreviousexercise,youcouldreasonablyassumethataneventisequally
likelyatany time. Forlightbulbs,thelikeliho o dof failuredep endsonthe
ageofthebulb. Sp ecically,oldbulbshaveanincreasingfailureratedueto
evap orationofthelament.

Thisproblemismoreop en-endedthansome;youwillhavetomakemo deling
decisions. You mightwantto read ab outthe Weibull distribution(http:
//en.wikipedia.org/wiki/Weibull_distribution).Oryoumightwantto
lo okaroundforinformationab outlightbulbsurvivalcurves.


# Chapter 8

# Observer Bias

### 8.1 TheRedLineproblem

InMassachusetts, theRed Line isasubway that connectsCambridgeand
Boston.WhenIwasworkinginCambridgeIto oktheRedLinefromKendall
SquaretoSouthStationandcaughtthecommuterrailtoNeedham. During
rushhourRedLinetrainsrunevery78minutes,onaverage.

WhenIarrivedatthestation,Icouldestimatethetimeuntilthenexttrain
basedonthenumb erofpassengersontheplatform. Iftherewereonlyafew
p eople,I inferred that Ijust missedatrainand exp ectedto waitab out 7
minutes.Ifthereweremorepassengers,Iexp ectedthetraintoarriveso oner.
Butiftherewerealargenumb erofpassengers,Isusp ectedthattrainswere
notrunningonschedule,soIwouldgobacktothestreetlevelandgetataxi.

WhileIwaswaitingfortrains,Ithoughtab outhowBayesianestimationcould
helppredictmywaittimeanddecidewhenIshouldgiveupandtakeataxi.
ThischapterpresentstheanalysisIcameupwith.

Thischapterisbasedonapro jectbyBrendanRitterandKaiAustin, who
to okaclasswithmeatOlinCollege. Theco deinthischapterisavailable
fromhttp://thinkbayes.com/redline.py. Theco deIusedtocollectdata
isinhttp://thinkbayes.com/redline_data.py. Formoreinformation see
Section0.3.

### 8.2 Themo del

Beforewegettotheanalysis,wehavetomakesomemo delingdecisions.First,
IwilltreatpassengerarrivalsasaPoissonpro cess,whichmeansIassumethat


80 Chapter8. ObserverBias

0.000 (^05) Time (min) 10 15 20
0.005
0.010
0.015
0.020
0.025
CDF
z
zb
Figure8.1: PMFofgapsb etweentrains,basedoncollecteddata,smo othed
by KDE.z istheactualdistribution; zb isthebiaseddistributionseenby
passengers.
passengersareequallylikelyto arriveat anytime, andthatthey arriveat
an unknown rate, λ, measured in passengersp erminute. Since I observe
passengersduringashortp erio doftime,andatthesametimeeveryday,I
assumethatλisconstant.
Onthe otherhand,the arrivalpro cessfortrainsisnotPoisson. Trainsto
Bostonaresupp osedtoleavefromtheendoftheline(Alewifestation)every
78minutesduringp eaktimes,butbythetimetheygettoKendallSquare,
thetimeb etweentrainsvariesb etween 3 and 12 minutes.
Togatherdataonthetimeb etweentrains,Iwroteascriptthatdownloads
real-timedata fromhttp://www.mbta.com/rider_tools/developers/, se-
lectssouth-b oundtrainsarrivingatKendallsquare,andrecordstheirarrival
timesinadatabase. Iranthescriptfrom4pmto6pmeveryweekdayfor 5
days,andrecordedab out 15 arrivalsp erday. ThenIcomputedthetimeb e-
tweenconsecutivearrivals;thedistributionofthesegapsisshowninFigure8.1,
lab eledz.
Ifyousto o dontheplatformfrom4pmto6pmandrecordedthetimeb etween
trains,thisisthedistributionyouwouldsee.Butifyouarriveatsomerandom
time(withoutregardtothetrainschedule)youwouldseeadierentdistri-
bution. Theaveragetimeb etweentrains,asseenbyarandompassenger,is
substantiallyhigherthanthetrueaverage.
Why?Becauseapassengerismoreliketoarriveduringalargeintervalthana
smallone.Considerasimpleexample:supp osethatthetimeb etweentrainsis


8.3. Waittimes 81

either 5 minutesor 10 minuteswithequalprobability.Inthatcasetheaverage
timeb etweentrainsis7.5minutes.

Buta passengeris morelikely to arrive duringa 10 minute gapthan a 5
minutegap; infact, twiceas likely. Ifwe surveyedarrivingpassengers,we
wouldndthat 2/3of themarrivedduringa 10 minute gap,andonly1/3
duringa 5 minutegap. Sothe averagetimeb etweentrains,asseenbyan
arrivingpassenger,is8.33minutes.

Thiskindofobserver biasapp earsinmanycontexts. Studentsthinkthat
classesarebiggerthantheyareb ecausemoreofthemareinthebigclasses.
Airlinepassengersthinkthatplanesarefullerthantheyareb ecausemoreof
themareonfullights.

Ineachcase,valuesfromtheactualdistributionareoversampledinprop ortion
totheirvalue.IntheRedLineexample,agapthatistwiceasbigistwiceas
likelytob eobserved.

Sogiventheactualdistributionofgaps,wecancomputethedistributionof
gapsasseenbypassengers.BiasPmfdo esthiscomputation:

def BiasPmf(pmf):
new_pmf = pmf.Copy()

```
for x, p in pmf.Items():
new_pmf.Mult(x, x)
```
```
new_pmf.Normalize()
return new_pmf
```
pmfistheactualdistribution;new_pmfisthebiaseddistribution. Insidethe
lo op,wemultiplytheprobabilityofeachvalue,x,bythelikeliho o ditwillb e
observed,whichisprop ortionaltox.Thenwenormalizetheresult.

Figure8.1showstheactualdistributionofgaps,lab eledz,andthedistribution
ofgapsseenbypassengers,lab eledzbforzbiased.

### 8.3 Waittimes.

Waittime,whichIcally,isthetimeb etweenthearrivalofapassengerand
thenextarrivalofatrain. Elapsedtime,whichIcallx,isthetimeb etween
thearrivaloftheprevioustrainandthearrivalofapassenger. Ichosethese
denitionssothatzb = x + y.


82 Chapter8. ObserverBias

0.0 (^05) Time (min) 10 15 20
0.2
0.4
0.6
0.8
1.0
CDF
z
zb
y
Figure8.2: CDFofz,zb,andthewaittimeseenbypassengers,y.
Giventhedistributionofzb,wecancomputethedistributionofy. I'llstart
withasimplecaseandthengeneralize. Supp ose,asinthepreviousexample,
thatzbiseither 5 minuteswithprobability1/3,or 10 minuteswithprobability
2/3.
Ifwearriveatarandomtimeduringa 5 minutegap,yisuniformfrom 0 to 5
minutes. Ifwearriveduringa 10 minutegap,yisuniformfrom 0 to10.Sothe
overalldistributionisamixtureofuniformdistributionsweightedaccording
totheprobabilityofeachgap.
Thefollowingfunctiontakesthedistributionofzbandcomputesthedistri-
butionofy:
def PmfOfWaitTime(pmf_zb):
metapmf = thinkbayes.Pmf()
for gap, prob in pmf_zb.Items():
uniform = MakeUniformPmf(0, gap)
metapmf.Set(uniform, prob)
pmf_y = thinkbayes.MakeMixture(metapmf)
return pmf_y
PmfOfWaitTimemakesameta-Pmfthatmapsfromeachuniformdistribution
toitsprobability.ThenitusesMakeMixture,whichwesawinSection5.6,to
computethemixture.
PmfOfWaitTimealsousesMakeUniformPmf,denedhere:
def MakeUniformPmf(low, high):
pmf = thinkbayes.Pmf()


8.3. Waittimes 83

```
for x in MakeRange(low=low, high=high):
pmf.Set(x, 1)
pmf.Normalize()
return pmf
```
lowandhigharetherangeoftheuniformdistribution,(b othendsincluded).
Finally,MakeUniformPmfusesMakeRange,denedhere:

def MakeRange(low, high, skip=10):
return range(low, high+skip, skip)

MakeRangedenesasetofp ossiblevaluesforwaittime(expressedinseconds).
Bydefaultitdividestherangeinto 10 secondintervals.

Toencapsulatethepro cessofcomputingthesedistributions,Icreatedaclass
calledWaitTimeCalculator:

class WaitTimeCalculator(object):

```
def __init__(self, pmf_z):
self.pmf_z = pmf_z
self.pmf_zb = BiasPmf(pmf)
```
```
self.pmf_y = self.PmfOfWaitTime(self.pmf_zb)
self.pmf_x = self.pmf_y
```
Theparameter,pmf_z,istheunbiaseddistributionofz.pmf_zbisthebiased
distributionofgaptime,asseenbypassengers.

pmf_yisthedistributionofwaittime.pmf_xisthedistributionofelapsedtime,
whichisthesameasthedistributionofwaittime.Toseewhy,rememb erthat
foraparticularvalueofzp,thedistributionofyisuniformfrom 0 tozp.Also

x = zp - y

Sothedistributionofxisalsouniformfrom 0 tozp.

Figure8.2showsthedistributionofz,zb,andybasedonthedataIcollected
fromtheRedLinewebsite.

Topresentthesedistributions,IamswitchingfromPmfstoCdfs.Mostp eople
aremorefamiliarwithPmfs,butIthinkCdfsareeasiertointerpret,onceyou
getusedtothem. Andifyouwanttoplotseveraldistributionsonthesame
axes,Cdfsarethewaytogo.

Themeanof zis7.8minutes. Themean ofzb is8.8minutes,ab out13%
higher.Themeanofyis4.4,halfthemeanofzb.


84 Chapter8. ObserverBias

0.0 (^05) Time (min) 10 15 20
0.2
0.4
0.6
0.8
1.0
CDF
prior x
posterior x
pred y
Figure8.3:Priorandp osteriorofxandpredictedy.
As anaside,the RedLineschedulerep ortsthattrains runevery 9 minutes
during p eaktimes. Thisisclosetothe averageofzb,buthigherthanthe
average of z. I exchangedemail witharepresentative of the MBTA,who
conrmedthattherep ortedtimeb etweentrainsisdelib eratelyconservative
inordertoaccountforvariability.

### 8.4 Predictingwaittimes

Let'sgetbacktothemotivatingquestion: supp osethatwhenIarriveatthe
platformIsee 10 p eoplewaiting. HowlongshouldIexp ecttowaituntilthe
nexttrainarrives?

Asalways,let'sstartwiththeeasiestversionoftheproblemandworkourway
up. Supp osewearegiventheactualdistributionofz,andweknowthatthe
passengerarrivalrate,λ,is 2 passengersp erminute.

Inthatcasewecan:

1. Usethe distributionof ztocomputethepriordistributionofzp,the
    timeb etweentrainsasseenbyapassenger.
2. Thenwecanusethenumb erofpassengerstoestimatethedistribution
    ofx,theelapsedtimesincethelasttrain.
3. Finally,weusetherelationy = zp - xtogetthedistributionofy.

TherststepistocreateaWaitTimeCalculatorthatencapsulatesthedistri-
butionsofzp,x,andy,priortotakingintoaccountthenumb erofpassengers.


8.4. Predictingwaittimes 85

```
wtc = WaitTimeCalculator(pmf_z)
```
pmf_zisthegivendistributionofgaptimes.

ThenextstepistomakeanElapsedTimeEstimator(denedb elow),which
encapsulatesthep osteriordistributionofxandthepredictivedistributionof
y.

```
ete = ElapsedTimeEstimator(wtc,
lam=2.0/60,
num_passengers=15)
```
TheparametersaretheWaitTimeCalculator,thepassengerarrivalrate,lam
(expressedinpassengersp ersecond),andtheobservednumb erofpassengers,
let'ssay15.

HereisthedenitionofElapsedTimeEstimator:

class ElapsedTimeEstimator(object):

```
def __init__(self, wtc, lam, num_passengers):
self.prior_x = Elapsed(wtc.pmf_x)
```
```
self.post_x = self.prior_x.Copy()
self.post_x.Update((lam, num_passengers))
```
```
self.pmf_y = PredictWaitTime(wtc.pmf_zb, self.post_x)
```
prior_xandposterior_xarethepriorandp osteriordistributionsofelapsed
time.pmf_yisthepredictivedistributionofwaittime.

ElapsedTimeEstimatorusesElapsedandPredictWaitTime,denedb elow.

ElapsedisaSuitethatrepresentsthehyp otheticaldistributionofx.Theprior
distributionofxcomesstraightfromtheWaitTimeCalculator. Thenweuse
thedata,whichconsistsofthearrivalrate,lam,andthenumb erofpassengers
ontheplatform,tocomputethep osteriordistribution.

Here'sthedenitionofElapsed:

class Elapsed(thinkbayes.Suite):

```
def Likelihood(self, data, hypo):
x = hypo
lam, k = data
like = thinkbayes.EvalPoissonPmf(k, lam * x)
return like
```

86 Chapter8. ObserverBias

Asalways,Likelihoodtakesahyp othesisanddata,andcomputesthelikeli-
ho o dofthedataunderthehyp othesis. Inthiscasehypoistheelapsedtime
sincethelasttrainanddataisatupleoflamandthenumb erofpassengers.

Thelikeliho o dofthedataistheprobabilityofgettingkarrivalsinxtime,given
arrivalratelam.WecomputethatusingthePMFofthePoissondistribution.

Finally,here'sthedenitionofPredictWaitTime:

def PredictWaitTime(pmf_zb, pmf_x):
pmf_y = pmf_zb - pmf_x
RemoveNegatives(pmf_y)
return pmf_y

pmf_zbisthedistributionofgapsb etweentrains;pmf_xisthedistributionof
elapsedtime,basedontheobservednumb erofpassengers. Sincey = zb -
x,wecancompute

```
pmf_y = pmf_zb - pmf_x
```
Thesubtractionop eratorinvokesPmf.__sub__,whichenumeratesallpairsof
zbandx,computesthedierences,andaddstheresultstopmf_y.

TheresultingPmfincludessomenegativevalues,whichweknowareimp os-
sible. Forexample,ifyouarriveduringagapof 5 minutes,youcan't wait
morethan 5 minutes. RemoveNegativesremovestheimp ossiblevaluesfrom
thedistributionandrenormalizes.

def RemoveNegatives(pmf):
for val in pmf.Values():
if val < 0:
pmf.Remove(val)
pmf.Normalize()

Figure8.3showstheresults. Thepriordistributionofxisthesameasthe
distributionofyinFigure8.2.Thep osteriordistributionofxshowsthat,after
seeing 15 passengersontheplatform,web elievethatthetimesincethelast
trainisprobably5-10minutes. Thepredictivedistributionofyindicatesthat
weexp ectthenexttraininlessthan 5 minutes,withab out80%condence.

### 8.5 Estimatingthearrivalrate

Theanalysissofarhasb eenbasedontheassumptionthatweknow(1)the
distributionofgapsand(2)thepassengerarrivalrate. Nowwearereadyto
relaxthesecondassumption.


8.5. Estimatingthearrivalrate 87

0.0 (^01) Arrival rate (passengers / min) 2 3 4 5
0.2
0.4
0.6
0.8
1.0
CDF
prior
posterior
Figure8.4: Prior and p osterior distributions of lam basedon ve daysof
passengerdata.
Supp osethatyoujustmovedtoBoston,soyoudon'tknowmuchab outthe
passengerarrivalrateontheRedLine. Afterafewdaysofcommuting,you
couldmakeaguess,atleastqualitatively.Withalittlemoreeort,youcould
estimateλquantitatively.
Eachdaywhenyouarriveattheplatform,youshouldnotethetimeandthe
numb erofpassengerswaiting(iftheplatformisto obig,youcouldcho osea
samplearea).Thenyoushouldrecordyourwaittimeandthenumb erofnew
arrivalswhileyouarewaiting.
Aftervedays,youmighthavedatalikethis:
k1 y k2
-- --- --
17 4.6 9
22 1.0 0
23 1.4 4
18 5.4 12
4 5.8 11
wherek1isthenumb erofpassengerswaitingwhenyouarrive,yisyourwait
timeinminutes,andk2isthenumb erofpassengerswhoarrivewhileyouare
waiting.
Overthecourseofoneweek,youwaited 18 minutesandsaw 36 passengers
arrive,soyouwouldestimatethatthearrivalrateis 2 passengersp erminute.
Forpracticalpurp osesthatestimateisgo o denough,butforthesakeofcom-


88 Chapter8. ObserverBias

pletenessIwillcomputeap osteriordistributionforλandshowhowtouse
thatdistributionintherestoftheanalysis.

ArrivalRate is a Suite that represents hyp otheses ab out λ. As always,
Likelihoodtakesahyp othesisanddata,andcomputesthelikeliho o dofthe
dataunderthehyp othesis.

Inthiscasethehyp othesisisavalueofλ. Thedataisapair,y, k,wherey
isawaittimeandkisthenumb erofpassengersthatarrived.

class ArrivalRate(thinkbayes.Suite):

```
def Likelihood(self, data, hypo):
lam = hypo
y, k = data
like = thinkbayes.EvalPoissonPmf(k, lam * y)
return like
```
This Likelihood might lo ok familiar; it is almost identical to
Elapsed.Likelihood in Section 8.4. The dierence is that in
Elapsed.Likelihood the hyp othesis is x, the elapsed time; in
ArrivalRate.Likelihood the hyp othesis is lam, the arrival rate. But
in b othcases the likeliho o d isthe probability of seeingk arrivals insome
p erio doftime,givenlam.

ArrivalRateEstimator encapsulatesthepro cess ofestimating λ. Thepa-
rameter,passenger_data,isalistofk1, y, k2tuples,asinthetableab ove.

class ArrivalRateEstimator(object):

```
def __init__(self, passenger_data):
low, high = 0, 5
n = 51
hypos = numpy.linspace(low, high, n) / 60
```
```
self.prior_lam = ArrivalRate(hypos)
```
```
self.post_lam = self.prior_lam.Copy()
for k1, y, k2 in passenger_data:
self.post_lam.Update((y, k2))
```
__init__ buildshypos,whichisasequenceofhyp othetical valuesforlam,
thenbuildsthepriordistribution,prior_lam.Theforlo opup datestheprior
withdata,yieldingthep osteriordistribution,post_lam.


8.6. Incorp oratinguncertainty 89

0.0 (^02) Wait time (min) 4 6 8 10
0.2
0.4
0.6
0.8
1.0
CDF
mix
Figure8.5:Predictivedistributionsofyforp ossiblevaluesoflam.
Figure8.4showsthepriorandp osteriordistributions.Asexp ected,themean
andmedian of the p osterior are near the observed rate, 2 passengersp er
minute.Butthespreadofthep osteriordistributioncapturesouruncertainty
ab outλbasedonasmallsample.

### 8.6 Incorp oratinguncertainty.

Wheneverthereisuncertaintyab outoneoftheinputstoananalysis,wecan
takeitintoaccountbyapro cesslikethis:

1. Implementtheanalysisbasedonadeterministicvalueoftheuncertain
    parameter(inthiscaseλ).
2. Computethedistributionoftheuncertainparameter.
3. Runtheanalysisforeachvalueoftheparameter,andgenerateasetof
    predictivedistributions.
4. Computea mixtureof the predictivedistributions, usingthe weights
    fromthedistributionoftheparameter.

We have already done steps (1) and (2). I wrote a class called
WaitMixtureEstimatortohandlesteps(3)and(4).

class WaitMixtureEstimator(object):

```
def __init__(self, wtc, are, num_passengers=15):
```

90 Chapter8. ObserverBias

```
self.metapmf = thinkbayes.Pmf()
```
```
for lam, prob in sorted(are.post_lam.Items()):
ete = ElapsedTimeEstimator(wtc, lam, num_passengers)
self.metapmf.Set(ete.pmf_y, prob)
```
```
self.mixture = thinkbayes.MakeMixture(self.metapmf)
```
wtcistheWaitTimeCalculatorthatcontainsthedistributionofzb. areis
theArrivalTimeEstimatorthatcontainsthedistributionoflam.

The rstlinemakesameta-Pmfthatmapsfromeachp ossible distribution
ofytoitsprobability. Foreachvalueoflam,weuseElapsedTimeEstimator
tocomputethecorresp ondingdistributionofyandstoreitintheMeta-Pmf.
ThenweuseMakeMixturetocomputethemixture.

Figure 8.5shows theresults. Theshaded linesin thebackground arethe
distributions of yforeach valueof lam, withlinethickness thatrepresents
likeliho o d.Thedarklineisthemixtureofthesedistributions.

Inthiscasewecouldgetaverysimilarresultusingasinglep ointestimateof
lam.Soitwasnotnecessary,forpracticalpurp oses,toincludetheuncertainty
oftheestimate.

Ingeneral,itisimp ortanttoincludevariabilityifthesystemresp onseisnon-
linear;thatis,ifsmallchangesintheinputcancausebigchangesintheoutput.
Inthiscase,p osteriorvariabilityinlamissmallandthesystemresp onse is
approximatelylinearforsmallp erturbations.

### 8.7 Decisionanalysis

Atthisp ointwecanusethenumb erofpassengersontheplatformtopredict
thedistributionofwaittimes.Nowlet'sgettothesecondpartofthequestion:
whenshouldIstopwaitingforthetrainandgocatchataxi?

Rememb erthatintheoriginalscenario,IamtryingtogettoSouthStation
tocatchthecommuterrail. Supp oseIleavetheocewithenoughtimethat
Icanwait 15 minutesandstillmakemyconnectionatSouthStation.

InthatcaseIwouldliketoknowtheprobabilitythatyexceeds 15 minutes
asafunctionofnum_passengers. Itiseasyenoughtousetheanalysisfrom
Section8.4andrunitforarangeofnum_passengers.

Butthere'saproblem.Theanalysisissensitivetothefrequencyoflongdelays,
andb ecauselongdelaysarerare,itishardtoestimatetheirfrequency.


8.7. Decisionanalysis 91

0.00 (^0510) Num passengers 15 20 25 30 35
0.02
0.04
0.06
0.08
0.10
0.12
P(y > 15 min)
Figure8.6:Probabilitythatwaittimeexceeds 15 minutesasafunctionofthe
numb erofpassengersontheplatform.
Ionly havedata fromoneweek, and thelongest delayI observed was 15
minutes.SoIcan'testimatethefrequencyoflongerdelaysaccurately.
However,Icanusepreviousobservationstomakeatleastacoarseestimate.
WhenIcommutedbyRedLineforayear,Isawthreelongdelayscausedby
asignalingproblem,ap oweroutage,andp oliceactivityatanotherstop.So
Iestimatethatthereareab out 3 ma jordelaysp eryear.
Butrememb erthatmyobservationsarebiased. Iammorelikelytoobserve
longdelaysb ecausetheyaectalargenumb erofpassengers. Soweshould
treatmyobservationsasasampleofzbratherthanz. Here'showwecando
that.
Duringmyyearofcommuting,Ito oktheRedLinehomeab out 220 times.So
Itaketheobservedgaptimes,gap_times,generateasampleof 220 gaps,and
computetheirPmf:
n = 220
cdf_z = thinkbayes.MakeCdfFromList(gap_times)
sample_z = cdf_z.Sample(n)
pmf_z = thinkbayes.MakePmfFromList(sample_z)
NextIbiaspmf_ztogetthedistributionofzb,drawasample,andthenadd
indelaysof30,40,and 50 minutes(expressedinseconds):
cdf_zp = BiasPmf(pmf_z).MakeCdf()
sample_zb = cdf_zp.Sample(n) + [1800, 2400, 3000]
Cdf.SampleismoreecientthanPmf.Sample,soitisusuallyfastertoconvert
aPmftoaCdfb eforesampling.


92 Chapter8. ObserverBias

NextIusethesampleofzbtoestimateaPdfusingKDE,andthenconvert
thePdftoaPmf:

```
pdf_zb = thinkbayes.EstimatedPdf(sample_zb)
xs = MakeRange(low=60)
pmf_zb = pdf_zb.MakePmf(xs)
```
FinallyIunbiasthedistributionofzbtogetthedistributionofz,whichIuse
tocreatetheWaitTimeCalculator:

```
pmf_z = UnbiasPmf(pmf_zb)
wtc = WaitTimeCalculator(pmf_z)
```
Thispro cessiscomplicated,butallofthestepsareop erationswehaveseen
b efore. Nowwearereadytocomputetheprobabilityofalongwait.

def ProbLongWait(num_passengers, minutes):
ete = ElapsedTimeEstimator(wtc, lam, num_passengers)
cdf_y = ete.pmf_y.MakeCdf()
prob = 1 - cdf_y.Prob(minutes * 60)

Given the numb erof passengersonthe platform, ProbLongWaitmakes an
ElapsedTimeEstimator,extractsthedistributionofwaittime,andcomputes
theprobabilitythatwaittimeexceedsminutes.

Figure8.6showstheresult. Whenthenumb erofpassengersislessthan20,
we inferthatthesystemisop eratingnormally, sotheprobabilityofalong
delayissmall. Ifthereare 30 passengers,weestimatethat ithasb een 15
minutessincethelasttrain;that'slongerthananormaldelay,soweinferthat
somethingiswrongandexp ectlongerdelays.

Ifwearewillingtoaccepta10%chanceofmissingtheconnectionatSouth
Station,weshouldstayandwaitaslongastherearefewerthan 30 passengers,
andtakeataxiiftherearemore.

Or,totakethisanalysisonestepfurther,wecouldquantifythecostofmissing
theconnectionandthecostoftakingataxi,thencho osethethresholdthat
minimizesexp ectedcost.

### 8.8 Discussion

The analysissofarhasb eenbasedon theassumptionthatthearrivalrate
ofpassengersisthesameeveryday. Foracommutertrainduringrushhour,
thatmightnotb eabadassumption,buttherearesomeobviousexceptions.
Forexample,ifthereisasp ecialeventnearby,alargenumb erofp eoplemight


8.9. Exercises 93

arriveatthesametime. Inthatcase,theestimateoflamwouldb eto olow,
sotheestimatesofxandywouldb eto ohigh.

Ifsp ecial eventsareas commonasma jor delays,itwould b eimp ortantto
includetheminthemo del. Wecoulddothatbyextendingthedistributionof
lamtoincludeo ccasionallargevalues.

Westartedwiththeassumptionthatweknowdistributionofz. Asanalter-
native,apassengercouldestimatez,butitwouldnotb eeasy.Asapassenger,
youonlyobserveonlyyourownwaittime,y. Unlessyouskipthersttrain
andwaitforthesecond,youdon'tobservethegapb etweentrains,z.

However,wecouldmakesomeinferencesab outzb. Ifwenotethenumb erof
passengerswaitingwhenwearrive,wecanestimatetheelapsedtimesincethe
lasttrain,x. Thenweobservey. Ifweaddthep osteriordistributionofxto
theobservedy,wegetadistributionthatrepresentsourp osteriorb eliefab out
theobservedvalueofzb.

Wecanusethisdistributiontoup dateourb eliefsab outthedistributionofzb.
Finally,wecancomputetheinverseofBiasPmftogetfromthedistribution
ofzbtothedistributionofz.

Ileavethisanalysisasanexerciseforthereader. Onesuggestion:youshould
readChapter 15 rst. You canndthe outline of a solution in [http://](http://)
thinkbayes.com/redline.py. FormoreinformationseeSection0.3.

### 8.9 Exercises.

Exercise8.1ThisexerciseisfromMacKay,InformationTheory, Inference,
andLearningAlgorithms:

```
Unstableparticlesareemittedfromasourceanddecayatadis-
tancex,arealnumb erthathasanexp onentialprobabilitydistri-
butionwith[parameter]λ. Decayeventscanonlyb eobservedif
theyo ccurinawindowextendingfromx= 1cmtox= 20cm.
Ndecaysareobservedatlo cations{ 1. 5 , 2 , 3 , 4 , 5 , 12 }cm. Whatis
thep osteriordistributionofλ?
```
Youcandownloadasolutiontothisexercisefromhttp://thinkbayes.com/
decay.py.


94 Chapter8. ObserverBias


# Chapter 9

# Two Dimensions

### 9.1 Paintball

Paintballisasp ortinwhichcomp etingteamstrytosho oteachotherwith
gunsthatrepaint-lledp elletsthatbreakonimpact,leavingacolorfulmark
onthetarget. Itisusuallyplayedinan arenadecoratedwithbarriersand
otherob jectsthatcanb eusedascover.

Supp oseyouareplayingpaintballinanindo orarena 30 feetwideand 50 feet
long. Youarestandingnearoneofthe 30 fo otwalls,andyoususp ectthat
oneofyouropp onentshastakencovernearby.Alongthewall,youseeseveral
paintspatters,allthesamecolor,thatyouthinkyouropp onentredrecently.

Thespattersareat15,16,18,and 21 feet,measuredfromthelower-leftcorner
ofthero om.Basedonthesedata,wheredoyouthinkyouropp onentishiding?

Figure9.1showsadiagramofthearena. Usingthelower-leftcornerofthe
ro omastheorigin,Idenotetheunknownlo cationofthesho oterwithco ordi-
natesαandβ,oralphaandbeta. Thelo cationofaspatterislab eledx.The
angletheopp onentsho otsatisθortheta.

ThePaintball problem isa mo diedversionof theLighthouse problem, a
commonexampleofBayesiananalysis. Mynotationfollowsthepresentation
oftheprobleminD.S.Sivia's, DataAnalysis: a BayesianTutorial,Second
Edition(Oxford,2006).

Youcandownload theco deinthischapterfromhttp://thinkbayes.com/
paintball.py. FormoreinformationseeSection0.3.


96 Chapter9. TwoDimensions

```
α
```
```
β
θ
```
```
x
```
```
shooter
```
```
wall
```
```
Figure9.1:Diagramofthelayoutforthepaintballproblem.
```
### 9.2 Thesuite.

Togetstarted,weneedaSuitethatrepresentsasetofhyp othesesab outthe
lo cationoftheopp onent. Eachhyp othesisisapairofco ordinates:(alpha,
beta).

HereisthedenitionofthePaintballsuite:

class Paintball(thinkbayes.Suite, thinkbayes.Joint):

```
def __init__(self, alphas, betas, locations):
self.locations = locations
pairs = [(alpha, beta)
for alpha in alphas
for beta in betas]
thinkbayes.Suite.__init__(self, pairs)
```
PaintballinheritsfromSuite,whichwehaveseenb efore,andJoint,which
Iwillexplainso on.

alphasisthelistofp ossiblevaluesforalpha;betasisthelistofvaluesfor
beta.pairsisalistofall(alpha, beta)pairs.

locationsisalistofp ossiblelo cationsalongthewall;itisstoredforusein
Likelihood.

Thero omis 30 feetwideand 50 feetlong,sohere'stheco dethatcreatesthe
suite:

```
alphas = range(0, 31)
```

9.3. Trigonometry 97

0.0 (^01020) Distance 30 40 50
0.2
0.4
0.6
0.8
1.0
Prob
alpha
beta
Figure9.2: PosteriorCDFsforalphaandbeta,giventhedata.
betas = range(1, 51)
locations = range(0, 31)
suite = Paintball(alphas, betas, locations)
Thispriordistributionassumesthatalllo cationsinthero omareequallylikely.
Givenamapofthero om,wemightcho oseamoredetailedprior,butwe'll
startsimple.

### 9.3 Trigonometry

Nowwe needalikeliho o d function,whichmeanswehaveto gureoutthe
likeliho o dofhittinganysp otalongthewall,giventhelo cationoftheopp onent.

Asasimplemo del,imaginethattheopp onentislikearotatingturret,equally
likelytosho otinanydirection.Inthatcase,heismostlikelytohitthewall
atlo cationalpha,andlesslikelytohitthewallfarawayfromalpha.

Withalittletrigonometry,wecancomputetheprobabilityofhittinganysp ot
alongthewall. Imaginethatthe sho oterresashotat angleθ; thep ellet
wouldhitthewallatlo cationx,where

```
x−α=βtanθ
```

98 Chapter9. TwoDimensions

0.010 (^0510) Distance 15 20 25 30
0.015
0.020
0.025
0.030
0.035
0.040
0.045
0.050
0.055
Prob
beta = 10
beta = 20
beta = 40
Figure9.3: PMFoflo cationgivenalpha=10,forseveralvaluesofbeta.
Solvingthisequationforθyields
θ=tan−^1

#### (

```
x−α
β
```
#### )

Sogivenalo cationonthewall,wecanndθ.

Takingthederivativeoftherstequationwithresp ecttoθyields

```
dx
dθ
```
#### =

```
β
cos^2 θ
```
ThisderivativeiswhatI'llcallthestrangsp eed,whichisthesp eedofthe
targetlo cationalongthewallasθincreases.Theprobabilityofhittingagiven
p ointonthewallisinverselyrelatedtostrangsp eed.

Ifweknowtheco ordinatesofthesho oterandalo cationalongthewall,we
cancomputestrangsp eed:

def StrafingSpeed(alpha, beta, x):
theta = math.atan2(x - alpha, beta)
speed = beta / math.cos(theta)**2
return speed

alpha andbetaare theco ordinates of the sho oter; x isthe lo cation of a
spatter. Theresultisthederivativeofxwithresp ecttotheta.

Now wecancomputeaPmf that represents theprobability ofhitting any
lo cationonthewall.MakeLocationPmftakesalphaandbeta,theco ordinates
ofthesho oter,andlocations,alistofp ossiblevaluesofx.


9.4. Likeliho o d 99

def MakeLocationPmf(alpha, beta, locations):
pmf = thinkbayes.Pmf()
for x in locations:
prob = 1.0 / StrafingSpeed(alpha, beta, x)
pmf.Set(x, prob)
pmf.Normalize()
return pmf

MakeLocationPmfcomputestheprobabilityofhittingeachlo cation,whichis
inverselyrelatedtostrangsp eed.TheresultisaPmfoflo cationsandtheir
probabilities.

Figure9.3showsthePmfoflo cationwithalpha = 10andarangeofvalues
forbeta. Forallvaluesofb etathemostlikelyspatterlo cationisx = 10;as
betaincreases,sodo esthespreadofthePmf.

### 9.4 Likeliho o d

Nowall weneedisalikeliho o dfunction. WecanuseMakeLocationPmfto
computethelikeliho o dofanyvalueofx,giventheco ordinatesoftheopp onent.

```
def Likelihood(self, data, hypo):
alpha, beta = hypo
x = data
pmf = MakeLocationPmf(alpha, beta, self.locations)
like = pmf.Prob(x)
return like
```
Again,alphaandbetaarethehyp otheticalco ordinatesofthesho oter,andx
isthelo cationofanobservedspatter.

pmf containsthe probabilityof each lo cation, giventhe co ordinatesof the
sho oter.FromthisPmf,weselecttheprobabilityoftheobservedlo cation.

Andwe'redone. Toup datethesuite,wecanuseUpdateSet,whichisinherited
fromSuite.

suite.UpdateSet([15, 16, 18, 21])

Theresultisadistributionthatmapseach(alpha, beta)pairtoap osterior
probability.


100 Chapter9. TwoDimensions

### 9.5 Jointdistributions.

Wheneachvalueinadistributionisatupleofvariables,itiscalledajoint
distributionb ecauseitrepresentsthedistributionsofthevariablestogether,
thatisjointly.Ajointdistributioncontainsthedistributionsofthevariables,
aswellasinformationab outtherelationshipsamongthem.

Givenajointdistribution,wecancomputethedistributionsofeachvariable
indep endently,whicharecalledthemarginaldistributions.

thinkbayes.Jointprovidesametho dthatcomputesmarginaldistributions:

# class Joint:

```
def Marginal(self, i):
pmf = Pmf()
for vs, prob in self.Items():
pmf.Incr(vs[i], prob)
return pmf
```
i is the indexof the variable we want; inthis examplei=0 indicatesthe
distributionofalpha,andi=1indicatesthedistributionofbeta.

Here'stheco dethatextractsthemarginaldistributions:

```
marginal_alpha = suite.Marginal(0)
marginal_beta = suite.Marginal(1)
```
Figure9.2showstheresults(convertedtoCDFs).Themedianvalueforalpha
is18,nearthecenterof massoftheobservedspatters. Forbeta, themost
likelyvaluesareclosetothewall,butb eyond 10 feetthedistributionisalmost
uniform, whichindicatesthat thedatadonotdistinguish stronglyb etween
thesep ossiblelo cations.

Given the p osterior marginals, we can computecredibleintervals for each
co ordinateindep endently:

```
print 'alpha CI', marginal_alpha.CredibleInterval(50)
print 'beta CI', marginal_beta.CredibleInterval(50)
```
The50%credibleintervalsare(14, 21)foralphaand(5, 31)forbeta.So
thedataprovideevidencethatthesho oterisinthenearsideofthero om.But
itisnotstrongevidence.The90%credibleintervalscovermostofthero om!

### 9.6 Conditionaldistributions

Themarginaldistributionscontaininformationab outthevariablesindep en-
dently,buttheydonotcapturethedep endenceb etweenvariables,ifany.


9.6. Conditionaldistributions 101

0.00 (^0510) Distance 15 20 25 30
0.01
0.02
0.03
0.04
0.05
0.06
0.07
0.08
0.09
Prob
beta = 10
beta = 20
beta = 40
Figure9.4: Posteriordistributionsforalphaconditionedonseveralvaluesof
beta.
Onewaytovisualizedep endenceisbycomputingconditionaldistributions.
thinkbayes.Jointprovidesametho dthatdo esthat:
def Conditional(self, i, j, val):
pmf = Pmf()
for vs, prob in self.Items():
if vs[j] != val: continue
pmf.Incr(vs[i], prob)
pmf.Normalize()
return pmf
Again,iistheindexofthevariablewewant;jistheindexoftheconditioning
variable,andvalistheconditionalvalue.
Theresultisthedistributionoftheithvariableundertheconditionthatthe
jthvariableisval.
For example, the following co de computes the conditional distributions of
alphaforarangeofvaluesofbeta:
betas = [10, 20, 40]
for beta in betas:
cond = suite.Conditional(0, 1, beta)
Figure9.4showstheresults,whichwecouldfullydescrib easp osteriorcon-
ditionalmarginaldistributions. Whew!


102 Chapter9. TwoDimensions

(^00510) alpha 15 20 25 30
10
20
30
40
50
beta
25
50
75
Figure9.5: Credibleintervalsfortheco ordinatesoftheopp onent.
Ifthevariableswereindep endent,theconditionaldistributionswouldallb ethe
same.Sincetheyarealldierent,wecantellthevariablesaredep endent.For
example,ifweknow(somehow)thatbeta = 10,theconditionaldistribution
ofalphaisfairlynarrow.Forlargervaluesofbeta,thedistributionofalpha
iswider.

### 9.7 Credibleintervals

Anotherwaytovisualizethep osteriorjointdistributionistocomputecredible
intervals. Whenwelo okedatcredibleintervalsinSection3.5,Iskipp edovera
subtlep oint:foragivendistribution,therearemanyintervalswiththesame
levelofcredibility.Forexample,ifyouwanta50%credibleinterval,youcould
cho oseanysetofvalueswhoseprobabilityaddsupto50%.

Whenthevaluesareone-dimensional,itismostcommontocho osethecentral
credibleinterval;forexample,thecentral50%credibleintervalcontainsall
valuesb etweenthe25thand75thp ercentiles.

Inmultipledimensionsitislessobviouswhattherightcredibleintervalshould
b e. Theb estchoicemightdep endoncontext,butonecommonchoiceisthe
maximumlikeliho o dcredibleinterval,whichcontainsthemostlikelyvalues
thataddupto50%(orsomeotherp ercentage).

thinkbayes.Joint provides a metho dthat computes maximum likeliho o d
credibleintervals.

# class Joint:


9.7. Credibleintervals 103

```
def MaxLikeInterval(self, percentage=90):
interval = []
total = 0
```
```
t = [(prob, val) for val, prob in self.Items()]
t.sort(reverse=True)
```
```
for prob, val in t:
interval.append(val)
total += prob
if total >= percentage/100.0:
break
```
```
return interval
```
Therststepistomakealistofthevaluesinthesuite,sortedindescending
orderby probability. Next we traverse the list, adding each value to the
interval,untilthetotalprobabilityexceedspercentage. Theresultisalist
of values fromthe suite. Noticethat thisset of values isnot necessarily
contiguous.

Tovisualizetheintervals,Iwroteafunctionthatcolorseachvalueaccording
tohowmanyintervalsitapp earsin:

def MakeCrediblePlot(suite):
d = dict((pair, 0) for pair in suite.Values())

```
percentages = [75, 50, 25]
for p in percentages:
interval = suite.MaxLikeInterval(p)
for pair in interval:
d[pair] += 1
```
```
return d
```
disadictionarythat mapsfromeach valueinthe suiteto thenumb erof
intervalsitapp earsin. Thelo opcomputesintervalsforseveralp ercentages
andmo diesd.

Figure9.5showstheresult. The25%credibleintervalisthedarkestregion
neartheb ottomwall. Forhigherp ercentages,thecredibleintervalisbigger,
ofcourse,andskewedtowardtherightsideofthero om.


104 Chapter9. TwoDimensions

### 9.8 Discussion

ThischaptershowsthattheBayesianframeworkfromthepreviouschapters
can b e extendedto handle a two-dimensionalparameter space. The only
dierenceisthateachhyp othesisisrepresentedbyatupleofparameters.

I alsopresentedJoint,whichisaparentclassthatprovides metho dsthat
applytojointdistributions:Marginal,Conditional,andMakeLikeInterval.
Inob ject-orientedterms,Jointisamixin(seehttp://en.wikipedia.org/
wiki/Mixin).

Thereisalotofnewvo cabularyinthischapter,solet'sreview:

Jointdistribution:Adistribution thatrepresents all p ossiblevaluesin a
multidimensionalspace and their probabilities. The example inthis
chapterisatwo-dimensionalspacemadeupoftheco ordinatesalphaand
beta. Thejointdistributionrepresentstheprobabilityofeach(alpha,
beta)pair.

Marginaldistribution: Thedistributionofoneparameterinajointdistri-
bution,treatingthe otherparametersasunknown. Forexample, Fig-
ure9.2showsthedistributionsofalphaandbetaindep endently.

Conditionaldistribution: Thedistributionofoneparameterinajointdis-
tribution,conditionedononeormoreoftheotherparameters.Figure9.4
showsseveraldistributionsforalpha,conditionedondierentvaluesof
beta.

Giventhejointdistribution,youcancomputemarginalandconditionaldistri-
butions. Withenoughconditionaldistributions,youcouldre-createthejoint
distribution,atleastapproximately. Butgiventhemarginaldistributionsyou
cannotre-createthejointdistributionb ecauseyouhavelostinformationab out
thedep endenceb etweenvariables.

Iftherearenp ossiblevaluesforeachoftwoparameters,mostop erationsonthe
jointdistributiontaketimeprop ortionalton^2. Iftherearedparameters,run
timeisprop ortionaltond,whichquicklyb ecomesimpracticalasthenumb er
ofdimensionsincreases.

Ifyoucanpro cessamillionhyp othesesinareasonableamountoftime,you
could handletwodimensionswith 1000 valuesforeachparameter, orthree
dimensionswith 100 valueseach,orsixdimensionswith 10 valueseach.

Ifyouneedmoredimensions, ormorevaluesp erdimension,thereareopti-
mizationsyoucantry.IpresentanexampleinChapter15.


9.9. Exercises 105

Youcandownload theco deinthischapterfromhttp://thinkbayes.com/
paintball.py. FormoreinformationseeSection0.3.

### 9.9 Exercises.

Exercise9.1Inoursimplemo del,theopp onentisequallylikelytosho otin
anydirection.Asanexercise,let'sconsiderimprovementstothismo del.

Theanalysisinthischaptersuggeststhatasho oterismostlikelytohitthe
closestwall.Butinreality,iftheopp onentisclosetoawall,heisunlikelyto
sho otatthewallb ecauseheisunlikelytoseeatargetb etweenhimselfand
thewall.

Designanimprovedmo delthattakesthisb ehaviorintoaccount.Trytond
amo delthatismorerealistic,butnotto ocomplicated.


106 Chapter9. TwoDimensions


# Chapter 10

# Approximate Bayesian

# Computation

### 10.1 TheVariabilityHyp othesis

Ihaveasoftsp otforcrankscience.RecentlyIvisitedNorumb egaTower,which
isanenduringmonumenttothecrackp ottheoriesofEb enNortonHorsford,
inventorofdouble-actingbakingp owderandfakehistory.Butthat'snotwhat
thischapterisab out.

Thischapterisab outtheVariabilityHyp othesis,which

```
"originatedintheearlynineteenthcenturywithJohannMeckel,
whoarguedthatmaleshaveagreaterrangeofabilitythanfemales,
esp eciallyinintelligence. Inotherwords,heb elievedthat most
geniusesandmostmentallyretardedp eoplearemen. Becausehe
considered malesto b e the 'sup erioranimal,' Meckel concluded
thatfemales'lackofvariationwasasignofinferiority."
From http://en.wikipedia.org/wiki/Variability_
hypothesis.
```
Iparticularlylikethat lastpart,b ecauseIsusp ectthat ifitturnsoutthat
womenareactuallymorevariable,Meckelwouldtakethatasasignofinferi-
ority,to o.Anyway,youwillnotb esurprisedtohearthattheevidenceforthe
VariabilityHyp othesisisweak.

Nevertheless,itcameupinmyclassrecentlywhenwelo okedatdatafromthe
CDC'sBehavioralRiskFactorSurveillanceSystem(BRFSS),sp ecicallythe
self-rep ortedheightsofadultAmericanmenandwomen.Thedatasetincludes
resp onsesfrom 154407 menand 254722 women.Here'swhatwefound:


108 Chapter10. ApproximateBayesianComputation

```
 Theaverageheightformenis 178 cm;theaverageheightforwomenis
163 cm. Somenaretaller,onaverage.Nosurprisethere.
```
```
 Formenthestandarddeviationis7.7cm;forwomenitis7.3cm.Soin
absoluteterms,men'sheightsaremorevariable.
```
```
 Buttocomparevariabilityb etweengroups,itismoremeaningfultouse
theco ecientofvariation(CV),whichisthestandarddeviationdivided
bythemean.Itisadimensionlessmeasureofvariabilityrelativetoscale.
FormenCVis0.0433;forwomenitis0.0444.
```
That'sveryclose, sowecouldconcludethatthisdatasetprovidesweakevi-
denceagainsttheVariabilityHyp othesis. ButwecanuseBayesianmetho ds
tomakethatconclusionmoreprecise. Andansweringthisquestiongivesme
achancetodemonstratesometechniquesforworkingwithlargedatasets.

Iwillpro ceedinafewsteps:

1. We'll start with the simplest implementation, but it only works for
    datasetssmallerthan 1000 values.
2. Bycomputingprobabilitiesunderalogtransform, wecanscaleupto
    thefullsizeofthedataset,butthecomputationgetsslow.
3. Finally, wesp eed thingsup substantiallywithApproximateBayesian
    Computation,alsoknownasABC.

You candownloadthe co deinthischapterfromhttp://thinkbayes.com/
variability.py.FormoreinformationseeSection0.3.

### 10.2 Meanandstandarddeviation

InChapter 9 weestimatedtwoparameterssimultaneouslyusingajointdistri-
bution. Inthischapterweusethesamemetho dtoestimatetheparametersof
aGaussiandistribution: themean,mu,andthestandarddeviation,sigma.

Forthisproblem,IdeneaSuitecalledHeightthatrepresentsamapfrom
eachmu, sigmapairtoitsprobability:

class Height(thinkbayes.Suite, thinkbayes.Joint):

```
def __init__(self, mus, sigmas):
pairs = [(mu, sigma)
```

10.2. Meanandstandarddeviation 109

```
for mu in mus
for sigma in sigmas]
```
```
thinkbayes.Suite.__init__(self, pairs)
```
musisasequenceofp ossiblevaluesformu;sigmasisasequenceofvaluesfor
sigma. Thepriordistributionisuniformoverallmu, sigmapairs.

Thelikeliho o dfunctioniseasy.Givenhyp otheticalvaluesofmuandsigma,we
computethelikeliho o dofaparticularvalue,x.That'swhatEvalGaussianPdf
do es,soallwehavetodoisuseit:

# class Height

```
def Likelihood(self, data, hypo):
x = data
mu, sigma = hypo
like = thinkbayes.EvalGaussianPdf(x, mu, sigma)
return like
```
Ifyouhavestudiedstatisticsfromamathematicalp ersp ective,youknowthat
whenyouevaluateaPDF,yougetaprobabilitydensity. Inordertogeta
probability,youhavetointegrateprobabilitydensitiesoversomerange.

Butforourpurp oses,we don'tneed aprobability;we justneed something
prop ortionaltotheprobabilitywewant. Aprobabilitydensitydo esthatjob
nicely.

Thehardestpartofthisproblemturnsouttob echo osingappropriateranges
formusandsigmas.Iftherangeisto osmall,weomitsomep ossibilitieswith
non-negligibleprobabilityandgetthewronganswer. Iftherangeisto obig,
wegettherightanswer,butwastecomputationalp ower.

Sothisisanopp ortunitytouseclassicalestimationtomakeBayesiantech-
niquesmoreecient. Sp ecically,we canuse classicalestimatorstonda
likelylo cationformu andsigma, andusethestandarderrors ofthoseesti-
matestocho osealikelyspread.

Ifthetrueparametersofthedistributionareμandσ,andwetakeasample
ofnvalues,anestimatorofμisthesamplemean,m.

Andanestimatorofσisthesamplestandardvariance,s.

Thestandarderroroftheestimatedμiss/

#### √

nandthestandarderrorofthe
estimatedσiss/

#### √

```
2(n−1).
```
Here'stheco detocomputeallthat:


110 Chapter10. ApproximateBayesianComputation

def FindPriorRanges(xs, num_points, num_stderrs=3.0):

```
# compute m and s
n = len(xs)
m = numpy.mean(xs)
s = numpy.std(xs)
```
```
# compute ranges for m and s
stderr_m = s / math.sqrt(n)
mus = MakeRange(m, stderr_m, num_stderrs)
```
```
stderr_s = s / math.sqrt(2 * (n-1))
sigmas = MakeRange(s, stderr_s, num_stderrs)
```
```
return mus, sigmas
```
xsisthedataset. num_pointsisthedesirednumb erofvaluesintherange.
num_stderrsisthewidthoftherangeoneachsideoftheestimate,innumb er
ofstandarderrors.

Thereturnvalueisapairofsequences,musandsigmas.

Here'sMakeRange:

def MakeRange(estimate, stderr, num_stderrs):
spread = stderr * num_stderrs
array = numpy.linspace(estimate-spread,
estimate+spread,
num_points)
return array

numpy.linspace makes an array of equally spaced elements b etween
estimate-spreadandestimate+spread,includingb oth.

### 10.3 Up date.

Finallyhere'stheco detomakeandup datethesuite:

```
mus, sigmas = FindPriorRanges(xs, num_points)
suite = Height(mus, sigmas)
suite.UpdateSet(xs)
print suite.MaximumLikelihood()
```
Thispro cessmightseemb ogus,b ecauseweusethedatatocho osetherange
of thepriordistribution,andthenusethedataagaintodotheup date. In
general,usingthesamedatatwiceis,infact,b ogus.


10.4. Thep osteriordistributionofCV 111

Butinthiscaseitisok. Really. Weusethedatatocho osetherangeforthe
prior,butonlytoavoidcomputingalotofprobabilitiesthatwouldhaveb een
verysmallanyway. Withnum_stderrs=4, therangeisbigenoughtocover
allvalueswithnon-negligiblelikeliho o d. Afterthat,makingitbiggerhasno
eectontheresults.

Ineect,thepriorisuniformoverallvaluesofmuandsigma,butforcompu-
tationaleciencyweignoreallthevaluesthatdon'tmatter.

### 10.4 Thep osteriordistributionofCV.

Oncewehavethep osteriorjointdistributionofmuandsigma,wecancompute
thedistributionofCVformenandwomen,andthentheprobabilitythatone
exceedstheother.

TocomputethedistributionofCV,weenumeratepairsofmuandsigma:

def CoefVariation(suite):
pmf = thinkbayes.Pmf()
for (mu, sigma), p in suite.Items():
pmf.Incr(sigma/mu, p)
return pmf

Thenweusethinkbayes.PmfProbGreatertocomputetheprobabilitythat
menaremorevariable.

Theanalysisitselfissimple,buttherearetwomore issueswe havetodeal
with:

1. Asthesizeofthedatasetincreases,werunintoaseriesofcomputational
    problemsduetothelimitationsofoating-p ointarithmetic.
2. Thedatasetcontainsanumb erof extremevaluesthatarealmostcer-
    tainlyerrors.Wewillneedtomaketheestimationpro cessrobustinthe
    presenceoftheseoutliers.

Thefollowingsectionsexplaintheseproblemsandtheirsolutions.

### 10.5 Underow

Ifweselecttherst 100 valuesfromtheBRFSSdatasetandruntheanalysis
Ijustdescrib ed,itrunswithouterrorsandwegetp osteriordistributionsthat
lo okreasonable.


112 Chapter10. ApproximateBayesianComputation

Ifweselecttherst 1000 valuesandruntheprogramagain,wegetanerror
inPmf.Normalize:

ValueError: total probability is zero.

Theproblemisthatweareusingprobabilitydensitiestocomputelikeliho o ds,
anddensitiesfromcontinuousdistributionstendtob esmall.Andifyoutake
1000 smallvaluesandmultiplythemtogether,theresultisverysmall.Inthis
caseitissosmallitcan'tb erepresentedbyaoating-p ointnumb er,soitgets
roundeddowntozero,whichiscalledunderow. Andifallprobabilitiesin
thedistributionare0,it'snotadistributionanymore.

Ap ossiblesolutionistorenormalizethePmfaftereachup date,oraftereach
batchof100.Thatwouldwork,butitwouldb eslow.

Ab etteralternativeisto computelikeliho o dsunderalogtransform. That
way,insteadofmultiplyingsmallvalues,wecanadduploglikeliho o ds. Pmf
providesmetho dsLog,LogUpdateSetandExptomakethispro cesseasy.

LogcomputesthelogoftheprobabilitiesinaPmf:

# class Pmf

```
def Log(self):
m = self.MaxLike()
for x, p in self.d.iteritems():
if p:
self.Set(x, math.log(p/m))
else:
self.Remove(x)
```
Beforeapplying thelogtransformLog usesMaxLike to ndm, the highest
probabilityinthePmf.Itdivideallprobabilitiesbym,sothehighestproba-
bilitygetsnormalizedto1,whichyieldsalogof0.Theotherlogprobabilities
areallnegative. IfthereareanyvaluesinthePmfwithprobability0,they
areremoved.

While thePmf isundera logtransform,we can't useUpdate, UpdateSet,
or Normalize. Theresultwould b e nonsensical;if youtry, Pmf raisesan
exception.Instead,wehavetouseLogUpdateandLogUpdateSet.

Here'stheimplementationofLogUpdateSet:

# class Suite

```
def LogUpdateSet(self, dataset):
for data in dataset:
self.LogUpdate(data)
```

10.6. Log-likeliho o d 113

LogUpdateSetlo opsthroughthedataandcallsLogUpdate:

# class Suite

```
def LogUpdate(self, data):
for hypo in self.Values():
like = self.LogLikelihood(data, hypo)
self.Incr(hypo, like)
```
LogUpdateisjustlikeUpdateexceptthatitcallsLogLikelihoodinsteadof
Likelihood,andIncrinsteadofMult.

Usinglog-likeliho o dsavoidstheproblemwithunderow,butwhilethePmfis
underthelogtransform,there'snotmuchwecandowithit. Wehavetouse
Exptoinvertthetransform:

# class Pmf

```
def Exp(self):
m = self.MaxLike()
for x, p in self.d.iteritems():
self.Set(x, math.exp(p-m))
```
Ifthe log-likeliho o ds are largenegative numb ers, the resulting likeliho o ds
mightunderow. SoExpndsthemaximumlog-likeliho o d,m,andshiftsall
thelikeliho o dsupbym.Theresultingdistributionhasamaximumlikeliho o d
of1.Thispro cessinvertsthelogtransformwithminimallossofprecision.

### 10.6 Log-likeliho o d

NowallweneedisLogLikelihood.

# class Height

```
def LogLikelihood(self, data, hypo):
x = data
mu, sigma = hypo
loglike = scipy.stats.norm.logpdf(x, mu, sigma)
return loglike
```
norm.logpdfcomputesthelog-likeliho o doftheGaussianPDF.

Here'swhatthewholeup datepro cesslo okslike:

```
suite.Log()
suite.LogUpdateSet(xs)
```

114 Chapter10. ApproximateBayesianComputation

```
suite.Exp()
suite.Normalize()
```
To review, Log puts the suite under alog transform. LogUpdateSetcalls
LogUpdate,whichcallsLogLikelihood. LogUpdateusesPmf.Incr,b ecause
addingalog-likeliho o disthesameasmultiplyingbyalikeliho o d.

Aftertheup date,thelog-likeliho o dsarelargenegativenumb ers,soExpshifts
themupb eforeinvertingthetransform,whichishowweavoidunderow.

Oncethesuiteistransformedback,theprobabilitiesarelinearagain,which
meansnotlogarithmic,sowecanuseNormalizeagain.

Usingthisalgorithm,wecanpro cesstheentiredatasetwithoutunderow,but
itisstillslow.Onmycomputeritmighttakeanhour.Wecandob etter.

### 10.7 Alittleoptimization

Thissection usesmathandcomputational optimizationto sp eedthingsup
by afactorof 100. But thefollowingsection presentsan algorithmthat is
evenfaster.Soifyouwanttogetrighttothego o dstu,feelfreetoskipthis
section.

Suite.LogUpdateSetcallsLogUpdateonceforeachdatap oint.Wecansp eed
itupbycomputingthelog-likeliho o doftheentiredatasetatonce.

We'llstartwiththeGaussianPDF:

```
1
σ
```
#### √

```
2 π
```
```
exp
```
#### [

#### −

#### 1

#### 2

#### (

```
x−μ
σ
```
#### ) 2 ]

andcomputethelog(droppingtheconstantterm):

```
−logσ−
```
#### 1

#### 2

#### (

```
x−μ
σ
```
#### ) 2

Givenasequenceofvalues,xi,thetotallog-likeliho o dis

```
∑
```
```
i
```
```
−logσ−
```
#### 1

#### 2

#### (

```
xi−μ
σ
```
#### ) 2

Pullingoutthetermsthatdon'tdep endoni,weget

```
−nlogσ−
```
#### 1

```
2 σ^2
```
#### ∑

```
i
```
```
(xi−μ)^2
```

10.7. Alittleoptimization 115

whichwecantranslateintoPython:

# class Height

```
def LogUpdateSetFast(self, data):
xs = tuple(data)
n = len(xs)
```
```
for hypo in self.Values():
mu, sigma = hypo
total = Summation(xs, mu)
loglike = -n * math.log(sigma) - total / 2 / sigma**2
self.Incr(hypo, loglike)
```
Byitself,thiswouldb easmallimprovement,butitcreatesanopp ortunity
forabiggerone. Noticethatthesummationonlydep endsonmu,notsigma,
soweonlyhavetocomputeitonceforeachvalueofmu.

Toavoidrecomputing,Ifactoroutafunctionthatcomputesthesummation,
andmemoizeitsoitstorespreviouslycomputedresultsinadictionary(see
[http://en.wikipedia.org/wiki/Memoization):](http://en.wikipedia.org/wiki/Memoization):)

def Summation(xs, mu, cache={}):
try:
return cache[xs, mu]
except KeyError:
ds = [(x-mu)**2 for x in xs]
total = sum(ds)
cache[xs, mu] = total
return total

cachestorespreviouslycomputedsums. Thetrystatementreturnsaresult
fromthecacheifp ossible;otherwiseitcomputesthesummation,thencaches
andreturnstheresult.

Theonlycatchisthatwecan'tusealistasakeyinthecache,b ecauseitis
notahashabletyp e. That'swhyLogUpdateSetFastconvertsthedatasetto
atuple.

Thisoptimizationsp eedsupthecomputationbyab outafactorof100,pro-
cessingtheentiredataset(154 407 men and 254722 women)inlessthana
minuteonmynot-very-fastcomputer.


116 Chapter10. ApproximateBayesianComputation

### 10.8 ABC

But mayb e youdon't havethat kind of time. Inthat case, Approximate
BayesianComputation(ABC)mightb ethewaytogo.Themotivationb ehind
ABCisthatthelikeliho o dofanyparticulardatasetis:

1. Verysmall,esp eciallyforlargedatasets,whichiswhywehadtousethe
    logtransform,
2. Exp ensivetocompute,whichiswhywehadtodosomuchoptimization,
    and
3. Notreallywhatwewantanyway.

Wedon'treallycareab outthelikeliho o dofseeingtheexactdatasetwesaw.
Esp eciallyforcontinuousvariables,wecareab outthelikeliho o dofseeingany
datasetliketheonewesaw.

Forexample,intheEuroproblem,wedon'tcareab outtheorderofthecoin
ips,onlythetotalnumb erofheadsandtails.Andinthelo comotiveproblem,
we don'tcareab outwhichparticular trainswereseen, onlythenumb erof
trainsandthemaximumoftheserialnumb ers.

Similarly,intheBRFSSsample,wedon'treallywanttoknowtheprobability
of seeingoneparticularset ofvalues(esp eciallysincetherearehundredsof
thousandsofthem). Itismorerelevanttoask,Ifwesample100,000p eople
fromap opulationwithhyp otheticalvaluesofμandσ, whatwouldb ethe
chanceofcollectingasamplewiththeobservedmeanandvariance?

ForsamplesfromaGaussian distribution,wecananswerthisquestione-
cientlyb ecausewecanndthedistributionofthesamplestatisticsanalytically.
Infact,wealreadydiditwhenwecomputedtherangeoftheprior.

IfyoudrawnvaluesfromaGaussiandistributionwithparametersμandσ,
and computethesample mean,m, the distributionof m isGaussian with
parametersμandσ/

#### √

```
n.
```
Similarly, thedistributionof thesample standarddeviation, s, isGaussian
withparametersσandσ/

#### √

```
2(n−1).
```
Wecanusethesesampledistributionstocomputethelikeliho o dofthesample
statistics,mands,givenhyp otheticalvaluesforμandσ.Here'sanewversion
ofLogUpdateSetthatdo esit:


10.9. Robustestimation 117

```
def LogUpdateSetABC(self, data):
xs = data
n = len(xs)
```
```
# compute sample statistics
m = numpy.mean(xs)
s = numpy.std(xs)
```
```
for hypo in sorted(self.Values()):
mu, sigma = hypo
```
```
# compute log likelihood of m, given hypo
stderr_m = sigma / math.sqrt(n)
loglike = EvalGaussianLogPdf(m, mu, stderr_m)
```
```
#compute log likelihood of s, given hypo
stderr_s = sigma / math.sqrt(2 * (n-1))
loglike += EvalGaussianLogPdf(s, sigma, stderr_s)
```
```
self.Incr(hypo, loglike)
```
Onmycomputerthisfunctionpro cessestheentiredatasetinab outasecond,
andtheresultagreeswiththeexactresultwithab out 5 digitsofprecision.

### 10.9 Robustestimation.

Wearealmostreadytolo okatresults,butwehaveonemoreproblemtodeal
with.Thereareanumb erofoutliersinthisdatasetthatarealmostcertainly
errors. Forexample, therearethreeadultswithrep ortedheightof 61 cm,
whichwouldplacethemamongtheshortestlivingadultsintheworld.Atthe
otherend,therearefourwomenwithrep ortedheight 229 cm,justshortof
thetallestwomenintheworld.

Itisnot imp ossiblethat these valuesarecorrect, butit isunlikely, which
makesithardtoknowhowtodealwiththem. Andwehavetogetitright,
b ecausetheseextremevalueshaveadisprop ortionateeectontheestimated
variability.

BecauseABCisbasedonsummarystatistics,ratherthantheentiredataset,
wecanmakeitmorerobustbycho osingsummarystatisticsthatarerobustin
thepresenceofoutliers. Forexample,ratherthanusethesamplemeanand


118 Chapter10. ApproximateBayesianComputation

```
7.28 178.46 178.48Mean height (cm)178.50 178.52 178.54
```
```
7.29
```
```
7.30
```
```
7.31
```
```
7.32
```
```
7.33
```
```
7.34
```
```
7.35
```
```
Stddev (cm)
```
```
0.001
```
```
0.002 0.003 0.002
```
```
0.0050.004
0.006
```
```
Posterior joint distribution
```
Figure 10.1: Contour plot of the p osterior joint distributionof mean and
standarddeviationofheightformenintheU.S.

```
163.46163.47163.48Mean height (cm)163.49163.50163.51163.52163.53
```
```
6.99
```
```
7.00
```
```
7.01
```
```
7.02
```
```
7.03
```
```
7.04
```
```
Stddev (cm)
```
```
0.001
```
```
0.002 0.003 0.002
```
```
0.0050.004
0.006
```
```
Posterior joint distribution
```
Figure 10.2: Contour plot of the p osterior joint distributionof mean and
standarddeviationofheightforwomenintheU.S.


10.9. Robustestimation 119

standarddeviation,wecouldusethemedianandinter-quartilerange(IQR),
whichisthedierenceb etweenthe25thand75thp ercentiles.

Moregenerally,wecouldcomputeaninter-p ercentilerange(IPR)thatspans
anygivenfractionofthedistribution,p:

def MedianIPR(xs, p):
cdf = thinkbayes.MakeCdfFromList(xs)
median = cdf.Percentile(50)

```
alpha = (1-p) / 2
ipr = cdf.Value(1-alpha) - cdf.Value(alpha)
return median, ipr
```
xsisasequenceofvalues. pisthedesiredrange;forexample,p=0.5yields
theinter-quartilerange.

MedianIPRworksbycomputingtheCDFofxs,thenextractingthemedian
andthedierenceb etweentwop ercentiles.

WecanconvertfromiprtoanestimateofsigmausingtheGaussian CDF
to computethe fraction of the distributioncovered by agiven numb erof
standarddeviations.Forexample,itisawell-knownruleofthumbthat68%
ofaGaussiandistributionfallswithinonestandarddeviationof themean,
whichleaves16%ineachtail.Ifwecomputetherangeb etweenthe16thand
84thp ercentiles,weexp ecttheresulttob e2 * sigma. Sowecanestimate
sigmabycomputingthe68%IPRanddividingby2.

Moregenerallywe coulduseanynumb erof sigmas. MedianSp erformsthe
moregeneralversionofthiscomputation:

def MedianS(xs, num_sigmas):
half_p = thinkbayes.StandardGaussianCdf(num_sigmas) - 0.5

```
median, ipr = MedianIPR(xs, half_p * 2)
s = ipr / 2 / num_sigmas
```
```
return median, s
```
Again,xsisthesequenceofvalues;num_sigmasisthenumb erofstandardde-
viationstheresultsshouldb ebasedon.Theresultismedian,whichestimates
μ,ands,whichestimatesσ.

Finally,inLogUpdateSetABCwecanreplacethesamplemeanandstandard
deviationwithmedianands.Andthatprettymuchdo esit.

Itmightseemo ddthatweareusingobservedp ercentilestoestimateμandσ,
butitisanexampleoftheexibilityoftheBayesianapproach.Ineectweare


120 Chapter10. ApproximateBayesianComputation

```
0.00.0405 0.0410 0.0415Coefficient of variation0.0420 0.0425 0.0430 0.0435
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
Probability
```
```
male
female
```
Figure10.3:PosteriordistributionsofCVformenandwomen,basedonrobust
estimators.

asking,Givenhyp otheticalvaluesforμandσ,andasamplingpro cessthat
hassomechanceofintro ducingerrors,whatisthelikeliho o dofgeneratinga
givensetofsamplestatistics?

We arefreeto cho oseany sample statisticswe like,up to ap oint: μ and
σdeterminethelo cationandspreadofadistribution,soweneedtocho ose
statisticsthatcapturethosecharacteristics.Forexample,ifwechosethe49th
and51stp ercentiles,wewouldgetverylittleinformationab outspread,soit
wouldleavetheestimateofσrelativelyunconstrainedbythedata. Allvalues
of sigmawould havenearlythe same likeliho o dof pro ducing theobserved
values,sothep osteriordistributionofsigmawouldlo okalotliketheprior.

### 10.10 Whoismorevariable?

Finallywearereadytoanswerthequestionwestartedwith:istheco ecient
ofvariationgreaterformenthanforwomen?

UsingABCbasedonthemedianandIPRwithnum_sigmas=1,Icomputed
p osteriorjoint distributionsformuandsigma. Figures10.1and 10.2show
theresultsasacontourplotwithmuonthex-axis,sigmaonthey-axis,and
probabilityonthez-axis.

Foreachjointdistribution,Icomputedthep osteriordistributionofCV.Fig-
ure10.3showsthesedistributionsformenandwomen.Themeanformenis
0.0410;forwomenitis0.0429.Sincethereisnooverlapb etweenthedistribu-


10.11. Discussion 121

tions,weconcludewithnearcertaintythatwomenaremorevariableinheight
thanmen.

So is that the end of the Variability Hyp othesis? Sadly, no. It turns
out that this result dep ends on the choice of the inter-p ercentile range.
Withnum_sigmas=1, we concludethat women aremore variable, butwith
num_sigmas=2weconcludewithequalcondencethatmenaremorevariable.

Thereasonforthedierenceisthattherearemoremenofshortstature,and
theirdistancefromthemeanisgreater.

SoourevaluationoftheVariabilityHyp othesisdep endsontheinterpretation
ofvariability. Withnum_sigmas=1wefo cusonp eoplenearthemean. As
weincreasenum_sigmas,wegivemoreweighttotheextremes.

Todecidewhichemphasisisappropriate,wewouldneedamoreprecisestate-
mentofthehyp othesis.Asitis,theVariabilityHyp othesismayb eto ovague
toevaluate.

Nevertheless,ithelp ed me demonstrateseveralnew ideas and, I hop eyou
agree,itmakesaninterestingexample.

### 10.11 Discussion

TherearetwowaysyoumightthinkofABC.Oneinterpretationisthatitis,
asthenamesuggests, anapproximationthatisfasterto computethanthe
exactvalue.

Butrememb erthatBayesiananalysisisalwaysbasedonmo delingdecisions,
whichimpliesthatthereisnoexact solution. Foranyinterestingphysical
systemtherearemanyp ossiblemo dels,andeachmo delyieldsdierentresults.
Tointerprettheresults,wehavetoevaluatethemo dels.

SoanotherinterpretationofABCisthat itrepresentsanalternativemo del
ofthe likeliho o d. When we computep(D|H), we areasking Whatisthe
likeliho o dofthedataunderagivenhyp othesis?

Forlargedatasets,thelikeliho o dofthedataisverysmall,whichisahintthat
wemightnotb easkingtherightquestion. Whatwereallywanttoknowis
thelikeliho o dofanyoutcomelikethedata,wherethedenitionof like is
yetanothermo delingdecision.

Theunderlyingideaof ABCisthattwodatasetsarealikeiftheyyieldthe
samesummarystatistics.Butinsomecases,liketheexampleinthischapter,
itisnotobviouswhichsummarystatisticstocho ose.


122 Chapter10. ApproximateBayesianComputation

You candownloadthe co deinthischapterfromhttp://thinkbayes.com/
variability.py.FormoreinformationseeSection0.3.

### 10.12 Exercises.

Exercise10.1Aneectsizeisastatisticintendedtomeasurethedierence
b etweentwogroups(seehttp://en.wikipedia.org/wiki/Effect_size).

Forexample, wecouldusedatafromtheBRFSStoestimatethedierence
inheightb etweenmenandwomen. By samplingvaluesfromthep osterior
distributionsofμandσ,wecouldgeneratethep osteriordistributionofthis
dierence.

But itmightb eb ettertouseadimensionlessmeasureof eectsize,rather
thanadierencemeasuredincm.Oneoptionistousedividethroughbythe
standarddeviation(similartowhatwedidwiththeco ecientofvariation).

IftheparametersforGroup 1 are(μ 1 ,σ 1 ),andtheparametersforGroup 2 are
(μ 2 ,σ 2 ),thedimensionlesseectsizeis

```
μ 1 −μ 2
(σ 1 +σ 2 )/ 2
```
Writeafunctionthattakesjointdistributionsofmuandsigmafortwogroups
andreturnsthep osteriordistributionofeectsize.

Hint: ifenumeratingallpairsfromthetwodistributionstakesto olong,con-
siderrandomsampling.


# Chapter 11

# Hypothesis Testing

### 11.1 BacktotheEuroproblem

InSection 4.1 I presenteda problemfrom MacKay's Information Theory,
Inference,andLearningAlgorithms:

```
Astatisticalstatementapp earedinTheGuardian"onFridayJan-
uary4,2002:
Whenspunonedge 250 times,aBelgianone-eurocoin
cameupheads 140 times andtails110. `Itlo oksvery
suspicioustome,'saidBarryBlight,astatisticslecturer
attheLondonScho olof Economics. `Ifthe coinwere
unbiased,thechance ofgettingaresultasextremeas
thatwouldb elessthan7%.'
Butdothesedatagiveevidencethatthecoinisbiasedratherthan
fair?
```
Weestimatedtheprobabilitythatthecoinwouldlandfaceup,butwedidn't
reallyanswerMacKay'squestion: Dothedatagiveevidencethatthecoinis
biased?

InChapter 4 Iprop osedthatdataareinfavorofahyp othesisifthedataare
morelikelyunderthehyp othesisthanunderthealternativeor,equivalently,
iftheBayesfactorisgreaterthan1.

IntheEuroexample,wehavetwohyp othesestoconsider: I'lluseF forthe
hyp othesisthatthecoinisfairandBforthehyp othesisthatitisbiased.

Ifthecoinisfair,itiseasytocomputethelikeliho o dofthedata,p(D|F). In
fact,wealreadywrotethefunctionthatdo esit.


124 Chapter11. Hyp othesisTesting

```
def Likelihood(self, data, hypo):
x = hypo / 100.0
head, tails = data
like = x**heads * (1-x)**tails
return like
```
TouseitwecancreateaEurosuiteandinvokeLikelihood:

```
suite = Euro()
likelihood = suite.Likelihood(data, 50)
```
p(D|F)is 5. 5 · 10 −^76 ,whichdo esn'ttellusmuchexceptthattheprobability
ofseeinganyparticulardatasetisverysmall.Ittakestwolikeliho o dstomake
aratio,sowealsohavetocomputep(D|B).

Itisnotobvioushowtocomputethelikeliho o dofB,b ecauseit'snotobvious
whatbiasedmeans.

Onep ossibilityistocheatandlo okatthedatab eforewedenethehyp othesis.
Inthatcasewewouldsaythatbiasedmeansthattheprobabilityofheadsis
140/250.

```
actual_percent = 100.0 * 140 / 250
likelihood = suite.Likelihood(data, actual_percent)
```
ThisversionofBIcallB_cheat;thelikeliho o dofb_cheatis 34 · 10 −^76 and
thelikeliho o dratiois6.1.Sowewouldsaythatthedataareevidenceinfavor
ofthisversionofB.

Butusingthedatatoformulatethehyp othesisisobviouslyb ogus. Bythat
denition, anydatasetwouldb eevidenceinfavorofB,unlesstheobserved
p ercentageofheadsisexactly50%.

### 11.2 Makingafaircomparison.

Tomakealegitimatecomparison,wehavetodeneBwithoutlo okingatthe
data. Solet'stryadierentdenition. Ifyouinsp ectaBelgianEurocoin,
youmightnoticethattheheadssideismoreprominentthanthetailsside.
Youmightexp ecttheshap etohavesomeeectonx,butb eunsurewhether
itmakesheadsmoreorlesslikely. SoyoumightsayIthinkthecoinisbiased
sothatxiseither0.6or0.4,butIamnotsurewhich.

Wecanthinkofthisversion,whichI'llcallB_twoasahyp othesismadeupof
twosub-hyp otheses. Wecancomputethelikeliho o dforeachsub-hyp othesis
andthencomputetheaveragelikeliho o d.


11.2. Makingafaircomparison 125

```
like40 = suite.Likelihood(data, 40)
like60 = suite.Likelihood(data, 60)
likelihood = 0.5 * like40 + 0.5 * like60
```
Thelikeliho o dratio(orBayesfactor)forb_twois1.3,whichmeansthedata
provideweakevidenceinfavorofb_two.

Moregenerally,supp oseyoususp ectthatthecoinisbiased,butyouhaveno
clueab outthevalueofx. InthatcaseyoumightbuildaSuite,whichIcall
b_uniform,torepresentsub-hyp othesesfrom 0 to100.

```
b_uniform = Euro(xrange(0, 101))
b_uniform.Remove(50)
b_uniform.Normalize()
```
Iinitializeb_uniformwithvaluesfrom 0 to100.Iremovedthesub-hyp othesis
thatxis50%,b ecauseifxis50%thecoinisfair,butithasalmostnoeect
ontheresultwhetheryouremoveitornot.

Tocomputethe likeliho o dofb_uniform wecomputethelikeliho o d ofeach
sub-hyp othesisandaccumulateaweightedaverage.

def SuiteLikelihood(suite, data):
total = 0
for hypo, prob in suite.Items():
like = suite.Likelihood(data, hypo)
total += prob * like
return total

Thelikeliho o d ratioforb_uniform is0.47, whichmeansthatthe dataare
weakevidenceagainstb_uniform,comparedtoF.

Ifyou think ab outthe computation p erformed by SuiteLikelihood, you
mightnoticethatitissimilartoanup date. Torefreshyourmemory,here's
theUpdatefunction:

```
def Update(self, data):
for hypo in self.Values():
like = self.Likelihood(data, hypo)
self.Mult(hypo, like)
return self.Normalize()
```
Andhere'sNormalize:

```
def Normalize(self):
total = self.Total()
```
```
factor = 1.0 / total
for x in self.d:
```

126 Chapter11. Hyp othesisTesting

```
self.d[x] *= factor
```
```
return total
```
ThereturnvaluefromNormalizeisthetotaloftheprobabilitiesintheSuite,
whichistheaverageofthelikeliho o dsforthesub-hyp otheses,weightedbythe
priorprobabilities. AndUpdatepasses thisvaluealong,soinsteadof using
SuiteLikelihood,wecouldcomputethelikeliho o dofb_uniformlikethis:

```
likelihood = b_uniform.Update(data)
```
### 11.3 Thetriangleprior

In Chapter 4 we also considered a triangle-shap ed prior that gives higher
probabilityto valuesofxnear50%. Ifwethinkof thisprioras asuiteof
sub-hyp otheses,wecancomputeitslikeliho o dlikethis:

```
b_triangle = TrianglePrior()
likelihood = b_triangle.Update(data)
```
Thelikeliho o dratioforb_triangleis0.84,comparedtoF,soagainwewould
saythatthedataareweakevidenceagainstB.

Thefollowingtableshowsthepriorswehaveconsidered,thelikeliho o dofeach,
andthelikeliho o dratio(orBayesfactor)relativetoF.

```
Hyp othesis Likeliho o d Bayes
× 10 −^76 Factor
F 5.5 
B_cheat 34 6.1
B_two 7.4 1.3
B_uniform 2.6 0.47
B_triangle 4.6 0.84
```
Dep endingon whichdenitionwecho ose, the datamightprovideevidence
fororagainstthehyp othesisthatthecoinisbiased,butineithercaseitis
relativelyweakevidence.

Insummary, we canuseBayesian hyp othesistestingto comparethelikeli-
ho o d of F andB, butwe haveto dosome workto sp ecifypreciselywhat
Bmeans. Thissp ecicationdep endsonbackgroundinformationab outcoins
andtheirb ehaviorwhenspun,sop eoplecouldreasonablydisagreeab outthe
rightdenition.

MypresentationofthisexamplefollowsDavidMacKay'sdiscussion,andcomes
tothesameconclusion.Youcandownloadtheco deIusedinthischapterfrom
[http://thinkbayes.com/euro3.py.FormoreinformationseeSection0.3.](http://thinkbayes.com/euro3.py.FormoreinformationseeSection0.3.)


11.4. Discussion 127

### 11.4 Discussion

TheBayes factorforB_uniformis0.47,whichmeansthatthedataprovide
evidenceagainstthishyp othesis, comparedtoF. Inthe previoussectionI
characterizedthisevidenceasweak,butdidn'tsaywhy.

Partoftheanswerishistorical.HaroldJereys,anearlyprop onentofBayesian
statistics,suggestedascaleforinterpretingBayesfactors:

```
Bayes Strength
Factor
1  3 Barelyworthmentioning
3  10 Substantial
10  30 Strong
30  100 Verystrong
> 100 Decisive
```
Intheexample,theBayesfactoris0.47infavorofB_uniform,soitis2.1in
favorofF,whichJereyswouldconsiderbarelyworthmentioning. Other
authorshavesuggestedvariationson thewording. Toavoid arguingab out
adjectives,wecouldthinkab outo ddsinstead.

Ifyourprioro ddsare1:1,andyou seeevidence withBayesfactor2, your
p osterioro ddsare2:1. Intermsofprobability,thedatachangedyourdegree
ofb elieffrom50%to66%.Formostrealworldproblems,thatchangewould
b esmallrelativetomo delingerrorsandothersourcesofuncertainty.

Onthe otherhand, ifyou had seenevidence withBayes factor100, your
p osterioro ddswouldb e100:1ormorethan99%. Whetherornotyouagree
thatsuchevidenceisdecisive,itiscertainlystrong.

### 11.5 Exercises.

Exercise11.1Somep eopleb elieveintheexistenceofextra-sensoryp ercep-
tion(ESP);forexample,theabilityofsomep eopletoguessthevalueofan
unseenplayingcardwithprobabilityb etterthanchance.

Whatisyourpriordegreeofb eliefinthiskindofESP?Doyouthinkitisas
likelytoexistasnot? Orareyoumoreskepticalab outit? Writedownyour
prioro dds.

Nowcomputethestrengthoftheevidenceitwouldtaketoconvinceyouthat
ESPisat least50%likelytoexist. WhatBayesfactorwouldb eneededto
makeyou90%surethatESPexists?


128 Chapter11. Hyp othesisTesting

Exercise 11.2Supp osethatyouranswerto thepreviousquestionis1000;
thatis,evidencewithBayesfactor 1000 infavorofESPwouldb esucientto
changeyourmind.

Nowsupp osethatyoureadapap erinaresp ectablep eer-reviewedscientic
journalthatpresentsevidencewithBayesfactor 1000 infavorofESP.Would
thatchangeyourmind?

If not, how do youresolvethe apparent contradiction? Youmight ndit
helpful to readab outDavid Hume's article, OfMiracles, at [http://en.](http://en.)
wikipedia.org/wiki/Of_Miracles.


# Chapter 12

# Evidence

### 12.1 InterpretingSATscores.

Supp oseyouaretheDeanofAdmissionatasmallengineeringcollegeinMas-
sachusetts,and you areconsidering twocandidates, Alice andBob, whose
qualicationsaresimilarinmanyways,withtheexceptionthatAlicegota
higherscoreontheMathp ortionoftheSAT,astandardizedtestintendedto
measurepreparationforcollege-levelworkinmathematics.

IfAlicegot 780 andBobgota 740 (outofap ossible800),youmightwant
toknowwhetherthatdierenceisevidencethatAliceisb etterpreparedthan
Bob,andwhatthestrengthofthatevidenceis.

Nowinreality,b othscoresareverygo o d,andb othcandidatesareprobably
wellpreparedforcollegemath.SotherealDeanofAdmissionwouldprobably
suggestthatwecho osethecandidatewhob estdemonstratestheotherskills
andattitudeswelo okforinstudents.ButasanexampleofBayesianhyp oth-
esistesting,let'sstickwithanarrowerquestion:Howstrongistheevidence
thatAliceisb etterpreparedthanBob?

Toanswerthatquestion,weneedtomakesomemo delingdecisions. I'llstart
withasimplicationIknowiswrong;thenwe'llcomebackandimprovethe
mo del. Ipretend,temp orarily, thatall SATquestionsareequallydicult.
Actually,thedesignersoftheSATcho osequestionswitharangeofdiculty,
b ecausethatimproves theabilitytomeasurestatisticaldierencesb etween
test-takers.

Butifwecho oseamo delwhereallquestionsareequallydicult,wecandene
acharacteristic,p_correct,for eachtest-taker, whichistheprobabilityof
answeringanyquestioncorrectly.Thissimplicationmakesiteasytocompute
thelikeliho o dofagivenscore.


130 Chapter12. Evidence

### 12.2 Thescale.

InordertounderstandSATscores, wehavetounderstand thescoringand
scaling pro cess. Each test-takergets araw score basedon the numb erof
correctandincorrectquestions. Therawscoreisconvertedtoascaledscore
intherange200800.

In2009,therewere 54 questionson themathSAT.Therawscoreforeach
test-takeristhenumb erof questionsansweredcorrectlyminusap enaltyof
1 / 4 p ointforeachquestionansweredincorrectly.

TheCollegeBoard,whichadministerstheSAT,publishesthemapfromraw
scoresto scaledscores. Ihavedownloadedthatdataandwrapp editinan
Interp olatorob jectthatprovidesaforwardlo okup(fromrawscoretoscaled)
andareverselo okup(fromscaledscoretoraw).

Youcandownloadtheco deforthisexamplefromhttp://thinkbayes.com/
sat.py. FormoreinformationseeSection0.3.

### 12.3 Theprior.

TheCollegeBoardalsopublishesthedistributionofscaledscoresforalltest-
takers. Ifwe convert each scaledscore to araw score,and divideby the
numb erofquestions,theresultisanestimateofp_correct. Sowecanuse
thedistributionofrawscorestomo delthepriordistributionofp_correct.

Hereistheco dethatreadsandpro cessesthedata:

class Exam(object):

```
def __init__(self):
self.scale = ReadScale()
scores = ReadRanks()
score_pmf = thinkbayes.MakePmfFromDict(dict(scores))
self.raw = self.ReverseScale(score_pmf)
self.max_score = max(self.raw.Values())
self.prior = DivideValues(self.raw, self.max_score)
```
Examencapsulatestheinformationwehaveab outtheexam. ReadScaleand
ReadRanksreadlesandreturnob jectsthatcontainthedata:self.scaleis
theInterpolatorthatconvertsfromrawtoscaledscoresandback;scores
isalistof(score,frequency)pairs.

score_pmf isthePmf ofscaledscores. self.rawisthePmfof rawscores,
andself.prioristhePmfofp_correct.


12.3. Theprior 131

```
0.00.0 0.2 0.4p_correct0.6 0.8 1.0
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
CDF
```
```
prior
```
```
Figure12.1:Priordistributionofp_correctforSATtest-takers.
```
Figure12.1showsthepriordistributionofp_correct. Thisdistributionis
approximatelyGaussian,butitiscompressed atthe extremes. Bydesign,
theSAThasthemostp owertodiscriminateb etweentest-takerswithintwo
standarddeviationsofthemean,andlessp oweroutsidethatrange.

Foreachtest-taker,IdeneaSuitecalledSatthatrepresentsthedistribution
ofp_correct. Here'sthedenition:

class Sat(thinkbayes.Suite):

```
def __init__(self, exam, score):
thinkbayes.Suite.__init__(self)
```
```
self.exam = exam
self.score = score
```
```
# start with the prior distribution
for p_correct, prob in exam.prior.Items():
self.Set(p_correct, prob)
```
```
# update based on an exam score
self.Update(score)
```
__init__takesanExamob jectandascaledscore. Itmakesacopyofthe
priordistributionandthenup datesitselfbasedontheexamscore.

Asusual,weinheritUpdatefromSuiteandprovideLikelihood:

```
def Likelihood(self, data, hypo):
```

132 Chapter12. Evidence

```
0.00.70 0.75 0.80 p_correct0.85 0.90 0.95 1.00
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
CDF
```
```
posterior 780
posterior 740
```
```
Figure12.2:Posteriordistributionsofp_correctforAliceandBob.
```
```
p_correct = hypo
score = data
```
```
k = self.exam.Reverse(score)
n = self.exam.max_score
like = thinkbayes.EvalBinomialPmf(k, n, p_correct)
return like
```
hypoisahyp otheticalvalueofp_correct,anddataisascaledscore.

Tokeepthingssimple,Iinterprettherawscoreasthenumb erofcorrectan-
swers, ignoringthep enaltyforwronganswers. Withthissimplication,the
likeliho o disgivenbythebinomialdistribution,whichcomputestheprobabil-
ityofkcorrectresp onsesoutofnquestions.

### 12.4 Posterior

Figure12.2showsthep osteriordistributionsofp_correctforAliceandBob
basedontheirexamscores. Wecanseethattheyoverlap, soitisp ossible
thatp_correctisactuallyhigherforBob,butitseemsunlikely.

Whichbringsusbacktotheoriginalquestion,Howstrongistheevidencethat
Aliceisb etterpreparedthanBob? Wecanusethep osteriordistributionsof
p_correcttoanswerthisquestion.

ToformulatethequestionintermsofBayesianhyp othesistesting,Idenetwo
hyp otheses:


12.4. Posterior 133

```
 A:p_correctishigherforAlicethanforBob.
```
```
 B: p_correctishigherforBobthanforAlice.
```
Tocomputethelikeliho o d ofA, wecanenumerateallpairsof valuesfrom
thep osteriordistributionsandaddupthetotalprobabilityofthecaseswhere
p_correctishigherforAlicethanforBob.Andwealreadyhaveafunction,
thinkbayes.PmfProbGreater,thatdo esthat.

SowecandeneaSuitethatcomputesthep osteriorprobabilitiesofAandB:

class TopLevel(thinkbayes.Suite):

```
def Update(self, data):
a_sat, b_sat = data
```
```
a_like = thinkbayes.PmfProbGreater(a_sat, b_sat)
b_like = thinkbayes.PmfProbLess(a_sat, b_sat)
c_like = thinkbayes.PmfProbEqual(a_sat, b_sat)
```
```
a_like += c_like / 2
b_like += c_like / 2
```
```
self.Mult('A', a_like)
self.Mult('B', b_like)
```
```
self.Normalize()
```
Usually when we dene a new Suite, we inherit Update and provide
Likelihood. InthiscaseIoverrideUpdate,b ecauseitiseasiertoevaluate
thelikeliho o dofb othhyp othesesatthesametime.

ThedatapassedtoUpdateareSatob jectsthatrepresentthep osteriordistri-
butionsofp_correct.

a_likeisthetotalprobabilitythatp_correctishigherforAlice;b_likeis
thatprobabilitythatitishigherforBob.

c_likeistheprobabilitythattheyareequal,butthisequalityisanartifact
ofthedecisiontomo delp_correctwithasetof discretevalues. Ifweuse
morevalues,c_likeissmaller,andintheextreme,ifp_correctiscontinuous,
c_likeiszero.SoItreatc_likeasakindofround-oerrorandsplititevenly
b etweena_likeandb_like.

Hereistheco dethatcreatesTopLevelandup datesit:


134 Chapter12. Evidence

```
exam = Exam()
a_sat = Sat(exam, 780)
b_sat = Sat(exam, 740)
```
```
top = TopLevel('AB')
top.Update((a_sat, b_sat))
top.Print()
```
Thelikeliho o dofAis0.79andthelikeliho o dofBis0.21.Thelikeliho o dratio
(orBayesfactor)is3.8,whichmeansthatthesetestscoresareevidencethat
Aliceisb etterthanBobatansweringSATquestions. Ifweb elieved,b efore
seeingthetestscores,thatAandBwereequallylikely,thenafterseeingthe
scoresweshouldb elievethattheprobabilityofAis79%,whichmeansthere
isstilla21%chancethatBobisactuallyb etterprepared.

### 12.5 Ab ettermo del

Rememb erthattheanalysiswehavedonesofarisbasedonthesimplication
that allSATquestionsareequallydicult. Inreality,someareeasierthan
others,whichmeansthatthedierenceb etweenAliceandBobmightb eeven
smaller.

Buthowbigisthemo delingerror? Ifitissmall,weconcludethattherst
mo delbasedonthesimplicationthatallquestionsareequallydicultis
go o denough.Ifit'slarge,weneedab ettermo del.

Inthenextfewsections,Idevelopab ettermo delanddiscover(sp oileralert!)
thatthemo delingerrorissmall.Soifyouaresatisedwiththesimplemo del,
youcanskiptothenextchapter. Ifyouwanttoseehowthemorerealistic
mo delworks,readon...

```
 Assumethateachtest-takerhassomedegreeofefficacy,whichmea-
surestheirabilitytoanswerSATquestions.
```
```
 Assumethateachquestionhassomelevelofdifficulty.
```
```
 Finally,assumethatthechancethatatest-takeranswersaquestioncor-
rectlyisrelatedtoefficacyanddifficultyaccordingtothisfunction:
```
```
def ProbCorrect(efficacy, difficulty, a=1):
return 1 / (1 + math.exp(-a * (efficacy - difficulty)))
```

12.5. Ab ettermo del 135

Thisfunctionisasimpliedversionofthecurveusedinitemresp onsethe-
ory, whichyoucanreadab outathttp://en.wikipedia.org/wiki/Item_
response_theory. efficacy anddifficultyareconsidered to b eonthe
samescale,andtheprobabilityofgettingaquestionrightdep endsonlyonthe
dierenceb etweenthem.

Whenefficacy and difficultyareequal, the probability of gettingthe
questionright is50%. As efficacyincreases, this probabilityapproaches
100%.Asitdecreases(orasdifficultyincreases),theprobabilityapproaches
0%.

Giventhedistributionofefficacyacrosstest-takersandthedistributionof
difficultyacrossquestions,wecancomputetheexp ecteddistributionofraw
scores. We'lldothatintwosteps. First,forap ersonwithgivenefficacy,
we'llcomputethedistributionofrawscores.

def PmfCorrect(efficacy, difficulties):
pmf0 = thinkbayes.Pmf([0])

```
ps = [ProbCorrect(efficacy, diff) for diff in difficulties]
pmfs = [BinaryPmf(p) for p in ps]
dist = sum(pmfs, pmf0)
return dist
```
difficultiesisalistofdiculties, oneforeach question. psisalistof
probabilities,andpmfsisalistoftwo-valuedPmfob jects;here'sthefunction
thatmakesthem:

def BinaryPmf(p):
pmf = thinkbayes.Pmf()
pmf.Set(1, p)
pmf.Set(0, 1-p)
return pmf

dististhesumofthesePmfs.Rememb erfromSection5.4thatwhenweadd
upPmfob jects, theresultisthedistributionof thesums. Inordertouse
Python'ssumtoaddupPmfs,wehavetoprovidepmf0whichistheidentity
forPmfs,sopmf + pmf0isalwayspmf.

Ifweknowap erson'secacy,wecancomputetheirdistributionofrawscores.
Foragroupofp eoplewithadierentecacies,theresultingdistributionof
rawscoresisamixture. Here'stheco dethatcomputesthemixture:

# class Exam:

```
def MakeRawScoreDist(self, efficacies):
```

136 Chapter12. Evidence

0.0 (^01020) raw score 30 40 50 60
0.2
0.4
0.6
0.8
1.0
CDF
data
model
Figure12.3:Actualdistributionofrawscoresandamo deltotit.
pmfs = thinkbayes.Pmf()
for efficacy, prob in efficacies.Items():
scores = PmfCorrect(efficacy, self.difficulties)
pmfs.Set(scores, prob)
mix = thinkbayes.MakeMixture(pmfs)
return mix
MakeRawScoreDisttakesefficacies,whichisaPmfthatrepresentsthedis-
tributionofecacyacrosstest-takers. IassumeitisGaussianwithmean 0
andstandarddeviation1.5. Thischoiceismostlyarbitrary. Theprobability
ofgettingaquestioncorrectdep endsonthedierence b etweenecacy and
diculty,sowecancho osetheunitsofecacyandthencalibratetheunitsof
dicultyaccordingly.
pmfsisameta-PmfthatcontainsonePmfforeachlevelofecacy,andmaps
tothefractionoftest-takersatthatlevel. MakeMixturetakesthemeta-pmf
andcomputesthedistributionofthemixture(seeSection5.6).

### 12.6 Calibration.

Ifweweregiventhedistributionofdiculty,wecoulduseMakeRawScoreDist
tocomputethedistributionofrawscores.Butforustheproblemistheother
wayaround: wearegiventhedistributionofrawscoresandwewanttoinfer
thedistributionofdiculty.

Iassumethatthedistributionofdicultyisuniformwithparameterscenter


12.7. Posteriordistributionofecacy 137

andwidth. MakeDifficultiesmakesalistofdicultieswiththeseparame-
ters.

def MakeDifficulties(center, width, n):
low, high = center-width, center+width
return numpy.linspace(low, high, n)

Bytryingoutafewcombinations,Ifoundthatcenter=-0.05andwidth=1.8
yieldadistributionofrawscoressimilartotheactualdata,asshowninFig-
ure12.3.

So,assumingthat the distributionof dicultyis uniform, its rangeisap-
proximately-1.85to1.75,giventhatecacyisGaussianwithmean 0 and
standarddeviation1.5.

ThefollowingtableshowstherangeofProbCorrectfortest-takersatdierent
levelsofecacy:

```
Diculty
Ecacy -1.85 -0.05 1.75
3.00 0.99 0.95 0.78
1.50 0.97 0.82 0.44
0.00 0.86 0.51 0.15
-1.50 0.59 0.19 0.04
-3.00 0.24 0.05 0.01
```
Someonewithecacy 3 (twostandarddeviationsab ovethemean)hasa99%
chanceofansweringtheeasiestquestionsontheexam,anda78%chanceof
answeringthehardest.Ontheotherendoftherange,someonetwostandard
deviationsb elowthemean hasonlya24%chance ofanswering theeasiest
questions.

### 12.7 Posteriordistributionofecacy

Nowthatthemo deliscalibrated,wecancomputethep osteriordistribution
ofecacyforAliceandBob. HereisaversionoftheSatclassthatusesthe
newmo del:

class Sat2(thinkbayes.Suite):

```
def __init__(self, exam, score):
self.exam = exam
self.score = score
```

138 Chapter12. Evidence

0.0 (^012) efficacy 3 4
0.2
0.4
0.6
0.8
1.0
CDF
posterior 780
posterior 740
Figure12.4:PosteriordistributionsofecacyforAliceandBob.
# start with the Gaussian prior
efficacies = thinkbayes.MakeGaussianPmf(0, 1.5, 3)
thinkbayes.Suite.__init__(self, efficacies)
# update based on an exam score
self.Update(score)
Update invokesLikelihood, whichcomputesthe likeliho o d ofa giventest
scoreforahyp otheticallevelofecacy.
def Likelihood(self, data, hypo):
efficacy = hypo
score = data
raw = self.exam.Reverse(score)
pmf = self.exam.PmfCorrect(efficacy)
like = pmf.Prob(raw)
return like
pmf isthedistributionof rawscoresforatest-takerwiththegivenecacy;
likeistheprobabilityoftheobservedscore.
Figure12.4showsthep osteriordistributionsofecacyforAliceandBob.As
exp ected,thelo cationofAlice'sdistributionisfarthertotheright,butagain
thereissomeoverlap.
UsingTopLevelagain,wecompareA,thehyp othesisthatAlice'secacyis
higher,andB,thehyp othesisthatBob'sishigher.Thelikeliho o dratiois3.4,
abitsmallerthanwhatwegotfromthesimplemo del(3.8). Sothismo del


12.8. Predictivedistribution 139

indicatesthatthedataareevidenceinfavorofA,butalittleweakerthanthe
previousestimate.

Ifourpriorb elief isthat A andB areequally likely, theninlight of this
evidencewewouldgiveAap osteriorprobabilityof77%,leavinga23%chance
thatBob'secacyishigher.

### 12.8 Predictivedistribution

Theanalysis we have done so far generatesestimatesfor Alice andBob's
ecacy,butsinceecacyisnotdirectlyobservable,itishardtovalidatethe
results.

Togivethemo delpredictivep ower,wecanuseittoanswerarelatedquestion:
IfAliceandBobtakethemathSATagain,whatisthechancethatAlicewill
dob etteragain?

We'llanswerthisquestionintwosteps:

```
 We'llusethep osteriordistributionofecacytogenerateapredictive
distributionofrawscoreforeachtest-taker.
```
```
 We'llcomparethetwopredictivedistributionstocomputetheprobabil-
itythatAlicegetsahigherscoreagain.
```
Wealreadyhavemostoftheco deweneed.Tocomputethepredictivedistri-
butions,wecanuseMakeRawScoreDistagain:

```
exam = Exam()
a_sat = Sat(exam, 780)
b_sat = Sat(exam, 740)
```
```
a_pred = exam.MakeRawScoreDist(a_sat)
b_pred = exam.MakeRawScoreDist(b_sat)
```
Thenwecanndthelikeliho o dthatAlicedo esb etteronthesecondtest,Bob
do esb etter,ortheytie:

```
a_like = thinkbayes.PmfProbGreater(a_pred, b_pred)
b_like = thinkbayes.PmfProbLess(a_pred, b_pred)
c_like = thinkbayes.PmfProbEqual(a_pred, b_pred)
```
Theprobability that Alicedo esb etter on the secondexam is63%, which
meansthatBobhasa37%chanceofdoingaswellorb etter.

Noticethatwehavemorecondenceab outAlice'secacythanwedoab out
theoutcomeofthenexttest. Thep osterioro ddsare3:1thatAlice'secacy
ishigher,butonly2:1thatAlicewilldob etteronthenextexam.


140 Chapter12. Evidence

```
0.800.80 0.85 p_correct Alice0.90 0.95 1.00
```
```
0.85
```
```
0.90
```
```
0.95
```
```
1.00
```
```
p_correct Bob
```
```
Figure12.5:Jointp osteriordistributionofp_correctforAliceandBob.
```
### 12.9 Discussion

Westartedthischapterwiththequestion,Howstrongistheevidencethat
Aliceisb etterpreparedthanBob? Onthefaceofit, thatsoundslikewe
wanttotesttwohyp otheses:eitherAliceismorepreparedorBobis.

But inorderto computelikeliho o dsforthesehyp otheses,we haveto solve
an estimation problem. For each test-takerwe haveto ndthe p osterior
distributionofeitherp_correctorefficacy.

Valueslikethisarecallednuisanceparametersb ecausewedon'tcarewhat
theyare,butwehavetoestimatethemtoanswerthequestionwecareab out.

Onewaytovisualizetheanalysiswedidinthischapteristoplotthespace
oftheseparameters.thinkbayes.MakeJointtakestwoPmfs,computestheir
jointdistribution,andreturnsajointpmfofeachp ossiblepairofvaluesand
itsprobability.

def MakeJoint(pmf1, pmf2):
joint = Joint()
for v1, p1 in pmf1.Items():
for v2, p2 in pmf2.Items():
joint.Set((v1, v2), p1 * p2)
return joint

Thisfunctionassumesthatthetwodistributionsareindep endent.

Figure12.5showsthejointp osteriordistributionofp_correctforAliceand
Bob.Thediagonallineindicatesthepartofthespacewherep_correctisthe


12.9. Discussion 141

sameforAliceandBob. Totherightofthisline,Aliceismoreprepared;to
theleft,Bobismoreprepared.

InTopLevel.Update,whenwecomputethelikeliho o dsofAandB,weadd
uptheprobabilitymassoneachsideofthisline.Forthecellsthatfallonthe
line,weaddupthetotalmassandsplititb etweenAandB.

Thepro cessweusedinthischapterestimatingnuisanceparametersinorder
toevaluatethe likeliho o dof comp etinghyp othesesisacommon Bayesian
approachtoproblemslikethis.


142 Chapter12. Evidence


# Chapter 13

# Simulation

InthischapterIdescrib emysolutiontoaproblemp osedbyapatientwitha
kidneytumor. Ithinktheproblemisimp ortantandrelevanttopatientswith
thesetumorsanddo ctorstreatingthem.

AndI think the solution is interesting b ecause, althoughit is a Bayesian
approachtotheproblem,theuseofBayes'stheoremisimplicit.Ipresentthe
solutionandmyco de; attheendofthechapterIwillexplaintheBayesian
part.

IfyouwantmoretechnicaldetailthanIpresenthere,youcanreadmypap er
onthisworkathttp://arxiv.org/abs/1203.6890.

### 13.1 TheKidneyTumorproblem

Iamafrequentreaderando ccasionalcontributortotheonlinestatisticsfo-
rumathttp://reddit.com/r/statistics. InNovemb er2011, Ireadthe
followingmessage:

```
"IhaveStage IVKidneyCancerandamtryingto determineif
thecancerformed b efore Iretiredfromthe military. ... Given
thedatesofretirementanddetectionisitp ossibleto determine
whentherewasa50/50chancethatIdevelop edthedisease?Isit
p ossibletodeterminetheprobabilityontheretirementdate?My
tumorwas15.5cmx 15 cmatdetection.GradeI I."
```
Icontactedtheauthorof themessageandgotmore information;I learned
thatveteransgetdierentb enetsifitis"morelikelythannot"thatatumor
formedwhiletheywereinmilitaryservice(amongotherconsiderations).


144 Chapter13. Simulation

0.0 (^210) RDT (volume doublings per year) 1 2 3 4 5 6 7
0.2
0.4
0.6
0.8
1.0
CDF
Distribution of RDT
model
data
Figure13.1: CDFofRDTindoublingsp eryear.
Becauserenaltumorsgrowslowly,andoftendonotcausesymptoms,theyare
sometimesleftuntreated.Asaresult,do ctorscanobservetherateofgrowth
foruntreatedtumorsbycomparingscansfromthesamepatientatdierent
times.Severalpap ershaverep ortedthesegrowthrates.
I collecteddatafromapap erby Zhangetal^1. I contactedtheauthors to
seeifIcouldgetrawdata,buttheyrefusedongroundsofmedicalprivacy.
Nevertheless,IwasabletoextractthedataIneededbyprintingoneoftheir
graphsandmeasuringitwitharuler.
Theyrep ortgrowthratesinrecipro caldoublingtime(RDT),whichisinunits
of doublingsp eryear. SoatumorwithRDT = 1doubles involumeeach
year;withRDT= 2itquadruplesinthesametime,andwithRDT=− 1 ,it
halves.Figure13.1showsthedistributionofRDTfor 53 patients.
Thesquaresarethedatap ointsfromthepap er;thelineisamo delItto
thedata. Thep ositivetailtsanexp onentialdistributionwell,soIuseda
mixtureoftwoexp onentials.

### 13.2 Asimplemo del

Itisusuallyago o dideatostartwithasimplemo delb eforetryingsomething
morechallenging. Sometimesthesimplemo delissucientfortheproblemat
hand,andifnot,youcanuseittovalidatethemorecomplexmo del.

(^1) Zhangetal,DistributionofRenalTumorGrowthRatesDeterminedbyUsingSerial
VolumetricCTMeasurements,January 2009 Radiology,250,137-144.


13.2. Asimplemo del 145

Formysimplemo del,I assumethattumorsgrowwithaconstantdoubling
time,andthattheyarethree-dimensionalinthesensethatifthemaximum
linearmeasurementdoubles,thevolumeismultipliedbyeight.

Ilearnedfrommycorresp ondentthatthe timeb etweenhis dischargefrom
themilitaryandhis diagnosiswas 3291 days(ab out 9 years). Somyrst
calculationwas,Ifthistumorgrewatthemedianrate,howbigwouldithave
b eenatthedateofdischarge?

Themedianvolumedoublingtimerep ortedbyZhangetalis 811 days. As-
suming3-dimensionalgeometry,thedoublingtimeforalinearmeasureisthree
timeslonger.

```
# time between discharge and diagnosis, in days
interval = 3291.0
```
```
# doubling time in linear measure is doubling time in volume * 3
dt = 811.0 * 3
```
```
# number of doublings since discharge
doublings = interval / dt
```
```
# how big was the tumor at time of discharge (diameter in cm)
d1 = 15.5
d0 = d1 / 2.0 ** doublings
```
Youcandownload theco deinthischapterfromhttp://thinkbayes.com/
kidney.py.FormoreinformationseeSection0.3.

Theresult,d0,isab out 6 cm. Soifthistumorformedafterthedateofdis-
charge,itmusthavegrownsubstantiallyfasterthanthemedianrate. There-
foreIconcludedthatitismorelikelythannotthatthistumorformedb efore
thedateofdischarge.

Inaddition,Icomputedthegrowthratethatwouldb eimpliedifthistumor
hadformedafterthedateofdischarge. Ifweassumeaninitialsizeof0.1cm,
wecancomputethenumb erofdoublingstogettoanalsizeof15.5cm:

```
# assume an initial linear measure of 0.1 cm
d0 = 0.1
d1 = 15.5
```
```
# how many doublings would it take to get from d0 to d1
doublings = log2(d1 / d0)
```

146 Chapter13. Simulation

```
# what linear doubling time does that imply?
dt = interval / doublings
```
```
# compute the volumetric doubling time and RDT
vdt = dt / 3
rdt = 365 / vdt
```
dt islineardoubling time, so vdtis volumetricdoubling time,and rdt is
recipro caldoublingtime.

Thenumb erofdoublings,inlinearmeasure,is7.3,whichimpliesanRDTof
2.4. InthedatafromZhangetal,only20%oftumorsgrewthisfastduring
ap erio dofobservation. Soagain,Iconcludedthatismorelikelythannot
thatthetumorformedpriortothedateofdischarge.

Thesecalculationsaresucienttoanswerthequestionasp osed,andonb e-
halfof mycorresp ondent,Iwrotealetterexplainingmyconclusionstothe
Veterans'BenetAdministration.

LaterItoldafriend,whoisanoncologist,ab outmyresults.Hewassurprised
bythegrowthratesobservedbyZhangetal,andbywhattheyimplyab out
theagesofthesetumors. Hesuggestedthattheresultsmightb einteresting
toresearchersanddo ctors.

But in orderto makethem useful, I wanted amore general mo delof the
relationshipb etweenageandsize.

### 13.3 Amoregeneralmo del.

Giventhesizeofatumorattimeofdiagnosis,itwouldb emostusefultoknow
theprobabilitythatthetumorformedb eforeanygivendate;inotherwords,
thedistributionofages.

Tondit,Irunsimulationsoftumorgrowthtogetthedistributionofsizecon-
ditionedonage.ThenwecanuseaBayesianapproachtogetthedistribution
ofageconditionedonsize.

Thesimulationstartswithasmalltumorandrunsthesesteps:

1. Cho oseagrowthratefromthedistributionofRDT.
2. Computethesizeofthetumorattheendofaninterval.
3. Recordthesizeofthetumorateachinterval.


13.3. Amoregeneralmo del 147

0.2 (^051015) tumor age (years) 20 25 30 35 40
0.5
1
2
5
10
20
diameter (cm, log scale)
Simulations of tumor growth
Figure13.2: Simulationsoftumorgrowth,sizevs. time.

4. Rep eatuntilthetumorexceedsthemaximumrelevantsize.

FortheinitialsizeIchose0.3cm,b ecausecarcinomassmallerthanthatare
lesslikelytob einvasiveandlesslikelytohavetheblo o dsupplyneededfor
rapidgrowth(seehttp://en.wikipedia.org/wiki/Carcinoma_in_situ).

Ichoseanintervalof 245 days(ab out 8 months)b ecausethatisthemedian
timeb etweenmeasurementsinthedatasource.

ForthemaximumsizeIchose 20 cm.Inthedatasource,therangeofobserved
sizesis1.0to12.0cm,soweareextrap olatingb eyondtheobservedrangeat
eachend,butnotbyfar,andnotinawaylikelytohaveastrongeectonthe
results.

Thesimulationisbasedononebigsimplication: thegrowthrateischosen
indep endentlyduring each interval,so it do es notdep end on age, size,or
growthrateduringpreviousintervals.

InSection13.7Ireviewtheseassumptionsandconsidermoredetailedmo dels.
Butrstlet'slo okatsomeexamples.

Figure13.2shows thesize of simulated tumorsas afunctionof age. The
dashedlineat 10 cmshowsthe rangeof agesfor tumorsatthat size: the
fastest-growingtumorgetstherein 8 years;theslowesttakesmorethan35.

Iampresentingresultsintermsoflinearmeasurements,butthecalculations
areintermsof volume. To convertfromonetotheother,again,Iusethe
volumeofaspherewiththegivendiameter.


148 Chapter13. Simulation

### 13.4 Implementation

Hereisthekernelofthesimulation:

def MakeSequence(rdt_seq, v0=0.01, interval=0.67, vmax=Volume(20.0)):
seq = v0,
age = 0

```
for rdt in rdt_seq:
age += interval
final, seq = ExtendSequence(age, seq, rdt, interval)
if final > vmax:
break
```
```
return seq
```
rdt_seqisaniteratorthatyieldsrandomvaluesfromtheCDFofgrowthrate.
v0istheinitialvolumeinmL.intervalisthetimestepinyears. vmaxisthe
nalvolumecorresp ondingtoalinearmeasurementof 20 cm.

VolumeconvertsfromlinearmeasurementincmtovolumeinmL,basedon
thesimplicationthatthetumorisasphere:

def Volume(diameter, factor=4*math.pi/3):
return factor * (diameter/2.0)**3

ExtendSequencecomputesthevolumeofthetumorattheendoftheinterval.

def ExtendSequence(age, seq, rdt, interval):
initial = seq[-1]
doublings = rdt * interval
final = initial * 2**doublings
new_seq = seq + (final,)
cache.Add(age, new_seq, rdt)

```
return final, new_seq
```
age istheageofthetumor attheendof theinterval. seqisatuplethat
containsthe volumessofar. rdt isthegrowth rateduringthe interval,in
doublingsp eryear.intervalisthesizeofthetimestepinyears.

Thereturnvaluesarefinal,thevolumeofthetumorattheendoftheinterval,
andnew_seq,anewtuplecontainingthevolumesinseqplusthenewvolume
final.

Cache.Addrecordstheageandsizeofeachtumorattheendofeachinterval,
asexplainedinthenextsection.


13.5. Cachingthejointdistribution 149

0.2 (^051015) ages 20 25 30 35 40
0.5
1
2
5
10
20
diameter (cm, log scale)
Figure13.3:Jointdistributionofageandtumorsize.

### 13.5 Cachingthejointdistribution

Here'showthecacheworks.

class Cache(object):

```
def __init__(self):
self.joint = thinkbayes.Joint()
```
jointisajoint Pmfthat recordsthefrequencyof eachage-size pair,so it
approximatesthejointdistributionofageandsize.

Attheendofeachsimulatedinterval,ExtendSequencecallsAdd:

# class Cache

```
def Add(self, age, seq):
final = seq[-1]
cm = Diameter(final)
bucket = round(CmToBucket(cm))
self.joint.Incr((age, bucket))
```
Again,ageistheageofthetumor,andseqisthesequenceofvolumessofar.

Beforeadding the newdata to the joint distribution, we useDiameter to
convertfromvolumetodiameterincentimeters:

def Diameter(volume, factor=3/math.pi/4, exp=1/3.0):
return 2 * (factor * volume) ** exp

AndCmToBuckettoconvertfromcentimeterstoadiscretebucketnumb er:


150 Chapter13. Simulation

0.0 (^010) tumor age (years) 20 30 40 50
0.2
0.4
0.6
0.8
1.0
CDF
Distribution of age for several diameters
2 cm
5 cm
10 cm
15 cm
Figure13.4:Distributionsofage,conditionedonsize.
def CmToBucket(x, factor=10):
return factor * math.log(x)
The buckets areequally spaced on alog scale. Using factor=10 yields a
reasonablenumb erofbuckets;forexample, 1 cmmapstobucket 0 and 10 cm
mapstobucket23.
Afterrunningthesimulations,wecanplotthejointdistributionasapseudo-
colorplot,whereeachcellrepresentsthenumb eroftumorsobservedatagiven
size-agepair. Figure13.3showsthejointdistributionafter 1000 simulations.

### 13.6 Conditionaldistributions

Bytakingaverticalslicefromthejointdistribution,wecangetthedistribu-
tionofsizesforanygivenage. Bytakingahorizontalslice,wecangetthe
distributionofagesconditionedonsize.

Here'stheco dethat readsthejointdistributionandbuildstheconditional
distributionforagivensize.

# class Cache

```
def ConditionalCdf(self, bucket):
pmf = self.joint.Conditional(0, 1, bucket)
cdf = pmf.MakeCdf()
return cdf
```

13.7. SerialCorrelation 151

(^0) 0.5 (^1) diameter (cm, log scale) 2 5 10 20
5
10
15
20
25
30
35
40
45
tumor age (years)
95th
75th
50th
25th
5th
Credible interval for age vs diameter
Figure13.5:Percentilesoftumorageasafunctionofsize.
bucket is the integer bucket numb er corresp onding to tumor size.
Joint.ConditionalcomputesthePMFofageconditionedonbucket. The
resultistheCDFofageconditionedonbucket.
Figure13.4showsseveraloftheseCDFs,forarangeofsizes. Tosummarize
thesedistributions,wecancomputep ercentilesasafunctionofsize.
percentiles = [95, 75, 50, 25, 5]
for bucket in cache.GetBuckets():
cdf = ConditionalCdf(bucket)
ps = [cdf.Percentile(p) for p in percentiles]
Figure13.5showsthesep ercentilesforeachsizebucket.Thedatap ointsare
computedfromtheestimatedjointdistribution. Inthemo del,sizeandtime
arediscrete,whichcontributesnumericalerrors,soIalsoshowaleastsquares
tforeachsequenceofp ercentiles.

### 13.7 SerialCorrelation

Theresultssofararebasedonanumb erofmo delingdecisions;let'sreview
themandconsiderwhichonesarethemostlikelysourcesoferror:

```
 Toconvertfromlinearmeasuretovolume,weassumethattumorsare
approximatelyspherical.Thisassumptionisprobablynefortumorsup
toafewcentimeters,butnotforverylargetumors.
```

152 Chapter13. Simulation

```
 Thedistributionofgrowthratesinthesimulationsarebasedonacon-
tinuousmo delwechosetotthedatarep ortedbyZhangetal,whichis
basedon 53 patients.Thetisonlyapproximateand,moreimp ortantly,
alargersamplewouldyieldadierentdistribution.
```
```
 Thegrowthmo deldo esnottakeintoaccounttumorsubtyp eorgrade;
thisassumptionisconsistentwiththeconclusionofZhangetal:Growth
ratesinrenal tumorsof dierentsizes, subtyp esandgradesrepresent
awiderangeandoverlapsubstantially. But withalarger sample, a
dierencemightb ecomeapparent.
```
```
 Thedistributionofgrowthratedo esnotdep endonthesizeofthetumor.
Thisassumptionwould notb e realisticforverysmalland verylarge
tumors,whosegrowthislimitedbyblo o dsupply.
ButtumorsobservedbyZhangetalrangedfrom 1 to 12 cm,andthey
foundnostatisticallysignicantrelationshipb etween sizeandgrowth
rate.Soifthereisarelationship,itislikelytob eweak,atleastinthis
sizerange.
```
```
 Inthe simulations,growthrateduringeach intervalisindep endentof
previousgrowthrates. Inrealityitisplausiblethat tumorsthathave
grownquicklyinthepastaremorelikelytogrowquickly.Inotherwords,
thereisprobablyaserialcorrelationingrowthrate.
```
Ofthese,therstandlastseemthemostproblematic. I'llinvestigateserial
correlationrst,thencomebacktosphericalgeometry.

Tosimulatecorrelatedgrowth,Iwroteagenerator^2 thatyieldsacorrelated
seriesfromagivenCdf.Here'showthealgorithmworks:

1. GeneratecorrelatedvaluesfromaGaussiandistribution.Thisiseasyto
    dob ecausewecancomputethedistributionofthenextvalueconditioned
    onthepreviousvalue.
2. TransformeachvaluetoitscumulativeprobabilityusingtheGaussian
    CDF.
3. Transformeachcumulativeprobabilitytothecorresp ondingvalueusing
    thegivenCdf.

Here'swhatthatlo okslikeinco de:

(^2) IfyouarenotfamiliarwithPythongenerators,seehttp://wiki.python.org/moin/
Generators.


13.7. SerialCorrelation 153

def CorrelatedGenerator(cdf, rho):
x = random.gauss(0, 1)
yield Transform(x)

```
sigma = math.sqrt(1 - rho**2);
while True:
x = random.gauss(x * rho, sigma)
yield Transform(x)
```
cdfisthe desiredCdf;rho isthe desiredcorrelation. Thevaluesof xare
Gaussian;Transformconvertsthemtothedesireddistribution.

TherstvalueofxisGaussianwithmean 0 andstandarddeviation1. For
subsequentvalues,themeanandstandarddeviationdep endontheprevious
value.Giventhepreviousx,themeanofthenextvalueisx * rho,andthe
varianceis1 - rho**2.

TransformmapsfromeachGaussianvalue,x,toavaluefromthegivenCdf,
y.

```
def Transform(x):
p = thinkbayes.GaussianCdf(x)
y = cdf.Value(p)
return y
```
GaussianCdfcomputes the CDF of the standardGaussian distributionat
x, returninga cumulativeprobability. Cdf.Value mapsfromacumulative
probabilitytothecorresp ondingvalueincdf.

Dep endingontheshap eofcdf,informationcanb elostintransformation,so
theactualcorrelationmightb elowerthanrho.Forexample,whenIgenerate
10000 valuesfromthedistributionofgrowthrateswithrho=0.4,theactual
correlationis0.37.Butsinceweareguessingattherightcorrelationanyway,
that'scloseenough.

Rememb erthatMakeSequencetakesaniteratorasanargument. Thatinter-
faceallowsittoworkwithdierentgenerators:

```
iterator = UncorrelatedGenerator(cdf)
seq1 = MakeSequence(iterator)
```
```
iterator = CorrelatedGenerator(cdf, rho)
seq2 = MakeSequence(iterator)
```
Inthisexample,seq1andseq2aredrawnfromthesamedistribution,butthe
valuesinseq1areuncorrelatedandthevaluesinseq2arecorrelatedwitha
co ecientofapproximatelyrho.


154 Chapter13. Simulation

```
Serial Diameter Percentilesofage
Correlation (cm) 5th 25th 50th 75th 95th
0.0 6.0 10.7 15.4 19.5 23.5 30.2
0.4 6.0 9.4 15.4 20.8 26.2 36.9
```
```
Table13.1: Percentilesoftumorageconditionedonsize.
```
Nowwecanseewhateectserialcorrelationhasontheresults;thefollow-
ingtableshowsp ercentilesof agefora 6 cmtumor, usingtheuncorrelated
generatorandacorrelatedgeneratorwithtargetρ= 0. 4.

Correlationmakesthefastestgrowingtumorsfasterandtheslowestslower,so
therangeofagesiswider. Thedierenceismo destforlowp ercentiles,but
forthe95thp ercentileitismorethan 6 years. Tocomputethesep ercentiles
precisely,wewouldneedab etterestimateoftheactualserialcorrelation.

However,thismo delissucienttoanswerthequestionwestartedwith:given
atumorwithalineardimensionof15.5cm,whatistheprobabilitythat it
formedmorethan 8 yearsago?

Here'stheco de:

# class Cache

```
def ProbOlder(self, cm, age):
bucket = CmToBucket(cm)
cdf = self.ConditionalCdf(bucket)
p = cdf.Prob(age)
return 1-p
```
cm isthe sizeof the tumor; age isthe agethresholdinyears. ProbOlder
convertssizetoabucketnumb er,getstheCdfofageconditionedonbucket,
andcomputestheprobabilitythatageexceedsthegivenvalue.

Withnoserialcorrelation,theprobabilitythata15.5cmtumorisolderthan
8 yearsis0.999,oralmostcertain. Withcorrelation0.4,faster-growingtumors
aremorelikely,buttheprobabilityisstill0.995. Evenwithcorrelation0.8,
theprobabilityis0.978.

Anotherlikelysourceoferroristheassumptionthattumorsareapproximately
spherical. Foratumorwithlineardimensions15.5x 15 cm,thisassumption
isprobablynotvalid.If,asseemslikely,atumorthissizeisrelativelyat,it
mighthavethesamevolumeasa 6 cmsphere.Withthissmallervolumeand
correlation0.8,theprobabilityofagegreaterthan 8 isstill95%.


13.8. Discussion 155

Soeventakingintoaccountmo delingerrors,itisunlikelythatsuchalarge
tumorcouldhaveformedlessthan 8 yearspriortothedateofdiagnosis.

### 13.8 Discussion

Well,wegotthroughawholechapterwithoutusingBayes'stheoremorthe
SuiteclassthatencapsulatesBayesianup dates.Whathapp ened?

Oneway to think ab outBayes's theoremis as an algorithm forinverting
conditionalprobabilities. Givenp(B|A),we cancomputep(A|B),provided
weknowp(A)andp(B). Ofcoursethisalgorithmisonlyusefulif,forsome
reason,itiseasiertocomputep(B|A)thanp(A|B).

Inthisexample,itis. Byrunningsimulations,wecanestimatethedistribu-
tionofsize conditionedonage, orp(size|age). Butitisharderto getthe
distributionof ageconditionedon size,orp(age|size). Sothisseemslikea
p erfectopp ortunitytouseBayes'stheorem.

ThereasonIdidn'tiscomputationaleciency. Toestimatep(size|age)for
anygivensize,youhavetorunalotofsimulations. Alongtheway,youend
upcomputingp(size|age)foralotofsizes.Infact,youendupcomputingthe
entirejointdistributionofsizeandage,p(size,age).

Andonceyouhavethejointdistribution,youdon'treallyneedBayes'stheo-
rem,youcanextractp(age|size)bytakingslicesfromthejointdistribution,
asdemonstratedinConditionalCdf.

Soweside-stepp edBayes,buthewaswithusinspirit.


156 Chapter13. Simulation


# Chapter 14

# A Hierarchical Model

### 14.1 TheGeigercounterproblem

IgottheideaforthefollowingproblemfromTomCampb ell-Ricketts,author
oftheMaximumEntropyblogathttp://maximum- entropy- blog.blogspot.
com. AndhegottheideafromE.T.Jaynes,authoroftheclassicProbability
Theory:TheLogicofScience:

```
Supp osethataradioactivesourceemitsparticlestowardaGeiger
counteratanaveragerateofrparticlesp ersecond,butthecounter
onlyregistersafraction,f,oftheparticlesthathitit. Iffis10%
andthecounterregisters 15 particlesinaonesecondinterval,what
isthep osteriordistributionofn, theactualnumb erofparticles
thathitthecounter,andr,theaveragerateparticlesareemitted?
```
Togetstartedonaproblemlikethis,thinkab outthechainofcausationthat
startswiththeparametersofthesystemandendswiththeobserveddata:

1. Thesourceemitsparticlesatanaveragerate,r.
2. Duringanygivensecond,thesourceemitsnparticlestowardthecounter.
3. Outofthosenparticles,somenumb er,k,getcounted.

Theprobabilitythatanatomdecaysisthesameatanyp ointintime,sora-
dioactivedecayiswellmo deledbyaPoissonpro cess.Givenr,thedistribution
ofnisPoissondistributionwithparameterr.

Andifweassumethattheprobabilityofdetectionforeachparticleisinde-
p endentoftheothers,thedistributionofkisthebinomialdistributionwith
parametersnandf.


158 Chapter14. AHierarchicalMo del

0.000 (^0100) Number of particles (n) 200 300 400 500
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
0.045
PMF
100
250
400
Figure14.1:Posteriordistributionofnforthreevaluesofr.
Giventheparametersofthesystem,wecanndthedistributionofthedata.
Sowecansolvewhatiscalledtheforwardproblem.
Nowwewanttogotheotherway:giventhedata,wewantthedistributionof
theparameters.Thisiscalledtheinverseproblem.Andifyoucansolvethe
forwardproblem,youcanuseBayesianmetho dstosolvetheinverseproblem.

### 14.2 Startsimple

Let'sstartwithasimpleversionoftheproblemwhereweknowthevalueof
r.Wearegiventhevalueoff,soallwehavetodoisestimaten.

IdeneaSuitecalledDetectorthatmo delstheb ehaviorofthedetectorand
estimatesn.

class Detector(thinkbayes.Suite):

```
def __init__(self, r, f, high=500, step=1):
pmf = thinkbayes.MakePoissonPmf(r, high, step=step)
thinkbayes.Suite.__init__(self, pmf, name=r)
self.r = r
self.f = f
```
Iftheaverageemissionrateisrparticlesp ersecond,thedistributionofnis
Poissonwithparameterr. highandstepdeterminetheupp erb oundforn
andthestepsizeb etweenhyp otheticalvalues.

Nowweneedalikeliho o dfunction:


14.3. Makeithierarchical 159

# class Detector

```
def Likelihood(self, data, hypo):
k = data
n = hypo
p = self.f
```
```
return thinkbayes.EvalBinomialPmf(k, n, p)
```
dataisthenumb erofparticlesdetected,andhypoisthehyp otheticalnumb er
ofparticlesemitted,n.

Ifthereareactuallynparticles,andtheprobabilityofdetectinganyoneof
themisf,the probabilityofdetectingk particlesisgivenbythebinomial
distribution.

That'sitfortheDetector. Wecantryitoutforarangeofvaluesofr:

```
f = 0.1
k = 15
```
```
for r in [100, 250, 400]:
suite = Detector(r, f, step=1)
suite.Update(k)
print suite.MaximumLikelihood()
```
Figure14.1showsthep osteriordistributionofnforseveralgivenvaluesofr.

### 14.3 Makeithierarchical.

Intheprevioussection,weassumerisknown. Nowlet'srelaxthatassumption.
IdeneanotherSuite,calledEmitter,thatmo delstheb ehavioroftheemitter
andestimatesr:

class Emitter(thinkbayes.Suite):

```
def __init__(self, rs, f=0.1):
detectors = [Detector(r, f) for r in rs]
thinkbayes.Suite.__init__(self, detectors)
```
rs isa sequenceof hyp othetical value for r. detectors is a sequenceof
Detectorob jects,oneforeachvalueofr.ThevaluesintheSuiteareDetectors,
soEmitteris ameta-Suite; thatis, aSuitethat containsotherSuitesas
values.


160 Chapter14. AHierarchicalMo del

Toup datetheEmitter,wehavetocomputethelikeliho o dofthedataunder
eachhyp otheticalvalueofr.ButeachvalueofrisrepresentedbyaDetector
thatcontainsarangeofvaluesforn.

Tocomputethelikeliho o dofthedataforagivenDetector,welo opthrough
the values of n and add up the total probability of k. That's what
SuiteLikelihooddo es:

# class Detector

```
def SuiteLikelihood(self, data):
total = 0
for hypo, prob in self.Items():
like = self.Likelihood(data, hypo)
total += prob * like
return total
```
NowwecanwritetheLikeliho o dfunctionfortheEmitter:

# class Emitter

```
def Likelihood(self, data, hypo):
detector = hypo
like = detector.SuiteLikelihood(data)
return like
```
EachhypoisaDetector,sowecaninvokeSuiteLikelihoodtogetthelikeli-
ho o dofthedataunderthehyp othesis.

Afterweup datetheEmitter,wehavetoup dateeachoftheDetectors,to o.

# class Emitter

```
def Update(self, data):
thinkbayes.Suite.Update(self, data)
```
```
for detector in self.Values():
detector.Update()
```
Amo dellikethis,withmultiplelevelsofSuites,iscalledhierarchical.

### 14.4 Alittleoptimization

You mightrecognizeSuiteLikelihood; wesawit inSection11.2. Atthe
time,Ip ointedoutthatwedidn'treallyneedit,b ecausethetotalprobability


14.5. Extractingthep osteriors 161

0.00 (^0100200) Emission rate 300 400 500
0.01
0.02
0.03
0.04
0.05
0.06
PMF
posterior r
posterior n
Figure14.2: Posteriordistributionsofnandr.
computedbySuiteLikelihoodisexactlythenormalizingconstantcomputed
andreturnedbyUpdate.
Soinsteadofup datingtheEmitterandthenup datingtheDetectors,wecan
dob othsteps atthesametime,usingtheresultfromDetector.Updateas
thelikeliho o dofEmitter.
Here'sthestreamlinedversionofEmitter.Likelihood:
# class Emitter
def Likelihood(self, data, hypo):
return hypo.Update(data)
AndwiththisversionofLikelihoodwecanusethedefaultversionofUpdate.
Sothisversionhasfewerlinesofco de,anditrunsfasterb ecauseitdo esnot
computethenormalizingconstanttwice.

### 14.5 Extractingthep osteriors

Afterwe up datetheEmitter, wecangetthep osteriordistributionof rby
lo opingthroughtheDetectorsandtheirprobabilities:

# class Emitter

```
def DistOfR(self):
items = [(detector.r, prob) for detector, prob in self.Items()]
return thinkbayes.MakePmfFromItems(items)
```

162 Chapter14. AHierarchicalMo del

itemsisalistofvaluesofrandtheirprobabilities. TheresultisthePmfof
r.

Togetthep osteriordistributionofn,wehavetocomputethemixtureofthe
Detectors. Wecanuse thinkbayes.MakeMixture,whichtakesameta-Pmf
thatmapsfromeachdistributiontoitsprobability. Andthat'sexactlywhat
theEmitteris:

# class Emitter

```
def DistOfN(self):
return thinkbayes.MakeMixture(self)
```
Figure14.2showstheresults. Notsurprisingly,themostlikelyvalueforn
is150. Givenfandn,theexp ectedcountisk=fn,sogivenf andk,the
exp ectedvalueofnisk/f,whichis150.

Andif 150 particlesareemittedinonesecond,themostlikelyvalueofr is
150 particlesp ersecond.Sothep osteriordistributionofrisalsocenteredon
150.

Thep osteriordistributionsofrandnaresimilar;theonlydierenceisthat
weareslightlylesscertainab outn. Ingeneral,wecanb emorecertainab out
thelong-rangeemissionrate,r,thanab outthenumb erofparticlesemittedin
anyparticularsecond,n.

You candownloadthe co deinthischapterfromhttp://thinkbayes.com/
jaynes.py.FormoreinformationseeSection0.3.

### 14.6 Discussion

TheGeigercounterproblemdemonstratestheconnectionb etweencausation
andhierarchicalmo deling. Intheexample,theemissionraterhasacausal
eectonthenumb erofparticles,n,whichhasacausaleectontheparticle
count,k.

Thehierarchicalmo delreectsthestructureofthesystem,withcausesatthe
topandeectsattheb ottom.

1. Atthetoplevel,westartwitharangeofhyp otheticalvaluesforr.
2. For each value of r, we have a range of values forn, and the prior
    distributionofndep endsonr.


14.7. Exercises 163

3. Whenweup date themo del,we gob ottom-up. Wecomputeap oste-
    riordistributionof nfor eachvalue of r, thencomputethep osterior
    distributionofr.

Socausalinformationowsdownthehierarchy,andinferenceowsup.

### 14.7 Exercises.

Exercise14.1ThisexerciseisalsoinspiredbyanexampleinJaynes,Proba-
bilityTheory.

Supp oseyoubuyamosquitotrapthatissupp osedtoreducethep opulation
ofmosquito esnearyourhouse.Eachweek,youemptythetrapandcountthe
numb erofmosquito escaptured.Aftertherstweek,youcount 30 mosquito es.
Afterthe secondweek, youcount 20 mosquito es. Estimatethep ercentage
changeinthenumb erofmosquito esinyouryard.

Toanswerthisquestion,youhavetomakesomemo delingdecisions. Hereare
somesuggestions:

```
 Supp osethateachweekalargenumb erofmosquito es,N,isbredina
wetlandnearyourhome.
```
```
 Duringtheweek,somefractionofthem,f 1 ,wanderintoyouryard,and
ofthosesomefraction,f 2 ,arecaughtinthetrap.
```
```
 Yoursolutionshouldtakeintoaccountyourpriorb eliefab outhowmuch
N islikelytochangefromoneweektothenext. Youcandothatby
addingaleveltothehierarchytomo delthep ercentchangeinN.
```

164 Chapter14. AHierarchicalMo del


# Chapter 15

# Dealing with Dimensions

### 15.1 Bellybuttonbacteria

BellyButtonBio diversity2.0(BBB2)isanation-widecitizensciencepro ject
withthe goal of identifying bacterial sp eciesthat canb e foundin human
navels(http://bbdata.yourwildlife.org).Thepro jectmightseemwhim-
sical,butitispartofanincreasinginterestinthehumanmicrobiome,theset
ofmicro organismsthatliveonhumanskinandpartsoftheb o dy.

Intheirpilotstudy,BBB2researcherscollectedswabsfromthenavelsof 60
volunteers,usedmultiplexpyrosequencingtoextractandsequencefragments
of16SrDNA,thenidentiedthesp eciesorgenusthefragmentscamefrom.
Eachidentiedfragmentiscalledaread.

Wecanusethesedatatoanswerseveralrelatedquestions:

```
 Based on the numb erof sp ecies observed, canwe estimate the total
numb erofsp eciesintheenvironment?
```
```
 Canweestimatetheprevalenceofeachsp ecies;thatis,thefractionof
thetotalp opulationb elongingtoeachsp ecies?
```
```
 Ifwe areplanning to collectadditional samples, canwe predicthow
manynewsp ecieswearelikelytodiscover?
```
```
 Howmanyadditionalreadsareneededto increasethe fractionofob-
servedsp eciestoagiventhreshold?
```
ThesequestionsmakeupwhatiscalledtheUnseenSp eciesproblem.


166 Chapter15. DealingwithDimensions

### 15.2 Lionsandtigersandb ears

I'llstartwithasimpliedversionoftheproblemwhereweknowthatthere
areexactlythreesp ecies.Let'scallthemlions,tigersandb ears. Supp osewe
visitawildanimalpreserveandsee 3 lions, 2 tigersandoneb ear.

Ifwehaveanequalchanceofobservinganyanimalinthepreserve,thenumb er
of each sp ecies we seeisgoverned by the multinomial distribution. Ifthe
prevalenceoflionsandtigersandb earsisp_lionandp_tigerandp_bear,
thelikeliho o dofseeing 3 lions, 2 tigersandoneb earisprop ortionalto

p_lion**3 * p_tiger**2 * p_bear**1

Anapproach thatistempting,butnotcorrect,istouseb eta distributions,
as inSection4.5, todescrib etheprevalenceofeachsp eciesseparately. For
example,wesaw 3 lionsand 3 non-lions;ifwethinkofthatas 3 heads and
3 tails,thenthep osteriordistributionofp_lionis:

```
beta = thinkbayes.Beta()
beta.Update((3, 3))
print beta.MaximumLikelihood()
```
Themaximumlikeliho o destimateforp_lionistheobservedrate,50%.Sim-
ilarlytheMLEsforp_tigerandp_bearare33%and17%.

Buttherearetwoproblems:

1. Wehaveimplicitlyusedapriorforeachsp eciesthatisuniformfrom 0
    to1,butsinceweknowthattherearethreesp ecies,thatpriorisnot
    correct.Therightpriorshouldhaveameanof1/3,andthereshouldb e
    zerolikeliho o dthatanysp ecieshasaprevalenceof100%.
2. The distributions for each sp ecies are not indep endent, b ecause the
    prevalenceshavetoaddupto1.Tocapturethisdep endence,weneeda
    jointdistributionforthethreeprevalences.

WecanuseaDirichletdistributiontosolveb othoftheseproblems(seehttp:
//en.wikipedia.org/wiki/Dirichlet_distribution).Inthesamewaywe
usedtheb etadistributiontodescrib ethedistributionofbiasforacoin,we
canuseaDirichletdistributiontodescrib ethejointdistributionofp_lion,
p_tigerandp_bear.

TheDirichletdistributionisthemulti-dimensionalgeneralizationoftheb eta
distribution. Instead of two p ossible outcomes, like heads and tails, the
Dirichletdistributionhandlesanynumb erofoutcomes:inthisexample,three
sp ecies.


15.2. Lionsandtigersandb ears 167

Iftherearenoutcomes,theDirichletdistributionisdescrib edbynparameters,
writtenα 1 throughαn.

Here'sthedenition,fromthinkbayes.py,ofaclassthatrepresentsaDirich-
letdistribution:

class Dirichlet(object):

```
def __init__(self, n):
self.n = n
self.params = numpy.ones(n, dtype=numpy.int)
```
nisthenumb erofdimensions;initiallytheparametersareall1.Iuseanumpy
arraytostoretheparameterssoIcantakeadvantageofarrayop erations.

GivenaDirichletdistribution,themarginaldistributionforeachprevalenceis
ab etadistribution,whichwecancomputelikethis:

```
def MarginalBeta(self, i):
alpha0 = self.params.sum()
alpha = self.params[i]
return Beta(alpha, alpha0-alpha)
```
iistheindexofthemarginaldistributionwewant.alpha0isthesumofthe
parameters;alphaistheparameterforthegivensp ecies.

Inthe example,the priormarginaldistributionforeach sp eciesisBeta(1,
2).Wecancomputethepriormeanslikethis:

```
dirichlet = thinkbayes.Dirichlet(3)
for i in range(3):
beta = dirichlet.MarginalBeta(i)
print beta.Mean()
```
Asexp ected,thepriormeanprevalenceforeachsp eciesis1/3.

Toup datetheDirichletdistribution,weaddtheobservationstotheparameters
likethis:

```
def Update(self, data):
m = len(data)
self.params[:m] += data
```
Heredatais asequenceofcountsinthe same orderas params, so inthis
example,itshouldb ethenumb eroflions,tigersandb ears.

datacanb eshorterthanparams;inthatcasetherearesomesp eciesthathave
notb eenobserved.

Here'sco dethatup datesdirichletwiththeobserveddataandcomputesthe
p osteriormarginaldistributions.


168 Chapter15. DealingwithDimensions

```
0.0000.0 0.2 0.4Prevalence0.6 0.8 1.0
```
```
0.005
```
```
0.010
```
```
0.015
```
```
0.020
```
```
0.025
```
```
0.030
```
```
0.035
```
```
Prob
```
```
lions
tigers
bears
```
```
Figure15.1:Distributionofprevalencesforthreesp ecies.
```
```
data = [3, 2, 1]
dirichlet.Update(data)
```
```
for i in range(3):
beta = dirichlet.MarginalBeta(i)
pmf = beta.MakePmf()
print i, pmf.Mean()
```
Figure15.1showstheresults.Thep osteriormeanprevalencesare44%,33%,
and22%.

### 15.3 Thehierarchicalversion.

We havesolvedasimpliedversionof theproblem: ifweknowhowmany
sp eciesthereare,wecanestimatetheprevalenceofeach.

Nowlet'sgetbackto theoriginal problem,estimating thetotalnumb erof
sp ecies. TosolvethisproblemI'lldeneameta-Suite,whichisaSuitethat
containsotherSuitesashyp otheses. Inthiscase,thetop-levelSuitecontains
hyp othesesab outthenumb erofsp ecies;theb ottomlevelcontainshyp otheses
ab outprevalences.

Here'stheclassdenition:

class Species(thinkbayes.Suite):

```
def __init__(self, ns):
```

15.3. Thehierarchicalversion 169

```
hypos = [thinkbayes.Dirichlet(n) for n in ns]
thinkbayes.Suite.__init__(self, hypos)
```
__init__takesalistof p ossiblevaluesfor nandmakes alistofDirichlet
ob jects.

Here'stheco dethatcreatesthetop-levelsuite:

```
ns = range(3, 30)
suite = Species(ns)
```
nsisthelistofp ossiblevaluesforn. Wehaveseen 3 sp ecies,sotherehaveto
b eatleastthatmany. Ichoseanupp erb oundthatseemsreasonable,butwe
willchecklaterthattheprobabilityofexceedingthisb oundislow. Andat
leastinitiallyweassumethatanyvalueinthisrangeisequallylikely.

Toup dateahierarchicalmo del, youhavetoup datealllevels. Usuallyyou
havetoup datetheb ottomlevelrstandworkup,butinthiscasewecan
up datethetoplevelrst:

#class Species

```
def Update(self, data):
thinkbayes.Suite.Update(self, data)
for hypo in self.Values():
hypo.Update(data)
```
Species.UpdateinvokesUpdateintheparentclass,thenlo opsthroughthe
sub-hyp othesesandup datesthem.

Nowallweneedisalikeliho o dfunction:

# class Species

```
def Likelihood(self, data, hypo):
dirichlet = hypo
like = 0
for i in range(1000):
like += dirichlet.Likelihood(data)
```
```
return like
```
data is a sequence of observed counts; hypo is a Dirichlet ob ject.
Species.Likelihoodcalls Dirichlet.Likelihood 1000 times andreturns
thetotal.

Whycall it 1000 times? BecauseDirichlet.Likelihood do esn'tactually
computethe likeliho o d of the dataunder the wholeDirichlet distribution.


170 Chapter15. DealingwithDimensions

Instead,itdrawsonesamplefromthehyp otheticaldistributionandcomputes
thelikeliho o dofthedataunderthesampledsetofprevalences.

Here'swhatitlo okslike:

# class Dirichlet

```
def Likelihood(self, data):
m = len(data)
if self.n < m:
return 0
```
```
x = data
p = self.Random()
q = p[:m]**x
return q.prod()
```
Thelengthofdataisthenumb erofsp eciesobserved. Ifweseemoresp ecies
thanwethoughtexisted,thelikeliho o dis0.

Otherwiseweselectarandomsetofprevalences,p,andcomputethemultino-
mialPMF,whichis
cxpx 11 ···pxnn

pi istheprevalenceofthe ithsp ecies, andxiistheobservednumb er. The
rstterm,cx,isthemultinomialco ecient;Ileaveitoutofthecomputation
b ecause itisamultiplicativefactorthatdep endsonlyonthedata,notthe
hyp othesis,soitgetsnormalizedaway(seehttp://en.wikipedia.org/wiki/
Multinomial_distribution).

misthenumb erofobservedsp ecies. Weonlyneedtherstmelementsofp;
fortheothers,xiis0,sopxiiis1,andwecanleavethemoutofthepro duct.

### 15.4 Randomsampling.

There are two ways to generate a randomsample from a Dirichlet distri-
bution. One is to use the marginal b eta distributions, but in that case
you have to select one at a time and scale the rest so they add up to
1 (seehttp://en.wikipedia.org/wiki/Dirichlet_distribution#Random_
number_generation).

Alessobvious,butfaster,wayistoselectvaluesfromngammadistributions,
thennormalizebydividingthroughbythetotal. Here'stheco de:


15.4. Randomsampling 171

0.00 (^0510) Number of species 15 20 25 30
0.02
0.04
0.06
0.08
0.10
0.12
Prob
Figure15.2:Posteriordistributionofn.
# class Dirichlet
def Random(self):
p = numpy.random.gamma(self.params)
return p / p.sum()
Nowwe'rereadytolo okatsomeresults. Hereistheco dethatextractsthe
p osteriordistributionofn:
def DistOfN(self):
pmf = thinkbayes.Pmf()
for hypo, prob in self.Items():
pmf.Set(hypo.n, prob)
return pmf
DistOfNiteratesthroughthetop-levelhyp othesesandaccumulatestheprob-
abilityofeachn.
Figure15.2showstheresult.Themostlikelyvalueis4.Valuesfrom 3 to 7 are
reasonablylikely;afterthattheprobabilitiesdropoquickly.Theprobability
thatthereare 29 sp eciesislowenoughtob enegligible;ifwechoseahigher
b ound,wewouldgetnearlythesameresult.
Rememb erthat this resultis basedon a uniform priorfor n. Ifwe have
backgroundinformationab outthenumb erofsp eciesintheenvironment,we
mightcho oseadierentprior.


172 Chapter15. DealingwithDimensions

### 15.5 Optimization

IhavetoadmitthatIamproudofthisexample.TheUnseenSp eciesproblem
isnoteasy,andIthinkthissolutionissimpleandclear,andtakessurprisingly
fewlinesofco de(ab out 50 sofar).

Theonlyproblemisthatitisslow. It'sgo o denoughfortheexamplewith
only 3 observedsp ecies,butnotgo o denoughfortheb ellybuttondata,with
morethan 100 sp eciesinsomesamples.

Thenextfewsectionspresentaseriesofoptimizationsweneedtomakethis
solutionscale.Beforewegetintothedetails,here'saroadmap.

```
 Therststepistorecognizethatifweup datetheDirichletdistributions
withthesamedata,therstmparametersarethesameforallofthem.
Theonlydierenceisthenumb erofhyp otheticalunseensp ecies.Sowe
don'treallyneednDirichletob jects;wecanstoretheparametersinthe
toplevelofthehierarchy.Species2implementsthisoptimization.
```
```
 Species2 alsousesthe same set of random values forall of the hy-
p otheses.Thissavestimegeneratingrandomvalues,butithasasecond
b enetthatturnsouttob emoreimp ortant:bygivingallhyp othesesthe
sameselectionfromthesamplespace,wemakethecomparisonb etween
thehyp othesesmorefair,soittakesfeweriterationstoconverge.
```
```
 Evenwiththesechangesthereisama jorp erformanceproblem. Asthe
numb erofobservedsp eciesincreases,thearrayofrandomprevalences
getsbigger,andthechanceofcho osingonethatisapproximatelyright
b ecomessmall.Sothevastma jorityofiterationsyieldsmalllikeliho o ds
thatdon'tcontributemuchtothetotal,anddon'tdiscriminateb etween
hyp otheses.
```
```
The solution is to do the up dates onesp ecies at a time. Species4
isasimpleimplementationof thisstrategy usingDirichlet ob jectsto
representthesub-hyp otheses.
```
```
 Finally,Species5combinesthesub-hyp othesesintothetopleveland
usesnumpyarrayop erationstosp eedthingsup.
```
Ifyouarenotinterestedinthedetails,feelfreetoskiptoSection15.9where
welo okatresultsfromtheb ellybuttondata.


15.6. Collapsingthehierarchy 173

### 15.6 Collapsingthehierarchy

Alloftheb ottom-levelDirichletdistributionsareup datedwiththesamedata,
sotherstmparametersarethesameforallofthem. Wecaneliminatethem
andmergetheparametersintothetop-levelsuite.Species2implementsthis
optimization:

class Species2(object):

```
def __init__(self, ns):
self.ns = ns
self.probs = numpy.ones(len(ns), dtype=numpy.double)
self.params = numpy.ones(self.high, dtype=numpy.int)
```
nsisthelistofhyp otheticalvaluesforn;probsisthelistofcorresp onding
probabilities.AndparamsisthesequenceofDirichletparameters,initiallyall
1.

Species2.Updateup datesb othlevelsofthehierarchy: rsttheprobability
foreachvalueofn,thentheDirichletparameters:

# class Species2

```
def Update(self, data):
like = numpy.zeros(len(self.ns), dtype=numpy.double)
for i in range(1000):
like += self.SampleLikelihood(data)
```
```
self.probs *= like
self.probs /= self.probs.sum()
```
```
m = len(data)
self.params[:m] += data
```
SampleLikelihoodreturns anarrayoflikeliho o ds, oneforeachvalue ofn.
likeaccumulatesthetotallikeliho o dfor 1000 samples. self.probsismul-
tipliedby the totallikeliho o d, thennormalized. The last twolines, which
up datetheparameters,arethesameasinDirichlet.Update.

Nowlet'slo ok atSampleLikelihood. Therearetwoopp ortunitiesforopti-
mizationhere:

```
 Whenthehyp otheticalnumb erofsp ecies,n,exceedstheobservednum-
b er,m,weonlyneedtherstmtermsofthemultinomialPMF;therest
are1.
```

174 Chapter15. DealingwithDimensions

```
 Ifthenumb erof sp eciesislarge,the likeliho o dof the datamightb e
to osmallforoating-p oint(see 10.5). Soitissafertocomputelog-
likeliho o ds.
```
Again,themultinomialPMFis

```
cxpx 11 ···pxnn
```
Sothelog-likeliho o dis

```
logcx+x 1 logp 1 +···+xnlogpn
```
whichisfastandeasytocompute.Again,cxitisthesameforallhyp otheses,
sowecandropit.Here'stheco de:

# class Species2

```
def SampleLikelihood(self, data):
gammas = numpy.random.gamma(self.params)
```
```
m = len(data)
row = gammas[:m]
col = numpy.cumsum(gammas)
```
```
log_likes = []
for n in self.ns:
ps = row / col[n-1]
terms = data * numpy.log(ps)
log_like = terms.sum()
log_likes.append(log_like)
```
```
log_likes -= numpy.max(log_likes)
likes = numpy.exp(log_likes)
```
```
coefs = [thinkbayes.BinomialCoef(n, m) for n in self.ns]
likes *= coefs
```
```
return likes
```
gammasisanarrayofvaluesfromagammadistribution;itslengthisthelargest
hyp otheticalvalueofn. rowisjusttherstmelementsofgammas;sincethese
aretheonlyelementsthatdep endonthedata,theyaretheonlyonesweneed.


15.7. Onemoreproblem 175

Foreachvalueofnweneedtodividerowbythetotaloftherstnvaluesfrom
gamma. cumsumcomputesthesecumulativesumsandstoresthemincol.

The lo op iterates through the values of n and accumulates a list of log-
likeliho o ds.

Inside the lo op, ps contains the rowof probabilities, normalized withthe
appropriatecumulativesum. terms containsthe termsof the summation,
xilogpi,andlog_likecontainstheirsum.

Afterthelo op,wewanttoconvertthelog-likeliho o dstolinearlikeliho o ds,but
rstit'sago o dideatoshiftthemsothelargestlog-likeliho o dis0;thatway
thelinearlikeliho o dsarenotto osmall(see 10.5).

Finally,b eforewereturnthelikeliho o d,wehavetoapplyacorrectionfactor,
whichisthenumb erof wayswecouldhaveobservedthesemsp ecies, ifthe
totalnumb erofsp eciesisn. BinomialCoefficientcomputesncho osem,
whichiswritten

```
(n
m
```
#### )

Asoftenhapp ens,theoptimizedversionislessreadableandmoreerror-prone
thantheoriginal.Butthat'sonereasonIthinkitisago o dideatostartwith
thesimpleversion;wecanuseitforregressiontesting.Iplottedresultsfrom
b othversionsandconrmedthattheyareapproximatelyequal,andthatthey
convergeasthenumb erofiterationsincreases.

### 15.7 Onemoreproblem

There'smorewecoulddotooptimizethisco de,butthere'sanotherproblem
weneedtoxrst. Asthenumb erofobservedsp eciesincreases,thisversion
getsnoisierandtakesmoreiterationstoconvergeonago o danswer.

Theproblemisthatiftheprevalenceswecho osefromtheDirichletdistribu-
tion,theps,arenotatleastapproximatelyright,thelikeliho o doftheobserved
dataisclosetozeroandalmostequallybadforallvaluesofn. Somostitera-
tionsdon'tprovideanyusefulcontributiontothetotallikeliho o d.Andasthe
numb erofobservedsp ecies,m,getslarge,theprobabilityofcho osingpswith
non-negligiblelikeliho o dgetssmall.Reallysmall.

Fortunately,thereisasolution. Rememb erthatifyouobserveasetofdata,
youcanup datethepriordistributionwiththeentiredataset,oryoucanbreak
itupintoaseriesofup dateswithsubsetsofthedata,andtheresultisthe
sameeitherway.


176 Chapter15. DealingwithDimensions

For thisexample,the keyistop erform theup datesonesp eciesatatime.
Thatwaywhenwegeneratearandomsetofps,onlyoneofthemaectsthe
computedlikeliho o d,sothechanceofcho osingago o doneismuchb etter.

Here'sanewversionthatup datesonesp eciesatatime:

class Species4(Species):

```
def Update(self, data):
m = len(data)
```
```
for i in range(m):
one = numpy.zeros(i+1)
one[i] = data[i]
Species.Update(self, one)
```
Thisversioninherits__init__fromSpecies,soitrepresentsthehyp otheses
asalistofDirichletob jects(unlikeSpecies2).

Updatelo opsthroughtheobservedsp eciesandmakesanarray,one,withall
zerosandonesp eciescount. ThenitcallsUpdateintheparentclass,which
computesthelikeliho o dsandup datesthesub-hyp otheses.

Sointherunningexample,wedothreeup dates.TherstissomethinglikeI
haveseenthreelions. ThesecondisIhaveseentwotigersandnoadditional
lions. AndthethirdisIhaveseenoneb earandnomorelionsandtigers.

Here'sthenewversionofLikelihood:

# class Species4

```
def Likelihood(self, data, hypo):
dirichlet = hypo
like = 0
for i in range(self.iterations):
like += dirichlet.Likelihood(data)
```
```
# correct for the number of unseen species the new one
# could have been
m = len(data)
num_unseen = dirichlet.n - m + 1
like *= num_unseen
```
```
return like
```
ThisisalmostthesameasSpecies.Likelihood.Thedierenceisthefactor,
num_unseen. Thiscorrectionisnecessaryb ecauseeachtimeweseeasp ecies


15.8. We'renotdoneyet 177

forthersttime,wehavetoconsiderthatthereweresomenumb erofother
unseensp eciesthatwemighthaveseen.Forlargervaluesofntherearemore
unseensp eciesthatwecouldhaveseen,whichincreasesthelikeliho o dofthe
data.

Thisisasubtlep ointandIhavetoadmitthatIdidnotgetitrighttherst
time. But againIwasabletovalidatethisversionby comparingittothe
previousversions.

### 15.8 We'renotdoneyet

Performingtheup datesonesp eciesatatimesolvesoneproblem,butitcreates
another. Eachup datetakestimeprop ortionaltokm,wherekisthenumb er
ofhyp othesesandmisthenumb erofobservedsp ecies. Soifwedomup dates,
thetotalruntimeisprop ortionaltokm^2.

Butwecansp eedthingsupusingthesametrickweusedinSection15.6:we'll
getridoftheDirichletob jectsandcollapsethetwolevelsofthehierarchyinto
asingleob ject.Sohere'syetanotherversionofSpecies:

class Species5(Species2):

```
def Update(self, data):
m = len(data)
for i in range(m):
self.UpdateOne(i+1, data[i])
self.params[i] += data[i]
```
Thisversioninherits__init__fromSpecies2,so itusesnsandprobsto
representthedistributionofn,andparamstorepresenttheparametersofthe
Dirichletdistribution.

Updateissimilartowhatwesawintheprevioussection.Itlo opsthroughthe
observedsp eciesandcallsUpdateOne:

# class Species5

```
def UpdateOne(self, i, count):
likes = numpy.zeros(len(self.ns), dtype=numpy.double)
for i in range(self.iterations):
likes += self.SampleLikelihood(i, count)
```
```
unseen_species = [n-i+1 for n in self.ns]
likes *= unseen_species
```

178 Chapter15. DealingwithDimensions

```
self.probs *= likes
self.probs /= self.probs.sum()
```
ThisfunctionissimilartoSpecies2.Update,withtwochanges:

```
 Theinterfaceisdierent. Insteadofthewholedataset, wegeti,the
indexoftheobservedsp ecies,andcount,howmanyofthatsp ecieswe've
seen.
```
```
 Wehavetoapplyacorrectionfactorforthenumb erofunseensp ecies,
asinSpecies4.Likelihood. Thedierencehereisthatweup dateall
ofthelikeliho o dsatoncewitharraymultiplication.
```
Finally,here'sSampleLikelihood:

# class Species5

```
def SampleLikelihood(self, i, count):
gammas = numpy.random.gamma(self.params)
```
```
sums = numpy.cumsum(gammas)[self.ns[0]-1:]
```
```
ps = gammas[i-1] / sums
log_likes = numpy.log(ps) * count
```
```
log_likes -= numpy.max(log_likes)
likes = numpy.exp(log_likes)
```
```
return likes
```
Thisissimilarto Species2.SampleLikelihood; the dierenceisthat each
up dateonlyincludesasinglesp ecies,sowedon'tneedalo op.

Theruntimeofthisfunctionisprop ortionaltothenumb erofhyp otheses,k.
Itrunsmtimes,sotheruntimeoftheup dateisprop ortionaltokm.Andthe
numb erofiterationsweneedtogetanaccurateresultisusuallysmall.

### 15.9 The b elly button data

That'senoughab outlionsandtigersandb ears. Let'sgetbacktob ellybut-
tons.Togetasenseofwhatthedatalo oklike,considersub jectB1242,whose
sampleof 400 readsyielded 61 sp ecieswiththefollowingcounts:


15.9. Theb ellybuttondata 179

#### 92, 53, 47, 38, 15, 14, 12, 10, 8, 7, 7, 5, 5,

#### 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2,

#### 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

#### 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1

Thereareafewdominantsp eciesthatmakeupalargefractionofthewhole,
butmanysp eciesthatyieldedonlyasingleread. Thenumb erofthesesin-
gletons suggeststhat there arelikelyto b e atleast a fewunseensp ecies.

Inthe example with lions and tigers, we assume that each animal inthe
preserveisequallylikelytob eobserved.Similarly,fortheb ellybuttondata,
weassumethateachbacteriumisequallylikelytoyieldaread.

Inreality,eachstepinthedata-collectionpro cessmightintro ducebiases.Some
sp eciesmightb emorelikelytob epickedupbyaswab,ortoyieldidentiable
amplicons. Sowhenwetalkab outtheprevalenceofeachsp ecies,weshould
rememb erthissourceoferror.

IshouldalsoacknowledgethatIamusingthetermsp ecieslo osely. First,
bacterialsp eciesarenotwelldened. Second,somereadsidentifyapartic-
ularsp ecies,othersonlyidentifyagenus. Tob emoreprecise,Ishouldsay
op erationaltaxonomicunit,orOTU.

Nowlet'spro cesssomeoftheb ellybuttondata.IdeneaclasscalledSubject
torepresentinformationab outeachsub jectinthestudy:

class Subject(object):

```
def __init__(self, code):
self.code = code
self.species = []
```
Eachsub jecthasastringco de,likeB1242,andalistof(count,sp eciesname)
pairs,sortedinincreasingorderbycount.Subjectprovidesseveralmetho ds
tomakeiteasytoaccessthesecountsandsp eciesnames. Youcanseethe
detailsinhttp://thinkbayes.com/species.py. Formore information see
Section0.3.

Subject provides a metho d named Process that creates and up dates a
Species5suite,whichrepresentsthedistributionsofnandtheprevalences.

AndSuite2providesDistOfN,whichreturnsthep osteriordistributionofn.

# class Suite2

```
def DistN(self):
```

180 Chapter15. DealingwithDimensions

0.00 (^606570) Number of species 75 80 85 90 95 100
0.02
0.04
0.06
0.08
0.10
0.12
Prob
B1242
Figure15.3:Distributionofnforsub jectB1242.
items = zip(self.ns, self.probs)
pmf = thinkbayes.MakePmfFromItems(items)
return pmf
Figure15.3showsthedistributionof nforsub jectB1242. Theprobability
thatthereareexactly 61 sp ecies,andnounseensp ecies,isnearlyzero. The
mostlikelyvalueis72,with90%credibleinterval 66 to79.Atthehighend,
itisunlikelythatthereareasmanyas 87 sp ecies.
Next we computethe p osterior distributionof prevalence foreach sp ecies.
Species2providesDistOfPrevalence:
# class Species2
def DistOfPrevalence(self, index):
metapmf = thinkbayes.Pmf()
for n, prob in zip(self.ns, self.probs):
beta = self.MarginalBeta(n, index)
pmf = beta.MakePmf()
metapmf.Set(pmf, prob)
mix = thinkbayes.MakeMixture(metapmf)
return metapmf, mix
indexindicateswhichsp ecieswewant.Foreachn,wehaveadierentp oste-
riordistributionofprevalence.
Thelo opiteratesthroughthep ossiblevaluesofnandtheirprobabilities.For
eachvalueofnitgetsaBetaob jectrepresentingthemarginaldistributionfor


15.10. Predictivedistributions 181

```
0.00.00 0.05 0.10 Prevalence0.15 0.20 0.25
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
Prob
1 (92)
2 (53)
3 (47)
4 (38)
5 (15)
```
```
Figure15.4:Distributionofprevalencesforsub jectB1242.
```
theindicatedsp ecies. Rememb erthatBetaob jectscontain theparameters
alphaandbeta;theydon'thavevaluesandprobabilitieslikeaPmf,butthey
provideMakePmf,whichgeneratesadiscreteapproximationtothecontinuous
b etadistribution.

metapmfisameta-Pmfthatcontainsthedistributionsofprevalence,condi-
tionedonn. MakeMixturecombinesthemeta-Pmfintomix,whichcombines
theconditionaldistributionsintoasingledistributionofprevalence.

Figure15.4showsresultsforthevesp ecieswiththemostreads. Themost
prevalentsp eciesaccountsfor23%ofthe 400 reads,butsincetherearealmost
certainlyunseensp ecies,the mostlikelyestimateforits prevalenceis20%,
with90%credibleintervalb etween17%and23%.

## 15.10 Predictivedistributions

Iintro ducedthehiddensp eciesproblemintheformoffourrelatedquestions.
Wehaveansweredthersttwobycomputingthep osteriordistributionforn
andtheprevalenceofeachsp ecies.

Theothertwoquestionsare:

```
 Ifweareplanningtocollectadditionalreads,canwepredicthowmany
newsp ecieswearelikelytodiscover?
```
```
 Howmanyadditionalreadsareneededto increasethe fractionofob-
servedsp eciestoagiventhreshold?
```

182 Chapter15. DealingwithDimensions

(^2050100150200) # samples 250 300 350 400 450
0
2
4
6
8
10
# species
Figure15.5:Simulatedrarefactioncurvesforsub jectB1242.
Toanswerpredictivequestionslikethiswecanusethep osteriordistributions
tosimulatep ossiblefutureeventsandcomputepredictivedistributionsforthe
numb erofsp ecies,andfractionofthetotal,wearelikelytosee.
Thekernelofthesesimulationslo okslikethis:

1. Cho osenfromitsp osteriordistribution.
2. Cho oseaprevalenceforeachsp ecies,includingp ossibleunseensp ecies,
    usingtheDirichletdistribution.
3. Generatearandomsequenceoffutureobservations.
4. Computethenumb erofnewsp ecies,num_new,asafunctionofthenum-
    b erofadditionalreads,k.
5. Rep eat the previous steps and accumulate the joint distribution of
    num_newandk.

Andhere'stheco de. RunSimulationrunsasinglesimulation:

# class Subject

```
def RunSimulation(self, num_reads):
m, seen = self.GetSeenSpecies()
n, observations = self.GenerateObservations(num_reads)
```
```
curve = []
for k, obs in enumerate(observations):
```

15.10. Predictivedistributions 183

```
seen.add(obs)
```
```
num_new = len(seen) - m
curve.append((k+1, num_new))
```
```
return curve
```
num_readsisthenumb erofadditionalreadstosimulate. misthenumb erof
seensp ecies,andseenisasetofstringswithauniquenameforeachsp ecies.
nisarandomvaluefromthep osteriordistribution,andobservationsisa
randomsequenceofsp eciesnames.

Eachtimethroughthelo op,weaddthenewobservationtoseenandrecord
thenumb erofreadsandthenumb erofnewsp eciessofar.

TheresultofRunSimulationisararefactioncurve,representedasalistof
pairswiththenumb erofreadsandthenumb erofnewsp ecies.

Before we see the results, let's lo ok at GetSeenSpecies and
GenerateObservations.

#class Subject

```
def GetSeenSpecies(self):
names = self.GetNames()
m = len(names)
seen = set(SpeciesGenerator(names, m))
return m, seen
```
GetNamesreturnsthelistofsp eciesnamesthatapp earinthedatales,but
formanysub jectsthesenamesarenotunique.SoIuseSpeciesGeneratorto
extendeachnamewithaserialnumb er:

def SpeciesGenerator(names, num):
i = 0
for name in names:
yield '%s-%d' % (name, i)
i += 1

```
while i < num:
yield 'unseen-%d' % i
i += 1
```
Given a name like Corynebacterium, SpeciesGenerator yields
Corynebacterium-1. When the list of names is exhausted, it yields
nameslikeunseen-62.

HereisGenerateObservations:


184 Chapter15. DealingwithDimensions

# class Subject

```
def GenerateObservations(self, num_reads):
n, prevalences = self.suite.SamplePosterior()
```
```
names = self.GetNames()
name_iter = SpeciesGenerator(names, n)
```
```
d = dict(zip(name_iter, prevalences))
cdf = thinkbayes.MakeCdfFromDict(d)
observations = cdf.Sample(num_reads)
```
```
return n, observations
```
Again, num_reads is the numb er of additional reads to generate. n and
prevalencesaresamplesfromthep osteriordistribution.

cdf isaCdfob jectthatmapssp ecies names,includingthe unseen,to cu-
mulativeprobabilities. UsingaCdfmakesitecienttogeneratearandom
sequenceofsp eciesnames.

Finally,hereisSpecies2.SamplePosterior:

```
def SamplePosterior(self):
pmf = self.DistOfN()
n = pmf.Random()
prevalences = self.SamplePrevalences(n)
return n, prevalences
```
AndSamplePrevalences,whichgeneratesasampleofprevalencesconditioned
onn:

# class Species2

```
def SamplePrevalences(self, n):
params = self.params[:n]
gammas = numpy.random.gamma(params)
gammas /= gammas.sum()
return gammas
```
WesawthisalgorithmforgeneratingrandomvaluesfromaDirichletdistribu-
tioninSection15.4.

Figure15.5shows 100 simulatedrarefactioncurvesforsub jectB1242. The
curvesarejittered; thatis,Ishiftedeachcurvebyarandomosetsothey
wouldnotalloverlap.Byinsp ectionwecanestimatethatafter 400 morereads
wearelikelytond26newsp ecies.


15.11. Jointp osterior 185

0.0 (^024) # new species 6 8 10 12 14
0.2
0.4
0.6
0.8
1.0
Prob
k=100
k=200
k=400
k=800
Figure15.6: Distributionsof thenumb erofnewsp eciesconditionedonthe
numb erofadditionalreads.

## 15.11 Jointp osterior.

Wecanusethesesimulationstoestimatethejointdistributionofnum_newand
k,andfromthatwecangetthedistributionofnum_newconditionedonany
valueofk.

def MakeJointPredictive(curves):
joint = thinkbayes.Joint()
for curve in curves:
for k, num_new in curve:
joint.Incr((k, num_new))
joint.Normalize()
return joint

MakeJointPredictivemakesaJointob ject,whichisaPmfwhosevaluesare
tuples.

curvesisalistofrarefactioncurvescreatedbyRunSimulation. Eachcurve
containsalistofpairsofkandnum_new.

Theresultingjointdistributionisamapfromeachpairtoitsprobabilityof
o ccurring. Giventhejointdistribution,wecanuseJoint.Conditionalget
thedistributionofnum_newconditionedonk(seeSection9.6).

Subject.MakeConditionalstakesalistofksandcomputestheconditional
distributionofnum_newforeachk.TheresultisalistofCdfob jects.

def MakeConditionals(curves, ks):
joint = MakeJointPredictive(curves)


186 Chapter15. DealingwithDimensions

```
0.00.65 0.70 0.75Fraction of species seen0.80 0.85 0.90 0.95 1.00 1.05
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
Probability
```
```
800
```
```
100
```
```
200
```
```
10
```
```
400
```
```
1000
600
```
Figure15.7:ComplementaryCDFofcoverageforarangeofadditionalreads.

```
cdfs = []
for k in ks:
pmf = joint.Conditional(1, 0, k)
pmf.name ='k=%d' % k
cdf = pmf.MakeCdf()
cdfs.append(cdf)
```
```
return cdfs
```
Figure15.6showstheresults.After 100 reads,themedianpredictednumb er
ofnewsp eciesis2; the90% credibleintervalis 0 to5. After 800 reads,we
exp ecttosee 3 to 12 newsp ecies.

## 15.12 Coverage

Thelastquestionwewanttoansweris,Howmanyadditionalreadsareneeded
toincreasethefractionofobservedsp eciestoagiventhreshold?

Toanswerthisquestion,weneedaversionofRunSimulationthatcomputes
thefractionofobservedsp eciesratherthanthenumb erofnewsp ecies.

# class Subject

```
def RunSimulation(self, num_reads):
m, seen = self.GetSeenSpecies()
n, observations = self.GenerateObservations(num_reads)
```

15.12. Coverage 187

```
curve = []
for k, obs in enumerate(observations):
seen.add(obs)
```
```
frac_seen = len(seen) / float(n)
curve.append((k+1, frac_seen))
```
```
return curve
```
Nextwelo opthrougheachcurveandmakeadictionary,d,thatmapsfrom
thenumb erofadditionalreads,k,toalistoffracs;thatis,alistofvalues
forthecoverageachievedafterkreads.

```
def MakeFracCdfs(self, curves):
d = {}
for curve in curves:
for k, frac in curve:
d.setdefault(k, []).append(frac)
```
```
cdfs = {}
for k, fracs in d.iteritems():
cdf = thinkbayes.MakeCdfFromList(fracs)
cdfs[k] = cdf
```
```
return cdfs
```
Thenfor eachvalue ofk wemakeaCdfoffracs; thisCdfrepresentsthe
distributionofcoverageafterkreads.

Rememb erthat theCDF tellsyouthe probabilityof fallingb elow agiven
threshold,sothecomplementaryCDFtellsyoutheprobabilityof exceeding
it.Figure15.7showscomplementaryCDFsforarangeofvaluesofk.

Toreadthisgure,selectthelevelofcoverageyouwanttoachievealongthe
x-axis.Asanexample,cho ose90%.

Nowyoucanreadupthecharttondtheprobabilityofachieving90%cover-
ageafterkreads.Forexample,with 200 reads,youhaveab outa40%chance
ofgetting90%coverage. With 1000 reads,youhavea90%chanceofgetting
90%coverage.

Withthat, we haveansweredthe four questions that makeupthe unseen
sp eciesproblem. Tovalidatethealgorithmsinthischapterwithrealdata,I
hadtodealwithafewmoredetails.Butthischapterisalreadyto olong,soI
won'tdiscussthemhere.


188 Chapter15. DealingwithDimensions

You can read ab out the problems, and how I addressed
them, at [http://allendowney.blogspot.com/2013/05/](http://allendowney.blogspot.com/2013/05/)
belly- button- biodiversity- end- game.html.

You candownloadthe co deinthischapterfromhttp://thinkbayes.com/
species.py.FormoreinformationseeSection0.3.

## 15.13 Discussion

TheUnseenSp eciesproblemisanareaofactiveresearch,andIb elievethe
algorithminthischapterisanovelcontribution. Soinfewerthan 200 pages
wehavemadeitfromthebasicsofprobabilitytotheresearchfrontier. I'm
veryhappyab outthat.

Mygoalforthisb o okistopresentthreerelatedideas:

```
 Bayesianthinking: ThefoundationofBayesiananalysisistheideaof
usingprobabilitydistributionstorepresentuncertainb eliefs,usingdata
toup datethosedistributions,andusingtheresultstomakepredictions
andinformdecisions.
```
```
 A computationalapproach: Thepremiseof thisb o okisthat itis
easierto understandBayesiananalysisusingcomputationratherthan
math,andeasiertoimplementBayesianmetho dswithreusablebuilding
blo cksthatcanb erearrangedtosolvereal-worldproblemsquickly.
```
```
 Iterative mo deling: Mostreal-worldproblems involvemo deling de-
cisionsandtrade-osb etweenrealismandcomplexity. Itisoftenim-
p ossibletoknowaheadoftimewhatfactorsshouldb eincludedinthe
mo delandwhichcanb eabstractedaway.Theb estapproachistoiter-
ate,startingwithsimplemo delsandaddingcomplexitygradually,using
eachmo deltovalidatetheothers.
```
Theseideasareversatileandp owerful;theyareapplicabletoproblemsinevery
area of science andengineering, fromsimpleexamplesto topics of current
research.

Ifyoumadeitthisfar,youshouldb epreparedtoapplytheseto olstonew
problemsrelevanttoyourwork.Ihop eyoundthemuseful;letmeknowhow
itgo es!


# Index

#### ABC, 116

abstracttyp e,18, 58
Anaconda,vii
ApproximateBayesian Computation,
116
arrivalrate, 87
Axtell,Rob ert, 26

bacteria, 165
Bayesfactor,45,123,125,126, 134
Bayes'stheorem, 3
derivation, 3
o ddsform, 44
Bayesianframework, 13
Behavioral Risk Factor Surveillance
System, 107
b ellybutton, 165
Bernoullipro cess, 71
b etadistribution,39, 166
Betaob ject,39, 181
biasedcoin, 123
binomialco ecient, 175
binomialdistribution,132,157, 159
binomiallikeliho o dfunction, 39
bio diversity, 165
b ogus,110, 124
Boston, 79
BostonBruins, 69
BRFSS,107, 116
bucket, 150
busstopproblem,77, 78

cache,115, 148
calibration, 137
Campb ell-Ricketts,Tom, 157

```
carcinoma, 147
causation,157, 162
CDC, 107
Cdf,28,54,61,83, 184
CentersforDiseaseControl, 107
centralcredibleinterval, 102
classicalestimation, 109
clone,vii
co ecientofvariation, 108
cointoss, 1
collectivelyexhaustive, 6
CollegeBoard, 130
complementaryCDF, 187
concretetyp e,18, 58
conditional distribution, 101, 104,
146,150,155, 185
conditionalprobability, 1
conjointprobability, 2
conjugateprior, 39
conjunction, 3
continuousdistribution, 39
contributors,ix
convergence,37, 40
co okieproblem,3,12, 44
co okie.py, 13
correlatedrandomvalue, 153
coverage,186, 187
crankscience, 107
credibleinterval,27, 100
Cromwell'srule, 41
Cromwell,Oliver, 41
cumulativedistributionfunction, 28,
83
cumulativeprobability,152, 184
```

190 Index

cumulativesum, 175

Davidson-Pilon,Cameron, 56
decisionanalysis,56,64,68, 90
degreeofb elief, 1
density,57,59,63, 109
dep endence,2,100, 102
diachronicinterpretation, 5
dice,11, 21
Diceproblem, 21
diceproblem, 24
Dirichletdistribution,166, 182
distribution,11,54, 68
op erations, 46
divide-and-conquer, 10
doublingtime, 144
DungeonsandDragons,21, 47

ecacy, 134
enumeration,47, 50
error, 60
ESP, 127
Europroblem,33,41,116, 123
evidence,4,35,45,46,100,107,123
127, 129
exception, 112
exp onentialdistribution,71,75, 144
exp onentiation, 50
extra-sensoryp erception, 127

faircoin, 123
fork,vii
forwardproblem, 158

gammadistribution,170, 174
Gaussiandistribution,57,58,61,70,
108, 116,119, 131,136, 137,
152
GaussianPDF, 58
Gee,Steve, 56
Geigercounterproblem,157, 162
generator,152,153, 183
Germantankproblem,22, 30

```
Git,vii
GitHub,vii
growthrate, 152
```
```
heartattack, 1
height, 108
Heuer,Andreas, 71
hierarchicalmo del,160,162, 168
Hoag,Dirk, 77
ho ckey, 69
horseracing, 44
Horsford,Eb enNorton, 107
Hume,David, 128
hyp othesistesting, 123
```
```
implementation,18, 58
indep endence,2, 7,48,51, 100,102,
140,147, 166
informativeprior, 30
insectsamplingproblem, 78
installation,viii
inter-quartilerange, 119
interface,18, 58
intuition, 8
inverseproblem, 158
IQR, 119
itemresp onsetheory, 135
iterativemo deling, 76
iterator, 148
```
```
Jaynes,E.T., 157
Joint,100102,104, 109
jointdistribution,100,104,109,140,
149,150,155,166,182, 185
Jointob ject, 185
Jointpmf, 96
```
```
KDE,57, 59
kerneldensityestimation,57, 59
Kidneytumorproblem, 143
```
```
leastsquarest, 151
lightbulbproblem, 78
```

Index 191

Likeliho o d, 14
likeliho o d,5, 60, 62, 63, 86, 97, 99,
109,121,125, 158
likeliho o dfunction, 23
likeliho o dratio,45,125,126, 134
linspace, 110
lionsandtigersandb ears, 166
lo comotiveproblem,22,30, 116
logscale, 150
logtransform, 112
log-likeliho o d,113,174, 175
logarithm, 112

MandMproblem,6, 17
MacKay,David,33,45,93, 123
MakeMixture,74,75,82,90,136, 181
marginaldistribution,100,104, 167
matplotlib,viii
maximum, 50
maximumlikeliho o d,27,35,68,102,
110,113, 166
meansquarederror, 24
Meckel,Johann, 107
median, 35
memoization, 115
meta-Pmf,74,75,82,90,136, 181
meta-Suite,159, 168
microbiome, 165
mixture, 52, 7375, 82, 89, 90, 144,
181
mo deling,v,30,41,76,121,129,144,
146
mo delingerror,134,151, 155
MontyHallproblem,8, 15
Mosteller,Frederick, 22
Mult, 13
multinomialco ecient, 170
multinomial distribution, 166, 170,
174
mutuallyexclusive, 6

NationalHo ckeyLeague, 70

```
navel, 165
NHL, 70
non-linear, 90
normaldistribution, 58
normalize, 64
normalizingconstant,5,7,44, 161
nuisanceparameter, 140
NumPy,viii
numpy,59, 61, 65,70, 88,110, 137,
167, 170, 172174, 176178,
184
```
```
ob jectivity, 30
observerbias,81, 91
o dds, 43
OlinCollege, 79
Oliver'sblo o dproblem, 45
op erationaltaxonomicunit, 179
optimization,37,114,115,161, 172
OTU, 179
overtime, 75
```
```
Paintballproblem, 95
parameter, 39
PDF,40, 70
Pdf, 57
PEP8,viii
p ercentile,28,151, 154
Pmf,54, 57
Pmfclass, 11
Pmfmetho ds, 12
Poissondistribution,7173,86, 158
Poissonpro cess,vi,69,71,75,78,80,
157
p osterior, 5
p osteriordistribution,13, 35
p owerlaw, 26
predictivedistribution,78,85,86,89,
139, 181
prevalence,165,168, 179
PriceisRight, 55
prior, 5
```

192 Index

priordistribution,12, 25
Prob, 12
probability, 57
conditional, 1
conjoint, 2
probabilitydensity, 57
probabilitydensityfunction,40,57, 70
probabilitymassfunction, 11
pro cess, 71
pseudo colorplot, 150
pyrosequencing, 165

radioactivedecay, 157
randomsample,170, 184
rarefactioncurve,183, 185
rawscore, 132
rDNA, 165
RedLineproblem, 79
Reddit,41, 143
regressiontesting,vii,175, 177
renormalize, 13
rep ository,vii
robustestimation, 119

samplebias, 179
samplestatistics, 116
SAT, 129
scaledscore, 130
SciPy,viii
scipy,58,59, 113
serialcorrelation,152, 153
Showcase, 55
simulation,47,50,53,146,148, 182
Sivia,D.S., 95
sp ecies,165, 179
sphere,147, 151
standardizedtest, 129
stick, 8
strangsp eed, 98
sub jectiveprior, 5
sub jectivity, 30
suddendeath, 75

```
suite, 6
Suiteclass, 16
summarystatistic,68,119, 121
swampingthepriors,37, 40
switch, 8
```
```
tablemetho d, 7
templatemetho dpattern, 18
totalprobability, 6
triangledistribution,37, 126
trigonometry, 97
tumortyp e, 152
tuple, 38
```
```
uncertainty, 89
underow,112, 174
uniformdistribution, 171
uniformdistribution,34,52, 82
uninformativeprior, 30
UnseenSp eciesproblem, 165
Up date, 13
```
```
VancouverCanucks, 69
VariabilityHyp othesis, 107
Veterans'BenetAdministration, 146
volume, 147
```
```
Weibulldistribution, 78
wordfrequency, 11
```

