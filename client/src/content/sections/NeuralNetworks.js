import React, { useState } from 'react'
import { Heading, Button, chakra, Center } from '@chakra-ui/react'
import { Caption, Emoji, Float, Quiz } from '../../components/layout'
import { ScatterNN, Folding, Semi, Plot } from '../../components/graphs'
import { data, layout, config } from '../../content/plotly.json'

const NeuralNetworks = props => {
  const [semi, setSemi] = useState(false)
  const [solution, setSolution] = useState(false)
  return <>
    <p>While support vector machines work a lot better than nothing on image recognition tasks like identifying pedestrians, they&apos;re not good enough for real self-driving vehicle technology.</p>
    <p>To think about why this is the case, imagine a slightly different dataset. </p>
    <Float dir='right'>
      <ScatterNN/>
    </Float>
    <p>These points...</p>
    <Quiz placeholder={1}>
      <>don&apos;t seem to show any patterns at all</>
      <>can&apos;t be separated by a line</>
      <><Emoji symbol='🤔' label='thinking face'/> Well, the teal ones do seem to be in the middle and the tomato ones near the edges.</>
      <><Emoji symbol='✅' label='green check mark'/> Exactly. There is no separating line. However, the teal ones do seem to be in the middle and the tomato ones near the edges.</>
    </Quiz>
    <p>We should be able to separate these points, just <em>not with a line.</em> We would want to use a <em>curve</em> instead, perhaps one which encircles the teal points in the middle.</p>
    <p>It shouldn&apos;t be surprising that this kind of situation comes up in practice a lot, because there&apos;s nothing all that special about lines and planes. It could very well happen that the data from each class (pedestrian/non-pedestrian) tend to show up in particular regions in the space of images, but that those regions happen to be entangled from the point of a view of a separating line/plane.</p>
    <p>If we&apos;re going to overcome the &quot;flatness&quot; limitation of lines and planes, we&apos;ll need the ability to <em>morph</em> or <em>fold</em> space somehow.</p>
    <Float mb={0} dir='right'>
      <Folding solution={solution}/>
      <Caption>Try dragging the gray line <strong>before</strong> revealing a solution!</Caption>
      <Center mt={1}><Button shadow='md' size='md' mt={1} mb={0} onClick={() => setSolution(!solution)}>{!solution ? 'Show a possible solution' : 'Restore default setup'}</Button></Center>
    </Float>
    <p>For example, perhaps the simplest way to fold space is to choose a line and <strong>reflect every point which is below it.</strong> Try dragging the <strong>gray</strong> line in such a way that the classes of points would be <strong>readily separable</strong> by a second line (the dark blue one).</p>
    <p>Being able to use these two lines in tandem gives us a lot more flexibility.</p>
    <p>The mathematical term for the idea we&apos;re leveraging here is <strong>composition.</strong> In other words, we take two actions in sequence: first we reflect all the points based on the location of the gray line, and then we figure out which side of the blue line each resulting point is on.</p>
    <br/>
    <p>We call these sequential actions <strong>layers</strong>. For example, we&apos;d say that the reflection in the mathlet above is the first layer, and the separating line is the second layer.</p>
    <p>Furthermore, there&apos;s no reason to stop at two layers! We could, for example, fold across one line, then fold across a second line, and then separate the points with a third line.</p>
    <p>This generalization of the support vector machine, which allows a sequence of space-morphing actions prior to separating the points, is called a <strong>neural network.</strong></p>

    <Heading size='lg' as='h3'>Sticky Axes: ReLU Layers</Heading>
    <p>One popular space-morphing action is <em>to make the coordinate axes sticky.</em> This might seem strange, but actually it tends to work quite well.</p>
    <Float dir='right'>
      <Semi rerender={semi}/>
      <Center><Button shadow='md' size='md' onClick={() => setSemi(!semi)}>Reset</Button></Center>
    </Float>
    <p>Consider the following problem, where we&apos;re trying to classify every point inside the semicircle as yellow, and every point outside as purple. </p>
    <p>To accomplish this feat, we&apos;re allowed to <em>linearly</em> transform the points however we want (rotate/scale/translate/etc). </p>
    <p>You can move the green and blue vectors to control this transformation. Then any points which happened to cross a coordinate axis get snapped back to it. Lastly, we try to separate the points using the line (which you can rotate using the tomtato handle or translate by grabbing it anywhere else).</p>
    <p>See if you can get most of the points classified correctly.</p>
    <p>This kind of layer (one that uses linear transormation of the data), is known in the business as a dense layer with ReLU activation (pronounced RAY-loo). A typical neural network used in research or industry works on exactly the same principles as the example we just experimented with. </p>
    <p>The key differences are:
      <chakra.ol ml={10}>
        <li><strong>The number of layers.</strong> Normally, there are many more than two.</li>
        <li><strong>The number of dimensions</strong> in the spaces being transformed along the way. Again, typically many more than two.</li>
        <li><strong><em>Reduced</em> flexibility</strong> in what the transformations can do.</li>
      </chakra.ol>
    </p>
    <Plot data={data} layout={layout} config={config}/>
    <br/>
    <br/>
    <p>Here&apos;s an example where our data points are in 3D space. We&apos;ll use a neural network with several dense layers with ReLU activation. Some of the layers use more than three dimensions, so isn&apos;t possible to visualize each transformation as we did above. But we can still take a look at the surface the model uses to predict: teal on one side, tomato on the other.</p>
    <p>Adjust the slider to observe how the decision surface &quot;shrink wraps&quot; around the tomato points as the model trains (the values on the slider indicate the number of transformations that have been taken place).</p>
    <p>At the end, are there still some points on the wrong side of the surface?</p>
    <Quiz>
      <>Yes, there are some misclassified points</>
      <>Nope!</>
      <><Emoji symbol='✅' label='green check mark'/> Yes, there are still a few tomato-colored points above the surface.</>
      <><Emoji symbol='🤔' label='thinking face'/> If you look closely, you&apos;ll find that there are still a few tomato-colored points above the surface.</>
    </Quiz>
    <p>The decision surface has sharp creases, just like the decision boundary in the two-dimensional case has sharp edges. Nevertheless, the model has enough flexibility to use its flat facets to mold to the data and separate out the points quite nicely.</p>
    <p>This picture perfectly encapsulates one aspect of what makes neural networks so powerful: in many real data problems, the points from the two classes are somewhat entangled, but not hopelessly so. Neural networks have the flexibility to produce decision surfaces of pretty much any shape, and the training process often does allow suitable shapes to form.</p>
  </>
}

export default NeuralNetworks
