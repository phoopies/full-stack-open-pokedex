# Exercise 1

## Haskell common CI-steps

### Linting
The most commonly used and recommended linter for Haskell is `hlint`. It can be installed to a project by running `stack install hlint` or `cabal install hlint`.
It it also recommended to add a wrapper to ones code-editor to see hints and suggestions right in the editor. For Visual Studio Code one can install the `haskell-linter` extension from the _Extensions_ tab.

### Testing
There are mainly two recommendations for testing in Haskell `HUnit` and `QuickCheck` packages. The latter is recommended for lightweight testing and is easier to get started with. Common practice is to include all tests in a _tests_ directory located in the root of the project.

### Building
One can either use `Stack` or `Cabal` to build Haskell projects. From these two `Stack` seems to be the more popular choice at the time of writing as it aims at reproducible builds by i.e. freezing dependencies for the project [Compare to _package.json_]. 

## Alternative CI/CD tools

### Gradle
Like `Jenkins` `Gradle` is also an open-source CI/CD tool which can be self-hosted. `Gradle` is used by several well-known companies such as _Google_ and _Netflix_.

### Buddy
`Buddy` is a subscription-based CI/CD tool based on the cloud which can build, test and deploy websites and applications from three different repository providers: _GitHub_, _GitLab_ and _BitBucket_. It is available for free with 120 pipeline runs a month. 
 
## hypothetical situation
*an application being worked on by a team of about 6 people. The application is in active development and will be released soon.*

### Self-hosted vs cloud-based
With my limited knowledge I'd recommend a **cloud-based** setup for this team as it is easier and quicker to bring into use. This is important as the application is **already in active development and soon released**. 

Assuming, based on the team size in terms of people, the project is relatively **small-scale**. Therefore the requirements/features for a CI solution are likely to be quite common and widely available in most **cloud-based** solutions. Of course, if the team has some special requirements then it might be wise to look into a **self-hosted** solution, which might be less expensive in the long run [More information required on the project type and CI requirements].

Talking about expenses, if the application is likely to exponentially grow in a short time it might be a good idea to invest in a self-hosted setup as cloud-based solutions can get quite expensive fast. Then again, if the project is open-source, a cloud-based option might still be reasonable as many providers host open-source projects for free [More information on the project scale required]. 