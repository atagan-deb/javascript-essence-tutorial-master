let isFlushig = false;
let isFlushPending = false;
const queue = [];
const p = Promise.resolve();

function nextTick(fn) {
  return p.then(fn);
}

function queueJob(job) {
  if (!queue.includes(job)) {
    queue.push(job);
    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushPending && !isFlushig) {
    isFlushPending = true;
    nextTick(flushJobs);
  }
}

function flushJobs() {
  let job;
  isFlushig = true;
  isFlushPending = false;
  while ((job = queue.shift()) !== undefined) {
    job();
  }
  isFlushig = false;
}

export { queueJob, nextTick };
