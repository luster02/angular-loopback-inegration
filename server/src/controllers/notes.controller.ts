import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Note} from '../models';
import {NoteRepository} from '../repositories';

export class NotesController {
  constructor(
    @repository(NoteRepository)
    public noteRepository : NoteRepository,
  ) {}

  @post('/notes', {
    responses: {
      '200': {
        description: 'Note model instance',
        content: {'application/json': {schema: getModelSchemaRef(Note)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Note, {
            title: 'NewNote',
            exclude: ['id'],
          }),
        },
      },
    })
    note: Omit<Note, 'id'>,
  ): Promise<Note> {
    return this.noteRepository.create(note);
  }

  @get('/notes/count', {
    responses: {
      '200': {
        description: 'Note model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Note)) where?: Where<Note>,
  ): Promise<Count> {
    return this.noteRepository.count(where);
  }

  @get('/notes', {
    responses: {
      '200': {
        description: 'Array of Note model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Note)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Note)) filter?: Filter<Note>,
  ): Promise<Note[]> {
    return this.noteRepository.find(filter);
  }

  @patch('/notes', {
    responses: {
      '200': {
        description: 'Note PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Note, {partial: true}),
        },
      },
    })
    note: Note,
    @param.query.object('where', getWhereSchemaFor(Note)) where?: Where<Note>,
  ): Promise<Count> {
    return this.noteRepository.updateAll(note, where);
  }

  @get('/notes/{id}', {
    responses: {
      '200': {
        description: 'Note model instance',
        content: {'application/json': {schema: getModelSchemaRef(Note)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Note> {
    return this.noteRepository.findById(id);
  }

  @patch('/notes/{id}', {
    responses: {
      '204': {
        description: 'Note PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Note, {partial: true}),
        },
      },
    })
    note: Note,
  ): Promise<void> {
    await this.noteRepository.updateById(id, note);
  }

  @put('/notes/{id}', {
    responses: {
      '204': {
        description: 'Note PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() note: Note,
  ): Promise<void> {
    await this.noteRepository.replaceById(id, note);
  }

  @del('/notes/{id}', {
    responses: {
      '204': {
        description: 'Note DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.noteRepository.deleteById(id);
  }
}
