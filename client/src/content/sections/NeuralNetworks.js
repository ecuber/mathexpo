import React, { useState } from 'react'
import { Heading, Button, chakra, Center } from '@chakra-ui/react'
import { Emoji, P, Float, Quiz } from '../../components/layout'
import { ScatterNN, Folding, Semi, Plot } from '../../components/graphs'

const NeuralNetworks = props => {
  const [semi, setSemi] = useState(false)
  return <>
    <P>While support vector machines work a lot better than nothing on image recognition tasks like identifying pedestrians, they&apos;re not good enough for real self-driving vehicle technology.</P>
    <P>To think about why this is the case, imagine a slightly different dataset. </P>
    <Float dir='right'>
      <ScatterNN/>
    </Float>
    <P>These points...</P>
    <Quiz>
      <>can&apos;t be separated by a line</>
      <>don&apos;t seem to show any patterns at all</>
      <><Emoji symbol='✅' label='green check mark'/> Exactly. There is no separating line. However, the teal ones do seem to be in the middle and the tomato ones near the edges.</>
      <><Emoji symbol='🤔' label='thinking face'/> Well, the teal ones do seem to be in the middle and the tomato ones near the edges.</>
    </Quiz>
    <P>We should be able to separate these points, just <em>not with a line.</em> We would want to use a <em>curve</em> instead, perhaps one which encircles the teal points in the middle.</P>
    <P>It shouldn&apos;t be surprising that this kind of situation comes up in practice a lot, because there&apos;s nothing all that special about lines and planes. It could very well happen that the data from each class (pedestrian/non-pedestrian) tend to show up in particular regions in the space of images, but that those regions happen to be entangled from the point of a view of a separating line/plane.</P>
    <P>If we&apos;re going to overcome the &quot;flatness&quot; limitation of lines and planes, we&apos;ll need the ability to <em>morph</em> or <em>fold</em> space somehow.</P>
    <Float dir='right'>
      <Folding/>
    </Float>
    <P>For example, perhaps the simplest way to fold space is to choose a line and <strong>reflect every point which is below it.</strong> Try dragging the <strong>gray</strong> line in such a way that the classes of points would be <strong>readily separable</strong> by a second line (the dark blue one).</P>
    <P>Being able to use these two lines in tandem gives us a lot more flexibility.</P>
    <P>The mathematical term for the idea we&apos;re leveraging here is <strong>composition.</strong> In other words, we take two actions in sequence: first we reflect all the points based on the location of the gray line, and then we figure out which side of the blue line each resulting point is on.</P>
    <br/>
    <P>We call these sequential actions <strong>layers</strong>. For example, we&apos;d say that the reflection in the mathlet above is the first layer, and the separating line is the second layer.</P>
    <P>Furthermore, there&apos;s no reason to stop at two layers! We could, for example, fold across one line, then fold across a second line, and then separate the points with a third line.</P>
    <P>This generalization of the support vector machine, which allows a sequence of space-morphing actions prior to separating the points, is called a <strong>neural network.</strong></P>

    <Heading size='lg' as='h3'>Sticky Axes: ReLU Layers</Heading>
    <P>One popular space-morphing action is <em>to make the coordinate axes sticky.</em> This might seem strange, but actually it tends to work quite well.</P>
    <Float dir='right'>
      <Semi rerender={semi}/>
      <Center><Button size='md' onClick={() => setSemi(!semi)}>Reset</Button></Center>
    </Float>
    <P>Consider the following problem, where we&apos;re trying to classify every point inside the semicircle as yellow, and every point outside as purple. </P>
    <P>To accomplish this feat, we&apos;re allowed to <em>linearly</em> transform the points however we want (rotate/scale/translate/etc). </P>
    <P>You can move the green and blue vectors to control this transformation. Then any points which happened to cross a coordinate axis get snapped back to it. Lastly, we try to separate the points using the line (which you can rotate using the tomtato handle or translate by grabbing it anywhere else).</P>
    <P>See if you can get most of the points classified correctly.</P>
    <P>This kind of layer (one that uses linear transormation of the data), is known in the business as a dense layer with ReLU activation (pronounced RAY-loo). A typical neural network used in research or industry works on exactly the same principles as the example we just experimented with. </P>
    <P>The key differences are:
      <chakra.ol ml={10}>
        <li><strong>The number of layers.</strong> Normally, there are many more than two.</li>
        <li><strong>The number of dimensions</strong> in the spaces being transformed along the way. Again, typically many more than two.</li>
        <li><strong><em>Reduced</em> flexibility</strong> in what the transformations can do.</li>
      </chakra.ol>
    </P>
    <Plot/>
    <br/>
    <br/>
    <P>Here&apos;s an example where our data points are in 3D space. We&apos;ll use a neural network with several dense layers with ReLU activation. Some of the layers use more than three dimensions, so isn&apos;t possible to visualize each transformation as we did above. But we can still take a look at the surface the model uses to predict: teal on one side, tomato on the other.</P>
    <P>Adjust the slider to observe how the decision surface &quot;shrink wraps&quot; around the tomato points as the model trains (the values on the slider indicate the number of transformations that have been taken place).</P>
    <P>At the end, are there still some points on the wrong side of the surface?</P>
    <Quiz>
      <>Yes, there are some misclassified points</>
      <>Nope!</>
      <><Emoji symbol='✅' label='green check mark'/> Yes, there are still a few tomato-colored points above the surface.</>
      <><Emoji symbol='🤔' label='thinking face'/> If you look closely, you&apos;ll find that there are still a few tomato-colored points above the surface.</>
    </Quiz>
    <P>The decision surface has sharp creases, just like the decision boundary in the two-dimensional case has sharp corners. Nevertheless, the model has enough flexibility to use its flat facets to mold to the data and separate out the points quite nicely.</P>
    <P>This picture perfectly encapsulates one aspect of what makes neural networks so powerful: in many real data problems, the points from the two classes are somewhat entangled, but not hopelessly so. Neural networks have the flexibility to produce decision surfaces of pretty much any shape, and the training process often does allow suitable shapes to form.</P>
  </>
}

export default NeuralNetworks
